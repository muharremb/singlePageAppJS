const TileMap = require("./TileMap");
const Cakeman = require("./cakeman.js");

function Game(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.tileSize = 32;
    this.velocity = 2;
    this.tileMap = new TileMap(this.tileSize);
    this.cakeman = this.tileMap.getCakeman();
    this.ghost = this.tileMap.getGhost();

    this.setCanvasSize();
};


Game.prototype.setCanvasSize = function setCanvasSize() {
    this.tileMap.setCanvas(this.canvas);
}

Game.prototype.start = function() {
    setInterval(this.gameIter.bind(this), 1000/50);
}

Game.prototype.gameIter = function() {
    if(!this.isLost()) {

        this.tileMap.draw(this.ctx);
        this.cakeman.draw(this.ctx);
        this.ghost.draw(this.ctx, this.pause());
    }
    else return;
};

Game.prototype.pause = function pause() {
    return !this.cakeman.hasMoved;
}

Game.prototype.isLost = function isLost() {
    // 2d Detection Collision on mozilla
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    
    if(
    this.cakeman.x < this.ghost.x + 16 &&
    this.cakeman.x + this.ghost.y > 16 &&
    this.cakeman.y < this.ghost.y + 16 &&
    16 + this.cakeman.y > this.ghost.y
    ) {
        return true;
    }
    return false;
}

module.exports = Game;