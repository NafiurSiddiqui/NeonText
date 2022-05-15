// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/globalVariables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globarPrice = exports.globalVar = exports.default = void 0;
var uiNav = document.querySelectorAll(".ui-input-nav-list");
var uiInputText = document.querySelector(".ui-input-form.text");
var uiInputFont = document.querySelector(".ui-input-form.fontFamily");
var uiInputColor = document.querySelector(".ui-input-form.color");
var uiForm = document.querySelectorAll(".ui-input-form");
var display = document.querySelector(".ui-display-userText-text");
var displayWrapper = document.querySelector(".ui-display-userText-wrapper");
var canva = document.getElementById("displayText");
var ctx = canva.getContext("2d"); //-----------measurement bars

var widthContainer = document.querySelector(".measurementBar-container-bottom");
var barWidth = document.querySelector(".measurementBar-width");
var barWidthSize = document.querySelector(".measurementBar-width-length");
var heightContainer = document.querySelector(".measurementBar-height-wrapper");
var barHeight = document.querySelector(".measurementBar-height");
var barHeightSize = document.querySelector(".measurementBar-height-length"); //font family

var fontBtn = document.querySelectorAll(".ui-input-fontFamily-list");
var fontBtnsBlack = document.querySelectorAll(".ui-input-fontFamily-list__image");
var fontBtnsWhite = document.querySelectorAll(".ui-input-fontFamily-list__imageWhite"); //neonSwitch

var neonSwitch = document.getElementById("neonSwitch"); //colorList

var colorList = document.querySelectorAll(".input-color-list"); //exporting these as globalVariable

var globalVar = {
  uiNav: uiNav,
  uiInputText: uiInputText,
  uiInputFont: uiInputFont,
  uiInputColor: uiInputColor,
  uiForm: uiForm,
  display: display,
  displayWrapper: displayWrapper,
  canva: canva,
  ctx: ctx,
  widthContainer: widthContainer,
  barWidth: barWidth,
  barWidthSize: barWidthSize,
  heightContainer: heightContainer,
  barHeight: barHeight,
  barHeightSize: barHeightSize,
  neonSwitch: neonSwitch,
  colorList: colorList
};
exports.globalVar = globalVar;
var globalFonts = {
  fontBtn: fontBtn,
  fontBtnsWhite: fontBtnsWhite,
  fontBtnsBlack: fontBtnsBlack
};
var _default = globalFonts; //--------------Pricing cards

exports.default = _default;
var priceSmall = document.querySelector(".ui-price-card__small-price");
var priceSmallLength = document.querySelector(".ui-price-card__small-length");
var priceSmallHeight = document.querySelector(".ui-price-card__small-height");
var priceMedium = document.querySelector(".ui-price-card__medium-price");
var priceMediumLength = document.querySelector(".ui-price-card__medium-length");
var priceMediumHeight = document.querySelector(".ui-price-card__medium-height");
var priceLarge = document.querySelector(".ui-price-card__large-price");
var priceLargeLength = document.querySelector(".ui-price-card__large-length");
var priceLargeHeight = document.querySelector(".ui-price-card__large-height");
var globarPrice = {
  priceSmall: priceSmall,
  priceSmallLength: priceSmallLength,
  priceSmallHeight: priceSmallHeight,
  priceMedium: priceMedium,
  priceMediumLength: priceMediumLength,
  priceMediumHeight: priceMediumHeight,
  priceLarge: priceLarge,
  priceLargeHeight: priceLargeHeight,
  priceLargeLength: priceLargeLength
};
exports.globarPrice = globarPrice;
},{}],"src/js/globalFuntions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDimension = calculateDimension;
exports.calculatePricing = calculatePricing;
exports.calculation = void 0;
exports.clearCanvas = clearCanvas;
exports.default = setDisplay;
exports.fontBarCondition = void 0;
exports.measureBars = measureBars;
exports.showBars = showBars;
exports.writeOnCanvas = writeOnCanvas;
exports.writeOnCanvasWithFont = writeOnCanvasWithFont;

var _globalVariables = require("./globalVariables");

