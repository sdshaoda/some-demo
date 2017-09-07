var app = require('http').createServer()
var io = require('socket.io')(app)
var fs = require('fs')

const PORT = 8000

var clientCount = 0

app.listen(PORT)

io.on('connection', function (socket) {
  clientCount++
  socket.nickName = 'User' + clientCount

  // 广播
  io.emit('enter', handleData('enter', socket.nickName))

  socket.on('msg', function (str) {
    io.emit('msg', handleData('msg', socket.nickName, str))
  })

  // socket断开连接
  socket.on('disconnect', function () {
    io.emit('leave', handleData('leave', socket.nickName))
  })
})

console.log('websocket server listen on ws://localhost:' + PORT + '/')

function handleData (type, nickName, str = '') {
  var data = {}
  data.type = type

  if (type === 'enter') {
    data.msg = nickName + ' comes in'
  } else if (type === 'msg') {
    var date = new Date()
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    data.msg = `${nickName} ${time} : <br>${str}`
  } else if (type === 'leave') {
    data.msg = nickName + ' leaved'
  }

  return JSON.stringify(data)
}
