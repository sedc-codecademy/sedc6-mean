import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  seed = Math.random();

  title = this.seed > 0.5 ? 'Ангулар демо апликација' : 'Angular demo app';
}
