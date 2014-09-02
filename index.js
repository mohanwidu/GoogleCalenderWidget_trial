//1
var http = require('http');
 
//2 
http.createServer(function (req, res) {
<<<<<<< HEAD
   console.log('test');
   res.setHeader("Access-Control-Allow-Origin", "https://rqj079271u2luvllta9b57hsni3u7fgo-a-calendar-opensocial.googleusercontent.com");
   res.writeHead(200, {'Content-Type': 'text/plain'});
=======
  console.log('test');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,      Accept");
  res.writeHead(200, {'Content-Type': 'text/html'});
>>>>>>> 02dee6b1ef8e13fb8ec0bc970359b48a8ac50dd6
  res.end('12345');
}).listen(3000);
 
console.log('Server running on port 3000.');

