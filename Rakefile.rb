task :default => [:android]

desc "Build and install android version"
task :android => [:rm,:copy] do
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
end

task :rm do
  Dir["Android/assets/www/"]
  for file in Dir.glob("*[^phonegap].[^r|^m]*") do
    system "rm #{file}"
  end
end