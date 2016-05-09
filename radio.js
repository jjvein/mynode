var util = require('util')

var EventEmitter = require('events').EventEmitter

var Radio = function(station){

  var self = this

  setTimeout(function(){
    self.emit('open', station) 
  }, 0)

  setTimeout(function(){
    self.emit('close', station) 
  })
}

util.inherits(Radio, EventEmitter)

module.exports = Radio
