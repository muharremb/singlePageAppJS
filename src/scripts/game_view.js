function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    const cxtThis = this.ctx;
    
    setInterval(this.game.moveObjects.bind(this.game), 1000);
    setInterval(this.game.draw.bind(this.game), 1000, cxtThis);
}

module.exports = GameView;