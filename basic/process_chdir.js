console.log('Starting directory:' + process.cwd());

try {
	process.chdir('/tmp');
	console.log('new dir:' + process.cwd());
} catch (err) {
	console.log(err);
}