# sync-cv.ps1 — Copy CV from Dropbox to repo and push if changed
# Runs via Windows Task Scheduler on both machines

# Detect machine
$username = $env:USERNAME
if ($username -eq "Sacony") {
    $cvSource = "C:\Users\Sacony\Dropbox\Academic\Admin\CV\Sukhun Kang - CV.pdf"
    $repoRoot = "C:\Users\Sacony\Dropbox\Academic\Admin\Personal Website\sukhunkang.github.io"
} elseif ($username -eq "Sukhun") {
    $cvSource = "C:\Users\Sukhun\Dropbox\Academic\Admin\CV\Sukhun Kang - CV.pdf"
    $repoRoot = "C:\Users\Sukhun\Dropbox\Academic\Admin\Personal Website\sukhunkang.github.io"
} else {
    Write-Host "Unknown machine: $username"
    exit 1
}

$cvDest = Join-Path $repoRoot "public\Sukhun-Kang-CV.pdf"
$logFile = Join-Path $repoRoot "scripts\sync-cv.log"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Check source exists
if (-not (Test-Path $cvSource)) {
    Add-Content $logFile "$timestamp | ERROR: Source CV not found at $cvSource"
    exit 1
}

# Compare files
$sourceHash = (Get-FileHash $cvSource -Algorithm SHA256).Hash
$destHash = if (Test-Path $cvDest) { (Get-FileHash $cvDest -Algorithm SHA256).Hash } else { "" }

if ($sourceHash -eq $destHash) {
    Add-Content $logFile "$timestamp | No changes"
    exit 0
}

# Copy updated CV
Copy-Item $cvSource $cvDest -Force
Add-Content $logFile "$timestamp | CV updated (hash changed)"

# Git commit and push
Set-Location $repoRoot
git add "public/Sukhun-Kang-CV.pdf"
git commit -m "Update CV from local Dropbox"
git push origin main

if ($LASTEXITCODE -ne 0) {
    Add-Content $logFile "$timestamp | ERROR: git push failed (exit code $LASTEXITCODE)"
    exit 1
}
Add-Content $logFile "$timestamp | Pushed to GitHub"

# Verify the GitHub Pages deploy actually published the new CV.
# A successful push does NOT mean the Pages deploy succeeded; the build+deploy
# workflow runs afterward and can fail silently. Poll the live URL until its
# hash matches the source, or log an error if it never does.
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$liveUrl     = "https://sukhunkang.com/Sukhun-Kang-CV.pdf"
$liveTmp     = Join-Path $env:TEMP "sync-cv-live-check.pdf"
$maxWaitSec  = 600
$pollSec     = 30
$elapsed     = 0
$verified    = $false

while ($elapsed -lt $maxWaitSec) {
    Start-Sleep -Seconds $pollSec
    $elapsed += $pollSec
    $bust = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()  # cache-bust the CDN
    try {
        Invoke-WebRequest -Uri "$liveUrl`?v=$bust" -OutFile $liveTmp -UseBasicParsing -TimeoutSec 30
        $liveHash = (Get-FileHash $liveTmp -Algorithm SHA256).Hash
        if ($liveHash -eq $sourceHash) {
            $verified = $true
            break
        }
    } catch {
        # transient network/deploy-in-progress error; keep polling
    }
}

$verifyTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
if ($verified) {
    Add-Content $logFile "$verifyTime | Verified live ($elapsed s)"
} else {
    Add-Content $logFile "$verifyTime | ERROR: live CV not updated after $maxWaitSec s; Pages deploy likely failed. Re-trigger with: git commit --allow-empty -m 'Re-trigger Pages deploy'; git push origin main"
}
