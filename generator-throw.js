//看generator如何抛出错误
var assert = require('assert')

var sentinel = new Error('error throw')
function* gen() {
  try{
    yield 10 
  } catch(err) {
    console.log(err.message)
  }
}

var lg = console.log
var g = gen()
lg(g.next())
lg(g.throw(sentinel))
