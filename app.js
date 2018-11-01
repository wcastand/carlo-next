const carlo = require('carlo')
;(async () => {
  const app = await carlo.launch()
  app.serveFolder(`${__dirname}/out`)
  await app.load('./index.html')
})()
