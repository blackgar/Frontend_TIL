function solution(maps) {
  var answer = [];
  let foodArr = [];
  let indexArr = [];
  // 상하좌우로 연결되는 곳이 하나라도 있으면 하나의 무인도로 취급한다.
  // 적힌 숫자는 식량이다 그 섬에 적힌 숫자를 다 합친 것이 며칠동안 버틸 수 있는지를 나타내는 수치이다.
  // 오름차순으로 섬에서 살아남을 수 있는 숫자를 정렬한다.

  // 1. 2중 반복문을 통해 배열을 돌면서 상하좌우 체크한다.
  // 2. 연결되는지 아닌지 여부를 판단할때는 첫번째 배열부터 돌면서 가장 먼저 발견되는 숫자를 기준으로 오른쪽으로 이동해서 연결되는 범위를 체크한다.
  // 재귀로 푸는게 좋을듯? 처음 발견하는 칸에서 시작하고 발견한 숫자의 좌표값을 배열에 담는다. 그래서 상하좌우 돌면서 해당 칸이 탐색됐는지 여부를 체크하고 탐색한 적 없다면 마찬가지로 식량 배열에 값을 담는다.

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // const checkIsland = (y, x) => {
  //     for (let i = 0; i < 4; i++) {
  //         const nx = x + dx[i];
  //         const ny = y + dy[i];
  //         if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps.length && maps[ny][nx] !== "X" && !indexArr.includes([ny, nx])) {
  //             indexArr.push([ny, nx]);
  //             checkIsland(ny, nx);
  //         }
  //     }
  // }

  for (let y = 0; y < maps.length; y++) {
    for (let x = 0; x < maps.length; x++) {
      if (indexArr.includes([y, x])) continue;
      for (let i = 0; i < 4; i++) {
        
      }
    }
  }

  return answer;
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
