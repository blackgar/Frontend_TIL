const object = {
  firstName: "Ken",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(object)); // O(N)
console.log(Object.values(object)); // O(N)
console.log(Object.entries(object)); // O(N)
console.log(object.hasOwnProperty("firstName")); // O(1)

const names = ["Michael", "Melissa", "Andrea"];
const values = [true, {}, [], 2, "awesome"];

// Insertion/Removal => push/pop(O(1)), shift/unshift(O(N)) => 인덱스가 push/pop는 자연스럽게 늘어나지만, shift와 unshift는 뒤에 있는 값들의 인덱스를 모두 알아야 하고 변경해야 하므로.
// Searching => O(N)
// Access => O(1)

// 메서드별 Big O
// push / pop => O(1)
// shift / unshift / concat / slice / splice / forEach / map / filter / reduce / etc => O(N)
// sort => O(N*logN)
