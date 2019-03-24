var questions = [
    "Comment t'appelles-tu ?",
    "Que fais-tu dans la vie ?",
    "Quel est ton langage de programmation préféré ?"
];

var answers = [];

function ask(index) {
    process.stdout.write(`\n\n${questions[index]}\n`);
}

process.stdin.on('data', function (data) {
    answers.push(data.toString().trim());

    if (questions.length === answers.length) {
        process.exit();
    }

    ask(answers.length);
});

process.on('exit', function () {
    process.stdout.write(`\n\n${answers[0]} ${answers[1]} ${answers[2]}\n`);
});

ask(0);