const umWickeln = document.body.querySelector(".umwickeln");

const clickBtn = document.body.querySelector("button");

let counter = 0;

const counterUp = () => {};

clickBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = counter;
  umWickeln.append(p);
  if (counter === 0 || counter % 10 === 0) {
    p.classList.add("weiss");
    counter++;
  } else {
    p.classList.add("rechteck");
    counter++;
    if (counter % 10 === 9) {
      clearInterval(counterUp);
    }
  }
});
