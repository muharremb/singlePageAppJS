function TileMap () {

    // I used MDN Web Documents Square TileMaps Statis Implementation. 
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
    // I designed 28 x 36 tiles Map, each tile 32x32 pixels

    this.cols = 28;
    this.rows = 10;
    this.tsize = 64;
    this.tsizeDim = 16;
    
    this.tiles = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,
        2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,
        2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,
        2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,

        2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,

        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
    ];
}

const FILL_COLORS = {
    1: "black",
    2: "blue"
}

TileMap.prototype.getTile = function(col, row) {
    return this.tiles[row * this.cols + col];
}

TileMap.prototype.render = function(ctx) {
    for(let c=0; c<this.cols;c++) {
        for(let r=0; r<this.rows; r++) {
            let tile = this.getTile(c,r);
            if(tile !== 0) {
                console.log(this);
                ctx.fillStyle=FILL_COLORS[tile];
                ctx.fillRect(c*this.tsizeDim, r*this.tsizeDim, this.tsizeDim, this.tsizeDim);
            }
        }
    }
}

module.exports = TileMap;

