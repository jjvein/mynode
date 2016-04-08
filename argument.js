
log = console.log
var fun = function() {
    log(typeof(arguments))
    log(Object.prototype.toString.call(arguments))
    log(Array.prototype.slice.call(arguments))
}


fun(1,2)
