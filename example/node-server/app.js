// note, io(<port>) will create a http server for you
var io = require('socket.io')(5000);

io.on('connection', function (socket) {
  io.emit('this', { will: 'be received by everyone'});

  socket.on('my event', function (data) {
    console.log('received message', data);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});