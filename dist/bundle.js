/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{

}

.content{
    height: 100vh;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root{\n\n}\n\n.content{\n    height: 100vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Utility/elementMaker.js":
/*!*************************************!*\
  !*** ./src/Utility/elementMaker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   elemCreator: () => (/* binding */ elemCreator)
/* harmony export */ });
const content=document.querySelector('.content')

function elemCreator( element, parentElement = document.body , elementContent = ' '  , elementAttributes = {}){

    if(element){

        let createdElement = document.createElement( element )

        for (const [key, value] of Object.entries(elementAttributes)) {

            // if(key == 'class') {

            //     for (let i = 0; i < value.length; i++) {
            //         const element = value[i];

            //         createdElement.classList.add(element)                
                    
            //     }


            // }
      
                createdElement.setAttribute(key, value)                
        }
      
        createdElement.innerHTML=elementContent
      
        parentElement.appendChild(createdElement) 
      
        return createdElement
    

    }

  
  
}



/***/ }),

/***/ "./src/Utility/objectDomify.js":
/*!*************************************!*\
  !*** ./src/Utility/objectDomify.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertMenuItemToDom: () => (/* binding */ convertMenuItemToDom)
/* harmony export */ });
/* harmony import */ var _elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementMaker.js */ "./src/Utility/elementMaker.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu.js */ "./src/menu.js");



function convertMenuItemToDom( menuItem ){

    let shawermaName = ''
    let ingredients = ''
    let shawermaPrice = ''

    let shawermaItemContainer = (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'div', (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuSection)() , `${shawermaName} ${ingredients} ${shawermaPrice} ` , {'class':['shawerm-box']} )

    shawermaName = (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'h1', shawermaItemContainer , menuItem.shawermaName )
    ingredients = (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'p', shawermaItemContainer , menuItem.ingredients )
    shawermaPrice = (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'span', shawermaItemContainer , menuItem.price )


}

 

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPage: () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/elementMaker.js */ "./src/Utility/elementMaker.js");


function contactPage(){
    
    let mainQuestion = ''
    let subQuestions = ''
    let quote = ''
    let country = ''
    let city = ''
    let area = ''
    let street = ''
    let phoneNumber = ''

    const contactSection = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'div', _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.content , `${mainQuestion} ${subQuestions} ${quote} ${country} ${city} ${area} ${street} ${phoneNumber}` , {'class':['contact-section']} )

    mainQuestion = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'h1', contactSection , `Contact us, Will you?` , {'class':['main-question']} )
    subQuestions = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'p', contactSection , `How's the service, staff, and shawerma, Be sure to let us know!` , {'class':['sub-question']} )
    quote = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'p', contactSection , `"Man has alqays been a curious one, one that has never feared to explore, try new things, and learn from failure, will you take a step forward and let us do so as well?" Naser Alghazawee` , {'class':['contact-quote']} )
    country = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'span', contactSection , `Turkey` , {'class':['restaurant-country']} )
    city = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'span', contactSection , `Istanbul` , {'class':['restaurant-city']} )
    area = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'span', contactSection , `Sultanahmet` , {'class':['restaurant-area']} )
    street = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'span', contactSection , `street 70` , {'class':['restaurant-street']} )
    phoneNumber = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'span', contactSection , `011 2322 0322-93` , {'class':['restaurant-phone-number']} )

}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/elementMaker.js */ "./src/Utility/elementMaker.js");


function footer(){

    let linkContainer = ''
    let githubIcon = ''
    let githubUserName = ''

    const footerSection = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'div', _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.content , `` , {'class':['footer-section']} )

    linkContainer = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'a', footerSection , `${githubIcon} ${githubUserName}` , {'class':['link-container']} )
    

    githubIcon = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'i', footerSection , `` , {'class':['fa-github fa-brands']} )
    githubUserName = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'p', footerSection , `Mofris` , {'class':['github-user-name']} )

    footerSection.appendChild(linkContainer)

}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/elementMaker.js */ "./src/Utility/elementMaker.js");


