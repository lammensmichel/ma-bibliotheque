import { Routes } from '@angular/router';


export const routes: Routes = [
   {path: 'books', loadChildren: () => import('book-features').then(item => item.booksRoutes)}
];
