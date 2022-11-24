// javascript의 generator()을 활용해서 값을 yield로 만든다음 gen.next().value로 값을 가져와서 보여줄 수 있도록 한다.
// 알고리즘은 숫자가 주어지면 그 숫자보다 작은 숫자들 중에 소수들을 반환하는 문제.
// 에라토스테네스의 체를 활용해서 계산한다음 값을 yield를 통해 반환.

function* getPrimes(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(1);
  }

  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = 0;
      }
    }
  }
  arr.splice(0, 2, false, false);

  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) yield index;
  }
  // arr.forEach((v, i) => (v ? yield i : null));
}

// getPrimes(10000);
const gen = getPrimes(10000);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

const gen2 = getPrimes(2);
console.log(gen2.next().value);
console.log(gen2.next().value);
