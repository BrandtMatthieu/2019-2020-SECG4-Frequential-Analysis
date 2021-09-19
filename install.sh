wget -qO- https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs npm
npm i
npm run-script compile
npm run-script help
