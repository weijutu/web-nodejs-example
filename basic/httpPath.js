var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(function(req, res){
	var filename = url.parse(req.url).pathname;

	var filepath = path.join(__dirname, filename);

	fs.exists(filepath, function(exists){
		if(!exists) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('Not Founded');
			return;
		}

		fs.readFile(filepath, function(err, content){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end(content);
		});
	});
}).listen(2222);