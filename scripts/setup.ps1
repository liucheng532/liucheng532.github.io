[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

function Add-RubyToCurrentPath {
    $rubyCandidates = Get-ChildItem -Path 'C:\' -Directory -Filter 'Ruby*-x64' -ErrorAction SilentlyContinue |
        Sort-Object Name -Descending
    foreach ($candidate in $rubyCandidates) {
        $binPath = Join-Path $candidate.FullName 'bin'
        if (Test-Path -LiteralPath (Join-Path $binPath 'ruby.exe')) {
            $env:Path = "$binPath;$env:Path"
            return
        }
    }
}

Add-RubyToCurrentPath

if (-not (Get-Command ruby -ErrorAction SilentlyContinue)) {
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        throw 'Ruby is not installed and winget is unavailable. Install Ruby+Devkit 3.3, then rerun this script.'
    }

    Write-Host 'Installing Ruby 3.3 with MSYS2 DevKit...'
    winget install --id RubyInstallerTeam.RubyWithDevKit.3.3 --exact --silent `
        --accept-package-agreements --accept-source-agreements --disable-interactivity
    Add-RubyToCurrentPath
}

if (-not (Get-Command ruby -ErrorAction SilentlyContinue)) {
    throw 'Ruby was installed but is not visible in this terminal. Open a new PowerShell window and rerun scripts/setup.ps1.'
}

if (-not (Get-Command bundle -ErrorAction SilentlyContinue)) {
    Write-Host 'Installing Bundler...'
    gem install bundler --no-document
    if ($LASTEXITCODE -ne 0) {
        throw 'Bundler installation failed.'
    }
}

ruby --version
bundle --version
$bundleInstallPath = Join-Path $env:LOCALAPPDATA 'JekyllBundles\liucheng532.github.io'
New-Item -ItemType Directory -Path $bundleInstallPath -Force | Out-Null
bundle config set --local path $bundleInstallPath
bundle install
if ($LASTEXITCODE -ne 0) {
    throw 'Bundle installation failed. Review the error output above.'
}

Write-Host 'Environment ready. Start the site with: .\scripts\serve.ps1'
