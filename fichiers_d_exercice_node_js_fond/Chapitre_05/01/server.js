var fs = require('fs');
var https = require('https');

var options = {
    hostname: 'fr.wikipedia.org',
    port: 443,
    path: '/wiki/Node.js',
    method: 'GET'
};

var req = https.request(options, (res) => {
    var responseBody = '';

    console.log('Start');
    console.log(res.statusCode);
    console.log(res.headers);

    res.setEncoding('UTF-8');

    res.on('data', (chunk) => {
        console.log(chunk.length);
        responseBody += chunk;
    });

    res.on('end', () => {
        fs.writeFile('nodejs.html', responseBody, () => {
            console.log('File created');
        });
    });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();