function solution(storey) {
  var answer = 0;
  // 10으로 나눈 나머지가 5보다 크면 10 - 나머지 만큼 answer에 더해주고 기존의 숫자를 Math.floor(storey / 10) 해준다.
  // 그리고 10을 더해준다.
  // 만약 작으면 그냥 answer에 나머지만큼 더해주고 기존 숫자를 나눠준다.
  // 단 지금 숫자도 5고 다음 자리 숫자도 5라면 5를 더해주고
  const storeyStr = storey.toString();
  // console.log(len)
  let i = storeyStr.length - 1;
  while (i >= 0) {
    // console.log(storey, answer, i)
    // if (storey % 10 === 9 && Math.floor(storey / 10) % 10 === 9) {
    //     answer += 1
    //     continue
    // }
    if (
      (storey % 10 === 5 &&
        (Math.floor(storey / 10) % 10 === 5 ||
          Math.floor(storey / 10) % 10 === 9)) ||
      storey % 10 > 5
    ) {
      answer += 10 - (storey % 10);
      storey = Math.floor(storey / 10) + 1;
    } else {
      answer += storey % 10;
      storey = Math.floor(storey / 10);
    }
    i--;
    storey >= 10 ? i++ : null;
  }
  return answer;
}

console.log(solution(16));
console.log(solution(2554));
console.log(solution(95959));
console.log(solution(59595));
console.log(solution(9999));
