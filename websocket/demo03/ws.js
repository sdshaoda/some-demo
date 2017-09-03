var ws = require('nodejs-websocket')

const PORT = 8000

// 客户端计数
var clientCount = 0

var server = ws.createServer(function (conn) {
  console.log('New connection')

  clientCount++
  conn.nickName = 'User' + clientCount
  broadcast(conn.nickName + ' comes in', 'enter')

  conn.on('text', function (str) {
    console.log('Received ' + str)
    var date = new Date()
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    broadcast(`${conn.nickName} ${time}: <br>${str}`, 'msg')
  })

  conn.on('close', function (code, reason) {
    console.log('Connection closed')
    broadcast(conn.nickName + 'leaved', 'leave')
  })
  conn.on('error', function (err) {
    console.log('handle error')
    console.log(err)
  })
}).listen(PORT)

console.log('websocket server listen on ws://localhost:' + PORT + '/')

// 广播
function broadcast (str, type) {
  var data = {}
  data.msg = str
  data.type = type
  // web socket 只能发送纯文本 或二进制数据(blob对象、Arraybuffer对象)
  data = JSON.stringify(data)

  server.connections.forEach(function (connection) {
    connection.sendText(data)
  })
}
