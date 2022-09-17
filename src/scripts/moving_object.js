const Game = require("./game.js");
const Util = require("./utils.js");

function MovingObject(options) {

    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);
    ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
};

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
};

// MovingObject.prototype.collideWith = function collideWith(otherObject) {
//     // default do nothing
//     Game.prototype.remove(this);
//     Game.prototype.remove(otherObject);
// };

module.exports = MovingObject;