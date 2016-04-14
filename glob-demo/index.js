var glob = require('glob')
var path = require('path')
var lg = console.log

var base = path.dirname(__dirname)
glob(base + '/*.js', function(err, files){
  console.log(files)
})
