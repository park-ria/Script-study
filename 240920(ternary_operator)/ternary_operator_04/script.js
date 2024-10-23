const age = Number(prompt("나이를 입력해주세요"));
const result =
  20 <= age && age < 30 ? "20대" : age >= 30 ? "30대 이상" : "20대 이하";
alert(`당신은 ${result}이군요!!!`);
