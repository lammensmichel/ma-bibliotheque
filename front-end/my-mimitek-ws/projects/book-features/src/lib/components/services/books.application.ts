import { Injectable, inject } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Books } from "../models";
import { getAllBookInfrastructure } from "./books.infrastructure";

@


Injectable({providedIn: 'root'})
export class getAllBooApplication{
    private readonly api = inject(getAllBookInfrastructure);
    private readonly getAllBooks$ = this.api.getAll().pipe(shareReplay(1));

    getAll(): Observable<Books>{
        return this.getAllBooks$;
    }
}