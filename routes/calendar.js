const express = require('express')
const router = express.Router() //함수의 괄호가 아니라 객체괄호-생성자함수

// Get users listen
//get메서드는 파라미터가 두 개 이다.
//첫번째 파라미터 자리에는 endpoint가 온다.
//둘 콜백함수가 온다(req:요청, res:응답, next:미들웨어 호출함수)
//-> http://localhost:3000/calendar ->  app.js
router.get("/", function(req, res, next){
  res.send('카렌더 페이지') //-> text/plain
  //next()
})
// 일정관리1
//-> http://localhost:3000/calendar/calendar1
router.get("/calendar1", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '일정관리1', pageName: 'pages/calendar/calendar1.ejs'})
  //next()
})
// 일정관리2
//-> http://localhost:3000/calendar/calendar2
router.get("/calendar2", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '일정관리2', pageName: 'pages/calendar/calendar2.ejs'})
  //next()
})
// 일정관리3
//-> http://localhost:3000/calendar/calendar3
router.get("/calendar3", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '일정관리3', pageName: 'pages/calendar/calendar3.ejs'})
  //next()
})

module.exports = router;