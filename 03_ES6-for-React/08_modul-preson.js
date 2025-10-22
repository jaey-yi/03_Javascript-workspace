/*
 * modul
 - 개발 규모가 커질 수록 파일들이 분리되어서 관리됨
 | 분리된 파일 === 모듈
 - 각 파일/모듈 에 정의되어 있는 함수, 변수, 객체 등등 내보낼 수 있음 = export
 - 특정 모듈에 export 값 가져오기 =  import
*/

// named export => 한모듈 여러개 데이터 export 할때

// 방법 1 / export + 선언문 => 여러개 어려움
export const name = "홍길동";
export const age = 40;

// 방법 2 / export {변수, 변수} => 간결함
const hobby = ["running", "baking"];
const dream = "programmer";

export { hobby, dream };
