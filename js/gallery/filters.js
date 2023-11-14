const container = document.querySelector('.img-filters');

const renderFilters = () => {
  container.classList.remove('img-filters--inactive');
};

export {renderFilters};
