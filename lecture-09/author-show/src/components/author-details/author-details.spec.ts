import { TestBed, async, flushMicrotasks, fakeAsync } from '@angular/core/testing';
import { AuthorDetailsComponent } from './author-details';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from '../book-list/book-list';
import { Author } from '../../model';
import { AuthorService } from '../../services/author-service';

class MockAuthorService {
  async getAuthors(first: number, last: number, search: string = "") {
    return Promise.resolve({
      items: [],
      total: 0,
      first: 0,
      last: 0
    });
  }

  async getAuthorById(id: number): Promise<Author> {
    return Promise.resolve({
      wweId: -1,
      name: "",
      bookCount: 0
    });
  }

  async loadBooksForAuthor(id: number) {
    return Promise.resolve([]);
  }
}

const mockAuthorService = {
  getAuthors: jasmine.createSpy("getAuthors"),
  getAuthorById: jasmine.createSpy("getAuthorById").and.callFake(() => {
    console.log("calling getAuthorById");
    return Promise.resolve({
      wweId: -1,
      name: "",
      bookCount: 0
    });
  }),
  loadBooksForAuthor: jasmine.createSpy("loadBooksForAuthor"),
};

describe('AuthorDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorDetailsComponent,
        BookListComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: AuthorService, useValue: mockAuthorService }
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(AuthorDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should load author`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AuthorDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    flushMicrotasks();

    expect(mockAuthorService.getAuthorById).toHaveBeenCalled();
    expect(app.author.wweId).toBe(-1);
  }));

});
