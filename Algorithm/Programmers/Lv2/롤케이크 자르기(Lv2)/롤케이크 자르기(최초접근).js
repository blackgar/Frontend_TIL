function solution(topping) {
  var answer = 0;
  let olderObj = {};
  let youngerObj = {};
  let olderTopping = [];
  let youngerToppings = 0;

  topping.forEach((v) =>
    youngerObj[v] ? youngerObj[v]++ : (youngerToppings++, (youngerObj[v] = 1))
  );

  for (let i = 0; i < topping.length - 1; i++) {
    if (!olderObj[topping[i]]) {
      olderObj[topping[i]] = ++olderObj[topping[i]] || 1;
      olderTopping.push(topping[i]);
    }
    youngerObj[topping[i]]--;
    youngerObj[topping[i]] === 0 ? youngerToppings-- : null;
    if (olderTopping.length === youngerToppings) answer++;
    if (olderTopping.length > youngerToppings) break;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
