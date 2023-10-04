// находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');

const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

// отслеживаем клик на кнопку минус
btnMinus.addEventListener('click', function () {
  console.log('Minus click');

  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
});
// отслеживаем клик на кнопку плюс
btnPlus.addEventListener('click', function () {
  counter.innerText = ++counter.innerText;
});
