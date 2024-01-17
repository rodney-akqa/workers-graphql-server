const setCorsHeaders = (request, uuid, response, config) => {
  const corsConfig = config instanceof Object ? config : false

  response.headers.set('correlation-id',request.headers.get("cf-ray"))
  response.headers.set('uuid',uuid)
  response.headers.set(
    'Access-Control-Allow-Credentials',
    corsConfig ? corsConfig.allowCredentials : 'true',
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    corsConfig ? corsConfig.allowHeaders : 'application/json, Content-type',
  )
  response.headers.set(
    'Access-Control-Allow-Methods',
    corsConfig ? corsConfig.allowMethods : 'GET, POST',
  )
  response.headers.set(
    'Access-Control-Allow-Origin',
    corsConfig ? corsConfig.allowOrigin : '*',
  )
  response.headers.set('X-Content-Type-Options', 'nosniff')
}

module.exports = setCorsHeaders
