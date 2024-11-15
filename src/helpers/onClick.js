import { createModal } from './createModal';
import { instruments } from './instruments';
import { FAVORITE_KEY } from '../common';

favoriteArr = [];

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
    console.log('🚀  elementToSave:', elementToSave);

    if (favoriteArr.some(item => item.id === id)) {
      return;
    }

    favoriteArr.push(elementToSave);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteArr));
  }
}

export { onClick, favoriteArr };
