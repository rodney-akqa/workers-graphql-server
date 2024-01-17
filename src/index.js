const apollo = require('./handlers/apollo')
const playground = require('./handlers/playground')
const setCors = require('./utils/setCors')



const handleRequest = async (request) => {
   const response = await apollo(request)
   setCors(response, true)
   return response
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
