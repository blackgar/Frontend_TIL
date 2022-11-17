function b() {
  var a = 1;
}
console.log(a);
// Uncaught ReferenceError: a is not defined

if (true) {
  var a = 1;
}

console.log(a);
// 1

// 아래의 반복문을 예시로 들면 for문은 동기 처리되고 안에 있는 setTimeout의 콜백함수는 비동기 처리가 된다. 반복문 안의 변수를 var로 선언할 경우 비동기처리가 되는 시점인 1초 뒤에는 이미 i의 값이 3이 되어 있기 때문에 아래 코드에서는 계속 3만 출력하게 된다.
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, (i + 1) * 1000);
}
// 3
// 3
// 3
console.log(i);
// 3

// 반대로 let으로 처리할 경우 블록안에 고정이 되기 때문에 비동기 처리할 때도 i값을 유지하고 있기에 정상적으로 0, 1, 2 순으로 나오게 된다.
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, (i + 1) * 1000);
}
// 0
// 1
// 2
console.log(i);
// Uncaught ReferenceError: i is not defined

// 즉, var은 함수 스코프라 함수가 아닌 블록에서 사용된다면, 그 함수가 끝날 때까지 그 값을 유지하고 있고
// let은 블록 스코프라 if, for, 함수의 {} << 이 블록안에서 벗어나는 순간 값을 유지하지 못한다.

// var로 for문 안의 값을 선언하더라도 let처럼 동작하게 하는 방법
// 즉시실행함수를 만들어서 인자값으로 i를 넣어주면 함수스코프로 동작하기 때문에 정상적으로 작동할 수 있게 된다.
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, (j + 1) * 1000);
  })(i);
}
console.log(i);
// 3
console.log(j);
// Uncaught ReferenceError: j is not defined
