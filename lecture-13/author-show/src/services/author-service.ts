import { Author } from "../model";
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

        return await this.http.get<AuthorResponse>(url).toPromise();
    }
}
