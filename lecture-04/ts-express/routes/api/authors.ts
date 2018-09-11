import * as express from "express";
import { getRepository } from "../../repos/author-repo";

export const authorsApi = express.Router();

authorsApi.get('/', async function (req, res, next) {
    const repo = (await getRepository)();
    const authors = repo.getAllAuthors();
    res.send(authors);
});

authorsApi.post('/', async (req, res, next) => {
    const repo = (await getRepository)();
    repo.updateAuthor({
        id: 1,
        name: "name",
        bookCount: 10
    });
    //res.status(405).send({ message: "Authors are read only resource" });
})

authorsApi.get('/:from/:to', async function (req, res, next) {
    const first = Number(req.params.from);
    if (isNaN(first)) {
        res.status(400).send({
            message: "the from parameter is not a number",
            value: req.params.from
        });
    }

    const last = Number(req.params.to);
    if (isNaN(last)) {
        res.status(400).send({
            message: "the to parameter is not a number",
            value: req.params.to
        });
    }

    if (first > last) {
        res.status(422).send({
            message: "the from parameter cannot be more than the to parameter",
            value: {
                from: req.params.from,
                to: req.params.to
            }
        });
    }

    const term = req.query.search;

    const repo = (await getRepository)();
    const authors = repo.findAuthorsByName(term, { first, last });

    if (authors.total === 0) {
        res.status(404);
    }

    res.send(authors);
});

authorsApi.patch('/:id', async function(req, res, next) {
    const repo = (await getRepository)();

    const id = Number(req.params.id);
    const operation = req.body.bookCount;

    const author = repo.getAuthorById(id);

    if (!author) {
        res.sendStatus(404);
        return;
    }

    if (operation === "add") {
        author.bookCount +=1;
    } else if (operation === "remove") {
        author.bookCount -=1;
    }

    repo.updateAuthor(author);

    res.send({
        author: author,
        success: true
    });
});
