[CmdletBinding()]
param(
    [int]$Port = 4000,
    [switch]$NoLiveReload
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

if (-not (Get-Command bundle -ErrorAction SilentlyContinue)) {
    & (Join-Path $PSScriptRoot 'setup.ps1')
} else {
    bundle check *> $null
    if ($LASTEXITCODE -ne 0) {
        & (Join-Path $PSScriptRoot 'setup.ps1')
    }
}

$serveArgs = @('exec', 'jekyll', 'serve', '--host', '127.0.0.1', '--port', $Port.ToString())
if (-not $NoLiveReload) {
    $serveArgs += '--livereload'
}

Write-Host "Opening local preview at http://127.0.0.1:$Port"
& bundle @serveArgs
if ($LASTEXITCODE -ne 0) {
    throw 'Jekyll preview server exited with an error.'
}
