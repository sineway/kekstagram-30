import {showPopup} from './popup.js';
import {getScale, resetScale} from './scale.js';
import './effects.js';
import {checkValidity, resetValidity} from './validation.js';

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      showPopup();
      break;
    case 'scale':
      preview.style.transform = `scale(${getScale() / 100})`;
      break;
  }
});

form.addEventListener('submit', (event) => {
  if (!checkValidity()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetScale();
  resetValidity();
});