var heightContainer = _globalVariables.globalVar.heightContainer,
    widthContainer = _globalVariables.globalVar.widthContainer;
var priceSmall = _globalVariables.globarPrice.priceSmall,
    priceSmallLength = _globalVariables.globarPrice.priceSmallLength,
    priceSmallHeight = _globalVariables.globarPrice.priceSmallHeight,
    priceMedium = _globalVariables.globarPrice.priceMedium,
    priceMediumLength = _globalVariables.globarPrice.priceMediumLength,
    priceMediumHeight = _globalVariables.globarPrice.priceMediumHeight,
    priceLarge = _globalVariables.globarPrice.priceLarge,
    priceLargeHeight = _globalVariables.globarPrice.priceLargeHeight,
    priceLargeLength = _globalVariables.globarPrice.priceLargeLength;

function setDisplay(el) {
  var on = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (on === true) {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }
}

function clearCanvas(ctx, canva) {
  ctx.clearRect(0, 0, canva.width, canva.height);
}

function writeOnCanvas(ctx, userText) {
  ctx.fillText(userText, 0, 50);
}

function writeOnCanvasWithFont(ctx, userText, font) {
  ctx.font = "4rem ".concat(font);
  ctx.fillStyle = "White";
  ctx.fillText(userText, 0, 50);
}

function measureBars(display, metrics, textLength, barWidth, barWidthSize, barHeight, barHeightSize) {
  //width
  var displayWidth = getComputedStyle(display).width;
  var displayString = displayWidth.slice(0, -2);
  var displaySize = Math.ceil(+displayString); //height

  var height = Math.floor(metrics.actualBoundingBoxAscent) + Math.floor(metrics.actualBoundingBoxDescent);
  var length = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight; // let height2 = getComputedStyle(display).height;
  // console.log(`Height: ${height2}`);
  //measurement bars

  barWidth.style.width = "".concat(displaySize, "px");
  var widthSize = barWidthSize.textContent = "".concat(textLength * 2, " CM");
  barHeight.style.height = "".concat(height, "px");
  var heightSize = barHeightSize.textContent = "".concat(Math.floor(height), "Cm");
  return [widthSize, heightSize];
}

function showBars(show) {
  if (show === true) {
    setDisplay(heightContainer, true);
    setDisplay(widthContainer, true);
  } else {
    setDisplay(heightContainer, false);
    setDisplay(widthContainer, false);
  }
}

function calculatePricing(textLength) {
  priceSmall.textContent = "$".concat(textLength * 80);
  priceMedium.textContent = "$".concat(textLength * 95);
  priceLarge.textContent = "$".concat(textLength * 105);
}

function calculateDimension(width, height) {
  priceSmallLength.textContent = "".concat(width, " Cm");
  priceSmallHeight.textContent = "".concat(height, " Cm");
  priceMediumLength.textContent = "".concat(parseInt(width * 2), " Cm");
  priceMediumHeight.textContent = "".concat(parseInt(height * 1.1), " Cm");
  priceLargeLength.textContent = "".concat(width * 3, " Cm");
  priceLargeHeight.textContent = "".concat(parseInt(height * 1.3), " Cm");
}

var calculation = function calculation(display, metrics, textLength, barWidth, barWidthSize, barHeight, barHeightSize) {
  var cardMeasures = measureBars(display, metrics, textLength, barWidth, barWidthSize, barHeight, barHeightSize);
  showBars(true);
  var width = parseInt(cardMeasures[0]);
  var height = parseInt(cardMeasures[1]); // console.log(width, height);

  calculatePricing(textLength);
  calculateDimension(width, height);
};

exports.calculation = calculation;

var fontBarCondition = function fontBarCondition(textLength) {
  textLength >= 11 ? widthContainer.style.left = "-8px" : "-20px";
};

exports.fontBarCondition = fontBarCondition;
},{"./globalVariables":"src/js/globalVariables.js"}],"src/js/ui nav/ui-inputNav.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("../globalVariables");

// import "./globalVariables";
"./globalVariables"; //global Var destructured

