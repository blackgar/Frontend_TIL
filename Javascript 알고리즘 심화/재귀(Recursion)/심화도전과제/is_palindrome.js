// 문제
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
const isPalindrome = (str) => {
  const checkPalindrome = (string) => {
    if ([...string].length === 1) return string;
    return checkPalindrome([...string].slice(1)) + [...string][0];
  };
  let tmp = checkPalindrome(str);
  if (tmp === str) return true;
  return false;
};

// 두 번째 풀이 방법
// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
