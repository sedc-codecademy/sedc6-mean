import { FragmentOptions, Fragment } from "model/fragment";
import { Author } from "model/author";

import { config } from "../config";
import { repoGenerator as mongoRepoGenerator } from "./author-repo-mongo";
import { repoGenerator as mysqlRepoGenerator } from "./author-repo-mysql";

export interface AuthorRepository {
    // retrieval methods
    getAllAuthors: (fragmentParams?: FragmentOptions) => Promise<Fragment<Author>>;
    getAuthorById: (id: number) => Promise<Author>;
    findAuthorsByName: (nameFragment: string, fragmentParams?: FragmentOptions) => Promise<Fragment<Author>>;

    // data manipulation methods
    addAuthor: (author: Author) => Author;
    deleteAuthor: (id: number) => boolean;
    updateAuthor: (author: Author) => Promise<Author>;
}

const repos = {
    "mongo" : mongoRepoGenerator,
    "mysql": mysqlRepoGenerator
}

function getRepo(repoName) {
    const generator = repos[repoName] || repos["mongo"];
    return generator();
}


export const getRepository: Promise<()=>AuthorRepository> = getRepo(config.database);