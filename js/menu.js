let menuTarget = document.querySelector('.travel__map')
let openBtn = document.querySelector('.search__button');

openBtn.onclick = function() {
  menuTarget.classList.toggle('hide');
}