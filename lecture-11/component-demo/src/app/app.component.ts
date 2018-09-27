import { Component } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-demo';

  appQuestion: Question = {
    topic: "Geography",
    content: "Where are Panama hats made?",
    answers: [
      {content: "Honduras", isCorrect: false},
      {content: "Panama", isCorrect: false},
      {content: "Ecuador", isCorrect: true},
    ]
  };

}
