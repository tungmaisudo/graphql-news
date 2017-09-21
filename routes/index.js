var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/user', function (req, res, next) {
  res.render('user', { title: 'Express' });
});

router.get('/table', function (req, res, next) {
  res.render('table', { title: 'Express' });
});

router.get('/typography', function (req, res, next) {
  res.render('typography', { title: 'Express' });
});

router.get('/icons', function (req, res, next) {
  res.render('icons', { title: 'Express' });
});

router.get('/maps', function (req, res, next) {
  res.render('maps', { title: 'Express' });
});

router.get('/notifications', function (req, res, next) {
  res.render('notifications', { title: 'Express' });
});

router.get('/upgrade', function (req, res, next) {
  res.render('upgrade', { title: 'Express' });
});

module.exports = router;
