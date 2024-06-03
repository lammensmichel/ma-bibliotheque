import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Init } from 'v8';
import { SearchComponent } from 'search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  
  title = signal<string>('loading ...');

  ngOnInit(): void {
    this.title.set('ma mimiteck');
  }
 



}
