var fs = require('fs');

fs.readdir('./', (error, files) => {
    files.forEach((fileName) => {
        fs.readFile(fileName, 'UTF-8', (error, content) => {
            console.log(`========`+fileName+`=====`);
            console.log(content);
        });
    });
});

console.log('Read');