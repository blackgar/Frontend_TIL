function solution(board) {
  let answer = 1234;
  // 하나씩 찾아가면서 1을 만나면 가로 체크해서 1이 끝나는 지점까지 간다. 1이 끝나는 지점까지의 길이를 체크하고
  // 현재 인덱스에서 그 길이만큼 사각형 범위를 체크해서 모두 1인지 체크한다. 만약 모두 1이라면 max값 갱신
  // 그렇게 1이 끝나는 칸부터 찾아나가기. 또 1을 만나면 1이 끝나는 부분 체크하고 그 길이가 max값의 길이보다 짧으면
  // 다시 1이 끝나는 지점에서 탐색 시작.
  let max = 0,
    len = 0,
    verLen = 0;
  for (let i = 0; i < board.length; i++) {
    let left = 0,
      right = 0;
    // 첫 번째 칸부터 탐색하다가 1이 발견되면 사각형 탐색을 시작한다.
    while (left < board[i].length) {
      console.log(left, right);
      if (board[i][left] === 1) {
        console.log(board[i][left]);
        // 사각형 담아줄 변수
        let tmp = [];
        // 오른쪽 인덱스 값이 전체 보드의 길이를 넘어가지 않을 때까지 반복
        while (right < board[i].length) {
          // 만약 0이 발견되면 거기까지만 탐색
          if (board[i][right] === 0) break;
          // 계속 1이라면 길이를 더해주면서 가로줄 계속 탐색
          verLen++;
          right++;
        }
        // 탐색한 길이가 이전에 발견된 사각형의 한 변의 길이보다 길다면 사각형인지 여부 탐색
        if (verLen > len && verLen + i < board.length) {
          // 현재 i행부터 사각형 길이의 i+verLen행까지 탐색하면서 slice로 사각형을 tmp에 넣어준다.
          for (let j = i; j < verLen + i; j++) {
            tmp.push(board[j].slice(left, left + verLen + 1));
          }
          // tmp flat해서 모두 1인지 체크한다.
          if (tmp.flat().every((v) => v === 1)) {
            // 모두 1이라면 사각형 넓이를 max에 현재 가로 길이를 len에 넣어준다.
            max = verLen * verLen;
            len = verLen;
            verLen = 0;
            // 만약 사각형이 아니라면 left를 right값부터 다시 탐색하도록 한다.
          } else {
            left = right + 1;
          }
        }
      } else {
        left++;
      }
    }
  }

  return max;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);

console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
