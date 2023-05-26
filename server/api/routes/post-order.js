module.exports = { postOrder }

async function postOrder(request, response, mongo) {
  const shop = request.url.split('/')[3]
  const { body } = request

  const order = await mongo[shop].insertOne(body)
  body._id = order.insertedId
  const fil = JSON.stringify(body)

  response.end(fil)
}