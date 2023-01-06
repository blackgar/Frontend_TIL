function solution(cards) {
  var answer = 0;
  // 0번째 인덱스부터 마지막 인덱스까지 선택했을 때 이어지는 숫자를 점수로 모으기(tmpIArr)
  // i번째 카드를 선택해서 숫자를 모았다면, 아직 선택되지 않은 숫자들을 선택해서 연결되는 숫자들 중 가장 많이 연결되는 구간을 선택한다.(tmpJArr)
  // 그렇게 두 배열의 길이를 곱한 점수가 최대점수보다 크다면 최대점수를 갱신해주면서 답을 찾아나간다.
  let linkedCard;
  let anotherLinkedCard;
  let tmpIArr = [];
  let tmpJArr = [];
  for (let i = 0; i < cards.length; i++) {
    // console.log("I 반복문 시작")
    const tmp = cards[i];
    tmpIArr = [tmp];
    linkedCard = cards[tmp - 1];
    while (true) {
      // console.log(tmp, linkedCard, tmpIArr)
      if (linkedCard === tmp) break;
      else tmpIArr.push(linkedCard);
      linkedCard = cards[linkedCard - 1];
    }
    for (let j = i + 1; j < cards.length; j++) {
      const tmpJ = cards[j];
      if (tmpIArr.includes(tmpJ)) break;
      // console.log("J 반복문 시작")
      tmpJArr = [tmpJ];
      anotherLinkedCard = cards[tmpJ - 1];
      while (true) {
        // console.log(tmpJArr)
        if (anotherLinkedCard === tmpJ || tmpIArr.includes(anotherLinkedCard)) {
          break;
        } else {
          tmpJArr.push(anotherLinkedCard);
        }
        anotherLinkedCard = cards[anotherLinkedCard - 1];
      }
      // console.log(tmpIArr, tmpJArr)
      tmpJArr.length !== 0
        ? answer < tmpIArr.length * tmpJArr.length
          ? (answer = tmpIArr.length * tmpJArr.length)
          : null
        : null;
      if (tmpIArr.length + tmpJArr.length === cards.length) break;
    }
  }
  // console.log(answer)
  return answer;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
console.log(solution([2, 3, 4, 5, 6, 7, 1, 8]));
