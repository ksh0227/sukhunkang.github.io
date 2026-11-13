# sync-cv.ps1: publish the CV. Copies the rendered PDF from the CV project into
# public/, regenerates the /cv page data (src/app/data/cv.json) from the same
# cv.qmd, builds the site and checks the page against the PDF, then commits
# those two files only, pushes, and confirms the deploy and the live page,
# whose words it checks against the PDF on every run.
#
# Run by hand right after rendering the CV, as part of the CV update:
#   powershell -ExecutionPolicy Bypass -File scripts/sync-cv.ps1 [-DryRun]
# -DryRun changes nothing (no copy, no write, no commit) and says what a real
# run would publish.
#
# It is no longer scheduled: the daily Task Scheduler job "Sync CV to GitHub"
# was disabled on the Desktop on 2026-11-03 at the user's request (re-enable
# with schtasks /Change /TN "Sync CV to GitHub" /ENABLE). Because a person is
# watching, any problem stops the run with an ERROR and exit 1 before anything
# is committed; a stopped run leaves its copies in the working tree, and the
# next run picks them up from git.

param([switch]$DryRun)

# node and git print en-dashes and curly quotes; keep them intact in the log.
[Console]::OutputEncoding = [Text.Encoding]::UTF8

# Detect machine
$username = $env:USERNAME
if ($username -eq "Sacony") {
    $repoRoot = "C:\Users\Sacony\Dropbox\Academic\Admin\Personal Website\sukhunkang.github.io"
} elseif ($username -eq "Sukhun") {
    $repoRoot = "C:\Users\Sukhun\Dropbox\Academic\Admin\Personal Website\sukhunkang.github.io"
} else {
    Write-Host "Unknown machine: $username"
    exit 1
}

# The CV project sits beside the repo: Personal Website\CV
$cvDir    = Join-Path (Split-Path $repoRoot -Parent) "CV"
$cvSource = Join-Path $cvDir "Sukhun Kang - CV.pdf"
$cvQmd    = Join-Path $cvDir "cv.qmd"
$cvDest   = Join-Path $repoRoot "public\Sukhun-Kang-CV.pdf"
$pdfPath  = "public/Sukhun-Kang-CV.pdf"
$jsonPath = "src/app/data/cv.json"
$logFile  = Join-Path $repoRoot "scripts\sync-cv.log"

function Log($message) {
    if ($DryRun) { Write-Host "[dry run] $message"; return }
    Write-Host $message
    Add-Content -Path $logFile -Value "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | $message" -Encoding UTF8
}
function Fail($message) {
    Log "ERROR: $message"
    exit 1
}
function Invoke-Git {
    & git @args
    if ($LASTEXITCODE -ne 0) { Fail "git $($args -join ' ') failed (exit $LASTEXITCODE)" }
}

# The live /cv page, checked word for word against the PDF by running
# check-cv-page.mjs on the downloaded page. Every real run does this, "No
# changes" included (user, 2026-11-13: "everytime CV page also should be
# checked"). Saved with -OutFile so the bytes reach node undecoded.
function Test-LiveCvPage {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $liveHtml = Join-Path $env:TEMP "sync-cv-live-check.html"
    $bust = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
    try {
        Invoke-WebRequest -Uri "https://sukhunkang.com/cv/?v=$bust" -OutFile $liveHtml -UseBasicParsing -TimeoutSec 30
    } catch {
        Log "ERROR: could not download the live CV page: $($_.Exception.Message)"
        return $false
    }
    $out = & node scripts/check-cv-page.mjs --html $liveHtml 2>&1
    if ($LASTEXITCODE -ne 0) {
        Log "ERROR: the live CV page does not match the PDF: $($out -join ' ')"
        return $false
    }
    Log "Live CV page checked against the PDF: $($out | Select-Object -Last 2 | Select-Object -First 1)"
    return $true
}

if (-not (Test-Path $cvSource)) { Fail "Source CV not found at $cvSource" }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Fail "node not found" }
Set-Location $repoRoot

# 0. Publish from main, level with origin: never on top of commits this run
#    did not make, and never behind the other machine.
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne "main") { Fail "on branch '$branch'; publish from main" }
git fetch origin main --quiet
if ($LASTEXITCODE -ne 0) { Fail "git fetch failed" }
$behind = [int](git rev-list --count HEAD..origin/main)
$ahead  = [int](git rev-list --count origin/main..HEAD)
if ($behind -gt 0) { Fail "local main is $behind commit(s) behind origin; git pull first" }
if ($ahead -gt 0)  { Fail "local main has $ahead unpushed commit(s); push or review them first, then rerun" }

# 1. The PDF must be rendered from the current cv.qmd, so the page and the PDF
#    show the same edit.
if ((Get-Item $cvQmd).LastWriteTime -gt (Get-Item $cvSource).LastWriteTime) {
    Fail "cv.qmd was edited after the last render; render the PDF first"
}

# 2. The PDF. Whether it changed comes from git, not from this run's memory,
#    so a copy left by a stopped run is still published.
$sourceHash = (Get-FileHash $cvSource -Algorithm SHA256).Hash
$destHash = if (Test-Path $cvDest) { (Get-FileHash $cvDest -Algorithm SHA256).Hash } else { "" }
if (-not $DryRun -and $sourceHash -ne $destHash) { Copy-Item $cvSource $cvDest -Force }
$pdfChanged = ($sourceHash -ne $destHash) -or [bool](git status --porcelain -- $pdfPath)

