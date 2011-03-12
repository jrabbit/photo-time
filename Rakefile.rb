task :default => [:android]

desc "Build and install android version"
task :android do
  `cd Android && /usr/bin/ant debug install`
end

desc "Link JS/CSS/HTML into device resources"
task :copy do
  puts "linking..."
  for file in ['favicon.ico',  'index.html',  'javascript.js',  'phototime.css'] do
    cmd = "ln -s #{file} Android/assets/www/#{file}"
    system cmd
  end
end