// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     document.write(` ${i} * ${j} = ${i * j} /`);
//   }
//   document.write("<br />");
// }

// const gugudan = document.querySelector("#gugudan");
// for (let i = 2; i <= 9; i++) {
//   const tr = document.createElement("tr");
//   const th = document.createElement("th");
//   th.innerText = `${i}단`;
//   tr.appendChild(th);
//   for (let j = 1; j <= 9; j++) {
//     const td = document.createElement("td");
//     td.innerText = `${i} * ${j} = ${i * j}`;
//     tr.appendChild(td);
//   }
//   gugudan.appendChild(tr);
// }

const gugudan = document.querySelector("#gugudan");
for (let i = 0; i <= 9; i++) {
  const tr = document.createElement("tr");
  for (let j = 2; j <= 9; j++) {
    const td = document.createElement("td");
    td.innerText = i === 0 ? `${j}단` : `${j} * ${i} = ${i * j}`;
    tr.appendChild(td);
  }
  gugudan.appendChild(tr);
}
