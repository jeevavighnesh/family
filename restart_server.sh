#!/bin/bash

npm -C ~/Documents/family install --production
sudo killall node
node -C ~/Documents/family server.js