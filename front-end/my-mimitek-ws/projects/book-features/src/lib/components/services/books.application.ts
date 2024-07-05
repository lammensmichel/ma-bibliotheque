import { Injectable, Signal, inject } from "@angular/core";
import { Observable, shareReplay, switchMap } from "rxjs";
import { Books } from "../models";
import { getAllBookInfrastructure } from "./books.infrastructure";
import { SearchStore } from "search";
import { toObservable } from "@angular/core/rxjs-interop";
import { BooksStore } from "../store";

@Injectable({providedIn: 'root'})
export class getAllBooApplication{
    private readonly bookStore = inject(BooksStore);
   // private readonly api = inject(getAllBookInfrastructure);
   // private readonly searchStore = inject(SearchStore).store;
   // private readonly searchStoreObs$ = toObservable(this.searchStore);
   // private readonly getAllBooks$ = this.searchStoreObs$.pipe(
   //     switchMap(item => this.api.getAll({value: item.item}))
    // );

    getAll(): Signal<Books>{
        return this.bookStore.items;
    }


    load(): void {
        this.bookStore.loadAll('');
    }
}