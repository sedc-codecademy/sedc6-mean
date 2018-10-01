import { Route, Routes } from "@angular/router";
import { AuthorsContainerComponent } from "../components/authors-container/authors-container";
import { AuthorDetailsComponent } from "../components/author-details/author-details";
import { ErrorComponent } from "../components/error/error";

export const routes: Routes = [
    {
        path: "",
        component: AuthorsContainerComponent
    },
    {
        path: "authors",
        component: AuthorsContainerComponent
    },
    {
        path: "author/:id",
        component: AuthorDetailsComponent
    },
    {
        path: "**",
        component: ErrorComponent
    }
];

