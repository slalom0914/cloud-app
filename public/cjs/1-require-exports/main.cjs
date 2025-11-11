/*
Common JS - 브라우저 외부 환경에서 자바스크립트 모듈 생태계의 규칙을
정의하기 위해서 시작된 프로젝트
- 모듈
- 패키지(package.json)

1파일 = 1모듈

CJS동작 원리
Resolution(모듈경로확인) - Loading(모듈로드) - Wrapping(코드래핑)
- Evaluation(코드실행) - Caching(결과 캐싱)
-> 내장모듈 탐색> 파일경로 탐색> 패키지 모듈 탐색(node_modules-express)
-> 모듈 타입을 확인하고 파싱 및 로드하는 과정
  -> .js(텍스트 로딩) 
  -> .json(JSON.parse()로 객체 변환)
  -> .node (C++바이너리코드)
  -> cannot find module
-> 코드 래핑 : 파일이름이 다른데 변수이름이 같아도 에러가 발생하지 않음
-> Evalution: 래핑된 코드를 실행하여 모듈 내 코드를 해석하는 과정
(모듈의 내보내기는 이 과정에서 결정됨)
-> Caching : 로딩된 모듈을 캐싱하는 과정
(같은 모듈을 요청하면 메모리서 결과를 즉시 반환-속도)
*/
const memberCreate = require('./memberCreate.cjs')

const newMember = memberCreate.createMember("김유신","kim@hot.com","마포구 공덕동")
console.log(newMember);