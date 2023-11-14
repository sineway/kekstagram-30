import {renderFilters} from './filters.js';
import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';
import {applyRandomFilter} from './data.js';

const renderGallery = (picturesData) => {
  renderFilters();
  renderThumbnails(picturesData);

  document.addEventListener('filterSelect', (event) => {
    switch (event.detail) {
      case 'filter-default':
        renderThumbnails(picturesData);
        break;
      case 'filter-random':
        renderThumbnails(applyRandomFilter(picturesData));
        break;
    }
  });

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};

export {renderGallery};
