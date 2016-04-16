var co = require('co')
var request = require('node-fetch')

function SimpleKoa(){
  this.middlewares = []
}

SimpleKoa.prototype = {
  use: function(obj) {
    this.middlewares.push(obj) 
  },

  listen: function(){
    return this._run() 
  },

  _run: function(){
    var ctx = this
    var middlewares = ctx.middlewares

    return co(function* (){
      var prev = (function*(){ })()
      var i = middlewares.length
      while(i--){
        prev = middlewares[i].call(ctx, prev)
      }
      yield prev
    })

  }
}

var app = new SimpleKoa();

app.use(function *(next){
    this.body = '1';
    this.body += yield Promise.resolve('A')
    yield (function* (a){this.body += a}).bind(this)('A')
    yield next
    this.body += '5';
    console.log(this.body);
    return 'a'
});
app.use(function *(next){
    this.body += '2';
    var tmp = yield request('https://api.github.com/users/jjvein').then(data=>{return data.json()})
    this.body += '(' + tmp.name + ')'
    yield next;
    this.body += '4';
    return 'b'
});
app.use(function *(next){
    this.body += '3';
    yield next
    return 'c'
});
app.use(function *(next){
  yield next
  return 'd'
})
app.listen().catch(err=>{console.log(err)})

