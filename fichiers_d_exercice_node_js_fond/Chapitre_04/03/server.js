var fs = require('fs');

var content = `
Mon super contenu.
`;

fs.appendFile('test.txt', content.trim(), (error, file) => {
    console.log('File created');
});