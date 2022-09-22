# JS Personal Project: Cake-Man Game

## Background
Cake-Man is a different version of Pac-Man which originally released at 1980. In my version, ghosts have same behaviour, around 50% of the time they directly chase Cakeman. If they cant move to the Cakeman direction, the ghosts check adjacent positions and select a random move. 

## Instructions to Play Cake-Man
The player control cakeman using only arrow keys: UP, DOWN, LEFT, RIGHT. The player should eat all the dots while avoiding ghosts. There is a fixed timer on the upper right, 120 seconds to finish. Timer starts when the player push any controlling buttons. After the game end, the page refreshes itself after 7 seconds and back to start. 

![](cakemanGameScreen.png)

## Technologies, Libraries, APIs
The Cake-Man Game is a Single Page Application written in JavaScript using Webpack for bundling and Canvas 2D for drawing. 

## Implementation
Index.js is the main entry for the application. After the page loads, it creates a new game object passing canvas element as an input and then triggers Game#start method. 

Game.js is the main part of the code as Game class has a full picture of the game situation. Game#start function creates tileMap, cakeman, ghosts(red, yellow, purple and pink) objects. And it triggers Game#gameIter method using setInterval. 

Game#gameIter method triggers tileMap, ghosts and cakeman drawing functions in TileMap. 



