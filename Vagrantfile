# -*-ruby-*-
Vagrant::Config.run do |config|

  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  config.vm.forward_port 4000, 8194
#  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision :shell,
    :inline => "sudo apt-get update && sudo apt-get -y install make tmux build-essential git asciidoc nodejs ruby1.9.3 && sudo gem install jekyll github-pages --no-ri --no-rdoc"

  config.ssh.forward_agent = true
end
