// // write to a stream
// let fs = require('fs');
// let readline = require('readline');
// let rl = readline.createInterface(process.stdin, process.stdout);
// var stream;
// var pseudo;

// let addToStream = () => {
//   let question = 'Nom du chat?';

//   if (stream) {
//     question = `${pseudo} : `;
//   }

//   rl.question(question, (data) => {
//     if (!stream) {
//       stream = fs.createWriteStream(`${data}.txt`);
//       pseudo = data;
//     } else {
//       stream.write(`${pseudo} : ${data}\n`);
//     }

//     addToStream();    
//   });
// };

// addToStream();










// // use stream to read file
// let fs = require('fs');

// let stream = fs.createReadStream('lib/lambda.js', 'UTF-8');

// stream.once('data', () => {
//   console.log('start');
// });

// stream.on('data', (chunk) => {
//   process.stdout.write(` chunk : ${chunk.length}`);
// });

// stream.on('end', () => {
//   fs.readFile('lib/lambda.js', (error, log) => {
//     console.log('end');
//   });
// });







// // move file/directory
// let fs = require('fs');
// fs.mkdirSync('./assets');
// fs.mkdirSync('./assets/lib2');
// fs.renameSync('./assets/lib2', './lib2');
// fs.rmdirSync('./assets');
// fs.rmdirSync('./lib2');






// // rename file
// let fs = require('fs');
// try {
//   fs.unlinkSync('change.txt');
// } catch (error) {
//   // return console.log(error);
//   return console.log(`Error while removing file: ${error.path}`);
// }
// console.log('removed');




// // rename file
// let fs = require('fs');

// fs.renameSync('test.txt', 'change.txt');

// console.log('renamed');





// // create a directory
// let fs = require('fs');

// if (fs.existsSync('lib')) {
//   console.log('Dir already exists');
// } else {
//   fs.mkdir('lib', (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('dir created');    
//     }
//   }); 
// }





// // create and append to file
// let fs = require('fs');
// let content = `
//   Duis in proident proident quis culpa sint officia dolore ea cupidatat.
// `;

// fs.writeFile('test.txt', content.trim(), (error, file) => {
//   console.log('file created');
//   fs.appendFile('test.txt', 'Mon super contenu', (error, file) => {
//     console.log('Content appended');
//   });  
// });






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