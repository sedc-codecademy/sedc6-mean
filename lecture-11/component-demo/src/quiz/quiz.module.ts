import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnswerComponent } from "./answer/answer";
import { QuestionComponent } from "./question/question";
import { ShowScoreComponent } from "./show-score";
import { QuizComponent } from "./quiz";

@NgModule({
    declarations: [
        QuestionComponent,
        ShowScoreComponent,
        QuizComponent,
        AnswerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        QuestionComponent,
        QuizComponent
    ]
})
export class QuizModule {

}
