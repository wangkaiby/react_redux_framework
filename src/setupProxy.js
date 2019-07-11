const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy("/api", {
        target: 'http://apigateway.test-dahai.com/',
        changeOrigin: true
       }
    )
  )
  app.use(
    proxy("/koaapi", {
        target: 'http://localhost:4000',
        changeOrigin: true
       }
    )
  )
}