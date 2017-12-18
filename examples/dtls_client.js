dtls = {address:"localhost",port:5684,key:"cert.key",crt:"cert.crt",udpPort:5687,dtlsPort:5686}
const coap  = require('../') 
    , req   = coap.request('coap://localhost/m4n3dw0lf',dtls)

//console.log(coap)
req.sender._port = dtls.udpPort

req.on('response', function(res) {
  res.pipe(process.stdout)
})

req.end()

