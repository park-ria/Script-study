const score = Number(prompt("점수를 입력해주세요"));
if (score >= 90) {
  alert("A등급");
} else if (score >= 80) {
  alert("B등급");
} else if (score >= 70) {
  alert("C등급");
} else if (score >= 60) {
  alert("D등급");
} else {
  alert("F등급");
}
