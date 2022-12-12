function solution(want, number, discount) {
  var answer = 0;

  let obj = {};
  let sum = 0;
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
    sum += number[i];
  }

  console.log(obj);
  for (let i = 0; i < discount.length - sum; i++) {
    let flag = true;
    let tmp = {};
    for (const product of want.slice(i, sum + 1)) {
      tmp[product] = ++tmp[product] || 1;
    }
    for (const key in obj) {
      if (obj[key] !== tmp[key]) {
        flag = false;
        break;
      }
    }
    if (flag) answer = i + 1;
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
