var http  = require('http')

var server = http.createServer((request, response)=> {
  var url = request.url
  var headers = request.headers

  console.log('url==>', url, 'headers==', headers)

  response.statusCode = 404

  response.write('Bad request')
  response.end()
})

server.listen(3000)
