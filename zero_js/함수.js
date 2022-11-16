// 함수 선언의 세 가지 방법
// standard
function a() {}

// 변수로 함수 선언
const b = function () {};

// arrow function
const c = () => {
  // 안을 비워두면 이 부분이 생략되어 있는 것
  return undefined;
};

// return을 통해 반환값을 반환함과 동시에 함수 종료
const returnFunc = () => {
  return "반환값";
};
// return을 만나면 함수 종료
const earlyReturn = () => {
  if (true) {
    return;
  }
  console.log("실행이 안된다.");
};

console.log(returnFunc());
earlyReturn();

// 매개변수와 인수의 이해
const argFunc = (parameter) => {
  return parameter;
};

console.log(argFunc("argument"));

// 매개변수는 인수를 넣어주는 순서에 맞게 사용되며 매칭되지 않는 인수 및 매개변수는 undefined 반환
// 반대로 인수가 매개변수보다 많은 경우 주가된 인수는 사용되지 않는다.
const argsFunc = (param1, param2, param3, params4) => {
  return [param1, param2, param3, params4];
};

console.log(argsFunc("args1", "args2", "args3"));

// 1분 퀴즈
// 매개변수 x, y, z를 받아 곱한 값을 반환하는 multiply함수 구현
const multiply = (x, y, z) => {
  return x * y * z;
};
// return 생략가능
const multiply2 = (x, y, z) => x * y * z;
console.log(multiply(1, 2, 3));
// 6
console.log(multiply2(1, 2, 3));
// 6
