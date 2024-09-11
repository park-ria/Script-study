const name = prompt("당신의 이름은?");
const height = Number(prompt("당신의 키는?"));
const weight = Number(prompt("당신의 몸무게는?"));
const normalWeight = (height - 100) * 0.9;
const result =
  normalWeight - 5 <= weight && weight <= normalWeight + 5
    ? "입니다"
    : "이 아닙니다";
alert(`${name}님은 적정체중${result}`);
