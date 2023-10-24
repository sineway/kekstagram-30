const container = document.querySelector('.pictures');
const template = document.querySelector('#picture');

const createThumbnails = (picturesData) => picturesData.map(() => {
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  return thumbnail;
});

const renderThumbnails = (picturesData) => {
  container.append(...createThumbnails(picturesData));
};

export {renderThumbnails};
