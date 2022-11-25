// const areThereDuplicates = () => { };

// 문제
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// 첫번째 풀이(단순 비교)
const areThereDuplicates = (...args) => {
  if (args.length === 0) return true;
  args.sort();
  let tmp;
  for (let char of args) {
    if (tmp === char) return true;
    else tmp = char;
  }
  return false;
};

// 두번쨰 풀이(FrequencyCount, O(N))
const areThereDuplicates = (...args) => {
  const obj = {};
  for (let char of args) {
    obj[char] = ++obj[char] || 1;
    if (obj[char] > 1) return true;
  }
  return false;
};

// 세번째 풀이(Multiple Pointers O(N))
const areThereDuplicates = (...args) => {
  let left = 0,
    right = 1;
  while (right < args.length) {
    if (args[left] === args[right]) return true;
    else right++;
  }
  return false;
};

// 네번째 풀이(내장 메서드 사용, but 이거는 n^2이라서 효율성 떨어짐)
const areThereDuplicates = (...args) => {
  return !args.every((v) => args.filter((value) => value === v).length < 2);
};

// 다섯번째 풀이(또다른 내장 함수 사용 O(N log N))
// set로 만들었는데 숫자가 줄었다면 중복되는게 있다는 뜻(n log n 복잡도)
const areThereDuplicates = (...args) => {
  return new Set(args).size !== args.length;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
