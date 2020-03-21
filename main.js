const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".btn-operator");
const equal = document.querySelector(".btn-equal");
let decimal = document.querySelector(".btn-decimal");
const clear = document.querySelector(".btn-clear");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    let number = numbers[i].getAttribute("data-number");
    if (screen.value === "0") {
      screen.value = "";
      screen.value += number;
    } else {
      screen.value += number;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    let operator = operators[i].getAttribute("data-operator");

    if (
      screen.value === "0" ||
      screen.value.endsWith(".") ||
      screen.value.endsWith("+") ||
      screen.value.endsWith("-") ||
      screen.value.endsWith("*") ||
      screen.value.endsWith("/")
    ) {
      screen.value;
    } else {
      screen.value += operator;
    }
  });
}

decimal.addEventListener("click", function() {
  if (
    !screen.value.includes(".") &&
    !screen.value.endsWith("+") &&
    !screen.value.endsWith("-") &&
    !screen.value.endsWith("*") &&
    !screen.value.endsWith("/")
  ) {
    screen.value += ".";
  } else {
    screen.value;
  }
});

equal.addEventListener("click", function() {
  let value = eval(screen.value);
  screen.value = value;
});

clear.addEventListener("click", function() {
  screen.value = "0";
});
