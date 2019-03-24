function collect(key) {
    var key = process.argv.indexOf(key);

    return key === -1 ? null : process.argv[key+1];
}

var name = collect('--name');
var message = collect('--message');

if (name && message) {
    return console.log(`${name} : ${message}`);
}

console.log('Pas de message');