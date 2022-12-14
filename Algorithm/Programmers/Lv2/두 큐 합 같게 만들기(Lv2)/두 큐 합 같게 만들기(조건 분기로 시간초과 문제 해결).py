def solution(queue1, queue2):
    answer = 0
    length = max(len(queue1),len(queue2)) * 2 + 1
    hap1 = sum(queue1)
    hap2 = sum(queue2)
    left = 0
    right = 0
    cycle = 0;
    while True: 
        if hap1 == hap2: 
            return answer
        elif hap1 > hap2:
            hap2 += queue1[left]
            hap1 -= queue1[left]
            queue2.append(queue1[left])
            left += 1
        elif hap2 > hap1:
            hap1 += queue2[right]
            hap2 -= queue2[right]
            queue1.append(queue2[right])
            right += 1
        answer += 1
        cycle += 1
        # 이렇게 문제의 조건에 배열의 최대 길이는 30만씩 두개가 들어올 수 있기 때문에 60만 2번을 초과하는 작업을 수행할 경우 결국 제자리 이므로 600001보다 클 경우 합이 같은 것을 찾지 못했다는 것으로 조건을 지정한다. (60만 2번인 이유는 최초 두번의 제자리로 돌아오기 위해서는 queue1의 인덱스 한 번 그리고 queue2의 인덱스를 한 번 더 이동을 해야되기 때문에 2번 추가)
        if left > length or right > length:
            return -1