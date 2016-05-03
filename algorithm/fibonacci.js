
/*
  计算第n个fibonacci数列的值
*/
function fibonacci(index) {
  var first = 0
  var second = 1
  var tmp

  while(index > 0) {
    tmp = first
    first = second
    second += tmp

    index --
  }

  return first
  
}


var l = console.log, ret

ret = fibonacci(0)
l(ret)
ret = fibonacci(1)
l(ret)
ret = fibonacci(2)
l(ret)
ret = fibonacci(3)
l(ret)
ret = fibonacci(4)
l(ret)
ret = fibonacci(5)
l(ret)
ret = fibonacci(50)
l(ret)
ret = fibonacci(1000)
l(ret)
