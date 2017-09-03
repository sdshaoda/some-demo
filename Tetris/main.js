// 4*4
var nextData = [
  [2, 2, 0, 0],
  [0, 2, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
// 10*20
var gameData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
]
var nextDivs = []
var gameDivs = []

initGame()
initNext()
refreshGame()
refreshNext()

function initGame () {
  for (var i = 0;i < gameData.length;i++) {
    var gameDiv = []
    for (var j = 0;j < gameData[0].length;j++) {
      var newNode = document.createElement('div')
      newNode.className = 'none'
      newNode.style.top = i * 20 + 'px'
      newNode.style.left = j * 20 + 'px'
      document.querySelector('#game').appendChild(newNode)
      gameDiv.push(newNode)
    }
    gameDivs.push(gameDiv)
  }
}
function initNext () {
  for (var i = 0;i < nextData.length;i++) {
    var nextDiv = []
    for (var j = 0;j < nextData[0].length;j++) {
      var newNode = document.createElement('div')
      newNode.className = 'none'
      newNode.style.top = i * 20 + 'px'
      newNode.style.left = j * 20 + 'px'
      document.querySelector('#next').appendChild(newNode)
      nextDiv.push(newNode)
    }
    nextDivs.push(nextDiv)
  }
}
function refreshGame () {
  for (var i = 0; i < gameData.length;i++) {
    for (var j = 0; j < gameData[0].length;j++) {
      if (gameData[i][j] == 0) {
        gameDivs[i][j].className = 'none'
      }else if (gameData[i][j] == 1) {
        gameDivs[i][j].className = 'done'
      }else if (gameData[i][j] == 2) {
        gameDivs[i][j].className = 'current'
      }
    }
  }
}
function refreshNext () {
  for (var i = 0; i < nextData.length;i++) {
    for (var j = 0; j < nextData[0].length;j++) {
      if (nextData[i][j] == 0) {
        nextDivs[i][j].className = 'none'
      }else if (nextData[i][j] == 1) {
        nextDivs[i][j].className = 'done'
      }else if (nextData[i][j] == 2) {
        nextDivs[i][j].className = 'current'
      }
    }
  }
}
