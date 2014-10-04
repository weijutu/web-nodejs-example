var http = require('http');

var server = http.createServer(function(req, response){
	var body = 'hello world';
	response.writeHead(200, {
  		'Content-Length': body.length,
  		'Content-Type': 'text/plain' 
  	});

  	response.end('Hello helen');
});

server.listen(12345);

console.log('server running: port 12345');