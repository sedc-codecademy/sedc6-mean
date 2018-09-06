var express = require('express');
var router = express.Router();

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

module.exports = router;
