#!/bin/bash
echo "webcar-gui init script start"
echo "Checking npm modules"
npm install --save
echo "npm module is ready and starting the nodejs server"
nodejs webcar-gui.js
