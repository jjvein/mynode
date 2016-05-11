//如何确认文件是否存在
var fs = require('fs')
var filename = 'file.txt'
try{
    var stat = fs.statSync(filename)
    if(stat.isFile()) {
        console.log('Yes, ' + filename + ' is a file')
    } else {
        console.log('Not a file profile')
    }
} catch(e){
    console.log('Sorry, file ' + filename + ' not exists', e.message)
}

fs.stat(filename, function(e, stat){
    if(e) console.log(e)
    console.log(stat)
    
})

//deprecated, use fs.stat or fs.access
fs.exists(filename, function(stat){
    if(stat) {
        console.log('Yes exists!')
    } else {
        console.log('No, not exists')
    }
})


