import { Injectable, Signal, inject } from "@angular/core";
import { Books } from "../models";
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