const Cakeman = require("./scripts/cakeman.js");
const MovingObject = require("./scripts/moving_object.js");
const Board = require("./scripts/board.js");
const Ghost = require("./scripts/ghost.js");
const Game =require("./scripts/game.js");

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    const ctx = canvasEl.getContext("2d");
    
    const cake = new Cakeman();
    const ghost = new Ghost();
    const game = new Game();

    game.draw(ctx);
    // cake.draw(ctx);
    // ghost.draw(ctx);
    // board.render(ctx);

})

window.MovingObject = MovingObject;
window.Board = Board;
window.Game = Game;