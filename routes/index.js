var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*Страница "Преступление и наказание" Достоевский*/
router.get('/dost', function(req, res, next) {
  res.render('book', { title: 'Преступление и наказание', 
  picture: 'images/prest_nakaz_dost.jpg',
  desc : 'Социально-психологический и социально-философский' + 
  'роман Фёдора Михайловича Достоевского, '+
  'над которым писатель работал в 1865-1866 годах.'})
});
/*Страница "Капитал" Маркс*/
router.get('/marks', function(req, res, next) {
  res.render('book', {title: 'Капитал', 
  picture: 'images/kapital_marks.jpg',
  desc : 'Главный труд немецкого философа и экономиста Карла Маркса по '+
  'политической экономии, содержащий критический анализ капитализма.' })
});
/*Страница "Логика" Гегель*/
router.get('/gegel', function(req, res, next) {
  res.render('book', {title: 'Наука Логики', 
  picture: 'images/logica_gegel.jpg',
  desc : 'Работа Гегеля, являющаяся основанием выстраиваемой им философской системы \n'+
  'Представляет собой изложение необходимого движения мышления в'+
  'чистых категориях мысли (Абсолютная идея).' })
});
/*Страница "Два трактата о правлении" Локк*/
router.get('/lokk', function(req, res, next) {
  res.render('book', {title: 'Два трактата о правлении', 
  picture: 'images/two_tractat_lokk.jpg',
  desc : "Труд Джона Локка о появлении и роли государства в обществе, о «цивилизованной»"+
  " форме правления в противовес деспотичной монархии, заложивший основу идеи гражданского общества,"+
  " опубликованный анонимно в 1689 году."+
  " За этот труд Джон Локк считается отцом политического либерализма."});
});

module.exports = router;
