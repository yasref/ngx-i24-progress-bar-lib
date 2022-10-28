import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxI24ProgressBarModule } from 'projects/ngx-i24-progress-bar/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxI24ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
