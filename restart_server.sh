#!/bin/bash

npm -C ~/Documents/family install --production
sudo service rc.local stop
sudo service rc.local start
