var http = require('http');

http.createServer(function(request, response) {
  if (request.method === 'GET' && request.url === '/echo') {
    request.pipe(response);
    response.write('Hello World')
    response.end()
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(3000);
