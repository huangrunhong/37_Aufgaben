// =================================
//          BOM_Level_1_1
// =================================
console.log("%c======BOM_Level_1_1======", "color:yellowgreen");
console.log("Start Warten für 3 Sekunden...");
setTimeout(() => {
  //   console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
}, 3000);
// console.clear();
// let num1 = 10;
// const setNumDown = setInterval(() =>
//   if (num1 > 0) {
//     console.log(num1--);
//   } else {
//     console.log("Endlich Feierabend!");
//     clearInterval(setNumDown);
//   }
// }, 500);

// =================================
//          BOM_Level_1_2
// =================================
console.log("%c======BOM_Level_1_2======", "color:yellowgreen");

const percent = document.body.querySelector(".zeit");
console.log(percent);
const startBtn = document.body.querySelector("button");
console.log(startBtn);

startBtn.addEventListener("click", () => {
  let percentNum = 100;
  const percentNumDec = setInterval(() => {
    if (percentNum >= 0) {
      percent.textContent = percentNum-- + "%";
    } else if (percentNum < 0) {
      clearInterval(percentNumDec);
    }
  }, 100);
});
