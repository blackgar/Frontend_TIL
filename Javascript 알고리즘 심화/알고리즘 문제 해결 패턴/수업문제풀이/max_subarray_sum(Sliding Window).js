const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    tmp = 0;
    for (let j = 0; j < num; j++) {
      tmp += arr[i + j];
    }
    if (tmp > max) max = tmp;
  }
  return max;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 2)); // null
