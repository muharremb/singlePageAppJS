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
        this.changeDirection(cakeman);
        this.move(cakeman);
    }
    ctx.drawImage(
        this.ghostImage,
        this.x,
        this.y,
        this.tileSize,
        this.tileSize
    );
};

Ghost.prototype.mockMove = function mockMove(suggestedDirection) {
    let x = null;
    let y = null;
    if(!this.tileMap.didCollidedWithEnv(this.x, this.y, suggestedDirection)) {
        if(suggestedDirection === MovingDirection.up) {
            y = this.y - this.velocity;
            return [this.x, y]; 
        } else if(suggestedDirection === MovingDirection.down) {
            y = this.y + this.velocity;
            return [this.x, y];
        } else if(suggestedDirection === MovingDirection.right) {
            x = this.x + this.velocity;
            return [x, this.y];
        } else {
            x = this.x - this.velocity;
            return [x, this.y];
        }
    }
}

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
            if(this.x < 12) this.x = 23 * this.tileMap.tiles[0].length;
            break; 
    
            case MovingDirection.right:
            this.x += this.velocity;
            if(this.x >= this.tileMap.tiles[0].length * 23) this.x=0;
            break; 
        }
    } 
}

Ghost.prototype.changeDirection = function changeDirection(cakeman) {
    let newMoveDirection = null;
    let newMoveDirectionName = null;
    let possibleDirections = [];

    if((this.x % this.tileSize === 0) && (this.y % this.tileSize === 0)) {
        for(let i=1; i<5; i++) {
            if(!this.tileMap.didCollidedWithEnv(this.x, this.y, i)){
                let distance = Util.dist(this.mockMove(i), [cakeman.x, cakeman.y]);
                possibleDirections.push(i);
            }
        }
        
        possibleDirections = possibleDirections.filter(item => item !== 5-this.movingDirection);

        if(getRandomInt(1,2,3,4)<2) {
            newMoveDirection = possibleDirections[Math.floor(Math.random()*possibleDirections.length)];
        } else newMoveDirection = Util.findDirectionForGhost(this, cakeman, this.tileMap);
        this.movingDirection = newMoveDirection;

        //  TileMap BFS
        // if((this.x % this.tileSize === 0) && (this.y % this.tileSize === 0) && this.id === 3) {
        //     let nextmove = this.tileMap.buildTree(this, cakeman);
        // }
    }
}

Ghost.prototype.loadGhostImage = function draw() {
    this.ghostImage = new Image();
    if(this.id === 3) {
        this.ghostImage.src = ("../images/redGhost.png");
    } else if(this.id === 4) {
        this.ghostImage.src = ("../images/blueGhost.png");
    } else if(this.id === 5) {
        this.ghostImage.src = ("../images/purpleGhost.png");
    } else if(this.id === 6) {
        this.ghostImage.src = ("../images/pinkGhost.png");
    }
}
module.exports = Ghost;