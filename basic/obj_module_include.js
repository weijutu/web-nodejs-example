var obj = require('./obj_module');

console.log(obj.name);

for(var index in obj.supports) {
	console.log(obj.supports[index]);
}