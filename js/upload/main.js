import {showPopup} from './popup.js';
import {checkValidity} from './validation.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('change', (event) => {
  if (event.target.name === 'filename') {
    showPopup();
  }
});

form.addEventListener('submit', (event) => {
  if (!checkValidity()) {
    event.preventDefault();
  }
});
