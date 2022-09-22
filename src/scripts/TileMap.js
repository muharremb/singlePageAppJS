const Cakeman = require("./cakeman.js");
const Ghost = require("./ghost.js");
const PolyTreeNode = require("./polyTreeNode.js");

const MovingDirection = require("./movingDirections.js");

function TileMap (tileSize) {

    // I used MDN Web Documents Square TileMaps Statis Implementation. 
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps

    this.tileSize = tileSize

    this.cakeman = new Image();
    this.cakeman.src = "../images/cakemanClosed.png";

    this.wall = new Image();
    this.wall.src = "/images/wall.png";

    this.dot = new Image();
    this.dot.src = "../images/dot.png";

    // 1 wall
    // 0 dots
    // 2 empty black
    // 7 cakeman
    // 3 ghost red
    // 4 ghost blue
    // 5 ghost purple
    // 6 ghost pink
    // 8 score
    
    this.tiles = [        
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,3,0,0,0,1],
        [1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1],
        [1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],
        [1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],
        [1,1,1,1,0,1,2,2,2,2,2,2,2,2,1,0,1,1,1,1],
        [1,1,1,1,0,1,2,1,1,1,1,1,1,2,1,0,1,1,1,1],
        [2,2,7,2,0,2,2,1,1,1,1,1,1,2,2,0,2,2,2,2],
        [1,1,1,1,0,1,2,1,1,1,1,1,1,2,1,0,1,1,1,1],
        [1,1,1,1,0,1,2,2,2,2,2,2,2,2,1,0,1,1,1,1],
        [1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],
        [1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],
        [1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1],
        [1,0,0,0,6,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    // this.tiles = [        
    //     [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    //     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    //     [1,2,2,2,4,2,2,2,2,2,2,2,2,2,2,3,2,2,2,1],
    //     [1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1],
    //     [1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1],
    //     [1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1],
    //     [1,1,1,1,2,1,2,2,2,2,2,2,2,2,1,2,1,1,1,1],
    //     [1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1],
    //     [2,2,7,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2],
    //     [1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1],
    //     [1,1,1,1,2,1,2,2,2,2,2,2,2,2,1,2,1,1,1,1],
    //     [1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1],
    //     [1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1],
    //     [1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1],
    //     [1,2,2,2,6,2,2,2,2,2,2,2,2,2,2,5,2,2,2,1],
    //     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    // ];

    this.ghostNode = null;
}

TileMap.prototype.setCanvas = function setCanvas(canvas) {
    canvas.width = this.tiles[0].length * this.tileSize;
    canvas.height = this.tiles.length * this.tileSize;
}

TileMap.prototype.draw = function(ctx, cakeman) {
    for(let row=0; row<this.tiles.length; row++) {
        for(let column=0; column<this.tiles[row].length; column++) {
            let tile = this.tiles[row][column];
            if(tile === 1) this.drawWall(ctx, column, row, this.tileSize);
            else if(tile === 0) this.drawDot(ctx, column, row, this.tileSize);
            else if(tile === 2){
                this.drawEmpty(ctx, column, row, this.tileSize);
            }
        }
    }

    ctx.clearRect(0, 0, 480, 24);
    ctx.font = '16px Comic Sans MS';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${cakeman.score}`, 30, 18);
    ctx.fillText(`Countdown: ${cakeman.timeLeft}`, 360, 18);

    // if(!cakeman.hasMoved) {
    //     ctx.font = '16px Comic Sans MS';
    //     ctx.fillStyle = 'white';
    //     ctx.fillText('xxxxxxxxx');
    // }

    // if(isLost) {
    //     console.log(isLost);
    //     // this.gameOverScreen(ctx, cakeman);
    //     ctx.font = '20px Comic Sans MS';
    //     ctx.fillStyle = 'white';
    //     ctx.fillText('Game Over', 185, 296);
    //     ctx.fillText(`Score: ${cakeman.score}`, 196, 320);
    // }

    // if(isWin) {
    //     this.winScreen(ctx, cakeman);
    // }
    // ctx.clearRect(180, 275, 110, 50)
    // ctx.font = '20px Comic Sans MS';
    // ctx.fillStyle = 'white';
    // ctx.fillText('Game Over', 185, 296);
    // ctx.fillText('Score: ', 196, 320)
}

TileMap.prototype.drawDot = function(ctx, column, row, size) {
    ctx.drawImage(
        this.dot, 
        column * this.tileSize,
        row * this.tileSize,
        size,
        size
    );
};

TileMap.prototype.drawWall = function(ctx, column, row, size) {
    ctx.drawImage(
        this.wall, 
        column * this.tileSize,
        row * this.tileSize,
        size,
        size
    );
};

TileMap.prototype.drawEmpty = function(ctx, column, row, size) {
    ctx.fillStyle = "black";
    ctx.fillRect(column * this.tileSize, row*this.tileSize, size, size);
}

TileMap.prototype.getCakeman = function() {
    for(let row=0; row<this.tiles.length; row++) {
        for(let column=0; column<this.tiles[row].length; column++) {
            let tile = this.tiles[row][column];
            if(tile === 7) {
                this.tiles[row][column] = 0;
                let cakeMan = new Cakeman({
                    position: [column*this.tileSize, row*this.tileSize],
                    size: this.tileSize,
                    tileMap: this
                    }
                );
                return cakeMan;
            }
        }
    }
}

TileMap.prototype.getGhost = function() {
    for(let row=0; row<this.tiles.length; row++) {
        for(let column=0; column<this.tiles[row].length; column++) {
            let tile = this.tiles[row][column];
            if(tile === 3) {
                this.tiles[row][column] = 0;
                let ghost = new Ghost({
                    position: [column*this.tileSize, row*this.tileSize],
                    size: this.tileSize,
                    tileMap: this,
                    id: 3
                    }
                );
                this.ghostNode = new PolyTreeNode({position: [row, column]});
                return ghost;    
            } else if(tile === 4) {
                this.tiles[row][column] = 0;
                let ghost = new Ghost({
                    position: [column*this.tileSize, row*this.tileSize],
                    size: this.tileSize,
                    tileMap: this,
                    id: 4
                    }
                );
            return ghost;
            } else if(tile === 5) {
                this.tiles[row][column] = 0;
                let ghost = new Ghost({
                    position: [column*this.tileSize, row*this.tileSize],
                    size: this.tileSize,
                    tileMap: this,
                    id: 5
                    }
                );
            return ghost;
            } else if(tile === 6) {
                this.tiles[row][column] = 0;
                let ghost = new Ghost({
                    position: [column*this.tileSize, row*this.tileSize],
                    size: this.tileSize,
                    tileMap: this,
                    id: 6
                    }
                );
            return ghost;
            } 
        }
    }
}

TileMap.prototype.didCollidedWithEnv = function(x, y, direction) {
    if(typeof direction === null) return;
    if(Number.isInteger(x/this.tileSize) && Number.isInteger(y/this.tileSize)) {
        let column = 0;
        let row = 0;
        let nextColumn = 0;
        let nextRow = 0;

        switch(direction) {
            case MovingDirection.right:
                nextColumn = x + this.tileSize;
                column = nextColumn / this.tileSize;
                row = y / this.tileSize;
                break;
            case MovingDirection.left:
                nextColumn = x - this.tileSize;
                column = nextColumn / this.tileSize;
                row = y / this.tileSize;
                break;

            case MovingDirection.up:
                nextRow = y - this.tileSize;
                row = nextRow / this.tileSize;
                column = x / this.tileSize;
                break;
            case MovingDirection.down:
                nextRow = y + this.tileSize;
                row = nextRow / this.tileSize;
                column = x / this.tileSize;
                break;
        }
        const tile = this.tiles[row][column];
        if(tile === 1) return true;
    }
    return false;
}

TileMap.prototype.removeDot = function removeDot(x, y) {
    const row = y / this.tileSize;
    const column = x / this.tileSize;

    if(Number.isInteger(row) && Number.isInteger(column)) {
        if(this.tiles[row][column] === 0) {
            this.tiles[row][column] = 2;
            return true;
        }
    }
    return false; 
}

TileMap.prototype.buildTree = function buildTree(ghost, cakeman) {
    let i=0;
    let ghostX = Math.floor(ghost.x/24);
    let ghostY = Math.floor(ghost.y/24);
    let inputGhostNode = new PolyTreeNode({position: [ghostX, ghostY]});
    let cakemanX = Math.floor(cakeman.x/24);
    let cakemanY = Math.floor(cakeman.y/24);

    let queue = []
    queue.push(inputGhostNode);

    let isFound = false;
    let visitedNodes = [];

    while(queue.length && !isFound) {

        let currentNode = queue.shift();

        let x = currentNode.x;
        let y = currentNode.y;
        // console.log(`x: ${x} vs y: ${y}`);
        // return;
        
        if(this.tiles[x+1][y] !== 1) {
            var child = new PolyTreeNode({position: [x+1, y]});
            if(!visitedNodes.includes(child)) {
                queue.push(child);
                visitedNodes.push(child);
                currentNode.addChild(child);
                child.assignParent(currentNode);
                if((x+1) === cakemanX && y === cakemanY) {
                    isFound = true;
                    break;
                }
            }
        }if(this.tiles[x][y+1] !== 1) {
            var child = new PolyTreeNode({position: [x, y+1]});
            if(!visitedNodes.includes(child)) {
                queue.push(child);
                visitedNodes.push(child);
                currentNode.addChild(child);
                child.assignParent(currentNode);
                if((x) === cakemanX && (y+1) === cakemanY) {
                    isFound = true;
                    break;
                }
            }
        }if (this.tiles[x-1][y] !== 1) {
            var child = new PolyTreeNode({position: [x-1, y]});
            if(!visitedNodes.includes(child)) {
                queue.push(child);
                visitedNodes.push(child);
                currentNode.addChild(child);
                child.assignParent(currentNode);
                if((x-1) === cakemanX && y === cakemanY) {
                    isFound = true;
                    break;
                }
            }
        }
        if (this.tiles[x][y-1] !== 1) {
            var child = new PolyTreeNode({position: [x, y-1]});
            if(!visitedNodes.includes(child)) {
                queue.push(child);
                visitedNodes.push(child);
                currentNode.addChild(child);
                child.assignParent(currentNode);
                if((x) === cakemanX && (y-1) === cakemanY) {
                    isFound = true;
                    break;
                }
            }
        }
        i+=1
        if(i === 100) {
            // console.log(queue);
            return 777;
        }
    }
    let cakemanNode = visitedNodes[visitedNodes.length-1];
    let backToGhostArr = [cakemanNode];
    // console.log(cakemanNode.parent);
    // return;
    var node = cakemanNode;

    while(node.parent !== inputGhostNode) {
        backToGhostArr.push(node);
        node = node.parent;
    }
    let nextMoveNode = backToGhostArr[backToGhostArr.length-1];
    if(nextMoveNode.x === inputGhostNode.x) {
        if(nextMoveNode.y >= inputGhostNode.y) {
            return MovingDirection.down;
        } else return MovingDirection.up;
    }

    if(nextMoveNode.y === inputGhostNode.y) {
        if(nextMoveNode.x >= inputGhostNode.x) {
            return MovingDirection.right;
        } else return MovingDirection.left;
    }
}

TileMap.prototype.gameOverScreen = function(ctx, cakeman) {
    // ctx.clearRect(180, 275, 110, 50);
    ctx.font = '20px Comic Sans MS';
    ctx.fillStyle = 'white';
    ctx.fillText('Game Over', 185, 296);
    ctx.fillText(`Score: ${cakeman.score}`, 196, 320);
    // return true;
}

TileMap.prototype.winScreen = function(ctx, cakeman) {
    // ctx.clearRect(180, 275, 110, 50);
    ctx.font = '20px Comic Sans MS';
    ctx.fillStyle = 'white';
    ctx.fillText('You win!', 185, 296);
    ctx.fillText(`Score: ${cakeman.score}`, 196, 320);
    // return true;
}


module.exports = TileMap;

