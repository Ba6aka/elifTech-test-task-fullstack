function clearOrderList(orderList) {
  orderList.forEach(element => {
    element.remove()
  })
}

export default clearOrderList