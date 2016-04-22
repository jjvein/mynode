
//@@iterator

var myIterable = {}

myIterable[Symbol.iterator] = function*() {
  yield 1
  yield 2
  yield 3
}

var l = console.log
l([...myIterable])

l(myIterable)


//@@match

var re = /foo/, ret
re[Symbol.match] = false
//这里好像还不支持该特性 Symbol.match

"/foo/".startsWith("/foo/")
"/foo/".endsWith("/foo/")


