module.exports = { getMenu }

async function getMenu(mongo, request, response) {
  const shop = request.url.split('/')[3]

  const file = (JSON.stringify(await mongo[shop].find().toArray()))

  response.end(file)
} 

