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
};

Game.prototype.wrap = function wrap(pos) {
    return [
      Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
    ];
};

// Game.prototype.checkCollisions = function checkCollisions() {
//     const allObjects = this.allObjects();
//     for (let i = 0; i < allObjects.length; i++) {
//       for (let j = 0; j < allObjects.length; j++) {
//         const obj1 = allObjects[i];
//         const obj2 = allObjects[j];
  
//         if (obj1.isCollidedWith(obj2)) {
//           const collision = obj1.collideWith(obj2);
//           if (collision) return;
//         }
//       }
//     }
// };

// Game.prototype.step = function step(delta) {
//     this.moveObjects(delta);
//     this.checkCollisions();
// };

Game.prototype.remove = function remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(object), 1);
    } else if (object instanceof Ship) {
      this.ships.splice(this.ships.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
};


module.exports = Game;