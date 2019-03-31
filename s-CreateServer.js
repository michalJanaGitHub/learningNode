let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'text/html' });
  
  let responseBody = `
    <html>
      <head></head>
      <h1>Je suis un serveur HTTP</h1>
      <p>${req.url}</p>
      <p>${req.method}</p>
      </body>
    </html>  
  `;

  res.end(responseBody);
}); 

server.listen(3000);

console.log('server on http://localhost:3000');

