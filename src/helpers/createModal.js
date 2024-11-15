import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { onCloseModal } from './onCloseModal';

function createModal(instrument) {
  const instance = basicLightbox.create(
    `
<div class='modal'>
<button class='closeModalBtn'>X</button>
      <img src="${instrument.img}" alt="${instrument.name}" width='600'/>
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
      },

      onClose() {
        window.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
