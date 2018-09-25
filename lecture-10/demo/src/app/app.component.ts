import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showWeko: boolean = false;

  title: string;
  name: string = "Wekoslav";
  name2 = "Ige";
  buttonTitle: string = "Set to Weko";

  delany = {
    author: "Samuel R. Delany",
    title: "Empire Star"
  };

  books = [{
    author: "Robert A. Heinlein",
    title: "The Moon is a Harsh Mistress"
  }, this.delany];

  weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29
  };

  seed = Math.random();

  wekoClass = {
    first: false,
    second: true
  };

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
    console.log(`getting greeting for language ${lang}`);
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

  toggleShow() {
    this.showWeko = !this.showWeko;
  }

  addBook() {
    this.books.push({ author: "Ursula LeGuin", title: `The Lathe of Heaven ${this.books.length}` });
  }

  removeBook(index: number) {
    this.books = [...this.books.slice(0, index), ...this.books.slice(index + 1)];
  }

  editBook() {
    this.delany.title = "Dhalgren";
  }

  toggleStyle() {
    this.wekoClass = {
      first: !this.wekoClass.first,
      second: !this.wekoClass.second,
    };
  }


}
