import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Author } from "../../model";

@Component({
    selector: "author-list",
    templateUrl: "./author-list.html",
    styleUrls: ["./author-list.css"]
})
export class AuthorListComponent {
    @Input() authors: Author[];

    @Output() selectAuthor: EventEmitter<Author> = new EventEmitter();

    doSelectAuthor(author: Author) {
        this.selectAuthor.emit(author);
    }

}
