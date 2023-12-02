var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*Страница "Преступление и наказание" Достоевский*/
router.get('/dost', function(req, res, next) {
  res.send("<h1>Страница \"Преступление и наказание\" Достоевский</h1>")
});
/*Страница "Капитал" Маркс*/
router.get('/marks', function(req, res, next) {
  res.send("<h1>Страница \"Капитал\" Маркс</h1>")
});
/*Страница "Логика" Гегель*/
router.get('/gegel', function(req, res, next) {
  res.send("<h1>Страница \"Логика\" Гегель</h1>")
});
/*Страница "Два трактата о правлении" Локк*/
router.get('/lokk', function(req, res, next) {
  res.send("<h1>Страница \"Два трактата о правлении\" Локк</h1>")
});

module.exports = router;
