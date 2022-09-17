const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Cakeman(options) { 
    options = options || {};
    options.pos = [100, 100];
    options.vel = options.vel || [0, 0];
    options.radius = 15;
    options.color = "#FFFF00";

    MovingObject.call(this, options);
}

Util.inherits(Cakeman, MovingObject);

module.exports = Cakeman;


