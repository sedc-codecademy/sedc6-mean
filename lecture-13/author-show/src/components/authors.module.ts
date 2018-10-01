import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorListComponent } from "./author-list/author-list";
import { AuthorsContainerComponent } from "./authors-container/authors-container";
import { AuthorService } from "../services/author-service";
import { AuthorsCommandComponent } from "./authors-command/authors-command";
import { AuthorsStatusComponent } from "./authors-status/authors-status";
import { AuthorDetailsComponent } from "./author-details/author-details";

@NgModule({
    declarations: [
        AuthorListComponent,
        AuthorsContainerComponent,
        AuthorsCommandComponent,
        AuthorsStatusComponent,
        AuthorDetailsComponent
    ],
    exports: [
        AuthorListComponent,
        AuthorsContainerComponent,
        AuthorDetailsComponent
    ],
    providers: [
        AuthorService
    ],
    imports: [
        CommonModule
    ]
})
export class AuthorsModule {

}
