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


//(() =>'footbar')()

//return undefined
var empty = () => {}
l(empty())

var simple = x => x > 15 ? 15 : x
l(simple(16))
l(simple(10))


var max = (a,b) => a > b ? a : b

l(max(3, 2))
l(max(2, 3))

var arr = [1, 2, 3, 4, 5]
var sum = arr.reduce((a,b)=> a + b)
var even = arr.filter(v=> v % 2 == 0)
var dou =  arr.map(v => v * 2)

l('sum', sum)
l('even', even)
l('dou', dou)
