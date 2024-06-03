import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { SearchStore } from "../services/search.service";
import { FormsModule } from "@angular/forms";
import { initialSearchState } from "../models";

@Component({
    selector: 'lib-search',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <p><input [(ngModel)]="item.value" type="text" name="" id=""><button (click)="search()">Search</button></p>`,
    styles:``
})
export class SearchComponent{
    item = {
        value: ''
    }
    private readonly strore = inject(SearchStore);
    search():void{
        this.strore.setNewValue({
            item : this.item.value
        })
    }
}