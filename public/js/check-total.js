function calculateTotalPrice() {
  const orders = document.querySelectorAll('li')

  let totalprice = 0

  for (let i = 0; i < orders.length; i++) {
    const quantity = orders[i].querySelector('.quantity').value
    const price = +orders[i].querySelector('.order-price').textContent.split(' ')[0]

    totalprice += quantity * price
  }
  return totalprice
}

export default calculateTotalPrice