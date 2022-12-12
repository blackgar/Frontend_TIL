function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  const obj2 = {};
  const letter = [];

  // for of
  // for (let char of str1) {
  //   obj1[char] = ++obj1[char] || 1;
  //   letter.push(char);
  // }
  // for (let char of str2) {
  //   obj2[char] = ++obj2[char] || 1;
  // }
  // for i 위와 동일하지만 더 간결하다.
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = ++obj1[str1[i]] || 1;
    obj2[str2[i]] = ++obj2[str2[i]] || 1;
    letter.push(str1[i]);
  }

  for (let char of letter) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
