function solution(files) {
  var answer = [];

  // 파일은 Head, Number, Tail로 이루어진다.
  // 숫자를 만나기 전까지 문자가 HEAD, 그 다음 연속된 숫자는 Number, 그 뒤에 내용은 Tail이 된다.
  // HEAD가 같을 때(대소문자 구분 x) 숫자를 기준으로 내림차순 정렬한다.
  // 만약 HEAD와 숫자가 같으면 오름차순 정렬한다.

  // 1. Head, Number, Tail을 구분한다.
  // 2. Head를 key 값으로 객체안 배열에 담는다(순서유지). 담은 후 key값을 사전순으로 정렬한다.
  // 3. 정렬한 key 순서대로 객체 안의 배열에 담겨있는 값들을 정렬한다. 숫자가 같을 때는 순서를 유지한다.

  let fileObj = {};

  for (let i = 0; i < files.length; i++) {
    let head = [];
    let number = [];
    let tail = [];
    let flag = false;
    let numberflag = false;
    for (let j = 0; j < files[i].length; j++) {
      if (
        !numberflag &&
        number.length < 5 &&
        files[i][j] !== " " &&
        !isNaN(files[i][j])
      ) {
        number.push(files[i][j]);
        flag = true;
      } else if (flag) {
        tail.push(files[i][j]);
        numberflag = true;
      } else if (isNaN(files[i][j]) || files[i][j] === " ")
        head.push(files[i][j]);
    }
    const originHead = head.join("");
    const originNumber = number.join("");
    head = head.join("").toLowerCase();
    number = Number(originNumber);
    tail = tail.join("");
    if (fileObj[head]) {
      fileObj[head].push([number, tail, originHead, i, originNumber]);
    } else {
      fileObj[head] = [[number, tail, originHead, i, originNumber]];
    }
  }
  // console.log(fileObj)
  const keys = Object.keys(fileObj).sort();
  keys.forEach((v) =>
    fileObj[v]
      .sort((a, b) => (a[0] - b[0] === 0 ? a[3] - b[3] : a[0] - b[0]))
      .forEach((v) => answer.push(v[2] + v[4] + v[1]))
  );
  return answer;
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
console.log(
  solution([
    "F-5 Freedom123 Fighter",
    "B-503233 Superfortress",
    "B-503223 Superfortress",
    "A-1011155 Thunderbol1231t II",
    "A-1011055 Thunderbol1231t II",
    "F-5 Freedom Fighter",
  ])
);
