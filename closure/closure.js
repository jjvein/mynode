//test closure

var add = function() {
  var ret = []
  var _calculate = function(item){
    if(item){
      ret.push(item)
    } else {
      return ret 
    }
  }

  return _calculate
}

var cal = add()
cal('A')
cal('B')
cal('C')
console.log(cal())


var add1 = function() {
  var ret = []
  function _calculate(item){
    if(item){
      ret.push(item)
    } else {
      return ret 
    }
  }

  return _calculate
}

var cal1 = add1()
cal1(1)
cal1(2)
cal1(3)
console.log(cal1())

