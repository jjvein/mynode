var events = require('events')

var eventEmitter = new events.EventEmitter

var ringBell = function(){
  console.log('ringing...')
}

var callHost = (name) => {
  console.log('Host, ' + name + ' is comming!!!')
}

eventEmitter.on('ring', ringBell)
eventEmitter.on('ring', callHost)

eventEmitter.emit('ring', 'jjvein')
