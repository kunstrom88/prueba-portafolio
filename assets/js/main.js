const header = document.getElementById('header')
const menu = document.getElementById('navbar--menu')

header.addEventListener('click', e => {
  const target = e.target

  if (target.closest('#navbar--toggle')) {
    menu.classList.add('show--menu')
  }

  if (target.closest('#navbar--close')) {
    menu.classList.remove('show--menu')
  }

  if (target.matches('.navbar__link')) {
    menu.classList.remove('show--menu')
  }
})