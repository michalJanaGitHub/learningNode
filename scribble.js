// console.log('execute/ahoj8769'.match(/^execute\/[A-Za-z0-9]{3,10}/));


const logger = require('./logger');
// logger.request('test');
// logger.request('test2');   

let id = logger.executeRequest('msg', 'header', 'body');
console.log(id);
