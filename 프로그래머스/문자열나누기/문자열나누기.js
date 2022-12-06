function solution(s) {
  if (s.length < 3) return 1;
  var answer = 0;
  let yes = 1,
    no = 0;
  let tmp = s[0];
  for (let i = 1; i < s.length; i++) {
    if (yes === no) {
      answer++, (yes = 1), (no = 0), (tmp = s[i]);
    } else if (s[i] === tmp) yes++;
    else if (s[i] !== tmp) no++;
    if (i === s.length - 1) answer++;
  }

  return answer;
}

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
