function solution(n, left, right) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    if (n * (i + 1) < left || n * i > right) continue;
    for (let j = 0; j < n; j++) {
      if (n * i + j >= left && n * i + j <= right)
        j > i ? answer.push(j + 1) : answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
console.log(solution(5, 2, 5));
