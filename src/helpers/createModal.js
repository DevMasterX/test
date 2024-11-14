import * as basicLightbox from 'basiclightbox';

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
    {}
  );
  instance.show();
}

export { createModal };
