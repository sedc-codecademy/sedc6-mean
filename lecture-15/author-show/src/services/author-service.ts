import { Author, Book } from "../model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthorResponse } from "../model/author-response";

@Injectable()
export class AuthorService {
    private serverUrl = "http://localhost:3000/api";

    constructor(private http: HttpClient) {
    }

    async getAuthors(first: number, last: number, search: string = "") {
        let url = `${this.serverUrl}/authors/${first}/${last}`;

        if (search) {
            url = `${url}?search=${search}`;
        }

        const response = await this.http.get<AuthorResponse>(url).toPromise();

        return response;
    }

    async getAuthorById(id: number): Promise<Author> {
        const url = `${this.serverUrl}/authors/id/${id}`;

        return await this.http.get<Author>(url).toPromise();
    }

    async loadBooksForAuthor(id: number) {
        const url = `${this.serverUrl}/authors/${id}/books/load`;
        return await this.http.get<Book[]>(url).toPromise();
    }
}
