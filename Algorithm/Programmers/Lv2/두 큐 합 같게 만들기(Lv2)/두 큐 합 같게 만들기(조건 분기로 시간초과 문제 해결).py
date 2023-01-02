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
        # 이 문제의 경우 queue2의 값들이 모두 queue1으로 이동하는 경우 결국 두 배열의 합을 초과하는 인덱스로 접근한다는 것은 제자리로 돌아온다는 뜻이므로 두 배열 중 길이가 긴 배열의 2배 되는 인덱스로 접근하면 합을 찾지 못했다는 것이므로 -1 반환
        if left > length or right > length:
            return -1