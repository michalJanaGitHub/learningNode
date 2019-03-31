let fs = require('fs');
let http = require('http');
let path = require('path');

let server = http.createServer((req, res) => {
  console.log(`${req.method} : request for ${req.url}`);
  
  if (req.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(html);
    });

  } else if (req.url.match(/.css$/)) {
    let cssPath = path.join(__dirname, 'public', req.url);
    let fileStream = fs.createReadStream(cssPath, 'UTF-8');
    
    res.writeHead(200, { 'Content-type': 'text/css' });
    fileStream.pipe(res);

  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('404 not found');
  }
}); 

server.listen(3000);

console.log('server on http://localhost:3000');

