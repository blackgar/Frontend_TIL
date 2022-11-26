// 이러한 특정 패턴으로 재귀를 활용
// const outer = (input) => {
//   let outerScopedVaiable = [];
//   const helper = (helperInput) => {
//     helper(helperInput--);
//   };
//   helper(input);
//   return outerScopedVaiable;
// };

// console.log(outer(5));

// 특정 배열에 원하는 값을 담고 싶을 떄는 helperRecursion 방법을 활용해서
// 재귀로 호출하는 함수 내에서 최종 배열 값을 수정하도록 하고 base case를 만나게 되면 값을 반환할 수 있게 하면 된다.
const collectOddValues = (arr) => {
  let result = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5]));
