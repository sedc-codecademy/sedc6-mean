import { Component, Input, OnInit } from "@angular/core";
import { Question } from "../../models/question";

@Component({
    selector: "quiz",
    templateUrl: "./quiz.html"
})
export class QuizComponent implements OnInit {
    @Input() questions: Question[];

    index = 0;
    score = 0;
    currentQuestion: Question;

    ngOnInit() {
        this.currentQuestion = this.questions[this.index];
    }

    moveToNextQuestion() {
        if (this.index === this.questions.length - 1) {
            throw Error("Ran out of questions, sorry");
        }

        this.index += 1;
        this.currentQuestion = this.questions[this.index];
    }

    isLastQuestion() {
        return this.index === this.questions.length - 1;
    }

    calculateScore(correctAnswer: boolean) {
        if (correctAnswer) {
            this.score += 1;
        }
    }

}
