var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    //作用: 继承
    Base.call(this)
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();

objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
objSub.sayHello();
console.log(objSub);

