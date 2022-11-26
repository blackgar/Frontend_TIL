// 개발자도구 Sources에서 Call Stack을 체크해보면 좋다.

const takeShower = () => {
  return "Showering";
};

const eatBreakfast = () => {
  let meal = cookFood();
  return `Eating ${meal}`;
};

const cookFood = () => {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
};

const wakeUp = () => {
  takeShower();
  eatBreakfast();
  console.log("OK ready to go to work");
};

wakeUp();
