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
exports.globalVar = void 0;
var uiNav = document.querySelectorAll(".ui-input-nav-list");
var uiInputText = document.querySelector(".ui-input-form.text");
var uiInputFont = document.querySelector(".ui-input-form.fontFamily");
var uiInputColor = document.querySelector(".ui-input-form.color");
var uiForm = document.querySelectorAll(".ui-input-form");
var display = document.querySelector(".ui-display-userText-text"); // console.log(display);

var globalVar = {
  uiNav: uiNav,
  uiInputText: uiInputText,
  uiInputFont: uiInputFont,
  uiInputColor: uiInputColor,
  uiForm: uiForm,
  display: display
};
exports.globalVar = globalVar;
},{}],"src/js/ui-inputNav_test.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("./globalVariables");

// import "./globalVariables";
"./globalVariables"; // console.log(globalVar.uiNav, globalVar.uiInputText, globalVar.uiInputFont, globalVar.uiInputColor);

function checkClass(el, child, className) {
  return (el[child] || el).classList.contains(className);
}

function setClass(el, child, className) {
  var single = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (single === true) {
    //returns element only
    return el.classList.add(className);
  } else {
    //returns element from an array like globalVar.uiNav
    return el[child].classList.add(className);
  }
}

function removeClass(el, child, className) {
  (el[child] || el).classList.remove(className);
}

function toggleDisplay(el, on) {
  if (on) {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
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

var textNavState;
var textUiState;
var fontNavState;
var fontUiState;
var colorNavState;
var colorUiState;

function setValue(e) {
  // console.log(e.target.innerText);
  var targetText = e.target.innerText; //TEXT NAV

  if (targetText === "Text") {
    //check and remove any nav Activation
    if (_globalVariables.globalVar.uiNav[1].classList.contains(navActive) || _globalVariables.globalVar.uiNav[2].classList.contains(navActive)) {
      _globalVariables.globalVar.uiNav[1].classList.remove(navActive);

      _globalVariables.globalVar.uiNav[2].classList.remove(navActive);

      fontNavState = false;
      colorNavState = false;
    } //check and remove any uiActivation


    if (_globalVariables.globalVar.uiInputFont.classList.contains(uiActive) || _globalVariables.globalVar.uiInputColor.classList.contains(uiActive)) {
      _globalVariables.globalVar.uiInputFont.classList.remove(uiActive);

      _globalVariables.globalVar.uiInputColor.classList.remove(uiActive);

      fontUiState = false;
      colorUiState = false;
    } //activate text Nav


    _globalVariables.globalVar.uiNav[0].classList.add(navActive);

    textNavState = true; //activate text input area
    // globalVar.uiInputText.style.display = "flex";

    _globalVariables.globalVar.uiInputText.classList.add(uiActive); //set the state to true


    textUiState = true;
  } //font famly


  if (targetText === "Font Family") {
    //check and remove any nav Activation
    if (_globalVariables.globalVar.uiNav[0].classList.contains(navActive) || _globalVariables.globalVar.uiNav[2].classList.contains(navActive)) {
      _globalVariables.globalVar.uiNav[0].classList.remove(navActive);

      _globalVariables.globalVar.uiNav[2].classList.remove(navActive);

      textNavState = false;
      colorNavState = false;
    } //check and remove any uiActivation


    if (_globalVariables.globalVar.uiInputText.classList.contains(uiActive) || _globalVariables.globalVar.uiInputColor.classList.contains(uiActive)) {
      _globalVariables.globalVar.uiInputText.classList.remove(uiActive);

      _globalVariables.globalVar.uiInputColor.classList.remove(uiActive);

      textUiState = false;
      colorUiState = false;
    } //activate text Nav


    _globalVariables.globalVar.uiNav[1].classList.add(navActive);

    fontNavState = true; //activate text input area
    // globalVar.uiInputFont.style.display = "flex";

    _globalVariables.globalVar.uiInputFont.classList.add(uiActive); //set the state to true


    fontUiState = true;
  } //color


  if (targetText === "Color") {
    //check and remove any nav Activation
    if (_globalVariables.globalVar.uiNav[0].classList.contains(navActive) || _globalVariables.globalVar.uiNav[1].classList.contains(navActive)) {
      _globalVariables.globalVar.uiNav[0].classList.remove(navActive);

      _globalVariables.globalVar.uiNav[1].classList.remove(navActive);

      textNavState = false;
      fontNavState = false;
    } //check and remove any uiActivation


    if (_globalVariables.globalVar.uiInputText.classList.contains(uiActive) || _globalVariables.globalVar.uiInputFont.classList.contains(uiActive)) {
      _globalVariables.globalVar.uiInputText.classList.remove(uiActive);

      _globalVariables.globalVar.uiInputFont.classList.remove(uiActive);

      textUiState = false;
      fontUiState = false;
    } //activate text Nav


    _globalVariables.globalVar.uiNav[2].classList.add(navActive);

    colorNavState = true; //activate text input area
    // globalVar.uiInputFont.style.display = "flex";

    _globalVariables.globalVar.uiInputColor.classList.add(uiActive); //set the state to true


    colorUiState = true;
  }
} // console.log(checkClass(1));


_globalVariables.globalVar.uiNav.forEach(function (list) {
  list.addEventListener("click", setValue);
});
},{"./globalVariables":"src/js/globalVariables.js"}],"src/js/textInput.js":[function(require,module,exports) {
"use strict";

var _globalVariables = require("./globalVariables");

//need NavText, UiText, display
// console.log(globalVar.display);
var navText = _globalVariables.globalVar.uiInputText;
var uiText = _globalVariables.globalVar.display; // console.log(navText, uiText);
//set the default states
//set navTextState to true
//get the input value, store it, return it
//persist data in local storage
//show each letter upon typing
//measure each letter by 9 cm each
//wait for 3 seconds and show the measurement bar
//setTimout for session storage and remove items from local storage, if there is data
},{"./globalVariables":"src/js/globalVariables.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("./globalVariables");

require("./ui-inputNav_test");

require("./textInput");
},{"./globalVariables":"src/js/globalVariables.js","./ui-inputNav_test":"src/js/ui-inputNav_test.js","./textInput":"src/js/textInput.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63960" + '/');

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