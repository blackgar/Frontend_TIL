// validAnagram

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const obj = {};

  for (char of str1) {
    obj[char] = ++obj[char] || 1;
  }

  for (char of str2) {
    if (obj[char]) {
      obj[char]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false)
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Multiple Pointers - countUniqueValues

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  // 처음 발견된 수를 들고 있는 임시 변수 하나 선언
  // 이 숫자와 같은건 넘기고 다른 것들만 개수를 세어준다.
  // 기준점 하나와 다른 수를 비교한다는 점에서 투포인터와 비슷한 로직
  let tmp = "";
  let cnt = 0;
  for (num of arr) {
    if (num !== tmp) {
      cnt++;
      tmp = num;
    }
  }
  return cnt;
};

// 투포인터 풀이
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  // 왼쪽에서 시작한다.
  // 0, 1인덱스 비교한다.
  // 같으면 오른쪽인덱스를 하나 늘려나가면서 숫자 비교
  // 만약 다른 수가 나오면 left인덱스를 하나 늘려주고 그곳에 새로운 수를 넣는다.
  // 이렇게 계속 반복하다가 right가 마지막 숫자를 체크하고 비교한 후 반복문을 종료하고 현재 left가 존재하고 있는 위치 + 1을 반환한다.
  let left = 0,
    right = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) right++;
    else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
