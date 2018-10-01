import { Component, Input, OnInit } from "@angular/core";
import { Author } from "../../model";
import { AuthorService } from "../../services/author-service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Component({
    selector: "author-details",
    templateUrl: "./author-details.html"
})
export class AuthorDetailsComponent implements OnInit {
    // @Input() 
    authorId: number;

    author: Author;

    constructor(private service: AuthorService, private route: ActivatedRoute) {
        console.log(route.snapshot);
        this.authorId = route.snapshot.params.id;
    }

    async ngOnInit() {
        this.author = await this.service.getAuthorById(this.authorId);
    }

    async loadBooks() {
        const books = await this.service.loadBooksForAuthor(this.authorId);
        this.author.books = books;
        this.author.bookCount = books.length;
    }

    getBookTerm(author: Author) {
        const isOne = author.bookCount === 1;
        return isOne ? "book" : "books";
    }

}
