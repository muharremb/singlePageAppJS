const MovingDirection = require("./movingDirections.js");

const Util = {

    dist(pos1, pos2) {
        return Math.sqrt(
          Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    },    
    findDirectionForGhost(ghost, cakeman, tileMap) {
        let absX = Math.abs(ghost.x - cakeman.x);
        let absY = Math.abs(ghost.y - cakeman.y);
        let currentD = ghost.MovingDirection;

        // var item = items[Math.floor(Math.random()*items.length)];

        if(absX >= absY) {
            // should be left or right
            if(ghost.x >= cakeman.x) {
                // should be left
                if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.left) && MovingDirection.left !== 5 - currentD) return MovingDirection.left;
                else if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.up) && MovingDirection.up !== 5 - currentD) return MovingDirection.up;
                else return MovingDirection.down;
            } else {
                // should be right
                if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.right) && MovingDirection.right !== 5 - currentD) return MovingDirection.right;
                else if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.up) && MovingDirection.up !== 5 - currentD) return MovingDirection.up;
                else return MovingDirection.down;
            }
        }else {
            // should be up or down
            if(ghost.y >= cakeman.x) {
                // should be up
                if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.up) && MovingDirection.up !== 5 - currentD) return MovingDirection.up;
                else if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.right) && MovingDirection.right !== 5 - currentD) return MovingDirection.right;
                else return MovingDirection.left;
            } else {
                // should be down
                if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.down) && MovingDirection.down !== 5 - currentD) return MovingDirection.down;
                else if(!tileMap.didCollidedWithEnv(ghost.x, ghost.y, MovingDirection.right) && MovingDirection.right !== 5 - currentD) return MovingDirection.right;
                else return MovingDirection.left;
            }
        }            
    }
}

module.exports = Util;