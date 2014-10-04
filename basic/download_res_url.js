var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

var targetURL = "http://www.yahoo.com.tw"|| null;
if (!targetURL) {
	console.log('url?');
	process.exit();
}

var urlObj = url.parse(targetURL);

var req = http.request({
	hostname: urlObj.hostname,
	path: urlObj,
	method: 'GET'
}, function(res){
	var filename = path.basename(urlObj.path);
	fs.exists(filename, function(exists){
		if (exists) {
			fs.unlink(filename, function(err){
				saveFile();
			});
			return;
		}
		saveFile();
	});

	function saveFile(){
		res.on('data', function(chunk){
			fs.appendFileSync(filename, chunk);
		});

		res.on('end', function(chunk){
			process.exit();
		});
	}
	
});


