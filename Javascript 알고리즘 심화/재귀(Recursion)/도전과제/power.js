// 문제
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

const power = (num1, num2) => {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
