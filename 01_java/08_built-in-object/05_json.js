/**
 * 📌 JSON
 * 1. JavaScript Object Notation (자바스크립트 객체 표기법)
 * 2. JavaScript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
 * 3. 사람과 시스템이 모두 쉽게 읽고 분석할 수 있는 형태를 가지고 있음
 *     → 웹 환경에서 서버와 클라이언트 간 데이터를 전송할 때 교환 형식으로 주로 사용
 * 4. JavaScript 객체와 일부 차이점을 가짐
 *     1) JSON은 반드시 속성을 큰 따옴표("")로 묶은 문자열로 표시
 *     2) JSON은 숫자가 0으로 시작하는 것을 허용하지 않음
 *     3) JSON은 반드시 소숫점 뒤에 적어도 한 자릿수가 뒤따라야 함
 *     4) JSON은 NaN과 Infinity를 지원하지 않음
 *     5) JSON은 trailing comma(후행 쉼표)를 허용하지 않음
 * 5. 예시 형식
 *    {
 *      "squadName": "Super hero squad",
 *      "homeTown": "Metro City",
 *      "formed": 2016,
 *      "secretBase": "Super tower",
 *      "active": true,
 *      "members": [
 *        {
 *          "name": "Molecule Man",
 *          "age": 29,
 *          "secretIdentity": "Dan Jukes",
 *          "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
 *        },
 *        {
 *          "name": "Madame Uppercut",
 *          "age": 39,
 *          "secretIdentity": "Jane Wilson",
 *          "powers": [
 *            "Million tonne punch",
 *            "Damage resistance",
 *            "Superhuman reflexes"
 *          ]
 *        },
 *        {
 *          "name": "Eternal Flame",
 *          "age": 1000000,
 *          "secretIdentity": "Unknown",
 *          "powers": [
 *            "Immortality",
 *            "Heat Immunity",
 *            "Inferno",
 *            "Teleportation",
 *            "Interdimensional travel"
 *          ]
 *        }
 *      ]
 *    }
 * 6. JSON 내장 객체 메소드
 *   1) JSON.stringify(value)
 *       → JavaScript 값이나 객체를 JSON 문자열로 변환
 *       → JavaScript 데이터를 서버로 데이터를 보낼 때 주로 활용
 *   2) JSON.parse(text)
 *       → JSON 문자열의 구문을 분석하고 그 결과에서 JavaScript 값이나 객체를 생성
 *       → 서버로부터 받은 JSON 문자열 데이터를 JavaScript 데이터로 바꿀 때 주로 활용
 */
 
 
 /*
  실습. printObject() 함수 구현 
  1. 기능
     JSON 문자열을 전달 받아 JavaScript 객체로 변환 뒤 각 속성 정보를 출력해주는 함수 
  2. 인자
     JSON 문자열
  3. 반환
     없음
*/
/*
  실습. yesCheck() 함수 구현하기 
  1. 기능 
     인자가 'yes' | 'Yes' | 'y' | 'Y', '   yes', 'y es' 등 yes를 의미하는 값이면 true를 반환하는 함수
  2. 인자
     문자열 1개
  3. 반환
     true 또는 false
*/

/*
  실습. addCarMaker() 함수 구현하기
  1. 기능
     인자로 전달된 배열의 각 요소 car 객체의 model 프로퍼티값이 
     K로 시작하면 maker: 'Kia', G로 시작하면 maker: 'Genesis' 를 
     배열의 각 요소 car 객체에 추가한 후 해당 객체 정보 출력
  2. 인자
     car 객체가 저장된 배열
  3. 반환
     없음

  ex) 
  // 여러 car객체{} 들이 담겨있는 배열 
  const cars = [    
    { model: 'K3',  },
    { model: 'K5',  },
    { model: 'K8',  },
    { model: 'K9',  },
    { model: 'GV70',  },
    { model: 'G80',  },
    { model: 'GV80',  },
  ];
  addCarMaker(cars);
*/

// 결론 : Json = 문자기준, 자바스크립트 객체를 문자로 나열한 표기법
// JSON.parse(text) : JSON 문자열 을 배열로
//JSON.stringify(value) : 객체-값 을 JSON 문자열로


const product = {
  name: '마우스',
  brand: '로지텍',
  price: 50000,
  model: ['G304', 'MX Master']
};

console.log(JSON.stringify(product));

const productStr = JSON.stringify(product);
console.log(JSON.parse(productStr));
