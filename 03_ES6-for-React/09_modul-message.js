//*name export 한 데이터 가져오기
//* 이름 바꾸기 : as
import { name, age, hobby as h, dream } from "./08_modul-preson";

const person = {
  name: name,
  age: age,
  hobby: h,
  dream: dream,
};

const returnMessage = () => {
  return `${name}님 환영해요`;
};

//* default export : 뮬에서 하나만 내보낼 수 있는 기본값 (주요값)
// 해당 모듈의 대표적기능 (컴포넌트, 함수) 있을 때 사용

export default returnMessage;
