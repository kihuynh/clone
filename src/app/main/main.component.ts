import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ArticleService]
})

export class MainComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
