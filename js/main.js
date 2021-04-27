/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/change-construct.js":
/*!****************************************!*\
  !*** ./js/modules/change-construct.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction changeConstruct(state) {\r\n\r\n  const custom = document.querySelector('.custom'),\r\n        skin = custom.querySelector('.person-skin'),\r\n        clothes = custom.querySelector('.person-clothes'),\r\n        hair = custom.querySelector('.person-hair'),\r\n        skinId = state.sex === 'Мужской' ? state.skinId : state.skinId + 3;\r\n\r\n  skin.style.background = `url(./img/skin/skin-${skinId}.png) center no-repeat`;\r\n  skin.style.backgroundSize = 'cover';\r\n\r\n  clothes.style.background = `url(./img/clothes/construct/clothes-${state.clothesId}.png) center no-repeat`;\r\n  clothes.style.backgroundSize = 'cover';\r\n\r\n  hair.style.background = `url(./img/hair/construct/hair-${state.hairId}.png) center no-repeat`;\r\n  hair.style.backgroundSize = 'cover';\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeConstruct);\n\n//# sourceURL=webpack://elections/./js/modules/change-construct.js?");

/***/ }),

/***/ "./js/modules/change-state-by-input.js":
/*!*********************************************!*\
  !*** ./js/modules/change-state-by-input.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./js/modules/slider.js\");\n\r\n\r\nfunction changeStateByInput(state, customSelector, customInfoSelector, \r\n  inputsSelector, radioSelector, selectSelector, textareaSelector) {\r\n\r\n  const custom = document.querySelector(customSelector),\r\n        customInfo = custom.querySelector(customInfoSelector),\r\n        inputs = customInfo.querySelectorAll(inputsSelector),\r\n        radioInputs = customInfo.querySelectorAll(radioSelector),\r\n        select = customInfo.querySelector(selectSelector),\r\n        textarea = customInfo.querySelector(textareaSelector);\r\n\r\n  inputs.forEach(input => {\r\n\r\n    input.addEventListener('input', () => {\r\n\r\n      const attrName = input.name;\r\n      if (input.name === 'age') {\r\n        input.value = input.value.replace(/\\D/, '');\r\n      }\r\n      state[attrName] = input.value;\r\n\r\n      console.log(state);\r\n\r\n    });\r\n\r\n  });\r\n\r\n  radioInputs.forEach(input => {\r\n\r\n    input.addEventListener('change', () => {\r\n\r\n      const attrName = input.name;\r\n      state[attrName] = input.value;\r\n\r\n      console.log(state);\r\n\r\n      (0,_slider__WEBPACK_IMPORTED_MODULE_0__.default)(state, '.custom-style', '.skin', '.skin-color', '.prev', '.next', 'skinId');\r\n      (0,_slider__WEBPACK_IMPORTED_MODULE_0__.default)(state, '.custom-style', '.hair', '.hair-style', '.prev', '.next', 'hairId');\r\n      (0,_slider__WEBPACK_IMPORTED_MODULE_0__.default)(state, '.custom-style', '.clothes', '.clothes-style', '.prev', '.next', 'clothesId');\r\n\r\n    });\r\n\r\n  });\r\n\r\n  select.addEventListener('change', () => {\r\n\r\n    const attrName = select.name;\r\n    state[attrName] = select.value;\r\n    console.log(state);\r\n\r\n  });\r\n\r\n  textarea.addEventListener('input', () => {\r\n\r\n    const attrName = textarea.name;\r\n    state[attrName] = textarea.value;\r\n    console.log(state);\r\n\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStateByInput);\n\n//# sourceURL=webpack://elections/./js/modules/change-state-by-input.js?");

/***/ }),

/***/ "./js/modules/create-candidate.js":
/*!****************************************!*\
  !*** ./js/modules/create-candidate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createCandidate(state, btnSelector, constructSelector, cardsSelector) {\r\n\r\n  const main = document.querySelector('.main'),\r\n        custom = document.querySelector('.custom'),\r\n        btnCreate = document.querySelector(btnSelector),\r\n        mainCards = document.querySelector(cardsSelector);\r\n\r\n  btnCreate.addEventListener('click', () => {\r\n\r\n    const div = document.createElement('div');\r\n    div.classList.add('main-cards-item');\r\n\r\n    const photoCandidate = custom.querySelector(constructSelector).cloneNode(true);\r\n\r\n    div.innerHTML = `\r\n      <div class=\"candidate-block\">\r\n        <div class=\"photo photo-1\"></div>\r\n        <div class=\"result\">\r\n          <div class=\"result-count\">0%</div>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-1\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"name\">${state.wholeName}</div>\r\n      <div class=\"age\">${state.age} лет</div>\r\n      Пол:\r\n      <div class=\"sex\">${state.sex}</div>\r\n      Полит. взгляды:\r\n      <div class=\"views\">${state.politicOpinion}</div>\r\n      Биография\r\n      <div class=\"bio\">${state.bio}</div>\r\n    `;\r\n\r\n    div.querySelector('.photo').replaceWith(photoCandidate);\r\n\r\n    mainCards.children[0].after(div);\r\n\r\n    custom.classList.remove('animate__slideInUp');\r\n    main.classList.remove('animate__slideOutLeft');\r\n\r\n    custom.classList.add('animate__slideOutUp');\r\n    main.classList.add('animate__slideInLeft');\r\n\r\n    setTimeout(() => {\r\n      main.style.display = '';\r\n      custom.style.display = '';\r\n    }, 1000);\r\n\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCandidate);\n\n//# sourceURL=webpack://elections/./js/modules/create-candidate.js?");

/***/ }),

