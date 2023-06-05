const dropdownContainer = document.querySelector('.dropdown-container');

dropdownContainer.addEventListener('click', function() {
  this.classList.toggle('active');
});
