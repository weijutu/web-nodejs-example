var net = require('net');

var cmd = {
	command: process.argv[2],
	args: []
};

for(var i = 3; i<process.argv.length; i++) {
	cmd.args.push(process.argv[i]);
}

console.log(cmd);

/*

var socket = new net.Socket();
socket.connect(56789, 'localhost', function(){
	socket.write(JSON.stringify(cmd));

	socket.on('data', function(data){
		console.log(data.toString());
	});

	socket.on('end', function(){
		process.exit();
	});
});

*/