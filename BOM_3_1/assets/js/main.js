const cat = document.body.querySelector("#cat");
const walkArea = window.innerWidth;

let movieRight = true;
let leftPosition = 0;
let step = 30;
let id;
let timeout = 300;

const catWalking = () => {
  if (movieRight) {
    leftPosition += step;
    if (leftPosition + 300 >= window.innerWidth) {
      movieRight = false;
    } else {
      cat.style.left = leftPosition + "px";
    }
  } else {
    leftPosition -= step;
    if (leftPosition < 0) {
      movieRight = true;
    } else {
      cat.style.left = leftPosition + "px";
    }
  }

  movieRight ? cat.classList.remove("turnBack") : cat.classList.add("turnBack");
};

const run = (speed) => {
  timeout = speed;
  clearInterval(id);
  id = setInterval(catWalking, timeout);
};

run(timeout);

const catWalk = () => run(300);

const pause = () => {
  clearInterval(id);
};

const turn = () => {
  movieRight = !movieRight;
  run(timeout);
};

const catSpeed = () => {
  run(100);
};
