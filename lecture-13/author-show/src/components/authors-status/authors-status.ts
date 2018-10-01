import { Component, Input } from "@angular/core";

@Component({
    selector: "authors-status",
    templateUrl: "./authors-status.html"
})
export class AuthorsStatusComponent {
    @Input() total: number;
    @Input() first: number;
    @Input() last: number;
}
