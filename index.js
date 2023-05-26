const { createServer } = require('http')
const { MongoClient } = require(`mongodb`)
const { createReadStream } = require('fs')

const connectionString = 'mongodb+srv://Ba6aka:EiwytjVI4LugwIcn@shops.pv5zb6o.mongodb.net/?retryWrites=true&w=majority'

const options = { serverApi: { version: '1', strict: true, deprecationErrors: true } }
const port = process.env.PORT || 2506

const { preLoadRequest } = require('./server/js/preload-request.js')
const { handleApi } = require('./server/js/handle-api.js')
const { typeDictionary } = require('./server/helpers/mime-types.js')
const { getBody } = require('./server/helpers/get-body.js')

letStart().then(handleServer)

async function serveFile(request, response) {
  const path = "public/" + (request.url.slice(1) || "html/shop.html")
  const extension = path.match(/\.([^.\/\\]+)$/)?.[1]
  const type = typeDictionary[extension]
  if (type) response.setHeader('Content-Type', type)

  createReadStream(path).pipe(response)
}

async function handleServer({ server, mongo }) {
  server.off('request', preLoadRequest)

  server.on('request', async (request, response) => {
    const method = request.method
    
    if (method !== 'GET') {
      request.body = await getBody(request)
    }

    if (request.url.startsWith('/api/')) {
      handleApi(request, response, mongo)
    }

    else {
      serveFile(request, response)
    }

  })
}


async function letStart() {
  const [mongo, server] = await Promise.all([
    connectToMongoDb(),
    startServer(),
  ])

  return { mongo, server }
}

async function connectToMongoDb() {
  const client = new MongoClient(connectionString, options)

  await client.connect()

  let mcDonald = client.db('Shops').collection('McDonald')
  let orders = client.db('Shops').collection('orders')
  let kfc = client.db('Shops').collection('KFC')
  
  return { client, mcDonald, orders, kfc }
}

async function startServer() {
  return new Promise((resolve, reject) => {
    const server = createServer()

    server.on('request', preLoadRequest)

    server.listen(port, () => {
      console.log(`server started at ${port}`)
      resolve(server)
    })
  })

}
