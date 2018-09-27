import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Answer } from "../../models";

@Component({
    selector: "answer",
    templateUrl: "./answer.html",
    styleUrls: ["./answer.css"]
})
export class AnswerComponent {

    @Input() answer: Answer;
    @Input() enabled: boolean;
    @Output() answerSelected: EventEmitter<boolean> = new EventEmitter();

    selectAnswer() {
        this.answerSelected.emit(this.answer.isCorrect);
    }

}
