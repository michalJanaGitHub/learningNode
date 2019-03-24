var fs = require('fs');

var dir = './lib/assets';

fs.readdirSync(dir).forEach((filename) => {
    var file = `${dir}/${filename}`;

    fs.unlinkSync(file);
});

fs.rmdirSync(dir);