var uiNav = _globalVariables.globalVar.uiNav,
    uiInputText = _globalVariables.globalVar.uiInputText,
    uiInputFont = _globalVariables.globalVar.uiInputFont,
    uiInputColor = _globalVariables.globalVar.uiInputColor,
    uiForm = _globalVariables.globalVar.uiForm,
    display = _globalVariables.globalVar.display;

function checkClass() {
  var single = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var el = arguments.length > 1 ? arguments[1] : undefined;
  var child = arguments.length > 2 ? arguments[2] : undefined;
  var className = arguments.length > 3 ? arguments[3] : undefined;

  if (single === true) {
    return el.classList.contains(className);
  } else {
    return el[child].classList.contains(className);
  }
}

function setClass() {
  var single = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var el = arguments.length > 1 ? arguments[1] : undefined;
  var child = arguments.length > 2 ? arguments[2] : undefined;
  var className = arguments.length > 3 ? arguments[3] : undefined;

  if (single === true) {
    //returns element only
    return el.classList.add(className);
  } else {
    //returns element from an array like globalVar.uiNav
    return el[child].classList.add(className);
  }
}

function removeClass() {
  var single = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var el = arguments.length > 1 ? arguments[1] : undefined;
  var child = arguments.length > 2 ? arguments[2] : undefined;
  var className = arguments.length > 3 ? arguments[3] : undefined;

  if (single === true) {
    el.classList.remove(className);
  } else {
    el[child].classList.remove(className);
  }
} //for quick referencing


var navActive = "nav-active";
var uiActive = "ui-active"; //state checking

var textState = false;
var fontState = false;
var colorState = false;
checkClass(true, uiInputText, null, uiActive);

function setValue(e) {
  var targetText = e.target.innerText; //TEXT NAV

  if (targetText === "Text") {
    //check and remove any nav Activation
    if (checkClass(false, uiNav, 1, navActive) || checkClass(false, uiNav, 2, navActive)) {
      removeClass(false, uiNav, 1, navActive);
      removeClass(false, uiNav, 2, navActive);
      fontState = false;
      colorState = false;
    } //check and remove any uiActivation


    if (checkClass(true, uiInputFont, null, uiActive) || checkClass(true, uiInputColor, null, uiActive)) {
      removeClass(true, uiInputFont, null, uiActive);
      removeClass(true, uiInputColor, null, uiActive);
    } //activate text Nav


    setClass(false, uiNav, 0, navActive); //activate text input area

    setClass(true, uiInputText, null, uiActive); //set the state to true

    return textState = true;
  } //font famly


  if (targetText === "Font Family") {
    //check and remove any nav Activation
    if (checkClass(false, uiNav, 0, navActive) || checkClass(false, uiNav, 2, navActive)) {
      removeClass(false, uiNav, 0, navActive);
      removeClass(false, uiNav, 2, navActive);
      textState = false;
      colorState = false;
    } //check and remove any uiActivation


    if (checkClass(true, uiInputText, null, uiActive) || checkClass(true, uiInputColor, null, uiActive)) {
      removeClass(true, uiInputText, null, uiActive);
      removeClass(true, uiInputColor, null, uiActive);
    } //activate font Nav


    setClass(false, uiNav, 1, navActive); //activate font btn area

    setClass(true, uiInputFont, null, uiActive); //set the state to true

    fontState = true;
  } //color


  if (targetText === "Color") {
    //check and remove any nav Activation
    if (checkClass(false, uiNav, 0, navActive) || checkClass(false, uiNav, 1, navActive)) {
      removeClass(false, uiNav, 0, navActive);
      removeClass(false, uiNav, 1, navActive);
      textState = false;
      fontState = false;
    } //check and remove any uiActivation


    if (checkClass(true, uiInputText, null, uiActive) || checkClass(true, uiInputFont, null, uiActive)) {
      removeClass(true, uiInputText, null, uiActive);
      removeClass(true, uiInputFont, null, uiActive);
    } //activate color Nav


    setClass(false, uiNav, 2, navActive); //activate color bulb area

    setClass(true, uiInputColor, null, uiActive); //set the state to true

    return colorState = true;
  }
} // console.log(textState);


