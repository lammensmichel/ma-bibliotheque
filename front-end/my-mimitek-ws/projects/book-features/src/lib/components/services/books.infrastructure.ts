import { Inject, Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";
import { bookTable } from "./fakes";

export interface BookFilter {
    value: string;
}

export interface getAllBooks  {
    getAll(filter: BookFilter): Observable<Books>
}

export const inMemorugetAllBooks: getAllBooks = {
    getAll(filter: BookFilter) {
        const filterTable = bookTable.filter(item =>  item.title.toLocaleLowerCase().startsWith(filter.value.toLocaleLowerCase()))
        return of(filterTable).pipe(delay(1500))
    },
}

export const mockFactory = () => inMemorugetAllBooks;

@Injectable({providedIn: 'root', useFactory: mockFactory})
export class getAllBookInfrastructure implements getAllBooks   {
    getAll(filter: BookFilter): Observable<Books> {
        throw new Error("Method not implemented.");
    }

}