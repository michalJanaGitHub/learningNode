let fs = require('fs');
let http = require('http');

let globalRes;
let server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(html);
    });
  }
  else if (req.method === 'POST') {
    let body = '';
    
    req.on('data', (chunk) => {
      console.log(chunk);
      body += chunk;
    });

    req.on('end', () => {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(`
        ${body}
      `);
    });

  }
});

server.listen(3000);

console.log('server on http://localhost:3000');