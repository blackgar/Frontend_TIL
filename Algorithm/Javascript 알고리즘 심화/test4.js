function solution(relation) {
  var answer = 0;
  // console.log(relation);
  const reverseRelation = relation.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );
  console.log(reverseRelation);
  // 하나의 속성으로 완료되는지 체크,
  // 두개씩 연계하기
  // 세개씩 연계하기 ... => 연계가 되면 그 줄은 없애기.
  for (let i = 0; i < relation.length; i++) {
    let tmp = {};
    let flag = true;
    for (const key of reverseRelation[i]) {
      tmp[key] = ++tmp[key] || 1;
      if (tmp[key] > 1) {
        flag = false;
        break;
      }
    }
    console.log(tmp);
    if (flag) answer += 1;
    reverseRelation.splice(i, i + 1, "100".repeat(reverseRelation[i].length));
  }
  return answer;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
// console.log(solution());
// console.log(solution());
// console.log(solution());
