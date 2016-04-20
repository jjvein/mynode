"use strict"
function Student(data){

    this.name = data.name || "Jon Doe";
    this.age = data.age>=0 ? data.age : -1;

    this.getInfo = function () {
        return this.name + ", " + this.age;
    };

    this.sayHi = function () {
        global.setTimeout(()=>{
            // the only difference is here
            console.log( this );
        }, 1000 );
    }

}

let mary = new Student({
    name: "Mary Lou",
    age: 13
});

console.log( mary.getInfo() ); // "Mary Lou, 13"
mary.sayHi();

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

var a2 = a.map(function(s){ return s.length });

//当只有一个参数时，可以省略括号，并且右侧如果只有一个语句，则是函数的返回值
var a3 = a.map( s => s.length );
console.log('a2: ', a2)
console.log('a3: ', a3)


