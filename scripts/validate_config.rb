# frozen_string_literal: true

require "yaml"

files = %w[
  _config.yml
  _data/content.yml
  _data/navigation.yml
  .github/dependabot.yml
  .github/workflows/pages.yml
]

files.each do |file|
  YAML.safe_load_file(file, aliases: true)
  puts "YAML OK: #{file}"
end
