const MovingDirection = require("./movingDirections.js");

const Util = {
    inherits(childClass, parentClass) {
        function Surrogate() {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
      // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    dist(pos1, pos2) {
        return Math.sqrt(
          Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    },
    
    findDirectionForGhost(ghost, cakeman) {
        let absX = Math.abs(ghost.x - cakeman.x);
        let absY = Math.abs(ghost.y - cakeman.y);
        if(absX >= absY) {
            // x direction move, left or rigth
            return ghost.x < cakeman.x ? MovingDirection.right : MovingDirection.left;  
        } else {
            // up or down move
            return ghost.y < cakeman.y ? MovingDirection.down : MovingDirection.up;
        }
    }
}

module.exports = Util;