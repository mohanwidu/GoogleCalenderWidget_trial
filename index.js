//1
var http = require('http');
 
//2 
http.createServer(function (req, res) {
  console.log('test');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('12345');
}).listen(3000);
 
console.log('Server running on port 3000.');

