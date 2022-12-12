function solution(d, budget) {
  let answer = 0;
  d = d.sort((a, b) => a - b);
  for (const request of d) {
    if (request > budget) break;
    budget -= request;
    answer++;
  }
  return answer;
}
