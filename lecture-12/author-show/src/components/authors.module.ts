import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorListComponent } from "./author-list/author-list";

@NgModule({
    declarations: [
        AuthorListComponent,
    ],
    exports: [
        AuthorListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AuthorsModule {

}
