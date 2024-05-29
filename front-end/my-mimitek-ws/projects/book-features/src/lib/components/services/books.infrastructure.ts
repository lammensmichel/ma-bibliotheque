import { Inject, Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";

export interface getAllBooks  {
    getAll(): Observable<Books>
}

export const inMemorugetAllBooks: getAllBooks = {
    getAll() {
        const table: Books = [{id:1, title:'dunes',author:{name:'frank Ferbert'}
        }];
        return of(table).pipe(delay(1500))
    },
}

export const mockFactory = () => inMemorugetAllBooks;

@Injectable({providedIn: 'root', useFactory: mockFactory})
export class getAllBookInfrastructure implements getAllBooks   {
    getAll(): Observable<Books> {
        throw new Error("Method not implemented.");
    }

}