_globalVariables.globalVar.uiNav.forEach(function (list) {
  list.addEventListener("click", setValue);
});
/**
 * @ERRORs -
 * In case of any TypeError:el.classlist is undefined, try turning the booleans true or false. Understanding these helper function beforehand will save your time!
 */
},{"../globalVariables":"src/js/globalVariables.js"}],"src/js/textInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounceMeasurement;
exports.userText = exports.textLength = exports.metrics = void 0;

var _globalVariables = require("./globalVariables");

var _globalFuntions = _interopRequireWildcard(require("./globalFuntions"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//globa var destructured
var widthContainer = _globalVariables.globalVar.widthContainer,
    barWidth = _globalVariables.globalVar.barWidth,
    barWidthSize = _globalVariables.globalVar.barWidthSize,
    heightContainer = _globalVariables.globalVar.heightContainer,
    barHeight = _globalVariables.globalVar.barHeight,
    barHeightSize = _globalVariables.globalVar.barHeightSize,
    uiInputText = _globalVariables.globalVar.uiInputText,
    display = _globalVariables.globalVar.display,
    canva = _globalVariables.globalVar.canva,
    ctx = _globalVariables.globalVar.ctx;
var navText = uiInputText.firstElementChild; //state variables

var textInputState = false; //set the default states

var userText = "";
exports.userText = userText;
var textLength = null;
exports.textLength = textLength;
var metrics = null;
exports.metrics = metrics;

function init() {
  //initial default state
  //check for local storage value exist
  if (localStorage.length > 0) {
    exports.userText = userText = localStorage.getItem("userText");
    display.textContent = userText;
    var _textLength = userText.length;
    (0, _globalFuntions.writeOnCanvasWithFont)(ctx, userText, "Tangerine");
    exports.metrics = metrics = ctx.measureText(userText);
    (0, _globalFuntions.calculation)(display, metrics, _textLength, barWidth, barWidthSize, barHeight, barHeightSize);
  } else {
    localStorage.clear();
    exports.userText = userText = "Your Text";
    display.textContent = userText;
    (0, _globalFuntions.default)(widthContainer, null);
    (0, _globalFuntions.default)(heightContainer, null);
  }

  ctx.font = "4rem Tangerine";
  ctx.fillStyle = "White";
}

init();
navText.addEventListener("input", function (e) {
  //get the input value, store it, return it
  exports.userText = userText = e.target.value; //persist data in local storage

  localStorage.setItem("userText", userText); //get the item from storage

  var localUserText = localStorage.getItem("userText");
  var timeout;
  exports.textLength = textLength = localUserText.length; //show each letter upon typing

  display.textContent = localUserText.trim(); //check if the state is true

  textLength > 0 ? textInputState = true : false;
  textLength >= 20 ? alert("If you need more than 30 characters of text, Please contact us: \uD83D\uDCDE +14-999-876-42") : ""; //any space should be omitted from calculating

  if (e.data === " ") {
    return;
  }

  if (e.inputType === "deleteContentBackward") {
    //recapture the userText here
    var newUserText = localUserText; //rerender the userText

    if (newUserText.length !== 0) {
      (0, _globalFuntions.clearCanvas)(ctx, canva);
      (0, _globalFuntions.writeOnCanvas)(ctx, newUserText);
      exports.metrics = metrics = ctx.measureText(userText);
      debounceMeasurement();
    }
  } else {
    (0, _globalFuntions.writeOnCanvas)(ctx, userText);
    exports.metrics = metrics = ctx.measureText(userText);
    debounceMeasurement();
  }

  (0, _globalFuntions.fontBarCondition)(textLength);

  if (textLength === 0) {
    (0, _globalFuntions.clearCanvas)(ctx, canva);
    (0, _globalFuntions.showBars)(false);
  }

  return userText;
});

function debounceMeasurement() {
  var timeout;
  (0, _globalFuntions.showBars)(false); //cleartimeout

  clearTimeout(timeout); //measure bar

  timeout = setTimeout((0, _globalFuntions.calculation)(display, metrics, textLength, barWidth, barWidthSize, barHeight, barHeightSize), 3000);
}
},{"./globalVariables":"src/js/globalVariables.js","./globalFuntions":"src/js/globalFuntions.js"}],"src/js/font family/setFonts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontClicked = void 0;

