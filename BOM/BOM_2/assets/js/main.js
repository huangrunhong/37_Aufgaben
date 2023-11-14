const message = document.body.querySelector(".message");

const count = document.getElementById("count");
let number = 10;
const numberDec = setInterval(() => {
  if (number >= 0) {
    count.textContent = number--;
  } else {
    clearInterval(numberDec);
    message.style.opacity = 0;
  }
}, 1000);
