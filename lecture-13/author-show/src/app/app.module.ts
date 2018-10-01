import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AuthorsModule } from '../components/authors.module';
import { routes } from '../routes';
import { BasicModule } from '../components/basic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthorsModule,
    BasicModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
