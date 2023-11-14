const container = document.querySelector('.img-filters');

const selectFilter = (id) => {
  container.querySelectorAll('.img-filters__button').forEach((button) => {
    button.classList.toggle('img-filters__button--active', button.id === id);
  });
};

const renderFilters = () => {
  container.classList.remove('img-filters--inactive');
};

export {renderFilters, selectFilter};
