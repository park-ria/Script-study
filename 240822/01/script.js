const a = 10;
const b = 20;
const m = 30;
const n = 40;

let result;
result = a > b || b >= m || m > n;
console.log(result);

result = a > b || b >= m || m <= n;
console.log(result);

result = a <= b && b >= m && m <= n;
console.log(result);

result = a <= b && b <= m && m <= n;
console.log(result);

result = !(a > b);
console.log(result);
