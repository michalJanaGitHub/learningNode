var fs = require('fs');

try {
    fs.unlinkSync('change.txt');
} catch (error) {
    return console.log(`Error on remove ${error.path}`);
}

console.log('Removed');