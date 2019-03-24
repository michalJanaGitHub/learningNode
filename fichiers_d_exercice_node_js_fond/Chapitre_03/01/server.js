var path = require('path');
var util = require('util');

console.log(path.basename(__filename));
var myPath = path.join(__dirname, 'var', 'www', 'app');

var message = util.format('%s : %s', 'Le dossier est', myPath);

console.log(message);