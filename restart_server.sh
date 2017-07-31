#!/bin/bash

npm -C ~/Documents/family install --production
sudo killall node
node /home/pi/Documents/family/server.js