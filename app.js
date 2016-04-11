// Initialize with below npm modules 
var http = require('http');
var express = require('express');
var app = module.exports.app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// Running port ( in this case localhost)
server.listen(80);

// Static
app.use('/static', express.static(__dirname + '/public'));

// Render files and declare url confs
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// For socketio
io.on('connection', function (socket) {
  socket.on('my event', function (data) {
    console.log('received message', data);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});