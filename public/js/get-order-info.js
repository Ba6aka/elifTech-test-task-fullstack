function getOrderItem(orderItemElements, i) {
  const orderItemElement = orderItemElements[i];
  const orderTitle = orderItemElement.querySelector(".order-title").innerText;
  const orderName = orderItemElement.querySelector(".order-name").innerText;
  const orderPrice = orderItemElement.querySelector(".order-price").innerText;
  const orderQuantity = orderItemElement.querySelector("input[type=number]").value;

  const orderItem = {
    name: orderName,
    price: orderPrice,
    quantity: orderQuantity,
    descr: orderTitle
  }

  return orderItem
}

function getPersonInfo() {
  const name = document.getElementById("name").value
  const address = document.getElementById("address").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value

  return { name, address, email, phone }
}

function getData(name, address, email, phone, orderItems) {
  const data = {
    name: name,
    address: address,
    email: email,
    phone: phone,
    orderItems: orderItems
  }

  return data
}



export { getOrderItem, getPersonInfo, getData}