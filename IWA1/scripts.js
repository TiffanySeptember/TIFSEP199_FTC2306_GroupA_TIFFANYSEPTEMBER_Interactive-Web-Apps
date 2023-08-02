const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

const subtractHandler = () => {
  const numberValue = parseInt(number.value) - 1;
  number.value = numberValue;
  if (add.disabled === true) {
    add.disabled = false;
  }
  if (numberValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

const addHandler = () => {
  const numberValue = parseInt(number.value) + 1;
  number.value = numberValue;
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (numberValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);
