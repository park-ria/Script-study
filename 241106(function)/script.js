const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};
console.log(sumArray(numbers));

const squareArray = (arr) => {
  return arr.map((num) => num * num);
};
console.log(squareArray(numbers));
