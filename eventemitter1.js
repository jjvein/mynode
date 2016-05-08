var events = require('events');

function Door(colour) {
  this.colour = colour;
  events.EventEmitter.call(this);

  this.open = function()
  {
    this.emit('open');
  }
}

//使用这行代码能够将所有EventEmitter的属性添加到Door上。 
//只是这种方法无需在实例化对象之后再进行操作。  
//Door.prototype.__proto__ = events.EventEmitter.prototype;

var frontDoor = new Door('brown');

frontDoor.__proto__ = events.EventEmitter.prototype

frontDoor.on('open', function() {
    console.log('ring ring ring');
  });
frontDoor.open();
