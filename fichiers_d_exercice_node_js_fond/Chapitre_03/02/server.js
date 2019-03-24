var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var questions = [
    "Comment t'appelles-tu ?",
    "Que fais-tu dans la vie ?",
    "Quel est ton langage de programmation préféré ?"
];

var person = {
    name: '',
    hobby: '',
    lg: ''
}

var actualIndex = 0;

function getQuestion() {
    return questions[actualIndex];
}

rl.question(getQuestion(), function (answer) {
    person[actualIndex] = answer;
    actualIndex++;

    rl.setPrompt(getQuestion());
    rl.prompt();

    console.log(person);

    //rl.close();
});
