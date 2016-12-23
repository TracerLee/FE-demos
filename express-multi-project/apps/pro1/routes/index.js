var express = require('express');
var router = express.Router();
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pro1/views/index', { title: '项目一 首页', __dirname: config.__dirname });
});

/* GET sub1 page. */
router.get('/sub1', function(req, res, next) {
  res.render('pro1/views/index', { title: '项目一 子页面一', __dirname: config.__dirname });
});

/* GET sub2 page. */
router.get('/sub2', function(req, res, next) {
  res.render('pro1/views/index', { title: '项目一 子页面二', __dirname: config.__dirname });
});

module.exports = router;
