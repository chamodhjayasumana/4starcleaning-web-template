import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getArticleBySlug } from '../../core/data/articles.data';
import { Article } from '../../core/models';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements OnInit {
  article: Article | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      const found = getArticleBySlug(slug);
      if (!found) {
        this.router.navigateByUrl('/articles');
        return;
      }
      this.article = found;
      this.title.setTitle(`${found.title} · Four Star Demo`);
    });
  }
}
