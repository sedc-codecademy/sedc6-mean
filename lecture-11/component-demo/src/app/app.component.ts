import { Component } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from "../services/question-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-demo';

  questions: Question[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
