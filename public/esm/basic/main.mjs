import { createMember } from "./memberService.mjs"; 

const member = createMember("nice")
console.log(`생성된 회원은 ${member.name}`);

//출력 결과 예측
// -> 생성된 회원은 { id: 111111111111, name: 'nice'}