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
      this.add(new Ghost({ game: this, pos: this.randomPosition() }));
    }
};

Game.prototype.addCakeman = function addCakeman() {
    this.add(new Cakeman({game: this, pos: [120, 120]}));
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
    // console.log(this.allObjects())
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    console.log(ctx);
    this.allObjects().forEach((object) => {
        object.draw(ctx);
    });
};

module.exports = Game;