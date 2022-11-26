const a = [1, 3];

// 배열 길이 출력 length
console.log(a.length);

// 인덱스로 해당 값에 접근 가능
a[1] = 2;
console.log(a);
// 1, 2

// 배열의 마지막 인덱스보다 큰 값으로 인덱스 접근시 해당 인덱스에 값 추가
a[2] = 3;
console.log(a);
// 1, 2, 3

// 만약 배열의 길이가 3인데 인덱스 4에 접근하면 인덱스 3에는 빈 값이 들어가고 인덱스 4에 값이 들어가게 된다.
// a[4] = 4;
// console.log(a)
// 1, 2, 3, <빈값>, 4

// 배열 길이 출력 length
console.log(a[a.length - 1]);
// 3

// 배열 마지막 인덱스에 값 추가
a.push(4);
console.log(a);
// 1, 2, 3, 4

// 배열 마지막 인덱스 값 추출
a.pop();
console.log(a);
// 1, 2, 3

// 배열 가장 앞 인덱스에 값 추가
a.unshift(4);
console.log(a);
// 4, 1, 2, 3

// 배열 가장 값 값 추출
a.shift();
console.log(a);
// 1, 2, 3

const b = [1, 1, 2, 3, 4, 5];

// 1번 인덱스부터 2번 지우기
b.splice(1, 2);
console.log(b);
// 1, 3, 4, 5

// 1번 인덱스부터 끝가지 지우기(생략시)
b.splice(1);
console.log(b);
// 1

// 0번째부터 1번 지우고 2, 3, 4라는 값 삽입
b.splice(0, 1, 2, 3, 4);
console.log(b);
// 2, 3, 4

// 값 삽입
b.splice(0, 0, 1);
console.log(b);
// 1, 2, 3, 4

const c = [1, 2, 3, 4, 3];
// 해당 배열에 해당 값이 있는지 확인하는 메서드
const result = c.includes(3);
console.log(result);
// true
const result2 = c.includes(5);
console.log(result2);
// false

// 해당 배열에 해당 값의 인덱스를 반환하는 메서드
const index = c.indexOf(1);
console.log(index);
// 0
const index2 = c.indexOf(2);
console.log(index2);
// 1
// 해당 배열에 마지막으로 해당 값이 들어있는 인덱스
const lastIndex = c.lastIndexOf(3);
console.log(lastIndex);
// 4
// 값이 없으면 -1 반환
const noIndex = c.indexOf(5);
console.log(noIndex);
// -1

// 1분 퀴즈
// 다음 배열에서 "라"를 모두 제거하시오. indexOf와 splice 활용
const arr = ["가", "라", "다", "라", "마", "라"];
const arr2 = ["가", "라", "다", "라", "마", "라"];
while (arr.includes("라")) {
  arr.splice(arr.indexOf("라"), 1);
}
// includes를 사용안하고 indexOf와 splice만 사용한다면
while (arr2.indexOf("라") !== -1) {
  arr2.splice(arr2.indexOf("라"), 1);
}
console.log(arr);
// "가", "다", "마"
console.log(arr2);
// "가", "다", "마"

// 배열메서드 심화 부분
a = [1, 2, 3, 4];
// 배열 첫번째 값부터 마지막 값까지 callback 함수 내부에 적용한 로직을 거친 새로운 배열 반환
const arrayMap = a.map((v) => v + 1);
console.log(arrayMap);
// [2, 3, 4, 5]
// 배열 첫번째부터 마지막까지 callback 함수 내부에 적용한 조건에 참인 경우에만 새로운 배열로 반환
const arrayFilter = a.filter((v) => v === 1);
console.log(arrayFilter);
// [1]
// callback 함수내의 로직으로 계산된 값이 prev에 누적되어서 최종 누적값을 반환
const arrayReduce = a.reduce((prev, current) => prev + current);
console.log(arrayReduce);
// 10

tmpForEach = [];
// 새로운 반환값 없이 callback 함수 내의 로직을 실행(단순 반복문)
const arrayForEach = a.forEach((v, i) => tmpForEach.push([v, i]));
console.log(arrayForEach);
// undefined
console.log(tmpForEach);
// [[1, 0], [2, 1], [3, 2], [4, 3]]

b = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
b_1 = [1, [[2, 3], [[4, 5, 6]]]];
// 2차원 배열을 1차원배열로 값을 모두 가져와서 반환한다.
// ES2019에서 처음 나온 메서드이다. 기존에는 concat활용.
const arrayFlat = b.flat();
console.log(arrayFlat);
// [1, 2, 3, 1, 2, 3, 1, 2, 3];

const arrayFlat2 = b_1.flat();
console.log(arrayFlat2);
// [1, [2, 3], [[4, 5, 6]]]
const arrayFlat3 = b_1.flat(2);
console.log(arrayFlat3);
// [1, 2, 3, [4, 5, 6]]
const arrayFlat4 = b_1.flat(3);
console.log(arrayFlat4);
//[1, 2, 3, 4, 5, 6]

// 배열끼리 합치는 메서드 concat
const arrayConcat1 = a.concat(b);
console.log(arrayConcat1);
// [1, 2, 3, 4, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
// apply 적용
console.log([].concat.apply([2], [[99], 5, 6, [2, 3]]));
// [2, 99, 5, 6, 2, 3]
// apply를 활용해 빈 배열에 2차원 배열을 1차원으로 합치기
// concat은 depth 설정 불가
const arrayConcat2 = [].concat.apply([], b);
console.log(arrayConcat2);
// [1, 2, 3, 1, 2, 3, 1, 2, 3]

c = [5, 1, 2, 6, 1, 6, 8, 9];
// a, b를 비교하는데 compareFunc => a-b에 맞게 a-b의 값이 0보다 크면 b를 앞으로 0보다 작으면 a를 앞으로 정렬하여 모든 수를 다 비교 정렬한 다음 그 값을 반환한다.
// 오름차순 정렬
const arraySort1 = c.sort((a, b) => a - b);
console.log(arraySort1);
// [1, 1, 2, 5, 6, 6, 8, 9]
// 내림차순 정렬
const arraySort2 = c.sort((a, b) => b - a);
console.log(arraySort2);
// [9, 8, 6, 6, 5, 2, 1, 1]

d = ["가", "나", "다", 1];
// 배열의 값들 중 callback 함수의 로직을 모두 통과해야 true 하나라도 통과하지 못하면 false 반환
// 통과하지 못하는 false값을 지니는 것 : 빈문자열, false, 0, null, undefined, NaN.
// 착각하면 안되는게 빈 배열, 빈 object는 객체이기때문에 언제나 true
const arrayEvery = d.every((v) => isNaN(v));
console.log(arrayEvery);
// false
// 배열의 값들 중 callback 함수의 로직을 하나라도 통과하면 true 하나도 통과하지 못하면 false 반환
const arraySome = d.some((v) => isNaN(v));
console.log(arraySome);
// true

const $table = document.createElement("table");
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    $tr.append($td);
  }
  $table.append($tr);
}
// 현재 확인할 수 있듯이 table 태그의 자손을 출력해보면 배열이 아닌 값으로 출력된다.
console.log($table.children);
// HTMLCollection(3) [tr, tr, tr] => 배열처럼 생겼지만, 배열이 아님
console.log(typeof $table.children);
// object
// Array.from안에 배열처럼 생겼지만, 배열이 아닌 값을 넣게 되면 배열로 변경시켜준다.
const arrayFrom = Array.from($table.children);
console.log(arrayFrom);
// (3) [tr, tr, tr] => 배열로 변경시켜준다.

const e = [1, [2], [[3, 4]]];

// 어떠한 값 내부의 값이 배열인지 아닌지 판단해주는 메서드
// 첫 번째 값의 경우 배열이 아니고 그냥 숫자이므로 false반환
const isArray1 = Array.isArray(e[0]);
// 세 번째 값은 배열안에 들어있는 값이므로 true반환
const isArray2 = Array.isArray(e[2]);
console.log(isArray1); // false
console.log(typeof e[0]); // number
console.log(isArray2); // true
console.log(typeof e[2]); // object
