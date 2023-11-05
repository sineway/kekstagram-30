import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');

new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

