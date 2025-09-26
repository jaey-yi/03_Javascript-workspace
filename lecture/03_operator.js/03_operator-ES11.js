
/*
  * 프로퍼티 값 단축 구문 
  1) ES6에서는 특정 변수를 객체의 프로퍼티로 바로 정의할 수 있음
  2) 단, 프로퍼티명(키)은 변수 이름으로 부여됨 
*/

/*
  * 구조 분해 할당 
  1) Destructuring Assignment
  2) 객체의 각 프로퍼티를 해체하여 그 값을 개별 변수에 담을 수 있게 하는 문법 
  3) 단, 변수명을 객체의 프로퍼티명과 동일하게 맞춰야됨 (순서는 상관 없음)
  4) 형식
     {변수1, 변수2, ..} = 객체;
*/

/*
  * 메소드 단축 
  ES6에서는 객체 내의 메소드 정의시 function 키워드를 생략한 축약 표현을 사용할 수 있음
*/

//1. null 병합 연산자(??)
// 입력된 점수값이 존재하지 않을 경우 50점으로 대입
// const grade == 0||50;
const grade = 0??50; //?? 사용시 0 데이터를 유의미한 값으로 판별
console.log(grade);

// 사용자 입력값(선택사항) 기록
//const input = 'ㅋㅋㅋ'||'hello';
const input = '' ?? 'hello'; // ?? : 좌항값이 null 또는 undefined 일때 우항 반환됨
console.log(input);

// 2. 옵셔널 체이닝 연산자
// 사용자가 입력한 문자열의 길이(문자열 length 출력)
// apple =>5
// '' 

let str = null;                
console.log(str &&str.length);  //1) legth 프로퍼티에 바로 접근 : null 일 경우 오류 발생
console.log(str?.length); //2) 단축평가 (&&) 사용 : 빈 문자열 falusy 취급 > length 0


// 결론 : 메소드 - 구조 분해 할당 가능 . 
// null 병합 연산 - ?? : 좌항값이 null 또는 undefined 일때 우항 반환됨
// 단, ?? 사용시 0 데이터를 유의미한 값으로 판별
