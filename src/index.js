const Heading = require('./scripts/heading')

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const heading = new Heading("Hey programmers");
    console.log(root);
    root.innerHTML = heading.heading;
})