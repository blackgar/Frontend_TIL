def solution(k, m, score):
    answer = 0
    # 가장 낮은 점수부터 상자에 담아서 팔면 됨
    # m으로 나눠서 남은 나머지 만큼 가장 낮은 점수를 제거 => 내림차순 정렬해서 끝에 남는 것들을 제외시키고 나머지 m개별로 계산하면 됨
    score.sort(reverse=True)
    for i in range(0, len(score), m):
        if len(score[i:i+m]) == m:
            answer += (min(score[i:i+m]) * m)
    return answer
    
print(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])) # 8
print(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])) # 33
print(solution(2, 5, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1])) # 20