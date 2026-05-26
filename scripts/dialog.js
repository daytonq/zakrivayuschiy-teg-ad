const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.dialog');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});
