import { Author } from "../model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthorResponse } from "../model/author-response";

@Injectable()
export class AuthorService {

    constructor(private http: HttpClient) {
    }

    async getAuthors() {
        const authorRequest = await this.http.get<AuthorResponse>("http://localhost:3000/api/authors/0/20").toPromise();
        return authorRequest.items;
    }
}
