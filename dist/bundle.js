/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Utility/elementMaker.js":
/*!*************************************!*\
  !*** ./src/Utility/elementMaker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elemCreator: () => (/* binding */ elemCreator)
/* harmony export */ });
function elemCreator( element, parentElement = document.body , elementContent = ' '  , elementAttributes = {}){

    let createdElement = document.createElement( element )
  
    for (const [key, value] of Object.entries(elementAttributes)) {
        for (let i = 0 ; i < value.length ; i++) {
  
            const element = value[i];
  
            createdElement.setAttribute(key, element)
            
        }
    }
  
    createdElement.innerHTML=elementContent
  
    parentElement.appendChild(createdElement) 
  
    return createdElement
  
}



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navBar: () => (/* binding */ navBar)
/* harmony export */ });
/* harmony import */ var _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/elementMaker.js */ "./src/Utility/elementMaker.js");


function navBar(){
    const content=document.querySelector('.content')

    let homeListItem;
    let menuListItem;
    let contactListItem;

    const nav = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('nav',content)
    const ul = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('ul',nav,`${homeListItem||''} ${menuListItem||''} ${contactListItem||''}`)

    homeListItem = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('li',ul,`Home`,{'data-page_module':['home']})
    menuListItem = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('li',ul,`Menu`,{'data-page_module':['menu']})
    contactListItem = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('li',ul,`Contact`,{'data-page_module':['contact']})

    nav.appendChild(ul)
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");


(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkdBQTZHOztBQUU3RztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnFEOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IscUVBQVc7QUFDM0IsZUFBZSxxRUFBVyxhQUFhLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQjs7QUFFbkcsbUJBQW1CLHFFQUFXLGlCQUFpQiw0QkFBNEI7QUFDM0UsbUJBQW1CLHFFQUFXLGlCQUFpQiw0QkFBNEI7QUFDM0Usc0JBQXNCLHFFQUFXLG9CQUFvQiwrQkFBK0I7O0FBRXBGO0FBQ0E7Ozs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDLCtDQUFNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9VdGlsaXR5L2VsZW1lbnRNYWtlci5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlbGVtQ3JlYXRvciggZWxlbWVudCwgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHkgLCBlbGVtZW50Q29udGVudCA9ICcgJyAgLCBlbGVtZW50QXR0cmlidXRlcyA9IHt9KXtcblxuICAgIGxldCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIGVsZW1lbnQgKVxuICBcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlbGVtZW50QXR0cmlidXRlcykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdmFsdWUubGVuZ3RoIDsgaSsrKSB7XG4gIFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHZhbHVlW2ldO1xuICBcbiAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGVsZW1lbnQpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgY3JlYXRlZEVsZW1lbnQuaW5uZXJIVE1MPWVsZW1lbnRDb250ZW50XG4gIFxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlZEVsZW1lbnQpIFxuICBcbiAgICByZXR1cm4gY3JlYXRlZEVsZW1lbnRcbiAgXG59XG5cbmV4cG9ydCB7ZWxlbUNyZWF0b3J9IiwiaW1wb3J0IHtlbGVtQ3JlYXRvcn0gZnJvbSAnLi9VdGlsaXR5L2VsZW1lbnRNYWtlci5qcydcblxuZnVuY3Rpb24gbmF2QmFyKCl7XG4gICAgY29uc3QgY29udGVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICBsZXQgaG9tZUxpc3RJdGVtO1xuICAgIGxldCBtZW51TGlzdEl0ZW07XG4gICAgbGV0IGNvbnRhY3RMaXN0SXRlbTtcblxuICAgIGNvbnN0IG5hdiA9IGVsZW1DcmVhdG9yKCduYXYnLGNvbnRlbnQpXG4gICAgY29uc3QgdWwgPSBlbGVtQ3JlYXRvcigndWwnLG5hdixgJHtob21lTGlzdEl0ZW18fCcnfSAke21lbnVMaXN0SXRlbXx8Jyd9ICR7Y29udGFjdExpc3RJdGVtfHwnJ31gKVxuXG4gICAgaG9tZUxpc3RJdGVtID0gZWxlbUNyZWF0b3IoJ2xpJyx1bCxgSG9tZWAseydkYXRhLXBhZ2VfbW9kdWxlJzpbJ2hvbWUnXX0pXG4gICAgbWVudUxpc3RJdGVtID0gZWxlbUNyZWF0b3IoJ2xpJyx1bCxgTWVudWAseydkYXRhLXBhZ2VfbW9kdWxlJzpbJ21lbnUnXX0pXG4gICAgY29udGFjdExpc3RJdGVtID0gZWxlbUNyZWF0b3IoJ2xpJyx1bCxgQ29udGFjdGAseydkYXRhLXBhZ2VfbW9kdWxlJzpbJ2NvbnRhY3QnXX0pXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpXG59XG5cbmV4cG9ydCB7bmF2QmFyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmF2QmFyIH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5cbm5hdkJhcigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9