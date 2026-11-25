import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getLegalPage } from '../../core/data/legal.data';
import { LegalPage } from '../../core/models';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
})
export class LegalComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  page: LegalPage | null = null;

  ngOnInit(): void {
    const slug = this.route.snapshot.routeConfig?.path || '';
    const found = getLegalPage(slug);
    if (!found) {
      this.router.navigateByUrl('/');
      return;
    }
    this.page = found;
    this.title.setTitle(`${found.title} · Four Star Demo`);
  }
}
