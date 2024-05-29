import { Component, inject } from '@angular/core';
import { getAllBooApplication } from '../services/books.application';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'libdtbc-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
    books$ = inject(getAllBooApplication).getAll();

}
