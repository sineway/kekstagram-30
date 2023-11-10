const renderStatus = (type) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  status.addEventListener('click', (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
    }
  });

  document.body.append(status);
};

export {renderStatus};
