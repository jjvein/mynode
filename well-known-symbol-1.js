//这个特性在Node v5.10.0 上没有实现， 但是在Chrome50已经实现

var l = console.log, ret

ret = 'abc'.search(/6/)
l(ret)
ret = 'abc'.search(/b/)
l(ret)

ret = /a/[Symbol.search]('abc')
l(ret)