function homePage(){
    
    let title = ''
    let subtitle = ''
    let description = ''
    let deliveryButton = ''

    const homeSection = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'div', _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.content , `${title} ${subtitle} ${description} ${deliveryButton}` , {'class':['home-section']} )

    title = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'h1', homeSection , `MINI UNCLE SHAWERMA` , {'class':['restaurant-title']} )
    subtitle = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'h2', homeSection , `SHAWERMA ON ANOTHER LEVEL` , {'class':['restaurant-sutitle']} )
    description = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'p', homeSection , `Has Shawerma ever had a lasting impact on you, well then you're in the right place! Mini Uncle Shawerma (MUS) has had a profound impact on the happiness of kids since 1901, so what are you wating for!` , {'class':['restaurant-description']} )
    deliveryButton = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'button', homeSection , `Delivery Service` , {'class':['deleviry-button']} )

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPage: () => (/* binding */ menuPage),
/* harmony export */   menuSection: () => (/* binding */ menuSection)
/* harmony export */ });
/* harmony import */ var _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/elementMaker.js */ "./src/Utility/elementMaker.js");
/* harmony import */ var _Utility_objectDomify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/objectDomify.js */ "./src/Utility/objectDomify.js");



class menuItem{

    constructor( shawermaName , ingredients , priceInDollars ) {

        this.shawermaName = shawermaName
        this.ingredients = ingredients
        this.price = priceInDollars

    }

    callConvertMenutoDom() {
        return (0,_Utility_objectDomify_js__WEBPACK_IMPORTED_MODULE_1__.convertMenuItemToDom)(this)
    }

}

