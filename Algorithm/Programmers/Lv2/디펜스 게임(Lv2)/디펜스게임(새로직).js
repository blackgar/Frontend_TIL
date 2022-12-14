function sortArr(arr, num) {
  let tmp;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      tmp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = tmp;
    } else if (arr[i - 1] >= arr[i]) break;
  }
  return arr;
}

function solution(n, k, enemy) {
  // k를 먼저 다 소모하고 다음부터 오는거랑 k 소모한 것들과 비교해서 다음웨이브 몬스터가 k썼던 것보다 크면 다음 웨이브 몬스터를 k 소모하고 k소모한 것들 중 제일 작은 값을 꺼내서 n에서 빼준다. 만약 이 때 그 값보다 n값이 작으면 그 순간은 더이상 못 막는다는 것이므로 해당 라운드보다 1 작은 값을 반환하면 된다.
  if (k >= enemy.length || enemy.reduce((a, b) => a + b) <= n)
    return enemy.length;
  var answer = 0;
  let tmp = 0;
  let mujuk = enemy.slice(0, k).sort((a, b) => b - a);
  for (let i = k; i < enemy.length; i++) {
    if (enemy[i] > mujuk[mujuk.length - 1]) {
      tmp = mujuk.pop();
      if (n < tmp) return i;
      else if (n >= tmp) {
        n -= tmp;
        mujuk.push(enemy[i]);
        mujuk = sortArr(mujuk, enemy[i]);
      }
    } else if (enemy[i] <= mujuk[mujuk.length - 1]) {
      if (n < enemy[i]) return i;
      else if (n >= enemy[i]) n -= enemy[i];
    }
    // mujuk.sort((a, b) => b - a);
  }
  // [4, 4, 2] 2와 5 비교 5가 더큼 2빼고 5를 여기에 넣는데 이전 값과 비교해서 더 크면 5를 4의 위치로 넣고 4를 2의 위치로 뺀다. 그리고 5와 그 앞에 값을 비교해서 5를 위치에 맞게 보낸다.
  return enemy.length;
}
console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // 5
console.log(solution(2, 4, [3, 3, 3, 3])); // 4
console.log(solution(7, 4, [7, 5, 3, 7, 2, 1, 1])); // 7
console.log(solution(1, 1, [3, 2, 1])); // 1
console.log(solution(4, 1, [5, 4, 1])); // 2
console.log(solution(9, 2, [5, 4, 3, 2, 1, 1, 1, 1])); // 8
console.log(solution(1, 1, [2])); // 1
console.log(solution(1, 1, [1])); // 1
console.log(solution(1, 1, [1, 1])); // 2
console.log(solution(1, 1, [2, 1])); // 2
console.log(solution(1, 1, [2, 2])); // 1
