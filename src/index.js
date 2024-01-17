const apollo = require('./handlers/apollo')
const playground = require('./handlers/playground')
const setCors = require('./utils/setCors')



const handleRequest = async (request) => {
   try{
      const response = await apollo(request)
      setCors(response, true)
      return response
   } catch (err) {
    return new Response(err, {
      status: 500,
    })
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
