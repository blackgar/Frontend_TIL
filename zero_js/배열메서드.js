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
