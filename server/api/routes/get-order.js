module.exports = { getOrder }
const {ObjectId} = require('mongodb')

async function getOrder(request, response, mongo) {
  const shop = request.url.split('/')[3]
  const shopCollection =  mongo[shop]
  let file = []
  const data = request.body.split(',')
  for (const item of data) {
    await shopCollection
      .findOne({ _id: new ObjectId(item)})
      .then((response) => (file.push(response)))
  }


  response.end(JSON.stringify(file))

}