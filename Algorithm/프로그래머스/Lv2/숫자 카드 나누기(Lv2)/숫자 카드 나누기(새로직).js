// 현재 주어진 카드들 중 가장 작은 수의 약수 구하기
// 이유는 현재 모든 카드들 중에 가장 작은 수가 나누어 떨어지고 그 다음 큰 수들이 나누어 떨어져야 하므로 제일 작은 수의 약수를 구한 다음 그 약수로 주어진 카드를 나누어서 나누어떨어진다면 상대방 카드를 나눠서 나누어떨어지지 않는 약수를 찾는다.
function makeDivisor(num) {
  return;
}

// 내 카드와 상대방 카드를 나누어서 조건이 충족하는지 체크한다.
function divide(arr, num) {
  return;
}

function solution(arrayA, arrayB) {
  return;
}

console.log(solution([10, 17], [5, 20])); // 0
console.log(solution([10, 20], [5, 17])); // 10
console.log(solution([14, 35, 119], [18, 30, 102])); // 7
console.log(solution([11, 22], [100, 201, 301])); // 11
console.log(solution([1], [2])); // 2
console.log(solution([1, 1, 1], [2, 2, 2])); // 2
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11])); // 0
