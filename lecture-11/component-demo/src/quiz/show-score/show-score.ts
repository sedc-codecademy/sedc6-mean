import { Component, Input } from "@angular/core";
import { Question } from "../../models/question";

@Component({
    selector: "show-score",
    templateUrl: "./show-score.html"
})
export class ShowScoreComponent {
    @Input() totalQuestions: number;
    @Input() correct: number;
}
