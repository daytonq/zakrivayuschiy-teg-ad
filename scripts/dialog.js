const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.dialog');
const dialogForm = saveDialog.querySelector('form');
const dialogCloseButton = saveDialog.querySelector('.dialog__button');

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  saveDialog.showModal();
});

dialogCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  saveDialog.close();
});

dialogForm.addEventListener('submit', (event) => {
  event.preventDefault();
  saveDialog.close();
});
