function checkPrime(num) {
  if (num === 1 || !num) return false;
  if (num <= 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  var answer = 0;
  const changeNum = n.toString(k);
  // 소수로 바꿨을 떄 0을 만나게 되면 그 전까지 수가 소수인지를 판별한다.
  // console.log(changeNum);
  let tmp = "";
  for (let i = 0; i < changeNum.length; i++) {
    if (changeNum[i] === "0") {
      checkPrime(parseInt(tmp)) ? answer++ : null;
      tmp = "";
    } else if (i === changeNum.length - 1) {
      tmp += changeNum[i];
      checkPrime(parseInt(tmp)) ? answer++ : null;
    } else {
      tmp += changeNum[i];
    }
  }

  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
