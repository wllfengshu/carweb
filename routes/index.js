var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/loginRePwd', function(req, res, next) {
  res.render('loginRePwd');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.post('/index', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/userInfo', function(req, res, next) {
  res.render('userInfo');
});

router.get('/roleInfo', function(req, res, next) {
  res.render('roleInfo');
});

router.get('/carWashInfo', function(req, res, next) {
  res.render('carWashInfo');
});

router.get('/carRepairInfo', function(req, res, next) {
  res.render('carRepairInfo');
});

router.get('/faultReasonDict', function(req, res, next) {
  res.render('faultReasonDict');
});

router.get('/customerInfo', function(req, res, next) {
  res.render('customerInfo');
});

router.get('/user', function(req, res, next) {//个人信息管理-账号管理
  res.render('user');
});

router.get('/userRePwd', function(req, res, next) {//个人信息管理-账号管理
  res.render('userRePwd');
});

router.get('/website', function(req, res, next) {//关于网站
  res.render('website');
});

router.get('/author', function(req, res, next) {//关于作者
  res.render('author');
});

router.get('/version', function(req, res, next) {//系统版本
  res.render('version');
});

module.exports = router;
