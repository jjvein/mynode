//arr.forEach 支持传递上下文，Just an example

function Counter(){
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array){

  //这里的this指向函数的实例化对象
  //所以能够取到 this.sum, this.count
  var that = this
  if(array.length){
    array.forEach(function(item){
      this.sum += item
      ++ this.count    
    }, that)
  }

  return [this.sum, this.count]
}

var co = new Counter
var lg = console.log
var ret = co.add([1, 2, 3, 4, 5])

lg(ret)


