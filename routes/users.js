var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//클라이언트에서 서버측에 요청하는 방법에는 GET(조회), POST(등록), PUT(수정), DELETE(삭제)
//get메서드의 두번째 파라미터에는 요청객체, 응답객체, 미들웨어 연결
//요청객체는 주로 사용자가 입력한 값을 서버에서 요청할 때
//응답객체는 주로 mimetype설정하기, 응답페이지 요청하기,,,
//마이페이지
router.get('/mypage', function(req, res, next) {
  //응답객체는 send메서드와 render메서드를 제공함
  //send는 파라미터에 있는 문자열이 출력되고 우리는 mypage화면을 출력할거니까 render함수를 호출함
  //res.send('respond with a resource');
  res.render('index', {title: '마이페이지', pageName: 'pages/users/mypage.ejs'})
});
//회원정보수정
router.get('/memberUpdate', function(req, res, next) {
  res.render('index', {title: '회원정보수정', pageName: 'pages/users/memberUpdate.ejs'})
});
//장바구니
//-> http://localhost:3000/users/cart
router.get('users/cart', function(req, res, next) {
  res.render('index', {title: '장바구니', pageName: 'pages/users/cart.ejs'})
});
module.exports = router;
