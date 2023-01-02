function checkCacheable(obj, cacheSize) {
  for (const key in obj) {
    // if ()
  }
}

function solution(cacheSize, cities) {
  // 캐시 사이즈 만큼 city를 queue에 담는다.
  // 담는 과정에서 중복되는게 나오면 hit 중복되는게 없으면 miss로 시간 카운트한다.(answer)
  // 그와 동시에 city가 얼마나 중복이 안되는지를 카운트 해줘야 한다.(queueObj)
  // 예를 들면 jeju, pangyo, seoul, jeju, jeju 이런식이라면 jeju는 들어와서 1의 값을 지니고 pangyo, seoul이 들어오면 3의 값을 가지게 된다. 만약 뒤에 jeju가 오면 다시 1로 jeju가 오지 않으면 4로 cacheSize보다 큰 경우에는 queue에서 캐시를 하지않고 새로운 값을 넣어줘야 한다.
  var answer = 0;
  let queue = [];
  let queueObj = {};
  cities.forEach((v) => (queueObj[v] = -1));
  for (const city of cities) {
    if (queueObj[city] > 0) queueObj[city] = 1;
    else if (queueObj[city] === -1) {
      queue.push(city);
      queueObj[city] = 1;
    }
  }

  return answer;
}
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
