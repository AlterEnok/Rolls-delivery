window.addEventListener('click', function (event) {
  // объявляем переменную для счетчика
  let counter;
  // проверяем клик строго по кнопка плюс и минус
  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    // находим обертку счетчика
    const countWrapper = event.target.closest('.counter-wrapper');

    counter = countWrapper.querySelector('[data-counter');
  }

  //Проверяем явл ли элемент кнопкой +
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  //Проверяем явл ли элемент кнопкой -
  if (event.target.dataset.action === 'minus') {
    console.log('Minus');

    // проверка на товар который находится в корзине

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
      // проверка на товар который находится в корзине
    } else if (
      event.target.closest('.cart-wrapper') &&
      parseInt(counter.innerText) === 1
    )
      //удаляем товар из корзины
      event.target.closest('.cart-item').remove();
    {
      // Отображение статуса корзины Пустая/полная
      toggleCartStatus();
      // Пересчет общей стоимости
      calcCartPriceAndDelivery();
    }
  }

  if (
    event.target.hasAttribute('data-action') &&
    event.target.closest('.cart-wrapper')
  ) {
    calcCartPriceAndDelivery();
  }
});
