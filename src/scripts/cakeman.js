const MovingDirection = require("./movingDirections.js");

function Cakeman(options) { 
    this.x = options.position[0];
    this.y = options.position[1];
    this.tileSize = options.size;
    this.velocity = 2;
    this.tileMap = options.tileMap;

    this.currentMovingDirection = null;
    this.requestedMovingDirection = null;

    this.animateTimer = null;
    this.animateDefault = 10;

    this.rotation = {
        right: 0,
        down: 1,
        left: 2,
        up: 3
    }
    this.cakemanRotation = this.rotation.right;

    this.hasMoved = false;

    this.score = 0;
    this.timeLeft = 10;

    document.addEventListener("keydown", this.keydown.bind(this));
    
    this.loadCakemanImages();
}

Cakeman.prototype.draw = function(ctx) {
    this.move();
    this.animate();
    this.removeDot();
    // I used Tutorial on how to rotate a single image
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
    let size = this.tileSize / 2;
    ctx.save();
    ctx.translate(this.x + size, this.y + size);
    ctx.rotate((this.cakemanRotation * 90 * Math.PI) / 180);
    ctx.drawImage(
        this.cakemanImages[this.cakemanImageIndex],
        -size,
        -size,
        this.tileSize,
        this.tileSize
    );
    ctx.restore();

    // ctx.drawImage(
    //     this.cakemanImages[this.cakemanImageIndex],
    //     this.x,
    //     this.y,
    //     this.tileSize,
    //     this.tileSize
    // )
};

Cakeman.prototype.timer = function timer() {
    let countdown = setInterval((ele) => {
        if(this.timeLeft < 0) clearInterval(countdown);
            this.timeLeft -=1;
        }, 1000
    )
}

Cakeman.prototype.move = function(){
    if(this.currentMovingDirection !== this.requestedMovingDirection) {
        if(Number.isInteger(this.x/this.tileSize) && Number.isInteger(this.y/this.tileSize)) {
            if(!this.tileMap.didCollidedWithEnv(
                this.x,
                this.y,
                this.requestedMovingDirection
            )) this.currentMovingDirection = this.requestedMovingDirection;
        }
    }

    if(this.tileMap.didCollidedWithEnv(this.x, this.y, this.currentMovingDirection)) {
        this.animateTimer = null;
        this.cakemanImageIndex = 0;
        return;
    } else if(this.currentMovingDirection && !this.animateTimer) {
        this.animateTimer = this.animateDefault;
    }
    
    switch(this.currentMovingDirection) {
        case MovingDirection.up:
        this.y -= this.velocity;
        this.cakemanRotation = this.rotation.up;
        break;
        
        case MovingDirection.down:
        this.y += this.velocity;
        this.cakemanRotation = this.rotation.down;
        break; 
        
        case MovingDirection.left:
        this.x -= this.velocity;
        if(this.x < 12) this.x = 23 * this.tileMap.tiles[0].length;
        this.cakemanRotation = this.rotation.left;
        break; 

        case MovingDirection.right:
        this.x += this.velocity;
        if(this.x >= this.tileMap.tiles[0].length * 23) this.x = 0;
        this.cakemanRotation = this.rotation.right;
        break; 
    }
};

Cakeman.prototype.loadCakemanImages = function() {
    const cakemanImg1 = new Image();
    cakemanImg1.src = "../images/cakemanClosed.png";

    const cakemanImg2 = new Image();
    cakemanImg2.src = "../images/cakemanHalfOpen.png";

    const cakemanImg3 = new Image();
    cakemanImg3.src = "../images/cakemanFullOpen.png";

    const cakemanImg4 = new Image();
    cakemanImg4.src = "../images/cakemanHalfOpen.png";

    this.cakemanImages = [
        cakemanImg1,
        cakemanImg2,
        cakemanImg3,
        cakemanImg4
    ];

    this.cakemanImageIndex = 0;
};

Cakeman.prototype.keydown = function (event) {
    const arr = [38, 40, 37, 39];
    if(arr.includes(event.keyCode)) {
        this.hasMoved = true;
    }

    // up key
    if(event.keyCode === 38) {
        if(this.currentMovingDirection === MovingDirection.down) {
            this.currentMovingDirection = MovingDirection.up;
        }
        this.requestedMovingDirection = MovingDirection.up;
    }
    // down
    if(event.keyCode === 40) {
        if(this.currentMovingDirection === MovingDirection.up) {
            this.currentMovingDirection = MovingDirection.down;
        }
        this.requestedMovingDirection = MovingDirection.down;
    }
    // 37 left
    if(event.keyCode === 37) {
        if(this.currentMovingDirection === MovingDirection.right) {
            this.currentMovingDirection = MovingDirection.left;
        }
        this.requestedMovingDirection = MovingDirection.left;
    }
    // 39 right
    if(event.keyCode === 39) {
        if(this.currentMovingDirection === MovingDirection.left) {
            this.currentMovingDirection = MovingDirection.right;
        }
        this.requestedMovingDirection = MovingDirection.right;
    }
};

Cakeman.prototype.animate = function animate() {
    if(!this.animateTimer) {
        return;
    }
    this.animateTimer -=1;
    if(this.animateTimer === 0) {
        this.animateTimer = this.animateDefault;
        this.cakemanImageIndex += 1;
        if(this.cakemanImageIndex === this.cakemanImages.length) {
            this.cakemanImageIndex = 0;
        }
    }
};

Cakeman.prototype.removeDot = function removeDot() {
    if(this.tileMap.removeDot(this.x, this.y)) {
        this.score += 1;
    }
}

module.exports = Cakeman;


