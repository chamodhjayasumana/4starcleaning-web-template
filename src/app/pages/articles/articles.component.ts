import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES } from '../../core/data/articles.data';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  readonly articles = ARTICLES;
}
