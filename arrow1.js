/*
  箭头函数的this指向问题
  call && apply 无法改变this的指向。

*/

var adder ={
  base: 1,
  add: function(a) {
    var f = v => v + this.base 

    return f(a)
  },

  addCall: function(a) {
    var f = v => v + this.base

    var obj = {
      base: 3 
    }

    return f.call(obj, a)
  }
}

var l = console.log

l(adder.add(1))
//2
l(adder.addCall(1))
//2
//并没有将函数的this绑定到obj上。



