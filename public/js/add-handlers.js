import calculateTotalPrice from "./check-total.js"

function addHandlers() {
  const total = document.querySelector('.total-price')
  const orderList = document.querySelector('.order-list')
  const quantityOrderItems = document.querySelectorAll('.quantity')

  quantityOrderItems.forEach(item => {
    item.addEventListener('change', () => {
      total.textContent = `${calculateTotalPrice()} UAH`
    })
  })

  orderList.addEventListener('click', (e) => {
    if (e.target.className == 'close-button') {
      e.target.parentElement.remove()
      total.textContent = `${calculateTotalPrice()} UAH`
    }
  })

}

export default addHandlers