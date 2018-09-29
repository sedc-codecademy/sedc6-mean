import { NgModule } from "@angular/core";

import { AuthorListComponent } from "./author-list/author-list";

@NgModule({
    declarations: [
        AuthorListComponent
    ],
    exports: [
        AuthorListComponent
    ]
})
export class AuthorsModule {

}
