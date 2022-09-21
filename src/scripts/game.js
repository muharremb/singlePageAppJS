const TileMap = require("./TileMap");
const Cakeman = require("./cakeman.js");

function Game(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.tileSize = 24;
    this.velocity = 2;
    
    // this.tileMap = new TileMap(this.tileSize);
    // this.cakeman = this.tileMap.getCakeman();
    // this.ghost = this.tileMap.getGhost();
    // this.blueGhost = this.tileMap.getGhost();
    // this.purpleGhost = this.tileMap.getGhost();
    // this.pinkGhost = this.tileMap.getGhost(); 

    // this.setCanvasSize();
};


Game.prototype.setCanvasSize = function setCanvasSize() {
    this.tileMap.setCanvas(this.canvas);
}

Game.prototype.start = function() {
    this.tileMap = new TileMap(this.tileSize);
    this.cakeman = this.tileMap.getCakeman();
    this.ghost = this.tileMap.getGhost();
    this.blueGhost = this.tileMap.getGhost();
    this.purpleGhost = this.tileMap.getGhost();
    this.pinkGhost = this.tileMap.getGhost();
    this.setCanvasSize(); 

    this.myInterval = setInterval(this.gameIter.bind(this), 1000/60);
    // this.cakeman.timer();
    // setInterval(this.gameIter.bind(this), 1000/60);
}

Game.prototype.stop = function() {
    clearInterval(this.myInterval);
}

Game.prototype.gameIter = function() {
    // console.log(`cakeman.x: ${this.cakeman.x}, ${this.cakeman.y} ghost x: ${this.ghost.x}, ${this.ghost.y}`);
    // console.log(`ghost.moving direction: ${this.ghost.movingDirection}`);
    if(!this.isLost()) {
        this.tileMap.draw(this.ctx, this.cakeman);
        this.cakeman.draw(this.ctx);
        this.ghost.draw(this.ctx, this.pause(), this.cakeman);
        this.blueGhost.draw(this.ctx, this.pause(), this.cakeman);
        this.purpleGhost.draw(this.ctx, this.pause(), this.cakeman);
        this.pinkGhost.draw(this.ctx, this.pause(), this.cakeman);
    }
    // else this.start();
};

Game.prototype.pause = function pause() {
    return !this.cakeman.hasMoved;
}

Game.prototype.isLost = function isLost() {
    // 2d Detection Collision on mozilla
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    
    if(
    (this.cakeman.x < this.ghost.x + 16 &&
    this.cakeman.x + 16 > this.ghost.x &&
    this.cakeman.y < this.ghost.y + 16 &&
    16 + this.cakeman.y > this.ghost.y) ||

    (this.cakeman.x < this.blueGhost.x + 16 &&
    this.cakeman.x + 16 > this.blueGhost.x &&
    this.cakeman.y < this.blueGhost.y + 16 &&
    16 + this.cakeman.y > this.blueGhost.y)  ||
    
    (this.cakeman.x < this.purpleGhost.x + 16 &&
    this.cakeman.x + 16 > this.purpleGhost.x &&
    this.cakeman.y < this.purpleGhost.y + 16 &&
    16 + this.cakeman.y > this.purpleGhost.y)  ||

    (this.cakeman.x < this.pinkGhost.x + 16 &&
    this.cakeman.x + 16 > this.pinkGhost.x &&
    this.cakeman.y < this.pinkGhost.y + 16 &&
    16 + this.cakeman.y > this.pinkGhost.y)  ||

    this.cakeman.timeLeft <= -1

    ) {
        this.tileMap.gameOverScreen(this.ctx, this.cakeman);
        // this.stop();
        // this.start();
        setTimeout(() => location.reload(), 5000);
        // location.reload();
        return true;
    }
    return false;
}

// Game.prototype.isWin = function isWin() {
//     let remainingDots = this.tileMap.tiles.flat().filter(v => v === 0).length;
//     if(remainingDots === 0) {
//         return true;     
//     }
//     return false;
// }

module.exports = Game;

window.Game = Game;
