import { makeProductCard } from "./makeCard.js"
import productList from "./productList.js"

const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', drawCards)

const inputField = document.getElementById('input')

let match = []

function drawCards() {
  for (const product of match) {
    document.getElementById('card' + product.id).remove()
  }

  const query = inputField.value

  match = productList.filter(product => {
    return matches(product.name, query) ||
           matches(product.description, query) ||
           matches(product.group, query)
  })

  const list = document.querySelector('.list')
  for (const product of match) {  
    const productElement = makeProductCard(product, false)
  
    list.appendChild(productElement)
  }
}

function matches(string, substring) {
  return string.toLowerCase().includes(substring.toLowerCase())
}