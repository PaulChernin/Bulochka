const submitElement = document.getElementById('submit')

submitElement.addEventListener('click', () => {
  const order = {}
  
  order.name = document.getElementById('name').value
  order.address = document.getElementById('address').value
  order.phone = document.getElementById('phone').value

  const storage = window.localStorage
  const addedProducts = JSON.parse(storage.getItem('addedProducts')) || []

  order.products = addedProducts

  const json = JSON.stringify(order)

  const request = new XMLHttpRequest()
  request.open("POST", "http://localhost:3000/orders")
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')

  request.send(json)

  window.location.href = './index.html'
})