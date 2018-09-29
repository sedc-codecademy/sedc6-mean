import { Component, Input } from "@angular/core";
import { Author } from "../../model";



@Component({
    selector: "author-list",
    templateUrl: "./author-list.html",
    styleUrls: ["./author-list.css"]
})
export class AuthorListComponent {
    @Input() authors: Author[];

}
