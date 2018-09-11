import { Author, Authors } from "../model/author";
import { FragmentOptions, Fragment } from "../model/fragment";
import { readJson } from "../fs-helper";
import { cache } from "../cache/cache";

export interface AuthorRepository {
    // retrieval methods
    getAllAuthors: (fragmentParams?: FragmentOptions) => Fragment<Author>;
    getAuthorById: (id: number) => Author;
    findAuthorsByName: (nameFragment: string, fragmentParams?: FragmentOptions) => Fragment<Author>;

    // data manipulation methods
    addAuthor: (author: Author) => Author;
    deleteAuthor: (id: number) => boolean;
    updateAuthor: (author: Author) => Author;
}

const repoGenerator = async () => {

    console.log("Loading data file");
    const data: Authors = <Authors>await readJson("../../data/authors.json");

    return () => {

        const repo: AuthorRepository = {
            getAllAuthors: ({ first, last }={}) => {
                first = first || 0;
                last = last || data.length - 1;
                console.log("getting all authors");
                const items = data.slice(first, last);
                return {
                    items,
                    total: data.length,
                    first,
                    last
                }
            },
            getAuthorById: (id) => {
                console.log("get author by id");
                const result = data.find(author => author.id === id);
                return result;
            },
            findAuthorsByName: (nameFragment = "", { first, last } = {}) => {
                console.log(`getting authors by name ${nameFragment}`);
                nameFragment = nameFragment.toLowerCase();
                const result = data.filter(author => author.name.toLowerCase().includes(nameFragment));

                first = first || 0;
                last = last || result.length - 1;
                last = Math.min(last, result.length);
                const items = result.slice(first, last);
                return {
                    items,
                    total: result.length,
                    first,
                    last
                }
            },
            addAuthor: null,
            deleteAuthor: null,
            updateAuthor: (author) => {
                // homework - update data file on disk :)
                return author;
            },
        }
        return repo;
    }
}

export const getRepository = repoGenerator();

