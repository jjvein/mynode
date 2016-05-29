//Proxy 对象用来为基础操作（例如：属性查找、赋值、枚举、方法调用等）定义用户自定义行为。

var handler = {
  get: function(target, name){
    return name in target ? target[name] : 37
  }, 

  set: function(target, prop, value) {
    var len = Object.keys(target).length
    target[prop] = len + '->' + value
  }
}

var p = new Proxy({}, handler)
p.name = 'JJvein'
p.age = 24

console.log(p.name)
console.log(p.age)
console.log(p.hobby)

