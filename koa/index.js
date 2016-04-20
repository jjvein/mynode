
var koa = require('koa')
var favicon = require('koa-favicon')
var bodyParser = require('koa-bodyparser')
var staticFile = require('koa-static')
var router = require('koa-trie-router')
var error = require('koa-onerror')
var swig = require('swig')
var app = koa();

app.env = 'development'
// logger
app.use(favicon(__dirname + '/public/favicon.ico'), {maxAge: 86400000})

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('Method: %s, Query: %s - Second: %ss', this.method, this.url, ms)
  this.set('X-response-time', ms)
});

app.use(function* (next){
  return yield next
  //throw new Error('demo error')
})
app.use(bodyParser())
app.use(router(app))
app.use(staticFile('.'))
// response

app.route('/abc').get(function* (){
  this.name = 'jjvein'
  var template = swig.compileFile(__dirname + '/public/abc.html')
  var data = {
    title: 'ABC English',
    books: ['ABC Unit 1', 'ABC Unit 2', 'ABC Unit3']
  }
  this.body = template(data)

})

app.get('/json/:id', function* (next){

  var json = {name: 'jjvein', hobby: 'melody'}
  this.body = JSON.stringify(json)
})
error(app)
app.listen(3000);


