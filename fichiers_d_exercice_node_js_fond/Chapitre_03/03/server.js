var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var questions = [
    "Comment t'appelles-tu ? ",
    "Que fais-tu dans la vie ? ",
    "Quel est ton langage de programmation préféré ? "
];

var person = {};
var attributes = ['name', 'hobby', 'lg'];
var actualIndex = 0;

function getQuestion() {
    return questions[actualIndex];
}

function ask() {
    rl.question(getQuestion(), function (answer) {
        person[attributes[actualIndex]] = answer;
        actualIndex++;

        if (actualIndex === questions.length) {
            rl.close();
        }

        ask();
    });
}

rl.on('close', function () {
    console.log(person);
    process.exit();
});

ask();
