const renderStatus = (type) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  document.body.append(status);
};

export {renderStatus};
