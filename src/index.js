const Game =require("./scripts/game.js");
const GameView = require("./scripts/game_view.js");

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;
    
    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    
    const gameView = new GameView(game, ctx);
    gameView.start();
    // game.draw(ctx);

});

window.Game = Game;