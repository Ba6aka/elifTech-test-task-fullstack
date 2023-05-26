function renderOrder(data) {
  const orderList = document.querySelector('.order-items')
  const li = document.createElement('li')
  li.className = 'order-item'

  for (const { title, descr, price, _id } of data) {
    const li = document.createElement('li')
    li.className = 'order-item'
    li.innerHTML = `
            <div class="order-title">${title}</div>
            <div class="order-descr">
              <div class="order-name">${descr}</div>
              <div class="order-price">${price} UAH</div>
              <input class='quantity' type="number" value='1'>
            </div>
            <button type="reset" class="close-button">&times;</button>`
            
    orderList.appendChild(li)
  }



}

export default renderOrder
