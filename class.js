"use strict"

class Polygon {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

var p = new Polygon(5,10);
console.log(p);

var Polygon1 = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

var p1 = new Polygon1(10,15);
console.log(p1);

class Square extends Polygon {
    constructor(length, name) {
        super(length, length); 
        this.name = name;
    }

    get area() {
        return this.height * this.width; 
    }
    set area(value) {
        this.area = value; 
    }
}

var s1 = new Square(5, 'square1');
console.log(s1.area);
s1.area = 49;
console.log(s1.area);
console.log(s1);
