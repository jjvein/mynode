var Radio = require('./radio')
var station = {
  freq: '80.16',
  name: 'Rock N Roll Radio'
}
var radio = new Radio(station)

radio.on('open', function(station){
  console.log(station.name + ' at ' + station.freq)
  console.log('Music.....')
})

radio.on('close', function(station){
  console.log(station.name + ' hopes see you tomorrow!') 
})
