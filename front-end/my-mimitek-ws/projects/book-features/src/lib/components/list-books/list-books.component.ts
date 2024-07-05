import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { getAllBooApplication } from '../services/books.application';
import { CommonModule } from '@angular/common';
import { SearchStore } from 'search';

@Component({
  selector: 'libdtbc-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListBooksComponent {
    private readonly application = inject(getAllBooApplication)
    books$$ = this.application.getAll();
    searchStore = inject(SearchStore).store;

    load():void{
      this.application.load();
    }

}
