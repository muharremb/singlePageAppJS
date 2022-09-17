/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst GameView = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  const gameView = new GameView(game, ctx);\n  gameView.start(); // game.draw(ctx);\n});\nwindow.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFFQyxtQkFBTyxDQUFDLGdEQUFELENBQW5COztBQUNBLE1BQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQywwREFBRCxDQUF4Qjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFqQjtFQUNBRCxRQUFRLENBQUNFLEtBQVQsR0FBaUJQLElBQUksQ0FBQ1EsS0FBdEI7RUFDQUgsUUFBUSxDQUFDSSxNQUFULEdBQWtCVCxJQUFJLENBQUNVLEtBQXZCO0VBRUEsTUFBTUMsR0FBRyxHQUFHTixRQUFRLENBQUNPLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWjtFQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJYixJQUFKLEVBQWI7RUFFQSxNQUFNYyxRQUFRLEdBQUcsSUFBSVosUUFBSixDQUFhVyxJQUFiLEVBQW1CRixHQUFuQixDQUFqQjtFQUNBRyxRQUFRLENBQUNDLEtBQVQsR0FUZ0QsQ0FVaEQ7QUFFSCxDQVpEO0FBY0FDLE1BQU0sQ0FBQ2hCLElBQVAsR0FBY0EsSUFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2Nha2UtbWFuLW5lYXIteW91Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9cmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICAgIGNhbnZhc0VsLndpZHRoID0gR2FtZS5ESU1fWDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHYW1lLkRJTV9ZO1xuICAgIFxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBcbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpO1xuICAgIGdhbWVWaWV3LnN0YXJ0KCk7XG4gICAgLy8gZ2FtZS5kcmF3KGN0eCk7XG5cbn0pO1xuXG53aW5kb3cuR2FtZSA9IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiR2FtZVZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJESU1fWCIsImhlaWdodCIsIkRJTV9ZIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJnYW1lVmlldyIsInN0YXJ0Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/cakeman.js":
/*!********************************!*\
  !*** ./src/scripts/cakeman.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nfunction Cakeman(options) {\n  options = options || {};\n  options.pos = [100, 100];\n  options.vel = options.vel || [0, 0];\n  options.radius = 15;\n  options.color = \"#FFFF00\";\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Cakeman, MovingObject);\nmodule.exports = Cakeman;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYWtlbWFuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFlBQVksR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUE1Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsMENBQUQsQ0FBcEI7O0FBRUEsU0FBU0UsT0FBVCxDQUFpQkMsT0FBakIsRUFBMEI7RUFDdEJBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0VBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixHQUFjLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBZDtFQUNBRCxPQUFPLENBQUNFLEdBQVIsR0FBY0YsT0FBTyxDQUFDRSxHQUFSLElBQWUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE3QjtFQUNBRixPQUFPLENBQUNHLE1BQVIsR0FBaUIsRUFBakI7RUFDQUgsT0FBTyxDQUFDSSxLQUFSLEdBQWdCLFNBQWhCO0VBRUFSLFlBQVksQ0FBQ1MsSUFBYixDQUFrQixJQUFsQixFQUF3QkwsT0FBeEI7QUFDSDs7QUFFREYsSUFBSSxDQUFDUSxRQUFMLENBQWNQLE9BQWQsRUFBdUJILFlBQXZCO0FBRUFXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsT0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWtlLW1hbi1uZWFyLXlvdS8uL3NyYy9zY3JpcHRzL2Nha2VtYW4uanM/NjVmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb3ZpbmdPYmplY3QgPSByZXF1aXJlKFwiLi9tb3Zpbmdfb2JqZWN0LmpzXCIpO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBDYWtlbWFuKG9wdGlvbnMpIHsgXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5wb3MgPSBbMTAwLCAxMDBdO1xuICAgIG9wdGlvbnMudmVsID0gb3B0aW9ucy52ZWwgfHwgWzAsIDBdO1xuICAgIG9wdGlvbnMucmFkaXVzID0gMTU7XG4gICAgb3B0aW9ucy5jb2xvciA9IFwiI0ZGRkYwMFwiO1xuXG4gICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblV0aWwuaW5oZXJpdHMoQ2FrZW1hbiwgTW92aW5nT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWtlbWFuO1xuXG5cbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJyZXF1aXJlIiwiVXRpbCIsIkNha2VtYW4iLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJjYWxsIiwiaW5oZXJpdHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/cakeman.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst Cakeman = __webpack_require__(/*! ./cakeman.js */ \"./src/scripts/cakeman.js\");\n\nconst Ghost = __webpack_require__(/*! ./ghost.js */ \"./src/scripts/ghost.js\");\n\nfunction Game() {\n  this.cakeman = [];\n  this.ghosts = [];\n  this.addGhosts();\n  this.addCakeman();\n}\n\nGame.DIM_X = 620;\nGame.DIM_Y = 560;\nGame.NUM_GHOST = 4;\n\nGame.prototype.add = function add(object) {\n  if (object instanceof Ghost) {\n    this.ghosts.push(object);\n  } else if (object instanceof Cakeman) {\n    this.cakeman.push(object);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\nGame.prototype.addGhosts = function addGhosts() {\n  for (let i = 0; i < Game.NUM_GHOST; i++) {\n    this.add(new Ghost({\n      pos: this.randomPosition()\n    }));\n  }\n};\n\nGame.prototype.addCakeman = function addCakeman() {\n  this.add(new Cakeman());\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat(this.ghosts, this.cakeman);\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n  return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];\n};\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.allObjects().forEach(object => {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function (delta) {\n  if (!delta) delta = 50;\n  this.allObjects().forEach(object => {\n    object.move(delta);\n  });\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFWLEVBQWlCO0VBQzFDLElBQUcsQ0FBQ0EsS0FBSixFQUFXQSxLQUFLLEdBQUcsRUFBUjtFQUNYLEtBQUtYLFVBQUwsR0FBa0JTLE9BQWxCLENBQTJCZixNQUFELElBQVk7SUFDbENBLE1BQU0sQ0FBQ2tCLElBQVAsQ0FBWUQsS0FBWjtFQUNILENBRkQ7QUFHSCxDQUxEOztBQU9BRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI5QixJQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nha2UtbWFuLW5lYXIteW91Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcbmNvbnN0IENha2VtYW4gPSByZXF1aXJlKFwiLi9jYWtlbWFuLmpzXCIpO1xuY29uc3QgR2hvc3QgPSByZXF1aXJlKFwiLi9naG9zdC5qc1wiKTtcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgICB0aGlzLmNha2VtYW4gPSBbXTtcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuXG4gICAgdGhpcy5hZGRHaG9zdHMoKTtcbiAgICB0aGlzLmFkZENha2VtYW4oKTtcbn1cblxuR2FtZS5ESU1fWCA9IDYyMDtcbkdhbWUuRElNX1kgPSA1NjA7XG5HYW1lLk5VTV9HSE9TVCA9IDQ7XG5cbkdhbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgR2hvc3QpIHtcbiAgICAgIHRoaXMuZ2hvc3RzLnB1c2gob2JqZWN0KTtcbiAgICB9IGVsc2UgaWYgKG9iamVjdCBpbnN0YW5jZW9mIENha2VtYW4pIHtcbiAgICAgIHRoaXMuY2FrZW1hbi5wdXNoKG9iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZSBvZiBvYmplY3RcIik7XG4gICAgfVxuICB9O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRHaG9zdHMgPSBmdW5jdGlvbiBhZGRHaG9zdHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lLk5VTV9HSE9TVDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZChuZXcgR2hvc3QoeyBwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSB9KSk7XG4gICAgfVxufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ2FrZW1hbiA9IGZ1bmN0aW9uIGFkZENha2VtYW4oKSB7XG4gICAgdGhpcy5hZGQobmV3IENha2VtYW4oKSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hbGxPYmplY3RzID0gZnVuY3Rpb24gYWxsT2JqZWN0cygpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuZ2hvc3RzLCB0aGlzLmNha2VtYW4pO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmFuZG9tUG9zaXRpb24gPSBmdW5jdGlvbiByYW5kb21Qb3NpdGlvbigpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBHYW1lLkRJTV9YICogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgR2FtZS5ESU1fWSAqIE1hdGgucmFuZG9tKClcbiAgICBdO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoY3R4KSB7XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gICAgdGhpcy5hbGxPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgfSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5tb3ZlT2JqZWN0cyA9IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgIGlmKCFkZWx0YSkgZGVsdGEgPSA1MDtcbiAgICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgb2JqZWN0Lm1vdmUoZGVsdGEpO1xuICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwiQ2FrZW1hbiIsIkdob3N0IiwiR2FtZSIsImNha2VtYW4iLCJnaG9zdHMiLCJhZGRHaG9zdHMiLCJhZGRDYWtlbWFuIiwiRElNX1giLCJESU1fWSIsIk5VTV9HSE9TVCIsInByb3RvdHlwZSIsImFkZCIsIm9iamVjdCIsInB1c2giLCJFcnJvciIsImkiLCJwb3MiLCJyYW5kb21Qb3NpdGlvbiIsImFsbE9iamVjdHMiLCJjb25jYXQiLCJNYXRoIiwicmFuZG9tIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9yRWFjaCIsIm1vdmVPYmplY3RzIiwiZGVsdGEiLCJtb3ZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(module) {

