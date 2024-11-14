import { createModal } from './createModal';
import { instruments } from './instruments';

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-info')) {
    const id = Number(e.target.closest('.js-card').dataset.id);

    const elementToShow = instruments.find(item => item.id === id);

    createModal(elementToShow);
  }
}

export { onClick };
