function checkNow(arr) {
  let result = 0;
  for (let i = 0; i < arr[0].length; i++) {
    const tmp = arr[0][i] + Math.max(...arr[1].filter((_, idx) => idx !== i));
    // console.log(
    //   arr[0][i],
    //   arr[0],
    //   arr[1].filter((_, idx) => idx !== i),
    //   tmp
    // );
    if (result < tmp) result = arr[0][i];
  }
  return result;
}

function solution(land) {
  var answer = 0;
  // 전에 밟은 열은 못밟는다.
  // 밟았을 때 최대인 점수를 구해라.

  // 1. 현재 칸을 밟았을 때와 다음 밟지 못하는 칸의 최대값 그리고 남은 3칸중의 최대 값과 그것을 밟았을 때 못밟는 칸을 제외한 최대값을 모두 구한다. 거기서 더 큰 점수가 있는 곳을 밟아 가면된다.
  let step = 0;
  for (let i = 0; i < land.length - 1; i++) {
    // answer += checkNow([land[i], land[i + 1]]);
    if (i === 0) {
      for (let j = 0; j < land[i].length; j++) {
        const tmp =
          land[i][j] + Math.max(...land[i + 1].filter((_, idx) => idx !== j));
      }
    } else {
    }
    console.log(answer);
  }
  console.log(answer);
  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
