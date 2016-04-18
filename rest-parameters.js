//貌似目前Nodejs 还不支持rest parameters, 
//但是Chrome 47+ 就开始支持
function fun(...theArgs) {
  console.log(theArgs.length)
}

fun()
fun(5)
fun(6, 7, 8)

function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr); // [2, 4, 6]
