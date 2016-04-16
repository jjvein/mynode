var co = require('co')

var lg = console.log, ret

ret = co([1, 2, 3])

console.log(ret.then(value=>{lg(value)}))


ret = co(function* (){

    var a = 10
    var ret = yield [a]

    return ret
})
lg(ret.then(value=> {lg(value)}))

