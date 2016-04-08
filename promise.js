var fs = require('fs')
var file = 'file.txt'
function asyncFunction() {
    return new Promise(function(resolve, reject){
/*        var content = fs.readFile(file, "utf-8", function(err, ret){
            if(err)
                console.log(err)

            resolve(ret)
        })            
            */
            resolve('abc')
    })
}

asyncFunction().then(function(ret){
    console.log(ret) 
    return ret
}).then(function(ret){
    var upper = ret.toUpperCase()
    console.log(upper)
}).catch(function(err){
    console.log(err)
})
