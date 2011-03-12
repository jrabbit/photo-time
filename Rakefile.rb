task :default => [:android]

desc "Build and install android version"
task :android do
  `cd Android && /usr/bin/ant install`
end

desc "Link JS/CSS/HTML into device resources"
task :copy do
  puts "linking..."
  for file in ['favicon.ico',  'index.html',  'javascript.js',  'phototime.css', 'head.min.js'] do
    cmd = "ln #{file} Android/assets/www/#{file}"
    system cmd
  end
end