function solution(fees, records) {
  var answer = [];
  let entranceObj = {};
  let parkingTimeObj = {};
  let parkingFeeObj = {};
  const minTime = fees[0];
  const baseCharge = fees[1];
  const perTime = fees[2];
  const perTimeFee = fees[3];
  // 입차한 기록을 바탕으로 출차 시 주차한 시간을 계산
  for (let i = 0; i < records.length; i++) {
    const tmp = records[i].split(" ");
    const time = tmp[0].split(":");
    if (tmp[2] === "IN") {
      entranceObj[tmp[1]] = [time[0], time[1]];
    } else {
      parkingTimeObj[tmp[1]] =
        (parkingTimeObj[tmp[1]] +=
          (time[0] - entranceObj[tmp[1]][0]) * 60 +
          (time[1] - entranceObj[tmp[1]][1])) ||
        (time[0] - entranceObj[tmp[1]][0]) * 60 +
          (time[1] - entranceObj[tmp[1]][1]);
      delete entranceObj[tmp[1]];
    }
  }
  // 만약 입차한 기록만 남아있다면 23:59분 출차로 계산해서 주차시간 등록
  for (const key in entranceObj) {
    parkingTimeObj[key] =
      (parkingTimeObj[key] +=
        (23 - entranceObj[key][0]) * 60 + (59 - entranceObj[key][1])) ||
      (23 - entranceObj[key][0]) * 60 + (59 - entranceObj[key][1]);
  }
  // 주차 시간에 맞게 주차 요금 계산
  for (const key in parkingTimeObj) {
    parkingFeeObj[key] = 0;
    if (parkingTimeObj[key] > minTime)
      parkingFeeObj[key] =
        Math.ceil((parkingTimeObj[key] - minTime) / perTime) * perTimeFee;
    parkingFeeObj[key] += baseCharge;
  }
  // 차 번호가 빠른순으로 정답을 담아야 하므로 key 정렬 후 주차요금 정리
  const keys = Object.keys(parkingFeeObj).sort((a, b) => a - b);
  keys.forEach((v) => answer.push(parkingFeeObj[v]));
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
