var socket = io('http://localhost');

// Connect My event
socket.on('connect', function(){
	socket.emit('my event', {data: 'Frontend connected!'});
});


// Disconnect handler, Feel free to write your own
socket.on('disconnect', function(){});


// Media player
$('.media-player').on('click', function() {
	socket.emit('my event', {data: 'Media button Clicked!'});
})

$('.phone-event').on('click', function() {
	alert("Phone Clicked")
})