# 3. The page data, from the same cv.qmd.
$genArgs = @("scripts/build-cv-data.mjs")
if ($DryRun) { $genArgs += "--dry-run" }
$gen = & node @genArgs 2>&1
if ($LASTEXITCODE -ne 0) { Fail "build-cv-data.mjs refused cv.qmd: $($gen -join ' ')" }
Log "$($gen | Select-Object -First 1)"
$jsonChanged = [bool](git status --porcelain -- $jsonPath) -or ($DryRun -and [bool]($gen -match "would change"))

if (-not $pdfChanged -and -not $jsonChanged) {
    Log "No changes"
    if (-not $DryRun -and -not (Test-LiveCvPage)) { exit 1 }
    exit 0
}

$paths = @()
if ($pdfChanged)  { $paths += $pdfPath }
if ($jsonChanged) { $paths += $jsonPath }
$what = if ($pdfChanged -and $jsonChanged) { "CV PDF and page" } elseif ($pdfChanged) { "CV PDF" } else { "CV page" }

if ($DryRun) {
    Log "would build the site, check the page against the PDF, commit $($paths -join ', '), and push main"
    exit 0
}

# 4. Build the site and check the page against the PDF before anything is
#    committed (scripts/check-cv-page.mjs). Builds here often hit EBUSY on
#    .next/export once; three tries with a pause clears it.
$built = $false
for ($try = 1; $try -le 3 -and -not $built; $try++) {
    $buildOut = & npx --no-install next build 2>&1
    if ($LASTEXITCODE -eq 0) { $built = $true } else { Start-Sleep -Seconds 20 }
}
if (-not $built) { Fail "next build failed 3 times; nothing committed: $(($buildOut | Select-Object -Last 5) -join ' ')" }
$check = & node scripts/check-cv-page.mjs 2>&1
if ($LASTEXITCODE -ne 0) { Fail "the page does not match the PDF; nothing committed: $($check -join ' ')" }
Log "Page checked against the PDF: $($check | Select-Object -Last 2 | Select-Object -First 1)"

# 5. Commit and push these paths only, never anything else in the tree.
$cv = Get-Content $jsonPath -Raw -Encoding UTF8 | ConvertFrom-Json
Invoke-Git add -- @paths
Invoke-Git commit -m "Update $what (CV last updated $($cv.lastUpdated))" -- @paths
Invoke-Git push origin main
Log "Pushed to GitHub ($($paths -join ', '))"

# 6. Verify the deploy. A successful push does NOT mean the GitHub Pages
#    deploy succeeded, and a failed deploy is never retried until the next push.
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$maxWaitSec = 600
$pollSec    = 30
$rerun      = "Re-trigger with: git commit --allow-empty -m 'Re-trigger Pages deploy'; git push origin main"
$failed     = $false

# 6a. The workflow run for this commit.
$sha = (git rev-parse HEAD).Trim()
$runsUrl = "https://api.github.com/repos/ksh0227/sukhunkang.github.io/actions/runs?head_sha=$sha"
$elapsed = 0
$conclusion = $null
while ($elapsed -lt $maxWaitSec) {
    Start-Sleep -Seconds $pollSec
    $elapsed += $pollSec
    try {
        $run = (Invoke-RestMethod -Uri $runsUrl -Headers @{ "User-Agent" = "sync-cv" } -TimeoutSec 30).workflow_runs | Select-Object -First 1
        if ($run -and $run.status -eq "completed") { $conclusion = $run.conclusion; break }
    } catch {
        # transient network or API error; keep polling
    }
}
if ($conclusion -eq "success") {
    Log "Deploy run succeeded ($elapsed s)"
} else {
    $failed = $true
    $state = if ($conclusion) { "ended '$conclusion'" } else { "did not complete in $maxWaitSec s" }
    Log "ERROR: deploy run for $sha $state. $rerun"
}

# 6b. The live PDF, when it changed: its hash must match the source.
if ($pdfChanged -and -not $failed) {
    $liveTmp  = Join-Path $env:TEMP "sync-cv-live-check.pdf"
    $elapsed  = 0
    $verified = $false
    while ($elapsed -lt $maxWaitSec) {
        $bust = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()  # cache-bust the CDN
        try {
            Invoke-WebRequest -Uri "https://sukhunkang.com/Sukhun-Kang-CV.pdf?v=$bust" -OutFile $liveTmp -UseBasicParsing -TimeoutSec 30
            if ((Get-FileHash $liveTmp -Algorithm SHA256).Hash -eq $sourceHash) { $verified = $true; break }
        } catch {
            # transient network/deploy-in-progress error; keep polling
        }
        Start-Sleep -Seconds $pollSec
        $elapsed += $pollSec
    }
    if ($verified) { Log "Verified live PDF ($elapsed s)" }
    else { $failed = $true; Log "ERROR: live PDF not updated after $maxWaitSec s. $rerun" }
}

# 6c. The live page, when its data changed: it must carry the new version.
if ($jsonChanged -and -not $failed) {
    $elapsed  = 0
    $verified = $false
    while ($elapsed -lt $maxWaitSec) {
        $bust = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
        try {
            $html = (Invoke-WebRequest -Uri "https://sukhunkang.com/cv/?v=$bust" -UseBasicParsing -TimeoutSec 30).Content
            if ($html -match "data-cv-version=`"$($cv.version)`"") { $verified = $true; break }
        } catch {
            # keep polling
        }
        Start-Sleep -Seconds $pollSec
        $elapsed += $pollSec
    }
    if ($verified) { Log "Verified live CV page, version $($cv.version) ($elapsed s)" }
    else { $failed = $true; Log "ERROR: live CV page does not show version $($cv.version) after $maxWaitSec s. $rerun" }
}

# 6d. The live page's words, against the PDF, on every run.
if (-not $failed -and -not (Test-LiveCvPage)) { $failed = $true }

if ($failed) { exit 1 }
