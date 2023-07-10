export const createModalAppendEl = (tag, id) => {
  const modalRoot = document.createElement(tag);
  modalRoot.id = id;
  document.body.appendChild(modalRoot);
  return modalRoot;
};
