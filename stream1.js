var stream = require('stream')
var fs = require('fs')

var fileName = __dirname + '/stream.js'
var readable = fs.createReadStream(fileName)

readable.on('open', ()=>{
    readable.pipe(process.stdout)
})

readable.on('error', ()=> {
})
