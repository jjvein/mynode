
function* gen() {
  var count = 0
  while(true) {
    ++ count
    console.log('count----', count)
    var value = yield null
    console.log('The input value is ' + value)
  }
}

var g = gen()

var lg = console.log

lg(g.next(1))
lg(g.next(2))
lg(g.next())