var _globalVariables = _interopRequireWildcard(require("../globalVariables"));

var _globalFuntions = _interopRequireWildcard(require("../globalFuntions"));

var _textInput = require("../textInput");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//destructured vars
var fontBtn = _globalVariables.default.fontBtn,
    fontBtnsWhite = _globalVariables.default.fontBtnsWhite;
var widthContainer = _globalVariables.globalVar.widthContainer,
    barWidth = _globalVariables.globalVar.barWidth,
    barWidthSize = _globalVariables.globalVar.barWidthSize,
    heightContainer = _globalVariables.globalVar.heightContainer,
    barHeight = _globalVariables.globalVar.barHeight,
    barHeightSize = _globalVariables.globalVar.barHeightSize,
    display = _globalVariables.globalVar.display,
    canva = _globalVariables.globalVar.canva,
    ctx = _globalVariables.globalVar.ctx; //defaults

fontBtnsWhite.forEach(function (btn) {
  btn.classList.add("hide");
});

function loadFont(targetFont, userText) {
  //---one for the display
  display.style.fontFamily = targetFont; //---one for the canvas

  ctx.font = "4rem ".concat(targetFont);
  ctx.fillStyle = "White"; // console.log(`Loaded font: ${targetFont}`);

  ctx.fillText(userText, 0, 50);
}

function getScreenSize() {
  var width = window.innerWidth;
  console.log("Window width: ".concat(width));
  return width;
}

getScreenSize();
var screenWidth = getScreenSize();
console.log(screenWidth);
var fontClicked = false;
exports.fontClicked = fontClicked;
var fontUserText = ""; //font  action

fontBtn.forEach(function (btns) {
  //select font
  btns.addEventListener("click", function (e) {
    exports.fontClicked = fontClicked = true;
    var target = e.target;
    fontUserText = _textInput.userText;
    fontUserText = "";
    var textLength = _textInput.userText.length; // console.log(target);
    //Clear displays

    (0, _globalFuntions.default)(widthContainer, false);
    (0, _globalFuntions.default)(heightContainer, false);
    (0, _globalFuntions.clearCanvas)(ctx, canva); // console.log(target.classList);
    // console.log(target.classList.length > 1);
    //if it is is  the parent

    var targetCondition = target.classList.length > 1; //big fonts

    var largeFonts = "";

    if (targetCondition) {
      var fontId = target.classList[1];
      largeFonts = fontId;
      console.log("Large Fonts: ".concat(largeFonts));
      (0, _globalFuntions.clearCanvas)(ctx, canva);
      loadFont(fontId, _textInput.userText);
      var metrics = ctx.measureText(_textInput.userText);
      (0, _globalFuntions.calculation)(display, metrics, textLength, barWidth, barWidthSize, barHeight, barHeightSize);
    } else {
      //if it is the child
      largeFonts = target.id;
      (0, _globalFuntions.clearCanvas)(ctx, canva);
      loadFont(target.id, _textInput.userText); // console.log(`Large Fonts: ${largeFonts}`);

      var _metrics = ctx.measureText(_textInput.userText);

      (0, _globalFuntions.calculation)(display, _metrics, textLength, barWidth, barWidthSize, barHeight, barHeightSize);
    } //dynamic font sizing


    console.log("Large Fonts fromm outside: ".concat(largeFonts));
    console.log(largeFonts !== "HerrVonMuellerhoff" || largeFonts !== "Tangerine");

    if (largeFonts === "Amsterdam") {
      screenWidth >= 800 ? display.style.fontSize = "2.5vw" : display.style.fontSize = "4vw";
      console.log("FROM CONDITION 1");
    }

    var targetBtn = e.target.closest(".ui-input-fontFamily-list"); //loop throught all the lists

    fontBtn.forEach(function (cls) {
      //if btnactive match found-remove it
      cls.classList.remove("btn-active");
    }); //add btn-active class to the existing target list

    targetBtn.classList.add("btn-active");
    (0, _globalFuntions.fontBarCondition)(textLength); //setthe display for bars

    (0, _globalFuntions.showBars)(true);
    return fontClicked;
  });
});
},{"../globalVariables":"src/js/globalVariables.js","../globalFuntions":"src/js/globalFuntions.js","../textInput":"src/js/textInput.js"}],"src/js/ui color/uiColor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkColor = checkColor;
exports.listColor = void 0;
exports.setColor = setColor;

