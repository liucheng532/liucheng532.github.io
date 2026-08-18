#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$project_root"

if ! command -v ruby >/dev/null 2>&1; then
  echo "Ruby 3.3 is required. Install Ruby, then rerun this script." >&2
  exit 127
fi

if ! command -v bundle >/dev/null 2>&1; then
  gem install bundler --no-document
fi

bundle check >/dev/null 2>&1 || bundle install
exec bundle exec jekyll serve --host 127.0.0.1 --port "${PORT:-4000}" --livereload "$@"
