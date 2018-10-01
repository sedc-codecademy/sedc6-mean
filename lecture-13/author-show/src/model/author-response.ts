import { Author } from "./author";

export interface AuthorResponse {
    items: Author[];
    total: number;
    first: number;
    last: number;
}