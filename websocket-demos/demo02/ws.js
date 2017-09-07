var ws = require('nodejs-websocket')

const PORT = 8000

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
  console.log('New connection')
  conn.on('text', function (str) {
    console.log('Received ' + str)
    conn.sendText(str.toUpperCase() + '!!!')
  })
  conn.on('close', function (code, reason) {
    console.log('Connection closed')
  })
  conn.on('error', function (err) {
    console.log('handle error')
    console.log(err)
  })
}).listen(PORT)

console.log('websocket server listen on ws://localhost:' + PORT + '/')
