function timerPromisefy(delay){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(delay)
        }, delay) 
    })
}
var startTime = Date.now()
Promise.all([timerPromisefy(1), timerPromisefy(100), timerPromisefy(1000)])
    .then(function(values){
        console.log(Date.now() - startTime + 'ms')
        console.log(values)
    })
