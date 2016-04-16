var co = require('co')

var lg = console.log, ret

ret = co([1, 2, 3])

console.log(ret.then(value=>{lg(value)}))


ret = co(function* (){
  
  var a = 10
  var ret = yield [a]
  var ret1 = yield {name: 'foo', age: 23}

  var sum = ret[0] + ret1.age

  return sum
})

lg(ret.then(value=> {lg(value)}))

