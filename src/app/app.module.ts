import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { BeautyComponent } from './beauty/beauty.component';
import { FashionComponent } from './fashion/fashion.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { MoreComponent } from './more/more.component';
import { VideoComponent } from './video/video.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    RidingsoloComponent,
    MainComponent,
    BeautyComponent,
    FashionComponent,
    FoodComponent,
    HomeComponent,
    IssuesComponent,
    MoreComponent,
    VideoComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
