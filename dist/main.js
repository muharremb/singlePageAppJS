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

eval("const Cakeman = __webpack_require__(/*! ./scripts/cakeman.js */ \"./src/scripts/cakeman.js\");\n\nconst MovingObject = __webpack_require__(/*! ./scripts/moving_object.js */ \"./src/scripts/moving_object.js\");\n\nconst Board = __webpack_require__(/*! ./scripts/board.js */ \"./src/scripts/board.js\");\n\nconst Ghost = __webpack_require__(/*! ./scripts/ghost.js */ \"./src/scripts/ghost.js\");\n\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n  const ctx = canvasEl.getContext(\"2d\");\n  const cake = new Cakeman();\n  const ghost = new Ghost();\n  const game = new Game();\n  game.draw(ctx); // cake.draw(ctx);\n  // ghost.draw(ctx);\n  // board.render(ctx);\n});\nwindow.MovingObject = MovingObject;\nwindow.Board = Board;\nwindow.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXZCOztBQUNBLE1BQU1DLFlBQVksR0FBR0QsbUJBQU8sQ0FBQyxrRUFBRCxDQUE1Qjs7QUFDQSxNQUFNRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsa0RBQUQsQ0FBckI7O0FBQ0EsTUFBTUcsS0FBSyxHQUFHSCxtQkFBTyxDQUFDLGtEQUFELENBQXJCOztBQUNBLE1BQU1JLElBQUksR0FBRUosbUJBQU8sQ0FBQyxnREFBRCxDQUFuQjs7QUFFQUssUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFqQjtFQUNBRCxRQUFRLENBQUNFLEtBQVQsR0FBaUJMLElBQUksQ0FBQ00sS0FBdEI7RUFDQUgsUUFBUSxDQUFDSSxNQUFULEdBQWtCUCxJQUFJLENBQUNRLEtBQXZCO0VBRUEsTUFBTUMsR0FBRyxHQUFHTixRQUFRLENBQUNPLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWjtFQUVBLE1BQU1DLElBQUksR0FBRyxJQUFJaEIsT0FBSixFQUFiO0VBQ0EsTUFBTWlCLEtBQUssR0FBRyxJQUFJYixLQUFKLEVBQWQ7RUFDQSxNQUFNYyxJQUFJLEdBQUcsSUFBSWIsSUFBSixFQUFiO0VBRUFhLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxHQUFWLEVBWGdELENBWWhEO0VBQ0E7RUFDQTtBQUVILENBaEJEO0FBa0JBTSxNQUFNLENBQUNsQixZQUFQLEdBQXNCQSxZQUF0QjtBQUNBa0IsTUFBTSxDQUFDakIsS0FBUCxHQUFlQSxLQUFmO0FBQ0FpQixNQUFNLENBQUNmLElBQVAsR0FBY0EsSUFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2Nha2UtbWFuLW5lYXIteW91Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FrZW1hbiA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvY2FrZW1hbi5qc1wiKTtcbmNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvbW92aW5nX29iamVjdC5qc1wiKTtcbmNvbnN0IEJvYXJkID0gcmVxdWlyZShcIi4vc2NyaXB0cy9ib2FyZC5qc1wiKTtcbmNvbnN0IEdob3N0ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9naG9zdC5qc1wiKTtcbmNvbnN0IEdhbWUgPXJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICAgIGNhbnZhc0VsLndpZHRoID0gR2FtZS5ESU1fWDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHYW1lLkRJTV9ZO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIGNvbnN0IGNha2UgPSBuZXcgQ2FrZW1hbigpO1xuICAgIGNvbnN0IGdob3N0ID0gbmV3IEdob3N0KCk7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbiAgICBnYW1lLmRyYXcoY3R4KTtcbiAgICAvLyBjYWtlLmRyYXcoY3R4KTtcbiAgICAvLyBnaG9zdC5kcmF3KGN0eCk7XG4gICAgLy8gYm9hcmQucmVuZGVyKGN0eCk7XG5cbn0pXG5cbndpbmRvdy5Nb3ZpbmdPYmplY3QgPSBNb3ZpbmdPYmplY3Q7XG53aW5kb3cuQm9hcmQgPSBCb2FyZDtcbndpbmRvdy5HYW1lID0gR2FtZTsiXSwibmFtZXMiOlsiQ2FrZW1hbiIsInJlcXVpcmUiLCJNb3ZpbmdPYmplY3QiLCJCb2FyZCIsIkdob3N0IiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FrZSIsImdob3N0IiwiZ2FtZSIsImRyYXciLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("function Board() {\n  this.cols = 28;\n  this.rows = 10;\n  this.tsize = 64;\n  this.tsizeDim = 16;\n  this.tiles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];\n}\n\nconst FILL_COLORS = {\n  1: \"black\",\n  2: \"blue\"\n};\n\nBoard.prototype.getTile = function (col, row) {\n  return this.tiles[row * this.cols + col];\n};\n\nBoard.prototype.render = function (ctx) {\n  for (let c = 0; c < this.cols; c++) {\n    for (let r = 0; r < this.rows; r++) {\n      let tile = this.getTile(c, r);\n\n      if (tile !== 0) {\n        console.log(this);\n        ctx.fillStyle = FILL_COLORS[tile];\n        ctx.fillRect(c * this.tsizeDim, r * this.tsizeDim, this.tsizeDim, this.tsizeDim);\n      }\n    }\n  }\n};\n\nmodule.exports = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm5hbWVzIjpbIkJvYXJkIiwiY29scyIsInJvd3MiLCJ0c2l6ZSIsInRzaXplRGltIiwidGlsZXMiLCJGSUxMX0NPTE9SUyIsInByb3RvdHlwZSIsImdldFRpbGUiLCJjb2wiLCJyb3ciLCJyZW5kZXIiLCJjdHgiLCJjIiwiciIsInRpbGUiLCJjb25zb2xlIiwibG9nIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWtlLW1hbi1uZWFyLXlvdS8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQm9hcmQgKCkge1xuICAgIHRoaXMuY29scyA9IDI4O1xuICAgIHRoaXMucm93cyA9IDEwO1xuICAgIHRoaXMudHNpemUgPSA2NDtcbiAgICB0aGlzLnRzaXplRGltID0gMTY7XG4gICAgdGhpcy50aWxlcyA9IFtcbiAgICAgICAgMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSxcbiAgICAgICAgMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSxcbiAgICAgICAgMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSxcbiAgICAgICAgXG4gICAgICAgIDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsXG4gICAgICAgIDIsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMiwyLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDIsXG4gICAgICAgIDIsMSwyLDIsMiwyLDEsMiwyLDIsMiwyLDEsMiwyLDEsMiwyLDIsMiwyLDEsMiwyLDIsMiwxLDIsXG4gICAgICAgIDIsMSwyLDIsMiwyLDEsMiwyLDIsMiwyLDEsMiwyLDEsMiwyLDIsMiwyLDEsMiwyLDIsMiwxLDIsXG4gICAgICAgIDIsMSwyLDIsMiwyLDEsMiwyLDIsMiwyLDEsMiwyLDEsMiwyLDIsMiwyLDEsMiwyLDIsMiwxLDIsXG5cbiAgICAgICAgMiwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMixcblxuICAgICAgICAyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyLDIsMiwyXG4gICAgXTtcbn1cblxuY29uc3QgRklMTF9DT0xPUlMgPSB7XG4gICAgMTogXCJibGFja1wiLFxuICAgIDI6IFwiYmx1ZVwiXG59XG5cbkJvYXJkLnByb3RvdHlwZS5nZXRUaWxlID0gZnVuY3Rpb24oY29sLCByb3cpIHtcbiAgICByZXR1cm4gdGhpcy50aWxlc1tyb3cgKiB0aGlzLmNvbHMgKyBjb2xdXG59XG5cbkJvYXJkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcbiAgICBmb3IobGV0IGM9MDsgYzx0aGlzLmNvbHM7YysrKSB7XG4gICAgICAgIGZvcihsZXQgcj0wOyByPHRoaXMucm93czsgcisrKSB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ2V0VGlsZShjLHIpO1xuICAgICAgICAgICAgaWYodGlsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGU9RklMTF9DT0xPUlNbdGlsZV07XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGMqdGhpcy50c2l6ZURpbSwgcip0aGlzLnRzaXplRGltLCB0aGlzLnRzaXplRGltLCB0aGlzLnRzaXplRGltKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxLQUFULEdB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\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/cakeman.js":
/*!********************************!*\
  !*** ./src/scripts/cakeman.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst DEFAULT = {\n  COLOR: \"#FFFF00\",\n  RADIUS: 15\n};\n\nfunction Cakeman(options) {\n  options = options || {};\n  options.pos = options.pos || [100, 100];\n  options.vel = 0;\n  options.radius = DEFAULT.RADIUS;\n  options.color = DEFAULT.COLOR;\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Cakeman, MovingObject);\nmodule.exports = Cakeman;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYWtlbWFuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFlBQVksR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUE1Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsMENBQUQsQ0FBcEI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRSxTQURLO0VBRVpDLE1BQU0sRUFBRTtBQUZJLENBQWhCOztBQUtBLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0VBQ3RCQSxPQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtFQUNBQSxPQUFPLENBQUNDLEdBQVIsR0FBY0QsT0FBTyxDQUFDQyxHQUFSLElBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUE3QjtFQUNBRCxPQUFPLENBQUNFLEdBQVIsR0FBYyxDQUFkO0VBQ0FGLE9BQU8sQ0FBQ0csTUFBUixHQUFpQlAsT0FBTyxDQUFDRSxNQUF6QjtFQUNBRSxPQUFPLENBQUNJLEtBQVIsR0FBZ0JSLE9BQU8sQ0FBQ0MsS0FBeEI7RUFFQUosWUFBWSxDQUFDWSxJQUFiLENBQWtCLElBQWxCLEVBQXdCTCxPQUF4QjtBQUNIOztBQUVETCxJQUFJLENBQUNXLFFBQUwsQ0FBY1AsT0FBZCxFQUF1Qk4sWUFBdkI7QUFFQWMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxPQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nha2UtbWFuLW5lYXIteW91Ly4vc3JjL3NjcmlwdHMvY2FrZW1hbi5qcz82NWY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL21vdmluZ19vYmplY3QuanNcIik7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gICAgQ09MT1I6IFwiI0ZGRkYwMFwiLFxuICAgIFJBRElVUzogMTVcbn1cblxuZnVuY3Rpb24gQ2FrZW1hbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5wb3MgPSBvcHRpb25zLnBvcyB8fCBbMTAwLCAxMDBdO1xuICAgIG9wdGlvbnMudmVsID0gMDtcbiAgICBvcHRpb25zLnJhZGl1cyA9IERFRkFVTFQuUkFESVVTO1xuICAgIG9wdGlvbnMuY29sb3IgPSBERUZBVUxULkNPTE9SO1xuXG4gICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblV0aWwuaW5oZXJpdHMoQ2FrZW1hbiwgTW92aW5nT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWtlbWFuO1xuXG5cbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJyZXF1aXJlIiwiVXRpbCIsIkRFRkFVTFQiLCJDT0xPUiIsIlJBRElVUyIsIkNha2VtYW4iLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJjYWxsIiwiaW5oZXJpdHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/cakeman.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst Cakeman = __webpack_require__(/*! ./cakeman.js */ \"./src/scripts/cakeman.js\");\n\nconst Ghost = __webpack_require__(/*! ./ghost.js */ \"./src/scripts/ghost.js\");\n\nfunction Game() {\n  this.cakeman = [];\n  this.ghosts = [];\n  this.addGhosts();\n  this.addCakeman();\n}\n\nGame.DIM_X = 620;\nGame.DIM_Y = 560;\nGame.NUM_GHOST = 4;\n\nGame.prototype.add = function add(object) {\n  if (object instanceof Ghost) {\n    this.ghosts.push(object);\n  } else if (object instanceof Cakeman) {\n    this.cakeman.push(object);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\nGame.prototype.addGhosts = function addGhosts() {\n  for (let i = 0; i < Game.NUM_GHOST; i++) {\n    this.add(new Ghost({\n      game: this,\n      pos: this.randomPosition()\n    }));\n  }\n};\n\nGame.prototype.addCakeman = function addCakeman() {\n  this.add(new Cakeman({\n    game: this,\n    pos: [120, 120]\n  }));\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat(this.ghosts, this.cakeman);\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n  return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];\n};\n\nGame.prototype.draw = function draw(ctx) {\n  // console.log(this.allObjects())\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  console.log(ctx);\n  this.allObjects().forEach(object => {\n    object.draw(ctx);\n  });\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk7SUFDbENBLE1BQU0sQ0FBQ1csSUFBUCxDQUFZQyxHQUFaO0VBQ0gsQ0FGRDtBQUdILENBUkQ7O0FBVUFNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdCLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FrZS1tYW4tbmVhci15b3UvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuY29uc3QgQ2FrZW1hbiA9IHJlcXVpcmUoXCIuL2Nha2VtYW4uanNcIik7XG5jb25zdCBHaG9zdCA9IHJlcXVpcmUoXCIuL2dob3N0LmpzXCIpO1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICAgIHRoaXMuY2FrZW1hbiA9IFtdO1xuICAgIHRoaXMuZ2hvc3RzID0gW107XG5cbiAgICB0aGlzLmFkZEdob3N0cygpO1xuICAgIHRoaXMuYWRkQ2FrZW1hbigpO1xufVxuXG5HYW1lLkRJTV9YID0gNjIwO1xuR2FtZS5ESU1fWSA9IDU2MDtcbkdhbWUuTlVNX0dIT1NUID0gNDtcblxuR2FtZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBHaG9zdCkge1xuICAgICAgdGhpcy5naG9zdHMucHVzaChvYmplY3QpO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0IGluc3RhbmNlb2YgQ2FrZW1hbikge1xuICAgICAgdGhpcy5jYWtlbWFuLnB1c2gob2JqZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlIG9mIG9iamVjdFwiKTtcbiAgICB9XG4gIH07XG5cbkdhbWUucHJvdG90eXBlLmFkZEdob3N0cyA9IGZ1bmN0aW9uIGFkZEdob3N0cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWUuTlVNX0dIT1NUOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkKG5ldyBHaG9zdCh7IGdhbWU6IHRoaXMsIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpIH0pKTtcbiAgICB9XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDYWtlbWFuID0gZnVuY3Rpb24gYWRkQ2FrZW1hbigpIHtcbiAgICB0aGlzLmFkZChuZXcgQ2FrZW1hbih7Z2FtZTogdGhpcywgcG9zOiBbMTIwLCAxMjBdfSkpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWxsT2JqZWN0cyA9IGZ1bmN0aW9uIGFsbE9iamVjdHMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLmdob3N0cywgdGhpcy5jYWtlbWFuKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnJhbmRvbVBvc2l0aW9uID0gZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgR2FtZS5ESU1fWCAqIE1hdGgucmFuZG9tKCksXG4gICAgICAgIEdhbWUuRElNX1kgKiBNYXRoLnJhbmRvbSgpXG4gICAgXTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KGN0eCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsT2JqZWN0cygpKVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuICAgIGNvbnNvbGUubG9nKGN0eCk7XG4gICAgdGhpcy5hbGxPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwiQ2FrZW1hbiIsIkdob3N0IiwiR2FtZSIsImNha2VtYW4iLCJnaG9zdHMiLCJhZGRHaG9zdHMiLCJhZGRDYWtlbWFuIiwiRElNX1giLCJESU1fWSIsIk5VTV9HSE9TVCIsInByb3RvdHlwZSIsImFkZCIsIm9iamVjdCIsInB1c2giLCJFcnJvciIsImkiLCJnYW1lIiwicG9zIiwicmFuZG9tUG9zaXRpb24iLCJhbGxPYmplY3RzIiwiY29uY2F0IiwiTWF0aCIsInJhbmRvbSIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/ghost.js":
/*!******************************!*\
  !*** ./src/scripts/ghost.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst DEFAULT = {\n  COLOR: \"#FF0000\",\n  RADIUS: 15,\n  SPEED: 5\n};\n\nfunction Ghost(options) {\n  options = options || {};\n  options.pos = options.pos || [300, 300];\n  options.vel = 0;\n  options.radius = DEFAULT.RADIUS;\n  options.color = DEFAULT.COLOR;\n  options.vel = options.vel || Util.randomVec(DEFAULT.SPEED);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Ghost, MovingObject);\nmodule.exports = Ghost;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxZQUFZLEdBQUdDLG1CQUFPLENBQUMsMERBQUQsQ0FBNUI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLDBDQUFELENBQXBCOztBQUVBLE1BQU1FLE9BQU8sR0FBRztFQUNaQyxLQUFLLEVBQUUsU0FESztFQUVaQyxNQUFNLEVBQUUsRUFGSTtFQUdaQyxLQUFLLEVBQUU7QUFISyxDQUFoQjs7QUFNQSxTQUFTQyxLQUFULENBQWVDLE9BQWYsRUFBd0I7RUFDcEJBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0VBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixHQUFjRCxPQUFPLENBQUNDLEdBQVIsSUFBZSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTdCO0VBQ0FELE9BQU8sQ0FBQ0UsR0FBUixHQUFjLENBQWQ7RUFDQUYsT0FBTyxDQUFDRyxNQUFSLEdBQWlCUixPQUFPLENBQUNFLE1BQXpCO0VBQ0FHLE9BQU8sQ0FBQ0ksS0FBUixHQUFnQlQsT0FBTyxDQUFDQyxLQUF4QjtFQUNBSSxPQUFPLENBQUNFLEdBQVIsR0FBY0YsT0FBTyxDQUFDRSxHQUFSLElBQWVSLElBQUksQ0FBQ1csU0FBTCxDQUFlVixPQUFPLENBQUNHLEtBQXZCLENBQTdCO0VBRUFOLFlBQVksQ0FBQ2MsSUFBYixDQUFrQixJQUFsQixFQUF3Qk4sT0FBeEI7QUFDSDs7QUFFRE4sSUFBSSxDQUFDYSxRQUFMLENBQWNSLEtBQWQsRUFBcUJQLFlBQXJCO0FBQ0FnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJWLEtBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FrZS1tYW4tbmVhci15b3UvLi9zcmMvc2NyaXB0cy9naG9zdC5qcz81Y2NlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL21vdmluZ19vYmplY3QuanNcIik7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gICAgQ09MT1I6IFwiI0ZGMDAwMFwiLFxuICAgIFJBRElVUzogMTUsIFxuICAgIFNQRUVEOiA1LFxufVxuXG5mdW5jdGlvbiBHaG9zdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5wb3MgPSBvcHRpb25zLnBvcyB8fCBbMzAwLCAzMDBdO1xuICAgIG9wdGlvbnMudmVsID0gMDtcbiAgICBvcHRpb25zLnJhZGl1cyA9IERFRkFVTFQuUkFESVVTO1xuICAgIG9wdGlvbnMuY29sb3IgPSBERUZBVUxULkNPTE9SO1xuICAgIG9wdGlvbnMudmVsID0gb3B0aW9ucy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVC5TUEVFRCk7XG5cbiAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuVXRpbC5pbmhlcml0cyhHaG9zdCwgTW92aW5nT2JqZWN0KTtcbm1vZHVsZS5leHBvcnRzID0gR2hvc3Q7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsInJlcXVpcmUiLCJVdGlsIiwiREVGQVVMVCIsIkNPTE9SIiwiUkFESVVTIiwiU1BFRUQiLCJHaG9zdCIsIm9wdGlvbnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ghost.js\n");

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