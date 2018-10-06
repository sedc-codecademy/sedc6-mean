import { Author } from "model/author";
import { AuthorRepository } from "./author-repo-interface";

import * as Sequelize from 'sequelize';

export const repoGenerator = async () => {

    const sequelize = new Sequelize('bookr', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      });

    await sequelize.authenticate();

    const authors = sequelize.define('authors', {
        wweId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING
        }
      });

    console.log("Connected to MySQL");
    console.log(`There are ${await authors.count()} authors`);

    return () => {

        const repo: AuthorRepository = {
            getAllAuthors: async ({ first, last } = {}) => {
                console.log("getting all authors");
                const total = await authors.count();
                first = first || 0;
                last = last || total - 1;
                console.log("items");
                const items: Author[] = (await authors.findAll({ offset: first, limit: last-first })) as Author[];
                console.log("items");
                return {
                    items,
                    total,
                    first,
                    last
                }
            },
            getAuthorById: async (id) => {
                // console.log(`get author by id ${id} ${typeof id}`);
                // const result = await authors.findOne({ wweId: id });
                // return result;
            },
            findAuthorsByName: async (nameFragment = "", { first, last } = {}) => {
                console.log(`getting authors by name ${nameFragment}`);

                // const cursor = await authors.find({ name: { '$regex': nameFragment, '$options': 'i' } });
                // const total = await cursor.count()

                // first = first || 0;
                // last = last || total - 1;

                // const items = await cursor.skip(first).limit(last - first).toArray();

                // last = Math.min(last, total);

                // return {
                //     items,
                //     total,
                //     first,
                //     last
                // }
            },
            addAuthor: null,
            deleteAuthor: null,
            updateAuthor: async (author) => {
                // const result = await authors.findOneAndUpdate({ wweId: author.wweId }, { $set: author });
                // return result.value;
            },
        }
        return repo;
    }
}