eval("function GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  const cxtThis = this.ctx;\n  setInterval(this.game.moveObjects.bind(this.game), 1000);\n  setInterval(this.game.draw.bind(this.game), 1000, cxtThis);\n};\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJuYW1lcyI6WyJHYW1lVmlldyIsImdhbWUiLCJjdHgiLCJwcm90b3R5cGUiLCJzdGFydCIsImN4dFRoaXMiLCJzZXRJbnRlcnZhbCIsIm1vdmVPYmplY3RzIiwiYmluZCIsImRyYXciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWtlLW1hbi1uZWFyLXlvdS8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEdhbWVWaWV3KGdhbWUsIGN0eCkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5jdHggPSBjdHg7XG59XG5cbkdhbWVWaWV3LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGN4dFRoaXMgPSB0aGlzLmN0eDtcbiAgICBcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmdhbWUubW92ZU9iamVjdHMuYmluZCh0aGlzLmdhbWUpLCAxMDAwKTtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmdhbWUuZHJhdy5iaW5kKHRoaXMuZ2FtZSksIDEwMDAsIGN4dFRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLEdBQXhCLEVBQTZCO0VBQ3pCLEtBQUtELElBQUwsR0FBWUEsSUFBWjtFQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVERixRQUFRLENBQUNHLFNBQVQsQ0FBbUJDLEtBQW5CLEdBQTJCLFlBQVc7RUFDbEMsTUFBTUMsT0FBTyxHQUFHLEtBQUtILEdBQXJCO0VBRUFJLFdBQVcsQ0FBQyxLQUFLTCxJQUFMLENBQVVNLFdBQVYsQ0FBc0JDLElBQXRCLENBQTJCLEtBQUtQLElBQWhDLENBQUQsRUFBd0MsSUFBeEMsQ0FBWDtFQUNBSyxXQUFXLENBQUMsS0FBS0wsSUFBTCxDQUFVUSxJQUFWLENBQWVELElBQWYsQ0FBb0IsS0FBS1AsSUFBekIsQ0FBRCxFQUFpQyxJQUFqQyxFQUF1Q0ksT0FBdkMsQ0FBWDtBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsUUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/ghost.js":
/*!******************************!*\
  !*** ./src/scripts/ghost.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst DEFAULT = {\n  COLOR: \"#FF0000\",\n  RADIUS: 15,\n  SPEED: 15\n};\n\nfunction Ghost(options) {\n  options = options || {};\n  options.pos = options.pos || [300, 300];\n  options.vel = 0;\n  options.radius = DEFAULT.RADIUS;\n  options.color = DEFAULT.COLOR;\n  options.vel = options.vel || Util.randomVec(DEFAULT.SPEED);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Ghost, MovingObject);\nmodule.exports = Ghost;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxZQUFZLEdBQUdDLG1CQUFPLENBQUMsMERBQUQsQ0FBNUI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLDBDQUFELENBQXBCOztBQUVBLE1BQU1FLE9BQU8sR0FBRztFQUNaQyxLQUFLLEVBQUUsU0FESztFQUVaQyxNQUFNLEVBQUUsRUFGSTtFQUdaQyxLQUFLLEVBQUU7QUFISyxDQUFoQjs7QUFNQSxTQUFTQyxLQUFULENBQWVDLE9BQWYsRUFBd0I7RUFDcEJBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0VBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixHQUFjRCxPQUFPLENBQUNDLEdBQVIsSUFBZSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTdCO0VBQ0FELE9BQU8sQ0FBQ0UsR0FBUixHQUFjLENBQWQ7RUFDQUYsT0FBTyxDQUFDRyxNQUFSLEdBQWlCUixPQUFPLENBQUNFLE1BQXpCO0VBQ0FHLE9BQU8sQ0FBQ0ksS0FBUixHQUFnQlQsT0FBTyxDQUFDQyxLQUF4QjtFQUNBSSxPQUFPLENBQUNFLEdBQVIsR0FBY0YsT0FBTyxDQUFDRSxHQUFSLElBQWVSLElBQUksQ0FBQ1csU0FBTCxDQUFlVixPQUFPLENBQUNHLEtBQXZCLENBQTdCO0VBRUFOLFlBQVksQ0FBQ2MsSUFBYixDQUFrQixJQUFsQixFQUF3Qk4sT0FBeEI7QUFDSDs7QUFFRE4sSUFBSSxDQUFDYSxRQUFMLENBQWNSLEtBQWQsRUFBcUJQLFlBQXJCO0FBQ0FnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJWLEtBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FrZS1tYW4tbmVhci15b3UvLi9zcmMvc2NyaXB0cy9naG9zdC5qcz81Y2NlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL21vdmluZ19vYmplY3QuanNcIik7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gICAgQ09MT1I6IFwiI0ZGMDAwMFwiLFxuICAgIFJBRElVUzogMTUsIFxuICAgIFNQRUVEOiAxNSxcbn1cblxuZnVuY3Rpb24gR2hvc3Qob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMucG9zID0gb3B0aW9ucy5wb3MgfHwgWzMwMCwgMzAwXTtcbiAgICBvcHRpb25zLnZlbCA9IDA7XG4gICAgb3B0aW9ucy5yYWRpdXMgPSBERUZBVUxULlJBRElVUztcbiAgICBvcHRpb25zLmNvbG9yID0gREVGQVVMVC5DT0xPUjtcbiAgICBvcHRpb25zLnZlbCA9IG9wdGlvbnMudmVsIHx8IFV0aWwucmFuZG9tVmVjKERFRkFVTFQuU1BFRUQpO1xuXG4gICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblV0aWwuaW5oZXJpdHMoR2hvc3QsIE1vdmluZ09iamVjdCk7XG5tb2R1bGUuZXhwb3J0cyA9IEdob3N0OyJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJyZXF1aXJlIiwiVXRpbCIsIkRFRkFVTFQiLCJDT0xPUiIsIlJBRElVUyIsIlNQRUVEIiwiR2hvc3QiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/ghost.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function (ctx) {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\n\nmodule.exports = MovingObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUFwQjs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxPQUF0QixFQUErQjtFQUUzQixLQUFLQyxHQUFMLEdBQVdELE9BQU8sQ0FBQ0MsR0FBbkI7RUFDQSxLQUFLQyxHQUFMLEdBQVdGLE9BQU8sQ0FBQ0UsR0FBbkI7RUFDQSxLQUFLQyxNQUFMLEdBQWNILE9BQU8sQ0FBQ0csTUFBdEI7RUFDQSxLQUFLQyxLQUFMLEdBQWFKLE9BQU8sQ0FBQ0ksS0FBckI7RUFDQSxLQUFLQyxJQUFMLEdBQVlMLE9BQU8sQ0FBQ0ssSUFBcEI7QUFDSDs7QUFFRE4sWUFBWSxDQUFDTyxTQUFiLENBQXVCQyxJQUF2QixHQUE4QixVQUFTQyxHQUFULEVBQWM7RUFDeENBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixLQUFLTCxLQUFyQjtFQUVBSSxHQUFHLENBQUNFLFNBQUo7RUFDQUYsR0FBRyxDQUFDRyxHQUFKLENBQVEsS0FBS1YsR0FBTCxDQUFTLENBQVQsQ0FBUixFQUFxQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFyQixFQUFrQyxLQUFLRSxNQUF2QyxFQUErQyxDQUEvQyxFQUFrRCxJQUFFUyxJQUFJLENBQUNDLEVBQXpELEVBQTZELEtBQTdEO0VBQ0FMLEdBQUcsQ0FBQ00sSUFBSjtBQUNILENBTkQ7O0FBUUFmLFlBQVksQ0FBQ08sU0FBYixDQUF1QlMsSUFBdkIsR0FBOEIsVUFBU1AsR0FBVCxFQUFjO0VBQ3hDLEtBQUtQLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBZjtFQUNBLEtBQUtELEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBZjtBQUNILENBSEQ7O0FBS0FjLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLFlBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FrZS1tYW4tbmVhci15b3UvLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzP2MyMDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBNb3ZpbmdPYmplY3Qob3B0aW9ucykge1xuXG4gICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcbiAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsO1xuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lO1xufVxuXG5Nb3ZpbmdPYmplY3QucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIDIqTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5maWxsKCk7XG59O1xuXG5Nb3ZpbmdPYmplY3QucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICB0aGlzLnBvc1sxXSArPSB0aGlzLnZlbFsxXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aW5nT2JqZWN0OyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsIk1vdmluZ09iamVjdCIsIm9wdGlvbnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsImdhbWUiLCJwcm90b3R5cGUiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(module) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n\n    ;\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\nmodule.exports = Util;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm5hbWVzIjpbIlV0aWwiLCJpbmhlcml0cyIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwicmFuZG9tVmVjIiwibGVuZ3RoIiwiZGVnIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FrZS1tYW4tbmVhci15b3UvLi9zcmMvc2NyaXB0cy91dGlscy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWwgPSB7XG4gICAgaW5oZXJpdHMoY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICAgICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgICAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNoaWxkQ2xhc3M7XG4gICAgfSxcblxuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgICB9LFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFJLEdBQUc7RUFDVEMsUUFBUSxDQUFDQyxVQUFELEVBQWFDLFdBQWIsRUFBMEI7SUFDOUIsU0FBU0MsU0FBVCxHQUFxQixDQUFFOztJQUFBO0lBQ3ZCQSxTQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7SUFDQUgsVUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7SUFDQUYsVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxXQUFyQixHQUFtQ0osVUFBbkM7RUFDSCxDQU5ROztFQVFUSyxTQUFTLENBQUNDLE1BQUQsRUFBUztJQUNkLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFJLENBQUNDLEVBQVQsR0FBY0QsSUFBSSxDQUFDRSxNQUFMLEVBQTFCO0lBQ0EsT0FBT1osSUFBSSxDQUFDYSxLQUFMLENBQVcsQ0FBQ0gsSUFBSSxDQUFDSSxHQUFMLENBQVNMLEdBQVQsQ0FBRCxFQUFnQkMsSUFBSSxDQUFDSyxHQUFMLENBQVNOLEdBQVQsQ0FBaEIsQ0FBWCxFQUEyQ0QsTUFBM0MsQ0FBUDtFQUNILENBWFE7O0VBWVA7RUFDRkssS0FBSyxDQUFDRyxHQUFELEVBQU1DLENBQU4sRUFBUztJQUNWLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQyxDQUFWLEVBQWFELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0MsQ0FBdEIsQ0FBUDtFQUNIOztBQWZRLENBQWI7QUFrQkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLElBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWtlLW1hbi1uZWFyLXlvdS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;