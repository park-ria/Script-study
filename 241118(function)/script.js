const numbers1 = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers(numbers1));

const numbers2 = [3, 5, 7, 2, 8];

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax(numbers2));
