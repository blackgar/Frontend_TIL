function checkDivisor(num) {
  let tmp = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (i * i === num) tmp.push(i);
    else if (num % i === 0) {
      tmp.push(i);
      tmp.push(num / i);
    }
  }
  tmp = tmp.sort((a, b) => b - a);
  return tmp;
}

function checkDivideOwn(arr, num) {
  let tmp = [];
  // console.log(arr, num)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      tmp.push(i);
    } else {
      break;
    }
  }
  return tmp.length === arr.length;
}

function checkDivideOther(arr, num) {
  let tmp = [];
  // console.log(arr, num)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      tmp.push(i);
      break;
    }
  }
  return tmp.length === 0;
}

function solution(arrayA, arrayB) {
  let answer = 0;
  let numA = 0,
    numB = 0;
  // 배열에 들어있는 수들 중에 제일 작은 값부터 약수를 찾아서 그 약수로 해당 배열을 나눠보고
  // 모두 나누어지면 다른 배열이 나누어지지 않는지 확인한다.
  let arrayADivisor = checkDivisor(Math.min(...arrayA));
  let arrayBDivisor = checkDivisor(Math.min(...arrayB));
  let result1, result2;
  // console.log(arrayADivisor, arrayBDivisor)
  // console.log(arrayA, arrayB)

  // arrayA가 나누어지는 수 중에 제일 큰 값 arrayB가 나누어지는 수 중에 제일 큰 값을 찾고
  // 반복문을 한번 더 돌면서 해당 약수가 반대쪽에 나누어지지 않는지 확인하기.
  for (let i = 0; i < arrayADivisor.length; i++) {
    result1 = checkDivideOwn(arrayA, arrayADivisor[i]);
    result2 = checkDivideOther(arrayB, arrayADivisor[i]);
    // console.log("arrayA", result1)
    // console.log("arrayA", result2)
    if (result1 && result2) {
      numA = arrayADivisor[i];
      // console.log("numA", numA)
      break;
    }
  }
  for (let i = 0; i < arrayBDivisor.length; i++) {
    // console.log("arrayB", result1)
    // console.log("arrayB", result2)
    result1 = checkDivideOwn(arrayB, arrayBDivisor[i]);
    result2 = checkDivideOther(arrayA, arrayBDivisor[i]);
    if (result1 && result2) {
      numB = arrayBDivisor[i];
      // console.log("numB", numB)
      break;
    }
  }
  answer = Math.max(numA, numB);
  return answer;
}

console.log(solution([10, 17], [5, 20])); // 0
console.log(solution([10, 20], [5, 17])); // 10
console.log(solution([14, 35, 119], [18, 30, 102])); // 7
console.log(solution([11, 22], [100, 201, 301])); // 11
console.log(solution([1], [2])); // 2
console.log(solution([1, 1, 1], [2, 2, 2])); // 2
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11])); // 0
