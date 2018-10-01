import { Component, Input } from "@angular/core";
import { Author } from "../../model";

@Component({
    selector: "author-details",
    templateUrl: "./author-details.html"
})
export class AuthorDetailsComponent {
    @Input() author: Author;

}
