import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Book } from "../../model";

@Component({
    selector: "book-list",
    templateUrl: "./book-list.html",
    styleUrls: ["./book-list.css"]
})
export class BookListComponent {
    @Input() books: Book[];

}
