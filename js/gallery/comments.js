const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const shownCounter = document.querySelector('.social__comment-shown-count');
const totalCounter = document.querySelector('.social__comment-total-count');
const loaderButton = document.querySelector('.social__comments-loader');

const createComments = (commentsData) => commentsData.map((properties) => {
  const {avatar, message, name} = properties;
  const comment = template.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const renderComments = (commentsData, step = 5) => {
  const data = [...commentsData];

  const onLoaderButtonClick = () => {
    container.append(...createComments(data.splice(0, step)));
    shownCounter.textContent = commentsData.length - data.length;
    totalCounter.textContent = commentsData.length;
    loaderButton.classList.toggle('hidden', !data.length);
  };

  container.replaceChildren();
  loaderButton.addEventListener('click', onLoaderButtonClick);
  loaderButton.click();

  document.addEventListener('popupHide', () => {
    loaderButton.removeEventListener('click', onLoaderButtonClick);
  }, {once: true});
};

export {renderComments};