/***/ "./js/modules/crime-voting.js":
/*!************************************!*\
  !*** ./js/modules/crime-voting.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction crimeVoting(btnSelector, progressSelectorBarsSelector, cardsSelector, cardSelector, resultSelector) {\r\n\r\n  const btnVote = document.querySelector(btnSelector);\r\n\r\n  btnVote.addEventListener('click', () => {\r\n\r\n    const progressBars = document.querySelectorAll(progressSelectorBarsSelector),\r\n          cards = document.querySelector(cardsSelector),\r\n          allCards = cards.querySelectorAll(cardSelector),\r\n          results = cards.querySelectorAll(resultSelector);\r\n\r\n    let [firstResult, secondResult, thirdResult] = Array.from(results).map(item => item.textContent.slice(0, -1));\r\n\r\n    if (firstResult == 0 && secondResult == 0 && thirdResult == 0) {\r\n      return;\r\n    }\r\n\r\n    const arr = getArrOfResults(firstResult, secondResult, thirdResult);\r\n    const max = Math.max(...arr);\r\n\r\n    progressBars.forEach((bar, ind) => {\r\n      bar.style.height = arr[ind] + '%';\r\n      if (arr[ind] == max) {\r\n        allCards[ind].classList.add('main-cards-item-active');\r\n      } else {\r\n        allCards[ind].classList.remove('main-cards-item-active');\r\n      }\r\n    });\r\n\r\n    results.forEach((res, ind) => {\r\n      res.innerHTML = arr[ind] + '%';\r\n    });\r\n\r\n  });\r\n\r\n}\r\n\r\nfunction getArrOfResults(firstResult, secondResult, thirdResult) {\r\n  if (secondResult < 98) {\r\n    const res = Math.floor(secondResult * 1.25);\r\n    if (res >= 100) {\r\n      secondResult = 98;\r\n      firstResult = 1;\r\n      thirdResult = 1;\r\n    } else {\r\n      const rest = 100 - res;\r\n      secondResult = res;\r\n      firstResult = Math.floor(Math.random() * rest);\r\n      thirdResult = rest - firstResult;\r\n    }\r\n  }\r\n\r\n  return [firstResult, secondResult, thirdResult];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (crimeVoting);\n\n//# sourceURL=webpack://elections/./js/modules/crime-voting.js?");

/***/ }),

/***/ "./js/modules/honest-voting.js":
/*!*************************************!*\
  !*** ./js/modules/honest-voting.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction honestVoting(btnSelector, progressSelectorBarsSelector, cardsSelector, cardSelector, resultSelector) {\r\n\r\n  const btnVote = document.querySelector(btnSelector);\r\n    \r\n  btnVote.addEventListener('click', () => {\r\n\r\n    const progressBars = document.querySelectorAll(progressSelectorBarsSelector),\r\n          cards = document.querySelector(cardsSelector),\r\n          allCards = cards.querySelectorAll(cardSelector),\r\n          results = cards.querySelectorAll(resultSelector);\r\n    \r\n    let firstResult = Math.floor(Math.random() * 90 + 1);\r\n    let secondResult = Math.floor(Math.random() * (100 - firstResult + 1));\r\n    let thirdResult = 100 - firstResult - secondResult;\r\n    while(firstResult === 0 || secondResult === 0 || thirdResult === 0) {\r\n      firstResult = Math.floor(Math.random() * 90 + 1);\r\n      secondResult = Math.floor(Math.random() * (100 - firstResult + 1));\r\n      thirdResult = 100 - firstResult - secondResult;\r\n    }\r\n\r\n    const arr = [firstResult, secondResult, thirdResult];\r\n    const max = Math.max(...arr);\r\n\r\n    progressBars.forEach((bar, ind) => {\r\n      bar.style.height = arr[ind] + '%';\r\n      if (arr[ind] === max) {\r\n        allCards[ind].classList.add('main-cards-item-active');\r\n      } else {\r\n        allCards[ind].classList.remove('main-cards-item-active');\r\n      }\r\n    });\r\n\r\n    results.forEach((res, ind) => {\r\n      res.innerHTML = arr[ind] + '%';\r\n    });\r\n\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (honestVoting);\n\n//# sourceURL=webpack://elections/./js/modules/honest-voting.js?");

/***/ }),

