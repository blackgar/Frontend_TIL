// 문제
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// non recursive
// function capitalizeFirst(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const tmp = arr[i][0].toUpperCase() + arr[i].slice(1);
//     newArr.push(tmp);
//   }
//   return newArr;
// }

// recursive function
const capitalizeFirst = (arr) => {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  const res = capitalizeFirst(arr.slice(1));
};
const a = [1, 2, 3, 4, 5];
console.log(a.slice(0, -1));
console.log(a.slice(a.length - 1));

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
