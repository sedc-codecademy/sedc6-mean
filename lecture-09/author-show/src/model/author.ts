import { Book } from "./book";

export interface Author {
    wweId: number;
    name: string;
    bookCount: number;
    books?: Book[];
}
