function* generate(i) {
    var value = yield i+1;
    yield i+2;
    yield i+3;
}
var l = console.log.bind(null, 'generator==>')
var gen = generate(10);
l(gen.next().value);
l(gen.next().value);
l(gen.next().value);
l(gen.next().value);


function* generate1() {
    var i = 0;
    while(i < 3) {
        yield i+10
        i++
    }
}

function* generate2(i) {
    yield i+1;
    yield* generate1();
    yield i+10;
}

var gen2 = generate2(10);
while(true) {
  var val
  val = gen2.next(val)
  if(val.done){
    break 
  }
  console.log(val.value)
}
