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

if ($LASTEXITCODE -eq 0) {
    Add-Content $logFile "$timestamp | Pushed to GitHub"
} else {
    Add-Content $logFile "$timestamp | ERROR: git push failed (exit code $LASTEXITCODE)"
}
