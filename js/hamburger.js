const hamburger = document.querySelector('div.hamburger');
const menu = document.querySelector('div.menu-hamburger')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
})

menu.addEventListener('click', () => {
  menu.classList.remove('menu-active')
})