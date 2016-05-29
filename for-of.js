"use strict"
//for of 是es6 的新语法


var hobbies = ['swim', 'nba', 'cook', 'guitar', 'kongfu tea']
for (let v of hobbies) {
  console.log(v)
}

let typedArray = new Uint8Array([0x00, 0x25, 0xff])

//如果不修改v， 
for (const v of typedArray) {
  console.log(v)
}

let map = new Map([['name', 'JJvein'], ['age', 24], ['hobby', ['swmi', 'guitar', 'nba', 'cook']]])

for(let keyMap of map) {
  console.log(keyMap)
}
