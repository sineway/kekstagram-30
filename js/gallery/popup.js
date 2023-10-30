const popup = document.querySelector('.big-picture');

const renderPopup = ({url, description, likes}) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.social__caption').textContent = description;
  popup.querySelector('.likes-count').textContent = likes;
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

export {renderPopup};
