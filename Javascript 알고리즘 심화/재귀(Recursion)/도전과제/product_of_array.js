// 문제
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

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

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
