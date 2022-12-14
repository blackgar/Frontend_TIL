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
  // 런타임에러 코드에서와의 차이점은 직접 sort메서드로 정렬한 후 제일 작은 수를 넣어줬다는 점
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);
  let arrayADivisor = checkDivisor(arrayA[0]);
  let arrayBDivisor = checkDivisor(arrayB[0]);
  let result1, result2;

  for (let i = 0; i < arrayADivisor.length; i++) {
    result1 = checkDivideOwn(arrayA, arrayADivisor[i]);
    result2 = checkDivideOther(arrayB, arrayADivisor[i]);
    if (result1 && result2) {
      numA = arrayADivisor[i];
      break;
    }
  }
  for (let i = 0; i < arrayBDivisor.length; i++) {
    result1 = checkDivideOwn(arrayB, arrayBDivisor[i]);
    result2 = checkDivideOther(arrayA, arrayBDivisor[i]);
    if (result1 && result2) {
      numB = arrayBDivisor[i];
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
