const template = document.querySelector('#picture');

const createThumbnails = (picturesData) => picturesData.map(() => {
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  return thumbnail;
});

export {createThumbnails};
