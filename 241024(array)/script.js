const animals = ["ant", "bison", "camel", "duck", "elephant"];

// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
console.log(animals.slice());
console.log(animals.slice(undefined));
console.log(animals.slice(undefined, 5));
// 1-2. 양수 사용
console.log(animals.slice(0));
console.log(animals.slice(0, 5));
// 1-3. 음수사용
console.log(animals.slice(-5));

// 2, ["duck", "elephant"]
// 2-1. 양수 사용
console.log(animals.slice(3));
console.log(animals.slice(3, 5));
// 2-2. 음수 사용
console.log(animals.slice(-2));
console.log(animals.slice(-2, 5));

// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
console.log(animals.slice(2));
console.log(animals.slice(2, 5));
// 3-2. 음수 사용
console.log(animals.slice(-3));
console.log(animals.slice(-3, 5));

// 4, ["camel", "duck"]
// 4-1. 양수 사용
console.log(animals.slice(2, 4));
console.log(animals.slice(2, -1));
// 4-2. 음수 사용
console.log(animals.slice(-3, 4));
console.log(animals.slice(-3, -1));

// 5, []
console.log(animals.slice(5));

// 6, ["elephant"]
// 6-1. 양수 사용
console.log(animals.slice(4));
console.log(animals.slice(4, 5));
// 6-2. 음수 사용
console.log(animals.slice(-1));
console.log(animals.slice(-1, 5));

// 7, ["ant"]
// 7-1.undefined 사용
console.log(animals.slice(undefined, 1));
console.log(animals.slice(undefined, -4));
// 7-2. 양수 사용
console.log(animals.slice(0, 1));
console.log(animals.slice(0, -4));
// 7-3. 음수 사용
console.log(animals.slice(-5, -4));
console.log(animals.slice(-5, 1));
