// 문제
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

const sameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  const obj = {};
  for (let number of str1) {
    obj[number] = ++obj[number] || 1;
  }
  for (let number of str2) {
    if (obj[number]) --obj[number];
    else return false;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
