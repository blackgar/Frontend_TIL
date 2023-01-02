function solution(n, words) {
  let wordObj = {};
  let attendantObj = {};
  for (let i = 1; i <= n; i++) {
    attendantObj[i] = 0;
  }
  let i = 1,
    lastLetter = "",
    flag = false;
  for (const word of words) {
    // console.log(i, "번 사람의", attendantObj[i], "번째 차례", wordObj[word])
    if (wordObj[word] || (flag && word[0] !== lastLetter))
      return [i, ++attendantObj[i]];
    wordObj[word] = 1;
    attendantObj[i]++;
    i++;
    lastLetter = word[word.length - 1];
    if (!flag) flag = true;
    if (i > n) i = 1;
  }
  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
