#!/bin/bash

#
# chkconfig: 35 90 12
# description: Foo server
#
# Get function from functions library
. /etc/init.d/functions
curdir=$PWD

# Start the service FOO
start() {
	logger "echo -n Starting webcar-gui server: "

	#echo "webcar-gui init script start"
	#echo "Checking npm modules"
	cd /usr/share/webcar-gui
	npm install --save
	logger "echo -n npm module is ready and starting the nodejs server"
	nodejs webcar-gui.js &
	cd $curdir

	### Create the lock file ###
	touch /var/lock/subsys/webcar-gui
	success $"webcar-gui server startup"
	echo
}

# Restart the service webcar-gui
stop() {
	logger "echo -n Stopping webcar-gui server: "
	#killproc webcar-gui
	logger "Can't restart webcar-gui, as the design is not in place!"
	### Now, delete the lock file ###
	rm -f /var/lock/subsys/webcar-gui
	echo
}

### main logic ###
case "$1" in
	start)
		start
		;;
	stop)
		stop
		;;
	status)
		status FOO
		;;
	restart|reload|condrestart)
		stop
		start
		;;
	*)
		echo $"Usage: $0 {start|stop|restart|reload|status}"
		exit 1
esac
exit 0
