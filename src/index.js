const apollo = require('./handlers/apollo')
const playground = require('./handlers/playground')
const setCors = require('./utils/setCors')

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
const uuid = uuidv4();

const handleRequest = async (request) => {
  try {
    const response = await apollo(request, uuid)
    setCors(request, uuid, response, true)
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
