import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { onCloseModal } from './onCloseModal';
import { FAVORITE_KEY, BASKET_KEY } from '../common';
import { onFavoriteModalClick } from './onFavoriteModalClick';
import { onBasketModalClick } from './onBasketModalClick';

function createModal(instrument) {
  const instance = basicLightbox.create(
    `
<div class='modal'>
<button class='closeModalBtn'>X</button>
      <img src="${instrument.img}" alt="${instrument.name}" width='200'/>
      <h2>${instrument.name}</h2>

      <p >${instrument.description}</p>
      <button class='favoriteBtn'>Add to favorite</button>
      <button class='basketBtn'>Add to basket</button>
</div>
    `,
    {
      handler: null,
      onShow(instance) {
        this.handler = onCloseModal.bind(instance);
        window.addEventListener('keydown', this.handler);

        const modalElement = instance.element();
        const closeModalBtn = modalElement.querySelector('.closeModalBtn');
        const favoriteBtn = modalElement.querySelector('.favoriteBtn');
        const basketBtn = modalElement.querySelector('.basketBtn');

        const savedInstruments =
          JSON.parse(localStorage.getItem(FAVORITE_KEY)) ?? [];
        const savedToBasket =
          JSON.parse(localStorage.getItem(BASKET_KEY)) ?? [];

        closeModalBtn.addEventListener('click', () => instance.close());
        favoriteBtn.addEventListener('click', () => {
          onFavoriteModalClick(savedInstruments, instrument, FAVORITE_KEY);
        });
        basketBtn.addEventListener('click', () => {
          onBasketModalClick(savedToBasket, instrument, BASKET_KEY);
        });
      },

      onClose() {
        window.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
