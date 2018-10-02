import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorListComponent } from "./author-list/author-list";
import { AuthorsContainerComponent } from "./authors-container/authors-container";
import { AuthorService } from "../services/author-service";
import { AuthorsCommandComponent } from "./authors-command/authors-command";
import { AuthorsStatusComponent } from "./authors-status/authors-status";
import { AuthorDetailsComponent } from "./author-details/author-details";
import { BookListComponent } from "./book-list/book-list";
import { RouterModule, ActivatedRouteSnapshot } from "@angular/router";

@NgModule({
    declarations: [
        AuthorListComponent,
        AuthorsContainerComponent,
        AuthorsCommandComponent,
        AuthorsStatusComponent,
        AuthorDetailsComponent,
        BookListComponent
    ],
    exports: [
        AuthorListComponent,
        AuthorsContainerComponent,
        AuthorDetailsComponent,
        BookListComponent
    ],
    providers: [
        AuthorService
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AuthorsModule {

}
