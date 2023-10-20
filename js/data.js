const getRandomItem = (items) => {
  const fraction = items.length * Math.random();
  const index = Math.floor(fraction);
  return items.at(index);
};

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() + min;
  return Math.round(fraction);
};

const createCommentsData = (itemCount = 0) => {
  const messages = ['Комментарий 1', 'Комментарий 2', 'Комментарий 3'];
  const names = ['Имя 1', 'Имя 2', 'Имя 3'];

  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(messages),
    name: getRandomItem(names)
  }));
};

const createPicturesData = (itemCount = 25) => {
  const descriptions = ['Описание 1', 'Описание 2', 'Описание 3'];

  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30))
  }));
};

export {createPicturesData};
