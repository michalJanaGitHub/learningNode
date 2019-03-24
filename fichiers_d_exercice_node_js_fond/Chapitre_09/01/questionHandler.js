var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

function QuestionHandler() {
    this.actualIndex = 0;
    this.questions = '';
    this.answers = [];
    this.attributes = '';

    this.setQuestions = function(questions) {
        this.questions = questions;

        return  this;
    };

    this.setAttributes = function(attributes) {
        this.attributes = attributes;

        return this;
    };

    this.getQuestion = function() {
        return this.questions[this.actualIndex];
    };

    this.ask = function() {
        var that = this;

        rl.question(this.getQuestion(), function (answer) {
            that.answers[that.attributes[that.actualIndex]] = answer;
            that.actualIndex++;

            if (that.actualIndex === that.questions.length) {
                console.log(that.answers);
                rl.close();
            }

            that.ask();
        });
    };
}

rl.on('close', function () {
    process.exit();
});

module.exports = new QuestionHandler();