var _globalVariables = require("../globalVariables");

var _neonSwitch = require("../neonSwitch");

var display = _globalVariables.globalVar.display,
    colorList = _globalVariables.globalVar.colorList,
    neonSwitch = _globalVariables.globalVar.neonSwitch;
var bulbDom = document.querySelectorAll(".fa.fa-lightbulb-o");
var colorPalette = [{
  id: "orange",
  code: "orange"
}, {
  id: "lightRed",
  code: "rgb(255, 117, 117)"
}, {
  id: "red",
  code: "red"
}, {
  id: "deepBlue",
  code: "rgb(2, 116, 252)"
}, {
  id: "electricBlue",
  code: "rgb(99, 170, 255)"
}, {
  id: "tropicalBlue",
  code: "rgb(36, 183, 222)"
}, {
  id: "iceBlue",
  code: "rgb(144, 220, 255)"
}, {
  id: "green",
  code: "#20f020"
}, {
  id: "mintGreen",
  code: "rgb(128, 255, 217)"
}, {
  id: "deepGreen",
  code: "rgba(14, 185, 14, 0.884)"
}, {
  id: "warmWhite",
  code: "rgb(240, 238, 199)"
}, {
  id: "white",
  code: "rgb(225, 227, 230)"
}];
var listColor = "";
exports.listColor = listColor;

function setColor(color) {
  if (_neonSwitch.neonState !== false) {
    display.style.textShadow = "rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,\n\t\t".concat(color, " 0px 0px 20px, ").concat(color, " 0px 0px 30px,\n\t\t").concat(color, " 0px 0px 40px, ").concat(color, " 0px 0px 55px,\n\t\t").concat(color, " 0px 0px 75px");
  } else {
    display.style.textShadow = "none";
  }
}

function checkColor(listColor) {
  var response = colorPalette.filter(function (color) {
    //get the matched colorId
    return listColor.includes(color.id);
  });
  return response.map(function (code) {
    return code.code;
  });
}

function setGlowingLight(bulb, targetColor) {
  var glowLight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var listColor = arguments.length > 3 ? arguments[3] : undefined;

  if (glowLight === 1) {
    bulb.style.textShadow = "0 0 4px white, 0 0 4px ".concat(targetColor, ", 0 0 8px ").concat(targetColor, ",\n\t\t0 0 12px ").concat(targetColor, ", 0 0 16px ").concat(targetColor, ", 0 0 18px ").concat(targetColor);
    bulb.style.color = "rgb(248, 248, 248)";
  } else {
    bulb.style.textShadow = "none";
    bulb.style.color = "".concat(checkColor(listColor));
  }
}

