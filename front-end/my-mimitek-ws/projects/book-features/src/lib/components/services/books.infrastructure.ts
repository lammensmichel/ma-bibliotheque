import { Inject, Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";

export interface BookFilter {
    value: string;
}

export interface getAllBooks  {
    getAll(filter: BookFilter): Observable<Books>
}

export const inMemorugetAllBooks: getAllBooks = {
    getAll(filter: BookFilter) {
        const table: Books = [{id:1, title:'dunes',author:{name:'frank Ferbert'}
        }];
        return of(table).pipe(delay(1500))
    },
}

export const mockFactory = () => inMemorugetAllBooks;

@Injectable({providedIn: 'root', useFactory: mockFactory})
export class getAllBookInfrastructure implements getAllBooks   {
    getAll(filter: BookFilter): Observable<Books> {
        throw new Error("Method not implemented.");
    }

}