var fs = require('fs');

var file = 'myfile.txt';
fs.exists(file, function(exists){
	if(exists) 
		console.log('exists!');
	else 
		console.log('no exists');
});

fs.readFile(file, function(err, content){
	if (err)
	{
		console.log('failed to read');
		return;
	}

	console.log(content);
});