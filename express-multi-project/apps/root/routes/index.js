var express = require('express');
var router = express.Router();
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('root/views/index', { title: '首页 index', __dirname: config.__dirname });
});

module.exports = router;
