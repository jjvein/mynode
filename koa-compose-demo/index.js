
var koaCompose = require('koa-compose')

function* a(next) {
  var a = 3; 
  console.log(a)
  yield next;


}

function* b(){
  return Promise.resolve(true)
}

var ret = koaCompose([a, b])


console.log(ret().next())

