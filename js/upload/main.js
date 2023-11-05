import {showPopup} from './popup.js';
import './validation.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('change', (event) => {
  if (event.target.name === 'filename') {
    showPopup();
  }
});
