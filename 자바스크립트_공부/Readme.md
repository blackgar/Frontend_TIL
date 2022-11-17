# 자바스크립트 학습

(221115 ~ )

## 1. 학습 목표

- 이 강좌를 학습하는 이유는 지금까지 React나 Next.js 등 Javascript 프레임워크나 라이브러리에 대해서는 깊게 학습을 했습니다. 하지만 순수 Javascript나 HTML그리고 CSS에 대해서는 기초 교육 이후로 크게 신경쓰지 않고 있었던 것 같아서 Javascript에 대한 이해도를 높이고 추후에 다른 라이브러리나 프레임워크를 다룰 때 도움이 될 수 있도록 기본기를 탄탄하게 다지자는 목표로 학습을 시작했습니다.

- Javascript의 기본 문법, 배열, 객체, 함수에 대한 이해와 이를 활용한 실습

## 2. 학습 과정

- 학습 과정은 크게 두 가지입니다. 첫 번째는 책과 mdn 문서를 바탕으로 javascript 이론과 개념을 먼저 학습하고 두 번째로 여러 실습 과제를 통해서 javascript 활용 능력을 향상시키는 과정으로 학습을 진행하고자 합니다.

## 3. 학습 내용

- 이론학습

  - 세미콜론, 주석, 들여쓰기 등 기본 사용 방법
  - 문자열 기본(따옴표, 백틱, typeof, escape)
  - 문자열 합치기(연산자 활용)
  - 숫자 기본(parseInt, NaN) + 명시적 형변환/암시적 형변환
  - 연산자 우선 순위와 소수 계산 주의점
  - boolean + 값들의 비교
  - 논리연산자
  - undefined와 null의 차이
  - 변수(let, var) + 변수 이름 정하기 + 변수 수정하기 + 상수(const)
  - 조건문(if, else, else if, switch 활용법)
  - 조건부 연산자(삼항 연산자의 이해)
  - 반복문 (while & for) + break와 continue + 중첩 반복문
  - 앞의 내용들을 활용한 별찍기 과제(이론학습/별찍기.js 참고)
  - 배열 기본 + 배열 메서드(push, pop, shift, unshift, includes, indexOf, lastIndexOf, splice, 인덱스 접근) 응용
  - 함수 기본 + 매개변수와 인수의 이해 + 객체 리터럴 + 객체의 비교(원시값과의 차이 이해)
  - 끝말잇기 구현(word-relay.html)
  - 두 숫자 계산기 구현(calculator.html)
  - querySelector & addEventListner 이해(querySelector & addEventListner.html)
  - 숫자 야구 구현(number-baseball.html)
  - 로또 구현(lotto.html)
  - 배열 메서드 심화(map, filter, fill, forEach)(배열메서드.js)
  - 가위바위보 구현(rock-scissors-paper.html)

- ## 실습
  - 쿵쿵따게임(끝말잇기 + 3글자 제한 + 인원입력 안하면 다음 코드 실행하지 않게) 구현(쿵쿵따게임.html)
    - querySelector, addEventListener, 조건문 응용
  - 연속된 숫자 계산 가능한 계산기 구현(calculator-self.html)
    - 형변환과 조건문 응용(switch), 연산자별 문자열 계산 방법, 각 event별 작동 이해
  - 아웃 기능이 있는 숫자 야구 구현(number-baseball-self.html)
    - 삼항연산자를 활용한 조건분기, 배열 메서드 활용, 세부 조건분기 설정, return을 활용한 else 제거
  - 색칠된 로또 구현(lotto-self.html)
    - 비동기의 이해(setTimeout), 반복문과 배열 메서드 심화 활용
  - 5판 3선승제 가위바위보(rock-scissors-paper-self.html)
    - 비동기의 이해(setInterval, clearInterval), 수치화한 규칙으로 조건문 분기하는 방법, 이벤트가 발생하지 않게끔 동작하게 하는 방법 이해
