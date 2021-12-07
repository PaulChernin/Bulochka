const storage = window.localStorage

import { makeProductCard } from "./makeCard.js"
import productList from "./productList.js"

drawCards()

function drawCards() {
  const addedProducts = JSON.parse(storage.getItem('addedProducts')) || []
  
  if (addedProducts.length == 0) {
    document.querySelector('.header').innerText = 'Корзина пуста'
  }

  const list = document.querySelector('.list')
  for (const id of addedProducts) {
    const product = productList.find(product => product.id == id)
  
    const productElement = makeProductCard(product, true)
  
    list.appendChild(productElement)
  }
}