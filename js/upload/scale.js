const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');

const setScale = (value) => {
  value = Math.max(value, 25);
  value = Math.min(value, 100);
  display.value = `${value}%`;
  display.dispatchEvent(new Event('change', {bubbles: true}));
};
const getScale = () => Number.parseFloat(display.value);
const scaleDown = () => setScale(getScale() - 25);
const scaleUp = () => setScale(getScale() + 25);

scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {getScale};
