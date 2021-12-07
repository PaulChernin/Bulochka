const burgerButton = document.querySelector('#burger span')
const menu = document.querySelector('header .container')

burgerButton.addEventListener('click', () => {
  menu.classList.toggle('menuActive')

  if (burgerButton.innerText == 'menu') {
    burgerButton.innerText = 'close'
  } else {
    burgerButton.innerText = 'menu'
  }
})

const storage = window.localStorage
let addedProducts = JSON.parse(storage.getItem('addedProducts')) || []

const productsNumberEl = document.getElementById('productsNumber')
let productsNumber = addedProducts.length
productsNumberEl.innerHTML = productsNumber || ' '