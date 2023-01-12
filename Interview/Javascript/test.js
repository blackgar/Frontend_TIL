function User() {
  this.name = "원숭이";
  return { name: "고릴라" };
}

function User2() {
  return "고릴라";
}
function User3() {
  this.name = "고릴라";
  return;
}

console.log(new User().name);
console.log(new User2().name);
console.log(new User3().name);
