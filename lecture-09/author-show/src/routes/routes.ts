import { Route, Routes } from "@angular/router";
import { AuthorsContainerComponent } from "../components/authors-container/authors-container";
import { AuthorDetailsComponent } from "../components/author-details/author-details";
import { NotFoundErrorComponent } from "../components/not-found-error/not-found-error";

export const routes: Routes = [
    {
        path: "",
        component: AuthorsContainerComponent
    },
    {
        path: "author",
        children: [
            {
                path: "list",
                children: [
                    {
                        path: "",
                        component: AuthorsContainerComponent
                    },
                    {
                        path: ":from/:to",
                        component: AuthorsContainerComponent
                    }
                ]
            },
            {
                path: ":id",
                component: AuthorDetailsComponent
            }
        ]
    },
    {
        path: "**",
        component: NotFoundErrorComponent
    }
];

