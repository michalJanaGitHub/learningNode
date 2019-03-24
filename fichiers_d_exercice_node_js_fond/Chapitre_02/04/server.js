var questions = [
    "Comment t'appelles-tu ?",
    "Que fais-tu dans la vie ?",
    "Quel est ton langage de programmation préféré ?"
];

var reactions = [
    "Tu es là ?",
    "Allo ?",
    "Bon ..."
]

var answers = [];
var actualIndex;

function createTimeout() {
    setTimeout(function () {
        askWithReaction();
    }, 5000);
}

function ask(index) {
    actualIndex = index;
    process.stdout.write(`${questions[index]}  >`);
    createTimeout();
}

function askWithReaction() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${reactions[actualIndex]} ${questions[actualIndex]}  >`);
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