const Game = require("./scripts/game.js");

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    const game = new Game(canvasEl);
    game.start();
    // game.stop();
    
});
