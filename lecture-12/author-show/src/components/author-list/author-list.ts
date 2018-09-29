import { Component } from "@angular/core";

interface Author {
    id: number;
    name: string;
    bookCount: number;
}

@Component({
    selector: "author-list",
    templateUrl: "./author-list.html"
})
export class AuthorListComponent {
    authors = [{
        id: 1860,
        name: "Rachel Aaron",
        bookCount: 8
    },
    {
        id: 1718,
        name: "Ben Aaronovitch",
        bookCount: 12
    },
    {
        id: 4462,
        name: "Dafydd ab Hugh",
        bookCount: 8
    },
    {
        id: 2439,
        name: "Lynn Abbey",
        bookCount: 21
    },
    {
        id: 1613,
        name: "Edwin A. Abbott",
        bookCount: 1
    },
    {
        id: 5001,
        name: "Jane Abbott",
        bookCount: 1
    },
    {
        id: 5719,
        name: "Sally Abbott",
        bookCount: 1
    },
    {
        id: 2472,
        name: "Kobo Abe",
        bookCount: 9
    },
    {
        id: 1177,
        name: "Joe Abercrombie",
        bookCount: 14
    },
    {
        id: 1221,
        name: "Dan Abnett",
        bookCount: 48
    },
    {
        id: 1074,
        name: "Daniel Abraham",
        bookCount: 21
    },
    {
        id: 4890,
        name: "Kristy Acevedo",
        bookCount: 2
    },
    {
        id: 3872,
        name: "Kathy Acker",
        bookCount: 1
    },
    {
        id: 3707,
        name: "Forrest J Ackerman",
        bookCount: 4
    }];

}
