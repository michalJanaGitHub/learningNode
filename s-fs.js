let fs = require('fs');
let content = 'Duis in proident proident quis culpa sint officia dolore ea cupidatat.'
fs.writeFile('test.txt', content, (error, file) => {
  console.log('file created');

});







// list all files in dir
// fs.readdir('./', (error, files) => {
//   files.forEach((fileName) => {
//     let stat = fs.statSync(fileName);
//     console.log(`${fileName}, ISFile:${stat.isFile()}, Size:${stat.size}`);
//   });
// });





// // read file 
// let fs = require('fs');
// let content = fs.readFileSync('server-fileSystem.js', 'UTF-8');
// console.log(content);





// // list dir
// let fs = require('fs');

// fs.readdir('./', (error, files) => { // nebo Sync pak se musí dát do proměnné
//   console.log(files);
//   console.log('read finished');
// });

// console.log('read started');