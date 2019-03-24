var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var responseBody = `
        <html>
            <head></head>
            <body>
            <h1>Je suis un serveur HTTP</h1>
            <p>${req.url}</p>
            <p>${req.method}</p>
            </body>
        </html>
    `;

    res.end(responseBody);
});

server.listen(3000);

console.log('Server on http://localhost:3000');