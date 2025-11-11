// 모듈 wrapping단계에서 아래와 같이 scope가 감싸져서 실행됨
// 그래서 scope안에 네이밍이 다른 js파일의 네이밍과 같아도 충돌없이
// 실행될 수 있다.
/*
(function(exports, require, module, __filename, __dirname){
  const datas = require('./member.json')
  console.log(datas.email)

  function sendMail(member){
    console.log(`이름: ${member.name}, 이메일: ${member.email}`);
  }

  module.exports = { sendMail }
})
  */

const datas = require('./member.json')
//console.log(datas.email)

function sendMail(member){
  console.log(`이름: ${member.name}, 이메일: ${member.email}`);
}

module.exports = { sendMail }
