var fs = require('fs');

if (fs.existsSync('lib')) {
    console.log('Dir exist');
} else {
    fs.mkdir('lib', (error) => {
        console.log('Dir created');
    });
}