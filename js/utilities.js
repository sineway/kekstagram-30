const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const getRandomItem = (items) => {
  const fraction = items.length * Math.random();
  const index = Math.floor(fraction);
  return items.at(index);
};

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() + min;
  return Math.round(fraction);
};

export {request, getRandomItem, getRandomInteger};
