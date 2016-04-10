//函数递归调用, 
//重要的就是“基准情形”
//

var fun = function(n){
  if(n <= 1) {
    //基准情形
    return 1 
  } else {
    return n*fun(n-1) 
  }
}

console.log(fun(5))


//下面很容易就创建一个调用栈溢出
var fun1 = function(a, b) {
  if(a==0 && b == 8) {
    
    console.log('Finish')
    return a % b
  } else {
    return fun1(a-1, b) 
  }
}

fun1(3, 8)
try{
  //fun1(3, 7)
} catch(e) {
  console.log(e.message, e.stack)
}
