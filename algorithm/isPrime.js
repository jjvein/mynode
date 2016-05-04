//判断是否是素数的代码， 并结合了Array.prototype.find
//代码简洁

function isPrime(ele){
  var start = 2
  var sqrtVal = Math.sqrt(ele)
  while(start <= sqrtVal) {
    //这里start++, 先%start, 后start + 1
    if(ele % start++ < 1) {
      return false 
    } 
  }

  //计算的值必须是大于1
  return ele > 1
}

var ret, arr, l = console.log
arr = [2, 4, 6, 8, 9]
ret = arr.find(isPrime)
l(ret)

arr = [4, 5, 8]
ret = arr.find(isPrime)
l(ret)

