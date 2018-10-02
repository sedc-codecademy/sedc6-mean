import { Component, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "authors-command",
    templateUrl: "./authors-command.html"
})
export class AuthorsCommandComponent implements OnDestroy {

    filterTerm: string;

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(qparams => {
            console.log("[Command] detected route change");
            this.filterTerm = qparams.search || "";
        });
    }

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

    ngOnDestroy() {
        console.log("[Command] I'm an ex-component");
    }

}
