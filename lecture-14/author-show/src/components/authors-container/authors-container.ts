import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Author } from "../../model";
import { AuthorService } from "../../services/author-service";
import { AuthorResponse } from "../../model/author-response";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: "authors-container",
    templateUrl: "./authors-container.html"
})
export class AuthorsContainerComponent implements OnInit, OnDestroy {
    authors: AuthorResponse;

    first: number = 0;
    last: number = 20;
    pageSize: number = 20;
    searchTerm: string = "";

    selectedAuthor: Author;

    paramsSubscriber: Subscription;

    constructor(private service: AuthorService, private route: ActivatedRoute, private router: Router) {
        console.log("being constructed");

        this.paramsSubscriber = route.params.subscribe(params => {
            console.log("changed route params");
            this.first = Number(params.from);
            if (isNaN(this.first)) {
                this.first = 0;
            }
            this.last = Number(params.to);
            if (isNaN(this.last)) {
                this.last = 20;
            }
            this.pageSize = this.last - this.first;
            this.loadAuthors();
        });


        route.queryParams.subscribe(qparams => {
            console.log("changed route query params");
            this.searchTerm = qparams.search;
            this.loadAuthors();
        });
    }

    async ngOnInit() {
        await this.loadAuthors();
        console.log("being initialized");
    }

    changePage(direction: number) {
        this.first += direction * this.pageSize;
        this.last += direction * this.pageSize;

        console.log(`changing page to ${this.first}/${this.last}`);
        this.navigateToPage();
    }

    async loadAuthors() {
        console.log("loading authors");
        this.authors = await this.service.getAuthors(this.first, this.last, this.searchTerm);
    }

    search(searchTerm: string) {
        this.first = 0;
        this.last = this.pageSize;
        this.searchTerm = searchTerm;
        this.navigateToPage();
    }

    navigateToPage() {
        this.router.navigate(["author", "list", this.first, this.last], {
            queryParams: {
                search: this.searchTerm
            }
        });
    }

    authorSelected(author: Author) {
        this.selectedAuthor = author;
    }

    clearSelected() {
        this.selectedAuthor = null;
    }

    ngOnDestroy() {
        this.paramsSubscriber.unsubscribe();

    }
}
