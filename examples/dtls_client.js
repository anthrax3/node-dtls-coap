dtls = {address:"localhost",port:5684,udpPort:5687}
const coap  = require('../')
    , req   = coap.request('coap://localhost/m4n3dw0lf',dtls)

req.sender._port = dtls.udpPort

req.on('response', function(res) {
  res.pipe(process.stdout)
})

req.end()

