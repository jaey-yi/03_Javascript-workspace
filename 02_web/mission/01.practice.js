// 1번 문제
const shoppingcart = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 35000 },
  { name: "키보드", price: 80000 },
];

var arr = [];

shoppingcart.map((item) => item.name);

console.log(arr);

//2번 문제

const shoppingcart2 = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 35000 },
  { name: "키보드", price: 80000 },
  { name: "티셔츠", price: 30000 },
  { name: "양말", price: 5000 },
];

let arr2 = shoppingcart2.filter((e) => e.price < 50000);

console.log(arr2);

// 3번 문제

let todoList = ["오늘의 계획 짜기", "자바스크립트 강의 듣기", "책 정리하기"];

todoList.splice(1, 1);
todoList.push("DOM 실습 문제 풀기");

console.log(todoList);

// 4번 문제

const library0 = {
  science: [{ title: "1", price: 30000 }],
  novel: [{ title: "sherlook", price: 100000 }],
  IT: [{ title: "JavaScript", price: 18000 }],
};

console.log(library0);

library0.IT.push({ title: "HTML/CSS 가이드", price: 28000 });

console.log(library0);

// 5번

const users = [
  { name: "김철수", age: 25 },
  { name: "이영희", age: 30 },
  { name: "박민준", age: 22 },
];

const userHtmlArray = users.map((user) => {
  return `<p>${user.name}<p>`;
});

console.log(userHtmlArray);

const finalHtmlString = userHtmlArray.join("");

const $userList = { innerHTML: "" };

$userList.innerHTML = finalHtmlString;

console.log("최종 삽입될 innerHTML 값 :", $userList.innerHTML);

//------------------- 새로운 문제 -----------------

// 2-1
const library = {
  it: [{ title: "자바스크립트 바이블", price: 35000 }],
  history: [{ title: "세계사 대전", price: 28000 }],
};

const newBook = { title: "파이썬 웹 스크래핑", price: 42000 };
const targetCategory = "it"; // <- 이 변수를 사용하여 'it' 카테고리에 접근해야 합니다.

library[targetCategory].push(newBook);
// 여기에 코드를 작성하세요.
console.log(library);

// 2-2
const library2 = {
  it: [{ title: "자바스크립트 바이블", price: 35000 }],
  science: [
    { title: "우주의 비밀", price: 45000 }, // <- 이 도서의 가격을 30000으로 수정
    { title: "미래 과학", price: 32000 },
  ],
};

const targetCategory2 = "science";
const targetIndex = 0; // 이 인덱스를 사용해야 합니다.

//
library2[targetCategory2][targetIndex].price = 30000;

console.log(library2);

// 2-3

const library3 = {
  it: [{ title: "자바스크립트 바이블", price: 35000 }],
  history: [
    { title: "조선 왕조 실록", price: 25000 },
    { title: "한국사 입문", price: 18000 }, // <- 이 도서를 삭제
    { title: "세계 고대 문명", price: 30000 },
  ],
};

// 여기에 코드를 작성하세요. (힌트: 먼저 삭제할 도서의 인덱스(위치)를 찾아야 합니다.)
const historybooks = library3.history;
const indexTodelete = historybooks.findIndex((book) => {
  return book.title == "한국사 입문";
});

historybooks.splice(indexTodelete, 1);

console.log(library3);
// ---------------------------------------------------

//3-1
