
import { Books } from "../models";
import { getAllBookInfrastructure } from "../services/books.infrastructure";
import { inject } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import {  pipe, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

export interface BooksState{
    items: Books,
    isLoading: boolean;
    isOnError ?: boolean;
}


export const initialBookState: BooksState = {
    items: [],
    isLoading: false
}


 
export const getAll = signalStore(
    {providedIn: 'root' },
    withState(initialBookState),
    withMethods((store, bookInfra = inject(getAllBookInfrastructure)) => ({
        loadAll: rxMethod<string>(
            pipe(
                tap(()=> patchState(store, {isLoading: true})),
                switchMap(filter => bookInfra.getAll({value: filter}).pipe(
                    tapResponse(
                        {
                            next: items => patchState(store, {items}),
                            error: () => patchState(store, {isOnError: true}),
                            finalize: () => patchState (store,{isLoading: false})
                        }
                    )
                )
            )
              )  )
    }))
);
