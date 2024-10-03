const toggle = document.getElementById('navbar-toggle');
const links = document.getElementById('navbar-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});



const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})