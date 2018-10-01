import { Component, Input, OnInit } from "@angular/core";
import { Author } from "../../model";
import { AuthorService } from "../../services/author-service";
import { AuthorResponse } from "../../model/author-response";

@Component({
    selector: "authors-container",
    templateUrl: "./authors-container.html"
})
export class AuthorsContainerComponent implements OnInit {
    authors: AuthorResponse;

    first: number = 0;
    last: number = 20;
    pageSize: number = 20;
    searchTerm: string = "";

    constructor(private service: AuthorService) {
    }

    async ngOnInit() {
        await this.loadAuthors();
    }

    changePage(direction: number) {
        this.first += direction * this.pageSize;
        this.last += direction * this.pageSize;
        this.loadAuthors();
    }

    async loadAuthors() {
        this.authors = await this.service.getAuthors(this.first, this.last, this.searchTerm);
    }

    search(searchTerm: string) {
        this.first = 0;
        this.last = this.pageSize;
        this.searchTerm = searchTerm;
        this.loadAuthors();
    }
}
