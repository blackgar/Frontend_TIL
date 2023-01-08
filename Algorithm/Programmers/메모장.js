// function pwr(items, pick, list, result) {
//   if (items.length === pick) {
//     result.push(items);
//     return;
//   }

//   for (let i = 0; i < list.length; i++) {
//     pwr([...items, list[i]], pick, list, result);
//   }
// }

// const list = ["a", "b", "c", "d", "e"];
// const pick = 3;
// const result = [];
// console.log(pwr([], pick, list, result));

const cases = ["A", "B", "C"];
const outArr = [];
const permuteRepl = (array, n, eachElements, outArr) => {
  // 재귀 종료문
  if (array.length == n) {
    outArr.push(JSON.parse(JSON.stringify(array))); // 깊은 복사
    return;
  }
  for (let el of eachElements) {
    array.push(el);
    permuteRepl(array, n, eachElements, outArr);
    array.pop();
  }
};
permuteRepl([], cases.length, cases, outArr);
console.log(outArr.map((_) => _.join("")));
