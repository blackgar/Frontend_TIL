// const minSubArrayLen = (arr, num) => {}

// 문제
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

const minSubArrayLen = (arr, num) => {
  // 첫번째 인덱스에서 시작해서 주어진 숫자보다 크거나 같은 배열이 될 때까지 더해나간다.
  // 조건을 만족하면 다시 인덱스는 두번째 인덱스로 와서 다시 찾아나가는 과정을 반복한다.
  // 그러는 과정에서 이전에 조건을 만족했던 배열보다 짧은 배열이 나오게 되면 그 배열의 길이로 바꿔준다.
  // 끝까지 탐색한다.
  // 끝까지 탐색했을 때 합이 주어진 숫자보다 작다면 더 찾아볼 필요 없으므로 return
  // 끝까지 탐색했는데 더 크다 그러면 왼쪽 하나씩 줄여나가면서 체크
  if (arr.reduce((a, b) => a + b) < num) return 0;
  let left = 0,
    right = 0,
    sum = 0,
    len = Infinity;

  while (left < arr.length) {
    if (sum >= num) {
      if (len > right - left) len = right - left;
      sum -= arr[left];
      left++;
    } else {
      if (right === arr.length) return len;
      sum += arr[right];
      right++;
    }
  }

  return len;
  // 4 4 3 3 2
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
