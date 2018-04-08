import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-ridingsolo',
  templateUrl: './ridingsolo.component.html',
  styleUrls: ['./ridingsolo.component.css'],
  providers: [ArticleService]
})
export class RidingsoloComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.articles= this.articleService.getArticles();
  }

}
