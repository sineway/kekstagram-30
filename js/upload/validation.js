import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const split = (text) => text.split(' ').filter(Boolean);

pristine.addValidator(form.hashtags, (text) => {
  const hashtagPattern = /^#[a-zа-яё0-9]+$/i;
  return split(text).every((word) => hashtagPattern.test(word));
}, 'Невалидный хэш-тег', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const words = split(text.toLowerCase());
  return words.length === new Set(words).size;
}, 'Повторяющийся хэш-тег', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtags = 5;
  return split(text).length <= maxHashtags;
}, 'Слишком много хэш-тегов', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtagLength = 20;
  return split(text).every((word) => word.length <= maxHashtagLength);
}, 'Слишком длинный хэш-тег', 1, true);

pristine.addValidator(form.description, (text) => {
  const maxDescriptionLength = 140;
  return text.length <= maxDescriptionLength;
}, 'Слишком длинное описание', 1, true);

const checkValidity = () => pristine.validate();
const resetValidity = () => pristine.reset();

export {checkValidity, resetValidity};
