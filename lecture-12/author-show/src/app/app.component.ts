import { Component, OnInit } from '@angular/core';
import { Author } from '../model';
import { AuthorService } from '../services/author-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Author Display';

  authors: Author[];

  constructor(private service: AuthorService) {
  }

  async ngOnInit() {
    this.authors = await this.service.getAuthors();
  }
}
