## Submit 이슈
1. submit이란?
HTML <form>태그는 버튼을 클릭하거나 엔터를 누르면 자동으로 서버로 요청을 전송함

```html
<form action="/login" method="get">
  <input>
  <button>로그인</button>
</form>
```
-> 버튼 클릭시 브라우저가 action="/login" 주소로 데이터를 보내버린다.
-> 3000 -> 8000
-> 페이지가 새로고침 되거나 이동됨

2. submit 이슈란?
- 버튼을 눌렀는데 화면이 새로고침되거나 페이지가 사리진다???

예시상황
- form태그안에 버튼이 있을때 -> submit발생함 -> 리액트 리렌더링발생으로 문제가 됨
- JS로 입력값을 처리하려는데 submit이 먼저 일어나서 값이 사라진다???
- ajax로 요청을 보내는데 submit이 발동해서 페이지 전체가 reload됨.(SPA)
- React/Vue에서 form을 쓰면 이벤트가 적용되지 않고 새로고침이 됨
- 화면이 SPA인데 갑자기 SSR처럼 이동되어 버림

사례
사례1 - 버튼을 눌렀을 때 페이지가 새로고침 됨

사례2 - JS에서 이벤트 발동하기 전에 submit되어 버렸다???

사례3 - AJAX로 처리하는데 새로고침이 발동함

사례4 - 리액트에서 form들어가면 새로고침됨 - form태그 쓰지마

해결방법
첫번째
- form의 기본 submit동작을 막아버려 -> e.prventDefault()
두번째
- submit이 아니라 button으로 바꿔
```html
<button type="button" onclick=login()>
```
세번째 - form태그를 쓰지 않는 방식(SPA)
- 태그를 커스텀하게 사용할 수 있다.
- 개발자가 태그를 만들어 쓴다
- 리액트에서 태그는 함수이다.
``` jsx
<Login />
function Login(){
  function onSubmit(e){
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">로그인</button>
    </form>
  )
}
```