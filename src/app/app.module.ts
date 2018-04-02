import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RidingsoloComponent } from './ridingsolo/ridingsolo.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RidingsoloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
