function checkSquareLen = ()

function solution(board) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
      }
    }
  }

  return answer;
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