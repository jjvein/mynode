var koa = require('koa')

var app = koa()

app.use(function*(next) {

  this.body = 'hello world'
})

app.listen(3000)


