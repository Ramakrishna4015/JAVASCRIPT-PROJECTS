const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('myModal');
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});