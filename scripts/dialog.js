const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.dialog');
const dialogCloseButton = saveDialog.querySelector('.dialog__button');

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  saveDialog.showModal();
});

dialogCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  saveDialog.close();
});
