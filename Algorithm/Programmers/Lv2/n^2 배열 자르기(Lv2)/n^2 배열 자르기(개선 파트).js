function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
console.log(solution(5, 2, 5));
