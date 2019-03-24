var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var stream;
var pseudo;

function addToStream() {
    var question = 'Nom du chat ? ';
    
    if (stream) {
        question = `${pseudo} : `;
    }

    rl.question(question, function(data) {
        if (!stream) {
            stream = fs.createWriteStream(`${data}.txt`)
            pseudo = data;
        } else {
            stream.write(`${pseudo} : ${data}\n`);
        }

        addToStream();
    });
}

addToStream();