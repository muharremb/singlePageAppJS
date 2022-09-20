const MovingDirection = require("./movingDirections.js");
const Util = require("./utils.js");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Ghost(options) { 
    this.x = options.position[0];
    this.y = options.position[1];
    this.tileSize = options.size;
    this.velocity = 2;
    this.tileMap = options.tileMap;
    this.id = options.id

    this.movingDirection = getRandomInt(1, 4); // initial random is fine

    this.loadGhostImage();
}

Ghost.prototype.draw = function draw(ctx, pause, cakeman) {
    if(!pause) {
        this.move(cakeman);
        this.changeDirection(cakeman);
    }
    // if(this.tileMap.didCollidedWithEnv(this.x, this.y, this.movingDirection)) this.changeDirection();
    ctx.drawImage(
            this.ghostImage,
            this.x,
            this.y,
            this.tileSize,
            this.tileSize
        )
};

Ghost.prototype.move = function move(cakeman) {
    if(!this.tileMap.didCollidedWithEnv(this.x, this.y, this.movingDirection)) {
        switch(this.movingDirection) {
            case MovingDirection.up:
            this.y -= this.velocity;
            break;
            
            case MovingDirection.down:
            this.y += this.velocity;
            break; 
            
            case MovingDirection.left:
            this.x -= this.velocity;
            break; 
    
            case MovingDirection.right:
            this.x += this.velocity;
            break; 
        }
    }
}

Ghost.prototype.changeDirection = function changeDirection(cakeman) {
    let newMoveDirection = null;
    if(this.id !== 3) {
        if(getRandomInt(1,4) < 3) {
            newMoveDirection = Util.findDirectionForGhost(this, cakeman);
        } else {
            newMoveDirection = getRandomInt(1,4);
        }
    } else {
        newMoveDirection = Util.findDirectionForGhost(this, cakeman);
    }

    if(this.movingDirection !== newMoveDirection) {
        if(Number.isInteger(this.x / this.tileSize) && Number.isInteger(this.y / this.tileSize)) {
            if(!this.tileMap.didCollidedWithEnv(this.x, this.y, newMoveDirection)) {
                this.movingDirection = newMoveDirection;
            } else this.movingDirection = getRandomInt(1, 4);
        }
    }
}


Ghost.prototype.loadGhostImage = function draw() {
    this.ghostImage = new Image();
    if(this.id === 3) {
        this.ghostImage.src = ("../images/redGhost.png");
    } else if(this.id === 4) {
        this.ghostImage.src = ("../images/blueGhost.png");

    }
}
module.exports = Ghost;