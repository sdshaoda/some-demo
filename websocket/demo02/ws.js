var ws = require('nodejs-websocket')

const PORT = 8000

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
  console.log('New connection')
  conn.on('text', function (str) {
    console.log('Received ' + str)
    // 转换为大写，并添加三个感叹号
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

console.log('websocket server listen on port: ' + PORT)
