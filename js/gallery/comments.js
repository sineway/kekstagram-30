const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');

const createComments = (commentsData) => commentsData.map((properties) => {
  const {avatar, message, name} = properties;
  const comment = template.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const renderComments = (commentsData) => {
  container.replaceChildren(...createComments(commentsData));
};

export {renderComments};
