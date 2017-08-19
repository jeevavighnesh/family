#!/bin/bash

echo $PWD
npm -C ./ install --production
node ./server.js
