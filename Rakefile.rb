task :default => [:android]

desc "Build and install android version"
task :android do
  `cd Android && /usr/bin/ant install`
end

desc "Link JS/CSS/HTML into device resources"
task :copy do
  puts "linking..."
  Dir[Dir.pwd]
  # Files other than *.r* *.m*
  for file in Dir.glob("*.[^r|^m]*") do
    cmd = "ln #{file} Android/assets/www/#{file}"
    system cmd
  end
end