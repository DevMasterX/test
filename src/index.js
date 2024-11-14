import { instruments } from './helpers/instruments';
import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';
import 'basiclightbox/dist/basicLightbox.min.css';

const list = document.querySelector('.js-list');

createMarkup(instruments, list);

list.addEventListener('click', onClick);
