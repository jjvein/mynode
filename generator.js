function* generate(i) {
    yield i+1;
    yield i+2;
    yield i+3;
}

var gen = generate(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

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
  var val = gen2.next()
  if(val.done){
    break 
  }
  console.log(val.value)
}
