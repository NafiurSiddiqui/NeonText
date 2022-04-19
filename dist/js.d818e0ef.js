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
exports.globalVar = exports.default = void 0;
var uiNav = document.querySelectorAll(".ui-input-nav-list");
var uiInputText = document.querySelector(".ui-input-form.text");
var uiInputFont = document.querySelector(".ui-input-form.fontFamily");
var uiInputColor = document.querySelector(".ui-input-form.color");
var uiForm = document.querySelectorAll(".ui-input-form");
var display = document.querySelector(".ui-display-userText-text");
var displayWrapper = document.querySelector(".ui-display-userText-wrapper");
var canva = document.getElementById("displayText");
var ctx = canva.getContext("2d"); //measurement bars

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
var _default = globalFonts;
exports.default = _default;
},{}],"src/js/globalFuntions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleDisplay;

function toggleDisplay(el) {
  var on = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (on === true) {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }
}
},{}],"src/js/ui nav/ui-inputNav_test.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("../globalVariables");

// import "./globalVariables";
"./globalVariables";

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
}

function conditionalSet(targetText, val) {
  //refer to the individual function arguments in case of confusion
  if (targetText === val) {
    if (checkClass(arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4])) {
      removeClass(arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4]);
    }

    if (checkClass(arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7])) {
      removeClass(arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7]);
    }

    toggleDisplay(arguments.length <= 8 ? undefined : arguments[8]);
    toggleDisplay(arguments.length <= 9 ? undefined : arguments[9]);
    setClass(arguments.length <= 10 ? undefined : arguments[10], arguments.length <= 11 ? undefined : arguments[11], arguments.length <= 12 ? undefined : arguments[12], arguments.length <= 13 ? undefined : arguments[13]);
    setClass(arguments.length <= 14 ? undefined : arguments[14], arguments.length <= 15 ? undefined : arguments[15], arguments.length <= 16 ? undefined : arguments[16], arguments.length <= 17 ? undefined : arguments[17]);
  }
} //for quick referencing


var navActive = "nav-active";
var uiActive = "ui-active"; //state checking

var textState = false;
var fontState = false;
var colorState = false; //global Var destructured

var uiNav = _globalVariables.globalVar.uiNav,
    uiInputText = _globalVariables.globalVar.uiInputText,
    uiInputFont = _globalVariables.globalVar.uiInputFont,
    uiInputColor = _globalVariables.globalVar.uiInputColor,
    uiForm = _globalVariables.globalVar.uiForm,
    display = _globalVariables.globalVar.display; // console.log(uiNav[0]);
// checkClass(false, uiNav, 0, navActive);

checkClass(true, uiInputText, null, uiActive);

