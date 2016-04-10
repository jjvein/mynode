
var koaCompose = require('koa-compose')

function* a(next) {
  var a = 3; 
  yield next;
  console.log(a)

}

function* b(){
  return Promise.resolve(true)
}

var ret = koaCompose([a, b])


console.log(ret())

