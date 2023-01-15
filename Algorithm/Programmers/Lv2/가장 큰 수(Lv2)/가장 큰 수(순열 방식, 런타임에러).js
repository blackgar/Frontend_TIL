function getPermutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = getPermutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}

function solution(numbers) {
  if (numbers.length === 1) return numbers[0];
  var answer = "";
  const arr = getPermutation(numbers, numbers.length);
  console.log(arr);
  const numberArr = arr.map((v) => parseInt(v.join("")));
  answer = numberArr.sort((a, b) => b - a)[0].toString();
  return answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
