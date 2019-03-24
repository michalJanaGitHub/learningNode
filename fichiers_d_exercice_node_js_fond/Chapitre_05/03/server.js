var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer((req, res) => {
    console.log(`${req.method} : request for ${req.url}`);

    if (req.url === '/') {
        fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    } else if (req.url.match(/.css$/)) {
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');

        res.writeHead(200, {'Content-Type': 'text/css'});
        
        fileStream.pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 not found');
    }


});

server.listen(3000);

console.log('Server on http://localhost:3000');