const [ , display, ] = document.querySelectorAll('.scale__control');

const setScale = (value) => {
  display.value = `${value}%`;
};
const getScale = () => Number.parseFloat(display.value);
const scaleDown = () => setScale(getScale() - 25);
const scaleUp = () => setScale(getScale() + 25);

export {scaleDown, scaleUp};
