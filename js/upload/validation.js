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
