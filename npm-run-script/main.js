//使用browserify来compile

var uniq = require('uniq')
var arr = [1, 2, 3, 5, 6, 6, 5, 3, 1, 8]
var ret = uniq(arr)

function changeElement(arr) {
  var node = document.getElementById('example')
  if(!node) {
    return 
  }

  if(arr && arr.length) {
    node.innerHTML = arr.join('-')
  }
}

changeElement(ret)

