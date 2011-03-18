task :default => [:android]

desc "Build and install android version"
task :android => [:copy] do
  `cd Android && /usr/bin/ant install`
end

directory "Android/assets/www/js/"
directory "Android/assets/www/css/"

desc "copy JS/CSS/HTML into device resources"


task :copy => ["Android/assets/www/css/","Android/assets/www/js/"] do
  Dir[Dir.pwd]
  # Files other than *.r* *.m*
  for file in Dir.glob("*.[^r|^m]*") do
    cmd = "cp #{file} Android/assets/www/#{file}"
    system cmd
  end

  #copy folders.
  for folder in Dir['[^A|^t]*/'] do
    for file in Dir[Dir.pwd + "/" + folder +"*"] do
      name = file.split('/')[-1]
      system "cp #{file} Android/assets/www/#{folder}#{name}"
    end
  end
end