const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

const DEFAULT = {
    COLOR: "#FFFF00",
    RADIUS: 15
}

function Cakeman(options) {
    options = options || {};
    options.pos = options.pos || [100, 100];
    options.vel = 0;
    options.radius = DEFAULT.RADIUS;
    options.color = DEFAULT.COLOR;

    MovingObject.call(this, options);
}

Util.inherits(Cakeman, MovingObject);

module.exports = Cakeman;


