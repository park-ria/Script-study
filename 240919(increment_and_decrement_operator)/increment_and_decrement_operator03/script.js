let num1 = 31;
let num2 = 6;
let result = 0;

result = --num1 * ++num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);

result = num1-- - num2--;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);

result = num1-- - --num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);

result = ++num1 * num2++;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);

result = num1++ % ++num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
