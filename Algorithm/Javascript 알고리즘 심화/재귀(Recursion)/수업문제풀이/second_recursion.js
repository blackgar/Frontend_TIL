const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

sumRange(5);

const factorialForLoop = (num) => {
  let sum = 1;
  for (let i = 1; i < num + 1; i++) {
    sum *= i;
  }
  return sum;
};

const factorialRecursion = (num) => {
  if (num === 1) return 1;
  return num * factorialRecursion(num - 1);
};

const factorialStackOverflow = (num) => {
  if (num === 1) console.log(1);
  return num * factorialStackOverflow(num - 1);
};
console.log(factorialForLoop(5));
console.log(factorialRecursion(5));
factorialStackOverflow(5); // RangeError: Maximum call stack size exceeded 에러 발생
