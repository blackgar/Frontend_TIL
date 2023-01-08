// 현재 문제의 조건에 n은 10^7까지 주어질 수 있다고 했기 때문에
// 아래 처럼 직접 배열을 만들게 되면 메모리 에러가 나게 됩니다.
// 또한, 배열을 만들지 않고 규칙을 찾아서 모든 배열의 요소만큼 2중 반복문을 돌게 되면 시간복잡도 문제가 발생하게 됩니다.
// 이를 해결하기 위해서 2중반복문을 돌되 필요없는 구간은 탐색하지 않고 필요한 구간만 탐색하면서 배열을 직접 생성하지 않고 규칙을 찾아 코드를 구현하면 이와 같은 문제를 해결할 수 있게 됩니다.
function solution(n, left, right) {
  var answer = [];
  const arr = [];
  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < n; j++) {
      tmp.push(0);
    }
    arr.push(tmp);
  }
  // let arr = Array(n).fill([])
  // arr = arr.map((v, i) => arr[i] = Array(n).fill(0))
  console.log(arr);
  // [1, 2, 3], [2, 2, 3], [3, 3, 3]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j > i) arr[i][j] = j + 1;
      else arr[i][j] = i + 1;
    }
  }
  // answer = arr.flat().slice(left, right+1)
  const flatArr = [].concat.apply([], arr);
  console.log(flatArr);
  answer = flatArr.slice(left, right + 1);
  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
console.log(solution(5, 2, 5));
