//openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.crt -subj '/CN=m4n3dw0lf/O=dtls/C=BR'
const coap    = require('../') // or coap
    , server  = coap.createServer()

server.on('request', function(req, res) {
  res.end('Hello ' + req.url.split('/')[1] + '\n')
})


try {
  server.listen(null,null,"cert.key","cert.crt",function() {
    console.log('COAP Server listening on port: 5683')
  })
}

catch (err) {
  console.log(err);
  console.log("First you need to generate a private key and public certificate:\nopenssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.crt -subj '/CN=m4n3dw0lf/O=dtls/C=BR'");
}

