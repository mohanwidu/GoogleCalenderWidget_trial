//1
var http = require('http');
 
//2 
http.createServer(function (req, res) {
  console.log('test');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,      Accept");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('12345');
}).listen(3000);
 
console.log('Server running on port 3000.');

