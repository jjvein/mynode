var fs = require('fs')
fs.readFileSync('file.txt', 'utf-8', function(err, data){
    if(err) {
        //throw err
        console.error('Error')
    }
    console.log('File Data:' + data)

})
console.log('Complete readFile...')
