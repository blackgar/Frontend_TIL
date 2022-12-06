function solution(k, score) {
  let answer = [];
  let honer = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) honer.push(score[i]);
    let min = Math.min(...honer);
    if (i >= k) {
      if (score[i] > min) {
        let minIndex = honer.lastIndexOf(min);
        honer.splice(minIndex, 1, score[i]);
      }
    }
    min = Math.min(...honer);
    answer.push(min);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
let a = [1, 2, 3];
a.splice(1, 1, 100);
console.log(a);
