import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';
import { BASKET_KEY } from './common';

const list = document.querySelector('.js-list');
const savedToBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) ?? [];
const pageType = 'basket';

createMarkup(savedToBasket, list, pageType);

list.addEventListener('click', onClick);
