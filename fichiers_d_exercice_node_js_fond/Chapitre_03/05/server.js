var exec = require('child_process').exec;

exec('node -v', function(error, stdout) {
    if (error) {
        throw error;
    }

    console.log('Listing finished');
    console.log(stdout);
});