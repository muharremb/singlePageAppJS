const Cakeman = require("./scripts/cakeman.js");
const MovingObject = require("./scripts/moving_object.js");

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d");

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 10,
        color: "#000000"
    });

    mo.draw(ctx);
    // console.log(mo);
    const cake = new Cakeman({
    })
    cake.draw(ctx);
})

window.MovingObject = MovingObject;