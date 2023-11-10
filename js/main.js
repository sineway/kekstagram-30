import {request} from './utilities.js';
import {renderStatus} from './status.js';
import {renderGallery} from './gallery/main.js';
import './upload/main.js';

const baseUrl = 'https://30.javascript.pages.academy/kekstagram';

document.addEventListener('formdata', async (event) => {
  try {
    await request(baseUrl, {method: 'post', body: event.formData});
    renderStatus('success');
  } catch {
    renderStatus('error');
  }
});

try {
  renderGallery(await request(`${baseUrl}/data`));
} catch {
  renderStatus('data-error', {autoHide: 5000});
}
