export interface Author {
    id: number,
    name: string,
    bookCount: number,
    books?: Book[]
}

export type Authors = Author[];

export interface Book { }

