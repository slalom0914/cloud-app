const express = require('express')
const router = express.Router() //함수의 괄호가 아니라 객체괄호-생성자함수

//-> http://localhost:3000/youtube ->  app.js
router.get("/", function(req, res, next){
  res.send('youtube 페이지') //-> text/plain
  //next()
})
// 가장인기있는 동영상
//-> http://localhost:3000/youtube/youtube1
router.get("/youtube1", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '인기동영상', pageName: 'pages/youtube/youtube1.ejs'})
  //next()
})
// 동영상 검색
//-> http://localhost:3000/youtube/youtube2
router.get("/youtube2", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '동영상 검색', pageName: 'pages/youtube/youtube2.ejs'})
  //next()
})
// 쇼츠검색
//-> http://localhost:3000/youtube/youtube3
router.get("/youtube3", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '쇼츠검색', pageName: 'pages/youtube/youtube3.ejs'})
  //next()
})

module.exports = router;