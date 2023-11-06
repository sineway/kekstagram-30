const [ , display, ] = document.querySelectorAll('.scale__control');

const setScale = (value) => {
  display.value = `${value}%`;
};
const getScale = () => Number.parseFloat(display.value);

export {setScale, getScale};
