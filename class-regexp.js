// 
// Chrome 50 does implement this functionility

class MyRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp('a+b');
var str = 'ab a+b';
var result = str.search(re); // String.prototype.search calls re[@@search].
console.log(result); // 3
