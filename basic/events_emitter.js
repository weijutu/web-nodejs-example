var events = require('events');
var util = require('util');

var myObj = function(){
	this.count = 0;
};

//繼承 EventEmitter 做驅動事件
util.inherits(myObj, events.EventEmitter);

myObj.prototype.touch = function(){
	this.count++;
	//建立事件 觸發時呼叫的方法
	this.emit('touched', this.count);
};

//
var obj = new myObj();
obj.on('touched', function(count){
	console.log('object was touched already.' + count);
});

obj.touch();
obj.touch();
obj.touch();