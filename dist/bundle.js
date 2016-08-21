/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(6);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import css
	var s = __webpack_require__(3);
	var header = document.querySelector('header');
	var box = document.createElement('div');
	// apply css name from imported css js object
	box.classList.add(s.autoprefixed);
	header.appendChild(box);

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"autoprefixed":"header__autoprefixed___GKK"};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import css
	var s = __webpack_require__(5);
	var greetings = ['hola', 'salut', 'ciao', 'hej', 'ni hao', 'shalom', 'merhaba', 'foobar'];
	var greeter = document.getElementById('greetings');
	var list = document.createElement('ul');
	// apply css name from imported css js object
	list.classList.add(s.list);

	greetings.map(function (g, i) {
	  var item = document.createElement('li');
	  item.innerHTML = g;
	  list.appendChild(item);
	});

	greeter.appendChild(list);

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"greeter__list___2-Q"};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import css
	var s = __webpack_require__(7);
	var imagesection = document.getElementById('image');
	var img = document.createElement('div');
	// apply css name from imported css js object
	img.classList.add(s.img);
	imagesection.appendChild(img);

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"img":"image__img___1AH"};

/***/ }
/******/ ]);