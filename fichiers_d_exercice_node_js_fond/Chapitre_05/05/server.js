var fs = require('fs');
var http = require('http');

var globalRes;

var server = http.createServer((req, res) => {
    globalRes = res;

    if (req.method === 'GET') {
        fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    } else if (req.method === 'POST') {
        var body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`
                ${body}
            `);
        });
    }
});

server.listen(3000);

console.log('Server on http://localhost:3000');