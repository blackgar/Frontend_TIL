function solution(numbers, hand) {
  var answer = "";
  // 1 4 7, 3 6 9 두 경우일때 구분하기
  // 2 5 8 0 의 경우 좌표값과 현재 각 손의 위치의 차이를 비교한 다음 가까운 손 선택 (단, 같을 때는 어느 손잡이인지 기준으로 선택)
  let phone = {};
  let number = 1;
  phone["*"] = [3, 0];
  phone[0] = [3, 1];
  phone["#"] = [3, 2];
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      phone[number] = [y, x];
      number++;
    }
  }

  const mustLeft = [1, 4, 7],
    mustRight = [3, 6, 9];
  let left = phone["*"],
    right = phone["#"],
    distanceLeft = 0,
    distanceRight = 0,
    key;
  for (let i = 0; i < numbers.length; i++) {
    if (mustLeft.includes(numbers[i])) {
      left = phone[numbers[i]];
      answer += "L";
    } else if (mustRight.includes(numbers[i])) {
      right = phone[numbers[i]];
      answer += "R";
    } else {
      distanceLeft =
        Math.abs(left[0] - phone[numbers[i]][0]) +
        Math.abs(left[1] - phone[numbers[i]][1]);
      distanceRight =
        Math.abs(right[0] - phone[numbers[i]][0]) +
        Math.abs(right[1] - phone[numbers[i]][1]);
      if (distanceLeft < distanceRight) {
        answer += "L";
        left = phone[numbers[i]];
      } else if (distanceLeft > distanceRight) {
        answer += "R";
        right = phone[numbers[i]];
      } else if (distanceLeft === distanceRight) {
        hand === "right"
          ? ((answer += "R"), (right = phone[numbers[i]]))
          : ((answer += "L"), (left = phone[numbers[i]]));
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"
