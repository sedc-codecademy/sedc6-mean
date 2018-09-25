import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  name: string = "Wekoslav";
  name2 = "Ige";
  buttonTitle: string = "Set to Weko";

  weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29
  };

  seed = Math.random();

  constructor() {
    console.log("inside constructor");
  }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.title = this.seed > 0.5 ? 'Ангулар демо апликација' : 'Angular demo app';
  }

  getName() {
    return this.name;
  }

  getGreeting(lang: string) {
    if (lang === "mk") {
      return `Здраво ${this.getName()}`;
    } else if (lang === "en") {
      return `Hello ${this.getName()}`;
    } else {
      return "Unknown language";
    }
  }

  toggleWeko() {
    if (this.name === "Weko") {
      this.name = "Wekoslav";
      this.buttonTitle = "Set to Weko";
      this.name2 = "Ige";
    } else {
      this.name = "Weko";
      this.buttonTitle = "Set to Wekoslav";
      this.name2 = "Igeto";
    }
  }

  setName({ target: { value } }) {
    this.name = value;
  }

}
