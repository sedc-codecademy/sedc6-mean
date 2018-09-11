const express = require('express');
export const apiRouter = express.Router();

import { cache } from "../cache/cache";
import { readJson } from "../fs-helper";
import { authorsApi } from "./api/authors";
import { booksApi } from "./api/books";
import { awardsApi } from "./api/awards";

apiRouter.get('/', function (req, res, next) {
    res.send(["add", "subtract", "multiply"]);
});

apiRouter.get('/add/:first/:second', function (req, res, next) {
    const first = Number(req.params.first);
    const second = Number(req.params.second);

    const result = first + second;

    res.send({
        first,
        second,
        result
    });
});

apiRouter.use("/authors", authorsApi);
apiRouter.use("/books", booksApi);
apiRouter.use("/awards", awardsApi);


apiRouter.get('/:default', async function (req, res, next) {
    res.status(404).send({ a: "default route response" });
});

