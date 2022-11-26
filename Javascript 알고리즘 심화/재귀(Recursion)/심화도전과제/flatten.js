// 문제
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (arr) => {
  const makeFlat = (newArr) => {
    const tmp = newArr.flat();
    if (JSON.stringify(tmp) === JSON.stringify(newArr)) return tmp;
    return makeFlat(tmp);
  };
  return makeFlat(arr);
};

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[[2]]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// console.log([1, 2, 3] === [1, 2, [3]]);
// console.log([1, 2, 3] === [1, 2, 3]);
