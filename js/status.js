const renderStatus = (type) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  const onDocumentKeydown = (event) => {
    if (event.key.startsWith('Esc')) {
      status.click();
    }
  };

  status.addEventListener('click', (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });

  document.body.append(status);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {renderStatus};
