import { Component} from '@angular/core';
import { Article } from './models/article.model';
import { Router } from '@angular/router';
import { routing } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Brit & Co';

  articles = Article;

  constructor (
    ) { }
}
