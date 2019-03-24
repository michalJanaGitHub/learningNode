var fs = require('fs');
var http = require('http');

var data = require('./data/data.json');
var globalRes;

var server = http.createServer((req, res) => {
    globalRes = res;

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(data));
    } else if (req.url.match(/is-active$/)) {
        isActive();
    } else if (req.url.match(/is-inactive$/)) {
        isInActive();
    } else {
        res.end('Not Found');
    }
});

function isActive() {
    var isActive = data.filter((item) => {
        return item.isActive === true;
    });

    globalRes.end(JSON.stringify(isActive));
}

function isInActive() {
    var isInActive = data.filter((item) => {
        return item.isActive === false;
    });

    globalRes.end(JSON.stringify(isInActive));
}

server.listen(3000);

console.log('Server on http://localhost:3000');