var btnActivate;
colorList.forEach(function (list) {
  //HOVER STATE
  list.addEventListener("mouseenter", function (e) {
    var targetColor = e.target.classList[1];
    var bulb = e.target.firstElementChild;
    setGlowingLight(bulb, checkColor(targetColor), 1);
  });
  list.addEventListener("mouseleave", function (e) {
    // let targetColor = e.target.classList[1];
    exports.listColor = listColor = e.target.classList[1];
    var bulb = e.target.firstElementChild;

    if (bulb.dataset.active === "true") {
      setGlowingLight(bulb, checkColor(listColor), 1, listColor);
    } else {
      setGlowingLight(bulb, checkColor(listColor), 0, listColor);
    }
  }); // ACTIONS

  list.addEventListener("click", function (e) {
    //wherever color is clicked, alwyas make it happen on the parent -> <li>
    var listEl = e.target.closest("li");
    var bulb = listEl.firstElementChild; //send the color to whoever needs it

    exports.listColor = listColor = listEl.classList[1]; //if the neonSwitch is unchecked, alert to turn the switchOn

    if (neonSwitch.checked !== true) {
      alert("Please turn the neon switch on.");
      return;
    } //if the list color is equal to other custom color


    bulbDom.forEach(function (li) {
      li.dataset.active = false;
    }); //activate button

    bulb.dataset.active = true; //check if any other bulbData is true or empty
    //set btn glow

    if (bulb.dataset.active === "true") {
      btnActivate = true;
      bulbDom.forEach(function (bulb) {
        //get each bulbs color
        setGlowingLight(bulb, checkColor(bulb.dataset.color), 0, bulb.dataset.color);
      });
      setGlowingLight(bulb, checkColor(listColor), 1, listColor);
    } else {
      btnActivate = false;
    } //set color


    setColor(checkColor(listColor));
    _neonSwitch.lastColorState.color = listColor;
    return listColor;
  });
});
},{"../globalVariables":"src/js/globalVariables.js","../neonSwitch":"src/js/neonSwitch.js"}],"src/js/neonSwitch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastColorState = void 0;
exports.neonOn = neonOn;
exports.neonState = void 0;

var _globalVariables = require("./globalVariables");

var _uiColor = require("./ui color/uiColor");

var neonSwitch = _globalVariables.globalVar.neonSwitch,
    display = _globalVariables.globalVar.display;
neonSwitch.checked = true;
var neonState;
exports.neonState = neonState;
var lastColorState = {
  color: ""
};
exports.lastColorState = lastColorState;

function neonOn() {
  if (neonSwitch.checked === true) {
    display.classList.add("neonOn");
    exports.neonState = neonState = true;

    if (lastColorState.color !== "") {
      (0, _uiColor.setColor)((0, _uiColor.checkColor)(lastColorState.color));
    } else {
      (0, _uiColor.setColor)("rgb(255, 144, 255)");
    }
  } else {
    display.classList.remove("neonOn");
    exports.neonState = neonState = false;
    (0, _uiColor.setColor)((0, _uiColor.checkColor)(lastColorState.color));
  }
}

neonSwitch.addEventListener("click", neonOn);
/**
 * @lastColorState - to get the last navColor clicked, to update the color here as well
 * had to export it as object, otherwise this is only 'Read-only'
 */
},{"./globalVariables":"src/js/globalVariables.js","./ui color/uiColor":"src/js/ui color/uiColor.js"}],"src/js/misc.js":[function(require,module,exports) {
//see if user is about to close the tab
//then show message
// ------ Do you want to clear data and close the browser?
//yes, clear cookies
//no, close the browser
},{}],"src/js/pricing.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("./globalVariables");

var price = _globalVariables.globarPrice.price,
    priceLength = _globalVariables.globarPrice.priceLength,
    priceHeight = _globalVariables.globarPrice.priceHeight;
var barWidth = _globalVariables.globalVar.barWidth,
    barHeight = _globalVariables.globalVar.barHeight;
},{"./globalVariables":"src/js/globalVariables.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("./globalVariables");

require("./globalFuntions");

require("./ui nav/ui-inputNav");

require("./textInput");

require("./font family/setFonts");

require("./neonSwitch");

require("./ui color/uiColor");

require("./misc");

require("./pricing");
},{"./globalVariables":"src/js/globalVariables.js","./globalFuntions":"src/js/globalFuntions.js","./ui nav/ui-inputNav":"src/js/ui nav/ui-inputNav.js","./textInput":"src/js/textInput.js","./font family/setFonts":"src/js/font family/setFonts.js","./neonSwitch":"src/js/neonSwitch.js","./ui color/uiColor":"src/js/ui color/uiColor.js","./misc":"src/js/misc.js","./pricing":"src/js/pricing.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49904" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map