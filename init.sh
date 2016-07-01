#!/bin/bash

#!/bin/bash

if [ ! -f webcar-gui.js ]; then
	logger "webcar-gui is about to start!"
	cd /usr/share/webcar-gui
fi

echo "webcar-gui init script start"
echo "Checking npm modules"
npm install --save
echo "npm module is ready and starting the nodejs server"
node webcar-gui.js &


logger "webcar-gui has started!"
