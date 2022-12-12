function solution(X, Y) {
  var answer = "";
  let xObj = {},
    yObj = {},
    commonObj = {};
  for (const char of X) {
    xObj[char] = ++xObj[char] || 1;
  }
  for (const char of Y) {
    yObj[char] = ++yObj[char] || 1;
  }
  for (const key in xObj) {
    if (key in yObj) {
      commonObj[key] = Math.min(xObj[key], yObj[key]);
    }
  }
  const keys = Object.keys(commonObj).sort((a, b) => b - a);
  if (keys.length === 0) return "-1";
  if (keys[0] === "0") return "0";
  for (const key of keys) {
    if (commonObj[key] > 0) answer += key.repeat(commonObj[key]);
  }
  answer = [...answer];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== "0") {
      answer = answer.slice(i);
      break;
    }
  }
  answer = answer.join("");
  return answer;
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
console.log(solution("5100000", "4000001")); // "100000"
