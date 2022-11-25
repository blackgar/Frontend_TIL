// const isSubsequence = (str1, str2) => {}

// 문제
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Time Complexity - O(N + M)
// Space Complexity - O(1)

// 첫 번째 풀이(투포인터 변형, O(N))
// const isSubsequence = (str1, str2) => {
//   let left = 0;
//   for (let char of str2) {
//     if (char === str1[left]) left++;
//     if (left === str1.length) return true;
//   }
//   return false;
// };

// 두 번째 풀이(투포인터, O(N))
// const isSubsequence = (str1, str2) => {
//   let left = 0,
//     right = 0;
//   while (right < str2.length) {
//     if (str1[left] === str2[right]) left++;
//     if (left === str1.length) return true;
//     right++;
//   }
//   return false;
// };

// 세 번쨰 풀이(재귀 O(N))
const isSubsequence = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
