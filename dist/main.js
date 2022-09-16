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

eval("const Cakeman = __webpack_require__(/*! ./scripts/cakeman.js */ \"./src/scripts/cakeman.js\");\n\nconst MovingObject = __webpack_require__(/*! ./scripts/moving_object.js */ \"./src/scripts/moving_object.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  const mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 10,\n    color: \"#000000\"\n  });\n  mo.draw(ctx); // console.log(mo);\n\n  const cake = new Cakeman({});\n  cake.draw(ctx);\n});\nwindow.MovingObject = MovingObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXZCOztBQUNBLE1BQU1DLFlBQVksR0FBR0QsbUJBQU8sQ0FBQyxrRUFBRCxDQUE1Qjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0VBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUVBLE1BQU1DLEVBQUUsR0FBRyxJQUFJUCxZQUFKLENBQWlCO0lBQ3hCUSxHQUFHLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURtQjtJQUV4QkMsR0FBRyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FGbUI7SUFHeEJDLE1BQU0sRUFBRSxFQUhnQjtJQUl4QkMsS0FBSyxFQUFFO0VBSmlCLENBQWpCLENBQVg7RUFPQUosRUFBRSxDQUFDSyxJQUFILENBQVFQLEdBQVIsRUFYZ0QsQ0FZaEQ7O0VBQ0EsTUFBTVEsSUFBSSxHQUFHLElBQUlmLE9BQUosQ0FBWSxFQUFaLENBQWI7RUFFQWUsSUFBSSxDQUFDRCxJQUFMLENBQVVQLEdBQVY7QUFDSCxDQWhCRDtBQWtCQVMsTUFBTSxDQUFDZCxZQUFQLEdBQXNCQSxZQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nha2UtbWFuLW5lYXIteW91Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FrZW1hbiA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvY2FrZW1hbi5qc1wiKTtcbmNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvbW92aW5nX29iamVjdC5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgbW8gPSBuZXcgTW92aW5nT2JqZWN0KHtcbiAgICAgICAgcG9zOiBbMzAsIDMwXSxcbiAgICAgICAgdmVsOiBbMTAsIDEwXSxcbiAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXG4gICAgfSk7XG5cbiAgICBtby5kcmF3KGN0eCk7XG4gICAgLy8gY29uc29sZS5sb2cobW8pO1xuICAgIGNvbnN0IGNha2UgPSBuZXcgQ2FrZW1hbih7XG4gICAgfSlcbiAgICBjYWtlLmRyYXcoY3R4KTtcbn0pXG5cbndpbmRvdy5Nb3ZpbmdPYmplY3QgPSBNb3ZpbmdPYmplY3Q7Il0sIm5hbWVzIjpbIkNha2VtYW4iLCJyZXF1aXJlIiwiTW92aW5nT2JqZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwibW8iLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsImRyYXciLCJjYWtlIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/cakeman.js":
/*!********************************!*\
  !*** ./src/scripts/cakeman.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst DEFAULT = {\n  COLOR: \"#FFFF00\",\n  RADIUS: 15\n};\n\nfunction Cakeman(options) {\n  options = options || {};\n  options.pos = options.pos || [100, 100];\n  options.vel = 0;\n  options.radius = DEFAULT.RADIUS;\n  options.color = DEFAULT.COLOR;\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Cakeman, MovingObject);\nmodule.exports = Cakeman;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYWtlbWFuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFlBQVksR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUE1Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsMENBQUQsQ0FBcEI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRSxTQURLO0VBRVpDLE1BQU0sRUFBRTtBQUZJLENBQWhCOztBQUtBLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0VBQ3RCQSxPQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtFQUNBQSxPQUFPLENBQUNDLEdBQVIsR0FBY0QsT0FBTyxDQUFDQyxHQUFSLElBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUE3QjtFQUNBRCxPQUFPLENBQUNFLEdBQVIsR0FBYyxDQUFkO0VBQ0FGLE9BQU8sQ0FBQ0csTUFBUixHQUFpQlAsT0FBTyxDQUFDRSxNQUF6QjtFQUNBRSxPQUFPLENBQUNJLEtBQVIsR0FBZ0JSLE9BQU8sQ0FBQ0MsS0FBeEI7RUFFQUosWUFBWSxDQUFDWSxJQUFiLENBQWtCLElBQWxCLEVBQXdCTCxPQUF4QjtBQUNIOztBQUVETCxJQUFJLENBQUNXLFFBQUwsQ0FBY1AsT0FBZCxFQUF1Qk4sWUFBdkI7QUFFQWMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxPQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nha2UtbWFuLW5lYXIteW91Ly4vc3JjL3NjcmlwdHMvY2FrZW1hbi5qcz82NWY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL21vdmluZ19vYmplY3QuanNcIik7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gICAgQ09MT1I6IFwiI0ZGRkYwMFwiLFxuICAgIFJBRElVUzogMTVcbn1cblxuZnVuY3Rpb24gQ2FrZW1hbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5wb3MgPSBvcHRpb25zLnBvcyB8fCBbMTAwLCAxMDBdO1xuICAgIG9wdGlvbnMudmVsID0gMDtcbiAgICBvcHRpb25zLnJhZGl1cyA9IERFRkFVTFQuUkFESVVTO1xuICAgIG9wdGlvbnMuY29sb3IgPSBERUZBVUxULkNPTE9SO1xuXG4gICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblV0aWwuaW5oZXJpdHMoQ2FrZW1hbiwgTW92aW5nT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWtlbWFuO1xuXG5cbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJyZXF1aXJlIiwiVXRpbCIsIkRFRkFVTFQiLCJDT0xPUiIsIlJBRElVUyIsIkNha2VtYW4iLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJjYWxsIiwiaW5oZXJpdHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/cakeman.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(module) {

eval("function MovingObject(_ref) {\n  let {\n    pos,\n    vel,\n    color,\n    radius\n  } = _ref;\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function (ctx) {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\n\nmodule.exports = MovingObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwicG9zIiwidmVsIiwiY29sb3IiLCJyYWRpdXMiLCJwcm90b3R5cGUiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWtlLW1hbi1uZWFyLXlvdS8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanM/YzIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBNb3ZpbmdPYmplY3Qoe3BvcywgdmVsLCBjb2xvciwgcmFkaXVzfSkge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gdmVsO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbn1cblxuTW92aW5nT2JqZWN0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMipNYXRoLlBJLCBmYWxzZSk7XG4gICAgY3R4LmZpbGwoKTtcbn1cblxuTW92aW5nT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aW5nT2JqZWN0OyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsWUFBVCxPQUFpRDtFQUFBLElBQTNCO0lBQUNDLEdBQUQ7SUFBTUMsR0FBTjtJQUFXQyxLQUFYO0lBQWtCQztFQUFsQixDQUEyQjtFQUM3QyxLQUFLSCxHQUFMLEdBQVdBLEdBQVg7RUFDQSxLQUFLQyxHQUFMLEdBQVdBLEdBQVg7RUFDQSxLQUFLRSxNQUFMLEdBQWNBLE1BQWQ7RUFDQSxLQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFFREgsWUFBWSxDQUFDSyxTQUFiLENBQXVCQyxJQUF2QixHQUE4QixVQUFTQyxHQUFULEVBQWM7RUFDeENBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixLQUFLTCxLQUFyQjtFQUNBSSxHQUFHLENBQUNFLFNBQUo7RUFDQUYsR0FBRyxDQUFDRyxHQUFKLENBQVEsS0FBS1QsR0FBTCxDQUFTLENBQVQsQ0FBUixFQUFxQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFyQixFQUFrQyxLQUFLRyxNQUF2QyxFQUErQyxDQUEvQyxFQUFrRCxJQUFFTyxJQUFJLENBQUNDLEVBQXpELEVBQTZELEtBQTdEO0VBQ0FMLEdBQUcsQ0FBQ00sSUFBSjtBQUNILENBTEQ7O0FBT0FiLFlBQVksQ0FBQ0ssU0FBYixDQUF1QlMsSUFBdkIsR0FBOEIsVUFBU1AsR0FBVCxFQUFjO0VBQ3hDLEtBQUtOLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBZjtFQUNBLEtBQUtELEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBZjtBQUNILENBSEQ7O0FBS0FhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhCLFlBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(module) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n\n    ;\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  }\n\n};\nmodule.exports = Util;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm5hbWVzIjpbIlV0aWwiLCJpbmhlcml0cyIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FrZS1tYW4tbmVhci15b3UvLi9zcmMvc2NyaXB0cy91dGlscy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWwgPSB7XG4gICAgaW5oZXJpdHMoY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICAgICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgICAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNoaWxkQ2xhc3M7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFJLEdBQUc7RUFDVEMsUUFBUSxDQUFDQyxVQUFELEVBQWFDLFdBQWIsRUFBMEI7SUFDOUIsU0FBU0MsU0FBVCxHQUFxQixDQUFFOztJQUFBO0lBQ3ZCQSxTQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7SUFDQUgsVUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7SUFDQUYsVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxXQUFyQixHQUFtQ0osVUFBbkM7RUFDSDs7QUFOUSxDQUFiO0FBU0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsSUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

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