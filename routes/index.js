var express = require('express');
var router = express.Router();

/* GET home page. 
localhost:3000 요청하면 7번 인터셉트 해서 home.ejs요청한다.
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageName: 'pages/home.ejs' });
});
// 회원가입 페이지 추가
// http://localhost:3000/signup
// http://127.0.0.1:3000/signup
// http://192.168.0.41:3000/signup
router.get('/signup', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'auth/signup.ejs' });
});
// 로그인 페이지 추가
// http://localhost:3000/login
// http://127.0.0.1:3000/login
// http://192.168.0.41:3000/login
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs' });
});
module.exports = router;
