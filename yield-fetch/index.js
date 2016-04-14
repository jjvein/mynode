
var fetch = require('node-fetch')

function* gen(){

  var url = "https://api.github.com/users/github"
  var y = yield fetch(url)

  console.log(y)
  console.log(y.bio)

}

var g = gen()
var ret = g.next()

//这里通过这种方式实现将yield返回的结果赋值给y。 具体请参考： 
//http://www.ruanyifeng.com/blog/2015/04/generator.html

ret.value.then(function(data){
  return data.json()
}).then(function(data){
  g.next(data)
}).catch(function(err){
  console.log(err)
})

