// 기본 별 찍기
const star = (number) => {
  let listOfStar = "";
  for (let i = 0; i < number; i++) {
    listOfStar += "*";
    console.log(listOfStar);
  }
};
// 위코드와 아래 코드는 같은 동작을 한다. repeat이라는 함수 사용 가능
const star2 = (number) => {
  for (let i = 0; i < number; i++) {
    console.log("*".repeat(i + 1));
  }
};

// 별 반대로 찍기
const starReverse = (number) => {
  let listOfStar = "*".repeat(number).toString();
  for (let i = 0; i < number; i++) {
    console.log(listOfStar.substring(0, number - i));
  }
};
const star2Reverse = (number) => {
  for (let i = 0; i < number; i++) {
    console.log("*".repeat(number - i));
  }
};

// 별 두개씩 찍기
const doubleStar = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log("*".repeat(i * 2 - 1));
  }
};
// 별 두개씩 반대로 찍기
const doubleStarReverse = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log("*".repeat(2 * (number - i) + 1));
  }
};
// 별 찍는데 앞에 빈공간 만들기
const spaceStar = (number) => {
  for (let i = 0; i < number; i++) {
    console.log(" ".repeat(i) + "*".repeat(number - i));
  }
};
// 별 앞에 빈공간 반대로 찍기
const spaceStarReverse = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(" ".repeat(number - i) + "*".repeat(i));
  }
};
// 크리스마스트리 별 찍기
const christmasStar = (number) => {
  for (let i = 0; i < number; i++) {
    console.log(
      " ".repeat(number - i) + "*".repeat(2 * i + 1) + " ".repeat(number - i)
    );
  }
};
// 크리스마스 별 반대로 찍기
const christmasStarReverse = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(
      " ".repeat(i) + "*".repeat(2 * (number - i) + 1) + " ".repeat(i)
    );
  }
};
// 별찍기
console.log("기본 별 찍기");
star(5);
console.log("");
star2(5);
console.log("별 반대로 찍기");
starReverse(5);
console.log("");
star2Reverse(5);
console.log("별 두개씩 찍기");
doubleStar(5);
console.log("별 두개씩 반대로 찍기");
doubleStarReverse(5);
console.log("별 찍는데 앞에 빈공간 만들기");
spaceStar(5);
console.log("별 앞에 빈공간 반대로 찍기 ");
spaceStarReverse(5);
console.log("크리스마스트리 별찍기");
christmasStar(5);
console.log("크리스마스 트리 뒤집기");
christmasStarReverse(5);
