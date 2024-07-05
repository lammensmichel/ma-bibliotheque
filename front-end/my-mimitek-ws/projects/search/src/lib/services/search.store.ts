import { Injectable, signal } from "@angular/core";
import { SearchState, initialSearchState } from "../models";

@Injectable({providedIn: 'root'})
export class SearchStore{

    store = signal<SearchState>(initialSearchState);

    setNewValue(newState: SearchState ): void {
        this.store.set({...newState});
    }
    constructor(){}
}