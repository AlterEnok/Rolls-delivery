// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Функция для обработки события касания
function handleTouch(event) {
  // Проверяем тип события (touchstart для начала касания)
  if (event.type === 'touchstart') {
    // Ваш код обработки касания
    if (event.target === btnMinus) {
      console.log('Minus touch');
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      }
    } else if (event.target === btnPlus) {
      console.log('Plus touch');
      counter.innerText = ++counter.innerText;
    }
  }
}

// Добавляем обработчики событий касания
btnMinus.addEventListener('touchstart', handleTouch);
btnPlus.addEventListener('touchstart', handleTouch);
