function solution(queue1, queue2) {
  var answer = 0;
  // 두 큐를 받는다.
  // 큐1과 큐2의 합을 구해놓는다.
  // 반복문을 돌면서 더 큰 값이 있던 큐에서 첫번째 요소를 꺼내서 다른 큐에 넣는다.
  // 두개의 값을 비교해본다. 다르다면 다시 큰 큐에서 요소를 빼서 작은 곳으로 보낸다.
  // 이렇게 계속 비교해서 같아질때까지 반복한다. 같아지는 구간이 없으면 break

  // 시간 초과를 해결하기 위해서 2포인터 접근이 어떠한가.
  // left는 현재 queue1의 0번째 인덱스를 right는 queue2의 0번째 인덱스를 지정하고
  // 앞의 요소를 빼야할 때 left나 right의 값을 늘려서 다음 요소를 바라보게 한다.
  // 만약 left나 right가 각 queue의 길이의 합보다 큰 값을 바라본다는 것은 한 사이클을 모두 돌아서 queue의 합이 일치하는 구간을 찾아봐도 답이 나오지 않았다는 것을 의미한다.
  let cycle = 0;
  let hap1 = queue1.reduce((a, b) => a + b);
  let hap2 = queue2.reduce((a, b) => a + b);
  let tmp;
  while (true) {
    if (cycle === queue1.length + queue2.length) {
      answer = -1;
      break;
    }
    if (hap1 === hap2) return answer;
    else if (hap1 > hap2) {
      tmp = queue1.shift();
      queue2.push(tmp);
      hap1 -= tmp;
      hap2 += tmp;
      answer++;
    } else if (hap2 > hap1) {
      tmp = queue2.shift();
      queue1.push(tmp);
      hap1 += tmp;
      hap2 -= tmp;
      answer++;
    }
    cycle++;
  }
  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
