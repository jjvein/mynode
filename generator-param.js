
function* gen() {
  while(true) {
    var value = yield null
    console.log('The input value is ' + value)
  }
}

var g = gen()

var lg = console.log

lg(g.next())
lg(g.next(2))
