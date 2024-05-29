import { Component } from '@angular/core';
import { ListBooksComponent } from '../../../../public-api';

@Component({
  selector: 'libdtbc-page-list-books',
  standalone: true,
  imports: [ListBooksComponent],
  templateUrl: './page-list-books.component.html',
  styleUrl: './page-list-books.component.css'
})
export class PageListBooksComponent {

}