function setValue(e) {
  // console.log(e.target.innerText);
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
    if ( // globalVar.uiNav[0].classList.contains(navActive) ||
    // globalVar.uiNav[2].classList.contains(navActive)
    checkClass(false, uiNav, 0, navActive) || checkClass(false, uiNav, 2, navActive)) {
      // globalVar.uiNav[0].classList.remove(navActive);
      // globalVar.uiNav[2].classList.remove(navActive);
      removeClass(false, uiNav, 0, navActive);
      removeClass(false, uiNav, 2, navActive);
      textState = false;
      colorState = false;
    } //check and remove any uiActivation


    if ( // globalVar.uiInputText.classList.contains(uiActive) ||
    // globalVar.uiInputColor.classList.contains(uiActive)
    checkClass(true, uiInputText, null, uiActive) || checkClass(true, uiInputColor, null, uiActive)) {
      // globalVar.uiInputText.classList.remove(uiActive);
      // globalVar.uiInputColor.classList.remove(uiActive);
      removeClass(true, uiInputText, null, uiActive);
      removeClass(true, uiInputColor, null, uiActive);
    } //activate font Nav
    // globalVar.uiNav[1].classList.add(navActive);


    setClass(false, uiNav, 1, navActive); //activate font btn area
    // globalVar.uiInputFont.classList.add(uiActive);

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


    if ( // globalVar.uiInputText.classList.contains(uiActive) ||
    // globalVar.uiInputFont.classList.contains(uiActive)
    checkClass(true, uiInputText, null, uiActive) || checkClass(true, uiInputFont, null, uiActive)) {
      // globalVar.uiInputText.classList.remove(uiActive);
      // globalVar.uiInputFont.classList.remove(uiActive);
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
},{"../globalVariables":"src/js/globalVariables.js"}],"src/js/font family/setFonts.js":[function(require,module,exports) {
"use strict";

var _globalVariables = _interopRequireWildcard(require("../globalVariables"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//destructured vars
var fontBtn = _globalVariables.default.fontBtn,
    fontBtnsWhite = _globalVariables.default.fontBtnsWhite,
    fontBtnBlack = _globalVariables.default.fontBtnBlack;
var display = _globalVariables.globalVar.display,
    canva = _globalVariables.globalVar.canva,
    ctx = _globalVariables.globalVar.ctx; //defaults

fontBtnsWhite.forEach(function (btn) {
  btn.classList.add("hide");
});

var mouseIn = function mouseIn(event) {
  var firstChild = event.target.firstElementChild.classList;
  var lastChild = event.target.lastElementChild.classList;
  firstChild.add("hide");
  lastChild.remove("hide"); // console.log("works");
};

var mouseOut = function mouseOut(event) {
  var firstChild = event.target.firstElementChild.classList;
  var lastChild = event.target.lastElementChild.classList;
  firstChild.remove("hide");
  lastChild.add("hide");
}; //write the loadFont function


function loadFont(targetFont) {
  //set the targetFont
  //---one for the display
  display.style.fontFamily = targetFont; //---one for the canvas

  ctx.font = "4rem ".concat(targetFont, " ");
  ctx.fillStyle = "White";
} //font hover


fontBtn.forEach(function (btns) {
  btns.addEventListener("mouseenter", mouseIn);
  btns.addEventListener("mouseleave", mouseOut);
  btns.addEventListener("click", function (e) {
    // console.log();
    var target = e.target; //if it is is  the parent

    if (target.className === "ui-input-fontFamily-list") {
      var lastChildId = target.lastElementChild.id;
      console.log("From Parent : ".concat(lastChildId));
      loadFont(lastChildId);
    } else {
      //if it is the child
      console.log("From Child: ".concat(target.id));
      loadFont(target.id);
    }
  });
}); //get the value of the selected font
//set the value of the selected font to display, to canvas
//Helper functions
},{"../globalVariables":"src/js/globalVariables.js"}],"src/js/textInput.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("./globalVariables");

var _setFonts = require("./font family/setFonts");

var _globalFuntions = _interopRequireDefault(require("./globalFuntions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var userText = ""; //---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
  //initial default state
  userText = "Your Text";
  display.textContent = userText;
  (0, _globalFuntions.default)(widthContainer, null);
  (0, _globalFuntions.default)(heightContainer, null);
  ctx.font = "4rem arial";
  ctx.fillStyle = "White";
}

init();
var textWrapper = document.querySelector(".ui-display-userText-wrapper");
navText.addEventListener("input", function (e) {
  e.preventDefault(); //get the input value, store it, return it

  userText = e.target.value; //persist data in local storage
  //show each letter upon typing

  display.textContent = userText.trim(); //check if the state is true

  if (userText.length > 0) {
    textInputState = true;
  } //any space should be omitted from calculating


  if (e.data === " ") {
    return;
  }

  var textLength = userText.length; //width

  var displayWidth = getComputedStyle(display).width;
  var displayString = displayWidth.slice(0, -2);
  var displaySize = Math.ceil(+displayString);
  console.log(getComputedStyle(textWrapper));
  ctx.fillText(userText, 0, 50);
  var metrics = ctx.measureText(userText); // let width = metrics.width;

  var width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight; // console.log(`Width: ${width}`);
  // console.log(displayWidth);
  // let textTop = Math.abs(metrics.actualBoundingBoxAscent).toFixed(2);
  // let textBottom = Math.abs(metrics.actualBoundingBoxDescent);
  //height

  var height = (Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent)).toFixed(2); // console.log(`Width: ${displaySize}`);

  if (textLength >= 6) {
    textLength = textLength * 14;
  } else {
    textLength = textLength * 9;
  }

  if (textLength === 0) {
    ctx.clearRect(0, 0, canva.width, canva.height);
  } //measurement bars
  // barWidth.style.width = `${width}px`;


  barWidth.style.width = "".concat(displaySize, "px");
  barWidthSize.textContent = "".concat(textLength, " CM");
  barHeight.style.height = "".concat(height, "px");
  barHeightSize.textContent = "".concat(Math.round(height), "Cm");

  if (userText.length > 0) {
    (0, _globalFuntions.default)(widthContainer, true);
  } else {
    (0, _globalFuntions.default)(widthContainer, null);
  } //setTimout for session storage and remove items from local storage, if there is data

});

function setBarMeasurement() {
  console.log("💥 time 💥");
  (0, _globalFuntions.default)(widthContainer, true);
  (0, _globalFuntions.default)(heightContainer, true);
}

navText.addEventListener("keyup", function () {
  //wait for 3 seconds and show the measurement
  clearTimeout(setBarMeasurement);
  (0, _globalFuntions.default)(widthContainer, null);
  (0, _globalFuntions.default)(heightContainer, null);
  console.log("CLEARED TIMEOUT");
});
navText.addEventListener("keydown", function () {
  setTimeout(setBarMeasurement, 3000);
});
},{"./globalVariables":"src/js/globalVariables.js","./font family/setFonts":"src/js/font family/setFonts.js","./globalFuntions":"src/js/globalFuntions.js"}],"src/js/neonSwitch.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("./globalVariables");

