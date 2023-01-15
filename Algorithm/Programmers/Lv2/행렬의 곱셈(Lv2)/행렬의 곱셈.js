function solution(arr1, arr2) {
  var answer = [];
  // arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0], arr1[0][0] * arr2[0][1] + arr[0][1] * arr2[1][1]
  // arr1 열의 개수 === arr2 행의 개수
  for (let i = 0; i < arr1.length; i++) {
    const tmp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        // console.log([i,k], [k, j])
        // console.log(arr1[i][k], arr2[k][j])
        sum += arr1[i][k] * arr2[k][j];
      }
      tmp.push(sum);
      // console.log(tmp)
    }
    answer.push(tmp);
    // console.log(answer)
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(
  solution(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [3, 4],
      [1, 2],
    ]
  )
);
