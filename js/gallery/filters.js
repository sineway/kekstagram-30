const container = document.querySelector('.img-filters');

const selectFilter = (id) => {
  container.querySelectorAll('.img-filters__button').forEach((button) => {
    button.classList.toggle('img-filters__button--active', button.id === id);
  });
  document.dispatchEvent(new CustomEvent('filterSelect', {detail: id}));
};

const onContainerClick = (event) => {
  if (event.target.matches('.img-filters__button')) {
    selectFilter(event.target.id);
  }
};

const renderFilters = () => {
  container.classList.remove('img-filters--inactive');
  container.addEventListener('click', onContainerClick);
};

export {renderFilters};
