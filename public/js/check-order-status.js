function checkOrderItems(orderItemElements) {
  if (orderItemElements[0]) {
    return true
  }

  return false
}

function checkPersonInfo(name, address, email, phone ) {
  if (name && address && email && phone) {
    return true
  }
  return false
}

export { checkOrderItems, checkPersonInfo }