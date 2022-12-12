// const averagePair = () => {}

// 문제
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// 첫 번째 풀이(단순 2중 for문 O(N^2))
// const averagePair = (arr, num) => {
//   if (arr.length < 2) return false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) / 2 === num) return true;
//     }
//   }
//   return false;
// };

// 두 번째 풀이(Multiple Pointer O(N))
// const averagePair = (arr, num) => {
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     let tmp = (arr[left] + arr[right]) / 2;
//     if (tmp < num) left++;
//     else if (tmp > num) right--;
//     else if (tmp === num) return true;
//   }
//   return false;
// };

// 세 번째 풀이(O(N) + 공간복잡도 O(1))
const averagePair = (arr, num) => {};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
