import { readJson } from "./fs-helper";
import { MongoClient } from "mongodb";

const readAuthors = async () => {
    const authors = <any[]>await readJson("../../data/authors.json");
    return authors;
}

const transferAuthors = async () => {
    console.log("starting transferAuthors");
    const url = 'mongodb://localhost:27017';
    const dbName = 'bookr';
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const authorCollection = db.collection("authors");
    console.log("connected to authors - transferAuthors");

    // await authorCollection.bulkWrite([
    //     {
    //         deleteMany: { filter : {}}
    //     }
    // ]);
    await authorCollection.deleteMany({});
    console.log("deleted all authors - transferAuthors");

    const authors = await readAuthors();
    console.log("loaded authors, start inserting - transferAuthors");

    const result = await authorCollection.insertMany(authors);
    console.log("inserted authors - transferAuthors");
    console.log(`Inserted ${result.insertedCount} items`);

    // for (const author of authors) {
    //     const result = await authorCollection.insertOne(author);
    //     console.log(`Inserted item ${author.name} with id ${result.insertedId}`);
    // }
    client.close();
}

transferAuthors();

const delay = (ms) => new Promise(resolve=>setTimeout(() => { resolve() }, ms));

const countAuthors = async () => {
    console.log("starting countAuthors");
    const url = 'mongodb://localhost:27017';
    const dbName = 'bookr';
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const authorCollection = db.collection("authors");
    console.log("connected to authors - countAuthors");

    const count = await authorCollection.countDocuments();
    console.log("counted authors - countAuthors");
    console.log(`There are ${count} authors`);

    await delay(250);

    const count2 = await authorCollection.countDocuments();
    console.log("counted authors - countAuthors");
    console.log(`There are ${count2} authors`);

    client.close();
}

countAuthors();