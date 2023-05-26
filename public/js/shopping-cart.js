import renderOrder from "./render-order.js"
import fetchOrder from "../servises/fetch-order.js"
import addHandlers from "./add-handlers.js"
import clearOrderList from "./clear-order-list.js"
import calculateTotalPrice from "./check-total.js"
import { getOrderItem, getData, getPersonInfo } from "./get-order-info.js"
import { checkOrderItems, checkPersonInfo } from "./check-order-status.js"

const total = document.querySelector('.total-price')
const form = document.querySelector('form')
const body = localStorage.getItem('order')
const submitBtn = document.getElementById('submit')

if (localStorage.getItem('shop') && body) {
  fetchOrder(`/api/get-order/${localStorage.getItem('shop')}`, body)
    .then((data) => {
      renderOrder(data)
    })
    .then(() => {
      const totalPrice = calculateTotalPrice()
      total.textContent = `${totalPrice} UAH` 
      addHandlers(totalPrice)
    })
}

submitBtn.addEventListener('click', (e) => {
  if (e.target.id != 'submit') return
  const { name, address, email, phone } = getPersonInfo()
  const orderItems = []
  const orderItemElements = document.querySelectorAll(".order-item")

  for (let i = 0; i < orderItemElements.length; i++) {
    const orderItem = getOrderItem(orderItemElements, i)

    orderItems.push(orderItem)
  }

  const data = getData(name, address, email, phone, orderItems)

  if (checkPersonInfo(name, address, email, phone) && checkOrderItems(orderItemElements)) {
    fetchOrder(`/api/create-order/orders`, data)
      .then((data) => {
        alert('order send successfully')
        localStorage.clear()
        form.reset()
        clearOrderList(orderItemElements)
        total.textContent = `0 UAH`
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
        alert('order send failed, try again later')
      }
      )
  } else {
    alert('your cart or your info is not complete')
  }
})


