import {request} from './utilities.js';
import {renderStatus} from './status.js';
import {renderGallery} from './gallery/main.js';
import {setSubmitDisabled} from './upload/main.js';

const baseUrl = 'https://30.javascript.pages.academy/kekstagram';

document.addEventListener('formdata', async (event) => {
  try {
    setSubmitDisabled(true);
    await request(baseUrl, {method: 'post', body: event.formData});
    renderStatus('success');
  } catch {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});

try {
  renderGallery(await request(`${baseUrl}/data`));
} catch {
  renderStatus('data-error', {autoHide: 5000});
}
