function Local() {
  // 游戏对象
  var game
  // 开始
  this.start = function () {
    var doms = {
      gameDiv: document.querySelector('#game'),
      nextDiv: document.querySelector('#next')
    }
    game = new Game(doms)
  }
}
