"use strict"
// for...of on generator

function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
  console.log(n);
}