var neonSwitch = _globalVariables.globalVar.neonSwitch,
    display = _globalVariables.globalVar.display;
neonSwitch.checked = true;
neonSwitch.addEventListener("click", function () {
  if (neonSwitch.checked === true) {
    display.classList.add("neonOn");
  } else {
    display.classList.remove("neonOn");
  }
});
},{"./globalVariables":"src/js/globalVariables.js"}],"src/js/ui color/uiColor.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("../globalVariables");

var display = _globalVariables.globalVar.display,
    colorList = _globalVariables.globalVar.colorList,
    neonSwitch = _globalVariables.globalVar.neonSwitch;
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

function setColor(color) {
  display.style.textShadow = "rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,\n\t\t".concat(color, " 0px 0px 20px, ").concat(color, " 0px 0px 30px,\n\t\t").concat(color, " 0px 0px 40px, ").concat(color, " 0px 0px 55px,\n\t\t").concat(color, " 0px 0px 75px");
}

function checkColor(listColor) {
  var response = colorPalette.filter(function (color) {
    //get the matched colorId
    return listColor.includes(color.id);
  }); // console.log(Object.assign({}, response));

  console.log(response.map(function (code) {
    return code.code;
  }));
  return response.map(function (code) {
    return code.code;
  });
}

console.log(display);
colorList.forEach(function (list) {
  list.addEventListener("click", function (e) {
    console.log(e.target); //wherever it is clicked, alwyas make it happen on the parent <li>

    var listEl = e.target.closest("li"); //send the color to whoever needs it

    listColor = listEl.classList[1]; //if the neonSwitch is unchecked, alert to turn the switchOn

    if (neonSwitch.checked !== true) {
      alert("Please turn the neon switch on.");
      return;
    } //if the list color is equal to other custom color


    console.log(listColor); //set color

    setColor(checkColor(listColor));
  });
}); // console.log(listColor);
// setColor(listColor);
},{"../globalVariables":"src/js/globalVariables.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("./globalVariables");

require("./globalFuntions");

require("./ui nav/ui-inputNav_test");

require("./textInput");

require("./font family/setFonts");

require("./neonSwitch");

require("./ui color/uiColor");
},{"./globalVariables":"src/js/globalVariables.js","./globalFuntions":"src/js/globalFuntions.js","./ui nav/ui-inputNav_test":"src/js/ui nav/ui-inputNav_test.js","./textInput":"src/js/textInput.js","./font family/setFonts":"src/js/font family/setFonts.js","./neonSwitch":"src/js/neonSwitch.js","./ui color/uiColor":"src/js/ui color/uiColor.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49554" + '/');

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