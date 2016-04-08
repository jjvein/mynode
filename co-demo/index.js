var co = require('co')

co(function*(){
  var ret = yield Promise.resolve(true)
  return ret
}).then(function(value){
  console.log('value==>', value)
}, function(error){
  console.log('error==>', error)
})

co(function* (){
  var a = 3
  var ret = yield new Promise(function(resolve,reject){
    var time = setTimeout(()=> {
      resolve(a + 3) 
    }, 1000)
    if(!time) {
      reject('No') 
    }
  })
  return ret
}).then(function(value){
  console.log('value==>', value)
}, function(error){
  console.log('error==>', error)
})

var fn = co.wrap(function* (value){
  value = value + 1
  return yield Promise.resolve(value)
})

fn(13).then((value)=> {return value}).then((value)=>console.log(value))



co(function* (){
  var a = Promise.resolve(1)
  var b = Promise.resolve(2)
  var c = Promise.resolve(3)

  var ret = yield [a, b, c]
  console.log(ret)
  return ret
})

co(function*(){
  try{
    yield Promise.reject(new Error('Boom')) 
  } catch(err) {
    console.error(err.message) 
    throw err
  }
}).catch((err) => {console.log(err.message)})

var p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise(function(resolve, reject) {
  reject("reject");
});


co(function* (){
  
  var p 
  p = yield p1
  console.log(p)
  p = yield Promise.all([p1, p2, p3, p4])
  console.log(p)
  return p
})

