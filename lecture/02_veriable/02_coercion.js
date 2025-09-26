/**
 * 📌 암묵적 타입 변환 vs 명시적 타입 변환
 * 1. 암묵적 타입 변환 (implicit-coercion)
 *   1) 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것
 *   2) 암묵적 타입 변환은 코드에서 드러나지 않으므로 타입 변환된 결과를 예측할 수 있어야 오류 방지 가능
 * 2. 명시적 타입 변환 (explicit-coercion)
 *   1) 개발자의 의도에 따라 값의 타입을 변환시키는 것
 *   2) 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 사용하는 방법,
 *      빌트인 메소드를 사용하는 방법이 있음
 */

//1. 문자열타입(string)으로 변환

//1) 문자열 연결 연산자 (+) : 암묵적 변환
console.log(10+'20');
console.log(true + 'Hi .//.');

//2) 템플릿 리터럴의 표현식 삽입 : 암묵적 변환
console.log(`결과: ${10+20}`) // 주의 `` 써야지만 {} 작동함

//3) String 생성자 함수 이용 : 명시적 변환
console.log(String(10).length);

//4) .toString() 메소드 이용: 명시적 변환
console.log((10).toString());

//2. 숫자타입 으로 변환
//1) 산술연산자(+-*/)에 의한 변환 : 암묵적 변환
//   산술 연산에서의 피연산자는 모두 숫자여야됨
//   숫자가 아닌 피 연산자가 숫자타입으로 암묵적 변환
console.log(10 - '5')

//2) 비교연산자에 의한 변환
console.log(10>'5');
console.log('a'<'b');

//3) Number 생성자 함수 이용
console.log(Number('10'));
console.log(Number('10.01'));
console.log(Number('JavaScript'));

//4) parseInt(),parseFloat()함수 이용
console.log(parseInt('10'));
console.log(parseFloat('10'));

console.log(parseInt('10.01'));
console.log(parseFloat('10.01')); //소숫점 표시

console.log(parseInt('10000.1원')); //int float 은 원 빼고 숫자 표시
console.log(parseFloat('1000.01'));
console.log(Number('1000.01원')); //Number 은 NaN 표시됨

//3. 논리 타입(boolean)으로 변환
//1) 암묵적 변환
/* 
자바스크립트엔진에서는 boolean 타입 (true/false)이 아닌 값을
Trunthy 값(참으로 평가되는 값), Falsy값(거짓으로 평가된 값)으로 구분함
Trunthy 값은 암묵적으로 true 로 변환 / Falsy 값은 암묵적으로 false로 변환

*/

if(true)console.log('if(ture)');
if(true)console.log('if(false)');

if(undefined) console.log('if(undefined)');
if(null) console.log('if(null)'); 


// 결론 : 타입변환 : 암묵적 (문자열+순자형 변환, 논리타입값 구분)  / 명시적(string 생성자 함수, toString 등 )