const sql = require('mssql/msnodesqlv8')

const f = async (value) => {
    try {
        // await sql.connect('Server=.;Database=BooksDb;Trusted_Connection=Yes;')
        await sql.connect('mssql://bookr:BookrBookr#@localhost/BookDb');
        const author = await sql.query`select * from authors where id = ${value}`;
        console.log(author.recordset);
        const books = await sql.query`select * from novels where authorId = ${value}`;
        console.log(books.recordset);
    } catch (err) {
        // ... error checks
        console.log("Error", err)
    }
};

f(92);