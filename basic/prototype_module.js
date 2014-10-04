var obj = module.exports = function(){
	this.count = 0;
};

obj.prototype.touch = function(){
	this.count++;
};