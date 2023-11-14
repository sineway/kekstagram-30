import {renderFilters} from './filters.js';
import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';

const renderGallery = (picturesData) => {
  renderFilters();
  renderThumbnails(picturesData);

  document.addEventListener('filterSelect', (event) => {
    switch (event.detail) {
      case 'filter-default':
        renderThumbnails(picturesData);
        break;
    }
  });

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};

export {renderGallery};
