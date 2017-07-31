#!/bin/bash

npm -C ~/Documents/family install --production
sudo killall node
node server.js