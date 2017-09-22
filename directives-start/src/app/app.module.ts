import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {redBackgroundDirective} from "./redBackground/redBackground.directive";
import { BetterRedBackgroundDirective } from './better-red-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    redBackgroundDirective,
    BetterRedBackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
