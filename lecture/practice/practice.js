/**
 
문제 1: 데이터 타입 검증 함수
배경: 실무에서 API 응답이나 사용자 입력의 타입을 정확히 검증해야 하는 경우가 많습니다.
요구사항: validateDataTypes() 함수를 구현하세요.

배열을 받아서 각 요소의 정확한 타입을 판별
배열과 객체를 구분하여 카운트
결과를 객체로 반환

javascriptconst mixedData = [42, "hello", [1,2,3], {name: "김철수"}, null, undefined, true];
console.log(validateDataTypes(mixedData));
// 예상 결과: {number: 1, string: 1, array: 1, object: 1, null: 1, undefined: 1, boolean: 1}
핵심 포인트: typeof의 한계를 이해하고 Array.isArray() 활용

*/
const mixedData = [42, "hello", [1,2,3], {name: "김철수"}, null, undefined, true];

let number = mixedData.filter((item) => (typeof(item) == 'number'));

function validateDataTypes(Data) {

  const result = {};
  mixedData.forEach(item => {
    let type ;

    if (item == null){
      type = 'null';
    }else if(Array.isArray(item)){
      type = 'array'; 
    } else {
      type = typeof item;
    }
    result[type] = (result[type] || 0)+1 ;
 
 });
  return result;
};

console.log(validateDataTypes(mixedData));

/*
문제 2: 회원가입 폼 검증
배경: 실제 웹사이트에서 사용하는 회원가입 폼 검증 로직입니다.
요구사항: validateSignupForm() 함수를 구현하세요.

이름: 한글 2-4자
이메일: 기본적인 이메일 형식
전화번호: 010-0000-0000 형식
비밀번호: 영문자+숫자 조합 6-12자

javascriptconst formData = {
  name: "김철수",
  email: "user@example.com", 
  phone: "010-1234-5678",
  password: "abc123"
};

console.log(validateSignupForm(formData));
// 성공 시: {isValid: true, errors: []}
// 실패 시: {isValid: false, errors: ["이름은 한글 2-4자여야 합니다"]}
핵심 포인트: 정규식 패턴 작성과 배열 활용

문제 3: 상품 데이터 가공
배경: 쇼핑몰에서 상품 데이터를 클라이언트 요구사항에 맞게 가공하는 상황입니다.
요구사항: processProducts() 함수를 구현하세요.

가격이 50,000원 이상인 상품만 필터링
상품명을 대문자로 변환
할인가 추가 (원가의 10% 할인)
가격순으로 정렬

javascriptconst products = [
  {name: "laptop", price: 80000},
  {name: "mouse", price: 30000}, 
  {name: "keyboard", price: 60000},
  {name: "monitor", price: 120000}
];

console.log(processProducts(products));
// 결과: 필터링 + 변환 + 정렬된 상품 배열
핵심 포인트: 배열 고차함수 메서드 체이닝 활용

문제 4: JSON 설정 파일 처리
배경: 설정 파일을 JSON으로 관리하고 동적으로 수정하는 상황입니다.
요구사항: updateConfig() 함수를 구현하세요.

JSON 문자열을 객체로 변환
특정 설정값 업데이트
유효하지 않은 JSON 처리
다시 JSON 문자열로 반환

javascriptconst configJson = '{"theme": "dark", "language": "ko", "notifications": true}';
const updates = {theme: "light", fontSize: 14};

console.log(updateConfig(configJson, updates));
// 결과: 업데이트된 설정이 포함된 JSON 문자열
핵심 포인트: JSON 파싱과 에러 처리, 객체 병합 */
