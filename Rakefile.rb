task :default => [:android]

desc "Build and install android version"
task :android => [:copy] do
  `cd Android && /usr/bin/ant install`
end

desc "copy JS/CSS/HTML into device resources"
task :copy do
  Dir[Dir.pwd]
  # Files other than *.r* *.m*
  for file in Dir.glob("*.[^r|^m]*") do
    cmd = "cp #{file} Android/assets/www/#{file}"
    system cmd
  end
  #copy folders.
  for folder in ['js','css'] do
    Dir[Dir.pwd + '/' + folder]
    for file in Dir.glob("*.*") do
      system "cp #{file} Android/assets/www/#{folder}/#{file}"
    end
  end
end