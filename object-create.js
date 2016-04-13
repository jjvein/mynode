//another way to copy an object

//将这个函数命名为‘印钞机’
function Printing(obj) {
  
  //复制其__proto__
  var cp = Object.create(Object.getPrototypeOf(obj))
  
  //获取propertyNames
  var propNames = Object.getOwnPropertyNames(obj)

  if(propNames.length){
    propNames.forEach(function(item){
      //获取属性的描述符
      var desc = Object.getOwnPropertyDescriptor(obj, item) 
      //重新定义属性
      Object.defineProperty(cp, item, desc)
    }) 
  }

  return cp
}

function Coin(){
  this.name = 'coin'
  this.parValue = 100
}

var coin = new Coin
var money = Printing(coin)
var lg = console.log
lg('coin==>', coin, '__proto__', coin.__proto__)
lg('money==>', money, '__proto__', coin.__proto__)

