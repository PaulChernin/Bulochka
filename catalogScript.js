import productList from "./productList.js"
import { makeProductCard } from "./makeCard.js"

const catalog = productListToCatalog(productList)

const catalogElement = document.getElementById('catalog')
const groupTemplate = document.getElementById('group')

for (const group of catalog) {
  const groupElement = groupTemplate.content.cloneNode(true)
  const listElement = groupElement.querySelector('.list')
  
  groupElement.querySelector('.container').setAttribute('id', group.name)
  groupElement.querySelector('.groupName').innerText = group.name

  for (const product of group.list) {
    const productCard = makeProductCard(product)

    listElement.appendChild(productCard)
  }

  catalogElement.appendChild(groupElement)
}



function productListToCatalog(productList) {
  let catalog = []
  
  for (const product of productList) {
    let group = catalog.find(group => group.name == product.group)
    
    if (!group) {
      group = {
        name: product.group,
        list: []
      }
      
      catalog.push(group)
    }
    
    group.list.push(product)
  }

  return catalog
}
