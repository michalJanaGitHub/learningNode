var fs = require('fs');

var stream = fs.createReadStream('lib/lambda.js', 'UTF-8');

stream.once('data', () => {
    console.log('Start');
});

stream.on('data', (chunk) => {
    process.stdout.write(`chunk : ${chunk.length}`);
});

stream.on('end', () => {
    console.log('END');
});
