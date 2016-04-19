var http = require('http')

http.createServer((request, response) => {
  throw new Error('I am wrong')
  request.on('error', (err)=> {
      console.err(err)
      response.statusCode = 400
      response.end()
  })

  response.on('error', (err)=>{
    console.error(err)
  })

  if(request.method ==='GET' && request.url == '/echo'){
    //这里页面没有内容，但是会返回200正常状态码
    //同时也不需要调用end()
    request.pipe(response)
  } else {
    response.statusCode = 404
    response.end()
  }
}).listen(3000)
