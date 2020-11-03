const burger = document.querySelector('.burger');
const showNav = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  showNav.classList.toggle('responsiv');
});