/***/ "./js/modules/init-state.js":
/*!**********************************!*\
  !*** ./js/modules/init-state.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initState(state = {}) {\r\n\r\n  const custom = document.querySelector('.custom'),\r\n        customInfo = custom.querySelector('.custom-info'),\r\n        inputs = customInfo.querySelectorAll('input:not([type=\"radio\"])'),\r\n        radioInputs = customInfo.querySelectorAll('input[type=\"radio\"]'),\r\n        select = customInfo.querySelector('select'),\r\n        textarea = customInfo.querySelector('textarea');\r\n\r\n  inputs.forEach(input => {\r\n    const attrName = input.name;\r\n    input.value = '';\r\n    state[attrName] = input.value;\r\n  });\r\n\r\n  radioInputs[0].checked = true;\r\n\r\n  radioInputs.forEach(input => {\r\n    const attrName = input.name;\r\n    if (input.checked) {\r\n      state[attrName] = input.value;\r\n    }\r\n  });\r\n\r\n  select.selectedIndex = 0;\r\n  state[select.name] = select.options[select.selectedIndex].value;\r\n\r\n  textarea.value = '';\r\n  state[textarea.name] = textarea.value;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initState);\n\n//# sourceURL=webpack://elections/./js/modules/init-state.js?");

/***/ }),

/***/ "./js/modules/reset.js":
/*!*****************************!*\
  !*** ./js/modules/reset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _init_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-state */ \"./js/modules/init-state.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./js/modules/slider.js\");\n\r\n\r\n\r\nfunction reset(state, btnSelector, cardsWrapperSelector, cardsSelector, resultSelector, progressBarSelector) {\r\n\r\n  const btnReset = document.querySelector(btnSelector);\r\n\r\n  btnReset.addEventListener('click', () => {\r\n\r\n    const cards = document.querySelectorAll(cardsSelector);\r\n    cards[1].remove();\r\n\r\n    const cardsWrapper = document.querySelector(cardsWrapperSelector),\r\n          results = cardsWrapper.querySelectorAll(resultSelector),\r\n          progressBars = cardsWrapper.querySelectorAll(progressBarSelector);\r\n\r\n    results.forEach(res => {\r\n      res.innerHTML = '0%';\r\n    });\r\n\r\n    progressBars.forEach(bar => {\r\n      bar.style.height = '';\r\n    });\r\n\r\n    (0,_init_state__WEBPACK_IMPORTED_MODULE_0__.default)(state);\r\n\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(state, '.custom-style', '.skin', '.skin-color', '.prev', '.next', 'skinId');\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(state, '.custom-style', '.hair', '.hair-style', '.prev', '.next', 'hairId');\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(state, '.custom-style', '.clothes', '.clothes-style', '.prev', '.next', 'clothesId');\r\n    console.log(state);\r\n\r\n    const custom = document.querySelector('.custom'),\r\n          main = document.querySelector('.main');\r\n\r\n    custom.classList.remove('animate__slideOutUp');\r\n    main.classList.remove('animate__slideInLeft');\r\n    \r\n    custom.classList.add('animate__slideInUp');\r\n    main.classList.add('animate__slideOutLeft');\r\n\r\n    setTimeout(() => {\r\n      main.style.display = 'none';\r\n      custom.style.display = 'flex';\r\n    }, 1000);\r\n\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);\n\n//# sourceURL=webpack://elections/./js/modules/reset.js?");

/***/ }),

