import { Injectable } from "@angular/core";

@Injectable()
export class QuestionService {
    questions = [
        {
            topic: "Geography",
            content: "The Canary Islands are named for what animal?",
            answers: [
                { content: "Giraffes", isCorrect: false },
                { content: "Birds", isCorrect: false },
                { content: "Dogs", isCorrect: true },
                { content: "Crocodiles", isCorrect: false }
            ]
        }, {
            topic: "History",
            content: "What part of King Henry I's body established the length of one foot?",
            answers: [
                { content: "His arm", isCorrect: true },
                { content: "His hand", isCorrect: false },
                { content: "His foot", isCorrect: false },
                { content: "His nose", isCorrect: false },
            ]
        },
    ];

    getQuestions() {
        return this.questions.slice();
    }
}
