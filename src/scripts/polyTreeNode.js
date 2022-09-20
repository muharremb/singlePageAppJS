const TileMap = require("./TileMap");

function PolyTreeNode (options) {
    this.value = options.position.join('') ;
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