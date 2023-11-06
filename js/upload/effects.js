import '../../vendor/nouislider/nouislider.css';
import '../../vendor/nouislider/nouislider.js';

const ranges = {
  none: [0, 100, 1],
  chrome: [0, 1, .1],
  sepia: [0, 1, .1],
  marvin: [0, 100, 1],
  phobos: [0, 3, .1],
  heat: [1, 3, .1]
};

const createOptions = (type) => {
  const [min, max, step] = ranges[type];
  return {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    tooltips: true
  };
};

const placeholder = document.querySelector('.effect-level__slider');
noUiSlider.create(placeholder, createOptions('marvin'));
