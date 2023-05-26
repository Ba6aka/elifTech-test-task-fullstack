module.exports = { handleApi }
const { postOrder } = require('../api/routes/post-order.js')
const { getOrder } = require('../api/routes/get-order.js')
const { getMenu } = require('../api/routes/get-menu.js')

function handleApi(request, response, mongo) {
  const { url } = request

  if (url.includes('menu')) {
    getMenu(mongo, request, response)
  } else if (url.includes('get-order')) {
    getOrder(request, response, mongo)
  } else if (url.includes('create-order')){
    postOrder(request, response, mongo)
  }

}