function sortArr(arr) {
  //     arr.sort(
  //   (a, b) =>
  //     (b[2] === undefined ? b[1] !== undefined ? b[1] : b[0] : b[2]) - (a[2] === undefined ? a[1] !== undefined ? b[1] : b[0] : a[2])
  // );
  //     arr.sort(
  //   (a, b) =>
  //     (b[1] === undefined ? b[0] : b[1]) - (a[1] === undefined ? a[0] : a[1])
  // );
  // arr.sort((a, b) => b[0] - a[0]);
  arr.sort(
    (a, b) =>
      (b[2] !== undefined ? b[2] : b[1] !== undefined ? b[1] : b[0]) -
      (a[2] !== undefined ? a[2] : a[1] !== undefined ? a[1] : a[0])
  );
  arr.sort(
    (a, b) =>
      (b[1] !== undefined ? b[1] : b[0]) - (a[1] !== undefined ? a[1] : a[0])
  );
  arr.sort((a, b) => b[0] - a[0]);
  return arr.join("") === "0".repeat(arr.length) ? "0" : arr.join("");
}

function solution(numbers) {
  if (numbers.length === 1) return numbers[0].toString();
  var answer = "";
  let numberObj = {};
  numbers.forEach((v) => {
    const tmp = v.toString();
    numberObj[tmp[0]]
      ? numberObj[tmp[0]].push(tmp)
      : (numberObj[tmp[0]] = [tmp]);
  });
  Object.keys(numberObj)
    .sort((a, b) => b - a)
    .forEach((key) => (answer += sortArr(numberObj[key])));

  // 정렬된 숫자들 중 제일 앞에 오는 숫자의 제일 앞자리수를 기준으로 앞자리가 같은 것끼리 정렬한다. 정렬할 때 규칙은 첫번째 자리는 같기 때문에 한자리 수 인 수들은 arr에 넣고 두번째 자리수가 나오면 두번째 자리수부터 넣고
  // for (let i = 0)
  return answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([3, 30, 34, 349, 348, 343]));
console.log(
  solution([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 101, 95, 951, 961, 89, 809, 831, 14, 552, 680,
  ])
);
// console.log(
//   solution([
//     9, 91, 92, 93, 950, 961, 911, 901, 912, 1000, 8, 81, 82, 83, 850, 861, 811,
//     801, 812, 0, 1, 101, 112,
//   ])
// );
