var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SWekster' });
});

/* GET authors list. */
router.get('/authors-client', function(req, res, next) {
  res.render('authors-cl', {});
});

router.get('/authors-rest', function(req, res, next) {
  res.render('authors-rest', {});
});

module.exports = router;
