// 문제
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

const findLongestSubstring = (str) => {
  let obj = {};
  let left = 0,
    right = 0,
    len = 0;
  let max = -Infinity;
  while (right <= str.length) {
    if (++obj[str[right]] > 1 || right === str.length) {
      if (max < len) max = len;
      obj = {};
      left++;
      right = left;
      len = 0;
    } else {
      obj[str[right]] = ++obj[str[right]] || 1;
      right++;
      len++;
    }
  }
  return str ? max : 0;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
