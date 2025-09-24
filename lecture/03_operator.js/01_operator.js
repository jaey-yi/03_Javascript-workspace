/**
 * 📌 연산자
 * 1. 산술 연산자
 *   1) 이항 연산자 
 *   2) 종류
 *       → 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)
 *       → 제곱(**) => ES7에서 추가된 연산자
 * 2. 증감 연산자
 *   1) 단항 연산자
 *   2) 변수 값을 1씩 증가/감소
 *   3) 종류
 *       → 증가(++), 감소(--)
 * 3. 대입(할당) 연산자 
 *   1) 오른쪽 값을 왼쪽 변수에 할당
 *   2) 종류
 *       → 대입(=)
 *       → 복합 대입(+=, -=, *=, **=, /=, %=)
 * 4. 비교 연산자
 *   1) 이항 연산자 
 *   2) 두 피연산자를 비교하여 참/거짓을 반환
 *   3) 종류
 *       → 대소 비교(>, <, >=, <=)
 *       → 동등 비교(==, !=)   
 *       → 일치 비교(===, !==) 
 * 5. 논리 연산자
 *   1) 이항 연산자 
 *   2) 두 논리값의 피연산자를 연산하여 참/거짓을 반환
 *   3) 종류
 *       → 논리 AND(&&), 논리 OR(||), 논리 NOT(!)
 * 6. 조건 연산자
 *   1) 삼항 연산자
 *   2) 조건식의 참/거짓 여부에 따라 반환값을 결정
 *   3) 작성법
 *       → [조건식] ? [true일 때 반환값] : [false일 때 반환값]
 * 7. 문자열 연결 연산자
 *   1) 문자열과 문자열을 연결하여 새로운 문자열을 반환
 *   2) 종류
 *       → 문자열 연결(+)
 *       → 문자열 연결 할당(+=)
 * 
 * 
 * ‼️ 연산자 우선순위 (높은 순으로 나열)
 * 1) 괄호, 대괄호, 마침표(멤버 접근, 함수호출) 
 * 2) 단항 연산자 : new, ++, --, !, +, -, typeof, delete 등
 * 3) 산술 연산자 : **   >   *, /, %   >   +, -
 * 4) 비교 연산자 : <, <=, >, >=, instanceof, in   >   ==, ===, !=, !==
 * 5) 논리 연산자 : &&   >   ||
 * 6) 조건(삼항) 연산자
 * 7) 대입 연산자 : =, +=, -=, *=, /=, %=, **=
 */

// 1. 산술연산자
console.log(10+20);
console.log(10-20);
console.log(10/20);
console.log(10%20);
console.log(10**20);
console.log(10+20);

//2. 증감연산자
let num = 10;
console.log(num);
num++;
console.log(num);

console.log(num++); //선출력 11 후 증가 12
console.log(num); //12
console.log(++num); // 선증가 13 후 출력13

// 3. 대입 연산자
let num2 =  10; //일반대입
num2 += 20;
console.log(num2);
// =, +=, -=, *=, /=, %=, **=

//4.비교연산자
//1) 대소비교
console.log(10>5);
console.log(10<5);
console.log(10>5);
//2)동등비교
console.log(1==1);
console.log(1=='1'); // == 값만 비교함 / 타입 다를 시 일치시켜서(자동형변환) 비교한다
console.log(1==true); // 1= true , 0 = false
// 3) 일치비교
console.log(1===1);
console.log(1==="1") // === 은 타입 도 비교함

// null, undefined
console.log(null==undefined);
console.log(null===undefined);

//NaN : 자기자신과 일치하지 않는 유일한 값
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));

//문자열 간의 대소비교
console.log('apple'<'banana');

//5. 논리연산자
//1) 논리 AND(&&)
console.log(true&&false);
console.log(true&&true); // and 연산자

console.log(num >=1 && num <=10); this
//2)논리 or (||)
console.log(true||false);

//num 변수가 3의 배수 "거나" 4의 배수 인지 확인
console.log((num%3)==0 ||(num%4)==0);

// 3)논리 Not(!)
//   ! 논리값
//   논리 반대값 반환
console.log(!true);

// num 변수가 NaN 이 아니고 10이상인지
console.log(!Number.isNaN(num) && num>10);

//6. 삼항연산자
console.log(num >0? "양수 " : "양수가 아니다");
console.log(num % 2 === 0 ? "짝수" : "홀수");

let isLoading = false;
console.log(isLoading? "로딩중..." : " 로딩완료")
