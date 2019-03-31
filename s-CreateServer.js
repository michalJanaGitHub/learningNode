let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'text/plain' });
  
  res.end('Je suis un serveur HTTP');
  
}); 

server.listen(3000);

console.log('server on http://localhost:3000')

