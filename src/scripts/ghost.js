const MovingDirection = require("./movingDirections.js");

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

    this.movingDirection = getRandomInt(1, 4);

    this.loadGhostImage();
}

Ghost.prototype.draw = function draw(ctx, pause) {
    if(!pause) {
        this.move();
        this.changeDirection();
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

Ghost.prototype.move = function move() {
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

Ghost.prototype.changeDirection = function changeDirection() {
    let newMoveDirection = null;
    newMoveDirection = getRandomInt(1, 4);

    if(this.movingDirection !== newMoveDirection) {
        if(Number.isInteger(this.x / this.tileSize) && Number.isInteger(this.y / this.tileSize)) {
            if(!this.tileMap.didCollidedWithEnv(this.x, this.y, newMoveDirection)) {
                this.movingDirection = newMoveDirection;
            }
        }
    }
}


Ghost.prototype.loadGhostImage = function draw() {
    this.ghostImage = new Image();
    this.ghostImage.src = ("../images/redGhost.png");
}
module.exports = Ghost;