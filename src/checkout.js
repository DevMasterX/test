import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';
import { BASKET_KEY } from './common';

const list = document.querySelector('.js-list');
const savedToBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) ?? [];

createMarkup(savedToBasket, list);

list.addEventListener('click', onClick);
