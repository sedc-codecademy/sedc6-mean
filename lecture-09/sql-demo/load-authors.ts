import { MongoClient } from 'mongodb';
import { createConnection } from "mysql";

export namespace Mongo {
    export interface Author {
        wweId: number,
        name: string,
        books?: Book[]
    }

    export interface Book {
        id: number;
        title: string;
    }
}

export namespace MySQL {
    export interface Author {
        wweId: number,
        name: string,
    }

    export interface Book {
        id: number;
        title: string;
        authorId: number
    }

    export interface Data{ 
        authors: MySQL.Author[], 
        books: MySQL.Book[] 
    }
}



export const dbContext = async (connectionString: string, dbName: string) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true });
    const db = await client.db(dbName);
    return db;
}


export const getMongoData = async () => {
    const db = await dbContext('mongodb://127.0.0.1:27017', 'bookr');

    console.log("Connected to mongo");
    const authors = db.collection<Mongo.Author>('authors');
    const items = await authors.find({}).toArray();
    console.log(`Retrieved ${items.length} authors`);
    return items;
}

export const transformData = (mongoAuthors: Mongo.Author[]): MySQL.Data => {
    const authors: MySQL.Author[] = [];
    const books: MySQL.Book[] = [];

    for (const mongoAuthor of mongoAuthors) {
        authors.push({
            wweId: mongoAuthor.wweId,
            name: mongoAuthor.name
        });

        if (mongoAuthor.books) {
            for (const book of mongoAuthor.books) {
                books.push({
                    id: book.id,
                    title: book.title,
                    authorId: mongoAuthor.wweId
                })
            }
        }
    }

    console.log(`Gotten ${authors.length} authors with ${books.length} books`);

    return { authors, books }
}


export const insertMySqlData = async (data: MySQL.Data) => {
    const connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'bookr'
      });

    
    connection.query("delete from authors");
    console.log("Emptied authors table");

    const authorQuery = `insert into authors(wweId, name) values (?, ?)`
    for (const author of data.authors) {
        connection.query(authorQuery, [author.wweId, author.name]);
    }
    console.log("Inserted authors");

    connection.query("delete from books");
    console.log("Emptied books table");

    const bookQuery = `insert into books(id, title, authorId) values (?, ?, ?)`
    for (const book of data.books) {
        connection.query(bookQuery, [book.id, book.title, book.authorId]);
    }
    console.log("Inserted books");

    // const query = connection.query("insert into authors (wweId, name) values (100, 'sto'), (200, 'dvesta')");
    // console.log("sent query");
}

export const transferData = async () => {
    const mongoAuthors = await getMongoData(); // E - Extract
    const mySqlAuthors = transformData(mongoAuthors) // T - Transform
    await insertMySqlData(mySqlAuthors); // L - Load

}

transferData();

