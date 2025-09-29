/**
 * 📌 프로토타입(Prototype) 
 * 1. 자바스크립트는 Prototype 기반의 객체지향 언어로 
 *    Prototype을 활용해서 객체지향프로그래밍에서의 상속을 구현할 수 있음 
 * 2. 자바스크립트 객체에는 [[Prototype]] 이라는 숨김 프로퍼티가 존재함.
 *     → 자신의 부모 역할을 하는 객체와 연결되어있음 
 *     → 프로토타입 객체의 속성과 메소드를 상속받아 사용할 수 있음 
 * 3. __proto__ 포인터를 통해 [[Prototype]]을 가져오거나 설정할 수 있음 (getter/setter) 
 */

const user = {
  activace: true,
  login: function(userID){
    console.log(`${userID}님 환영합니다`);
  }
};

const student ={
  passion: true,
  __proto__: user
};

//console.log(student.__proto__); 권장 x
student.__proto__ = user;
console.log(student.__proto__);

Object.setPrototypeOf(student, user); // user - 부모객체에서 student 로 객체를 상속한다
console.log(Object.getPrototypeOf(student));
console.log('---------------');
console.log(student.passion);
console.log(student.activate);
student.login('usero1');

//

for(let prop in student){
  console.log(prop, student.hasOwnProperty(prop));
}



const car = {
  brand : 'kia'
};

function EV(model){
  this.model = model
};


//EX 생성자 함수로 생성되는 객체들마다 공통적으로 car 객체의 프로퍼티 가지게 하는

EV.prototype = car;

const ev9 = new EV('EV9');
console.log(ev9.model);
console.log(ev9.brand);

// 생성자 함수의 prototype 활용하여 메소드 설정

function Animal(name){
  this.name = name
  /* 1. 생성자 함수 내에 직접메소드 정의 >> 
   this.speak = function(){
    console.log(`${this.name} 이 짖습니다`)
  };*/

  //2. 생성자 함수의 prototype 활용, 메소드 정의
  Animal.prototype.speak = function(){
    console.log(`${this.name} 이 짖습니다`)
  };
}

const dog = new Animal('멍멍이');
const cat = new Animal('냐옹이');
dog.speak();
cat.speak();


// 결론 : 상속 = 객체들 사이의 속성과 메소드 물려받아 쓰기 - 개별 공통 속성 공통 기능 사용
// for in문 상속 프로프티도 순회대상에 포함
//hasOwnProperty : 객체 - true 내것, false 물려받은것 구분 해줌
/**
 * 싱글톤 - 프로토 타입 이용 , 생성자 함수 내에 따로 정의 필요 없음. 업데이트 일괄 수정 
 * Animal.prototype: {speak: function(){...}}  ← 함수 1개만 저장 
   dog1: {name: "멍멍이"} → Animal.prototype 참조
   dog2: {name: "바둑이"} → Animal.prototype 참조  

 */


