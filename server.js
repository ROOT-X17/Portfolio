const http = require('http');
const fs = require('fs')
http.createServer(function (req, res) {
  res.writeHead(200, {'content-type' : 'text/html'});
  fs.readFile('index.html', function (error, data){
    if(error){
      res.writeHead(404)
      res.write('Error page not found')
    }else{
      res.write(data)
    }
    res.end();   
  })

}).listen(8000);