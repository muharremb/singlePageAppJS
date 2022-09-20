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
    this.wall.src = "../images/wall.png";

    this.dot = new Image();
    this.dot.src = "../images/dot.png";

    // 1 wall
    // 0 dots
    // 2 empty black
    // 7 cakeman
    // 3 ghost red
    // 4 ghost blue
    
    this.tiles = [        
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,7,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1],
        [1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],
        [1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],
        [1,1,1,1,0,1,2,2,3,2,2,4,2,2,1,0,1,1,1,1],
        [1,1,1,1,0,1,2,1,1,1,1,1,1,2,1,0,1,1,1,1],
        [2,2,2,2,0,2,2,1,1,1,1,1,1,2,2,0,2,2,2,2],
        [1,1,1,1,0,1,2,1,1,1,1,1,1,2,1,0,1,1,1,1],
        [1,1,1,1,0,1,2,2,2,2,2,2,2,2,1,0,1,1,1,1],
        [1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],
        [1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],
        [1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    this.ghostNode = null;
    this.packmanNode = null;
}

TileMap.prototype.setCanvas = function setCanvas(canvas) {
    canvas.width = this.tiles[0].length * this.tileSize;
    canvas.height = this.tiles.length * this.tileSize;
}

TileMap.prototype.draw = function(ctx) {
    for(let row=0; row<this.tiles.length; row++) {
        for(let column=0; column<this.tiles[row].length; column++) {
            let tile = this.tiles[row][column];
            if(tile === 1) this.drawWall(ctx, column, row, this.tileSize);
            else if(tile === 0) this.drawDot(ctx, column, row, this.tileSize);
            else {
                this.drawEmpty(ctx, column, row, this.tileSize);
            }

            // ctx.strokeStyle = "yellow";
            // ctx.strokeRect(
            //     column*this.tileSize,
            //     row * this.tileSize,
            //     this.tileSize,
            //     this.tileSize
            // )
        }
    }
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

TileMap.prototype.buildTree = function() {
    let ghostPosition = this.ghostNode.value.split('');

    let x = ghostPosition[0];
    let y = ghostPosition[1];

    for(let i=0; i<4; i++) {
        if(this.tiles[x+1][y] !== 1) {
            let child = new PolyTreeNode({position: [x+1, y]});
            this.ghostNode.addChild(child);
            child.assignParent(ghostNode);
        } else if(this.tiles[x][y+1] !== 1) {
            let child = new PolyTreeNode({position: [x, y+1]});
            this.ghostNode.addChild(child);
            child.assignParent(ghostNode);
        } else if (this.tiles[x-1][y] !== 1) {
            let child = new PolyTreeNode({position: [x-1, y]});
            this.ghostNode.addChild(child);
            child.assignParent(ghostNode);
        }
        else if (this.tiles[x][y-1] !== 1) {
            let child = new PolyTreeNode({position: [x, y-1]});
            this.ghostNode.addChild(child);
            child.assignParent(ghostNode);
        }
    }
}

module.exports = TileMap;

