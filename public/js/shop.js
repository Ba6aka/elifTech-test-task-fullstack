import renderShop from "./render-shop.js"
import replaceButton from "../js/helpers//replace-button.js"

const shops = document.querySelector('.shops')
const menu = document.querySelector('.menu')


const cart = []

window.addEventListener('load', () =>{
  localStorage.clear()
})

menu.addEventListener('click', (e) => {
  const btn = e.target.closest('.add')
  if (!btn) return
  replaceButton(btn)
  cart.push(btn.id)
  localStorage.setItem("order", cart)
})

shops.addEventListener('click', (e) => {
  if (e.target?.id) {
    fetch(`/api/menu/${e.target.id}`).
      then((result) => result.json()).
      then((data) => {
        localStorage.clear()
        localStorage.setItem("shop", e.target.id)
        renderShop(data)
        cart.length = 0
      })
  }


})

