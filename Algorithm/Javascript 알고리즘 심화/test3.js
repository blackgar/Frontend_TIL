function solution(n) {
  let answer = 1;
  let range = Math.floor(n / 2) + 1;
  for (let i = 1; i < range; i++) {
    let tmp = 0;
    for (let j = i; j < range + 1; j++) {
      // console.log(i, j);
      tmp += j;
      if (tmp > n) break;
      else if (tmp === n) answer++;
      // console.log(tmp, answer);
    }
  }
  return answer;
}
console.log(solution(10000));
console.log(solution(9999));
console.log(solution(15));
console.log(solution(5));
console.log(solution(1));
