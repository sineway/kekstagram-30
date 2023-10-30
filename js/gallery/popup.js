import {renderComments} from './comments.js';

const popup = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');

const showPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hidePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const renderPopup = ({url, description, likes, comments}) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.social__caption').textContent = description;
  popup.querySelector('.likes-count').textContent = likes;
  renderComments(comments);
  showPopup();
};

cancelButton.addEventListener('click', () => hidePopup());

export {renderPopup};
