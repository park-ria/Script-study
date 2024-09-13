const num = Number(prompt("1부터 100사이의 수를 입력해주세요"));

if (num >= 1 && num <= 100) {
  if (num % 2 === 0) alert("짝수");
  else alert("홀수");
} else {
  alert("숫자의 범위가 잘못됐습니다!\n1부터 100사이의 수를 입력해주세요!!!");
  location.reload();
}
