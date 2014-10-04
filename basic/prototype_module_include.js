var test = require('./prototype_module');

var testobj = new test();
testobj.touch();
testobj.touch();

console.log(testobj.count);