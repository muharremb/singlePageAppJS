const TileMap = require("./TileMap");
const Cakeman = require("./cakeman.js");

function Game(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.tileSize = 32;
    this.velocity = 2;
    this.tileMap = new TileMap(this.tileSize);
    this.cakeman = this.tileMap.getCakeman(this.velocity);
    this.ghost = this.tileMap.getGhost(this.velocity);

    this.setCanvasSize();
};


Game.prototype.setCanvasSize = function setCanvasSize() {
    this.tileMap.setCanvas(this.canvas);
}

Game.prototype.start = function() {
    setInterval(this.gameIter.bind(this), 1000/50);
}

Game.prototype.gameIter = function() {
    this.tileMap.draw(this.ctx);
    this.cakeman.draw(this.ctx);
    this.ghost.draw(this.ctx, this.pause());
};

Game.prototype.pause = function pause() {
    return !this.cakeman.hasMoved;
}

module.exports = Game;