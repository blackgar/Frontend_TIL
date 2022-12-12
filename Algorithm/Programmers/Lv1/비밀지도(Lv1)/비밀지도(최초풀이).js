function solution(n, arr1, arr2) {
  var answer = [];
  let treasureMap = Array(n);
  for (let i = 0; i < n; i++) {
    let tmp = Array(n);
    treasureMap[i] = tmp;
  }
  arr1 = arr1.map((v) =>
    v.toString(2).length < n
      ? Array(...("0".repeat(n - v.toString(2).length) + v.toString(2)))
      : Array(...v.toString(2))
  );
  arr2 = arr2.map((v) =>
    v.toString(2).length < n
      ? Array(...("0".repeat(n - v.toString(2).length) + v.toString(2)))
      : Array(...v.toString(2))
  );

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (arr1[y][x] === "1" || arr2[y][x] === "1") {
        treasureMap[y][x] = "#";
      } else if (arr1[y][x] === "0" && arr2[y][x] === "0") {
        treasureMap[y][x] = " ";
      }
    }
  }
  answer = treasureMap.map((v) => v.join(""));
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####", "# # #", "### #", "#  ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // 	["######", "###  #", "##  ##", " #### ", " #####", "### # "]
