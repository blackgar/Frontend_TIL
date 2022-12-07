function solution(number, limit, power) {
  var answer = 0;
  let count = 0;
  for (let i = 1; i < number + 1; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (j * j === i) count++;
      else if (i % j === 0) count += 2;
      if (count > limit) {
        count = power;
        break;
      }
    }
    answer += count;
    count = 0;
  }

  return answer;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
