const menu = document.querySelector('.menu')

function renderShop(data) {
  const productCards = document.querySelectorAll('.poduct-card')
  productCards.forEach((item) => item.remove(item))

  for (const { descr, title, price, _id, shop } of data) {
    menu.id = shop
    const div = document.createElement('div')
    div.id = _id
    div.className = ('poduct-card')
    div.innerHTML = `
        <div class="title">${title}</div>
        <div class="card-bottom">
          <div class="descr">${descr}</div>
          <div class="order">
            <span class="price"> ${price} UAH</span>
            <button type="reset" class="add" id="${_id}">Add to cart</button>`
    menu.append(div)
  }
}


export default renderShop

