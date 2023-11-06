const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');

const setScale = (value) => {
  display.value = `${value}%`;
};
const getScale = () => Number.parseFloat(display.value);
const scaleDown = () => setScale(getScale() - 25);
const scaleUp = () => setScale(getScale() + 25);

scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {scaleDown, scaleUp};
