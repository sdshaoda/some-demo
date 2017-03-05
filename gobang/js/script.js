// 获取canvas
var chess = document.querySelector('#chess')
var context = chess.getContext('2d')

// 我先手
var me = true

window.onload = function() {
    drawChessBoard();
    chess.addEventListener('click', handleChessClick, false)
}

// 画棋盘
function drawChessBoard() {
    // 设置颜色
    context.strokeStyle = '#bfbfbf';
    for (var i = 0; i < 15; i++) {
        context.moveTo(15 + i * 30, 15)
        context.lineTo(15 + i * 30, 435)
        context.stroke()
        context.moveTo(15, 15 + i * 30)
        context.lineTo(435, 15 + i * 30)
        context.stroke()
    }
}

// 落子情况，0=未落子；1=黑子；2=白子
var chessBoard = []
for (var i = 0; i < 15; i++) {
    chessBoard[i] = []
    for (var j = 0; j < 15; j++) {
        chessBoard[i][j] = 0
    }
}

/**
 * 落子函数
 * @param i,j为坐标位置;me=true时，落黑子
 */
function step(i, j, me) {
    context.beginPath()
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI)
    context.closePath()
        // 设置渐变色
    var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0)
    if (me) {
        // 黑子
        gradient.addColorStop(0, '#0a0a0a')
        gradient.addColorStop(1, '#636766')
    } else {
        // 白子
        gradient.addColorStop(0, '#d1d1d1')
        gradient.addColorStop(1, '#f9f9f9')
    }
    context.fillStyle = gradient
    context.fill()
}

function handleChessClick(e) {
    var x = e.offsetX
    var y = e.offsetY
    var i = Math.floor(x / 30)
    var j = Math.floor(y / 30)
    if (!chessBoard[i][j]) {
        if (me) {
            step(i, j, true)
            chessBoard[i][j] = 1
        } else {
            step(i, j, false)
            chessBoard[i][j] = 2
        }
        me = !me
    }
}