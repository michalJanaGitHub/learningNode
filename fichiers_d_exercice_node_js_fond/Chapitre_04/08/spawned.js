setInterval(() => {
    process.stdout.write('.');
}, 1000);

process.stdin.on('data', () => {
    console.log('Stopped by parent');
    process.exit();
});