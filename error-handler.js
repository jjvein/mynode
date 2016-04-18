
function boomError(handleFlag) {

  var rejectPromise = Promise.reject('Error at ' + new Date().toLocaleTimeString())

  if(handleFlag) {
    setTimeout(()=>{
      rejectPromise.catch(()=>{}) 
    }, 100) 
  }
}


boomError()

boomError(true)

const unhandledRejections = new Map()
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled ', reason)
  unhandledRejections.set(p, reason)
})

process.on('rejectionHandled', (p)=>{
  console.log('rejectHandled')
  unhandledRejections.delete(p)
})


process.on('uncaughtException', (err) => {
  console.log(`Caught Error ${err}`)

})

//虽然hello()在后面被调用， 但由于Promise可以理解为一个异步操作， 所以都在同步代码
//之后被执行。
hello()

