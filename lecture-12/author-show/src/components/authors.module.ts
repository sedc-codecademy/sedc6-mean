import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorListComponent } from "./author-list/author-list";
import { AuthorsContainerComponent } from "./authors-container/authors-container";
import { AuthorService } from "../services/author-service";
import { AuthorsCommandComponent } from "./authors-command/authors-command";
import { AuthorsStatusComponent } from "./authors-status/authors-status";

@NgModule({
    declarations: [
        AuthorListComponent,
        AuthorsContainerComponent,
        AuthorsCommandComponent,
        AuthorsStatusComponent
    ],
    exports: [
        AuthorListComponent,
        AuthorsContainerComponent
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
