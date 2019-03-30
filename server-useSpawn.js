var spawn = require('child_process').spawn;
var child = spawn('node', ['spawned.js']);

child.stdout.on('data', (data) => {
  process.stdout.write(data);
});

process.stdin.on('data', (data) => {
  child.stdin.write(data);

  setTimeout(() => {
    process.exit();
  }, 100);
});
