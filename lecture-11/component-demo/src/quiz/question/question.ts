import { Component, Input } from "@angular/core";
import { Question } from "../../models/question";

@Component({
    selector: "question",
    templateUrl: "./question.html"
})
export class QuestionComponent {
    @Input() question: Question;
}
