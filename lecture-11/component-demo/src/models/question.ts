import { Answer } from "./answer";

export interface Question {
    content: string;
    topic: string;
    answers: Answer[];
}
