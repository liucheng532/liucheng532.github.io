[CmdletBinding()]
param(
    [switch]$SkipInstall
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

if (-not $SkipInstall) {
    & (Join-Path $PSScriptRoot 'setup.ps1')
} elseif (-not (Get-Command bundle -ErrorAction SilentlyContinue)) {
    throw 'Bundler is unavailable. Run scripts/setup.ps1 first.'
}

$env:JEKYLL_ENV = 'production'
bundle exec ruby scripts/validate_config.rb
if ($LASTEXITCODE -ne 0) {
    throw 'Configuration validation failed.'
}
bundle exec jekyll build --trace
if ($LASTEXITCODE -ne 0) {
    throw 'Jekyll build failed.'
}
bundle exec ruby scripts/check_site.rb _site
if ($LASTEXITCODE -ne 0) {
    throw 'Built-site reference check failed.'
}
Write-Host "Site built at $projectRoot\_site"
