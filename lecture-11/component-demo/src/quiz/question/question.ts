import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Question } from "../../models/question";

@Component({
    selector: "question",
    templateUrl: "./question.html",
    styleUrls: ["./question.css"]
})
export class QuestionComponent implements OnChanges {

    @Input() question: Question;
    @Output() answerSelected: EventEmitter<boolean> = new EventEmitter();

    wiseAnswer = false;
    poorAnswer = false;

    enableAnswers = true;

    handleAnswer(isCorrect: boolean) {
        this.wiseAnswer = isCorrect;
        this.poorAnswer = !isCorrect;
        this.enableAnswers = false;

        this.answerSelected.emit(isCorrect);
    }

    reset() {
        this.wiseAnswer = false;
        this.poorAnswer = false;

        this.enableAnswers = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.reset();
    }

}
