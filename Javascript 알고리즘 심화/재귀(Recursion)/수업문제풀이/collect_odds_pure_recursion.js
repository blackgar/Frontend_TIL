// 배열에 대한 접근을 순수 재귀로 진행할 떄는 concat, slice, ...연산자를 활용해서 접근 할 수 있다.
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
