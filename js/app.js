const radioRed = document.querySelector("#red");
const radioWhite = document.querySelector("#white");
const radioGreen = document.querySelector("#green");

radioRed.addEventListener("click", () => {
  console.log("red!");
  document.body.style.background = "red";
});

radioWhite.addEventListener("click", () => {
  console.log("white!");
  document.body.style.background = "white";
});

radioGreen.addEventListener("click", () => {
  console.log("green!");
  document.body.style.background = "green";
});

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value.length === 0) {
    outputRef.textContent = "незнайомець";
  } else {
    outputRef.textContent = value;
  }
});

const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", (event) => {
  const input = event.target;
  const requiredLength = Number(input.dataset.length);

  if (input.value.length === requiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  textSpan.style.fontSize = `${fontSize}px`;
});
