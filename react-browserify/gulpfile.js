var gulp = require('gulp')
var browserify = require('browserify')

var dependencies = [
  'react', 'react-dom'
]

var count = 0

function AppBundle(isProduction) {

  var bundle = browserify({
    entry: 'index.js',
    debug: true
  })
}

