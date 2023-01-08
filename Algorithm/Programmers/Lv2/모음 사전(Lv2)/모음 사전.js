function pwr(arr, pick, list, result) {
  if (arr.length === pick) {
    result.push(arr.join(""));
    return;
  }
  for (let item of list) {
    arr.push(item);
    pwr(arr, pick, list, result);
    arr.pop();
  }
}

function solution(word) {
  var answer = 0;
  const result = [];
  const collection = ["A", "E", "I", "O", "U"];
  for (let i = 1; i < collection.length + 1; i++) {
    pwr([], i, collection, result);
  }
  // console.log(result.sort());
  result.sort();
  answer = result.indexOf(word) + 1;
  return answer;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
