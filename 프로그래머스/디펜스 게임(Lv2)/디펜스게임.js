// 웨이브를 만나면 일단 n에서 다 제거한다.
// n이 다음 웨이브보다 적은 상황이라면 지금까지 만났던 웨이브에서 제일 큰 수의 몬스터를 만났을 때를 무적권을 써야하는 상황이었으므로 무적권을 사용한다.
// 무적권을 적용하고 무적권으로 소모됐던 병사 수를 n에 다시 채워준다.
// 그리고 n과 현재 몬스터 수를 다시 비교한다.
// 만약 현재 몬스터 수와 같거나 더 큰 상황이라면 다음 웨이브로
// 만약 적은 상황이라면 무적권 기회 남은만큼 비교하면서 다음 웨이브로 갈 수 있는지 판단하기.

function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;
  var answer = 0;
  let maxIndex = 0;
  let soldier = n;
  for (let i = 0; i < enemy.length; i++) {
    if (enemy[i] <= n) {
      n -= enemy[i];
    } else {
      maxIndex = i;
      break;
    }
  }
  console.log(maxIndex);
  let sortedArr = enemy.slice(0, maxIndex).sort((a, b) => a - b);
  console.log("디펜스 시작");
  for (let i = 0; i < enemy.length; i++) {
    console.log(i + 1, "번째 웨이브", soldier, enemy[i], k, answer);
    if (enemy[i] <= soldier) {
      soldier -= enemy[i];
    } else if (k > 0) {
      if (enemy[i] < sortedArr[sortedArr.length - 1]) {
        soldier += sortedArr.pop() - enemy[i];
      }
      k--;
    } else if (k === 0) break;
    answer++;
  }
  return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // 5
console.log(solution(2, 4, [3, 3, 3, 3])); // 4
console.log(solution(1, 1, [3, 2, 1])); // 1
console.log(solution(4, 1, [5, 4, 1])); // 2
console.log(solution(9, 2, [5, 4, 3, 2, 1, 1, 1, 1])); // 8
console.log(solution(1, 1, [2])); // 1
console.log(solution(1, 1, [1])); // 1
console.log(solution(1, 1, [1, 1])); // 2
console.log(solution(1, 1, [2, 1])); // 2
console.log(solution(1, 1, [2, 2])); // 1
