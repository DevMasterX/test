import { createMarkup } from './helpers/createMarkup';
import { FAVORITE_KEY } from './common';
import { onClick } from './helpers/onClick';

const list = document.querySelector('.js-list');

const savedInstruments = JSON.parse(localStorage.getItem(FAVORITE_KEY)) ?? [];

createMarkup(savedInstruments, list);

list.addEventListener('click', onClick);
