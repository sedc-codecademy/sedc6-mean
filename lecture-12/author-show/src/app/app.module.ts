import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsModule } from '../components/authors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
