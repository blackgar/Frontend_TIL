function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    let tmp = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i] % 2 === 0 && arr2[i] % 2 === 0) {
        tmp = " " + tmp;
      } else {
        tmp = "#" + tmp;
      }
      arr1[i] = Math.floor(arr1[i] / 2);
      arr2[i] = Math.floor(arr2[i] / 2);
    }
    answer.push(tmp);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
