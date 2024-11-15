import { createModal } from './createModal';
import { instruments } from './instruments';
import { FAVORITE_KEY, BASKET_KEY } from '../common';

const favoriteArr = JSON.parse(localStorage.getItem(FAVORITE_KEY)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(BASKET_KEY)) ?? [];

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-info')) {
    const id = Number(e.target.closest('.js-card').dataset.id);

    const elementToShow = instruments.find(item => item.id === id);

    createModal(elementToShow);
  }

  if (e.target.classList.contains('favoriteBtn')) {
    const id = Number(e.target.closest('.js-card').dataset.id);
    const elementToSave = instruments.find(item => item.id === id);

    if (favoriteArr.some(item => item.id === id)) {
      alert('This item is already in favorites.');
      return;
    }

    favoriteArr.push(elementToSave);

    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteArr));
  }

  if (e.target.classList.contains('basketBtn')) {
    const id = Number(e.target.closest('.js-card').dataset.id);
    const elementToSave = instruments.find(item => item.id === id);

    if (basketArr.some(item => item.id === id)) {
      alert('This item is already in the cart.');
      return;
    }

    basketArr.push(elementToSave);

    localStorage.setItem(BASKET_KEY, JSON.stringify(basketArr));
  }
}

export { onClick };
