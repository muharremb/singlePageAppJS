const Util = require("./utils.js");
const Cakeman = require("./cakeman.js");
const Ghost = require("./ghost.js");

function Game() {
    this.cakeman = [];
    this.ghosts = [];

    this.addGhosts();
    this.addCakeman();
}

Game.DIM_X = 620;
Game.DIM_Y = 560;
Game.NUM_GHOST = 4;

Game.prototype.add = function add(object) {
    if (object instanceof Ghost) {
      this.ghosts.push(object);
    } else if (object instanceof Cakeman) {
      this.cakeman.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  };

Game.prototype.addGhosts = function addGhosts() {
    for (let i = 0; i < Game.NUM_GHOST; i++) {
      this.add(new Ghost({ pos: this.randomPosition() }));
    }
};

Game.prototype.addCakeman = function addCakeman() {
    this.add(new Cakeman());
};

Game.prototype.allObjects = function allObjects() {
    return [].concat(this.ghosts, this.cakeman);
};

Game.prototype.randomPosition = function randomPosition() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
};

Game.prototype.draw = function draw(ctx) {

    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
        object.draw(ctx);
    });
};

Game.prototype.moveObjects = function (delta) {
    if(!delta) delta = 50;
    this.allObjects().forEach((object) => {
        object.move(delta);
    });
}

module.exports = Game;