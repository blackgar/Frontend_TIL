function getCombi(arr, course) {
  //check표시 해줄 배열
  let visited = new Array(arr.length).fill(0);
  //모든 부분집합이 담길 배열이다.
  let setArr = [];
  const dfs = (depth) => {
    //check에 1인 index와 같은 index에 있는 arr만 filter해서 넣어준다.
    if (depth === visited.length) {
      const tmp = arr.filter((v, i) => visited[i]);
      course.includes(tmp.length) ? setArr.push(tmp) : null;
    } else {
      //포함되는 경우
      visited[depth] = 1;
      dfs(depth + 1);
      //포함되지 않는 경우
      visited[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  return setArr;
}

function solution(orders, course) {
  var answer = [];
  // 2명 이상에게 주문된 조합을 찾는 문제
  // course에 주어진 개수의 단품메뉴로 이루어진 조합이 총 몇개인지 찾는 문제.
  // 같은 값이 중복되지 않는다.

  // 1. 들어있는 알파벳
  const arr = [];
  for (let order of orders) {
    arr.push(getCombi([...order], course));
  }
  const flatArr = arr.flat();
  // console.log(flatArr);
  for (const ele of flatArr) {
    const tmpObj = {};
    const strEle = ele.join("");
    for (const order of orders) {
      order.includes(strEle) ? (tmpObj[strEle] = ++tmpObj[strEle] || 1) : null;
      // console.log(tmpObj);
    }
    for (const key in tmpObj) {
      if (tmpObj[key] > 1) answer.push(strEle);
    }
  }
  answer = [...new Set(answer)];
  return answer;
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
