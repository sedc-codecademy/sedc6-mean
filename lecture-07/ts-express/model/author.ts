export interface Author {
    wweId: number,
    name: string,
    bookCount: number,
    books?: Book[]
}

export type Authors = Author[];

export interface Book { }

