//bind


function Cat() {
  this.name = 'Chris'
  this.color = 'dot'

  this.speak = function() {
    console.log('My name is ' + this.name) 
  }
}

function Dog() {
  this.name = 'Bob'
  this.color = 'dot'

  this.speak = function() {
    console.log('My name is ' + this.name) 
  }
}

var c = new Cat()
var d = new Dog()
var sp = c.speak.bind(d)
sp()

var e = Object.create(d)
e.speak()

function Chief(pet) {
  this.name = 'Bob'
  this.pet = pet

  this.speak = function(){
    console.log('I have a pat: her name is ' + this.pet.name) 
  }
}

var ci = new Chief(c) 
ci.speak()
