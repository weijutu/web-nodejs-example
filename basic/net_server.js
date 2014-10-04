var net = require('net');
var child_process = require('child_process');

//create server
var server = net.createServer();
server.listen(56789);

server.on('connection', function(socket){
	var child = null;
	var cmdStr = '';

	socket.on('data', function(data){
		cmdStr += data.toString();

		if (data.toString().indexOf('\n') == -1) {
			return;
		}

		var cmd = JSON.parse(data);
		child = child_process.spawn(cmd.command, cmd.args);

		child.stdout.on('data', function(output){
			socket.write(output);
		});

		child.on('end', function(){
			socket.destroy();
			child = null;
		});
	});

	socket.on('end', function(){
		if (child)
			child.kill();
	});
});