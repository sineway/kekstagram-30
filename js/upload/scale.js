const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');
const config = {min: 25, max: 100, step: 25, defaultValue: 100};

const setScale = (value) => {
  value = Math.max(value, config.min);
  value = Math.min(value, config.max);
  display.value = `${value}%`;
  display.dispatchEvent(new Event('change', {bubbles: true}));
};
const getScale = () => Number.parseFloat(display.value);
const resetScale = () => setScale(config.defaultValue);
const scaleDown = () => setScale(getScale() - config.step);
const scaleUp = () => setScale(getScale() + config.step);

scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {getScale, resetScale};
