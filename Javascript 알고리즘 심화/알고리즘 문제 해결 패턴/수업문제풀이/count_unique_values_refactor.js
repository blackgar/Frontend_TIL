const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return left + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, 0, 1, 1, 2]));