function menuSection(){
    if(!document.body.contains(document.querySelector('.menu-section'))) {

        return (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( 'div', _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.content , '' , {'class':['menu-section']} )

    }

    else {

        return document.querySelector('.menu-section')
    }
}

function menuPage(){

    const menuBoard = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)( '', _Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.content , ...[
        new menuItem('Chicken shawerma','Arabic flat bread, 2lb Chicken gus, 3 Sliced Cucumbers, Finely Diced Tomatoes, Extra Mayonaise with Ketchup, and of course the Special Ingrediant: Motivation!','1.50 JD').callConvertMenutoDom()

        , new menuItem('Meet shawerma','Arabic flat bread, 2lb Meat gus, 1 Sliced cucumber, Spicey red Pepper Sauce, Some ketchonaise, and of course the special ingrediant: Adaptability!','1.50 JD').callConvertMenutoDom()

        , new menuItem('Chicken shawerma Assaj','Arabic flat bread, 2lb Chicken (Assaj), A hot Red Pepper, Spicey red Pepper Sauce, Well cooked Onions, and of course the special ingrediant: Strength!','2.50 JD').callConvertMenutoDom()

        , new menuItem('Meat shawerma Assaj','Arabic flat bread, 2lb Meat (Assaj), A hot Red Pepper, Spicey red Pepper Sauce, Well cooked Onions, and of course the special ingrediant: Tenacity!','2.50 JD').callConvertMenutoDom()

        , new menuItem('Kebab shawerma','Arabic Hamam bread, 3lb Meat Kebab , Extreme amounts of ketchup, Grated cucumbers, Chopped onions and tomatoes, and of course the special ingrediant: Efficiency!','3.00 JD').callConvertMenutoDom()

        , new menuItem('Shish tawook shawerma','Arabic Hamam bread, 3lb Shish tawook (chicken) , Moderate Servings of Matonaise, Grated cucumbers, Chopped onions and tomatoes, and of course the special ingrediant: Resilience!','3.50 JD').callConvertMenutoDom()

    ] , {'class':['menu-section']} )

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

    let homeListItem = ''
    let menuListItem = ''
    let contactListItem = ''

    const nav = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('nav',_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.content)
    const ul = (0,_Utility_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elemCreator)('ul',nav,`${homeListItem} ${menuListItem} ${contactListItem}`)

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");







(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homePage)()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.menuPage)()
;(0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPage)()
;(0,_footer_js__WEBPACK_IMPORTED_MODULE_5__.footer)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDZDtBQUNpQjtBQUNNO0FBQ047QUFDQTs7QUFFckMsK0NBQU07QUFDTixtREFBUTtBQUNSLG1EQUFRO0FBQ1IseURBQVc7QUFDWCxtREFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvVXRpbGl0eS9lbGVtZW50TWFrZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvVXRpbGl0eS9vYmplY3REb21pZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG5cbn1cblxuLmNvbnRlbnR7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcblxcbn1cXG5cXG4uY29udGVudHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5mdW5jdGlvbiBlbGVtQ3JlYXRvciggZWxlbWVudCwgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHkgLCBlbGVtZW50Q29udGVudCA9ICcgJyAgLCBlbGVtZW50QXR0cmlidXRlcyA9IHt9KXtcblxuICAgIGlmKGVsZW1lbnQpe1xuXG4gICAgICAgIGxldCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIGVsZW1lbnQgKVxuXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRBdHRyaWJ1dGVzKSkge1xuXG4gICAgICAgICAgICAvLyBpZihrZXkgPT0gJ2NsYXNzJykge1xuXG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBlbGVtZW50ID0gdmFsdWVbaV07XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50KSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LmlubmVySFRNTD1lbGVtZW50Q29udGVudFxuICAgICAgXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlZEVsZW1lbnQpIFxuICAgICAgXG4gICAgICAgIHJldHVybiBjcmVhdGVkRWxlbWVudFxuICAgIFxuXG4gICAgfVxuXG4gIFxuICBcbn1cblxuZXhwb3J0IHtlbGVtQ3JlYXRvciwgY29udGVudH0iLCJpbXBvcnQgeyBlbGVtQ3JlYXRvciwgY29udGVudCB9IGZyb20gJy4vZWxlbWVudE1ha2VyLmpzJ1xuaW1wb3J0IHsgbWVudVNlY3Rpb24gfSBmcm9tICcuLi9tZW51LmpzJ1xuXG5mdW5jdGlvbiBjb252ZXJ0TWVudUl0ZW1Ub0RvbSggbWVudUl0ZW0gKXtcblxuICAgIGxldCBzaGF3ZXJtYU5hbWUgPSAnJ1xuICAgIGxldCBpbmdyZWRpZW50cyA9ICcnXG4gICAgbGV0IHNoYXdlcm1hUHJpY2UgPSAnJ1xuXG4gICAgbGV0IHNoYXdlcm1hSXRlbUNvbnRhaW5lciA9IGVsZW1DcmVhdG9yKCAnZGl2JywgbWVudVNlY3Rpb24oKSAsIGAke3NoYXdlcm1hTmFtZX0gJHtpbmdyZWRpZW50c30gJHtzaGF3ZXJtYVByaWNlfSBgICwgeydjbGFzcyc6WydzaGF3ZXJtLWJveCddfSApXG5cbiAgICBzaGF3ZXJtYU5hbWUgPSBlbGVtQ3JlYXRvciggJ2gxJywgc2hhd2VybWFJdGVtQ29udGFpbmVyICwgbWVudUl0ZW0uc2hhd2VybWFOYW1lIClcbiAgICBpbmdyZWRpZW50cyA9IGVsZW1DcmVhdG9yKCAncCcsIHNoYXdlcm1hSXRlbUNvbnRhaW5lciAsIG1lbnVJdGVtLmluZ3JlZGllbnRzIClcbiAgICBzaGF3ZXJtYVByaWNlID0gZWxlbUNyZWF0b3IoICdzcGFuJywgc2hhd2VybWFJdGVtQ29udGFpbmVyICwgbWVudUl0ZW0ucHJpY2UgKVxuXG5cbn1cblxuZXhwb3J0IHtjb252ZXJ0TWVudUl0ZW1Ub0RvbX0gIiwiaW1wb3J0IHtlbGVtQ3JlYXRvciwgY29udGVudH0gZnJvbSAnLi9VdGlsaXR5L2VsZW1lbnRNYWtlci5qcydcblxuZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgICBcbiAgICBsZXQgbWFpblF1ZXN0aW9uID0gJydcbiAgICBsZXQgc3ViUXVlc3Rpb25zID0gJydcbiAgICBsZXQgcXVvdGUgPSAnJ1xuICAgIGxldCBjb3VudHJ5ID0gJydcbiAgICBsZXQgY2l0eSA9ICcnXG4gICAgbGV0IGFyZWEgPSAnJ1xuICAgIGxldCBzdHJlZXQgPSAnJ1xuICAgIGxldCBwaG9uZU51bWJlciA9ICcnXG5cbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGVsZW1DcmVhdG9yKCAnZGl2JywgY29udGVudCAsIGAke21haW5RdWVzdGlvbn0gJHtzdWJRdWVzdGlvbnN9ICR7cXVvdGV9ICR7Y291bnRyeX0gJHtjaXR5fSAke2FyZWF9ICR7c3RyZWV0fSAke3Bob25lTnVtYmVyfWAgLCB7J2NsYXNzJzpbJ2NvbnRhY3Qtc2VjdGlvbiddfSApXG5cbiAgICBtYWluUXVlc3Rpb24gPSBlbGVtQ3JlYXRvciggJ2gxJywgY29udGFjdFNlY3Rpb24gLCBgQ29udGFjdCB1cywgV2lsbCB5b3U/YCAsIHsnY2xhc3MnOlsnbWFpbi1xdWVzdGlvbiddfSApXG4gICAgc3ViUXVlc3Rpb25zID0gZWxlbUNyZWF0b3IoICdwJywgY29udGFjdFNlY3Rpb24gLCBgSG93J3MgdGhlIHNlcnZpY2UsIHN0YWZmLCBhbmQgc2hhd2VybWEsIEJlIHN1cmUgdG8gbGV0IHVzIGtub3chYCAsIHsnY2xhc3MnOlsnc3ViLXF1ZXN0aW9uJ119IClcbiAgICBxdW90ZSA9IGVsZW1DcmVhdG9yKCAncCcsIGNvbnRhY3RTZWN0aW9uICwgYFwiTWFuIGhhcyBhbHFheXMgYmVlbiBhIGN1cmlvdXMgb25lLCBvbmUgdGhhdCBoYXMgbmV2ZXIgZmVhcmVkIHRvIGV4cGxvcmUsIHRyeSBuZXcgdGhpbmdzLCBhbmQgbGVhcm4gZnJvbSBmYWlsdXJlLCB3aWxsIHlvdSB0YWtlIGEgc3RlcCBmb3J3YXJkIGFuZCBsZXQgdXMgZG8gc28gYXMgd2VsbD9cIiBOYXNlciBBbGdoYXphd2VlYCAsIHsnY2xhc3MnOlsnY29udGFjdC1xdW90ZSddfSApXG4gICAgY291bnRyeSA9IGVsZW1DcmVhdG9yKCAnc3BhbicsIGNvbnRhY3RTZWN0aW9uICwgYFR1cmtleWAgLCB7J2NsYXNzJzpbJ3Jlc3RhdXJhbnQtY291bnRyeSddfSApXG4gICAgY2l0eSA9IGVsZW1DcmVhdG9yKCAnc3BhbicsIGNvbnRhY3RTZWN0aW9uICwgYElzdGFuYnVsYCAsIHsnY2xhc3MnOlsncmVzdGF1cmFudC1jaXR5J119IClcbiAgICBhcmVhID0gZWxlbUNyZWF0b3IoICdzcGFuJywgY29udGFjdFNlY3Rpb24gLCBgU3VsdGFuYWhtZXRgICwgeydjbGFzcyc6WydyZXN0YXVyYW50LWFyZWEnXX0gKVxuICAgIHN0cmVldCA9IGVsZW1DcmVhdG9yKCAnc3BhbicsIGNvbnRhY3RTZWN0aW9uICwgYHN0cmVldCA3MGAgLCB7J2NsYXNzJzpbJ3Jlc3RhdXJhbnQtc3RyZWV0J119IClcbiAgICBwaG9uZU51bWJlciA9IGVsZW1DcmVhdG9yKCAnc3BhbicsIGNvbnRhY3RTZWN0aW9uICwgYDAxMSAyMzIyIDAzMjItOTNgICwgeydjbGFzcyc6WydyZXN0YXVyYW50LXBob25lLW51bWJlciddfSApXG5cbn1cblxuZXhwb3J0IHtjb250YWN0UGFnZX0iLCJpbXBvcnQgeyBlbGVtQ3JlYXRvciwgY29udGVudCB9IGZyb20gJy4vVXRpbGl0eS9lbGVtZW50TWFrZXIuanMnXG5cbmZ1bmN0aW9uIGZvb3Rlcigpe1xuXG4gICAgbGV0IGxpbmtDb250YWluZXIgPSAnJ1xuICAgIGxldCBnaXRodWJJY29uID0gJydcbiAgICBsZXQgZ2l0aHViVXNlck5hbWUgPSAnJ1xuXG4gICAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IGVsZW1DcmVhdG9yKCAnZGl2JywgY29udGVudCAsIGBgICwgeydjbGFzcyc6Wydmb290ZXItc2VjdGlvbiddfSApXG5cbiAgICBsaW5rQ29udGFpbmVyID0gZWxlbUNyZWF0b3IoICdhJywgZm9vdGVyU2VjdGlvbiAsIGAke2dpdGh1Ykljb259ICR7Z2l0aHViVXNlck5hbWV9YCAsIHsnY2xhc3MnOlsnbGluay1jb250YWluZXInXX0gKVxuICAgIFxuXG4gICAgZ2l0aHViSWNvbiA9IGVsZW1DcmVhdG9yKCAnaScsIGZvb3RlclNlY3Rpb24gLCBgYCAsIHsnY2xhc3MnOlsnZmEtZ2l0aHViIGZhLWJyYW5kcyddfSApXG4gICAgZ2l0aHViVXNlck5hbWUgPSBlbGVtQ3JlYXRvciggJ3AnLCBmb290ZXJTZWN0aW9uICwgYE1vZnJpc2AgLCB7J2NsYXNzJzpbJ2dpdGh1Yi11c2VyLW5hbWUnXX0gKVxuXG4gICAgZm9vdGVyU2VjdGlvbi5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKVxuXG59XG5cbmV4cG9ydCB7Zm9vdGVyfSIsImltcG9ydCB7ZWxlbUNyZWF0b3IsIGNvbnRlbnR9IGZyb20gJy4vVXRpbGl0eS9lbGVtZW50TWFrZXIuanMnXG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gICAgXG4gICAgbGV0IHRpdGxlID0gJydcbiAgICBsZXQgc3VidGl0bGUgPSAnJ1xuICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnXG4gICAgbGV0IGRlbGl2ZXJ5QnV0dG9uID0gJydcblxuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZWxlbUNyZWF0b3IoICdkaXYnLCBjb250ZW50ICwgYCR7dGl0bGV9ICR7c3VidGl0bGV9ICR7ZGVzY3JpcHRpb259ICR7ZGVsaXZlcnlCdXR0b259YCAsIHsnY2xhc3MnOlsnaG9tZS1zZWN0aW9uJ119IClcblxuICAgIHRpdGxlID0gZWxlbUNyZWF0b3IoICdoMScsIGhvbWVTZWN0aW9uICwgYE1JTkkgVU5DTEUgU0hBV0VSTUFgICwgeydjbGFzcyc6WydyZXN0YXVyYW50LXRpdGxlJ119IClcbiAgICBzdWJ0aXRsZSA9IGVsZW1DcmVhdG9yKCAnaDInLCBob21lU2VjdGlvbiAsIGBTSEFXRVJNQSBPTiBBTk9USEVSIExFVkVMYCAsIHsnY2xhc3MnOlsncmVzdGF1cmFudC1zdXRpdGxlJ119IClcbiAgICBkZXNjcmlwdGlvbiA9IGVsZW1DcmVhdG9yKCAncCcsIGhvbWVTZWN0aW9uICwgYEhhcyBTaGF3ZXJtYSBldmVyIGhhZCBhIGxhc3RpbmcgaW1wYWN0IG9uIHlvdSwgd2VsbCB0aGVuIHlvdSdyZSBpbiB0aGUgcmlnaHQgcGxhY2UhIE1pbmkgVW5jbGUgU2hhd2VybWEgKE1VUykgaGFzIGhhZCBhIHByb2ZvdW5kIGltcGFjdCBvbiB0aGUgaGFwcGluZXNzIG9mIGtpZHMgc2luY2UgMTkwMSwgc28gd2hhdCBhcmUgeW91IHdhdGluZyBmb3IhYCAsIHsnY2xhc3MnOlsncmVzdGF1cmFudC1kZXNjcmlwdGlvbiddfSApXG4gICAgZGVsaXZlcnlCdXR0b24gPSBlbGVtQ3JlYXRvciggJ2J1dHRvbicsIGhvbWVTZWN0aW9uICwgYERlbGl2ZXJ5IFNlcnZpY2VgICwgeydjbGFzcyc6WydkZWxldmlyeS1idXR0b24nXX0gKVxuXG59XG5cbmV4cG9ydCB7aG9tZVBhZ2V9IiwiaW1wb3J0IHsgZWxlbUNyZWF0b3IsIGNvbnRlbnQgfSBmcm9tICcuL1V0aWxpdHkvZWxlbWVudE1ha2VyLmpzJ1xuaW1wb3J0IHsgY29udmVydE1lbnVJdGVtVG9Eb20gfSBmcm9tICcuL1V0aWxpdHkvb2JqZWN0RG9taWZ5LmpzJ1xuXG5jbGFzcyBtZW51SXRlbXtcblxuICAgIGNvbnN0cnVjdG9yKCBzaGF3ZXJtYU5hbWUgLCBpbmdyZWRpZW50cyAsIHByaWNlSW5Eb2xsYXJzICkge1xuXG4gICAgICAgIHRoaXMuc2hhd2VybWFOYW1lID0gc2hhd2VybWFOYW1lXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50c1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2VJbkRvbGxhcnNcblxuICAgIH1cblxuICAgIGNhbGxDb252ZXJ0TWVudXRvRG9tKCkge1xuICAgICAgICByZXR1cm4gY29udmVydE1lbnVJdGVtVG9Eb20odGhpcylcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbWVudVNlY3Rpb24oKXtcbiAgICBpZighZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zZWN0aW9uJykpKSB7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1DcmVhdG9yKCAnZGl2JywgY29udGVudCAsICcnICwgeydjbGFzcyc6WydtZW51LXNlY3Rpb24nXX0gKVxuXG4gICAgfVxuXG4gICAgZWxzZSB7XG5cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNlY3Rpb24nKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVudVBhZ2UoKXtcblxuICAgIGNvbnN0IG1lbnVCb2FyZCA9IGVsZW1DcmVhdG9yKCAnJywgY29udGVudCAsIC4uLltcbiAgICAgICAgbmV3IG1lbnVJdGVtKCdDaGlja2VuIHNoYXdlcm1hJywnQXJhYmljIGZsYXQgYnJlYWQsIDJsYiBDaGlja2VuIGd1cywgMyBTbGljZWQgQ3VjdW1iZXJzLCBGaW5lbHkgRGljZWQgVG9tYXRvZXMsIEV4dHJhIE1heW9uYWlzZSB3aXRoIEtldGNodXAsIGFuZCBvZiBjb3Vyc2UgdGhlIFNwZWNpYWwgSW5ncmVkaWFudDogTW90aXZhdGlvbiEnLCcxLjUwIEpEJykuY2FsbENvbnZlcnRNZW51dG9Eb20oKVxuXG4gICAgICAgICwgbmV3IG1lbnVJdGVtKCdNZWV0IHNoYXdlcm1hJywnQXJhYmljIGZsYXQgYnJlYWQsIDJsYiBNZWF0IGd1cywgMSBTbGljZWQgY3VjdW1iZXIsIFNwaWNleSByZWQgUGVwcGVyIFNhdWNlLCBTb21lIGtldGNob25haXNlLCBhbmQgb2YgY291cnNlIHRoZSBzcGVjaWFsIGluZ3JlZGlhbnQ6IEFkYXB0YWJpbGl0eSEnLCcxLjUwIEpEJykuY2FsbENvbnZlcnRNZW51dG9Eb20oKVxuXG4gICAgICAgICwgbmV3IG1lbnVJdGVtKCdDaGlja2VuIHNoYXdlcm1hIEFzc2FqJywnQXJhYmljIGZsYXQgYnJlYWQsIDJsYiBDaGlja2VuIChBc3NhaiksIEEgaG90IFJlZCBQZXBwZXIsIFNwaWNleSByZWQgUGVwcGVyIFNhdWNlLCBXZWxsIGNvb2tlZCBPbmlvbnMsIGFuZCBvZiBjb3Vyc2UgdGhlIHNwZWNpYWwgaW5ncmVkaWFudDogU3RyZW5ndGghJywnMi41MCBKRCcpLmNhbGxDb252ZXJ0TWVudXRvRG9tKClcblxuICAgICAgICAsIG5ldyBtZW51SXRlbSgnTWVhdCBzaGF3ZXJtYSBBc3NhaicsJ0FyYWJpYyBmbGF0IGJyZWFkLCAybGIgTWVhdCAoQXNzYWopLCBBIGhvdCBSZWQgUGVwcGVyLCBTcGljZXkgcmVkIFBlcHBlciBTYXVjZSwgV2VsbCBjb29rZWQgT25pb25zLCBhbmQgb2YgY291cnNlIHRoZSBzcGVjaWFsIGluZ3JlZGlhbnQ6IFRlbmFjaXR5IScsJzIuNTAgSkQnKS5jYWxsQ29udmVydE1lbnV0b0RvbSgpXG5cbiAgICAgICAgLCBuZXcgbWVudUl0ZW0oJ0tlYmFiIHNoYXdlcm1hJywnQXJhYmljIEhhbWFtIGJyZWFkLCAzbGIgTWVhdCBLZWJhYiAsIEV4dHJlbWUgYW1vdW50cyBvZiBrZXRjaHVwLCBHcmF0ZWQgY3VjdW1iZXJzLCBDaG9wcGVkIG9uaW9ucyBhbmQgdG9tYXRvZXMsIGFuZCBvZiBjb3Vyc2UgdGhlIHNwZWNpYWwgaW5ncmVkaWFudDogRWZmaWNpZW5jeSEnLCczLjAwIEpEJykuY2FsbENvbnZlcnRNZW51dG9Eb20oKVxuXG4gICAgICAgICwgbmV3IG1lbnVJdGVtKCdTaGlzaCB0YXdvb2sgc2hhd2VybWEnLCdBcmFiaWMgSGFtYW0gYnJlYWQsIDNsYiBTaGlzaCB0YXdvb2sgKGNoaWNrZW4pICwgTW9kZXJhdGUgU2VydmluZ3Mgb2YgTWF0b25haXNlLCBHcmF0ZWQgY3VjdW1iZXJzLCBDaG9wcGVkIG9uaW9ucyBhbmQgdG9tYXRvZXMsIGFuZCBvZiBjb3Vyc2UgdGhlIHNwZWNpYWwgaW5ncmVkaWFudDogUmVzaWxpZW5jZSEnLCczLjUwIEpEJykuY2FsbENvbnZlcnRNZW51dG9Eb20oKVxuXG4gICAgXSAsIHsnY2xhc3MnOlsnbWVudS1zZWN0aW9uJ119IClcblxufVxuXG5leHBvcnQge21lbnVQYWdlLCBtZW51U2VjdGlvbn0iLCJpbXBvcnQge2VsZW1DcmVhdG9yLCBjb250ZW50fSBmcm9tICcuL1V0aWxpdHkvZWxlbWVudE1ha2VyLmpzJ1xuXG5mdW5jdGlvbiBuYXZCYXIoKXtcblxuICAgIGxldCBob21lTGlzdEl0ZW0gPSAnJ1xuICAgIGxldCBtZW51TGlzdEl0ZW0gPSAnJ1xuICAgIGxldCBjb250YWN0TGlzdEl0ZW0gPSAnJ1xuXG4gICAgY29uc3QgbmF2ID0gZWxlbUNyZWF0b3IoJ25hdicsY29udGVudClcbiAgICBjb25zdCB1bCA9IGVsZW1DcmVhdG9yKCd1bCcsbmF2LGAke2hvbWVMaXN0SXRlbX0gJHttZW51TGlzdEl0ZW19ICR7Y29udGFjdExpc3RJdGVtfWApXG5cbiAgICBob21lTGlzdEl0ZW0gPSBlbGVtQ3JlYXRvcignbGknLHVsLGBIb21lYCx7J2RhdGEtcGFnZV9tb2R1bGUnOlsnaG9tZSddfSlcbiAgICBtZW51TGlzdEl0ZW0gPSBlbGVtQ3JlYXRvcignbGknLHVsLGBNZW51YCx7J2RhdGEtcGFnZV9tb2R1bGUnOlsnbWVudSddfSlcbiAgICBjb250YWN0TGlzdEl0ZW0gPSBlbGVtQ3JlYXRvcignbGknLHVsLGBDb250YWN0YCx7J2RhdGEtcGFnZV9tb2R1bGUnOlsnY29udGFjdCddfSlcblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbn1cblxuZXhwb3J0IHtuYXZCYXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbmF2QmFyIH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyLmpzXCI7XG5cbm5hdkJhcigpXG5ob21lUGFnZSgpXG5tZW51UGFnZSgpXG5jb250YWN0UGFnZSgpXG5mb290ZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==