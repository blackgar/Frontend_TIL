// 속성이름과 속성값으로 구분이 필요할 때 사용
// 객체 리터럴
const me = {
  // 속성
  name: "윤관",
  year: 1994,
  month: 10,
  date: 19,
  gender: "M",
  "2nd_name": "ken",
};
// 키 값 접근 방법 . or 대괄호
console.log(me.name);
// 윤관
console.log(me["name"]);
// 윤관

console.log(me.date);
// 19
// console.log(me[date]);
// ReferenceError: date is not defined

// console.log(me.2nd_name);
// SyntaxError: missing ) after argument list
console.log(me["2nd_name"]);
// ken

// 객체 속성 및 추가
me.nation = "korea";
console.log(me.nation);
// korea

// 객체 속성 삭제
delete me.nation;
console.log(me);
// {name, year, month, date, gender, "2nd_name"}

// 배열과 함수가 객체인 이유
// 아래 코드처럼 값을 입력해도 반환값이 나온다.
function hello() {}
hello.a = "really?";
console.log(hello.a);

const array = [];
array.b = "wow";
console.log(array.b);

// but, 함수와 배열은 객체 리터럴과는 다른 목적으로 활용되기 때문에 일반적으로 임의 속성 값을 입력할 때는 객체 리터럴을 활용한다.

// 메서드에 대한 이해
// 객체의 속성 값으로 함수를 넣어서 메서드로 활용 가능
const customConsole = {
  log: function (value) {
    console.log(value, "신기하다");
  },
};
customConsole.log("우와 이거 진짜");
// 우와 이거 진짜 신기하다

// 객체는 모양이 같아도 생성할 때마다 새롭운 객체가 생성되므로 같아지려면 변수에 넣어야 한다.
console.log({} === {});
// false

// 객체는 변수안에 들어가있어야 같다고 나온다
// => 메모리가 바라보는 방향을 같게 만들어야 같다고 인식.
const a = {};
const b = [1, a];
console.log(a === b[1]);
/// true
console.log(b === [1, a]);
// false

// tmp2는 tmp를 바라보고 있기 때문에 tmp의 값이 바뀌면 tmp2의 값도 바뀐다.
const tmp = { name: "gwan" };
const tmp2 = tmp;
console.log(tmp === { name: "gwan" });
// false
tmp.name = "gwannn";
console.log(tmp2.name);
// gwannn

// 객체와의 차이를 인지해야한다. 메모리가 바라보는 값이 gwan이라는 값으로 바라보고 있어서 tmpa의 값을 변경해도 tmpb는 gwan을 그대로 바라보고 있다.
// 객체인 값과 객체가 아닌 값을 바라보는 방법이 컴퓨터에선 다르다.
let tmpa = "gwan";
let tmpb = tmpa;
tmpa = "hero";
console.log(tmpb);
// gwan
