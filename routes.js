var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', path: req.url });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Rólunk', path: req.url });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Termékeink', path: req.url });
});

module.exports = router;
