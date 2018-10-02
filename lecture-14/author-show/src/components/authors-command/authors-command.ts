import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "authors-command",
    templateUrl: "./authors-command.html"
})
export class AuthorsCommandComponent {

    filterTerm: string;

    @Output() previousPage: EventEmitter<void> = new EventEmitter();
    @Output() nextPage: EventEmitter<void> = new EventEmitter();
    @Output() doSearch: EventEmitter<string> = new EventEmitter();

    previous() {
        this.previousPage.emit();
    }

    next() {
        this.nextPage.emit();
    }

    filter() {
        this.doSearch.emit(this.filterTerm);
    }

    setFilterTerm(event) {
        this.filterTerm = event.target.value;
    }

}
