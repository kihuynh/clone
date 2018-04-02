import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RidingsoloComponent,
    MainComponent
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
