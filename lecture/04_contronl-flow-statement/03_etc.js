/**
 * 📌 기타 제어문 
 * 1. 반복문 내에 사용되며, 반복문의 흐름을 제어하는 역할 
 * 2. 주요 종류 및 작성법 
 *   1) break문 
 *      → 현재 속한 반복문을 종료하는 역할 
 *         break;
 *   2) continue문 
 *      → 현재 속한 반복문의 나머지 코드를 실행하지 않고 조건 검사로 이동하는 역할 
 *         continue;
 *   3) label문 (비추천)
 *      → 반복문에 라벨을 붙여서 해당 라벨이 붙은 반복문을 제어하는 역할 
 *      → break문과 continue문을 통해 특정 라벨이 붙은 반복문을 제어할 수 있음 
 *         label: 반복문;
 */
//1. break 문
//예시1) 반복문 수행시마다 난수 (1~100) 출력
//단, 5의 배수일때 반복 종료

while(true) {

  let random =Math.floor(Math.random()*100 +1);
  console.log(random);
  if(random%5 ===0){
    break;
  }
}

//2)예시 Continue
// 1부터 100 까지의 총 합계 구하기

let sum =0;
for(let i=1; i<=100; i++){
  sum += i;
}
console.log(sum);

const num = 11;
if (
num%2==0
) {
  console.log("even");
} else {
  console.log("odd");
}