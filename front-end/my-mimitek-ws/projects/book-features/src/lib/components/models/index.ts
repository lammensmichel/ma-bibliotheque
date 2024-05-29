export interface Author {
    name: string
}

export interface Book {
    id: number,
    title: string,
    author: Author
}

export type Books = Book [];