/***/ "./js/modules/show-customization.js":
/*!******************************************!*\
  !*** ./js/modules/show-customization.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showCustomization() {\r\n\r\n  const btnModal = document.querySelector('#popup-btn'),\r\n        overlay = document.querySelector('.overlay'),\r\n        main = document.querySelector('.main'),\r\n        custom = document.querySelector('.custom');\r\n\r\n  btnModal.addEventListener('click', () => {\r\n\r\n    overlay.classList.add('animate__animated', 'animate__slideOutRight');\r\n\r\n    main.classList.add('animate__animated', 'animate__slideOutLeft');\r\n\r\n    for (let child of custom.children) {\r\n      child.style.display = 'block';\r\n    }\r\n\r\n    setTimeout(() => {\r\n      main.style.display = 'none';\r\n      overlay.style.display = 'none';\r\n      custom.style.display = 'flex';\r\n      \r\n      custom.classList.add('animate__animated', 'animate__slideInUp');\r\n    }, 1000);\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCustomization);\n\n//# sourceURL=webpack://elections/./js/modules/show-customization.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _change_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-construct */ \"./js/modules/change-construct.js\");\n\r\n\r\nfunction slider(state, customStyleSelector, sliderSelector, sliderColorSelector,  \r\n  prevSelector, nextSelector, attrName) {\r\n\r\n  const customStyle = document.querySelector(customStyleSelector),\r\n        slider = customStyle.querySelector(sliderSelector),\r\n        sliderPrev = slider.querySelector(prevSelector),\r\n        sliderNext = slider.querySelector(nextSelector),\r\n        sliderColor = slider.querySelectorAll(sliderColorSelector),\r\n        sex = state.sex;\r\n\r\n  let slideIndex = attrName === 'skinId' ? 1 : sex === 'Мужской' ? 1 : 4;\r\n  const slideEnd = attrName === 'skinId' ? sliderColor.length : sex === 'Мужской' ? 3 : 6;\r\n\r\n  sliderPrev.addEventListener('click', () => {\r\n\r\n    if (slideIndex === 1 || slideIndex === 4) {\r\n      slideIndex = slideEnd;\r\n    } else {\r\n      slideIndex -= 1;\r\n    }\r\n\r\n    showSkinSlide(slideIndex);\r\n\r\n    state[attrName] = slideIndex;\r\n\r\n  });\r\n  sliderNext.addEventListener('click', () => {\r\n\r\n    if (slideIndex === slideEnd) {\r\n      slideIndex = attrName === 'skinId' ? 1 : sex === 'Мужской' ? 1 : 4;\r\n    } else {\r\n      slideIndex += 1;\r\n    }\r\n\r\n    showSkinSlide(slideIndex);\r\n\r\n    state[attrName] = slideIndex;\r\n\r\n  });\r\n\r\n  function showSkinSlide(index = slideIndex) {\r\n\r\n    sliderColor.forEach(skin => {\r\n      skin.style.display = 'none';\r\n    });\r\n\r\n    sliderColor[index - 1].style.display = 'block';\r\n\r\n    state[attrName] = slideIndex;\r\n\r\n    (0,_change_construct__WEBPACK_IMPORTED_MODULE_0__.default)(state);\r\n\r\n  }\r\n\r\n  showSkinSlide();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://elections/./js/modules/slider.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_show_customization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/show-customization */ \"./js/modules/show-customization.js\");\n/* harmony import */ var _modules_init_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-state */ \"./js/modules/init-state.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_create_candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/create-candidate */ \"./js/modules/create-candidate.js\");\n/* harmony import */ var _modules_change_state_by_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/change-state-by-input */ \"./js/modules/change-state-by-input.js\");\n/* harmony import */ var _modules_honest_voting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/honest-voting */ \"./js/modules/honest-voting.js\");\n/* harmony import */ var _modules_crime_voting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/crime-voting */ \"./js/modules/crime-voting.js\");\n/* harmony import */ var _modules_reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/reset */ \"./js/modules/reset.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  (0,_modules_show_customization__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n  const cardState = {};\r\n  (0,_modules_init_state__WEBPACK_IMPORTED_MODULE_1__.default)(cardState);\r\n  console.log(cardState);\r\n\r\n  (0,_modules_change_state_by_input__WEBPACK_IMPORTED_MODULE_4__.default)(cardState, '.custom', '.custom-info', 'input:not([type=\"radio\"])', 'input[type=\"radio\"]', \r\n    'select', 'textarea');\r\n\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)(cardState, '.custom-style', '.skin', '.skin-color', '.prev', '.next', 'skinId');\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)(cardState, '.custom-style', '.hair', '.hair-style', '.prev', '.next', 'hairId');\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)(cardState, '.custom-style', '.clothes', '.clothes-style', '.prev', '.next', 'clothesId');\r\n\r\n  (0,_modules_create_candidate__WEBPACK_IMPORTED_MODULE_3__.default)(cardState, '#ready', '.construct', '.main-cards');\r\n\r\n  (0,_modules_honest_voting__WEBPACK_IMPORTED_MODULE_5__.default)('#voting', '.progress-bar', '.main-cards','.main-cards-item', '.result-count');\r\n  (0,_modules_crime_voting__WEBPACK_IMPORTED_MODULE_6__.default)('#crime', '.progress-bar', '.main-cards','.main-cards-item', '.result-count');\r\n\r\n  (0,_modules_reset__WEBPACK_IMPORTED_MODULE_7__.default)(cardState, '#reset', '.main-cards', '.main-cards-item', '.result-count', '.progress-bar');\r\n\r\n});\n\n//# sourceURL=webpack://elections/./js/script.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;