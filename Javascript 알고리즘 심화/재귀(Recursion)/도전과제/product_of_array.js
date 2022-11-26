// 문제
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// 첫 번째 helper 메서드 활용
const productOfArray = (arr) => {
  let sum = 1;
  const countSum = (numArr) => {
    if (numArr.length === 0) return;
    sum *= numArr[0];
    countSum(numArr.slice(1));
  };
  countSum(arr);
  return sum;
};

// 두 번쨰 풀이
// function productOfArray(arr) {
//   if (arr.length === 0) {
//     return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
