// 문제
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// const flatten = (arr) => {
//   const makeFlat = (newArr) => {
//     const tmp = newArr.flat();
//     if (JSON.stringify(tmp) === JSON.stringify(newArr)) return tmp;
//     return makeFlat(tmp);
//   };
//   return makeFlat(arr);
// };

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 방법 1
    if (Array.isArray(arr[i])) return flatten([].concat.apply([], arr));
    // 방법 2
    // if (Array.isArray(arr[i])) newArr = newArr.concat(flatten(arr[i]));
    else newArr.push(arr[i]);
  }
  return newArr;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[[2]]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// console.log([1, 2, 3] === [1, 2, [3]]);
// console.log([1, 2, 3] === [1, 2, 3]);
