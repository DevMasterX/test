import { instruments } from './helpers/instruments';
import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';

const list = document.querySelector('.js-list');
const pageType = 'main';
createMarkup(instruments, list, pageType);

list.addEventListener('click', onClick);
