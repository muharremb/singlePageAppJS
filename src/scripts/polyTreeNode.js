const TileMap = require("./TileMap");

function PolyTreeNode (options) {
    this.x = options.position[0] ;
    this.y = options.position[1] ;
    this.parent = null;
    this.children = [];
}

PolyTreeNode.prototype.addChild = function(child)  {
    this.children.push(child);
}

PolyTreeNode.prototype.assignParent = function(parent) {
    this.parent = parent;
}

module.exports = PolyTreeNode;