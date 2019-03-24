var fs = require('fs');

fs.readdir('./', (error, files) => {
    console.log(files);
});

console.log('Read');