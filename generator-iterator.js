//可以自定义对象的遍历函数
//注意： 
//1. 必须实现：[Symbol.iterator], 否则代码会undefined
//2. 定义的[Symbol.iterator]函数必须是一个 generator

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1
    yield pre
    yield cur
    for (;;) {
      var temp = pre
      pre = cur
      cur += temp
      yield cur
    }
  },


}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break
  console.log(n)
}

console.log('---------')

var sObj = {
  [Symbol.iterator]: function*() {
    var keys = Object.keys(this) 
    for(var i=0; i<keys.length; i++){
      yield 'ABC==>' + keys[i] 
    }
  },

  name: 'JJvein', 
  hobby: ['Swim', 'NBA', 'Guitar'], 
  location: {'bj': {'cy': 'wangjing'}}
}

for(var i of sObj) {
  console.log(i)
}
