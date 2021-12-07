const productTemplate = document.getElementById('product')

export function makeProductCard(product, deletable) {
  const productElement = productTemplate.content.cloneNode(true)
  const actionElement = productElement.querySelector('.action')
  const itemElement = productElement.querySelector('.item')

  itemElement.setAttribute('id', 'card' + product.id)
  productElement.querySelector('.productName').innerText = product.name
  productElement.querySelector('.description').innerText = product.description
  productElement.querySelector('img').setAttribute('src', product.image)
  
  const id = product.id
  actionElement.setAttribute('productId', id)
  
  if (isInCart(id)) {
    itemElement.classList.add('added')
    actionElement.innerText = 'remove_circle'
  }

  actionElement.addEventListener('click', (event) => {

    if (actionElement.innerText == 'add_circle') {
      itemElement.classList.add('added')
      actionElement.innerText = 'remove_circle'
      
      addProduct(id)
    } else {
      itemElement.classList.remove('added')
      actionElement.innerText = 'add_circle'

      removeProduct(id)

      if (deletable) {
        itemElement.remove(id)
      }
    }
  })
  
  return productElement
}

const storage = window.localStorage
let addedProducts = JSON.parse(storage.getItem('addedProducts')) || []

const productsNumberEl = document.getElementById('productsNumber')
let productsNumber = addedProducts.length

function isInCart(id) {
  return addedProducts.includes(id)
}

function addProduct(id) {
  productsNumber++
  productsNumberEl.innerHTML = productsNumber || ' '
  
  addedProducts.push(id)
  storage.setItem('addedProducts', JSON.stringify(addedProducts))
}

function removeProduct(id) {
  console.log(id)
  productsNumber--
  productsNumberEl.innerHTML = productsNumber || ' '
  
  addedProducts = addedProducts.filter(item => item !== id)
  storage.setItem('addedProducts', JSON.stringify(addedProducts))
}
