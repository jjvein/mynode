//使用generator输出fabonacci 数列

var lg = console.log
function * fabonacci() {
  var fab1 = 0
  var fab2 = 1
  var count = 0
  while(true) {
    ++count
    var current = fab1
    fab1 = fab2
    fab2 = fab1 + current
    console.log('count==>',count, 'current==>', current)
    var ret = yield current
    if(ret) {
      console.log(ret, current)
      fab1 = 0
      fab2 = 1
    }
  }
}

var g = fabonacci()
lg(g.next().value)
//这里要注意， 可以拆分成两步骤：
//1. 将true赋值给generator时， 执行ret下面的步骤，对fab1, fab2 重新赋值
//2. 再次执行next步骤
lg(g.next(true).value)
