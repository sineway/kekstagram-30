import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';

const renderGallery = (picturesData) => {
  renderThumbnails(picturesData);
  renderPopup(...picturesData);
};

export {renderGallery};
