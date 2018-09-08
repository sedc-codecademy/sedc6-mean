var express = require('express');
var router = express.Router();

const cache = require("../cache/cache");

const fshelper = require("../fs-helper");

router.get('/', function (req, res, next) {
    res.send(["add", "subtract", "multiply"]);
});

router.get('/add/:first/:second', function (req, res, next) {
    const first = Number(req.params.first);
    const second = Number(req.params.second);

    const result = first + second;

    res.send({
        first,
        second,
        result
    });
});

router.get('/authors', async function (req, res, next) {
    const authors = await fshelper.readJson("../../data/authors.json");
    res.send(authors);
});

router.post('/authors', (req, res, next) => {
    res.status(405).send({ message: "Authors are read only resource" });
})

router.get('/authors/:from/:to', async function (req, res, next) {
    const from = Number(req.params.from);
    if (isNaN(from)) {
        res.status(400).send({
            message: "the from parameter is not a number",
            value: req.params.from
        });
    }

    const to = Number(req.params.to);
    if (isNaN(to)) {
        res.status(400).send({
            message: "the to parameter is not a number",
            value: req.params.to
        });
    }

    if (from > to) {
        res.status(422).send({
            message: "the from parameter cannot be more than the to parameter",
            value: {
                from: req.params.from,
                to: req.params.to
            }
        });
    }

    const term = req.query.search;
    
    let authors = cache.getItem("authors");
    if (!authors) {
        console.log("Loading data from disk");
        authors = await fshelper.readJson("../../data/authors.json");
        cache.setItem("authors", authors);
    }

    if (term) {
        authors = authors.filter(author => author.name.toLowerCase().includes(term));
    }

    res.send(authors.slice(from, to));
});

router.get('/:default', async function (req, res, next) {
    res.status(404).send({ a: "default route response" });
});



module.exports = router;
