var http = require('http')

http.createServer((request, response)=>{

  console.log(request.method, request.url)

  if(request.method === 'GET' && request.url === '/echo'){
    response.write('<html><head><meta charset="utf-8"></head><body><form method="GET" action="/echo1"><input name="name" type="text" /><input type="submit" value="提交" /></form></body></html>') 

    response.end()
  }


  if(request.method === 'GET' && request.url.indexOf('echo1')>=0) {

    var body = []
    request.on('error', (err)=> {
      console.error(err) 
    }).on('data', (chunk)=>{
        console.log(chunk)
       body.push(chunk)
    }).on('end', ()=>{
      body = Buffer.concat(body).toString()
    })
    console.log(body)
    response.write('Yes, got it') 
    response.end()

  }
}).listen(3000)
