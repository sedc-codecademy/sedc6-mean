import { Author, Authors } from "../model/author";
import { FragmentOptions, Fragment } from "../model/fragment";
import { readJson } from "../fs-helper";
import { cache } from "../cache/cache";
import { dbContext } from '../mongoConfig'

export interface AuthorRepository {
    // retrieval methods
    getAllAuthors: (fragmentParams?: FragmentOptions) => Promise<Fragment<Author>>;
    getAuthorById: (id: number) => Author;
    findAuthorsByName: (nameFragment: string, fragmentParams?: FragmentOptions) => Promise<Fragment<Author>>;

    // data manipulation methods
    addAuthor: (author: Author) => Author;
    deleteAuthor: (id: number) => boolean;
    updateAuthor: (author: Author) => Author;
}

const repoGenerator = async () => {

    const db = await dbContext('mongodb://127.0.0.1:27017', 'authorsDB');


    console.log("Loading data file");
    const data: Authors = <Authors>await readJson("../../data/authors.json");
    const Authors = db.collection('authors')
    const Books = db.collection('books')
    // const items = await db.collection('authors').find().toArray();
    // console.log(items)
    return () => {

        const repo: AuthorRepository = {
            getAllAuthors: async ({ first, last }={}) => {
                first = first || 0;
                last = last || data.length - 1;
                console.log("getting all authors");
                const items = await Authors.find({  }).skip(first).limit(last).toArray();
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
            findAuthorsByName: async (nameFragment = "", { first, last } = {}) => {
                console.log(`getting authors by name ${nameFragment}`);
                // nameFragment = nameFragment.toLowerCase();

                // Authors.insertMany([{ name: 'Igor', books: ['','','']}])
                // Authors.updateOne({ name: 12312 }, { $set: { books: ['',''] }})
                // Authors.deleteOne
                // Authors.deleteMany
                const items = await Authors.find({ name: { '$regex': nameFragment, '$options': 'i' } })
                .skip(first)
                .limit(last)
                .toArray();
                //data.filter(author => author.name.toLowerCase().includes(nameFragment));

                first = first || 0;
                last = last || data.length - 1;
                last = Math.min(last, items.length);
                // const items = result.slice(first, last);
                return {
                    items,
                    total: data.length,
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

