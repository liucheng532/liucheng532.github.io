# frozen_string_literal: true

require "pathname"
require "uri"

site_root = Pathname.new(ARGV.fetch(0, "_site")).expand_path
abort("Built site not found: #{site_root}") unless site_root.directory?

missing = []
attribute_pattern = /\b(?:href|src)=["']([^"']+)["']/i
ignored_prefixes = %w[http:// https:// mailto: tel: javascript: data: //]

Dir.glob(site_root.join("**", "*.html")).sort.each do |html_path|
  html = File.read(html_path, encoding: "UTF-8")
  html.scan(attribute_pattern).flatten.uniq.each do |reference|
    next if reference.empty? || reference.start_with?("#")
    next if ignored_prefixes.any? { |prefix| reference.start_with?(prefix) }

    clean_reference = reference.split(/[?#]/, 2).first
    next if clean_reference.nil? || clean_reference.empty?

    decoded = URI::DEFAULT_PARSER.unescape(clean_reference)
    target = if decoded.start_with?("/")
               site_root.join(decoded.delete_prefix("/"))
             else
               Pathname.new(html_path).dirname.join(decoded)
             end
    target = target.join("index.html") if target.directory?

    missing << [Pathname.new(html_path).relative_path_from(site_root), reference] unless target.exist?
  end
end

if missing.any?
  warn "Broken internal references:"
  missing.each { |page, reference| warn "  #{page}: #{reference}" }
  exit 1
end

puts "Internal reference check passed for #{Dir.glob(site_root.join('**', '*.html')).size} HTML file(s)."
