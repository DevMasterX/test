function onBasketModalClick(savedToBasket, instrument, BASKET_KEY) {
  if (savedToBasket.some(item => item.id === instrument.id)) {
    alert('This item is already in the cart.');
    return;
  }

  savedToBasket.push(instrument);
  localStorage.setItem(BASKET_KEY, JSON.stringify(savedToBasket));
}

export { onBasketModalClick };
