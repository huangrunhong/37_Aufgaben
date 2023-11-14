const button = document.body.querySelector("button");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 1000000
  )}`;
});
