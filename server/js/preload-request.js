module.exports = { preLoadRequest }
const { readFileSync } = require('fs')
function preLoadRequest(request, response) {
    let file = readFileSync('public/html/preload.html','utf-8')
    response.end(file)
}