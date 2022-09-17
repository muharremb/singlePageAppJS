const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

const DEFAULT = {
    COLOR: "#FF0000",
    RADIUS: 15, 
    SPEED: 5,
}

function Ghost(options) {
    options = options || {};
    options.pos = options.pos || [300, 300];
    options.vel = 0;
    options.radius = DEFAULT.RADIUS;
    options.color = DEFAULT.COLOR;
    options.vel = options.vel || Util.randomVec(DEFAULT.SPEED);

    MovingObject.call(this, options);
}

Util.inherits(Ghost, MovingObject);
module.exports = Ghost;