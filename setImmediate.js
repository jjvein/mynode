var fs = require('fs')

;(function(global){
  
  if(!global.setImmediate) {
    global.setImmediate = function(func, args){
      global.setTimeout(func, args) 
    } 
  }

  global.clearImmediate = global.clearTimeout

})(global)

console.log('First ...')
setImmediate(()=>{
  fs.lstat('file.txt', (err, stat)=>{
    console.log(stat) 
  })  
})

console.log('Second...')
