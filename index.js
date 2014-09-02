//1
var http = require('http');
 
//2 
http.createServer(function (req, res) {
   console.log('test');
   res.setHeader("Access-Control-Allow-Origin", "https://rqj079271u2luvllta9b57hsni3u7fgo-a-calendar-opensocial.googleusercontent.com");
   res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('12345');
}).listen(3000);
 
console.log('Server running on port 3000.');

