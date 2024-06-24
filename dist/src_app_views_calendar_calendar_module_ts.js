(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["src_app_views_calendar_calendar_module_ts"],{

/***/ 56675:
/*!**********************************************************************!*\
  !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getDef(f, d) {
  if (typeof f === 'undefined') {
    return typeof d === 'undefined' ? f : d;
  }

  return f;
}

function boolean(func, def) {
  func = getDef(func, def);

  if (typeof func === 'function') {
    return function f() {
      var arguments$1 = arguments;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }

      return !!func.apply(this, args);
    };
  }

  return !!func ? function () {
    return true;
  } : function () {
    return false;
  };
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */


var isElement$1 = function isElement$1(input) {
  return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
};

function indexOfElement(elements, element) {
  element = resolveElement(element, true);

  if (!isElement$1(element)) {
    return -1;
  }

  for (var i = 0; i < elements.length; i++) {
    if (elements[i] === element) {
      return i;
    }
  }

  return -1;
}

function hasElement(elements, element) {
  return -1 !== indexOfElement(elements, element);
}

function pushElements(elements, toAdd) {
  for (var i = 0; i < toAdd.length; i++) {
    if (!hasElement(elements, toAdd[i])) {
      elements.push(toAdd[i]);
    }
  }

  return toAdd;
}

function addElements(elements) {
  var arguments$1 = arguments;
  var toAdd = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    toAdd[len] = arguments$1[len + 1];
  }

  toAdd = toAdd.map(resolveElement);
  return pushElements(elements, toAdd);
}

function removeElements(elements) {
  var arguments$1 = arguments;
  var toRemove = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    toRemove[len] = arguments$1[len + 1];
  }

  return toRemove.map(resolveElement).reduce(function (last, e) {
    var index = indexOfElement(elements, e);

    if (index !== -1) {
      return last.concat(elements.splice(index, 1));
    }

    return last;
  }, []);
}

function resolveElement(element, noThrow) {
  if (typeof element === 'string') {
    try {
      return document.querySelector(element);
    } catch (e) {
      throw e;
    }
  }

  if (!isElement$1(element) && !noThrow) {
    throw new TypeError(element + " is not a DOM element.");
  }

  return element;
}

function createPointCB(object, options) {
  // A persistent object (as opposed to returned object) is used to save memory
  // This is good to prevent layout thrashing, or for games, and such
  // NOTE
  // This uses IE fixes which should be OK to remove some day. :)
  // Some speed will be gained by removal of these.
  // pointCB should be saved in a variable on return
  // This allows the usage of element.removeEventListener
  options = options || {};
  var allowUpdate = boolean(options.allowUpdate, true);
  /*if(typeof options.allowUpdate === 'function'){
      allowUpdate = options.allowUpdate;
  }else{
      allowUpdate = function(){return true;};
  }*/

  return function pointCB(event) {
    event = event || window.event; // IE-ism

    object.target = event.target || event.srcElement || event.originalTarget;
    object.element = this;
    object.type = event.type;

    if (!allowUpdate(event)) {
      return;
    } // Support touch
    // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


    if (event.targetTouches) {
      object.x = event.targetTouches[0].clientX;
      object.y = event.targetTouches[0].clientY;
      object.pageX = event.targetTouches[0].pageX;
      object.pageY = event.targetTouches[0].pageY;
      object.screenX = event.targetTouches[0].screenX;
      object.screenY = event.targetTouches[0].screenY;
    } else {
      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      // NOTE Hopefully this can be removed soon.
      if (event.pageX === null && event.clientX !== null) {
        var eventDoc = event.target && event.target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body;
        object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      } else {
        object.pageX = event.pageX;
        object.pageY = event.pageY;
      } // pageX, and pageY change with page scroll
      // so we're not going to use those for x, and y.
      // NOTE Most browsers also alias clientX/Y with x/y
      // so that's something to consider down the road.


      object.x = event.clientX;
      object.y = event.clientY;
      object.screenX = event.screenX;
      object.screenY = event.screenY;
    }

    object.clientX = object.x;
    object.clientY = object.y;
  }; //NOTE Remember accessibility, Aria roles, and labels.
}

function createWindowRect() {
  var props = {
    top: {
      value: 0,
      enumerable: true
    },
    left: {
      value: 0,
      enumerable: true
    },
    right: {
      value: window.innerWidth,
      enumerable: true
    },
    bottom: {
      value: window.innerHeight,
      enumerable: true
    },
    width: {
      value: window.innerWidth,
      enumerable: true
    },
    height: {
      value: window.innerHeight,
      enumerable: true
    },
    x: {
      value: 0,
      enumerable: true
    },
    y: {
      value: 0,
      enumerable: true
    }
  };

  if (Object.create) {
    return Object.create({}, props);
  } else {
    var rect = {};
    Object.defineProperties(rect, props);
    return rect;
  }
}

function getClientRect(el) {
  if (el === window) {
    return createWindowRect();
  } else {
    try {
      var rect = el.getBoundingClientRect();

      if (rect.x === undefined) {
        rect.x = rect.left;
        rect.y = rect.top;
      }

      return rect;
    } catch (e) {
      throw new TypeError("Can't call getBoundingClientRect on " + el);
    }
  }
}

function pointInside(point, el) {
  var rect = getClientRect(el);
  return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
}

var objectCreate = void 0;

if (typeof Object.create != 'function') {
  objectCreate = function (undefined$1) {
    var Temp = function Temp() {};

    return function (prototype, propertiesObject) {
      if (prototype !== Object(prototype) && prototype !== null) {
        throw TypeError('Argument must be an object, or null');
      }

      Temp.prototype = prototype || {};
      var result = new Temp();
      Temp.prototype = null;

      if (propertiesObject !== undefined$1) {
        Object.defineProperties(result, propertiesObject);
      } // to imitate the case of Object.create(null)


      if (prototype === null) {
        result.__proto__ = null;
      }

      return result;
    };
  }();
} else {
  objectCreate = Object.create;
}

var objectCreate$1 = objectCreate;
var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

function createDispatcher(element) {
  var defaultSettings = {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 1,
    relatedTarget: null,
    region: null
  };

  if (element !== undefined) {
    element.addEventListener('mousemove', onMove);
  }

  function onMove(e) {
    for (var i = 0; i < mouseEventProps.length; i++) {
      defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
    }
  }

  var dispatch = function () {
    if (MouseEvent) {
      return function m1(element, initMove, data) {
        var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

        setSpecial(evt, data);
        return element.dispatchEvent(evt);
      };
    } else if (typeof document.createEvent === 'function') {
      return function m2(element, initMove, data) {
        var settings = createMoveInit(defaultSettings, initMove);
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent("mousemove", true, //can bubble
        true, //cancelable
        window, //view
        0, //detail
        settings.screenX, //0, //screenX
        settings.screenY, //0, //screenY
        settings.clientX, //80, //clientX
        settings.clientY, //20, //clientY
        settings.ctrlKey, //false, //ctrlKey
        settings.altKey, //false, //altKey
        settings.shiftKey, //false, //shiftKey
        settings.metaKey, //false, //metaKey
        settings.button, //0, //button
        settings.relatedTarget //null //relatedTarget
        ); //evt.dispatched = 'mousemove';

        setSpecial(evt, data);
        return element.dispatchEvent(evt);
      };
    } else if (typeof document.createEventObject === 'function') {
      return function m3(element, initMove, data) {
        var evt = document.createEventObject();
        var settings = createMoveInit(defaultSettings, initMove);

        for (var name in settings) {
          evt[name] = settings[name];
        } //evt.dispatched = 'mousemove';


        setSpecial(evt, data);
        return element.dispatchEvent(evt);
      };
    }
  }();

  function destroy() {
    if (element) {
      element.removeEventListener('mousemove', onMove, false);
    }

    defaultSettings = null;
  }

  return {
    destroy: destroy,
    dispatch: dispatch
  };
}

function createMoveInit(defaultSettings, initMove) {
  initMove = initMove || {};
  var settings = objectCreate$1(defaultSettings);

  for (var i = 0; i < mouseEventProps.length; i++) {
    if (initMove[mouseEventProps[i]] !== undefined) {
      settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
    }
  }

  return settings;
}

function setSpecial(e, data) {
  console.log('data ', data);
  e.data = data || {};
  e.dispatched = 'mousemove';
}

var prefix = ['webkit', 'moz', 'ms', 'o'];

var requestFrame = function () {
  if (typeof window === "undefined") {
    return function () {};
  }

  for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
    window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    var lastTime = 0;

    window.requestAnimationFrame = function (callback) {
      var now = new Date().getTime();
      var ttc = Math.max(0, 16 - now - lastTime);
      var timer = window.setTimeout(function () {
        return callback(now + ttc);
      }, ttc);
      lastTime = now + ttc;
      return timer;
    };
  }

  return window.requestAnimationFrame.bind(window);
}();

var cancelFrame = function () {
  if (typeof window === "undefined") {
    return function () {};
  }

  for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
    window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (timer) {
      window.clearTimeout(timer);
    };
  }

  return window.cancelAnimationFrame.bind(window);
}();

function AutoScroller(elements, options) {
  if (options === void 0) options = {};
  var self = this;
  var maxSpeed = 4,
      scrolling = false;

  if (typeof options.margin !== 'object') {
    var margin = options.margin || -1;
    this.margin = {
      left: margin,
      right: margin,
      top: margin,
      bottom: margin
    };
  } else {
    this.margin = options.margin;
  } //this.scrolling = false;


  this.scrollWhenOutside = options.scrollWhenOutside || false;
  var point = {},
      pointCB = createPointCB(point),
      dispatcher = createDispatcher(),
      down = false;
  window.addEventListener('mousemove', pointCB, false);
  window.addEventListener('touchmove', pointCB, false);

  if (!isNaN(options.maxSpeed)) {
    maxSpeed = options.maxSpeed;
  }

  if (typeof maxSpeed !== 'object') {
    maxSpeed = {
      left: maxSpeed,
      right: maxSpeed,
      top: maxSpeed,
      bottom: maxSpeed
    };
  }

  this.autoScroll = boolean(options.autoScroll);
  this.syncMove = boolean(options.syncMove, false);

  this.destroy = function (forceCleanAnimation) {
    window.removeEventListener('mousemove', pointCB, false);
    window.removeEventListener('touchmove', pointCB, false);
    window.removeEventListener('mousedown', onDown, false);
    window.removeEventListener('touchstart', onDown, false);
    window.removeEventListener('mouseup', onUp, false);
    window.removeEventListener('touchend', onUp, false);
    window.removeEventListener('pointerup', onUp, false);
    window.removeEventListener('mouseleave', onMouseOut, false);
    window.removeEventListener('mousemove', onMove, false);
    window.removeEventListener('touchmove', onMove, false);
    window.removeEventListener('scroll', setScroll, true);
    elements = [];

    if (forceCleanAnimation) {
      cleanAnimation();
    }
  };

  this.add = function () {
    var element = [],
        len = arguments.length;

    while (len--) {
      element[len] = arguments[len];
    }

    addElements.apply(void 0, [elements].concat(element));
    return this;
  };

  this.remove = function () {
    var element = [],
        len = arguments.length;

    while (len--) {
      element[len] = arguments[len];
    }

    return removeElements.apply(void 0, [elements].concat(element));
  };

  var hasWindow = null,
      windowAnimationFrame;

  if (Object.prototype.toString.call(elements) !== '[object Array]') {
    elements = [elements];
  }

  (function (temp) {
    elements = [];
    temp.forEach(function (element) {
      if (element === window) {
        hasWindow = window;
      } else {
        self.add(element);
      }
    });
  })(elements);

  Object.defineProperties(this, {
    down: {
      get: function get() {
        return down;
      }
    },
    maxSpeed: {
      get: function get() {
        return maxSpeed;
      }
    },
    point: {
      get: function get() {
        return point;
      }
    },
    scrolling: {
      get: function get() {
        return scrolling;
      }
    }
  });
  var current = null,
      animationFrame;
  window.addEventListener('mousedown', onDown, false);
  window.addEventListener('touchstart', onDown, false);
  window.addEventListener('mouseup', onUp, false);
  window.addEventListener('touchend', onUp, false);
  /*
  IE does not trigger mouseup event when scrolling.
  It is a known issue that Microsoft won't fix.
  https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
  IE supports pointer events instead
  */

  window.addEventListener('pointerup', onUp, false);
  window.addEventListener('mousemove', onMove, false);
  window.addEventListener('touchmove', onMove, false);
  window.addEventListener('mouseleave', onMouseOut, false);
  window.addEventListener('scroll', setScroll, true);

  function setScroll(e) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] === e.target) {
        scrolling = true;
        break;
      }
    }

    if (scrolling) {
      requestFrame(function () {
        return scrolling = false;
      });
    }
  }

  function onDown() {
    down = true;
  }

  function onUp() {
    down = false;
    cleanAnimation();
  }

  function cleanAnimation() {
    cancelFrame(animationFrame);
    cancelFrame(windowAnimationFrame);
  }

  function onMouseOut() {
    down = false;
  }

  function getTarget(target) {
    if (!target) {
      return null;
    }

    if (current === target) {
      return target;
    }

    if (hasElement(elements, target)) {
      return target;
    }

    while (target = target.parentNode) {
      if (hasElement(elements, target)) {
        return target;
      }
    }

    return null;
  }

  function getElementUnderPoint() {
    var underPoint = null;

    for (var i = 0; i < elements.length; i++) {
      if (inside(point, elements[i])) {
        underPoint = elements[i];
      }
    }

    return underPoint;
  }

  function onMove(event) {
    if (!self.autoScroll()) {
      return;
    }

    if (event['dispatched']) {
      return;
    }

    var target = event.target,
        body = document.body;

    if (current && !inside(point, current)) {
      if (!self.scrollWhenOutside) {
        current = null;
      }
    }

    if (target && target.parentNode === body) {
      //The special condition to improve speed.
      target = getElementUnderPoint();
    } else {
      target = getTarget(target);

      if (!target) {
        target = getElementUnderPoint();
      }
    }

    if (target && target !== current) {
      current = target;
    }

    if (hasWindow) {
      cancelFrame(windowAnimationFrame);
      windowAnimationFrame = requestFrame(scrollWindow);
    }

    if (!current) {
      return;
    }

    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }

  function scrollWindow() {
    autoScroll(hasWindow);
    cancelFrame(windowAnimationFrame);
    windowAnimationFrame = requestFrame(scrollWindow);
  }

  function scrollTick() {
    if (!current) {
      return;
    }

    autoScroll(current);
    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }

  function autoScroll(el) {
    var rect = getClientRect(el),
        scrollx,
        scrolly;

    if (point.x < rect.left + self.margin.left) {
      scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left);
    } else if (point.x > rect.right - self.margin.right) {
      scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right);
    } else {
      scrollx = 0;
    }

    if (point.y < rect.top + self.margin.top) {
      scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top);
    } else if (point.y > rect.bottom - self.margin.bottom) {
      scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom);
    } else {
      scrolly = 0;
    }

    if (self.syncMove()) {
      /*
      Notes about mousemove event dispatch.
      screen(X/Y) should need to be updated.
      Some other properties might need to be set.
      Keep the syncMove option default false until all inconsistencies are taken care of.
      */
      dispatcher.dispatch(el, {
        pageX: point.pageX + scrollx,
        pageY: point.pageY + scrolly,
        clientX: point.x + scrollx,
        clientY: point.y + scrolly
      });
    }

    setTimeout(function () {
      if (scrolly) {
        scrollY(el, scrolly);
      }

      if (scrollx) {
        scrollX(el, scrollx);
      }
    });
  }

  function scrollY(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
    } else {
      el.scrollTop += amount;
    }
  }

  function scrollX(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
    } else {
      el.scrollLeft += amount;
    }
  }
}

function AutoScrollerFactory(element, options) {
  return new AutoScroller(element, options);
}

function inside(point, el, rect) {
  if (!rect) {
    return pointInside(point, el);
  } else {
    return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
  }
}
/*
git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
git push -u origin master
*/


/* harmony default export */ __webpack_exports__["default"] = (AutoScrollerFactory);

/***/ }),

/***/ 83362:
/*!***************************************************************************!*\
  !*** ./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": function() { return /* binding */ adapterFactory; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 19806);
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ 23302);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 48069);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 8815);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 98120);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 79223);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 46239);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 21889);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 57315);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 69400);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 49476);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 50752);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 45255);



function adapterFactory() {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)()), {
    addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__.default,
    addMonths: date_fns__WEBPACK_IMPORTED_MODULE_3__.default,
    subDays: date_fns__WEBPACK_IMPORTED_MODULE_4__.default,
    subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_5__.default,
    subMonths: date_fns__WEBPACK_IMPORTED_MODULE_6__.default,
    getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_7__.default,
    setDate: date_fns__WEBPACK_IMPORTED_MODULE_8__.default,
    setMonth: date_fns__WEBPACK_IMPORTED_MODULE_9__.default,
    setYear: date_fns__WEBPACK_IMPORTED_MODULE_10__.default,
    getDate: date_fns__WEBPACK_IMPORTED_MODULE_11__.default,
    getYear: date_fns__WEBPACK_IMPORTED_MODULE_12__.default
  });
} //# sourceMappingURL=index.js.map

/***/ }),

/***/ 67325:
/*!********************************************************************!*\
  !*** ./node_modules/angular-calendar/fesm2015/angular-calendar.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_WEEK": function() { return /* reexport safe */ calendar_utils__WEBPACK_IMPORTED_MODULE_6__.DAYS_OF_WEEK; },
/* harmony export */   "CalendarA11y": function() { return /* binding */ CalendarA11y; },
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* binding */ CalendarAngularDateFormatter; },
/* harmony export */   "CalendarCommonModule": function() { return /* binding */ CalendarCommonModule; },
/* harmony export */   "CalendarDateFormatter": function() { return /* binding */ CalendarDateFormatter; },
/* harmony export */   "CalendarDayModule": function() { return /* binding */ CalendarDayModule; },
/* harmony export */   "CalendarDayViewComponent": function() { return /* binding */ CalendarDayViewComponent; },
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* binding */ CalendarEventTimesChangedEventType; },
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* binding */ CalendarEventTitleFormatter; },
/* harmony export */   "CalendarModule": function() { return /* binding */ CalendarModule; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* binding */ CalendarMomentDateFormatter; },
/* harmony export */   "CalendarMonthModule": function() { return /* binding */ CalendarMonthModule; },
/* harmony export */   "CalendarMonthViewComponent": function() { return /* binding */ CalendarMonthViewComponent; },
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* binding */ CalendarNativeDateFormatter; },
/* harmony export */   "CalendarUtils": function() { return /* binding */ CalendarUtils; },
/* harmony export */   "CalendarView": function() { return /* binding */ CalendarView; },
/* harmony export */   "CalendarWeekModule": function() { return /* binding */ CalendarWeekModule; },
/* harmony export */   "CalendarWeekViewComponent": function() { return /* binding */ CalendarWeekViewComponent; },
/* harmony export */   "DateAdapter": function() { return /* binding */ DateAdapter; },
/* harmony export */   "MOMENT": function() { return /* binding */ MOMENT; },
/* harmony export */   "collapseAnimation": function() { return /* binding */ collapseAnimation; },
/* harmony export */   "getWeekViewPeriod": function() { return /* binding */ getWeekViewPeriod; },
/* harmony export */   "ɵa": function() { return /* binding */ CalendarOpenDayEventsComponent; },
/* harmony export */   "ɵb": function() { return /* binding */ CalendarEventActionsComponent; },
/* harmony export */   "ɵc": function() { return /* binding */ CalendarEventTitleComponent; },
/* harmony export */   "ɵd": function() { return /* binding */ CalendarTooltipWindowComponent; },
/* harmony export */   "ɵe": function() { return /* binding */ CalendarTooltipDirective; },
/* harmony export */   "ɵf": function() { return /* binding */ CalendarPreviousViewDirective; },
/* harmony export */   "ɵg": function() { return /* binding */ CalendarNextViewDirective; },
/* harmony export */   "ɵh": function() { return /* binding */ CalendarTodayDirective; },
/* harmony export */   "ɵi": function() { return /* binding */ CalendarDatePipe; },
/* harmony export */   "ɵj": function() { return /* binding */ CalendarEventTitlePipe; },
/* harmony export */   "ɵk": function() { return /* binding */ CalendarA11yPipe; },
/* harmony export */   "ɵl": function() { return /* binding */ ClickDirective; },
/* harmony export */   "ɵm": function() { return /* binding */ KeydownEnterDirective; },
/* harmony export */   "ɵn": function() { return /* binding */ CalendarMonthCellComponent; },
/* harmony export */   "ɵo": function() { return /* binding */ CalendarMonthViewHeaderComponent; },
/* harmony export */   "ɵp": function() { return /* binding */ CalendarWeekViewHeaderComponent; },
/* harmony export */   "ɵq": function() { return /* binding */ CalendarWeekViewEventComponent; },
/* harmony export */   "ɵr": function() { return /* binding */ CalendarWeekViewHourSegmentComponent; },
/* harmony export */   "ɵs": function() { return /* binding */ CalendarWeekViewCurrentTimeMarkerComponent; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 19806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! positioning */ 71867);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 69499);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! calendar-utils */ 90104);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-draggable-droppable */ 31369);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-resizable-element */ 19793);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 56083);

















var _c0 = function _c0(a0) {
  return {
    action: a0
  };
};

function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      var action_r7 = restoredCtx.$implicit;
      var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).event;
      return action_r7.onClick({
        event: event_r3,
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      var action_r7 = restoredCtx.$implicit;
      var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).event;
      return action_r7.onClick({
        event: event_r3,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var action_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
  }
}

function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var event_r3 = ctx_r13.event;
    var trackByActionId_r4 = ctx_r13.trackByActionId;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
  }
}

function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
  }

  if (rf & 2) {
    var event_r3 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", event_r3.actions);
  }
}

function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {}

var _c1 = function _c1(a0, a1) {
  return {
    event: a0,
    trackByActionId: a1
  };
};

var _c2 = function _c2() {
  return {};
};

function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "calendarA11y");
  }

  if (rf & 2) {
    var event_r3 = ctx.event;
    var view_r4 = ctx.view;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](1, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c2), "hideEventTitle"));
  }
}

function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {}

var _c3 = function _c3(a0, a1) {
  return {
    event: a0,
    view: a1
  };
};

function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var contents_r3 = ctx.contents;
    var placement_r4 = ctx.placement;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {}

var _c4 = function _c4(a0, a1, a2) {
  return {
    contents: a0,
    placement: a1,
    event: a2
  };
};

var _c5 = function _c5(a0) {
  return {
    backgroundColor: a0
  };
};

function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var day_r3 = restoredCtx.$implicit;
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r4.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var day_r3 = restoredCtx.$implicit;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r6.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      });
    })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r7.toggleDayHighlight($event.event, true);
    })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r8.toggleDayHighlight($event.event, false);
    })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var day_r3 = restoredCtx.$implicit;
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom);
    })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r10.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c5, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c2), "monthCellTabIndex"));
  }
}

function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mwl-calendar-open-day-events", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r11.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      });
    })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var rowIndex_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](3, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
  }
}

function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      var day_r7 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r8.columnHeaderClicked.emit({
        isoDayNumber: day_r7.day,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r7 = ctx.$implicit;
    var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", day_r7.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), " ");
  }
}

function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var days_r3 = ctx.days;
    var trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
  }
}

function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

var _c6 = function _c6(a0, a1, a2) {
  return {
    days: a0,
    locale: a1,
    trackByWeekDayHeaderDate: a2
  };
};

function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](day_r3.badgeTotal);
  }
}

var _c7 = function _c7(a0, a1) {
  return {
    event: a0,
    draggedFrom: a1
  };
};

var _c8 = function _c8(a0, a1) {
  return {
    x: a0,
    y: a1
  };
};

var _c9 = function _c9() {
  return {
    delay: 300,
    delta: 30
  };
};

function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      var event_r19 = restoredCtx.$implicit;
      var highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).highlightDay;
      return highlightDay_r7.emit({
        event: event_r19
      });
    })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      var event_r19 = restoredCtx.$implicit;
      var unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).unhighlightDay;
      return unhighlightDay_r8.emit({
        event: event_r19
      });
    })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      var event_r19 = restoredCtx.$implicit;
      var eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).eventClicked;
      return eventClicked_r9.emit({
        event: event_r19,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var event_r19 = ctx.$implicit;
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    var tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    var tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    var tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    var tooltipDelay_r12 = ctx_r27.tooltipDelay;
    var day_r3 = ctx_r27.day;
    var validateDrag_r14 = ctx_r27.validateDrag;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](22, _c5, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](24, _c7, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](27, _c8, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](30, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](31, _c2), "hideMonthCellEvents"));
  }
}

function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var day_r3 = ctx_r28.day;
    var trackByEventId_r13 = ctx_r28.trackByEventId;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
  }
}

var _c10 = function _c10(a0, a1) {
  return {
    day: a0,
    locale: a1
  };
};

function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
  }

  if (rf & 2) {
    var day_r3 = ctx.day;
    var locale_r5 = ctx.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](11, _c10, day_r3, locale_r5), "monthCell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](6, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
  }
}

function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {}

var _c11 = function _c11(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
  return {
    day: a0,
    openDay: a1,
    locale: a2,
    tooltipPlacement: a3,
    highlightDay: a4,
    unhighlightDay: a5,
    eventClicked: a6,
    tooltipTemplate: a7,
    tooltipAppendToBody: a8,
    tooltipDelay: a9,
    trackByEventId: a10,
    validateDrag: a11
  };
};

var _c12 = function _c12(a0) {
  return {
    event: a0
  };
};

var _c13 = function _c13(a0, a1) {
  return {
    event: a0,
    locale: a1
  };
};

function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mwl-calendar-event-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var event_r10 = restoredCtx.$implicit;
      var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).eventClicked;
      return eventClicked_r4.emit({
        event: event_r10,
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var event_r10 = restoredCtx.$implicit;
      var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).eventClicked;
      return eventClicked_r4.emit({
        event: event_r10,
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mwl-calendar-event-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var event_r10 = ctx.$implicit;
    var validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).validateDrag;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c12, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](18, _c8, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](22, _c5, event_r10.color == null ? null : event_r10.color.primary));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](24, _c13, event_r10, ctx_r9.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
  }
}

var _c14 = function _c14(a0, a1) {
  return {
    date: a0,
    locale: a1
  };
};

function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var events_r3 = ctx_r17.events;
    var trackByEventId_r6 = ctx_r17.trackByEventId;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@collapse", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](11, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](14, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
  }
}

function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
  }

  if (rf & 2) {
    var isOpen_r5 = ctx.isOpen;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", isOpen_r5);
  }
}

function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {}

var _c15 = function _c15(a0, a1, a2, a3, a4) {
  return {
    events: a0,
    eventClicked: a1,
    isOpen: a2,
    trackByEventId: a3,
    validateDrag: a4
  };
};

function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      var day_r7 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r8.eventDropped($event, day_r7.date, true);
    })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      var day_r7 = restoredCtx.$implicit;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r10.dateDragEnter(day_r7.date);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

var _c16 = function _c16() {
  return {
    left: true
  };
};

function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c16));
  }
}

var _c17 = function _c17() {
  return {
    right: true
  };
};

function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c17));
  }
}

var _c18 = function _c18(a0, a1) {
  return {
    left: a0,
    right: a1
  };
};

var _c19 = function _c19(a0, a1) {
  return {
    event: a0,
    calendarId: a1
  };
};

var _c20 = function _c20(a0) {
  return {
    x: a0
  };
};

function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      var allDayEvent_r14 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

      var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event);
    })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      var allDayEvent_r14 = restoredCtx.$implicit;
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth);
    })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      var allDayEvent_r14 = restoredCtx.$implicit;
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r21.allDayEventResizeEnded(allDayEvent_r14);
    })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

      var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

      var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r22.dragStarted(_r12, _r15);
    })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r23.allDayEventDragMove();
    })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      var allDayEvent_r14 = restoredCtx.$implicit;
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      var allDayEvent_r14 = restoredCtx.$implicit;
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r25.eventClicked.emit({
        event: allDayEvent_r14.event,
        sourceEvent: $event.sourceEvent
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var allDayEvent_r14 = ctx.$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](30, _c18, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](33, _c19, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](36, _c8, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](39, _c20, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](41, _c2))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](42, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
  }
}

function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var eventRow_r11 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
  }
}

function CalendarWeekViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r26.dragEnter("allDay");
    })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r28.dragLeave("allDay");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
  }
}

function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mwl-calendar-week-view-hour-segment", 28);
  }

  if (rf & 2) {
    var segment_r33 = ctx.$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
  }
}

function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var hour_r30 = ctx.$implicit;
    var odd_r31 = ctx.odd;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-hour-odd", odd_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
  }
}

function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
  }
}

var _c21 = function _c21() {
  return {
    left: true,
    top: true
  };
};

function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c21));
  }
}

function CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template(rf, ctx) {}

function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mwl-calendar-week-view-event", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46);
      var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r44.eventClicked.emit({
        event: timeEvent_r37.event,
        sourceEvent: $event.sourceEvent
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
  }
}

var _c22 = function _c22() {
  return {
    right: true,
    bottom: true
  };
};

function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c22));
  }
}

var _c23 = function _c23(a0, a1, a2, a3) {
  return {
    left: a0,
    right: a1,
    top: a2,
    bottom: a3
  };
};

function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      var timeEvent_r37 = restoredCtx.$implicit;
      var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

      return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event);
    })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      var timeEvent_r37 = restoredCtx.$implicit;
      var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r51.timeEventResizing(timeEvent_r37, $event);
    })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      var timeEvent_r37 = restoredCtx.$implicit;
      var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r52.timeEventResizeEnded(timeEvent_r37);
    })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      var timeEvent_r37 = restoredCtx.$implicit;

      var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

      return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37);
    })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      var timeEvent_r37 = restoredCtx.$implicit;
      var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r54.dragMove(timeEvent_r37, $event);
    })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      var timeEvent_r37 = restoredCtx.$implicit;
      var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template, 1, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_7_div_3_div_6_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var timeEvent_r37 = ctx.$implicit;

    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);

    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](29, _c23, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](34, _c19, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](37, _c8, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](40, _c8, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](43, _c2))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](44, _c9))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
  }
}

function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      var segment_r59 = restoredCtx.$implicit;
      var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r60.hourSegmentClicked.emit({
        date: segment_r59.date,
        sourceEvent: $event
      });
    })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      var segment_r59 = restoredCtx.$implicit;
      var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r62.eventDropped($event, segment_r59.date, false);
    })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      var segment_r59 = restoredCtx.$implicit;
      var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return ctx_r63.dateDragEnter(segment_r59.date);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var segment_r59 = ctx.$implicit;
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
  }
}

function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var hour_r56 = ctx.$implicit;
    var odd_r57 = ctx.odd;
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-hour-odd", odd_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
  }
}

function CalendarWeekViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mwl-calendar-week-view-current-time-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_Template, 7, 45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var column_r34 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
  }
}

function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var day_r10 = restoredCtx.$implicit;
      var dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().dayHeaderClicked;
      return dayHeaderClicked_r5.emit({
        day: day_r10,
        sourceEvent: $event
      });
    })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var day_r10 = restoredCtx.$implicit;
      var eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().eventDropped;
      return eventDropped_r6.emit({
        event: $event.dropData.event,
        newStart: day_r10.date
      });
    })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      var day_r10 = restoredCtx.$implicit;
      var dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().dragEnter;
      return dragEnter_r8.emit({
        date: day_r10.date
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r10 = ctx.$implicit;
    var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", day_r10.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](3, 11, day_r10.date, "weekViewColumnHeader", locale_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](7, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
  }
}

function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var days_r3 = ctx.days;
    var trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
  }
}

function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

var _c24 = function _c24(a0, a1, a2, a3, a4, a5) {
  return {
    days: a0,
    locale: a1,
    dayHeaderClicked: a2,
    eventDropped: a3,
    dragEnter: a4,
    trackByWeekDayHeaderDate: a5
  };
};

var _c25 = function _c25(a0, a1) {
  return {
    backgroundColor: a0,
    borderColor: a1
  };
};

function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      var eventClicked_r5 = restoredCtx.eventClicked;
      return eventClicked_r5.emit({
        sourceEvent: $event
      });
    })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      var eventClicked_r5 = restoredCtx.eventClicked;
      return eventClicked_r5.emit({
        sourceEvent: $event
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mwl-calendar-event-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mwl-calendar-event-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var weekEvent_r3 = ctx.weekEvent;
    var tooltipPlacement_r4 = ctx.tooltipPlacement;
    var tooltipTemplate_r6 = ctx.tooltipTemplate;
    var tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
    var tooltipDisabled_r8 = ctx.tooltipDisabled;
    var tooltipDelay_r9 = ctx.tooltipDelay;
    var daysInWeek_r11 = ctx.daysInWeek;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](20, _c25, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](1, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 17, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](23, _c13, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
  }
}

function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {}

var _c26 = function _c26(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
  return {
    weekEvent: a0,
    tooltipPlacement: a1,
    eventClicked: a2,
    tooltipTemplate: a3,
    tooltipAppendToBody: a4,
    tooltipDisabled: a5,
    tooltipDelay: a6,
    column: a7,
    daysInWeek: a8
  };
};

function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var segment_r3 = ctx_r9.segment;
    var daysInWeek_r7 = ctx_r9.daysInWeek;
    var locale_r4 = ctx_r9.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), " ");
  }
}

function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var segment_r3 = ctx.segment;
    var segmentHeight_r5 = ctx.segmentHeight;
    var isTimeLabel_r6 = ctx.isTimeLabel;
    var daysInWeek_r7 = ctx.daysInWeek;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", segment_r3.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c2), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
  }
}

function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {}

var _c27 = function _c27(a0, a1, a2, a3, a4) {
  return {
    segment: a0,
    locale: a1,
    segmentHeight: a2,
    isTimeLabel: a3,
    daysInWeek: a4
  };
};

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 3);
  }

  if (rf & 2) {
    var topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().topPx;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("top", topPx_r9, "px");
  }
}

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
  }

  if (rf & 2) {
    var isVisible_r8 = ctx.isVisible;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", isVisible_r8);
  }
}

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {}

var _c28 = function _c28(a0, a1, a2, a3, a4, a5, a6) {
  return {
    columnDate: a0,
    dayStartHour: a1,
    dayStartMinute: a2,
    dayEndHour: a3,
    dayEndMinute: a4,
    isVisible: a5,
    topPx: a6
  };
};






var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarEventActionsComponent);

  this.trackByActionId = function (index, action) {
    return action.id ? action.id : action;
  };
};

CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
  return new (t || CalendarEventActionsComponent)();
};

CalendarEventActionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarEventActionsComponent,
  selectors: [["mwl-calendar-event-actions"]],
  inputs: {
    event: "event",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
  template: function CalendarEventActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ClickDirective, KeydownEnterDirective];
  },
  pipes: function pipes() {
    return [CalendarA11yPipe];
  },
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarEventActionsComponent.prototype, "event", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarEventActionsComponent.prototype, "customTemplate", void 0);

var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarEventTitleComponent);
};

CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
  return new (t || CalendarEventTitleComponent)();
};

CalendarEventTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarEventTitleComponent,
  selectors: [["mwl-calendar-event-title"]],
  inputs: {
    event: "event",
    customTemplate: "customTemplate",
    view: "view"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
  template: function CalendarEventTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](2, _c3, ctx.event, ctx.view));
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet];
  },
  pipes: function pipes() {
    return [CalendarEventTitlePipe, CalendarA11yPipe];
  },
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarEventTitleComponent.prototype, "event", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarEventTitleComponent.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarEventTitleComponent.prototype, "view", void 0);

var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarTooltipWindowComponent);
};

CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
  return new (t || CalendarTooltipWindowComponent)();
};

CalendarTooltipWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarTooltipWindowComponent,
  selectors: [["mwl-calendar-tooltip-window"]],
  inputs: {
    contents: "contents",
    placement: "placement",
    event: "event",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 6,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
  template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](2, _c4, ctx.contents, ctx.placement, ctx.event));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarTooltipWindowComponent.prototype, "contents", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarTooltipWindowComponent.prototype, "placement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarTooltipWindowComponent.prototype, "event", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);

var CalendarTooltipDirective = /*#__PURE__*/function () {
  function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
  ) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarTooltipDirective);

    this.elementRef = elementRef;
    this.injector = injector;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.document = document;
    this.placement = 'auto'; // tslint:disable-line no-input-rename

    this.delay = null; // tslint:disable-line no-input-rename

    this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarTooltipDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
        this.tooltipRef.instance.contents = this.contents;
        this.tooltipRef.instance.customTemplate = this.customTemplate;
        this.tooltipRef.instance.event = this.event;
        this.tooltipRef.changeDetectorRef.markForCheck();

        if (!this.contents) {
          this.hide();
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.hide();
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver() {
      var _this = this;

      var delay$ = this.delay === null ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)('now') : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(this.delay);
      delay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.cancelTooltipDelay$)).subscribe(function () {
        _this.show();
      });
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut() {
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      if (!this.tooltipRef && this.contents) {
        this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
        this.tooltipRef.instance.contents = this.contents;
        this.tooltipRef.instance.customTemplate = this.customTemplate;
        this.tooltipRef.instance.event = this.event;

        if (this.appendToBody) {
          this.document.body.appendChild(this.tooltipRef.location.nativeElement);
        }

        requestAnimationFrame(function () {
          _this2.positionTooltip();
        });
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.tooltipRef) {
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
        this.tooltipRef = null;
      }

      this.cancelTooltipDelay$.next();
    }
  }, {
    key: "positionTooltip",
    value: function positionTooltip() {
      var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.tooltipRef) {
        this.tooltipRef.changeDetectorRef.detectChanges();
        this.tooltipRef.instance.placement = (0,positioning__WEBPACK_IMPORTED_MODULE_5__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

        if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
          this.positionTooltip([].concat((0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(previousPositions), [this.tooltipRef.instance.placement]));
        }
      }
    }
  }]);

  return CalendarTooltipDirective;
}();

CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
  return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
};

CalendarTooltipDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CalendarTooltipDirective,
  selectors: [["", "mwlCalendarTooltip", ""]],
  hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseOver();
      })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseOut();
      });
    }
  },
  inputs: {
    placement: ["tooltipPlacement", "placement"],
    delay: ["tooltipDelay", "delay"],
    contents: ["mwlCalendarTooltip", "contents"],
    customTemplate: ["tooltipTemplate", "customTemplate"],
    event: ["tooltipEvent", "event"],
    appendToBody: ["tooltipAppendToBody", "appendToBody"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

CalendarTooltipDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('mwlCalendarTooltip'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarTooltipDirective.prototype, "contents", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('tooltipPlacement'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarTooltipDirective.prototype, "placement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('tooltipTemplate'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarTooltipDirective.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('tooltipEvent'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarTooltipDirective.prototype, "event", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('tooltipAppendToBody'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarTooltipDirective.prototype, "appendToBody", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)('tooltipDelay'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarTooltipDirective.prototype, "delay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener)('mouseenter'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOver", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener)('mouseleave'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOut", null);

CalendarTooltipDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(5, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ComponentFactoryResolver, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef, Object])], CalendarTooltipDirective);

var DateAdapter = function DateAdapter() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, DateAdapter);
};

var CalendarView;

(function (CalendarView) {
  CalendarView["Month"] = "month";
  CalendarView["Week"] = "week";
  CalendarView["Day"] = "day";
})(CalendarView || (CalendarView = {}));

var validateEvents = function validateEvents(events) {
  var warn = function warn() {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
  };

  return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_6__.validateEvents)(events, warn);
};

function isInside(outer, inner) {
  return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
}

function roundToNearest(amount, precision) {
  return Math.round(amount / precision) * precision;
}

var trackByEventId = function trackByEventId(index, event) {
  return event.id ? event.id : event;
};

var trackByWeekDayHeaderDate = function trackByWeekDayHeaderDate(index, day) {
  return day.date.toISOString();
};

var trackByHourSegment = function trackByHourSegment(index, segment) {
  return segment.date.toISOString();
};

var trackByHour = function trackByHour(index, hour) {
  return hour.segments[0].date.toISOString();
};

var trackByWeekAllDayEvent = function trackByWeekAllDayEvent(index, weekEvent) {
  return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
};

var trackByWeekTimeEvent = function trackByWeekTimeEvent(index, weekEvent) {
  return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
};

var MINUTES_IN_HOUR = 60;

function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
  return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
}

function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
  var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
  var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
  return draggedInPixelsSnapSize * pixelAmountInMinutes;
}

function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
  return getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight;
}

function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
  if (event.end) {
    return event.end;
  } else {
    return dateAdapter.addMinutes(event.start, minimumMinutes);
  }
}

function addDaysWithExclusions(dateAdapter, date, days, excluded) {
  var daysCounter = 0;
  var daysToAdd = 0;
  var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
  var result = date;

  while (daysToAdd <= Math.abs(days)) {
    result = changeDays(date, daysCounter);
    var day = dateAdapter.getDay(result);

    if (excluded.indexOf(day) === -1) {
      daysToAdd++;
    }

    daysCounter++;
  }

  return result;
}

function isDraggedWithinPeriod(newStart, newEnd, period) {
  var end = newEnd || newStart;
  return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
}

function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
  return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
}

function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
  var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
  var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  });
  var endOfWeek = dateAdapter.endOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  });

  while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
    viewStart = dateAdapter.addDays(viewStart, 1);
  }

  if (daysInWeek) {
    var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
    return {
      viewStart: viewStart,
      viewEnd: viewEnd
    };
  } else {
    var _viewEnd = endOfWeek;

    while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
      _viewEnd = dateAdapter.subDays(_viewEnd, 1);
    }

    return {
      viewStart: viewStart,
      viewEnd: _viewEnd
    };
  }
}

function isWithinThreshold(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var DRAG_THRESHOLD = 1;
  return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */


var CalendarPreviousViewDirective = /*#__PURE__*/function () {
  function CalendarPreviousViewDirective(dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarPreviousViewDirective);

    this.dateAdapter = dateAdapter;
    /**
     * Days to skip when going back by 1 day
     */

    this.excludeDays = [];
    /**
     * Called when the view date is changed
     */

    this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  /**
   * @hidden
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarPreviousViewDirective, [{
    key: "onClick",
    value: function onClick() {
      var subFn = {
        day: this.dateAdapter.subDays,
        week: this.dateAdapter.subWeeks,
        month: this.dateAdapter.subMonths
      }[this.view];

      if (this.view === CalendarView.Day) {
        this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
      } else if (this.view === CalendarView.Week && this.daysInWeek) {
        this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
      } else {
        this.viewDateChange.emit(subFn(this.viewDate, 1));
      }
    }
  }]);

  return CalendarPreviousViewDirective;
}();

CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
  return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarPreviousViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CalendarPreviousViewDirective,
  selectors: [["", "mwlCalendarPreviousView", ""]],
  hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    excludeDays: "excludeDays",
    view: "view",
    viewDate: "viewDate",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});

CalendarPreviousViewDirective.ctorParameters = function () {
  return [{
    type: DateAdapter
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarPreviousViewDirective.prototype, "view", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarPreviousViewDirective.prototype, "viewDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener)('click'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:returntype", void 0)], CalendarPreviousViewDirective.prototype, "onClick", null);

CalendarPreviousViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter])], CalendarPreviousViewDirective);
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */

var CalendarNextViewDirective = /*#__PURE__*/function () {
  function CalendarNextViewDirective(dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarNextViewDirective);

    this.dateAdapter = dateAdapter;
    /**
     * Days to skip when going forward by 1 day
     */

    this.excludeDays = [];
    /**
     * Called when the view date is changed
     */

    this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  /**
   * @hidden
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarNextViewDirective, [{
    key: "onClick",
    value: function onClick() {
      var addFn = {
        day: this.dateAdapter.addDays,
        week: this.dateAdapter.addWeeks,
        month: this.dateAdapter.addMonths
      }[this.view];

      if (this.view === CalendarView.Day) {
        this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
      } else if (this.view === CalendarView.Week && this.daysInWeek) {
        this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
      } else {
        this.viewDateChange.emit(addFn(this.viewDate, 1));
      }
    }
  }]);

  return CalendarNextViewDirective;
}();

CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
  return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarNextViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CalendarNextViewDirective,
  selectors: [["", "mwlCalendarNextView", ""]],
  hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    excludeDays: "excludeDays",
    view: "view",
    viewDate: "viewDate",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});

CalendarNextViewDirective.ctorParameters = function () {
  return [{
    type: DateAdapter
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarNextViewDirective.prototype, "view", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarNextViewDirective.prototype, "viewDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarNextViewDirective.prototype, "excludeDays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarNextViewDirective.prototype, "daysInWeek", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], CalendarNextViewDirective.prototype, "viewDateChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener)('click'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:returntype", void 0)], CalendarNextViewDirective.prototype, "onClick", null);

CalendarNextViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter])], CalendarNextViewDirective);
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */

var CalendarTodayDirective = /*#__PURE__*/function () {
  function CalendarTodayDirective(dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarTodayDirective);

    this.dateAdapter = dateAdapter;
    /**
     * Called when the view date is changed
     */

    this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  /**
   * @hidden
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarTodayDirective, [{
    key: "onClick",
    value: function onClick() {
      this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }
  }]);

  return CalendarTodayDirective;
}();

CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
  return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarTodayDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CalendarTodayDirective,
  selectors: [["", "mwlCalendarToday", ""]],
  hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    viewDate: "viewDate"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});

CalendarTodayDirective.ctorParameters = function () {
  return [{
    type: DateAdapter
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarTodayDirective.prototype, "viewDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], CalendarTodayDirective.prototype, "viewDateChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener)('click'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:returntype", void 0)], CalendarTodayDirective.prototype, "onClick", null);

CalendarTodayDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter])], CalendarTodayDirective);
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */

var CalendarAngularDateFormatter = /*#__PURE__*/function () {
  function CalendarAngularDateFormatter(dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarAngularDateFormatter);

    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarAngularDateFormatter, [{
    key: "monthViewColumnHeader",
    value: function monthViewColumnHeader(_ref2) {
      var date = _ref2.date,
          locale = _ref2.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The month view cell day number
     */

  }, {
    key: "monthViewDayNumber",
    value: function monthViewDayNumber(_ref3) {
      var date = _ref3.date,
          locale = _ref3.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'd', locale);
    }
    /**
     * The month view title
     */

  }, {
    key: "monthViewTitle",
    value: function monthViewTitle(_ref4) {
      var date = _ref4.date,
          locale = _ref4.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'LLLL y', locale);
    }
    /**
     * The week view header week day labels
     */

  }, {
    key: "weekViewColumnHeader",
    value: function weekViewColumnHeader(_ref5) {
      var date = _ref5.date,
          locale = _ref5.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The week view sub header day and month labels
     */

  }, {
    key: "weekViewColumnSubHeader",
    value: function weekViewColumnSubHeader(_ref6) {
      var date = _ref6.date,
          locale = _ref6.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'MMM d', locale);
    }
    /**
     * The week view title
     */

  }, {
    key: "weekViewTitle",
    value: function weekViewTitle(_ref7) {
      var date = _ref7.date,
          locale = _ref7.locale,
          weekStartsOn = _ref7.weekStartsOn,
          excludeDays = _ref7.excludeDays,
          daysInWeek = _ref7.daysInWeek;

      var _getWeekViewPeriod = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
          viewStart = _getWeekViewPeriod.viewStart,
          viewEnd = _getWeekViewPeriod.viewEnd;

      var format = function format(dateToFormat, showYear) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
      };

      return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
    }
    /**
     * The time formatting down the left hand side of the week view
     */

  }, {
    key: "weekViewHour",
    value: function weekViewHour(_ref8) {
      var date = _ref8.date,
          locale = _ref8.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'h a', locale);
    }
    /**
     * The time formatting down the left hand side of the day view
     */

  }, {
    key: "dayViewHour",
    value: function dayViewHour(_ref9) {
      var date = _ref9.date,
          locale = _ref9.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'h a', locale);
    }
    /**
     * The day view title
     */

  }, {
    key: "dayViewTitle",
    value: function dayViewTitle(_ref10) {
      var date = _ref10.date,
          locale = _ref10.locale;
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'EEEE, MMMM d, y', locale);
    }
  }]);

  return CalendarAngularDateFormatter;
}();

CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
  return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](DateAdapter));
};

CalendarAngularDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CalendarAngularDateFormatter,
  factory: function factory(t) {
    return CalendarAngularDateFormatter.ɵfac(t);
  }
});

CalendarAngularDateFormatter.ctorParameters = function () {
  return [{
    type: DateAdapter
  }];
};

CalendarAngularDateFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter])], CalendarAngularDateFormatter);
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * @Injectable()
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */

var CalendarDateFormatter = /*#__PURE__*/function (_CalendarAngularDateF) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(CalendarDateFormatter, _CalendarAngularDateF);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(CalendarDateFormatter);

  function CalendarDateFormatter() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarDateFormatter);

    return _super.apply(this, arguments);
  }

  return CalendarDateFormatter;
}(CalendarAngularDateFormatter);

CalendarDateFormatter.ɵfac = /*@__PURE__*/function () {
  var ɵCalendarDateFormatter_BaseFactory;
  return function CalendarDateFormatter_Factory(t) {
    return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](CalendarDateFormatter)))(t || CalendarDateFormatter);
  };
}();

CalendarDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CalendarDateFormatter,
  factory: function factory(t) {
    return CalendarDateFormatter.ɵfac(t);
  }
});
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */

var CalendarDatePipe = /*#__PURE__*/function () {
  function CalendarDatePipe(dateFormatter, locale) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarDatePipe);

    this.dateFormatter = dateFormatter;
    this.locale = locale;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarDatePipe, [{
    key: "transform",
    value: function transform(date, method) {
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
      var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

      if (typeof this.dateFormatter[method] === 'undefined') {
        var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) {
          return iMethod !== 'constructor';
        });
        throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
      }

      return this.dateFormatter[method]({
        date: date,
        locale: locale,
        weekStartsOn: weekStartsOn,
        excludeDays: excludeDays,
        daysInWeek: daysInWeek
      });
    }
  }]);

  return CalendarDatePipe;
}();

CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
  return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID, 16));
};

CalendarDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
  name: "calendarDate",
  type: CalendarDatePipe,
  pure: true
});

CalendarDatePipe.ctorParameters = function () {
  return [{
    type: CalendarDateFormatter
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
    }]
  }];
};

CalendarDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [CalendarDateFormatter, String])], CalendarDatePipe);
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * @Injectable()
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */

var CalendarEventTitleFormatter = /*#__PURE__*/function () {
  function CalendarEventTitleFormatter() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarEventTitleFormatter);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarEventTitleFormatter, [{
    key: "month",
    value:
    /**
     * The month view event title.
     */
    function month(event, title) {
      return event.title;
    }
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */

  }, {
    key: "monthTooltip",
    value: function monthTooltip(event, title) {
      return event.title;
    }
    /**
     * The week view event title.
     */

  }, {
    key: "week",
    value: function week(event, title) {
      return event.title;
    }
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */

  }, {
    key: "weekTooltip",
    value: function weekTooltip(event, title) {
      return event.title;
    }
    /**
     * The day view event title.
     */

  }, {
    key: "day",
    value: function day(event, title) {
      return event.title;
    }
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */

  }, {
    key: "dayTooltip",
    value: function dayTooltip(event, title) {
      return event.title;
    }
  }]);

  return CalendarEventTitleFormatter;
}();

var CalendarEventTitlePipe = /*#__PURE__*/function () {
  function CalendarEventTitlePipe(calendarEventTitle) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarEventTitlePipe);

    this.calendarEventTitle = calendarEventTitle;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarEventTitlePipe, [{
    key: "transform",
    value: function transform(title, titleType, event) {
      return this.calendarEventTitle[titleType](event, title);
    }
  }]);

  return CalendarEventTitlePipe;
}();

CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
  return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CalendarEventTitleFormatter, 16));
};

CalendarEventTitlePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
  name: "calendarEventTitle",
  type: CalendarEventTitlePipe,
  pure: true
});

CalendarEventTitlePipe.ctorParameters = function () {
  return [{
    type: CalendarEventTitleFormatter
  }];
};

CalendarEventTitlePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [CalendarEventTitleFormatter])], CalendarEventTitlePipe);

var ClickDirective = /*#__PURE__*/function () {
  function ClickDirective(renderer, elm, document) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, ClickDirective);

    this.renderer = renderer;
    this.elm = elm;
    this.document = document;
    this.clickListenerDisabled = false;
    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(); // tslint:disable-line

    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ClickDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      if (!this.clickListenerDisabled) {
        this.listen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(function (event) {
          event.stopPropagation();

          _this3.click.emit(event);
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroy$.next();
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this4 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable(function (observer) {
        return _this4.renderer.listen(_this4.elm.nativeElement, 'click', function (event) {
          observer.next(event);
        });
      });
    }
  }]);

  return ClickDirective;
}();

ClickDirective.ɵfac = function ClickDirective_Factory(t) {
  return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
};

ClickDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ClickDirective,
  selectors: [["", "mwlClick", ""]],
  inputs: {
    clickListenerDisabled: "clickListenerDisabled"
  },
  outputs: {
    click: "mwlClick"
  }
});

ClickDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], ClickDirective.prototype, "clickListenerDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)('mwlClick'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], ClickDirective.prototype, "click", void 0);

ClickDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, Object])], ClickDirective);

var KeydownEnterDirective = /*#__PURE__*/function () {
  function KeydownEnterDirective(host, ngZone, renderer) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, KeydownEnterDirective);

    this.host = host;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(); // tslint:disable-line

    this.keydownListener = null;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(KeydownEnterDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this5 = this;

      this.ngZone.runOutsideAngular(function () {
        _this5.keydownListener = _this5.renderer.listen(_this5.host.nativeElement, 'keydown', function (event) {
          if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();

            _this5.ngZone.run(function () {
              _this5.keydown.emit(event);
            });
          }
        });
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.keydownListener !== null) {
        this.keydownListener();
        this.keydownListener = null;
      }
    }
  }]);

  return KeydownEnterDirective;
}();

KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
  return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2));
};

KeydownEnterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: KeydownEnterDirective,
  selectors: [["", "mwlKeydownEnter", ""]],
  outputs: {
    keydown: "mwlKeydownEnter"
  }
});

KeydownEnterDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)('mwlKeydownEnter'), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], KeydownEnterDirective.prototype, "keydown", void 0);

KeydownEnterDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2])], KeydownEnterDirective);

var CalendarUtils = /*#__PURE__*/function () {
  function CalendarUtils(dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarUtils);

    this.dateAdapter = dateAdapter;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarUtils, [{
    key: "getMonthView",
    value: function getMonthView(args) {
      return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_6__.getMonthView)(this.dateAdapter, args);
    }
  }, {
    key: "getWeekViewHeader",
    value: function getWeekViewHeader(args) {
      return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_6__.getWeekViewHeader)(this.dateAdapter, args);
    }
  }, {
    key: "getWeekView",
    value: function getWeekView(args) {
      return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_6__.getWeekView)(this.dateAdapter, args);
    }
  }]);

  return CalendarUtils;
}();

CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
  return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](DateAdapter));
};

CalendarUtils.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CalendarUtils,
  factory: function factory(t) {
    return CalendarUtils.ɵfac(t);
  }
});

CalendarUtils.ctorParameters = function () {
  return [{
    type: DateAdapter
  }];
};

CalendarUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter])], CalendarUtils);
/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */

var CalendarA11y = /*#__PURE__*/function () {
  function CalendarA11y(i18nPlural) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarA11y);

    this.i18nPlural = i18nPlural;
  }
  /**
   * Aria label for the badges/date of a cell
   * @example: `Saturday October 19 1 event click to expand`
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarA11y, [{
    key: "monthCell",
    value: function monthCell(_ref11) {
      var day = _ref11.day,
          locale = _ref11.locale;

      if (day.badgeTotal > 0) {
        return "\n        ".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
          '=0': 'No events',
          '=1': 'One event',
          other: '# events'
        }), ",\n         click to expand\n      ");
      } else {
        return "".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(day.date, 'EEEE MMMM d', locale));
      }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */

  }, {
    key: "openDayEventsLandmark",
    value: function openDayEventsLandmark(_ref12) {
      var date = _ref12.date,
          locale = _ref12.locale;
      return "\n      Beginning of expanded view for ".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'EEEE MMMM dd', locale), "\n    ");
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */

  }, {
    key: "openDayEventsAlert",
    value: function openDayEventsAlert(_ref13) {
      var date = _ref13.date,
          locale = _ref13.locale;
      return "".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'EEEE MMMM dd', locale), " expanded");
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */

  }, {
    key: "eventDescription",
    value: function eventDescription(_ref14) {
      var event = _ref14.event,
          locale = _ref14.locale;

      if (event.allDay === true) {
        return this.allDayEventDescription({
          event: event,
          locale: locale
        });
      }

      var aria = "\n      ".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(event.start, 'hh:mm a', locale), "\n    ");

      if (event.end) {
        return aria + " to ".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(event.end, 'hh:mm a', locale));
      }

      return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */

  }, {
    key: "allDayEventDescription",
    value: function allDayEventDescription(_ref15) {
      var event = _ref15.event,
          locale = _ref15.locale;
      var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

      if (event.end) {
        return aria + ", stop time ".concat((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(event.end, 'MMMM d hh:mm a', locale));
      }

      return aria + ", no stop time";
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */

  }, {
    key: "actionButtonLabel",
    value: function actionButtonLabel(_ref16) {
      var action = _ref16.action;
      return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */

  }, {
    key: "monthCellTabIndex",
    value: function monthCellTabIndex() {
      return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */

  }, {
    key: "hideMonthCellEvents",
    value: function hideMonthCellEvents() {
      return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */

  }, {
    key: "hideEventTitle",
    value: function hideEventTitle() {
      return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */

  }, {
    key: "hideWeekHourSegment",
    value: function hideWeekHourSegment() {
      return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */

  }, {
    key: "hideDayHourSegment",
    value: function hideDayHourSegment() {
      return true;
    }
  }]);

  return CalendarA11y;
}();

CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
  return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe));
};

CalendarA11y.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CalendarA11y,
  factory: function factory(t) {
    return CalendarA11y.ɵfac(t);
  }
});

CalendarA11y.ctorParameters = function () {
  return [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe
  }];
};

CalendarA11y = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe])], CalendarA11y);
/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */

var CalendarA11yPipe = /*#__PURE__*/function () {
  function CalendarA11yPipe(calendarA11y, locale) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarA11yPipe);

    this.calendarA11y = calendarA11y;
    this.locale = locale;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarA11yPipe, [{
    key: "transform",
    value: function transform(a11yParams, method) {
      a11yParams.locale = a11yParams.locale || this.locale;

      if (typeof this.calendarA11y[method] === 'undefined') {
        var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) {
          return iMethod !== 'constructor';
        });
        throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
      }

      return this.calendarA11y[method](a11yParams);
    }
  }]);

  return CalendarA11yPipe;
}();

CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
  return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID, 16));
};

CalendarA11yPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
  name: "calendarA11y",
  type: CalendarA11yPipe,
  pure: true
});

CalendarA11yPipe.ctorParameters = function () {
  return [{
    type: CalendarA11y
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
    }]
  }];
};

CalendarA11yPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [CalendarA11y, String])], CalendarA11yPipe);
var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */

var CalendarMomentDateFormatter = /*#__PURE__*/function () {
  /**
   * @hidden
   */
  function CalendarMomentDateFormatter(moment, dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarMomentDateFormatter);

    this.moment = moment;
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarMomentDateFormatter, [{
    key: "monthViewColumnHeader",
    value: function monthViewColumnHeader(_ref17) {
      var date = _ref17.date,
          locale = _ref17.locale;
      return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The month view cell day number
     */

  }, {
    key: "monthViewDayNumber",
    value: function monthViewDayNumber(_ref18) {
      var date = _ref18.date,
          locale = _ref18.locale;
      return this.moment(date).locale(locale).format('D');
    }
    /**
     * The month view title
     */

  }, {
    key: "monthViewTitle",
    value: function monthViewTitle(_ref19) {
      var date = _ref19.date,
          locale = _ref19.locale;
      return this.moment(date).locale(locale).format('MMMM YYYY');
    }
    /**
     * The week view header week day labels
     */

  }, {
    key: "weekViewColumnHeader",
    value: function weekViewColumnHeader(_ref20) {
      var date = _ref20.date,
          locale = _ref20.locale;
      return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The week view sub header day and month labels
     */

  }, {
    key: "weekViewColumnSubHeader",
    value: function weekViewColumnSubHeader(_ref21) {
      var date = _ref21.date,
          locale = _ref21.locale;
      return this.moment(date).locale(locale).format('MMM D');
    }
    /**
     * The week view title
     */

  }, {
    key: "weekViewTitle",
    value: function weekViewTitle(_ref22) {
      var _this6 = this;

      var date = _ref22.date,
          locale = _ref22.locale,
          weekStartsOn = _ref22.weekStartsOn,
          excludeDays = _ref22.excludeDays,
          daysInWeek = _ref22.daysInWeek;

      var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
          viewStart = _getWeekViewPeriod2.viewStart,
          viewEnd = _getWeekViewPeriod2.viewEnd;

      var format = function format(dateToFormat, showYear) {
        return _this6.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
      };

      return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
    }
    /**
     * The time formatting down the left hand side of the week view
     */

  }, {
    key: "weekViewHour",
    value: function weekViewHour(_ref23) {
      var date = _ref23.date,
          locale = _ref23.locale;
      return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The time formatting down the left hand side of the day view
     */

  }, {
    key: "dayViewHour",
    value: function dayViewHour(_ref24) {
      var date = _ref24.date,
          locale = _ref24.locale;
      return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The day view title
     */

  }, {
    key: "dayViewTitle",
    value: function dayViewTitle(_ref25) {
      var date = _ref25.date,
          locale = _ref25.locale;
      return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
    }
  }]);

  return CalendarMomentDateFormatter;
}();

CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
  return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](DateAdapter));
};

CalendarMomentDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CalendarMomentDateFormatter,
  factory: function factory(t) {
    return CalendarMomentDateFormatter.ɵfac(t);
  }
});

CalendarMomentDateFormatter.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [MOMENT]
    }]
  }, {
    type: DateAdapter
  }];
};

CalendarMomentDateFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(MOMENT)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [Object, DateAdapter])], CalendarMomentDateFormatter);
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */

var CalendarNativeDateFormatter = /*#__PURE__*/function () {
  function CalendarNativeDateFormatter(dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarNativeDateFormatter);

    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarNativeDateFormatter, [{
    key: "monthViewColumnHeader",
    value: function monthViewColumnHeader(_ref26) {
      var date = _ref26.date,
          locale = _ref26.locale;
      return new Intl.DateTimeFormat(locale, {
        weekday: 'long'
      }).format(date);
    }
    /**
     * The month view cell day number
     */

  }, {
    key: "monthViewDayNumber",
    value: function monthViewDayNumber(_ref27) {
      var date = _ref27.date,
          locale = _ref27.locale;
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric'
      }).format(date);
    }
    /**
     * The month view title
     */

  }, {
    key: "monthViewTitle",
    value: function monthViewTitle(_ref28) {
      var date = _ref28.date,
          locale = _ref28.locale;
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long'
      }).format(date);
    }
    /**
     * The week view header week day labels
     */

  }, {
    key: "weekViewColumnHeader",
    value: function weekViewColumnHeader(_ref29) {
      var date = _ref29.date,
          locale = _ref29.locale;
      return new Intl.DateTimeFormat(locale, {
        weekday: 'long'
      }).format(date);
    }
    /**
     * The week view sub header day and month labels
     */

  }, {
    key: "weekViewColumnSubHeader",
    value: function weekViewColumnSubHeader(_ref30) {
      var date = _ref30.date,
          locale = _ref30.locale;
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'short'
      }).format(date);
    }
    /**
     * The week view title
     */

  }, {
    key: "weekViewTitle",
    value: function weekViewTitle(_ref31) {
      var date = _ref31.date,
          locale = _ref31.locale,
          weekStartsOn = _ref31.weekStartsOn,
          excludeDays = _ref31.excludeDays,
          daysInWeek = _ref31.daysInWeek;

      var _getWeekViewPeriod3 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
          viewStart = _getWeekViewPeriod3.viewStart,
          viewEnd = _getWeekViewPeriod3.viewEnd;

      var format = function format(dateToFormat, showYear) {
        return new Intl.DateTimeFormat(locale, {
          day: 'numeric',
          month: 'short',
          year: showYear ? 'numeric' : undefined
        }).format(dateToFormat);
      };

      return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
    }
    /**
     * The time formatting down the left hand side of the week view
     */

  }, {
    key: "weekViewHour",
    value: function weekViewHour(_ref32) {
      var date = _ref32.date,
          locale = _ref32.locale;
      return new Intl.DateTimeFormat(locale, {
        hour: 'numeric'
      }).format(date);
    }
    /**
     * The time formatting down the left hand side of the day view
     */

  }, {
    key: "dayViewHour",
    value: function dayViewHour(_ref33) {
      var date = _ref33.date,
          locale = _ref33.locale;
      return new Intl.DateTimeFormat(locale, {
        hour: 'numeric'
      }).format(date);
    }
    /**
     * The day view title
     */

  }, {
    key: "dayViewTitle",
    value: function dayViewTitle(_ref34) {
      var date = _ref34.date,
          locale = _ref34.locale;
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
      }).format(date);
    }
  }]);

  return CalendarNativeDateFormatter;
}();

CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
  return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](DateAdapter));
};

CalendarNativeDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CalendarNativeDateFormatter,
  factory: function factory(t) {
    return CalendarNativeDateFormatter.ɵfac(t);
  }
});

CalendarNativeDateFormatter.ctorParameters = function () {
  return [{
    type: DateAdapter
  }];
};

CalendarNativeDateFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter])], CalendarNativeDateFormatter);
var CalendarEventTimesChangedEventType;

(function (CalendarEventTimesChangedEventType) {
  CalendarEventTimesChangedEventType["Drag"] = "drag";
  CalendarEventTimesChangedEventType["Drop"] = "drop";
  CalendarEventTimesChangedEventType["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

var CalendarCommonModule_1;
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */

var CalendarCommonModule = CalendarCommonModule_1 = /*#__PURE__*/function () {
  function CalendarCommonModule() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarCommonModule);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarCommonModule, null, [{
    key: "forRoot",
    value: function forRoot(dateAdapter) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        ngModule: CalendarCommonModule_1,
        providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
      };
    }
  }]);

  return CalendarCommonModule;
}();

CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) {
  return new (t || CalendarCommonModule)();
};

CalendarCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CalendarCommonModule
});
CalendarCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]]
});
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */

var CalendarMonthViewComponent = /*#__PURE__*/function () {
  /**
   * @hidden
   */
  function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
    var _this7 = this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarMonthViewComponent);

    this.cdr = cdr;
    this.utils = utils;
    this.dateAdapter = dateAdapter;
    /**
     * An array of events to display on view.
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */

    this.events = [];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */

    this.excludeDays = [];
    /**
     * Whether the events list for the day of the `viewDate` option is visible or not
     */

    this.activeDayIsOpen = false;
    /**
     * The placement of the event tooltip
     */

    this.tooltipPlacement = 'auto';
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */

    this.tooltipAppendToBody = true;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */

    this.tooltipDelay = null;
    /**
     * An output that will be called before the view is rendered for the current month.
     * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
     */

    this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when the day cell is clicked
     */

    this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when the event title is clicked
     */

    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when a header week day is clicked. Returns ISO day number.
     */

    this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when an event is dragged and dropped
     */

    this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * @hidden
     */

    this.trackByRowOffset = function (index, offset) {
      return _this7.view.days.slice(offset, _this7.view.totalDaysVisibleInWeek).map(function (day) {
        return day.date.toISOString();
      }).join('-');
    };
    /**
     * @hidden
     */


    this.trackByDate = function (index, day) {
      return day.date.toISOString();
    };

    this.locale = locale;
  }
  /**
   * @hidden
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarMonthViewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this8 = this;

      if (this.refresh) {
        this.refreshSubscription = this.refresh.subscribe(function () {
          _this8.refreshAll();

          _this8.cdr.markForCheck();
        });
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
      var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

      if (refreshHeader) {
        this.refreshHeader();
      }

      if (changes.events) {
        validateEvents(this.events);
      }

      if (refreshBody) {
        this.refreshBody();
      }

      if (refreshHeader || refreshBody) {
        this.emitBeforeViewRender();
      }

      if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
        this.checkActiveDayIsOpen();
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "toggleDayHighlight",
    value: function toggleDayHighlight(event, isHighlighted) {
      this.view.days.forEach(function (day) {
        if (isHighlighted && day.events.indexOf(event) > -1) {
          day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
        } else {
          delete day.backgroundColor;
        }
      });
    }
    /**
     * @hidden
     */

  }, {
    key: "eventDropped",
    value: function eventDropped(droppedOn, event, draggedFrom) {
      if (droppedOn !== draggedFrom) {
        var year = this.dateAdapter.getYear(droppedOn.date);
        var month = this.dateAdapter.getMonth(droppedOn.date);
        var date = this.dateAdapter.getDate(droppedOn.date);
        var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
        var newEnd;

        if (event.end) {
          var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
          newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
        }

        this.eventTimesChanged.emit({
          event: event,
          newStart: newStart,
          newEnd: newEnd,
          day: droppedOn,
          type: CalendarEventTimesChangedEventType.Drop
        });
      }
    }
  }, {
    key: "refreshHeader",
    value: function refreshHeader() {
      this.columnHeaders = this.utils.getWeekViewHeader({
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        weekendDays: this.weekendDays
      });
    }
  }, {
    key: "refreshBody",
    value: function refreshBody() {
      this.view = this.utils.getMonthView({
        events: this.events,
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        weekendDays: this.weekendDays
      });
    }
  }, {
    key: "checkActiveDayIsOpen",
    value: function checkActiveDayIsOpen() {
      var _this9 = this;

      if (this.activeDayIsOpen === true) {
        var activeDay = this.activeDay || this.viewDate;
        this.openDay = this.view.days.find(function (day) {
          return _this9.dateAdapter.isSameDay(day.date, activeDay);
        });
        var index = this.view.days.indexOf(this.openDay);
        this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
      } else {
        this.openRowIndex = null;
        this.openDay = null;
      }
    }
  }, {
    key: "refreshAll",
    value: function refreshAll() {
      this.refreshHeader();
      this.refreshBody();
      this.emitBeforeViewRender();
      this.checkActiveDayIsOpen();
    }
  }, {
    key: "emitBeforeViewRender",
    value: function emitBeforeViewRender() {
      if (this.columnHeaders && this.view) {
        this.beforeViewRender.emit({
          header: this.columnHeaders,
          body: this.view.days,
          period: this.view.period
        });
      }
    }
  }]);

  return CalendarMonthViewComponent;
}();

CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
  return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarMonthViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarMonthViewComponent,
  selectors: [["mwl-calendar-month-view"]],
  inputs: {
    events: "events",
    excludeDays: "excludeDays",
    activeDayIsOpen: "activeDayIsOpen",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    locale: "locale",
    viewDate: "viewDate",
    activeDay: "activeDay",
    refresh: "refresh",
    tooltipTemplate: "tooltipTemplate",
    weekStartsOn: "weekStartsOn",
    headerTemplate: "headerTemplate",
    cellTemplate: "cellTemplate",
    openDayEventsTemplate: "openDayEventsTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    weekendDays: "weekendDays"
  },
  outputs: {
    beforeViewRender: "beforeViewRender",
    dayClicked: "dayClicked",
    eventClicked: "eventClicked",
    columnHeaderClicked: "columnHeaderClicked",
    eventTimesChanged: "eventTimesChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 5,
  consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
  template: function CalendarMonthViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mwl-calendar-month-view-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
        return ctx.columnHeaderClicked.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    }
  },
  directives: function directives() {
    return [CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["ɵa"], CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, ClickDirective, KeydownEnterDirective];
  },
  pipes: function pipes() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, CalendarA11yPipe];
  },
  encapsulation: 2
});

CalendarMonthViewComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: CalendarUtils
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
    }]
  }, {
    type: DateAdapter
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarMonthViewComponent.prototype, "viewDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarMonthViewComponent.prototype, "events", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarMonthViewComponent.prototype, "excludeDays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarMonthViewComponent.prototype, "activeDay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject)], CalendarMonthViewComponent.prototype, "refresh", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarMonthViewComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarMonthViewComponent.prototype, "weekendDays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewComponent.prototype, "dayClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewComponent.prototype, "eventClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);

CalendarMonthViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef, CalendarUtils, String, DateAdapter])], CalendarMonthViewComponent);

var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarMonthViewHeaderComponent);

  this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
};

CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
  return new (t || CalendarMonthViewHeaderComponent)();
};

CalendarMonthViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarMonthViewHeaderComponent,
  selectors: [["mwl-calendar-month-view-header"]],
  inputs: {
    days: "days",
    locale: "locale",
    customTemplate: "customTemplate"
  },
  outputs: {
    columnHeaderClicked: "columnHeaderClicked"
  },
  decls: 3,
  vars: 6,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
  template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
  pipes: [CalendarDatePipe],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarMonthViewHeaderComponent.prototype, "days", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);

var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarMonthCellComponent);

  this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.trackByEventId = trackByEventId;
  this.validateDrag = isWithinThreshold;
};

CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
  return new (t || CalendarMonthCellComponent)();
};

CalendarMonthCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarMonthCellComponent,
  selectors: [["mwl-calendar-month-cell"]],
  hostAttrs: [1, "cal-cell", "cal-day-cell"],
  hostVars: 18,
  hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    }
  },
  inputs: {
    day: "day",
    openDay: "openDay",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    customTemplate: "customTemplate",
    tooltipTemplate: "tooltipTemplate",
    tooltipDelay: "tooltipDelay"
  },
  outputs: {
    highlightDay: "highlightDay",
    unhighlightDay: "unhighlightDay",
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 15,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]],
  template: function CalendarMonthCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunctionV"](2, _c11, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, CalendarTooltipDirective, ClickDirective],
  pipes: [CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "day", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "openDay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarMonthCellComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthCellComponent.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], CalendarMonthCellComponent.prototype, "highlightDay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter)], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "eventClicked", void 0);

var collapseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('collapse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
  height: 0,
  overflow: 'hidden',
  'padding-top': 0,
  'padding-bottom': 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
  height: '*',
  overflow: 'hidden',
  'padding-top': '*',
  'padding-bottom': '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('150ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('150ms ease-in'))]);

var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarOpenDayEventsComponent);

  this.isOpen = false;
  this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.trackByEventId = trackByEventId;
  this.validateDrag = isWithinThreshold;
};

CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
  return new (t || CalendarOpenDayEventsComponent)();
};

CalendarOpenDayEventsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarOpenDayEventsComponent,
  selectors: [["mwl-calendar-open-day-events"]],
  inputs: {
    isOpen: "isOpen",
    locale: "locale",
    events: "events",
    customTemplate: "customTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    date: "date"
  },
  outputs: {
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 8,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
  template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction5"](2, _c15, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent],
  pipes: [CalendarA11yPipe],
  encapsulation: 2,
  data: {
    animation: [collapseAnimation]
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarOpenDayEventsComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarOpenDayEventsComponent.prototype, "events", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarOpenDayEventsComponent.prototype, "date", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);

var CalendarMonthModule = function CalendarMonthModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarMonthModule);
};

CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) {
  return new (t || CalendarMonthModule)();
};

CalendarMonthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CalendarMonthModule
});
CalendarMonthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule]
});

var CalendarDragHelper = /*#__PURE__*/function () {
  function CalendarDragHelper(dragContainerElement, draggableElement) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarDragHelper);

    this.dragContainerElement = dragContainerElement;
    this.startPosition = draggableElement.getBoundingClientRect();
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarDragHelper, [{
    key: "validateDrag",
    value: function validateDrag(_ref35) {
      var x = _ref35.x,
          y = _ref35.y,
          snapDraggedEvents = _ref35.snapDraggedEvents,
          dragAlreadyMoved = _ref35.dragAlreadyMoved,
          transform = _ref35.transform;

      if (snapDraggedEvents) {
        var newRect = Object.assign({}, this.startPosition, {
          left: this.startPosition.left + transform.x,
          right: this.startPosition.right + transform.x,
          top: this.startPosition.top + transform.y,
          bottom: this.startPosition.bottom + transform.y
        });
        return (isWithinThreshold({
          x: x,
          y: y
        }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
      } else {
        return isWithinThreshold({
          x: x,
          y: y
        }) || dragAlreadyMoved;
      }
    }
  }]);

  return CalendarDragHelper;
}();

var CalendarResizeHelper = /*#__PURE__*/function () {
  function CalendarResizeHelper(resizeContainerElement, minWidth) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarResizeHelper);

    this.resizeContainerElement = resizeContainerElement;
    this.minWidth = minWidth;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarResizeHelper, [{
    key: "validateResize",
    value: function validateResize(_ref36) {
      var rectangle = _ref36.rectangle;

      if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
        return false;
      }

      return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    }
  }]);

  return CalendarResizeHelper;
}();
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */


var CalendarWeekViewComponent = /*#__PURE__*/function () {
  /**
   * @hidden
   */
  function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarWeekViewComponent);

    this.cdr = cdr;
    this.utils = utils;
    this.dateAdapter = dateAdapter;
    /**
     * An array of events to display on view
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */

    this.events = [];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */

    this.excludeDays = [];
    /**
     * The placement of the event tooltip
     */

    this.tooltipPlacement = 'auto';
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */

    this.tooltipAppendToBody = true;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */

    this.tooltipDelay = null;
    /**
     * The precision to display events.
     * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
     */

    this.precision = 'days';
    /**
     * Whether to snap events to a grid when dragging
     */

    this.snapDraggedEvents = true;
    /**
     * The number of segments in an hour. Must divide equally into 60.
     */

    this.hourSegments = 2;
    /**
     * The height in pixels of each hour segment
     */

    this.hourSegmentHeight = 30;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     */

    this.dayStartHour = 0;
    /**
     * The day start minutes. Must be 0-59
     */

    this.dayStartMinute = 0;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     */

    this.dayEndHour = 23;
    /**
     * The day end minutes. Must be 0-59
     */

    this.dayEndMinute = 59;
    /**
     * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
     */

    this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when the event title is clicked
     */

    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when an event is resized or dragged and dropped
     */

    this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * An output that will be called before the view is rendered for the current week.
     * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
     */

    this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * Called when an hour segment is clicked
     */

    this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * @hidden
     */

    this.allDayEventResizes = new Map();
    /**
     * @hidden
     */

    this.timeEventResizes = new Map();
    /**
     * @hidden
     */

    this.eventDragEnterByType = {
      allDay: 0,
      time: 0
    };
    /**
     * @hidden
     */

    this.dragActive = false;
    /**
     * @hidden
     */

    this.dragAlreadyMoved = false;
    /**
     * @hidden
     */

    this.calendarId = Symbol('angular calendar week view id');
    /**
     * @hidden
     */

    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    /**
     * @hidden
     */

    this.trackByHourSegment = trackByHourSegment;
    /**
     * @hidden
     */

    this.trackByHour = trackByHour;
    /**
     * @hidden
     */

    this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
    /**
     * @hidden
     */

    this.trackByWeekTimeEvent = trackByWeekTimeEvent;
    /**
     * @hidden
     */

    this.trackByHourColumn = function (index, column) {
      return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
    };
    /**
     * @hidden
     */


    this.trackById = function (index, row) {
      return row.id;
    };

    this.locale = locale;
  }
  /**
   * @hidden
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarWeekViewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this10 = this;

      if (this.refresh) {
        this.refreshSubscription = this.refresh.subscribe(function () {
          _this10.refreshAll();

          _this10.cdr.markForCheck();
        });
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
      var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

      if (refreshHeader) {
        this.refreshHeader();
      }

      if (changes.events) {
        validateEvents(this.events);
      }

      if (refreshBody) {
        this.refreshBody();
      }

      if (refreshHeader || refreshBody) {
        this.emitBeforeViewRender();
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "timeEventResizeStarted",
    value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
      this.timeEventResizes.set(timeEvent.event, resizeEvent);
      this.resizeStarted(eventsContainer);
    }
    /**
     * @hidden
     */

  }, {
    key: "timeEventResizing",
    value: function timeEventResizing(timeEvent, resizeEvent) {
      var _this11 = this;

      this.timeEventResizes.set(timeEvent.event, resizeEvent);
      var adjustedEvents = new Map();

      var tempEvents = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(this.events);

      this.timeEventResizes.forEach(function (lastResizeEvent, event) {
        var newEventDates = _this11.getTimeEventResizedDates(event, lastResizeEvent);

        var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
        adjustedEvents.set(adjustedEvent, event);
        var eventIndex = tempEvents.indexOf(event);
        tempEvents[eventIndex] = adjustedEvent;
      });
      this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
    }
    /**
     * @hidden
     */

  }, {
    key: "timeEventResizeEnded",
    value: function timeEventResizeEnded(timeEvent) {
      this.view = this.getWeekView(this.events);
      var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

      if (lastResizeEvent) {
        this.timeEventResizes.delete(timeEvent.event);
        var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
        this.eventTimesChanged.emit({
          newStart: newEventDates.start,
          newEnd: newEventDates.end,
          event: timeEvent.event,
          type: CalendarEventTimesChangedEventType.Resize
        });
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "allDayEventResizeStarted",
    value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
      this.allDayEventResizes.set(allDayEvent, {
        originalOffset: allDayEvent.offset,
        originalSpan: allDayEvent.span,
        edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
      });
      this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    }
    /**
     * @hidden
     */

  }, {
    key: "allDayEventResizing",
    value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
      var currentResize = this.allDayEventResizes.get(allDayEvent);

      if (typeof resizeEvent.edges.left !== 'undefined') {
        var diff = Math.round(+resizeEvent.edges.left / dayWidth);
        allDayEvent.offset = currentResize.originalOffset + diff;
        allDayEvent.span = currentResize.originalSpan - diff;
      } else if (typeof resizeEvent.edges.right !== 'undefined') {
        var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

        allDayEvent.span = currentResize.originalSpan + _diff;
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "allDayEventResizeEnded",
    value: function allDayEventResizeEnded(allDayEvent) {
      var currentResize = this.allDayEventResizes.get(allDayEvent);

      if (currentResize) {
        var allDayEventResizingBeforeStart = currentResize.edge === 'left';
        var daysDiff;

        if (allDayEventResizingBeforeStart) {
          daysDiff = allDayEvent.offset - currentResize.originalOffset;
        } else {
          daysDiff = allDayEvent.span - currentResize.originalSpan;
        }

        allDayEvent.offset = currentResize.originalOffset;
        allDayEvent.span = currentResize.originalSpan;
        var newStart = allDayEvent.event.start;
        var newEnd = allDayEvent.event.end || allDayEvent.event.start;

        if (allDayEventResizingBeforeStart) {
          newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
        } else {
          newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
        }

        this.eventTimesChanged.emit({
          newStart: newStart,
          newEnd: newEnd,
          event: allDayEvent.event,
          type: CalendarEventTimesChangedEventType.Resize
        });
        this.allDayEventResizes.delete(allDayEvent);
      }
    }
    /**
     * @hidden
     */

  }, {
    key: "getDayColumnWidth",
    value: function getDayColumnWidth(eventRowContainer) {
      return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    }
    /**
     * @hidden
     */

  }, {
    key: "dateDragEnter",
    value: function dateDragEnter(date) {
      this.lastDragEnterDate = date;
    }
    /**
     * @hidden
     */

  }, {
    key: "eventDropped",
    value: function eventDropped(dropEvent, date, allDay) {
      if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
        this.eventTimesChanged.emit({
          type: CalendarEventTimesChangedEventType.Drop,
          event: dropEvent.dropData.event,
          newStart: date,
          allDay: allDay
        });
      }

      this.lastDraggedEvent = null;
    }
    /**
     * @hidden
     */

  }, {
    key: "dragEnter",
    value: function dragEnter(type) {
      this.eventDragEnterByType[type]++;
    }
    /**
     * @hidden
     */

  }, {
    key: "dragLeave",
    value: function dragLeave(type) {
      this.eventDragEnterByType[type]--;
    }
    /**
     * @hidden
     */

  }, {
    key: "dragStarted",
    value: function dragStarted(eventsContainer, event, dayEvent) {
      var _this12 = this;

      this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
      var dragHelper = new CalendarDragHelper(eventsContainer, event);

      this.validateDrag = function (_ref37) {
        var x = _ref37.x,
            y = _ref37.y,
            transform = _ref37.transform;
        return _this12.allDayEventResizes.size === 0 && _this12.timeEventResizes.size === 0 && dragHelper.validateDrag({
          x: x,
          y: y,
          snapDraggedEvents: _this12.snapDraggedEvents,
          dragAlreadyMoved: _this12.dragAlreadyMoved,
          transform: transform
        });
      };

      this.dragActive = true;
      this.dragAlreadyMoved = false;
      this.lastDraggedEvent = null;
      this.eventDragEnterByType = {
        allDay: 0,
        time: 0
      };

      if (!this.snapDraggedEvents && dayEvent) {
        this.view.hourColumns.forEach(function (column) {
          var linkedEvent = column.events.find(function (columnEvent) {
            return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
          }); // hide any linked events while dragging

          if (linkedEvent) {
            linkedEvent.width = 0;
            linkedEvent.height = 0;
          }
        });
      }

      this.cdr.markForCheck();
    }
    /**
     * @hidden
     */

  }, {
    key: "dragMove",
    value: function dragMove(dayEvent, dragEvent) {
      var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
      var originalEvent = dayEvent.event;
      var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
      var tempEvents = this.events.map(function (event) {
        if (event === originalEvent) {
          return adjustedEvent;
        }

        return event;
      });
      this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
      this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */

  }, {
    key: "allDayEventDragMove",
    value: function allDayEventDragMove() {
      this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */

  }, {
    key: "dragEnded",
    value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
      var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.view = this.getWeekView(this.events);
      this.dragActive = false;
      this.validateDrag = null;

      var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
          start = _this$getDragMovedEve.start,
          end = _this$getDragMovedEve.end;

      if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && isDraggedWithinPeriod(start, end, this.view.period)) {
        this.lastDraggedEvent = weekEvent.event;
        this.eventTimesChanged.emit({
          newStart: start,
          newEnd: end,
          event: weekEvent.event,
          type: CalendarEventTimesChangedEventType.Drag,
          allDay: !useY
        });
      }
    }
  }, {
    key: "refreshHeader",
    value: function refreshHeader() {
      this.days = this.utils.getWeekViewHeader(Object.assign({
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        weekendDays: this.weekendDays
      }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
  }, {
    key: "refreshBody",
    value: function refreshBody() {
      this.view = this.getWeekView(this.events);
    }
  }, {
    key: "refreshAll",
    value: function refreshAll() {
      this.refreshHeader();
      this.refreshBody();
      this.emitBeforeViewRender();
    }
  }, {
    key: "emitBeforeViewRender",
    value: function emitBeforeViewRender() {
      if (this.days && this.view) {
        this.beforeViewRender.emit(Object.assign({
          header: this.days
        }, this.view));
      }
    }
  }, {
    key: "getWeekView",
    value: function getWeekView(events) {
      return this.utils.getWeekView(Object.assign({
        events: events,
        viewDate: this.viewDate,
        weekStartsOn: this.weekStartsOn,
        excluded: this.excludeDays,
        precision: this.precision,
        absolutePositionedEvents: true,
        hourSegments: this.hourSegments,
        dayStart: {
          hour: this.dayStartHour,
          minute: this.dayStartMinute
        },
        dayEnd: {
          hour: this.dayEndHour,
          minute: this.dayEndMinute
        },
        segmentHeight: this.hourSegmentHeight,
        weekendDays: this.weekendDays
      }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
  }, {
    key: "getDragMovedEventTimes",
    value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
      var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
      var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
      var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
      var end;

      if (weekEvent.event.end) {
        end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
      }

      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "restoreOriginalEvents",
    value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
      var snapDraggedEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var previousView = this.view;

      if (snapDraggedEvents) {
        this.view = this.getWeekView(tempEvents);
      }

      var adjustedEventsArray = tempEvents.filter(function (event) {
        return adjustedEvents.has(event);
      });
      this.view.hourColumns.forEach(function (column, columnIndex) {
        previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
          hour.segments.forEach(function (segment, segmentIndex) {
            column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
          });
        });
        adjustedEventsArray.forEach(function (adjustedEvent) {
          var originalEvent = adjustedEvents.get(adjustedEvent);
          var existingColumnEvent = column.events.find(function (columnEvent) {
            return columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent);
          });

          if (existingColumnEvent) {
            // restore the original event so trackBy kicks in and the dom isn't changed
            existingColumnEvent.event = originalEvent;
            existingColumnEvent['tempEvent'] = adjustedEvent;

            if (!snapDraggedEvents) {
              existingColumnEvent.height = 0;
              existingColumnEvent.width = 0;
            }
          } else {
            // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
            var event = {
              event: originalEvent,
              left: 0,
              top: 0,
              height: 0,
              width: 0,
              startsBeforeDay: false,
              endsAfterDay: false,
              tempEvent: adjustedEvent
            };
            column.events.push(event);
          }
        });
      });
      adjustedEvents.clear();
    }
  }, {
    key: "getTimeEventResizedDates",
    value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
      var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
      var newEventDates = {
        start: calendarEvent.start,
        end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
      };

      var end = calendarEvent.end,
          eventWithoutEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__rest)(calendarEvent, ["end"]);

      var smallestResizes = {
        start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
        end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
      };

      if (typeof resizeEvent.edges.left !== 'undefined') {
        var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
        var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

        if (newStart < smallestResizes.start) {
          newEventDates.start = newStart;
        } else {
          newEventDates.start = smallestResizes.start;
        }
      } else if (typeof resizeEvent.edges.right !== 'undefined') {
        var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);

        var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

        if (newEnd > smallestResizes.end) {
          newEventDates.end = newEnd;
        } else {
          newEventDates.end = smallestResizes.end;
        }
      }

      if (typeof resizeEvent.edges.top !== 'undefined') {
        var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

        var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

        if (_newStart < smallestResizes.start) {
          newEventDates.start = _newStart;
        } else {
          newEventDates.start = smallestResizes.start;
        }
      } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
        var _minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

        var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

        if (_newEnd > smallestResizes.end) {
          newEventDates.end = _newEnd;
        } else {
          newEventDates.end = smallestResizes.end;
        }
      }

      return newEventDates;
    }
  }, {
    key: "resizeStarted",
    value: function resizeStarted(eventsContainer, minWidth) {
      this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
      var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

      this.validateResize = function (_ref38) {
        var rectangle = _ref38.rectangle;
        return resizeHelper.validateResize({
          rectangle: rectangle
        });
      };

      this.cdr.markForCheck();
    }
  }]);

  return CalendarWeekViewComponent;
}();

CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
  return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarWeekViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarWeekViewComponent,
  selectors: [["mwl-calendar-week-view"]],
  inputs: {
    events: "events",
    excludeDays: "excludeDays",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    precision: "precision",
    snapDraggedEvents: "snapDraggedEvents",
    hourSegments: "hourSegments",
    hourSegmentHeight: "hourSegmentHeight",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    locale: "locale",
    viewDate: "viewDate",
    refresh: "refresh",
    tooltipTemplate: "tooltipTemplate",
    weekStartsOn: "weekStartsOn",
    headerTemplate: "headerTemplate",
    eventTemplate: "eventTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    weekendDays: "weekendDays",
    hourSegmentTemplate: "hourSegmentTemplate",
    eventSnapSize: "eventSnapSize",
    allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
    daysInWeek: "daysInWeek",
    currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
  },
  outputs: {
    dayHeaderClicked: "dayHeaderClicked",
    eventClicked: "eventClicked",
    eventTimesChanged: "eventTimesChanged",
    beforeViewRender: "beforeViewRender",
    hourSegmentClicked: "hourSegmentClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 9,
  consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
  template: function CalendarWeekViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mwl-calendar-week-view-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
        return ctx.dayHeaderClicked.emit($event);
      })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
        return ctx.eventDropped({
          dropData: $event
        }, $event.newStart, true);
      })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
        return ctx.dateDragEnter($event.date);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() {
        return ctx.dragEnter("time");
      })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() {
        return ctx.dragLeave("time");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    }
  },
  directives: function directives() {
    return [CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizeHandleDirective, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective];
  },
  encapsulation: 2
});

CalendarWeekViewComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: CalendarUtils
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
    }]
  }, {
    type: DateAdapter
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarWeekViewComponent.prototype, "viewDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarWeekViewComponent.prototype, "events", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarWeekViewComponent.prototype, "excludeDays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject)], CalendarWeekViewComponent.prototype, "refresh", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarWeekViewComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarWeekViewComponent.prototype, "precision", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarWeekViewComponent.prototype, "weekendDays", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegments", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewComponent.prototype, "eventClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);

CalendarWeekViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef, CalendarUtils, String, DateAdapter])], CalendarWeekViewComponent);

var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarWeekViewHeaderComponent);

  this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
};

CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
  return new (t || CalendarWeekViewHeaderComponent)();
};

CalendarWeekViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarWeekViewHeaderComponent,
  selectors: [["mwl-calendar-week-view-header"]],
  inputs: {
    days: "days",
    locale: "locale",
    customTemplate: "customTemplate"
  },
  outputs: {
    dayHeaderClicked: "dayHeaderClicked",
    eventDropped: "eventDropped",
    dragEnter: "dragEnter"
  },
  decls: 3,
  vars: 9,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
  template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction6"](2, _c24, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ClickDirective],
  pipes: [CalendarDatePipe],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarWeekViewHeaderComponent.prototype, "days", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);

var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarWeekViewEventComponent);

  this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
};

CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
  return new (t || CalendarWeekViewEventComponent)();
};

CalendarWeekViewEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarWeekViewEventComponent,
  selectors: [["mwl-calendar-week-view-event"]],
  inputs: {
    locale: "locale",
    weekEvent: "weekEvent",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDisabled: "tooltipDisabled",
    tooltipDelay: "tooltipDelay",
    customTemplate: "customTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    tooltipTemplate: "tooltipTemplate",
    column: "column",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 12,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
  template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunctionV"](2, _c26, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent],
  pipes: [CalendarEventTitlePipe, CalendarA11yPipe],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarWeekViewEventComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "column", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);

var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarWeekViewHourSegmentComponent);
};

CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
  return new (t || CalendarWeekViewHourSegmentComponent)();
};

CalendarWeekViewHourSegmentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarWeekViewHourSegmentComponent,
  selectors: [["mwl-calendar-week-view-hour-segment"]],
  inputs: {
    segment: "segment",
    segmentHeight: "segmentHeight",
    locale: "locale",
    isTimeLabel: "isTimeLabel",
    daysInWeek: "daysInWeek",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 8,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
  template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction5"](2, _c27, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  pipes: [CalendarA11yPipe, CalendarDatePipe],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);

var CalendarWeekViewCurrentTimeMarkerComponent = /*#__PURE__*/function () {
  function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
    var _this13 = this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarWeekViewCurrentTimeMarkerComponent);

    this.dateAdapter = dateAdapter;
    this.zone = zone;
    this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(this.columnDate);
    this.marker$ = this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(function () {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.interval)(60 * 1000);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMapTo)(this.columnDate$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(function (columnDate) {
      var startOfDay = _this13.dateAdapter.setMinutes(_this13.dateAdapter.setHours(columnDate, _this13.dayStartHour), _this13.dayStartMinute);

      var endOfDay = _this13.dateAdapter.setMinutes(_this13.dateAdapter.setHours(columnDate, _this13.dayEndHour), _this13.dayEndMinute);

      var hourHeightModifier = _this13.hourSegments * _this13.hourSegmentHeight / 60;
      var now = new Date();
      return {
        isVisible: _this13.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
        top: _this13.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
      };
    }));
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarWeekViewCurrentTimeMarkerComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.columnDate) {
        this.columnDate$.next(changes.columnDate.currentValue);
      }
    }
  }]);

  return CalendarWeekViewCurrentTimeMarkerComponent;
}();

CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
  return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarWeekViewCurrentTimeMarkerComponent,
  selectors: [["mwl-calendar-week-view-current-time-marker"]],
  inputs: {
    columnDate: "columnDate",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    hourSegments: "hourSegments",
    hourSegmentHeight: "hourSegmentHeight",
    customTemplate: "customTemplate"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 14,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
  template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);

      var tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction7"](6, _c28, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  encapsulation: 2
});

CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () {
  return [{
    type: DateAdapter
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }];
};

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);

CalendarWeekViewCurrentTimeMarkerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [DateAdapter, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone])], CalendarWeekViewCurrentTimeMarkerComponent);

var CalendarWeekModule = function CalendarWeekModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarWeekModule);
};

CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) {
  return new (t || CalendarWeekModule)();
};

CalendarWeekModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CalendarWeekModule
});
CalendarWeekModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule]
});
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */

var CalendarDayViewComponent = function CalendarDayViewComponent() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarDayViewComponent);

  /**
   * An array of events to display on view
   * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
   */
  this.events = [];
  /**
   * The number of segments in an hour. Must divide equally into 60.
   */

  this.hourSegments = 2;
  /**
   * The height in pixels of each hour segment
   */

  this.hourSegmentHeight = 30;
  /**
   * The day start hours in 24 hour time. Must be 0-23
   */

  this.dayStartHour = 0;
  /**
   * The day start minutes. Must be 0-59
   */

  this.dayStartMinute = 0;
  /**
   * The day end hours in 24 hour time. Must be 0-23
   */

  this.dayEndHour = 23;
  /**
   * The day end minutes. Must be 0-59
   */

  this.dayEndMinute = 59;
  /**
   * The placement of the event tooltip
   */

  this.tooltipPlacement = 'auto';
  /**
   * Whether to append tooltips to the body or next to the trigger element
   */

  this.tooltipAppendToBody = true;
  /**
   * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
   * will be displayed immediately.
   */

  this.tooltipDelay = null;
  /**
   * Whether to snap events to a grid when dragging
   */

  this.snapDraggedEvents = true;
  /**
   * Called when an event title is clicked
   */

  this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  /**
   * Called when an hour segment is clicked
   */

  this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  /**
   * Called when an event is resized or dragged and dropped
   */

  this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  /**
   * An output that will be called before the view is rendered for the current day.
   * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
   */

  this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
};

CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
  return new (t || CalendarDayViewComponent)();
};

CalendarDayViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarDayViewComponent,
  selectors: [["mwl-calendar-day-view"]],
  inputs: {
    events: "events",
    hourSegments: "hourSegments",
    hourSegmentHeight: "hourSegmentHeight",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    snapDraggedEvents: "snapDraggedEvents",
    viewDate: "viewDate",
    refresh: "refresh",
    locale: "locale",
    eventSnapSize: "eventSnapSize",
    tooltipTemplate: "tooltipTemplate",
    hourSegmentTemplate: "hourSegmentTemplate",
    eventTemplate: "eventTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
    currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
  },
  outputs: {
    eventClicked: "eventClicked",
    hourSegmentClicked: "hourSegmentClicked",
    eventTimesChanged: "eventTimesChanged",
    beforeViewRender: "beforeViewRender"
  },
  decls: 1,
  vars: 23,
  consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
  template: function CalendarDayViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
        return ctx.eventClicked.emit($event);
      })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
        return ctx.hourSegmentClicked.emit($event);
      })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
        return ctx.eventTimesChanged.emit($event);
      })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
        return ctx.beforeViewRender.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
    }
  },
  directives: [CalendarWeekViewComponent],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Date)], CalendarDayViewComponent.prototype, "viewDate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)], CalendarDayViewComponent.prototype, "events", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegments", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartHour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndHour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject)], CalendarDayViewComponent.prototype, "refresh", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)], CalendarDayViewComponent.prototype, "locale", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Number)], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "eventTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_7__.TemplateRef)], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarDayViewComponent.prototype, "eventClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);

var CalendarDayModule = function CalendarDayModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarDayModule);
};

CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) {
  return new (t || CalendarDayModule)();
};

CalendarDayModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CalendarDayModule
});
CalendarDayModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, CalendarCommonModule, CalendarWeekModule]]
});
var CalendarModule_1;
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */

var CalendarModule = CalendarModule_1 = /*#__PURE__*/function () {
  function CalendarModule() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, CalendarModule);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CalendarModule, null, [{
    key: "forRoot",
    value: function forRoot(dateAdapter) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        ngModule: CalendarModule_1,
        providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
      };
    }
  }]);

  return CalendarModule;
}();

CalendarModule.ɵfac = function CalendarModule_Factory(t) {
  return new (t || CalendarModule)();
};

CalendarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CalendarModule
});
CalendarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [[CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule], CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-event-actions',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], function () {
    return [];
  }, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-event-title',
      template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], null, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-tooltip-window',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], null, {
    contents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[mwlCalendarTooltip]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
      }]
    }];
  }, {
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['tooltipPlacement']
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['tooltipDelay']
    }],
    onMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener,
      args: ['mouseenter']
    }],
    onMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener,
      args: ['mouseleave']
    }],
    contents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['mwlCalendarTooltip']
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['tooltipTemplate']
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['tooltipEvent']
    }],
    appendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['tooltipAppendToBody']
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[mwlCalendarPreviousView]'
    }]
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, {
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],

    /**
     * @hidden
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener,
      args: ['click']
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[mwlCalendarNextView]'
    }]
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, {
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],

    /**
     * @hidden
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener,
      args: ['click']
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarTodayDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[mwlCalendarToday]'
    }]
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, {
    viewDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],

    /**
     * @hidden
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener,
      args: ['click']
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarAngularDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], null, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarDatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
    args: [{
      name: 'calendarDate'
    }]
  }], function () {
    return [{
      type: CalendarDateFormatter
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
      }]
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
    args: [{
      name: 'calendarEventTitle'
    }]
  }], function () {
    return [{
      type: CalendarEventTitleFormatter
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ClickDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[mwlClick]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
      }]
    }];
  }, {
    clickListenerDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output,
      args: ['mwlClick']
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](KeydownEnterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[mwlKeydownEnter]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
    }];
  }, {
    keydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output,
      args: ['mwlKeydownEnter']
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarUtils, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarA11y, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarA11yPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
    args: [{
      name: 'calendarA11y'
    }]
  }], function () {
    return [{
      type: CalendarA11y
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
      }]
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarMomentDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [MOMENT]
      }]
    }, {
      type: DateAdapter
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarNativeDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
      exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe],
      entryComponents: [CalendarTooltipWindowComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CalendarCommonModule, {
    declarations: function declarations() {
      return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule];
    },
    exports: function exports() {
      return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarMonthViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-month-view',
      template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
    }, {
      type: CalendarUtils
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
      }]
    }, {
      type: DateAdapter
    }];
  }, {
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    activeDayIsOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    beforeViewRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dayClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    columnHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    activeDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    weekStartsOn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    cellTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    openDayEventsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    weekendDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-month-view-header',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], function () {
    return [];
  }, {
    columnHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    days: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-month-cell',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
      host: {
        class: 'cal-cell cal-day-cell',
        '[class.cal-past]': 'day.isPast',
        '[class.cal-today]': 'day.isToday',
        '[class.cal-future]': 'day.isFuture',
        '[class.cal-weekend]': 'day.isWeekend',
        '[class.cal-in-month]': 'day.inMonth',
        '[class.cal-out-month]': '!day.inMonth',
        '[class.cal-has-events]': 'day.events.length > 0',
        '[class.cal-open]': 'day === openDay',
        '[class.cal-event-highlight]': '!!day.backgroundColor'
      }
    }]
  }], function () {
    return [];
  }, {
    highlightDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    unhighlightDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    day: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    openDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-open-day-events',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
      animations: [collapseAnimation]
    }]
  }], function () {
    return [];
  }, {
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarMonthModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarCommonModule],
      declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
      exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CalendarMonthModule, {
    declarations: function declarations() {
      return [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarCommonModule];
    },
    exports: function exports() {
      return [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarWeekViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-week-view',
      template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
    }, {
      type: CalendarUtils
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID]
      }]
    }, {
      type: DateAdapter
    }];
  }, {
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    precision: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    snapDraggedEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegments: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayStartHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayStartMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayEndHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayEndMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    beforeViewRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    hourSegmentClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    weekStartsOn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    weekendDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegmentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventSnapSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    allDayEventsLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    currentTimeMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-header',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], function () {
    return [];
  }, {
    dayHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventDropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    dragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    days: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-event',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], function () {
    return [];
  }, {
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    weekEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-hour-segment',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], null, {
    segment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    segmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    isTimeLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-current-time-marker',
      template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
    }]
  }], function () {
    return [{
      type: DateAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, {
    columnDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayStartHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayStartMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayEndHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayEndMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegments: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarWeekModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarCommonModule],
      declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
      exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CalendarWeekModule, {
    declarations: function declarations() {
      return [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarCommonModule];
    },
    exports: function exports() {
      return [angular_resizable_element__WEBPACK_IMPORTED_MODULE_17__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__.DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarDayViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'mwl-calendar-day-view',
      template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
    }]
  }], function () {
    return [];
  }, {
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegments: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayStartHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayStartMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayEndHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    dayEndMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    snapDraggedEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    hourSegmentClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    eventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    beforeViewRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventSnapSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hourSegmentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    allDayEventsLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    currentTimeMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarDayModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, CalendarCommonModule, CalendarWeekModule],
      declarations: [CalendarDayViewComponent],
      exports: [CalendarDayViewComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CalendarDayModule, {
    declarations: function declarations() {
      return [CalendarDayViewComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, CalendarCommonModule, CalendarWeekModule];
    },
    exports: function exports() {
      return [CalendarDayViewComponent];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CalendarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
      exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CalendarModule, {
    imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
    exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
  });
})();
/*
 * Public API Surface of angular-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=angular-calendar.js.map

/***/ }),

/***/ 31369:
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropModule": function() { return /* binding */ DragAndDropModule; },
/* harmony export */   "ɵc": function() { return /* binding */ DraggableHelper; },
/* harmony export */   "ɵd": function() { return /* binding */ DraggableScrollContainerDirective; },
/* harmony export */   "ɵb": function() { return /* binding */ DraggableDirective; },
/* harmony export */   "ɵa": function() { return /* binding */ DroppableDirective; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 42578);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mattlewis92/dom-autoscroller */ 56675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 548);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 34150);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 59328);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 87519);








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var DraggableHelper = function DraggableHelper() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, DraggableHelper);

  this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
};

DraggableHelper.ɵfac = function DraggableHelper_Factory(t) {
  return new (t || DraggableHelper)();
};

DraggableHelper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DraggableHelper,
  factory: DraggableHelper.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

DraggableHelper.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.defineInjectable)({
  factory: function DraggableHelper_Factory() {
    return new DraggableHelper();
  },
  token: DraggableHelper,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DraggableHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
 * <div style="overflow: scroll" mwlDraggableScrollContainer>
 * <div mwlDraggable>Drag me!</div>
 * </div>
 * ```
 */


var DraggableScrollContainerDirective =
/**
 * @hidden
 * @param {?} elementRef
 */
function DraggableScrollContainerDirective(elementRef) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, DraggableScrollContainerDirective);

  this.elementRef = elementRef;
  /**
   * Trigger the DragStart after a long touch in scrollable container when true
   * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
   */

  this.activeLongPressDrag = false;
  /**
   * Configuration of a long touch
   * Duration in ms of a long touch before activating DragStart
   * Delta of the
   * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
   */

  this.longPressConfig = {
    duration: 300,
    delta: 30
  };
};

DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) {
  return new (t || DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
};

DraggableScrollContainerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: DraggableScrollContainerDirective,
  selectors: [["", "mwlDraggableScrollContainer", ""]],
  inputs: {
    activeLongPressDrag: "activeLongPressDrag",
    longPressConfig: "longPressConfig"
  }
});
/** @nocollapse */

DraggableScrollContainerDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
  }];
};

DraggableScrollContainerDirective.propDecorators = {
  activeLongPressDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  longPressConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DraggableScrollContainerDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive,
    args: [{
      selector: '[mwlDraggableScrollContainer]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
    }];
  }, {
    activeLongPressDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    longPressConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} classToAdd
 * @return {?}
 */


function addClass(renderer, element, classToAdd) {
  if (classToAdd) {
    classToAdd.split(' ').forEach(
    /**
    * @param {?} className
    * @return {?}
    */
    function (className) {
      return renderer.addClass(element.nativeElement, className);
    });
  }
}
/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} classToRemove
 * @return {?}
 */


function removeClass(renderer, element, classToRemove) {
  if (classToRemove) {
    classToRemove.split(' ').forEach(
    /**
    * @param {?} className
    * @return {?}
    */
    function (className) {
      return renderer.removeClass(element.nativeElement, className);
    });
  }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DraggableDirective = /*#__PURE__*/function () {
  /**
   * @hidden
   * @param {?} element
   * @param {?} renderer
   * @param {?} draggableHelper
   * @param {?} zone
   * @param {?} vcr
   * @param {?} scrollContainer
   * @param {?} document
   */
  function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, DraggableDirective);

    this.element = element;
    this.renderer = renderer;
    this.draggableHelper = draggableHelper;
    this.zone = zone;
    this.vcr = vcr;
    this.scrollContainer = scrollContainer;
    this.document = document;
    /**
     * The axis along which the element is draggable
     */

    this.dragAxis = {
      x: true,
      y: true
    };
    /**
     * Snap all drags to an x / y grid
     */

    this.dragSnapGrid = {};
    /**
     * Show a ghost element that shows the drag when dragging
     */

    this.ghostDragEnabled = true;
    /**
     * Show the original element when ghostDragEnabled is true
     */

    this.showOriginalElementWhileDragging = false;
    /**
     * The cursor to use when hovering over a draggable element
     */

    this.dragCursor = '';
    /*
       * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
       */

    this.autoScroll = {
      margin: 20
    };
    /**
     * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
     */

    this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called when the element has started to be dragged.
     * Only called after at least one mouse or touch move event.
     * If you call $event.cancelDrag$.emit() it will cancel the current drag
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called after the ghost element has been created
     */

    this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called when the element is being dragged
     */

    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called after the element is dragged
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * @hidden
     */

    this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * @hidden
     */

    this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * @hidden
     */

    this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.eventListenerSubscriptions = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.timeLongPress = {
      timerBegin: 0,
      timerEnd: 0
    };
  }
  /**
   * @return {?}
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DraggableDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.checkEventListeners();
      /** @type {?} */

      var pointerDragged$ = this.pointerDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
      /**
      * @return {?}
      */
      function () {
        return _this.canDrag();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(
      /**
      * @param {?} pointerDownEvent
      * @return {?}
      */
      function (pointerDownEvent) {
        // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
        // stop mouse events propagating up the chain
        if (pointerDownEvent.event.stopPropagation && !_this.scrollContainer) {
          pointerDownEvent.event.stopPropagation();
        } // hack to prevent text getting selected in safari while dragging

        /** @type {?} */


        var globalDragStyle = _this.renderer.createElement('style');

        _this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');

        _this.renderer.appendChild(globalDragStyle, _this.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));

        requestAnimationFrame(
        /**
        * @return {?}
        */
        function () {
          _this.document.head.appendChild(globalDragStyle);
        });
        /** @type {?} */

        var startScrollPosition = _this.getScrollPosition();
        /** @type {?} */


        var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var scrollContainer = _this.scrollContainer ? _this.scrollContainer.elementRef.nativeElement : 'window';
          return _this.renderer.listen(scrollContainer, 'scroll',
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return observer.next(e);
          });
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(startScrollPosition), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
        /**
        * @return {?}
        */
        function () {
          return _this.getScrollPosition();
        }));
        /** @type {?} */

        var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /** @type {?} */

        var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.ReplaySubject();

        _this.zone.run(
        /**
        * @return {?}
        */
        function () {
          _this.dragPointerDown.next({
            x: 0,
            y: 0
          });
        });
        /** @type {?} */


        var dragComplete$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
        /** @type {?} */

        var pointerMove = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([_this.pointerMove$, scrollContainerScroll$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
              pointerMoveEvent = _ref2[0],
              scroll = _ref2[1];

          return {
            currentDrag$: currentDrag$,
            transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
            transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
            clientX: pointerMoveEvent.clientX,
            clientY: pointerMoveEvent.clientY,
            scrollLeft: scroll.left,
            scrollTop: scroll.top,
            target: pointerMoveEvent.event.target
          };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
        /**
        * @param {?} moveData
        * @return {?}
        */
        function (moveData) {
          if (_this.dragSnapGrid.x) {
            moveData.transformX = Math.round(moveData.transformX / _this.dragSnapGrid.x) * _this.dragSnapGrid.x;
          }

          if (_this.dragSnapGrid.y) {
            moveData.transformY = Math.round(moveData.transformY / _this.dragSnapGrid.y) * _this.dragSnapGrid.y;
          }

          return moveData;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
        /**
        * @param {?} moveData
        * @return {?}
        */
        function (moveData) {
          if (!_this.dragAxis.x) {
            moveData.transformX = 0;
          }

          if (!_this.dragAxis.y) {
            moveData.transformY = 0;
          }

          return moveData;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
        /**
        * @param {?} moveData
        * @return {?}
        */
        function (moveData) {
          /** @type {?} */
          var scrollX = moveData.scrollLeft - startScrollPosition.left;
          /** @type {?} */

          var scrollY = moveData.scrollTop - startScrollPosition.top;
          return Object.assign({}, moveData, {
            x: moveData.transformX + scrollX,
            y: moveData.transformY + scrollY
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref3) {
          var x = _ref3.x,
              y = _ref3.y,
              transformX = _ref3.transformX,
              transformY = _ref3.transformY;
          return !_this.validateDrag || _this.validateDrag({
            x: x,
            y: y,
            transform: {
              x: transformX,
              y: transformY
            }
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(dragComplete$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
        /** @type {?} */

        var dragStarted$ = pointerMove.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
        /** @type {?} */

        var dragEnded$ = pointerMove.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeLast)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
        dragStarted$.subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref4) {
          var clientX = _ref4.clientX,
              clientY = _ref4.clientY,
              x = _ref4.x,
              y = _ref4.y;

          _this.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this.dragStart.next({
              cancelDrag$: cancelDrag$
            });
          });

          _this.scroller = (0,_mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_3__.default)([_this.scrollContainer ? _this.scrollContainer.elementRef.nativeElement : _this.document.defaultView], Object.assign({}, _this.autoScroll, {
            /**
            * @return {?}
            */
            autoScroll: function autoScroll() {
              return true;
            }
          }));
          addClass(_this.renderer, _this.element, _this.dragActiveClass);

          if (_this.ghostDragEnabled) {
            /** @type {?} */
            var rect = _this.element.nativeElement.getBoundingClientRect();
            /** @type {?} */


            var clone = _this.element.nativeElement.cloneNode(true);

            if (!_this.showOriginalElementWhileDragging) {
              _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
            }

            if (_this.ghostElementAppendTo) {
              _this.ghostElementAppendTo.appendChild(clone);
            } else {
              _this.element.nativeElement.parentNode.insertBefore(clone, _this.element.nativeElement.nextSibling);
            }

            _this.ghostElement = clone;
            _this.document.body.style.cursor = _this.dragCursor;

            _this.setElementStyles(clone, {
              position: 'fixed',
              top: "".concat(rect.top, "px"),
              left: "".concat(rect.left, "px"),
              width: "".concat(rect.width, "px"),
              height: "".concat(rect.height, "px"),
              cursor: _this.dragCursor,
              margin: '0',
              willChange: 'transform',
              pointerEvents: 'none'
            });

            if (_this.ghostElementTemplate) {
              /** @type {?} */
              var viewRef = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);

              clone.innerHTML = '';
              viewRef.rootNodes.filter(
              /**
              * @param {?} node
              * @return {?}
              */
              function (node) {
                return node instanceof Node;
              }).forEach(
              /**
              * @param {?} node
              * @return {?}
              */
              function (node) {
                clone.appendChild(node);
              });
              dragEnded$.subscribe(
              /**
              * @return {?}
              */
              function () {
                _this.vcr.remove(_this.vcr.indexOf(viewRef));
              });
            }

            _this.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this.ghostElementCreated.emit({
                clientX: clientX - x,
                clientY: clientY - y,
                element: clone
              });
            });

            dragEnded$.subscribe(
            /**
            * @return {?}
            */
            function () {
              clone.parentElement.removeChild(clone);
              _this.ghostElement = null;

              _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
            });
          }

          _this.draggableHelper.currentDrag.next(currentDrag$);
        });
        dragEnded$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(
        /**
        * @param {?} dragEndData
        * @return {?}
        */
        function (dragEndData) {
          /** @type {?} */
          var dragEndData$ = cancelDrag$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.count)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
          /**
          * @param {?} calledCount
          * @return {?}
          */
          function (calledCount) {
            return Object.assign({}, dragEndData, {
              dragCancelled: calledCount > 0
            });
          }));
          cancelDrag$.complete();
          return dragEndData$;
        })).subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref5) {
          var x = _ref5.x,
              y = _ref5.y,
              dragCancelled = _ref5.dragCancelled;

          _this.scroller.destroy();

          _this.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this.dragEnd.next({
              x: x,
              y: y,
              dragCancelled: dragCancelled
            });
          });

          removeClass(_this.renderer, _this.element, _this.dragActiveClass);
          currentDrag$.complete();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(dragComplete$, dragEnded$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          requestAnimationFrame(
          /**
          * @return {?}
          */
          function () {
            _this.document.head.removeChild(globalDragStyle);
          });
        });
        return pointerMove;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.share)());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(pointerDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        return [, value];
      })), pointerDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.pairwise)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref6) {
        var _ref7 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref6, 2),
            previous = _ref7[0],
            next = _ref7[1];

        if (!previous) {
          return true;
        }

        return previous.x !== next.x || previous.y !== next.y;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref8) {
        var _ref9 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref8, 2),
            previous = _ref9[0],
            next = _ref9[1];

        return next;
      })).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref10) {
        var x = _ref10.x,
            y = _ref10.y,
            currentDrag$ = _ref10.currentDrag$,
            clientX = _ref10.clientX,
            clientY = _ref10.clientY,
            transformX = _ref10.transformX,
            transformY = _ref10.transformY,
            target = _ref10.target;

        _this.zone.run(
        /**
        * @return {?}
        */
        function () {
          _this.dragging.next({
            x: x,
            y: y
          });
        });

        requestAnimationFrame(
        /**
        * @return {?}
        */
        function () {
          if (_this.ghostElement) {
            /** @type {?} */
            var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

            _this.setElementStyles(_this.ghostElement, {
              transform: transform,
              '-webkit-transform': transform,
              '-ms-transform': transform,
              '-moz-transform': transform,
              '-o-transform': transform
            });
          }
        });
        currentDrag$.next({
          clientX: clientX,
          clientY: clientY,
          dropData: _this.dropData,
          target: target
        });
      });
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.dragAxis) {
        this.checkEventListeners();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.unsubscribeEventListeners();
      this.pointerDown$.complete();
      this.pointerMove$.complete();
      this.pointerUp$.complete();
      this.destroy$.next();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "checkEventListeners",
    value: function checkEventListeners() {
      var _this2 = this;

      /** @type {?} */
      var canDrag = this.canDrag();
      /** @type {?} */

      var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

      if (canDrag && !hasEventListeners) {
        this.zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _this2.eventListenerSubscriptions.mousedown = _this2.renderer.listen(_this2.element.nativeElement, 'mousedown',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this2.onMouseDown(event);
          });
          _this2.eventListenerSubscriptions.mouseup = _this2.renderer.listen('document', 'mouseup',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this2.onMouseUp(event);
          });
          _this2.eventListenerSubscriptions.touchstart = _this2.renderer.listen(_this2.element.nativeElement, 'touchstart',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this2.onTouchStart(event);
          });
          _this2.eventListenerSubscriptions.touchend = _this2.renderer.listen('document', 'touchend',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this2.onTouchEnd(event);
          });
          _this2.eventListenerSubscriptions.touchcancel = _this2.renderer.listen('document', 'touchcancel',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this2.onTouchEnd(event);
          });
          _this2.eventListenerSubscriptions.mouseenter = _this2.renderer.listen(_this2.element.nativeElement, 'mouseenter',
          /**
          * @return {?}
          */
          function () {
            _this2.onMouseEnter();
          });
          _this2.eventListenerSubscriptions.mouseleave = _this2.renderer.listen(_this2.element.nativeElement, 'mouseleave',
          /**
          * @return {?}
          */
          function () {
            _this2.onMouseLeave();
          });
        });
      } else if (!canDrag && hasEventListeners) {
        this.unsubscribeEventListeners();
      }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var _this3 = this;

      if (event.button === 0) {
        if (!this.eventListenerSubscriptions.mousemove) {
          this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
          /**
          * @param {?} mouseMoveEvent
          * @return {?}
          */
          function (mouseMoveEvent) {
            _this3.pointerMove$.next({
              event: mouseMoveEvent,
              clientX: mouseMoveEvent.clientX,
              clientY: mouseMoveEvent.clientY
            });
          });
        }

        this.pointerDown$.next({
          event: event,
          clientX: event.clientX,
          clientY: event.clientY
        });
      }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      if (event.button === 0) {
        if (this.eventListenerSubscriptions.mousemove) {
          this.eventListenerSubscriptions.mousemove();
          delete this.eventListenerSubscriptions.mousemove;
        }

        this.pointerUp$.next({
          event: event,
          clientX: event.clientX,
          clientY: event.clientY
        });
      }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      var _this4 = this;

      /** @type {?} */
      var startScrollPosition;
      /** @type {?} */

      var isDragActivated;
      /** @type {?} */

      var hasContainerScrollbar;

      if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
        this.timeLongPress.timerBegin = Date.now();
        isDragActivated = false;
        hasContainerScrollbar = this.hasScrollbar();
        startScrollPosition = this.getScrollPosition();
      }

      if (!this.eventListenerSubscriptions.touchmove) {
        /** @type {?} */
        var contextMenuListener = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.fromEvent)(this.document, 'contextmenu').subscribe(
        /**
        * @param {?} e
        * @return {?}
        */
        function (e) {
          e.preventDefault();
        });
        /** @type {?} */

        var touchMoveListener = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.fromEvent)(this.document, 'touchmove', {
          passive: false
        }).subscribe(
        /**
        * @param {?} touchMoveEvent
        * @return {?}
        */
        function (touchMoveEvent) {
          if ((_this4.scrollContainer && _this4.scrollContainer.activeLongPressDrag || _this4.touchStartLongPress) && !isDragActivated && hasContainerScrollbar) {
            isDragActivated = _this4.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
          }

          if ((!_this4.scrollContainer || !_this4.scrollContainer.activeLongPressDrag) && !_this4.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
            touchMoveEvent.preventDefault();

            _this4.pointerMove$.next({
              event: touchMoveEvent,
              clientX: touchMoveEvent.targetTouches[0].clientX,
              clientY: touchMoveEvent.targetTouches[0].clientY
            });
          }
        });

        this.eventListenerSubscriptions.touchmove =
        /**
        * @return {?}
        */
        function () {
          contextMenuListener.unsubscribe();
          touchMoveListener.unsubscribe();
        };
      }

      this.pointerDown$.next({
        event: event,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY
      });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      if (this.eventListenerSubscriptions.touchmove) {
        this.eventListenerSubscriptions.touchmove();
        delete this.eventListenerSubscriptions.touchmove;

        if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
          this.enableScroll();
        }
      }

      this.pointerUp$.next({
        event: event,
        clientX: event.changedTouches[0].clientX,
        clientY: event.changedTouches[0].clientY
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      this.setCursor(this.dragCursor);
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.setCursor('');
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "canDrag",
    value: function canDrag() {
      return this.dragAxis.x || this.dragAxis.y;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setCursor",
    value: function setCursor(value) {
      if (!this.eventListenerSubscriptions.mousemove) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "unsubscribeEventListeners",
    value: function unsubscribeEventListeners() {
      var _this5 = this;

      Object.keys(this.eventListenerSubscriptions).forEach(
      /**
      * @param {?} type
      * @return {?}
      */
      function (type) {
        _this5.eventListenerSubscriptions[type]();

        delete _this5.eventListenerSubscriptions[type];
      });
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */

  }, {
    key: "setElementStyles",
    value: function setElementStyles(element, styles) {
      var _this6 = this;

      Object.keys(styles).forEach(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        _this6.renderer.setStyle(element, key, styles[key]);
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getScrollElement",
    value: function getScrollElement() {
      if (this.scrollContainer) {
        return this.scrollContainer.elementRef.nativeElement;
      } else {
        return this.document.body;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getScrollPosition",
    value: function getScrollPosition() {
      if (this.scrollContainer) {
        return {
          top: this.scrollContainer.elementRef.nativeElement.scrollTop,
          left: this.scrollContainer.elementRef.nativeElement.scrollLeft
        };
      } else {
        return {
          top: window.pageYOffset || this.document.documentElement.scrollTop,
          left: window.pageXOffset || this.document.documentElement.scrollLeft
        };
      }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */

  }, {
    key: "shouldBeginDrag",
    value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
      /** @type {?} */
      var moveScrollPosition = this.getScrollPosition();
      /** @type {?} */

      var deltaScroll = {
        top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
        left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
      };
      /** @type {?} */

      var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
      /** @type {?} */

      var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
      /** @type {?} */

      var deltaTotal = deltaX + deltaY;
      /** @type {?} */

      var longPressConfig = this.touchStartLongPress ? this.touchStartLongPress :
      /* istanbul ignore next */
      {
        delta: this.scrollContainer.longPressConfig.delta,
        delay: this.scrollContainer.longPressConfig.duration
      };

      if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
        this.timeLongPress.timerBegin = Date.now();
      }

      this.timeLongPress.timerEnd = Date.now();
      /** @type {?} */

      var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

      if (duration >= longPressConfig.delay) {
        this.disableScroll();
        return true;
      }

      return false;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "enableScroll",
    value: function enableScroll() {
      if (this.scrollContainer) {
        this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
      }

      this.renderer.setStyle(this.document.body, 'overflow', '');
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "disableScroll",
    value: function disableScroll() {
      /* istanbul ignore next */
      if (this.scrollContainer) {
        this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
      }

      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "hasScrollbar",
    value: function hasScrollbar() {
      /** @type {?} */
      var scrollContainer = this.getScrollElement();
      /** @type {?} */

      var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
      /** @type {?} */

      var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
      return containerHasHorizontalScroll || containerHasVerticalScroll;
    }
  }]);

  return DraggableDirective;
}();

DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DOCUMENT));
};

DraggableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: DraggableDirective,
  selectors: [["", "mwlDraggable", ""]],
  inputs: {
    dragAxis: "dragAxis",
    dragSnapGrid: "dragSnapGrid",
    ghostDragEnabled: "ghostDragEnabled",
    showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
    dragCursor: "dragCursor",
    autoScroll: "autoScroll",
    dropData: "dropData",
    validateDrag: "validateDrag",
    dragActiveClass: "dragActiveClass",
    ghostElementAppendTo: "ghostElementAppendTo",
    ghostElementTemplate: "ghostElementTemplate",
    touchStartLongPress: "touchStartLongPress"
  },
  outputs: {
    dragPointerDown: "dragPointerDown",
    dragStart: "dragStart",
    ghostElementCreated: "ghostElementCreated",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

DraggableDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2
  }, {
    type: DraggableHelper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef
  }, {
    type: DraggableScrollContainerDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.DOCUMENT]
    }]
  }];
};

DraggableDirective.propDecorators = {
  dropData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragAxis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragSnapGrid: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  ghostDragEnabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  showOriginalElementWhileDragging: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  validateDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragCursor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragActiveClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  ghostElementAppendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  ghostElementTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  touchStartLongPress: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  autoScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragPointerDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  ghostElementCreated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  dragging: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DraggableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive,
    args: [{
      selector: '[mwlDraggable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2
    }, {
      type: DraggableHelper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef
    }, {
      type: DraggableScrollContainerDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.DOCUMENT]
      }]
    }];
  }, {
    dragAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    dragSnapGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    ghostDragEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    showOriginalElementWhileDragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    dragCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    autoScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    dragPointerDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    ghostElementCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dropData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    validateDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    dragActiveClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    ghostElementAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    ghostElementTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    touchStartLongPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */


function isCoordinateWithinRectangle(clientX, clientY, rect) {
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

var DroppableDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   * @param {?} draggableHelper
   * @param {?} zone
   * @param {?} renderer
   * @param {?} scrollContainer
   */
  function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, DroppableDirective);

    this.element = element;
    this.draggableHelper = draggableHelper;
    this.zone = zone;
    this.renderer = renderer;
    this.scrollContainer = scrollContainer;
    /**
     * Called when a draggable element starts overlapping the element
     */

    this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called when a draggable element stops overlapping the element
     */

    this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called when a draggable element is moved over the element
     */

    this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * Called when a draggable element is dropped on this element
     */

    this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(); // tslint:disable-line no-output-named-after-standard-event
  }
  /**
   * @return {?}
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DroppableDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this7 = this;

      this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
      /**
      * @param {?} drag$
      * @return {?}
      */
      function (drag$) {
        addClass(_this7.renderer, _this7.element, _this7.dragActiveClass);
        /** @type {?} */

        var droppableElement = {
          updateCache: true
        };
        /** @type {?} */

        var deregisterScrollListener = _this7.renderer.listen(_this7.scrollContainer ? _this7.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
        /**
        * @return {?}
        */
        function () {
          droppableElement.updateCache = true;
        });
        /** @type {?} */


        var currentDragDropData;
        /** @type {?} */

        var overlaps$ = drag$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref11) {
          var clientX = _ref11.clientX,
              clientY = _ref11.clientY,
              dropData = _ref11.dropData,
              target = _ref11.target;
          currentDragDropData = dropData;

          if (droppableElement.updateCache) {
            droppableElement.rect = _this7.element.nativeElement.getBoundingClientRect();

            if (_this7.scrollContainer) {
              droppableElement.scrollContainerRect = _this7.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
            }

            droppableElement.updateCache = false;
          }
          /** @type {?} */


          var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, droppableElement.rect);
          /** @type {?} */

          var isDropAllowed = !_this7.validateDrop || _this7.validateDrop({
            clientX: clientX,
            clientY: clientY,
            target: target
          });

          if (droppableElement.scrollContainerRect) {
            return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY, droppableElement.scrollContainerRect);
          } else {
            return isWithinElement && isDropAllowed;
          }
        }));
        /** @type {?} */

        var overlapsChanged$ = overlaps$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)());
        /** @type {?} */

        var dragOverActive;
        overlapsChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
        /**
        * @param {?} overlapsNow
        * @return {?}
        */
        function (overlapsNow) {
          return overlapsNow;
        })).subscribe(
        /**
        * @return {?}
        */
        function () {
          dragOverActive = true;
          addClass(_this7.renderer, _this7.element, _this7.dragOverClass);

          _this7.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this7.dragEnter.next({
              dropData: currentDragDropData
            });
          });
        });
        overlaps$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
        /**
        * @param {?} overlapsNow
        * @return {?}
        */
        function (overlapsNow) {
          return overlapsNow;
        })).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this7.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this7.dragOver.next({
              dropData: currentDragDropData
            });
          });
        });
        overlapsChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref12) {
          var _ref13 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref12, 2),
              didOverlap = _ref13[0],
              overlapsNow = _ref13[1];

          return didOverlap && !overlapsNow;
        })).subscribe(
        /**
        * @return {?}
        */
        function () {
          dragOverActive = false;
          removeClass(_this7.renderer, _this7.element, _this7.dragOverClass);

          _this7.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this7.dragLeave.next({
              dropData: currentDragDropData
            });
          });
        });
        drag$.subscribe({
          complete:
          /**
          * @return {?}
          */
          function complete() {
            deregisterScrollListener();
            removeClass(_this7.renderer, _this7.element, _this7.dragActiveClass);

            if (dragOverActive) {
              removeClass(_this7.renderer, _this7.element, _this7.dragOverClass);

              _this7.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this7.drop.next({
                  dropData: currentDragDropData
                });
              });
            }
          }
        });
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.currentDragSubscription) {
        this.currentDragSubscription.unsubscribe();
      }
    }
  }]);

  return DroppableDirective;
}();

DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
  return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8));
};

DroppableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: DroppableDirective,
  selectors: [["", "mwlDroppable", ""]],
  inputs: {
    dragOverClass: "dragOverClass",
    dragActiveClass: "dragActiveClass",
    validateDrop: "validateDrop"
  },
  outputs: {
    dragEnter: "dragEnter",
    dragLeave: "dragLeave",
    dragOver: "dragOver",
    drop: "drop"
  }
});
/** @nocollapse */

DroppableDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
  }, {
    type: DraggableHelper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2
  }, {
    type: DraggableScrollContainerDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional
    }]
  }];
};

DroppableDirective.propDecorators = {
  dragOverClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragActiveClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  validateDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  dragEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  dragLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  dragOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  drop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DroppableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive,
    args: [{
      selector: '[mwlDroppable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
    }, {
      type: DraggableHelper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2
    }, {
      type: DraggableScrollContainerDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional
      }]
    }];
  }, {
    dragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    drop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    dragOverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    dragActiveClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    validateDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DragAndDropModule = function DragAndDropModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, DragAndDropModule);
};

DragAndDropModule.ɵfac = function DragAndDropModule_Factory(t) {
  return new (t || DragAndDropModule)();
};

DragAndDropModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: DragAndDropModule
});
DragAndDropModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DragAndDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
    args: [{
      declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
      exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DragAndDropModule, {
    declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
    exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


 //# sourceMappingURL=angular-draggable-droppable.js.map

/***/ }),

/***/ 19793:
/*!**************************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizableDirective": function() { return /* binding */ ResizableDirective; },
/* harmony export */   "ResizeHandleDirective": function() { return /* binding */ ResizeHandleDirective; },
/* harmony export */   "ResizableModule": function() { return /* binding */ ResizableModule; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 42578);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 45697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 59328);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 45435);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @hidden
 * @type {?}
 */



var IS_TOUCH_DEVICE = function () {
  // In case we're in Node.js environment.
  if (typeof window === 'undefined') {
    return false;
  } else {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */


function isNumberCloseTo(value1, value2) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  /** @type {?} */
  var diff = Math.abs(value1 - value2);
  return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */


function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  /** @type {?} */
  var newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };

  if (edges.top) {
    newBoundingRect.top += clientY;
  }

  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }

  if (edges.left) {
    newBoundingRect.left += clientX;
  }

  if (edges.right) {
    newBoundingRect.right += clientX;
  }

  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */


function getElementRect(element, ghostElementPositioning) {
  /** @type {?} */
  var translateX = 0;
  /** @type {?} */

  var translateY = 0;
  /** @type {?} */

  var style = element.nativeElement.style;
  /** @type {?} */

  var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
  /** @type {?} */

  var transform = transformProperties.map(function (property) {
    return style[property];
  }).find(function (value) {
    return !!value;
  });

  if (transform && transform.includes('translate')) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
  }

  if (ghostElementPositioning === 'absolute') {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    /** @type {?} */
    var boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}
/**
 * @param {?} __0
 * @return {?}
 */


function isWithinBoundingY(_ref) {
  var clientY = _ref.clientY,
      rect = _ref.rect;
  return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */


function isWithinBoundingX(_ref2) {
  var clientX = _ref2.clientX,
      rect = _ref2.rect;
  return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */


function getResizeEdges(_ref3) {
  var clientX = _ref3.clientX,
      clientY = _ref3.clientY,
      elm = _ref3.elm,
      allowedEdges = _ref3.allowedEdges,
      cursorPrecision = _ref3.cursorPrecision;

  /** @type {?} */
  var elmPosition = elm.nativeElement.getBoundingClientRect();
  /** @type {?} */

  var edges = {};

  if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
    clientY: clientY,
    rect: elmPosition
  })) {
    edges.left = true;
  }

  if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
    clientY: clientY,
    rect: elmPosition
  })) {
    edges.right = true;
  }

  if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
    clientX: clientX,
    rect: elmPosition
  })) {
    edges.top = true;
  }

  if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
    clientX: clientX,
    rect: elmPosition
  })) {
    edges.bottom = true;
  }

  return edges;
}
/** @type {?} */


var DEFAULT_RESIZE_CURSORS = Object.freeze({
  topLeft: 'nw-resize',
  topRight: 'ne-resize',
  bottomLeft: 'sw-resize',
  bottomRight: 'se-resize',
  leftOrRight: 'col-resize',
  topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */

function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return '';
  }
}
/**
 * @param {?} __0
 * @return {?}
 */


function getEdgesDiff(_ref4) {
  var edges = _ref4.edges,
      initialRectangle = _ref4.initialRectangle,
      newRectangle = _ref4.newRectangle;

  /** @type {?} */
  var edgesDiff = {};
  Object.keys(edges).forEach(function (edge) {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}
/** @type {?} */


var RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */

var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */

var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */

var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */

var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */

var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */

var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */

var ResizableDirective = /*#__PURE__*/function () {
  /**
   * @hidden
   * @param {?} platformId
   * @param {?} renderer
   * @param {?} elm
   * @param {?} zone
   */
  function ResizableDirective(platformId, renderer, elm, zone) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ResizableDirective);

    this.platformId = platformId;
    this.renderer = renderer;
    this.elm = elm;
    this.zone = zone;
    /**
     * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
     * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
     */

    this.resizeEdges = {};
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     */

    this.enableGhostResize = false;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     */

    this.resizeSnapGrid = {};
    /**
     * The mouse cursors that will be set on the resize edges
     */

    this.resizeCursors = DEFAULT_RESIZE_CURSORS;
    /**
     * Mouse over thickness to active cursor.
     * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
     */

    this.resizeCursorPrecision = 3;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     */

    this.ghostElementPositioning = 'fixed';
    /**
     * Allow elements to be resized to negative dimensions
     */

    this.allowNegativeResizes = false;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     */

    this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     */

    this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     */

    this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     */

    this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * @hidden
     */

    this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * @hidden
     */

    this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * @hidden
     */

    this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
  }
  /**
   * @hidden
   * @return {?}
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ResizableDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      /** @type {?} */
      var mousedown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.pointerEventListeners.pointerDown, this.mousedown);
      /** @type {?} */

      var mousemove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.pointerEventListeners.pointerMove, this.mousemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (_ref5) {
        var event = _ref5.event;

        if (currentResize) {
          try {
            event.preventDefault();
          } catch (e) {// just adding try-catch not to see errors in console if there is a passive listener for same event somewhere
            // browser does nothing except of writing errors to console
          }
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
      /** @type {?} */

      var mouseup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.pointerEventListeners.pointerUp, this.mouseup);
      /** @type {?} */

      var currentResize;
      /** @type {?} */

      var removeGhostElement = function removeGhostElement() {
        if (currentResize && currentResize.clonedNode) {
          _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

          _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
        }
      };
      /** @type {?} */


      var getResizeCursors = function getResizeCursors() {
        return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
      };

      this.resizeEdges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(this.resizeEdges), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function () {
        return _this.resizeEdges && Object.keys(_this.resizeEdges).some(function (edge) {
          return !!_this.resizeEdges[edge];
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(function (legacyResizeEdgesEnabled) {
        return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.auditTime)(this.mouseMoveThrottleMS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(function (_ref6) {
        var clientX = _ref6.clientX,
            clientY = _ref6.clientY;

        /** @type {?} */
        var resizeEdges = getResizeEdges({
          clientX: clientX,
          clientY: clientY,
          elm: _this.elm,
          allowedEdges: _this.resizeEdges,
          cursorPrecision: _this.resizeCursorPrecision
        });
        /** @type {?} */

        var resizeCursors = getResizeCursors();

        if (!currentResize) {
          /** @type {?} */
          var cursor = getResizeCursor(resizeEdges, resizeCursors);

          _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
        }

        _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

        _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

        _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

        _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
      });
      /** @type {?} */

      var mousedrag = mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(function (startCoords) {
        /**
         * @param {?} moveCoords
         * @return {?}
         */
        function getDiff(moveCoords) {
          return {
            clientX: moveCoords.clientX - startCoords.clientX,
            clientY: moveCoords.clientY - startCoords.clientY
          };
        }
        /** @type {?} */


        var getSnapGrid = function getSnapGrid() {
          /** @type {?} */
          var snapGrid = {
            x: 1,
            y: 1
          };

          if (currentResize) {
            if (_this.resizeSnapGrid.left && currentResize.edges.left) {
              snapGrid.x = +_this.resizeSnapGrid.left;
            } else if (_this.resizeSnapGrid.right && currentResize.edges.right) {
              snapGrid.x = +_this.resizeSnapGrid.right;
            }

            if (_this.resizeSnapGrid.top && currentResize.edges.top) {
              snapGrid.y = +_this.resizeSnapGrid.top;
            } else if (_this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
              snapGrid.y = +_this.resizeSnapGrid.bottom;
            }
          }

          return snapGrid;
        };
        /**
         * @param {?} coords
         * @param {?} snapGrid
         * @return {?}
         */


        function getGrid(coords, snapGrid) {
          return {
            x: Math.ceil(coords.clientX / snapGrid.x),
            y: Math.ceil(coords.clientY / snapGrid.y)
          };
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (coords) {
          return [, coords];
        })), mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref7) {
          var _ref8 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref7, 2),
              previousCoords = _ref8[0],
              newCoords = _ref8[1];

          return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(function (_ref9) {
          var _ref10 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref9, 2),
              previousCoords = _ref10[0],
              newCoords = _ref10[1];

          if (!previousCoords) {
            return true;
          }
          /** @type {?} */


          var snapGrid = getSnapGrid();
          /** @type {?} */

          var previousGrid = getGrid(previousCoords, snapGrid);
          /** @type {?} */

          var newGrid = getGrid(newCoords, snapGrid);
          return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref11) {
          var _ref12 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref11, 2),
              newCoords = _ref12[1];

          /** @type {?} */
          var snapGrid = getSnapGrid();
          return {
            clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
            clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
          };
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(mouseup$, mousedown$)));
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(function () {
        return !!currentResize;
      }));
      mousedrag.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref13) {
        var clientX = _ref13.clientX,
            clientY = _ref13.clientY;
        return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(function (newBoundingRect) {
        return _this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(function (newBoundingRect) {
        return _this.validateResize ? _this.validateResize({
          rectangle: newBoundingRect,
          edges: getEdgesDiff({
            edges: currentResize.edges,
            initialRectangle: currentResize.startingRect,
            newRectangle: newBoundingRect
          })
        }) : true;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(function (newBoundingRect) {
        if (currentResize && currentResize.clonedNode) {
          _this.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
        }

        if (_this.resizing.observers.length > 0) {
          _this.zone.run(function () {
            _this.resizing.emit({
              edges: getEdgesDiff({
                edges: currentResize.edges,
                initialRectangle: currentResize.startingRect,
                newRectangle: newBoundingRect
              }),
              rectangle: newBoundingRect
            });
          });
        }

        currentResize.currentRect = newBoundingRect;
      });
      mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref14) {
        var clientX = _ref14.clientX,
            clientY = _ref14.clientY,
            edges = _ref14.edges;
        return edges || getResizeEdges({
          clientX: clientX,
          clientY: clientY,
          elm: _this.elm,
          allowedEdges: _this.resizeEdges,
          cursorPrecision: _this.resizeCursorPrecision
        });
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(function (edges) {
        return Object.keys(edges).length > 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(function (edges) {
        if (currentResize) {
          removeGhostElement();
        }
        /** @type {?} */


        var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
        currentResize = {
          edges: edges,
          startingRect: startingRect,
          currentRect: startingRect
        };
        /** @type {?} */

        var resizeCursors = getResizeCursors();
        /** @type {?} */

        var cursor = getResizeCursor(currentResize.edges, resizeCursors);

        _this.renderer.setStyle(document.body, 'cursor', cursor);

        _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, true);

        if (_this.enableGhostResize) {
          currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);

          _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

          _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');

          _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);

          _this.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

          _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

          _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

          currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
          currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
        }

        if (_this.resizeStart.observers.length > 0) {
          _this.zone.run(function () {
            _this.resizeStart.emit({
              edges: getEdgesDiff({
                edges: edges,
                initialRectangle: startingRect,
                newRectangle: startingRect
              }),
              rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
            });
          });
        }
      });
      mouseup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(function () {
        if (currentResize) {
          _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);

          _this.renderer.setStyle(document.body, 'cursor', '');

          _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', '');

          if (_this.resizeEnd.observers.length > 0) {
            _this.zone.run(function () {
              _this.resizeEnd.emit({
                edges: getEdgesDiff({
                  edges: currentResize.edges,
                  initialRectangle: currentResize.startingRect,
                  newRectangle: currentResize.currentRect
                }),
                rectangle: currentResize.currentRect
              });
            });
          }

          removeGhostElement();
          currentResize = null;
        }
      });
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.resizeEdges) {
        this.resizeEdges$.next(this.resizeEdges);
      }
    }
    /**
     * @hidden
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // browser check for angular universal, because it doesn't know what document is
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.isPlatformBrowser)(this.platformId)) {
        this.renderer.setStyle(document.body, 'cursor', '');
      }

      this.mousedown.complete();
      this.mouseup.complete();
      this.mousemove.complete();
      this.resizeEdges$.complete();
      this.destroy$.next();
    }
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */

  }, {
    key: "setElementClass",
    value: function setElementClass(elm, name, add) {
      if (add) {
        this.renderer.addClass(elm.nativeElement, name);
      } else {
        this.renderer.removeClass(elm.nativeElement, name);
      }
    }
  }]);

  return ResizableDirective;
}();

ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
  return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

ResizableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ResizableDirective,
  selectors: [["", "mwlResizable", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    enableGhostResize: "enableGhostResize",
    resizeSnapGrid: "resizeSnapGrid",
    resizeCursors: "resizeCursors",
    resizeCursorPrecision: "resizeCursorPrecision",
    ghostElementPositioning: "ghostElementPositioning",
    allowNegativeResizes: "allowNegativeResizes",
    mouseMoveThrottleMS: "mouseMoveThrottleMS",
    validateResize: "validateResize"
  },
  outputs: {
    resizeStart: "resizeStart",
    resizing: "resizing",
    resizeEnd: "resizeEnd"
  },
  exportAs: ["mwlResizable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

ResizableDirective.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
  }];
};

ResizableDirective.propDecorators = {
  validateResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  resizeEdges: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  enableGhostResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  resizeSnapGrid: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  resizeCursors: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  resizeCursorPrecision: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  ghostElementPositioning: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  allowNegativeResizes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  mouseMoveThrottleMS: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  resizeStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  resizing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  resizeEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[mwlResizable]',
      exportAs: 'mwlResizable'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    resizeEdges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    enableGhostResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    resizeSnapGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    resizeCursors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    resizeCursorPrecision: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    ghostElementPositioning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    allowNegativeResizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mouseMoveThrottleMS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    resizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    resizing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    resizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    validateResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

var PointerEventListeners = /*#__PURE__*/function () {
  /**
   * @param {?} renderer
   * @param {?} zone
   */
  function PointerEventListeners(renderer, zone) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, PointerEventListeners);

    this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Observable(function (observer) {
      /** @type {?} */
      var unsubscribeMouseDown;
      /** @type {?} */

      var unsubscribeTouchStart;
      zone.runOutsideAngular(function () {
        unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event: event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event: event
            });
          });
        }
      });
      return function () {
        unsubscribeMouseDown();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Observable(function (observer) {
      /** @type {?} */
      var unsubscribeMouseMove;
      /** @type {?} */

      var unsubscribeTouchMove;
      zone.runOutsideAngular(function () {
        unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event: event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event: event
            });
          });
        }
      });
      return function () {
        unsubscribeMouseMove();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Observable(function (observer) {
      /** @type {?} */
      var unsubscribeMouseUp;
      /** @type {?} */

      var unsubscribeTouchEnd;
      /** @type {?} */

      var unsubscribeTouchCancel;
      zone.runOutsideAngular(function () {
        unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event: event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event: event
            });
          });
          unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event: event
            });
          });
        }
      });
      return function () {
        unsubscribeMouseUp();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd();
          unsubscribeTouchCancel();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(PointerEventListeners, null, [{
    key: "getInstance",
    value: // tslint:disable-line

    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    function getInstance(renderer, zone) {
      if (!PointerEventListeners.instance) {
        PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
      }

      return PointerEventListeners.instance;
    }
  }]);

  return PointerEventListeners;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */


var ResizeHandleDirective = /*#__PURE__*/function () {
  /**
   * @param {?} renderer
   * @param {?} element
   * @param {?} zone
   * @param {?} resizableDirective
   */
  function ResizeHandleDirective(renderer, element, zone, resizableDirective) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ResizeHandleDirective);

    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.resizableDirective = resizableDirective;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     */

    this.resizeEdges = {};
    this.eventListeners = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  /**
   * @return {?}
   */


  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ResizeHandleDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.zone.runOutsideAngular(function () {
        _this2.listenOnTheHost('mousedown').subscribe(function (event) {
          _this2.onMousedown(event, event.clientX, event.clientY);
        });

        _this2.listenOnTheHost('mouseup').subscribe(function (event) {
          _this2.onMouseup(event.clientX, event.clientY);
        });

        if (IS_TOUCH_DEVICE) {
          _this2.listenOnTheHost('touchstart').subscribe(function (event) {
            _this2.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
          });

          (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(_this2.listenOnTheHost('touchend'), _this2.listenOnTheHost('touchcancel')).subscribe(function (event) {
            _this2.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
          });
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroy$.next();
      this.unsubscribeEventListeners();
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */

  }, {
    key: "onMousedown",
    value: function onMousedown(event, clientX, clientY) {
      var _this3 = this;

      event.preventDefault();

      if (!this.eventListeners.touchmove) {
        this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
          _this3.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
        });
      }

      if (!this.eventListeners.mousemove) {
        this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
          _this3.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
        });
      }

      this.resizable.mousedown.next({
        clientX: clientX,
        clientY: clientY,
        edges: this.resizeEdges
      });
    }
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */

  }, {
    key: "onMouseup",
    value: function onMouseup(clientX, clientY) {
      this.unsubscribeEventListeners();
      this.resizable.mouseup.next({
        clientX: clientX,
        clientY: clientY,
        edges: this.resizeEdges
      });
    } // directive might be passed from DI or as an input

    /**
     * @private
     * @return {?}
     */

  }, {
    key: "resizable",
    get: function get() {
      return this.resizableDirective || this.resizableContainer;
    }
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */

  }, {
    key: "onMousemove",
    value: function onMousemove(event, clientX, clientY) {
      this.resizable.mousemove.next({
        clientX: clientX,
        clientY: clientY,
        edges: this.resizeEdges,
        event: event
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "unsubscribeEventListeners",
    value: function unsubscribeEventListeners() {
      var _this4 = this;

      Object.keys(this.eventListeners).forEach(function (type) {
        _this4.eventListeners[type]();

        delete _this4.eventListeners[type];
      });
    }
    /**
     * @private
     * @template T
     * @param {?} eventName
     * @return {?}
     */

  }, {
    key: "listenOnTheHost",
    value: function listenOnTheHost(eventName) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.fromEvent)(this.element.nativeElement, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$));
    }
  }]);

  return ResizeHandleDirective;
}();

ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
  return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ResizableDirective, 8));
};

ResizeHandleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ResizeHandleDirective,
  selectors: [["", "mwlResizeHandle", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    resizableContainer: "resizableContainer"
  }
});
/** @nocollapse */

ResizeHandleDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
  }, {
    type: ResizableDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
    }]
  }];
};

ResizeHandleDirective.propDecorators = {
  resizeEdges: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  resizableContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizeHandleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[mwlResizeHandle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: ResizableDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }]
    }];
  }, {
    resizeEdges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    resizableContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ResizableModule = function ResizableModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ResizableModule);
};

ResizableModule.ɵfac = function ResizableModule_Factory(t) {
  return new (t || ResizableModule)();
};

ResizableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ResizableModule
});
ResizableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: [ResizableDirective, ResizeHandleDirective],
      exports: [ResizableDirective, ResizeHandleDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResizableModule, {
    declarations: [ResizableDirective, ResizeHandleDirective],
    exports: [ResizableDirective, ResizeHandleDirective]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


 //# sourceMappingURL=angular-resizable-element.js.map

/***/ }),

/***/ 90104:
/*!*******************************************************!*\
  !*** ./node_modules/calendar-utils/calendar-utils.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_WEEK": function() { return /* binding */ DAYS_OF_WEEK; },
/* harmony export */   "SECONDS_IN_DAY": function() { return /* binding */ SECONDS_IN_DAY; },
/* harmony export */   "getEventsInPeriod": function() { return /* binding */ getEventsInPeriod; },
/* harmony export */   "getWeekViewHeader": function() { return /* binding */ getWeekViewHeader; },
/* harmony export */   "getDifferenceInDaysWithExclusions": function() { return /* binding */ getDifferenceInDaysWithExclusions; },
/* harmony export */   "getAllDayWeekEvents": function() { return /* binding */ getAllDayWeekEvents; },
/* harmony export */   "getWeekView": function() { return /* binding */ getWeekView; },
/* harmony export */   "getMonthView": function() { return /* binding */ getMonthView; },
/* harmony export */   "EventValidationErrorMessage": function() { return /* binding */ EventValidationErrorMessage; },
/* harmony export */   "validateEvents": function() { return /* binding */ validateEvents; }
/* harmony export */ });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var DAYS_OF_WEEK;

(function (DAYS_OF_WEEK) {
  DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;

function getExcludedSeconds(dateAdapter, _a) {
  var startDate = _a.startDate,
      seconds = _a.seconds,
      excluded = _a.excluded,
      precision = _a.precision;

  if (excluded.length < 1) {
    return 0;
  }

  var addSeconds = dateAdapter.addSeconds,
      getDay = dateAdapter.getDay,
      addDays = dateAdapter.addDays;
  var endDate = addSeconds(startDate, seconds - 1);
  var dayStart = getDay(startDate);
  var dayEnd = getDay(endDate);
  var result = 0; // Calculated in seconds

  var current = startDate;

  var _loop_1 = function _loop_1() {
    var day = getDay(current);

    if (excluded.some(function (excludedDay) {
      return excludedDay === day;
    })) {
      result += calculateExcludedSeconds(dateAdapter, {
        dayStart: dayStart,
        dayEnd: dayEnd,
        day: day,
        precision: precision,
        startDate: startDate,
        endDate: endDate
      });
    }

    current = addDays(current, 1);
  };

  while (current < endDate) {
    _loop_1();
  }

  return result;
}

function calculateExcludedSeconds(dateAdapter, _a) {
  var precision = _a.precision,
      day = _a.day,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      startDate = _a.startDate,
      endDate = _a.endDate;
  var differenceInSeconds = dateAdapter.differenceInSeconds,
      endOfDay = dateAdapter.endOfDay,
      startOfDay = dateAdapter.startOfDay;

  if (precision === 'minutes') {
    if (day === dayStart) {
      return differenceInSeconds(endOfDay(startDate), startDate) + 1;
    } else if (day === dayEnd) {
      return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
    }
  }

  return SECONDS_IN_DAY;
}

function getWeekViewEventSpan(dateAdapter, _a) {
  var event = _a.event,
      offset = _a.offset,
      startOfWeekDate = _a.startOfWeekDate,
      excluded = _a.excluded,
      precision = _a.precision,
      totalDaysInView = _a.totalDaysInView;
  var max = dateAdapter.max,
      differenceInSeconds = dateAdapter.differenceInSeconds,
      addDays = dateAdapter.addDays,
      endOfDay = dateAdapter.endOfDay,
      differenceInDays = dateAdapter.differenceInDays;
  var span = SECONDS_IN_DAY;
  var begin = max([event.start, startOfWeekDate]);

  if (event.end) {
    switch (precision) {
      case 'minutes':
        span = differenceInSeconds(event.end, begin);
        break;

      default:
        span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
        break;
    }
  }

  var offsetSeconds = offset * SECONDS_IN_DAY;
  var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
  // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

  var secondsInView = totalDaysInView * SECONDS_IN_DAY;

  if (totalLength > secondsInView) {
    span = secondsInView - offsetSeconds;
  }

  span -= getExcludedSeconds(dateAdapter, {
    startDate: begin,
    seconds: span,
    excluded: excluded,
    precision: precision
  });
  return span / SECONDS_IN_DAY;
}

function getWeekViewEventOffset(dateAdapter, _a) {
  var event = _a.event,
      startOfWeekDate = _a.startOfWeek,
      excluded = _a.excluded,
      precision = _a.precision;
  var differenceInDays = dateAdapter.differenceInDays,
      startOfDay = dateAdapter.startOfDay,
      differenceInSeconds = dateAdapter.differenceInSeconds;

  if (event.start < startOfWeekDate) {
    return 0;
  }

  var offset = 0;

  switch (precision) {
    case 'days':
      offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
      break;

    case 'minutes':
      offset = differenceInSeconds(event.start, startOfWeekDate);
      break;
  }

  offset -= getExcludedSeconds(dateAdapter, {
    startDate: startOfWeekDate,
    seconds: offset,
    excluded: excluded,
    precision: precision
  });
  return Math.abs(offset / SECONDS_IN_DAY);
}

function isEventIsPeriod(dateAdapter, _a) {
  var event = _a.event,
      periodStart = _a.periodStart,
      periodEnd = _a.periodEnd;
  var isSameSecond = dateAdapter.isSameSecond;
  var eventStart = event.start;
  var eventEnd = event.end || event.start;

  if (eventStart > periodStart && eventStart < periodEnd) {
    return true;
  }

  if (eventEnd > periodStart && eventEnd < periodEnd) {
    return true;
  }

  if (eventStart < periodStart && eventEnd > periodEnd) {
    return true;
  }

  if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
    return true;
  }

  if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
    return true;
  }

  return false;
}

function getEventsInPeriod(dateAdapter, _a) {
  var events = _a.events,
      periodStart = _a.periodStart,
      periodEnd = _a.periodEnd;
  return events.filter(function (event) {
    return isEventIsPeriod(dateAdapter, {
      event: event,
      periodStart: periodStart,
      periodEnd: periodEnd
    });
  });
}

function getWeekDay(dateAdapter, _a) {
  var date = _a.date,
      _b = _a.weekendDays,
      weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
  var startOfDay = dateAdapter.startOfDay,
      isSameDay = dateAdapter.isSameDay,
      getDay = dateAdapter.getDay;
  var today = startOfDay(new Date());
  var day = getDay(date);
  return {
    date: date,
    day: day,
    isPast: date < today,
    isToday: isSameDay(date, today),
    isFuture: date > today,
    isWeekend: weekendDays.indexOf(day) > -1
  };
}

function getWeekViewHeader(dateAdapter, _a) {
  var viewDate = _a.viewDate,
      weekStartsOn = _a.weekStartsOn,
      _b = _a.excluded,
      excluded = _b === void 0 ? [] : _b,
      weekendDays = _a.weekendDays,
      _c = _a.viewStart,
      viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  }) : _c,
      _d = _a.viewEnd,
      viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
  var addDays = dateAdapter.addDays,
      getDay = dateAdapter.getDay;
  var days = [];
  var date = viewStart;

  while (date < viewEnd) {
    if (!excluded.some(function (e) {
      return getDay(date) === e;
    })) {
      days.push(getWeekDay(dateAdapter, {
        date: date,
        weekendDays: weekendDays
      }));
    }

    date = addDays(date, 1);
  }

  return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
  var date1 = _a.date1,
      date2 = _a.date2,
      excluded = _a.excluded;
  var date = date1;
  var diff = 0;

  while (date < date2) {
    if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
      diff++;
    }

    date = dateAdapter.addDays(date, 1);
  }

  return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
  var _b = _a.events,
      events = _b === void 0 ? [] : _b,
      _c = _a.excluded,
      excluded = _c === void 0 ? [] : _c,
      _d = _a.precision,
      precision = _d === void 0 ? 'days' : _d,
      _e = _a.absolutePositionedEvents,
      absolutePositionedEvents = _e === void 0 ? false : _e,
      viewStart = _a.viewStart,
      viewEnd = _a.viewEnd;
  viewStart = dateAdapter.startOfDay(viewStart);
  viewEnd = dateAdapter.endOfDay(viewEnd);
  var differenceInSeconds = dateAdapter.differenceInSeconds,
      differenceInDays = dateAdapter.differenceInDays;
  var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
    date1: viewStart,
    date2: viewEnd,
    excluded: excluded
  });
  var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
  var eventsMapped = events.filter(function (event) {
    return event.allDay;
  }).map(function (event) {
    var offset = getWeekViewEventOffset(dateAdapter, {
      event: event,
      startOfWeek: viewStart,
      excluded: excluded,
      precision: precision
    });
    var span = getWeekViewEventSpan(dateAdapter, {
      event: event,
      offset: offset,
      startOfWeekDate: viewStart,
      excluded: excluded,
      precision: precision,
      totalDaysInView: totalDaysInView
    });
    return {
      event: event,
      offset: offset,
      span: span
    };
  }).filter(function (e) {
    return e.offset < maxRange;
  }).filter(function (e) {
    return e.span > 0;
  }).map(function (entry) {
    return {
      event: entry.event,
      offset: entry.offset,
      span: entry.span,
      startsBeforeWeek: entry.event.start < viewStart,
      endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
    };
  }).sort(function (itemA, itemB) {
    var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

    if (startSecondsDiff === 0) {
      return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
    }

    return startSecondsDiff;
  });
  var allDayEventRows = [];
  var allocatedEvents = [];
  eventsMapped.forEach(function (event, index) {
    if (allocatedEvents.indexOf(event) === -1) {
      allocatedEvents.push(event);
      var rowSpan_1 = event.span + event.offset;
      var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
        if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
          var nextEventOffset = nextEvent.offset - rowSpan_1;

          if (!absolutePositionedEvents) {
            nextEvent.offset = nextEventOffset;
          }

          rowSpan_1 += nextEvent.span + nextEventOffset;
          allocatedEvents.push(nextEvent);
          return true;
        }
      });

      var weekEvents = __spreadArrays([event], otherRowEvents);

      var id = weekEvents.filter(function (weekEvent) {
        return weekEvent.event.id;
      }).map(function (weekEvent) {
        return weekEvent.event.id;
      }).join('-');
      allDayEventRows.push(__assign({
        row: weekEvents
      }, id ? {
        id: id
      } : {}));
    }
  });
  return allDayEventRows;
}

function getWeekViewHourGrid(dateAdapter, _a) {
  var events = _a.events,
      viewDate = _a.viewDate,
      hourSegments = _a.hourSegments,
      hourDuration = _a.hourDuration,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      weekStartsOn = _a.weekStartsOn,
      excluded = _a.excluded,
      weekendDays = _a.weekendDays,
      segmentHeight = _a.segmentHeight,
      viewStart = _a.viewStart,
      viewEnd = _a.viewEnd,
      minimumEventHeight = _a.minimumEventHeight;
  var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
    viewDate: viewDate,
    hourSegments: hourSegments,
    hourDuration: hourDuration,
    dayStart: dayStart,
    dayEnd: dayEnd
  });
  var weekDays = getWeekViewHeader(dateAdapter, {
    viewDate: viewDate,
    weekStartsOn: weekStartsOn,
    excluded: excluded,
    weekendDays: weekendDays,
    viewStart: viewStart,
    viewEnd: viewEnd
  });
  var setHours = dateAdapter.setHours,
      setMinutes = dateAdapter.setMinutes,
      getHours = dateAdapter.getHours,
      getMinutes = dateAdapter.getMinutes;
  return weekDays.map(function (day) {
    var dayView = getDayView(dateAdapter, {
      events: events,
      viewDate: day.date,
      hourSegments: hourSegments,
      dayStart: dayStart,
      dayEnd: dayEnd,
      segmentHeight: segmentHeight,
      eventWidth: 1,
      hourDuration: hourDuration,
      minimumEventHeight: minimumEventHeight
    });
    var hours = dayViewHourGrid.map(function (hour) {
      var segments = hour.segments.map(function (segment) {
        var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
        return __assign(__assign({}, segment), {
          date: date
        });
      });
      return __assign(__assign({}, hour), {
        segments: segments
      });
    });

    function getColumnCount(allEvents, prevOverlappingEvents) {
      var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
        return iEvent.left + 1;
      }));
      var nextOverlappingEvents = allEvents.filter(function (iEvent) {
        return iEvent.left >= columnCount;
      }).filter(function (iEvent) {
        return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
      });

      if (nextOverlappingEvents.length > 0) {
        return getColumnCount(allEvents, nextOverlappingEvents);
      } else {
        return columnCount;
      }
    }

    var mappedEvents = dayView.events.map(function (event) {
      var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
      var width = 100 / columnCount;
      return __assign(__assign({}, event), {
        left: event.left * width,
        width: width
      });
    });
    return {
      hours: hours,
      date: day.date,
      events: mappedEvents.map(function (event) {
        var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) {
          return otherEvent.left > event.left;
        }), event.top, event.top + event.height);

        if (overLappingEvents.length > 0) {
          return __assign(__assign({}, event), {
            width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
              return otherEvent.left;
            })) - event.left
          });
        }

        return event;
      })
    };
  });
}

function getWeekView(dateAdapter, _a) {
  var _b = _a.events,
      events = _b === void 0 ? [] : _b,
      viewDate = _a.viewDate,
      weekStartsOn = _a.weekStartsOn,
      _c = _a.excluded,
      excluded = _c === void 0 ? [] : _c,
      _d = _a.precision,
      precision = _d === void 0 ? 'days' : _d,
      _e = _a.absolutePositionedEvents,
      absolutePositionedEvents = _e === void 0 ? false : _e,
      hourSegments = _a.hourSegments,
      hourDuration = _a.hourDuration,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      weekendDays = _a.weekendDays,
      segmentHeight = _a.segmentHeight,
      minimumEventHeight = _a.minimumEventHeight,
      _f = _a.viewStart,
      viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  }) : _f,
      _g = _a.viewEnd,
      viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  }) : _g;

  if (!events) {
    events = [];
  }

  var startOfDay = dateAdapter.startOfDay,
      endOfDay = dateAdapter.endOfDay;
  viewStart = startOfDay(viewStart);
  viewEnd = endOfDay(viewEnd);
  var eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events: events,
    periodStart: viewStart,
    periodEnd: viewEnd
  });
  var header = getWeekViewHeader(dateAdapter, {
    viewDate: viewDate,
    weekStartsOn: weekStartsOn,
    excluded: excluded,
    weekendDays: weekendDays,
    viewStart: viewStart,
    viewEnd: viewEnd
  });
  return {
    allDayEventRows: getAllDayWeekEvents(dateAdapter, {
      events: eventsInPeriod,
      excluded: excluded,
      precision: precision,
      absolutePositionedEvents: absolutePositionedEvents,
      viewStart: viewStart,
      viewEnd: viewEnd
    }),
    period: {
      events: eventsInPeriod,
      start: header[0].date,
      end: endOfDay(header[header.length - 1].date)
    },
    hourColumns: getWeekViewHourGrid(dateAdapter, {
      events: events,
      viewDate: viewDate,
      hourSegments: hourSegments,
      hourDuration: hourDuration,
      dayStart: dayStart,
      dayEnd: dayEnd,
      weekStartsOn: weekStartsOn,
      excluded: excluded,
      weekendDays: weekendDays,
      segmentHeight: segmentHeight,
      viewStart: viewStart,
      viewEnd: viewEnd,
      minimumEventHeight: minimumEventHeight
    })
  };
}
function getMonthView(dateAdapter, _a) {
  var _b = _a.events,
      events = _b === void 0 ? [] : _b,
      viewDate = _a.viewDate,
      weekStartsOn = _a.weekStartsOn,
      _c = _a.excluded,
      excluded = _c === void 0 ? [] : _c,
      _d = _a.viewStart,
      viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
      _e = _a.viewEnd,
      viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
      weekendDays = _a.weekendDays;

  if (!events) {
    events = [];
  }

  var startOfWeek = dateAdapter.startOfWeek,
      endOfWeek = dateAdapter.endOfWeek,
      differenceInDays = dateAdapter.differenceInDays,
      startOfDay = dateAdapter.startOfDay,
      addHours = dateAdapter.addHours,
      endOfDay = dateAdapter.endOfDay,
      isSameMonth = dateAdapter.isSameMonth,
      getDay = dateAdapter.getDay,
      getMonth = dateAdapter.getMonth;
  var start = startOfWeek(viewStart, {
    weekStartsOn: weekStartsOn
  });
  var end = endOfWeek(viewEnd, {
    weekStartsOn: weekStartsOn
  });
  var eventsInMonth = getEventsInPeriod(dateAdapter, {
    events: events,
    periodStart: start,
    periodEnd: end
  });
  var initialViewDays = [];
  var previousDate;

  var _loop_2 = function _loop_2(i) {
    // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
    var date;

    if (previousDate) {
      date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

      if (previousDate.getTime() === date.getTime()) {
        // DST change, so need to add 25 hours

        /* istanbul ignore next */
        date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
      }

      previousDate = date;
    } else {
      date = previousDate = start;
    }

    if (!excluded.some(function (e) {
      return getDay(date) === e;
    })) {
      var day = getWeekDay(dateAdapter, {
        date: date,
        weekendDays: weekendDays
      });
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: eventsInMonth,
        periodStart: startOfDay(date),
        periodEnd: endOfDay(date)
      });
      day.inMonth = isSameMonth(date, viewDate);
      day.events = eventsInPeriod;
      day.badgeTotal = eventsInPeriod.length;
      initialViewDays.push(day);
    }
  };

  for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
    _loop_2(i);
  }

  var days = [];
  var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

  if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
    for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
      var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
      var isRowInMonth = row.some(function (day) {
        return viewStart <= day.date && day.date < viewEnd;
      });

      if (isRowInMonth) {
        days = __spreadArrays(days, row);
      }
    }
  } else {
    days = initialViewDays;
  }

  var rows = Math.floor(days.length / totalDaysVisibleInWeek);
  var rowOffsets = [];

  for (var i = 0; i < rows; i++) {
    rowOffsets.push(i * totalDaysVisibleInWeek);
  }

  return {
    rowOffsets: rowOffsets,
    totalDaysVisibleInWeek: totalDaysVisibleInWeek,
    days: days,
    period: {
      start: days[0].date,
      end: endOfDay(days[days.length - 1].date),
      events: eventsInMonth
    }
  };
}

function getOverLappingWeekViewEvents(events, top, bottom) {
  return events.filter(function (previousEvent) {
    var previousEventTop = previousEvent.top;
    var previousEventBottom = previousEvent.top + previousEvent.height;

    if (top < previousEventBottom && previousEventBottom < bottom) {
      return true;
    } else if (top < previousEventTop && previousEventTop < bottom) {
      return true;
    } else if (previousEventTop <= top && bottom <= previousEventBottom) {
      return true;
    }

    return false;
  });
}

function getDayView(dateAdapter, _a) {
  var events = _a.events,
      viewDate = _a.viewDate,
      hourSegments = _a.hourSegments,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      eventWidth = _a.eventWidth,
      segmentHeight = _a.segmentHeight,
      hourDuration = _a.hourDuration,
      minimumEventHeight = _a.minimumEventHeight;
  var setMinutes = dateAdapter.setMinutes,
      setHours = dateAdapter.setHours,
      startOfDay = dateAdapter.startOfDay,
      startOfMinute = dateAdapter.startOfMinute,
      endOfDay = dateAdapter.endOfDay,
      differenceInMinutes = dateAdapter.differenceInMinutes;
  var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  endOfView.setSeconds(59, 999);
  var previousDayEvents = [];
  var eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events: events.filter(function (event) {
      return !event.allDay;
    }),
    periodStart: startOfView,
    periodEnd: endOfView
  });
  var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
    return eventA.start.valueOf() - eventB.start.valueOf();
  }).map(function (event) {
    var eventStart = event.start;
    var eventEnd = event.end || eventStart;
    var startsBeforeDay = eventStart < startOfView;
    var endsAfterDay = eventEnd > endOfView;
    var hourHeightModifier = hourSegments * segmentHeight / (hourDuration || MINUTES_IN_HOUR);
    var top = 0;

    if (eventStart > startOfView) {
      // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
      var eventOffset = eventStart.getTimezoneOffset();
      var startOffset = startOfView.getTimezoneOffset();
      var diff = startOffset - eventOffset;
      top += differenceInMinutes(eventStart, startOfView) + diff;
    }

    top *= hourHeightModifier;
    var startDate = startsBeforeDay ? startOfView : eventStart;
    var endDate = endsAfterDay ? endOfView : eventEnd;
    var timezoneOffset = startDate.getTimezoneOffset() - endDate.getTimezoneOffset();
    var height = differenceInMinutes(endDate, startDate) + timezoneOffset;

    if (!event.end) {
      height = segmentHeight;
    } else {
      height *= hourHeightModifier;
    }

    if (minimumEventHeight && height < minimumEventHeight) {
      height = minimumEventHeight;
    }

    var bottom = top + height;
    var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
    var left = 0;

    while (overlappingPreviousEvents.some(function (previousEvent) {
      return previousEvent.left === left;
    })) {
      left += eventWidth;
    }

    var dayEvent = {
      event: event,
      height: height,
      width: eventWidth,
      top: top,
      left: left,
      startsBeforeDay: startsBeforeDay,
      endsAfterDay: endsAfterDay
    };
    previousDayEvents.push(dayEvent);
    return dayEvent;
  });
  var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
    return event.left + event.width;
  }));
  var allDayEvents = getEventsInPeriod(dateAdapter, {
    events: events.filter(function (event) {
      return event.allDay;
    }),
    periodStart: startOfDay(startOfView),
    periodEnd: endOfDay(endOfView)
  });
  return {
    events: dayViewEvents,
    width: width,
    allDayEvents: allDayEvents,
    period: {
      events: eventsInPeriod,
      start: startOfView,
      end: endOfView
    }
  };
}

function sanitiseHours(hours) {
  return Math.max(Math.min(23, hours), 0);
}

function sanitiseMinutes(minutes) {
  return Math.max(Math.min(59, minutes), 0);
}

function getDayViewHourGrid(dateAdapter, _a) {
  var viewDate = _a.viewDate,
      hourSegments = _a.hourSegments,
      hourDuration = _a.hourDuration,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd;
  var setMinutes = dateAdapter.setMinutes,
      setHours = dateAdapter.setHours,
      startOfDay = dateAdapter.startOfDay,
      startOfMinute = dateAdapter.startOfMinute,
      endOfDay = dateAdapter.endOfDay,
      addMinutes = dateAdapter.addMinutes,
      addHours = dateAdapter.addHours,
      addDays = dateAdapter.addDays;
  var hours = [];
  var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  var segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
  var startOfViewDay = startOfDay(viewDate);
  var endOfViewDay = endOfDay(viewDate);

  var dateAdjustment = function dateAdjustment(d) {
    return d;
  }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


  if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
    startOfViewDay = addDays(startOfViewDay, 1);
    startOfView = addDays(startOfView, 1);
    endOfView = addDays(endOfView, 1);

    dateAdjustment = function dateAdjustment(d) {
      return addDays(d, -1);
    };
  }

  var dayDuration = hourDuration ? HOURS_IN_DAY * 60 / hourDuration : MINUTES_IN_HOUR;

  for (var i = 0; i < dayDuration; i++) {
    var segments = [];

    for (var j = 0; j < hourSegments; j++) {
      var date = addMinutes(addMinutes(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);

      if (date >= startOfView && date < endOfView) {
        segments.push({
          date: dateAdjustment(date),
          displayDate: date,
          isStart: j === 0
        });
      }
    }

    if (segments.length > 0) {
      hours.push({
        segments: segments
      });
    }
  }

  return hours;
}

var EventValidationErrorMessage;

(function (EventValidationErrorMessage) {
  EventValidationErrorMessage["NotArray"] = "Events must be an array";
  EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
  EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
  EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
  EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

function validateEvents(events, log) {
  var isValid = true;

  function isError(msg, event) {
    log(msg, event);
    isValid = false;
  }

  if (!Array.isArray(events)) {
    log(EventValidationErrorMessage.NotArray, events);
    return false;
  }

  events.forEach(function (event) {
    if (!event.start) {
      isError(EventValidationErrorMessage.StartPropertyMissing, event);
    } else if (!(event.start instanceof Date)) {
      isError(EventValidationErrorMessage.StartPropertyNotDate, event);
    }

    if (event.end) {
      if (!(event.end instanceof Date)) {
        isError(EventValidationErrorMessage.EndPropertyNotDate, event);
      }

      if (event.start > event.end) {
        isError(EventValidationErrorMessage.EndsBeforeStart, event);
      }
    }
  });
  return isValid;
} //# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ 23302:
/*!*************************************************************************!*\
  !*** ./node_modules/calendar-utils/date-adapters/esm/date-fns/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": function() { return /* binding */ adapterFactory; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 23501);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 64465);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 4547);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 22100);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 61023);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 6024);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 20224);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 62094);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 51000);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 33550);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 51056);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 87482);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 12297);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 57888);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 4728);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 12541);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 32743);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 59326);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 43257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 49055);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 87592);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 44840);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 21805);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 84839);

function adapterFactory() {
  return {
    addDays: date_fns__WEBPACK_IMPORTED_MODULE_0__.default,
    addHours: date_fns__WEBPACK_IMPORTED_MODULE_1__.default,
    addMinutes: date_fns__WEBPACK_IMPORTED_MODULE_2__.default,
    addSeconds: date_fns__WEBPACK_IMPORTED_MODULE_3__.default,
    differenceInDays: date_fns__WEBPACK_IMPORTED_MODULE_4__.default,
    differenceInMinutes: date_fns__WEBPACK_IMPORTED_MODULE_5__.default,
    differenceInSeconds: date_fns__WEBPACK_IMPORTED_MODULE_6__.default,
    endOfDay: date_fns__WEBPACK_IMPORTED_MODULE_7__.default,
    endOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_8__.default,
    endOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_9__.default,
    getDay: date_fns__WEBPACK_IMPORTED_MODULE_10__.default,
    getMonth: date_fns__WEBPACK_IMPORTED_MODULE_11__.default,
    isSameDay: date_fns__WEBPACK_IMPORTED_MODULE_12__.default,
    isSameMonth: date_fns__WEBPACK_IMPORTED_MODULE_13__.default,
    isSameSecond: date_fns__WEBPACK_IMPORTED_MODULE_14__.default,
    max: date_fns__WEBPACK_IMPORTED_MODULE_15__.default,
    setHours: date_fns__WEBPACK_IMPORTED_MODULE_16__.default,
    setMinutes: date_fns__WEBPACK_IMPORTED_MODULE_17__.default,
    startOfDay: date_fns__WEBPACK_IMPORTED_MODULE_18__.default,
    startOfMinute: date_fns__WEBPACK_IMPORTED_MODULE_19__.default,
    startOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_20__.default,
    startOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_21__.default,
    getHours: date_fns__WEBPACK_IMPORTED_MODULE_22__.default,
    getMinutes: date_fns__WEBPACK_IMPORTED_MODULE_23__.default
  };
} //# sourceMappingURL=index.js.map

/***/ }),

/***/ 95729:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getTimezoneOffsetInMilliseconds; }
/* harmony export */ });
var MILLISECONDS_IN_MINUTE = 60000;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */

function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ 43463:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ requiredArgs; }
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + required > 1 ? 's' : '' + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 20207:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toInteger; }
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 23501:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addDays; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 64465:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addHours/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addHours; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 43530);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),

/***/ 43530:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addMilliseconds; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ 4547:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addMinutes; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 43530);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ 8815:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addMonths; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getDaysInMonth/index.js */ 85818);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);




/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  var desiredMonth = date.getMonth() + amount;
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0,_getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
  return date;
}

/***/ }),

/***/ 22100:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addSeconds/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addSeconds; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 43530);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * 1000);
}

/***/ }),

/***/ 48069:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addWeeks; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 23501);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, days);
}

/***/ }),

/***/ 24487:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ compareAsc; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 38468:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInCalendarDays; }
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 95729);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 43257);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ 61023:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInDays; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 38468);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 24487);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);




/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 */

function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 61801:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInMilliseconds; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ 6024:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInMinutes; }
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 61801);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are from 10:01:59 to 10:00:00
 * var result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ 20224:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInSeconds; }
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 61801);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ 62094:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfDay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 51000:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 33550:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 50752:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDate; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ 51056:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ 85818:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDaysInMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ 21805:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getHours; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ 54953:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeekYear/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getISOWeekYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 17294);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 21889:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeek/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getISOWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 17294);
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ 85681);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 84839:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getMinutes/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getMinutes; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ 87482:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ 45255:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/***/ }),

/***/ 12297:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isSameDay; }
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 43257);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ 57888:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isSameMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ 4728:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameSecond/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isSameSecond; }
/* harmony export */ });
/* harmony import */ var _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfSecond/index.js */ 35199);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */

function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfSecond = (0,_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfSecond = (0,_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}

/***/ }),

/***/ 12541:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/max/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ max; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ 57315:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setDate/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setDate; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */

function setDate(dirtyDate, dirtyDayOfMonth) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var dayOfMonth = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}

/***/ }),

/***/ 32743:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setHours/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setHours; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var hours = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ 59326:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setMinutes/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setMinutes; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var minutes = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),

/***/ 69400:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setMonth/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setMonth; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getDaysInMonth/index.js */ 85818);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0,_getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/***/ }),

/***/ 49476:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setYear/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setYear; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date)) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/***/ }),

/***/ 43257:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfDay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 85681:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeekYear/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfISOWeekYear; }
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ 54953);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 17294);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ 17294:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeek/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfISOWeek; }
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ 44840);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ 49055:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfMinute; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ 87592:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 35199:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfSecond/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfSecond; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ 44840:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 94513);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 98120:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ subDays; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 23501);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ 46239:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ subMonths; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 8815);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ 79223:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subWeeks/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ subWeeks; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 20207);
/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addWeeks/index.js */ 48069);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);



/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addWeeks_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ 94513:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toDate; }
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 43463);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ 16884:
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/fesm2015/ngx-color-picker.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cmyk": function() { return /* binding */ Cmyk; },
/* harmony export */   "ColorPickerComponent": function() { return /* binding */ ColorPickerComponent; },
/* harmony export */   "ColorPickerDirective": function() { return /* binding */ ColorPickerDirective; },
/* harmony export */   "ColorPickerModule": function() { return /* binding */ ColorPickerModule; },
/* harmony export */   "ColorPickerService": function() { return /* binding */ ColorPickerService; },
/* harmony export */   "Hsla": function() { return /* binding */ Hsla; },
/* harmony export */   "Hsva": function() { return /* binding */ Hsva; },
/* harmony export */   "Rgba": function() { return /* binding */ Rgba; },
/* harmony export */   "SliderDirective": function() { return /* binding */ SliderDirective; },
/* harmony export */   "TextDirective": function() { return /* binding */ TextDirective; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 12057);






var _c0 = ["dialogPopup"];
var _c1 = ["hueSlider"];
var _c2 = ["alphaSlider"];

function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("arrow arrow-", ctx_r1.cpUsePosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r1.arrowTop, "px");
  }
}

function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r16.onColorChange($event);
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r18.onDragStart("saturation-lightness");
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r19.onDragEnd("saturation-lightness");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r2.hueSliderColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rgX", 1)("rgY", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r2.slider == null ? null : ctx_r2.slider.v, "px")("left", ctx_r2.slider == null ? null : ctx_r2.slider.s, "px");
  }
}

function ColorPickerComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_button_8_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r20.onAddPresetColor($event, ctx_r20.selectedColor);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r3.cpAddColorButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.cpPresetColors && ctx_r3.cpPresetColors.length >= ctx_r3.cpMaxPresetColorsLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.cpAddColorButtonText, " ");
  }
}

function ColorPickerComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 28);
  }
}

function ColorPickerComponent_div_20_input_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_input_6_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r24.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_20_input_6_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r26.onAlphaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 1)("value", ctx_r22.cmykText == null ? null : ctx_r22.cmykText.a);
  }
}

function ColorPickerComponent_div_20_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ColorPickerComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r27.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r29.onCyanInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r30.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r31.onMagentaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r32.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r33.onYellowInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r34.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r35.onBlackInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ColorPickerComponent_div_20_input_6_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ColorPickerComponent_div_20_div_16_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r8.format !== 3 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.m);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.k);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_21_input_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_input_5_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);
      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r38.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_21_input_5_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r40.onAlphaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 1)("value", ctx_r36.hslaText == null ? null : ctx_r36.hslaText.a);
  }
}

function ColorPickerComponent_div_21_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r41.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r43.onHueInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r44.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r45.onSaturationInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r46.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r47.onLightnessInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ColorPickerComponent_div_21_input_5_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ColorPickerComponent_div_21_div_13_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r9.format !== 2 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 360)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.h);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.s);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r50.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r52.onAlphaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 1)("value", ctx_r48.rgbaText == null ? null : ctx_r48.rgbaText.a);
  }
}

function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r53.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r55.onRedInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r56.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r57.onGreenInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r58.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r59.onBlueInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r10.format !== 1 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.b);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_23_input_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_input_3_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r62.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_23_input_3_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r64.onAlphaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 1)("value", ctx_r60.hexAlpha);
  }
}

function ColorPickerComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function ColorPickerComponent_div_23_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66);
      var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r65.onHexInput(null);
    })("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66);
      var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r67.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66);
      var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r68.onHexInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ColorPickerComponent_div_23_input_3_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ColorPickerComponent_div_23_div_7_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r11.format !== 0 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hex-alpha", ctx_r11.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r11.hexText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
  }
}

function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71);
      var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r70.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71);
      var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r72.onAlphaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 1)("value", ctx_r69.hslaText == null ? null : ctx_r69.hslaText.a);
  }
}

function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74);
      var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r73.onAcceptColor($event);
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74);
      var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r75.onValueInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rg", 100)("value", ctx_r12.hslaText == null ? null : ctx_r12.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r77);
      var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r76.onFormatToggle(-1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r77);
      var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r78.onFormatToggle(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ColorPickerComponent_div_26_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r86);
      var color_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r84.onRemovePresetColor($event, color_r82);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r83.cpRemoveColorButtonClass);
  }
}

function ColorPickerComponent_div_26_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_Template_div_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r88);
      var color_r82 = restoredCtx.$implicit;
      var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r87.setColorFromString(color_r82);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_span_1_Template, 1, 3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r82 = ctx.$implicit;
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", color_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r81.cpAddColorButton);
  }
}

function ColorPickerComponent_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_Template, 2, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r79.cpPresetColorsClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r79.cpPresetColors);
  }
}

function ColorPickerComponent_div_26_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r80.cpPresetEmptyMessageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r80.cpPresetEmptyMessage);
  }
}

function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ColorPickerComponent_div_26_div_4_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ColorPickerComponent_div_26_div_5_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.cpPresetLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length) && ctx_r14.cpAddColorButton);
  }
}

function ColorPickerComponent_div_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r92);
      var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r91.onCancelColor($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r89.cpCancelButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r89.cpCancelButtonText);
  }
}

function ColorPickerComponent_div_27_button_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r94);
      var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r93.onAcceptColor($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r90.cpOKButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r90.cpOKButtonText);
  }
}

function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ColorPickerComponent_div_27_button_1_Template, 2, 4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ColorPickerComponent_div_27_button_2_Template, 2, 4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.cpCancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.cpOKButton);
  }
}

var ColorFormats;

(function (ColorFormats) {
  ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
  ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
  ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
  ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));

var Rgba = function Rgba(r, g, b, a) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Rgba);

  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
};

var Hsva = function Hsva(h, s, v, a) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Hsva);

  this.h = h;
  this.s = s;
  this.v = v;
  this.a = a;
};

var Hsla = function Hsla(h, s, l, a) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Hsla);

  this.h = h;
  this.s = s;
  this.l = l;
  this.a = a;
};

var Cmyk = function Cmyk(c, m, y, k) {
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Cmyk);

  this.c = c;
  this.m = m;
  this.y = y;
  this.k = k;
  this.a = a;
};

function calculateAutoPositioning(elBounds, triggerElBounds) {
  // Defaults
  var usePositionX = 'right';
  var usePositionY = 'bottom'; // Calculate collisions

  var height = elBounds.height,
      width = elBounds.width;
  var top = triggerElBounds.top,
      left = triggerElBounds.left;
  var bottom = top + triggerElBounds.height;
  var right = left + triggerElBounds.width;
  var collisionTop = top - height < 0;
  var collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  var collisionLeft = left - width < 0;
  var collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  var collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight; // Generate X & Y position values

  if (collisionBottom) {
    usePositionY = 'top';
  }

  if (collisionTop) {
    usePositionY = 'bottom';
  }

  if (collisionLeft) {
    usePositionX = 'right';
  }

  if (collisionRight) {
    usePositionX = 'left';
  } // Choose the largest gap available


  if (collisionAll) {
    var postions = ['left', 'right', 'top', 'bottom'];
    return postions.reduce(function (prev, next) {
      return elBounds[prev] > elBounds[next] ? prev : next;
    });
  }

  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return 'bottom';
    }

    if (collisionBottom) {
      return 'top';
    }

    return top > bottom ? 'top' : 'bottom';
  }

  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return 'right';
    }

    if (collisionRight) {
      return 'left';
    }

    return left > right ? 'left' : 'right';
  }

  return "".concat(usePositionY, "-").concat(usePositionX);
}

function detectIE() {
  var ua = '';

  if (typeof navigator !== 'undefined') {
    ua = navigator.userAgent.toLowerCase();
  }

  var msie = ua.indexOf('msie ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  } // Other browser


  return false;
}

var TextDirective = /*#__PURE__*/function () {
  function TextDirective() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, TextDirective);

    this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(TextDirective, [{
    key: "inputChange",
    value: function inputChange(event) {
      var value = event.target.value;

      if (this.rg === undefined) {
        this.newValue.emit(value);
      } else {
        var numeric = parseFloat(value);
        this.newValue.emit({
          v: numeric,
          rg: this.rg
        });
      }
    }
  }]);

  return TextDirective;
}();

TextDirective.ɵfac = function TextDirective_Factory(t) {
  return new (t || TextDirective)();
};

TextDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: TextDirective,
  selectors: [["", "text", ""]],
  hostBindings: function TextDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function TextDirective_input_HostBindingHandler($event) {
        return ctx.inputChange($event);
      });
    }
  },
  inputs: {
    rg: "rg",
    text: "text"
  },
  outputs: {
    newValue: "newValue"
  }
});
TextDirective.propDecorators = {
  rg: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  text: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  newValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  inputChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['input', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TextDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[text]'
    }]
  }], function () {
    return [];
  }, {
    newValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    inputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['input', ['$event']]
    }],
    rg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

var SliderDirective = /*#__PURE__*/function () {
  function SliderDirective(elRef) {
    var _this = this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SliderDirective);

    this.elRef = elRef;
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();

    this.listenerMove = function (event) {
      return _this.move(event);
    };

    this.listenerStop = function () {
      return _this.stop();
    };
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(SliderDirective, [{
    key: "mouseDown",
    value: function mouseDown(event) {
      this.start(event);
    }
  }, {
    key: "touchStart",
    value: function touchStart(event) {
      this.start(event);
    }
  }, {
    key: "move",
    value: function move(event) {
      event.preventDefault();
      this.setCursor(event);
    }
  }, {
    key: "start",
    value: function start(event) {
      this.setCursor(event);
      event.stopPropagation();
      document.addEventListener('mouseup', this.listenerStop);
      document.addEventListener('touchend', this.listenerStop);
      document.addEventListener('mousemove', this.listenerMove);
      document.addEventListener('touchmove', this.listenerMove);
      this.dragStart.emit();
    }
  }, {
    key: "stop",
    value: function stop() {
      document.removeEventListener('mouseup', this.listenerStop);
      document.removeEventListener('touchend', this.listenerStop);
      document.removeEventListener('mousemove', this.listenerMove);
      document.removeEventListener('touchmove', this.listenerMove);
      this.dragEnd.emit();
    }
  }, {
    key: "getX",
    value: function getX(event) {
      var position = this.elRef.nativeElement.getBoundingClientRect();
      var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
      return pageX - position.left - window.pageXOffset;
    }
  }, {
    key: "getY",
    value: function getY(event) {
      var position = this.elRef.nativeElement.getBoundingClientRect();
      var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
      return pageY - position.top - window.pageYOffset;
    }
  }, {
    key: "setCursor",
    value: function setCursor(event) {
      var width = this.elRef.nativeElement.offsetWidth;
      var height = this.elRef.nativeElement.offsetHeight;
      var x = Math.max(0, Math.min(this.getX(event), width));
      var y = Math.max(0, Math.min(this.getY(event), height));

      if (this.rgX !== undefined && this.rgY !== undefined) {
        this.newValue.emit({
          s: x / width,
          v: 1 - y / height,
          rgX: this.rgX,
          rgY: this.rgY
        });
      } else if (this.rgX === undefined && this.rgY !== undefined) {
        this.newValue.emit({
          v: y / height,
          rgY: this.rgY
        });
      } else if (this.rgX !== undefined && this.rgY === undefined) {
        this.newValue.emit({
          v: x / width,
          rgX: this.rgX
        });
      }
    }
  }]);

  return SliderDirective;
}();

SliderDirective.ɵfac = function SliderDirective_Factory(t) {
  return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};

SliderDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: SliderDirective,
  selectors: [["", "slider", ""]],
  hostBindings: function SliderDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
        return ctx.mouseDown($event);
      })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
        return ctx.touchStart($event);
      });
    }
  },
  inputs: {
    rgX: "rgX",
    rgY: "rgY",
    slider: "slider"
  },
  outputs: {
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    newValue: "newValue"
  }
});

SliderDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }];
};

SliderDirective.propDecorators = {
  rgX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  rgY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  slider: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  newValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  mouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['mousedown', ['$event']]
  }],
  touchStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['touchstart', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SliderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[slider]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }];
  }, {
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    newValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    touchStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['touchstart', ['$event']]
    }],
    rgX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    rgY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    slider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

var SliderPosition = function SliderPosition(h, s, v, a) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SliderPosition);

  this.h = h;
  this.s = s;
  this.v = v;
  this.a = a;
};

var SliderDimension = function SliderDimension(h, s, v, a) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SliderDimension);

  this.h = h;
  this.s = s;
  this.v = v;
  this.a = a;
};

var ColorPickerService = /*#__PURE__*/function () {
  function ColorPickerService() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ColorPickerService);

    this.active = null;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(ColorPickerService, [{
    key: "setActive",
    value: function setActive(active) {
      if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
        this.active.closeDialog();
      }

      this.active = active;
    }
  }, {
    key: "hsva2hsla",
    value: function hsva2hsla(hsva) {
      var h = hsva.h,
          s = hsva.s,
          v = hsva.v,
          a = hsva.a;

      if (v === 0) {
        return new Hsla(h, 0, 0, a);
      } else if (s === 0 && v === 1) {
        return new Hsla(h, 1, 1, a);
      } else {
        var l = v * (2 - s) / 2;
        return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
      }
    }
  }, {
    key: "hsla2hsva",
    value: function hsla2hsva(hsla) {
      var h = Math.min(hsla.h, 1),
          s = Math.min(hsla.s, 1);
      var l = Math.min(hsla.l, 1),
          a = Math.min(hsla.a, 1);

      if (l === 0) {
        return new Hsva(h, 0, 0, a);
      } else {
        var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
        return new Hsva(h, 2 * (v - l) / v, v, a);
      }
    }
  }, {
    key: "hsvaToRgba",
    value: function hsvaToRgba(hsva) {
      var r, g, b;
      var h = hsva.h,
          s = hsva.s,
          v = hsva.v,
          a = hsva.a;
      var i = Math.floor(h * 6);
      var f = h * 6 - i;
      var p = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);

      switch (i % 6) {
        case 0:
          r = v, g = t, b = p;
          break;

        case 1:
          r = q, g = v, b = p;
          break;

        case 2:
          r = p, g = v, b = t;
          break;

        case 3:
          r = p, g = q, b = v;
          break;

        case 4:
          r = t, g = p, b = v;
          break;

        case 5:
          r = v, g = p, b = q;
          break;

        default:
          r = 0, g = 0, b = 0;
      }

      return new Rgba(r, g, b, a);
    }
  }, {
    key: "cmykToRgb",
    value: function cmykToRgb(cmyk) {
      var r = (1 - cmyk.c) * (1 - cmyk.k);
      var g = (1 - cmyk.m) * (1 - cmyk.k);
      var b = (1 - cmyk.y) * (1 - cmyk.k);
      return new Rgba(r, g, b, cmyk.a);
    }
  }, {
    key: "rgbaToCmyk",
    value: function rgbaToCmyk(rgba) {
      var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);

      if (k === 1) {
        return new Cmyk(0, 0, 0, 1, rgba.a);
      } else {
        var c = (1 - rgba.r - k) / (1 - k);
        var m = (1 - rgba.g - k) / (1 - k);
        var y = (1 - rgba.b - k) / (1 - k);
        return new Cmyk(c, m, y, k, rgba.a);
      }
    }
  }, {
    key: "rgbaToHsva",
    value: function rgbaToHsva(rgba) {
      var h, s;
      var r = Math.min(rgba.r, 1),
          g = Math.min(rgba.g, 1);
      var b = Math.min(rgba.b, 1),
          a = Math.min(rgba.a, 1);
      var max = Math.max(r, g, b),
          min = Math.min(r, g, b);
      var v = max,
          d = max - min;
      s = max === 0 ? 0 : d / max;

      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;

          default:
            h = 0;
        }

        h /= 6;
      }

      return new Hsva(h, s, v, a);
    }
  }, {
    key: "rgbaToHex",
    value: function rgbaToHex(rgba, allowHex8) {
      /* tslint:disable:no-bitwise */
      var hex = '#' + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);

      if (allowHex8) {
        hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
      }
      /* tslint:enable:no-bitwise */


      return hex;
    }
  }, {
    key: "normalizeCMYK",
    value: function normalizeCMYK(cmyk) {
      return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
    }
  }, {
    key: "denormalizeCMYK",
    value: function denormalizeCMYK(cmyk) {
      return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
    }
  }, {
    key: "denormalizeRGBA",
    value: function denormalizeRGBA(rgba) {
      return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    }
  }, {
    key: "stringToHsva",
    value: function stringToHsva() {
      var colorString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowHex8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var hsva = null;
      colorString = (colorString || '').toLowerCase();
      var stringParsers = [{
        re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
        parse: function parse(execResult) {
          return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
        }
      }, {
        re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
        parse: function parse(execResult) {
          return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
        }
      }];

      if (allowHex8) {
        stringParsers.push({
          re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
          parse: function parse(execResult) {
            return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
          }
        });
      } else {
        stringParsers.push({
          re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
          parse: function parse(execResult) {
            return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
          }
        });
      }

      stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: function parse(execResult) {
          return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
        }
      });

      for (var key in stringParsers) {
        if (stringParsers.hasOwnProperty(key)) {
          var parser = stringParsers[key];
          var match = parser.re.exec(colorString),
              color = match && parser.parse(match);

          if (color) {
            if (color instanceof Rgba) {
              hsva = this.rgbaToHsva(color);
            } else if (color instanceof Hsla) {
              hsva = this.hsla2hsva(color);
            }

            return hsva;
          }
        }
      }

      return hsva;
    }
  }, {
    key: "outputFormat",
    value: function outputFormat(hsva, _outputFormat, alphaChannel) {
      if (_outputFormat === 'auto') {
        _outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
      }

      switch (_outputFormat) {
        case 'hsla':
          var hsla = this.hsva2hsla(hsva);
          var hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);

          if (hsva.a < 1 || alphaChannel === 'always') {
            return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
          } else {
            return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
          }

        case 'rgba':
          var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));

          if (hsva.a < 1 || alphaChannel === 'always') {
            return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
          } else {
            return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
          }

        default:
          var allowHex8 = alphaChannel === 'always' || alphaChannel === 'forced';
          return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
      }
    }
  }]);

  return ColorPickerService;
}();

ColorPickerService.ɵfac = function ColorPickerService_Factory(t) {
  return new (t || ColorPickerService)();
};

ColorPickerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ColorPickerService,
  factory: ColorPickerService.ɵfac
});

ColorPickerService.ctorParameters = function () {
  return [];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorPickerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [];
  }, null);
})();

var ColorPickerComponent = /*#__PURE__*/function () {
  function ColorPickerComponent(elRef, cdRef, service) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ColorPickerComponent);

    this.elRef = elRef;
    this.cdRef = cdRef;
    this.service = service;
    this.isIE10 = false;
    this.dialogArrowSize = 10;
    this.dialogArrowOffset = 15;
    this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
    this.useRootViewContainer = false;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(ColorPickerComponent, [{
    key: "handleEsc",
    value: function handleEsc(event) {
      if (this.show && this.cpDialogDisplay === 'popup') {
        this.onCancelColor(event);
      }
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(event) {
      if (this.show && this.cpDialogDisplay === 'popup') {
        this.onAcceptColor(event);
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.slider = new SliderPosition(0, 0, 0, 0);
      var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);

      if (this.cpCmykEnabled) {
        this.format = ColorFormats.CMYK;
      } else if (this.cpOutputFormat === 'rgba') {
        this.format = ColorFormats.RGBA;
      } else if (this.cpOutputFormat === 'hsla') {
        this.format = ColorFormats.HSLA;
      } else {
        this.format = ColorFormats.HEX;
      }

      this.listenerMouseDown = function (event) {
        _this2.onMouseDown(event);
      };

      this.listenerResize = function () {
        _this2.onResize();
      };

      this.openDialog(this.initialColor, false);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.closeDialog();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
        var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        this.updateColorPicker(false);
        this.cdRef.detectChanges();
      }
    }
  }, {
    key: "openDialog",
    value: function openDialog(color) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.service.setActive(this);

      if (!this.width) {
        this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
      }

      if (!this.height) {
        this.height = 320;
      }

      this.setInitialColor(color);
      this.setColorFromString(color, emit);
      this.openColorPicker();
    }
  }, {
    key: "closeDialog",
    value: function closeDialog() {
      this.closeColorPicker();
    }
  }, {
    key: "setupDialog",
    value: function setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpTriggerElement) {
      this.setInitialColor(color);
      this.setColorMode(cpColorMode);
      this.isIE10 = detectIE() === 10;
      this.directiveInstance = instance;
      this.directiveElementRef = elementRef;
      this.cpDisableInput = cpDisableInput;
      this.cpCmykEnabled = cpCmykEnabled;
      this.cpAlphaChannel = cpAlphaChannel;
      this.cpOutputFormat = cpOutputFormat;
      this.cpDialogDisplay = cpDialogDisplay;
      this.cpIgnoredElements = cpIgnoredElements;
      this.cpSaveClickOutside = cpSaveClickOutside;
      this.cpCloseClickOutside = cpCloseClickOutside;
      this.useRootViewContainer = cpUseRootViewContainer;
      this.width = this.cpWidth = parseInt(cpWidth, 10);
      this.height = this.cpHeight = parseInt(cpHeight, 10);
      this.cpPosition = cpPosition;
      this.cpPositionOffset = parseInt(cpPositionOffset, 10);
      this.cpOKButton = cpOKButton;
      this.cpOKButtonText = cpOKButtonText;
      this.cpOKButtonClass = cpOKButtonClass;
      this.cpCancelButton = cpCancelButton;
      this.cpCancelButtonText = cpCancelButtonText;
      this.cpCancelButtonClass = cpCancelButtonClass;
      this.fallbackColor = cpFallbackColor || '#fff';
      this.setPresetConfig(cpPresetLabel, cpPresetColors);
      this.cpPresetColorsClass = cpPresetColorsClass;
      this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
      this.cpPresetEmptyMessage = cpPresetEmptyMessage;
      this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
      this.cpAddColorButton = cpAddColorButton;
      this.cpAddColorButtonText = cpAddColorButtonText;
      this.cpAddColorButtonClass = cpAddColorButtonClass;
      this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
      this.cpTriggerElement = cpTriggerElement;

      if (!cpPositionRelativeToArrow) {
        this.dialogArrowOffset = 0;
      }

      if (cpDialogDisplay === 'inline') {
        this.dialogArrowSize = 0;
        this.dialogArrowOffset = 0;
      }

      if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
        this.cpAlphaChannel = 'disabled';
      }
    }
  }, {
    key: "setColorMode",
    value: function setColorMode(mode) {
      switch (mode.toString().toUpperCase()) {
        case '1':
        case 'C':
        case 'COLOR':
          this.cpColorMode = 1;
          break;

        case '2':
        case 'G':
        case 'GRAYSCALE':
          this.cpColorMode = 2;
          break;

        case '3':
        case 'P':
        case 'PRESETS':
          this.cpColorMode = 3;
          break;

        default:
          this.cpColorMode = 1;
      }
    }
  }, {
    key: "setInitialColor",
    value: function setInitialColor(color) {
      this.initialColor = color;
    }
  }, {
    key: "setPresetConfig",
    value: function setPresetConfig(cpPresetLabel, cpPresetColors) {
      this.cpPresetLabel = cpPresetLabel;
      this.cpPresetColors = cpPresetColors;
    }
  }, {
    key: "setColorFromString",
    value: function setColorFromString(value) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var hsva;

      if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
        hsva = this.service.stringToHsva(value, true);

        if (!hsva && !this.hsva) {
          hsva = this.service.stringToHsva(value, false);
        }
      } else {
        hsva = this.service.stringToHsva(value, false);
      }

      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(this.fallbackColor, false);
      }

      if (hsva) {
        this.hsva = hsva;
        this.sliderH = this.hsva.h;

        if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
          this.hsva.a = 1;
        }

        this.updateColorPicker(emit, update);
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      if (this.position === 'fixed') {
        this.setDialogPosition();
      } else if (this.cpDialogDisplay !== 'inline') {
        this.closeColorPicker();
      }
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(slider) {
      this.directiveInstance.sliderDragEnd({
        slider: slider,
        color: this.outputColor
      });
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(slider) {
      this.directiveInstance.sliderDragStart({
        slider: slider,
        color: this.outputColor
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (this.show && !this.isIE10 && this.cpDialogDisplay === 'popup' && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter(function (item) {
        return item === event.target;
      }).length === 0) {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);

          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }

          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }

        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      }
    }
  }, {
    key: "onAcceptColor",
    value: function onAcceptColor(event) {
      event.stopPropagation();

      if (this.outputColor) {
        this.directiveInstance.colorSelected(this.outputColor);
      }

      if (this.cpDialogDisplay === 'popup') {
        this.closeColorPicker();
      }
    }
  }, {
    key: "onCancelColor",
    value: function onCancelColor(event) {
      this.hsva = null;
      event.stopPropagation();
      this.directiveInstance.colorCanceled();
      this.setColorFromString(this.initialColor, true);

      if (this.cpDialogDisplay === 'popup') {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }

        this.directiveInstance.colorChanged(this.initialColor, true);
        this.closeColorPicker();
      }
    }
  }, {
    key: "onFormatToggle",
    value: function onFormatToggle(change) {
      var availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
      var nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
      this.format = this.dialogInputFields[nextFormat];
    }
  }, {
    key: "onColorChange",
    value: function onColorChange(value) {
      this.hsva.s = value.s / value.rgX;
      this.hsva.v = value.v / value.rgY;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'lightness',
        value: this.hsva.v,
        color: this.outputColor
      });
      this.directiveInstance.sliderChanged({
        slider: 'saturation',
        value: this.hsva.s,
        color: this.outputColor
      });
    }
  }, {
    key: "onHueChange",
    value: function onHueChange(value) {
      this.hsva.h = value.v / value.rgX;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'hue',
        value: this.hsva.h,
        color: this.outputColor
      });
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(value) {
      this.hsva.v = value.v / value.rgX;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'value',
        value: this.hsva.v,
        color: this.outputColor
      });
    }
  }, {
    key: "onAlphaChange",
    value: function onAlphaChange(value) {
      this.hsva.a = value.v / value.rgX;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'alpha',
        value: this.hsva.a,
        color: this.outputColor
      });
    }
  }, {
    key: "onHexInput",
    value: function onHexInput(value) {
      if (value === null) {
        this.updateColorPicker();
      } else {
        if (value && value[0] !== '#') {
          value = '#' + value;
        }

        var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;

        if (this.cpAlphaChannel === 'always') {
          validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
        }

        var valid = validHex.test(value);

        if (valid) {
          if (value.length < 5) {
            value = '#' + value.substring(1).split('').map(function (c) {
              return c + c;
            }).join('');
          }

          if (this.cpAlphaChannel === 'forced') {
            value += Math.round(this.hsva.a * 255).toString(16);
          }

          this.setColorFromString(value, true, false);
        }

        this.directiveInstance.inputChanged({
          input: 'hex',
          valid: valid,
          value: value,
          color: this.outputColor
        });
      }
    }
  }, {
    key: "onRedInput",
    value: function onRedInput(value) {
      var rgba = this.service.hsvaToRgba(this.hsva);
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        rgba.r = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'red',
        valid: valid,
        value: rgba.r,
        color: this.outputColor
      });
    }
  }, {
    key: "onBlueInput",
    value: function onBlueInput(value) {
      var rgba = this.service.hsvaToRgba(this.hsva);
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        rgba.b = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'blue',
        valid: valid,
        value: rgba.b,
        color: this.outputColor
      });
    }
  }, {
    key: "onGreenInput",
    value: function onGreenInput(value) {
      var rgba = this.service.hsvaToRgba(this.hsva);
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        rgba.g = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'green',
        valid: valid,
        value: rgba.g,
        color: this.outputColor
      });
    }
  }, {
    key: "onHueInput",
    value: function onHueInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.hsva.h = value.v / value.rg;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'hue',
        valid: valid,
        value: this.hsva.h,
        color: this.outputColor
      });
    }
  }, {
    key: "onValueInput",
    value: function onValueInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.hsva.v = value.v / value.rg;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'value',
        valid: valid,
        value: this.hsva.v,
        color: this.outputColor
      });
    }
  }, {
    key: "onAlphaInput",
    value: function onAlphaInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.hsva.a = value.v / value.rg;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'alpha',
        valid: valid,
        value: this.hsva.a,
        color: this.outputColor
      });
    }
  }, {
    key: "onLightnessInput",
    value: function onLightnessInput(value) {
      var hsla = this.service.hsva2hsla(this.hsva);
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        hsla.l = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'lightness',
        valid: valid,
        value: hsla.l,
        color: this.outputColor
      });
    }
  }, {
    key: "onSaturationInput",
    value: function onSaturationInput(value) {
      var hsla = this.service.hsva2hsla(this.hsva);
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        hsla.s = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }

      this.directiveInstance.inputChanged({
        input: 'saturation',
        valid: valid,
        value: hsla.s,
        color: this.outputColor
      });
    }
  }, {
    key: "onCyanInput",
    value: function onCyanInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.cmyk.c = value.v;
        this.updateColorPicker(false, true, true);
      }

      this.directiveInstance.inputChanged({
        input: 'cyan',
        valid: true,
        value: this.cmyk.c,
        color: this.outputColor
      });
    }
  }, {
    key: "onMagentaInput",
    value: function onMagentaInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.cmyk.m = value.v;
        this.updateColorPicker(false, true, true);
      }

      this.directiveInstance.inputChanged({
        input: 'magenta',
        valid: true,
        value: this.cmyk.m,
        color: this.outputColor
      });
    }
  }, {
    key: "onYellowInput",
    value: function onYellowInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.cmyk.y = value.v;
        this.updateColorPicker(false, true, true);
      }

      this.directiveInstance.inputChanged({
        input: 'yellow',
        valid: true,
        value: this.cmyk.y,
        color: this.outputColor
      });
    }
  }, {
    key: "onBlackInput",
    value: function onBlackInput(value) {
      var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

      if (valid) {
        this.cmyk.k = value.v;
        this.updateColorPicker(false, true, true);
      }

      this.directiveInstance.inputChanged({
        input: 'black',
        valid: true,
        value: this.cmyk.k,
        color: this.outputColor
      });
    }
  }, {
    key: "onAddPresetColor",
    value: function onAddPresetColor(event, value) {
      event.stopPropagation();

      if (!this.cpPresetColors.filter(function (color) {
        return color === value;
      }).length) {
        this.cpPresetColors = this.cpPresetColors.concat(value);
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
      }
    }
  }, {
    key: "onRemovePresetColor",
    value: function onRemovePresetColor(event, value) {
      event.stopPropagation();
      this.cpPresetColors = this.cpPresetColors.filter(function (color) {
        return color !== value;
      });
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    } // Private helper functions for the color picker dialog status

  }, {
    key: "openColorPicker",
    value: function openColorPicker() {
      var _this3 = this;

      if (!this.show) {
        this.show = true;
        this.hidden = true;
        setTimeout(function () {
          _this3.hidden = false;

          _this3.setDialogPosition();

          _this3.cdRef.detectChanges();
        }, 0);
        this.directiveInstance.stateChanged(true);

        if (!this.isIE10) {
          document.addEventListener('mousedown', this.listenerMouseDown);
          document.addEventListener('touchstart', this.listenerMouseDown);
        }

        window.addEventListener('resize', this.listenerResize);
      }
    }
  }, {
    key: "closeColorPicker",
    value: function closeColorPicker() {
      if (this.show) {
        this.show = false;
        this.directiveInstance.stateChanged(false);

        if (!this.isIE10) {
          document.removeEventListener('mousedown', this.listenerMouseDown);
          document.removeEventListener('touchstart', this.listenerMouseDown);
        }

        window.removeEventListener('resize', this.listenerResize);

        if (!this.cdRef['destroyed']) {
          this.cdRef.detectChanges();
        }
      }
    }
  }, {
    key: "updateColorPicker",
    value: function updateColorPicker() {
      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var cmykInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.sliderDimMax) {
        if (this.cpColorMode === 2) {
          this.hsva.s = 0;
        }

        var hue, hsla, rgba;
        var lastOutput = this.outputColor;
        hsla = this.service.hsva2hsla(this.hsva);

        if (!this.cpCmykEnabled) {
          rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
        } else {
          if (!cmykInput) {
            rgba = this.service.hsvaToRgba(this.hsva);
            this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
          } else {
            rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
            this.hsva = this.service.rgbaToHsva(rgba);
          }

          rgba = this.service.denormalizeRGBA(rgba);
          this.sliderH = this.hsva.h;
        }

        hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));

        if (update) {
          this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
          this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);

          if (this.cpCmykEnabled) {
            this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
          }

          var allowHex8 = this.cpAlphaChannel === 'always';
          this.hexText = this.service.rgbaToHex(rgba, allowHex8);
          this.hexAlpha = this.rgbaText.a;
        }

        if (this.cpOutputFormat === 'auto') {
          if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
            if (this.hsva.a < 1) {
              this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
            }
          }
        }

        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
        this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
        this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
        this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);

        if (this.format !== ColorFormats.CMYK) {
          this.cmykColor = '';
        } else {
          if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' || this.cpAlphaChannel === 'forced') {
            var alpha = Math.round(this.cmyk.a * 100) / 100;
            this.cmykColor = "cmyka(".concat(this.cmyk.c, ",").concat(this.cmyk.m, ",").concat(this.cmyk.y, ",").concat(this.cmyk.k, ",").concat(alpha, ")");
          } else {
            this.cmykColor = "cmyk(".concat(this.cmyk.c, ",").concat(this.cmyk.m, ",").concat(this.cmyk.y, ",").concat(this.cmyk.k, ")");
          }
        }

        this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);

        if (emit && lastOutput !== this.outputColor) {
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }

          this.directiveInstance.colorChanged(this.outputColor);
        }
      }
    } // Private helper functions for the color picker dialog positioning

  }, {
    key: "setDialogPosition",
    value: function setDialogPosition() {
      if (this.cpDialogDisplay === 'inline') {
        this.position = 'relative';
      } else {
        var position = 'static',
            transform = '',
            style;
        var parentNode = null,
            transformNode = null;
        var node = this.directiveElementRef.nativeElement.parentNode;
        var dialogHeight = this.dialogElement.nativeElement.offsetHeight;

        while (node !== null && node.tagName !== 'HTML') {
          style = window.getComputedStyle(node);
          position = style.getPropertyValue('position');
          transform = style.getPropertyValue('transform');

          if (position !== 'static' && parentNode === null) {
            parentNode = node;
          }

          if (transform && transform !== 'none' && transformNode === null) {
            transformNode = node;
          }

          if (position === 'fixed') {
            parentNode = transformNode;
            break;
          }

          node = node.parentNode;
        }

        var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== 'fixed');

        if (this.useRootViewContainer || position === 'fixed' && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
          this.top = boxDirective.top;
          this.left = boxDirective.left;
        } else {
          if (parentNode === null) {
            parentNode = node;
          }

          var boxParent = this.createDialogBox(parentNode, position !== 'fixed');
          this.top = boxDirective.top - boxParent.top;
          this.left = boxDirective.left - boxParent.left;
        }

        if (position === 'fixed') {
          this.position = 'fixed';
        }

        var usePosition = this.cpPosition;

        if (this.cpPosition === 'auto') {
          var dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
          var triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
          usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
        }

        if (usePosition === 'top') {
          this.arrowTop = dialogHeight - 1;
          this.top -= dialogHeight + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        } else if (usePosition === 'bottom') {
          this.top += boxDirective.height + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        } else if (usePosition === 'top-left' || usePosition === 'left-top') {
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
        } else if (usePosition === 'top-right' || usePosition === 'right-top') {
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
        } else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left -= this.cpWidth + this.dialogArrowSize - 2;
        } else {
          // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left += boxDirective.width + this.dialogArrowSize - 2;
        }

        this.cpUsePosition = usePosition;
      }
    } // Private helper functions for the color picker dialog positioning and opening

  }, {
    key: "isDescendant",
    value: function isDescendant(parent, child) {
      var node = child.parentNode;

      while (node !== null) {
        if (node === parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }
  }, {
    key: "createDialogBox",
    value: function createDialogBox(element, offset) {
      return {
        top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
        left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }
  }]);

  return ColorPickerComponent;
}();

ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
  return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ColorPickerService));
};

ColorPickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ColorPickerComponent,
  selectors: [["color-picker"]],
  viewQuery: function ColorPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.hueSlider = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.alphaSlider = _t.first);
    }
  },
  hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
        return ctx.handleEsc($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
        return ctx.handleEnter($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    }
  },
  decls: 28,
  vars: 47,
  consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]],
  template: function ColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ColorPickerComponent_div_2_Template, 1, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ColorPickerComponent_button_8_Template, 2, 5, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ColorPickerComponent_div_10_Template, 1, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_11_listener($event) {
        return ctx.onHueChange($event);
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_11_listener() {
        return ctx.onDragStart("hue");
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_11_listener() {
        return ctx.onDragEnd("hue");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_14_listener($event) {
        return ctx.onValueChange($event);
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_14_listener() {
        return ctx.onDragStart("value");
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_14_listener() {
        return ctx.onDragEnd("value");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_17_listener($event) {
        return ctx.onAlphaChange($event);
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_17_listener() {
        return ctx.onDragStart("alpha");
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_17_listener() {
        return ctx.onDragEnd("alpha");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ColorPickerComponent_div_20_Template, 17, 12, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ColorPickerComponent_div_21_Template, 14, 10, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ColorPickerComponent_div_23_Template, 8, 7, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ColorPickerComponent_div_24_Template, 9, 3, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ColorPickerComponent_div_25_Template, 3, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ColorPickerComponent_div_26_Template, 6, 3, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ColorPickerComponent_div_27_Template, 3, 2, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cpDialogDisplay == "popup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.selectedColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cpAddColorButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cpAlphaChannel === "disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rgX", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rgX", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rgX", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, SliderDirective, TextDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"],
  encapsulation: 2
});

ColorPickerComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
  }, {
    type: ColorPickerService
  }];
};

ColorPickerComponent.propDecorators = {
  dialogElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['dialogPopup', {
      static: true
    }]
  }],
  hueSlider: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['hueSlider', {
      static: true
    }]
  }],
  alphaSlider: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['alphaSlider', {
      static: true
    }]
  }],
  handleEsc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['document:keyup.esc', ['$event']]
  }],
  handleEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['document:keyup.enter', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorPickerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'color-picker',
      template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\xA01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\" class=\"{{cpPresetColorsClass}}\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: ColorPickerService
    }];
  }, {
    handleEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:keyup.esc', ['$event']]
    }],
    handleEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:keyup.enter', ['$event']]
    }],
    dialogElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['dialogPopup', {
        static: true
      }]
    }],
    hueSlider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['hueSlider', {
        static: true
      }]
    }],
    alphaSlider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['alphaSlider', {
        static: true
      }]
    }]
  });
})();

var ColorPickerDirective = /*#__PURE__*/function () {
  function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ColorPickerDirective);

    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
    this.dialogCreated = false;
    this.ignoreChanges = false;
    this.viewAttachedToAppRef = false;
    this.cpWidth = '230px';
    this.cpHeight = 'auto';
    this.cpToggle = false;
    this.cpDisabled = false;
    this.cpIgnoredElements = [];
    this.cpFallbackColor = '';
    this.cpColorMode = 'color';
    this.cpCmykEnabled = false;
    this.cpOutputFormat = 'auto';
    this.cpAlphaChannel = 'enabled';
    this.cpDisableInput = false;
    this.cpDialogDisplay = 'popup';
    this.cpSaveClickOutside = true;
    this.cpCloseClickOutside = true;
    this.cpUseRootViewContainer = false;
    this.cpPosition = 'auto';
    this.cpPositionOffset = '0%';
    this.cpPositionRelativeToArrow = false;
    this.cpOKButton = false;
    this.cpOKButtonText = 'OK';
    this.cpOKButtonClass = 'cp-ok-button-class';
    this.cpCancelButton = false;
    this.cpCancelButtonText = 'Cancel';
    this.cpCancelButtonClass = 'cp-cancel-button-class';
    this.cpPresetLabel = 'Preset colors';
    this.cpPresetColorsClass = 'cp-preset-colors-class';
    this.cpMaxPresetColorsLength = 6;
    this.cpPresetEmptyMessage = 'No colors added';
    this.cpPresetEmptyMessageClass = 'preset-empty-message';
    this.cpAddColorButton = false;
    this.cpAddColorButtonText = 'Add color';
    this.cpAddColorButtonClass = 'cp-add-color-button-class';
    this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
    this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
    this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
    this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(ColorPickerDirective, [{
    key: "handleClick",
    value: function handleClick() {
      this.inputFocus();
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.inputFocus();
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      this.inputChange(event);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.cmpRef != null) {
        if (this.viewAttachedToAppRef) {
          this.appRef.detachView(this.cmpRef.hostView);
        }

        this.cmpRef.destroy();
        this.cmpRef = null;
        this.dialog = null;
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.cpToggle && !this.cpDisabled) {
        if (changes.cpToggle.currentValue) {
          this.openDialog();
        } else if (!changes.cpToggle.currentValue) {
          this.closeDialog();
        }
      }

      if (changes.colorPicker) {
        if (this.dialog && !this.ignoreChanges) {
          if (this.cpDialogDisplay === 'inline') {
            this.dialog.setInitialColor(changes.colorPicker.currentValue);
          }

          this.dialog.setColorFromString(changes.colorPicker.currentValue, false);

          if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
            this.cmpRef.changeDetectorRef.detectChanges();
          }
        }

        this.ignoreChanges = false;
      }

      if (changes.cpPresetLabel || changes.cpPresetColors) {
        if (this.dialog) {
          this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
        }
      }
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      if (!this.dialogCreated) {
        var vcRef = this.vcRef;
        this.dialogCreated = true;
        this.viewAttachedToAppRef = false;

        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
          var classOfRootComponent = this.appRef.componentTypes[0];
          var appInstance = this.injector.get(classOfRootComponent, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.NULL);

          if (appInstance !== _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.NULL) {
            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;

            if (vcRef === this.vcRef) {
              console.warn('You are using cpUseRootViewContainer, ' + 'but the root component is not exposing viewContainerRef!' + 'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
            }
          } else {
            this.viewAttachedToAppRef = true;
          }
        }

        var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);

        if (this.viewAttachedToAppRef) {
          this.cmpRef = compFactory.create(this.injector);
          this.appRef.attachView(this.cmpRef.hostView);
          document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
        } else {
          var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__.ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
          this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
        }

        this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.elRef);
        this.dialog = this.cmpRef.instance;

        if (this.vcRef !== vcRef) {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      } else if (this.dialog) {
        this.dialog.openDialog(this.colorPicker);
      }
    }
  }, {
    key: "closeDialog",
    value: function closeDialog() {
      if (this.dialog && this.cpDialogDisplay === 'popup') {
        this.dialog.closeDialog();
      }
    }
  }, {
    key: "cmykChanged",
    value: function cmykChanged(value) {
      this.cpCmykColorChange.emit(value);
    }
  }, {
    key: "stateChanged",
    value: function stateChanged(state) {
      this.cpToggleChange.emit(state);

      if (state) {
        this.colorPickerOpen.emit(this.colorPicker);
      } else {
        this.colorPickerClose.emit(this.colorPicker);
      }
    }
  }, {
    key: "colorChanged",
    value: function colorChanged(value) {
      var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.ignoreChanges = ignore;
      this.colorPickerChange.emit(value);
    }
  }, {
    key: "colorSelected",
    value: function colorSelected(value) {
      this.colorPickerSelect.emit(value);
    }
  }, {
    key: "colorCanceled",
    value: function colorCanceled() {
      this.colorPickerCancel.emit();
    }
  }, {
    key: "inputFocus",
    value: function inputFocus() {
      var element = this.elRef.nativeElement;
      var ignored = this.cpIgnoredElements.filter(function (item) {
        return item === element;
      });

      if (!this.cpDisabled && !ignored.length) {
        if (typeof document !== 'undefined' && element === document.activeElement) {
          this.openDialog();
        } else if (!this.dialog || !this.dialog.show) {
          this.openDialog();
        } else {
          this.closeDialog();
        }
      }
    }
  }, {
    key: "inputChange",
    value: function inputChange(event) {
      if (this.dialog) {
        this.dialog.setColorFromString(event.target.value, true);
      } else {
        this.colorPicker = event.target.value;
        this.colorPickerChange.emit(this.colorPicker);
      }
    }
  }, {
    key: "inputChanged",
    value: function inputChanged(event) {
      this.cpInputChange.emit(event);
    }
  }, {
    key: "sliderChanged",
    value: function sliderChanged(event) {
      this.cpSliderChange.emit(event);
    }
  }, {
    key: "sliderDragEnd",
    value: function sliderDragEnd(event) {
      this.cpSliderDragEnd.emit(event);
    }
  }, {
    key: "sliderDragStart",
    value: function sliderDragStart(event) {
      this.cpSliderDragStart.emit(event);
    }
  }, {
    key: "presetColorsChanged",
    value: function presetColorsChanged(value) {
      this.cpPresetColorsChange.emit(value);
    }
  }]);

  return ColorPickerDirective;
}();

ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) {
  return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ColorPickerService));
};

ColorPickerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ColorPickerDirective,
  selectors: [["", "colorPicker", ""]],
  hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ColorPickerDirective_click_HostBindingHandler() {
        return ctx.handleClick();
      })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
        return ctx.handleFocus();
      })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
        return ctx.handleInput($event);
      });
    }
  },
  inputs: {
    cpWidth: "cpWidth",
    cpHeight: "cpHeight",
    cpToggle: "cpToggle",
    cpDisabled: "cpDisabled",
    cpIgnoredElements: "cpIgnoredElements",
    cpFallbackColor: "cpFallbackColor",
    cpColorMode: "cpColorMode",
    cpCmykEnabled: "cpCmykEnabled",
    cpOutputFormat: "cpOutputFormat",
    cpAlphaChannel: "cpAlphaChannel",
    cpDisableInput: "cpDisableInput",
    cpDialogDisplay: "cpDialogDisplay",
    cpSaveClickOutside: "cpSaveClickOutside",
    cpCloseClickOutside: "cpCloseClickOutside",
    cpUseRootViewContainer: "cpUseRootViewContainer",
    cpPosition: "cpPosition",
    cpPositionOffset: "cpPositionOffset",
    cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
    cpOKButton: "cpOKButton",
    cpOKButtonText: "cpOKButtonText",
    cpOKButtonClass: "cpOKButtonClass",
    cpCancelButton: "cpCancelButton",
    cpCancelButtonText: "cpCancelButtonText",
    cpCancelButtonClass: "cpCancelButtonClass",
    cpPresetLabel: "cpPresetLabel",
    cpPresetColorsClass: "cpPresetColorsClass",
    cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
    cpPresetEmptyMessage: "cpPresetEmptyMessage",
    cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
    cpAddColorButton: "cpAddColorButton",
    cpAddColorButtonText: "cpAddColorButtonText",
    cpAddColorButtonClass: "cpAddColorButtonClass",
    cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
    colorPicker: "colorPicker",
    cpPresetColors: "cpPresetColors"
  },
  outputs: {
    cpInputChange: "cpInputChange",
    cpToggleChange: "cpToggleChange",
    cpSliderChange: "cpSliderChange",
    cpSliderDragEnd: "cpSliderDragEnd",
    cpSliderDragStart: "cpSliderDragStart",
    colorPickerOpen: "colorPickerOpen",
    colorPickerClose: "colorPickerClose",
    colorPickerCancel: "colorPickerCancel",
    colorPickerSelect: "colorPickerSelect",
    colorPickerChange: "colorPickerChange",
    cpCmykColorChange: "cpCmykColorChange",
    cpPresetColorsChange: "cpPresetColorsChange"
  },
  exportAs: ["ngxColorPicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

ColorPickerDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: ColorPickerService
  }];
};

ColorPickerDirective.propDecorators = {
  colorPicker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpToggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpIgnoredElements: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpFallbackColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpColorMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpCmykEnabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpOutputFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpAlphaChannel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpDisableInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpDialogDisplay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpSaveClickOutside: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpCloseClickOutside: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpUseRootViewContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPositionOffset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPositionRelativeToArrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpOKButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpOKButtonText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpOKButtonClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpCancelButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpCancelButtonText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpCancelButtonClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPresetLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPresetColors: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPresetColorsClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpMaxPresetColorsLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPresetEmptyMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpPresetEmptyMessageClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpAddColorButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpAddColorButtonText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpAddColorButtonClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpRemoveColorButtonClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cpInputChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cpToggleChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cpSliderChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cpSliderDragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cpSliderDragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  colorPickerOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  colorPickerClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  colorPickerCancel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  colorPickerSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  colorPickerChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cpCmykColorChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cpPresetColorsChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  handleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['click']
  }],
  handleFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['focus']
  }],
  handleInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['input', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorPickerDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[colorPicker]',
      exportAs: 'ngxColorPicker'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: ColorPickerService
    }];
  }, {
    cpWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpIgnoredElements: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpFallbackColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpColorMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpCmykEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpOutputFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpAlphaChannel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpDisableInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpDialogDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpSaveClickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpCloseClickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpUseRootViewContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPositionOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPositionRelativeToArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpOKButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpOKButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpOKButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpCancelButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpCancelButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpCancelButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPresetLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPresetColorsClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpMaxPresetColorsLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPresetEmptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPresetEmptyMessageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpAddColorButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpAddColorButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpAddColorButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpRemoveColorButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cpToggleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cpSliderChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cpSliderDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cpSliderDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    colorPickerOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    colorPickerClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    colorPickerCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    colorPickerSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    colorPickerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cpCmykColorChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cpPresetColorsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    handleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['click']
    }],
    handleFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['focus']
    }],
    handleInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['input', ['$event']]
    }],
    colorPicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cpPresetColors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

var ColorPickerModule = function ColorPickerModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ColorPickerModule);
};

ColorPickerModule.ɵfac = function ColorPickerModule_Factory(t) {
  return new (t || ColorPickerModule)();
};

ColorPickerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ColorPickerModule
});
ColorPickerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [ColorPickerService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorPickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [ColorPickerDirective],
      providers: [ColorPickerService],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
      entryComponents: [ColorPickerComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ColorPickerModule, {
    declarations: function declarations() {
      return [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
    },
    exports: function exports() {
      return [ColorPickerDirective];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-color-picker.js.map

/***/ }),

/***/ 71867:
/*!************************************************!*\
  !*** ./node_modules/positioning/dist/entry.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionElements": function() { return /* reexport safe */ _positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements; }
/* harmony export */ });
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ 14401);
 //# sourceMappingURL=entry.js.map

/***/ }),

/***/ 14401:
/*!******************************************************!*\
  !*** ./node_modules/positioning/dist/positioning.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Positioning": function() { return /* binding */ Positioning; },
/* harmony export */   "positionElements": function() { return /* binding */ positionElements; }
/* harmony export */ });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = function () {
  function Positioning() {}

  Positioning.prototype.getAllStyles = function (element) {
    return window.getComputedStyle(element);
  };

  Positioning.prototype.getStyle = function (element, prop) {
    return this.getAllStyles(element)[prop];
  };

  Positioning.prototype.isStaticPositioned = function (element) {
    return (this.getStyle(element, 'position') || 'static') === 'static';
  };

  Positioning.prototype.offsetParent = function (element) {
    var offsetParentEl = element.offsetParent || document.documentElement;

    while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
      offsetParentEl = offsetParentEl.offsetParent;
    }

    return offsetParentEl || document.documentElement;
  };

  Positioning.prototype.position = function (element, round) {
    if (round === void 0) {
      round = true;
    }

    var elPosition;
    var parentOffset = {
      width: 0,
      height: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    if (this.getStyle(element, 'position') === 'fixed') {
      elPosition = element.getBoundingClientRect();
      elPosition = {
        top: elPosition.top,
        bottom: elPosition.bottom,
        left: elPosition.left,
        right: elPosition.right,
        height: elPosition.height,
        width: elPosition.width
      };
    } else {
      var offsetParentEl = this.offsetParent(element);
      elPosition = this.offset(element, false);

      if (offsetParentEl !== document.documentElement) {
        parentOffset = this.offset(offsetParentEl, false);
      }

      parentOffset.top += offsetParentEl.clientTop;
      parentOffset.left += offsetParentEl.clientLeft;
    }

    elPosition.top -= parentOffset.top;
    elPosition.bottom -= parentOffset.top;
    elPosition.left -= parentOffset.left;
    elPosition.right -= parentOffset.left;

    if (round) {
      elPosition.top = Math.round(elPosition.top);
      elPosition.bottom = Math.round(elPosition.bottom);
      elPosition.left = Math.round(elPosition.left);
      elPosition.right = Math.round(elPosition.right);
    }

    return elPosition;
  };

  Positioning.prototype.offset = function (element, round) {
    if (round === void 0) {
      round = true;
    }

    var elBcr = element.getBoundingClientRect();
    var viewportOffset = {
      top: window.pageYOffset - document.documentElement.clientTop,
      left: window.pageXOffset - document.documentElement.clientLeft
    };
    var elOffset = {
      height: elBcr.height || element.offsetHeight,
      width: elBcr.width || element.offsetWidth,
      top: elBcr.top + viewportOffset.top,
      bottom: elBcr.bottom + viewportOffset.top,
      left: elBcr.left + viewportOffset.left,
      right: elBcr.right + viewportOffset.left
    };

    if (round) {
      elOffset.height = Math.round(elOffset.height);
      elOffset.width = Math.round(elOffset.width);
      elOffset.top = Math.round(elOffset.top);
      elOffset.bottom = Math.round(elOffset.bottom);
      elOffset.left = Math.round(elOffset.left);
      elOffset.right = Math.round(elOffset.right);
    }

    return elOffset;
  };
  /*
    Return false if the element to position is outside the viewport
  */


  Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
    var _a = placement.split('-'),
        _b = _a[0],
        placementPrimary = _b === void 0 ? 'top' : _b,
        _c = _a[1],
        placementSecondary = _c === void 0 ? 'center' : _c;

    var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
    var targetElStyles = this.getAllStyles(targetElement);
    var marginTop = parseFloat(targetElStyles.marginTop);
    var marginBottom = parseFloat(targetElStyles.marginBottom);
    var marginLeft = parseFloat(targetElStyles.marginLeft);
    var marginRight = parseFloat(targetElStyles.marginRight);
    var topPosition = 0;
    var leftPosition = 0;

    switch (placementPrimary) {
      case 'top':
        topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
        break;

      case 'bottom':
        topPosition = hostElPosition.top + hostElPosition.height;
        break;

      case 'left':
        leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
        break;

      case 'right':
        leftPosition = hostElPosition.left + hostElPosition.width;
        break;
    }

    switch (placementSecondary) {
      case 'top':
        topPosition = hostElPosition.top;
        break;

      case 'bottom':
        topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
        break;

      case 'left':
        leftPosition = hostElPosition.left;
        break;

      case 'right':
        leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
        break;

      case 'center':
        if (placementPrimary === 'top' || placementPrimary === 'bottom') {
          leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
        } else {
          topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
        }

        break;
    } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
    // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


    targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

    var targetElBCR = targetElement.getBoundingClientRect();
    var html = document.documentElement;
    var windowHeight = window.innerHeight || html.clientHeight;
    var windowWidth = window.innerWidth || html.clientWidth;
    return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
  };

  return Positioning;
}();


var placementSeparator = /\s+/;
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */

function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
  var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
  var classList = targetElement.classList;

  var addClassesToTarget = function addClassesToTarget(targetPlacement) {
    var _a = targetPlacement.split('-'),
        primary = _a[0],
        secondary = _a[1];

    var classes = [];

    if (baseClass) {
      classes.push(baseClass + "-" + primary);

      if (secondary) {
        classes.push(baseClass + "-" + primary + "-" + secondary);
      }

      classes.forEach(function (classname) {
        classList.add(classname);
      });
    }

    return classes;
  }; // Remove old placement classes to avoid issues


  if (baseClass) {
    allowedPlacements.forEach(function (placementToRemove) {
      classList.remove(baseClass + "-" + placementToRemove);
    });
  } // replace auto placement with other placements


  var hasAuto = placementVals.findIndex(function (val) {
    return val === 'auto';
  });

  if (hasAuto >= 0) {
    allowedPlacements.forEach(function (obj) {
      if (placementVals.find(function (val) {
        return val.search('^' + obj) !== -1;
      }) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  } // coordinates where to position
  // Required for transform:


  var style = targetElement.style;
  style.position = 'absolute';
  style.top = '0';
  style.left = '0';
  style['will-change'] = 'transform';
  var testPlacement;
  var isInViewport = false;

  for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
    testPlacement = placementVals_1[_i];
    var addedClasses = addClassesToTarget(testPlacement);

    if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
      isInViewport = true;
      break;
    } // Remove the baseClasses for further calculation


    if (baseClass) {
      addedClasses.forEach(function (classname) {
        classList.remove(classname);
      });
    }
  }

  if (!isInViewport) {
    // If nothing match, the first placement is the default one
    testPlacement = placementVals[0];
    addClassesToTarget(testPlacement);
    positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
  }

  return testPlacement;
} //# sourceMappingURL=positioning.js.map

/***/ }),

/***/ 88229:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaySubject": function() { return /* binding */ ReplaySubject; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Subject */ 79765);
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scheduler/queue */ 29661);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Subscription */ 10826);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operators/observeOn */ 59746);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 77971);
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubjectSubscription */ 78858);












var ReplaySubject = /*#__PURE__*/function (_Subject) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(ReplaySubject, _Subject);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(ReplaySubject);

  function ReplaySubject() {
    var _this;

    var bufferSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
    var windowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var scheduler = arguments.length > 2 ? arguments[2] : undefined;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ReplaySubject);

    _this = _super.call(this);
    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }

    return _this;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ReplaySubject, [{
    key: "nextInfiniteTimeWindow",
    value: function nextInfiniteTimeWindow(value) {
      var _events = this._events;

      _events.push(value);

      if (_events.length > this._bufferSize) {
        _events.shift();
      }

      (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(ReplaySubject.prototype), "next", this).call(this, value);
    }
  }, {
    key: "nextTimeWindow",
    value: function nextTimeWindow(value) {
      this._events.push(new ReplayEvent(this._getNow(), value));

      this._trimBufferThenGetEvents();

      (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(ReplaySubject.prototype), "next", this).call(this, value);
    }
  }, {
    key: "_subscribe",
    value: function _subscribe(subscriber) {
      var _infiniteTimeWindow = this._infiniteTimeWindow;

      var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

      var scheduler = this.scheduler;
      var len = _events.length;
      var subscription;

      if (this.closed) {
        throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_6__.ObjectUnsubscribedError();
      } else if (this.isStopped || this.hasError) {
        subscription = _Subscription__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
      } else {
        this.observers.push(subscriber);
        subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_8__.SubjectSubscription(this, subscriber);
      }

      if (scheduler) {
        subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_9__.ObserveOnSubscriber(subscriber, scheduler));
      }

      if (_infiniteTimeWindow) {
        for (var i = 0; i < len && !subscriber.closed; i++) {
          subscriber.next(_events[i]);
        }
      } else {
        for (var _i = 0; _i < len && !subscriber.closed; _i++) {
          subscriber.next(_events[_i].value);
        }
      }

      if (this.hasError) {
        subscriber.error(this.thrownError);
      } else if (this.isStopped) {
        subscriber.complete();
      }

      return subscription;
    }
  }, {
    key: "_getNow",
    value: function _getNow() {
      return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_10__.queue).now();
    }
  }, {
    key: "_trimBufferThenGetEvents",
    value: function _trimBufferThenGetEvents() {
      var now = this._getNow();

      var _bufferSize = this._bufferSize;
      var _windowTime = this._windowTime;
      var _events = this._events;
      var eventsCount = _events.length;
      var spliceCount = 0;

      while (spliceCount < eventsCount) {
        if (now - _events[spliceCount].time < _windowTime) {
          break;
        }

        spliceCount++;
      }

      if (eventsCount > _bufferSize) {
        spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
      }

      if (spliceCount > 0) {
        _events.splice(0, spliceCount);
      }

      return _events;
    }
  }]);

  return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_11__.Subject);

var ReplayEvent = function ReplayEvent(time, value) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ReplayEvent);

  this.time = time;
  this.value = value;
}; //# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ 20945:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": function() { return /* binding */ interval; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 69165);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 33637);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 26561);



function interval() {
  var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;

  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
} //# sourceMappingURL=interval.js.map

/***/ }),

/***/ 34150:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/count.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "count": function() { return /* binding */ count; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscriber */ 77393);





function count(predicate) {
  return function (source) {
    return source.lift(new CountOperator(predicate, source));
  };
}

var CountOperator = /*#__PURE__*/function () {
  function CountOperator(predicate, source) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, CountOperator);

    this.predicate = predicate;
    this.source = source;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CountOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    }
  }]);

  return CountOperator;
}();

var CountSubscriber = /*#__PURE__*/function (_Subscriber) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(CountSubscriber, _Subscriber);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(CountSubscriber);

  function CountSubscriber(destination, predicate, source) {
    var _this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, CountSubscriber);

    _this = _super.call(this, destination);
    _this.predicate = predicate;
    _this.source = source;
    _this.count = 0;
    _this.index = 0;
    return _this;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CountSubscriber, [{
    key: "_next",
    value: function _next(value) {
      if (this.predicate) {
        this._tryPredicate(value);
      } else {
        this.count++;
      }
    }
  }, {
    key: "_tryPredicate",
    value: function _tryPredicate(value) {
      var result;

      try {
        result = this.predicate(value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }

      if (result) {
        this.count++;
      }
    }
  }, {
    key: "_complete",
    value: function _complete() {
      this.destination.next(this.count);
      this.destination.complete();
    }
  }]);

  return CountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_4__.Subscriber); //# sourceMappingURL=count.js.map

/***/ }),

/***/ 59746:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeOn": function() { return /* binding */ observeOn; },
/* harmony export */   "ObserveOnOperator": function() { return /* binding */ ObserveOnOperator; },
/* harmony export */   "ObserveOnSubscriber": function() { return /* binding */ ObserveOnSubscriber; },
/* harmony export */   "ObserveOnMessage": function() { return /* binding */ ObserveOnMessage; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Subscriber */ 77393);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Notification */ 23098);






function observeOn(scheduler) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}
var ObserveOnOperator = /*#__PURE__*/function () {
  function ObserveOnOperator(scheduler) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ObserveOnOperator);

    this.scheduler = scheduler;
    this.delay = delay;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ObserveOnOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    }
  }]);

  return ObserveOnOperator;
}();
var ObserveOnSubscriber = /*#__PURE__*/function (_Subscriber) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(ObserveOnSubscriber, _Subscriber);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(ObserveOnSubscriber);

  function ObserveOnSubscriber(destination, scheduler) {
    var _this;

    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ObserveOnSubscriber);

    _this = _super.call(this, destination);
    _this.scheduler = scheduler;
    _this.delay = delay;
    return _this;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ObserveOnSubscriber, [{
    key: "scheduleMessage",
    value: function scheduleMessage(notification) {
      var destination = this.destination;
      destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    }
  }, {
    key: "_next",
    value: function _next(value) {
      this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_4__.Notification.createNext(value));
    }
  }, {
    key: "_error",
    value: function _error(err) {
      this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_4__.Notification.createError(err));
      this.unsubscribe();
    }
  }, {
    key: "_complete",
    value: function _complete() {
      this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_4__.Notification.createComplete());
      this.unsubscribe();
    }
  }], [{
    key: "dispatch",
    value: function dispatch(arg) {
      var notification = arg.notification,
          destination = arg.destination;
      notification.observe(destination);
      this.unsubscribe();
    }
  }]);

  return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_5__.Subscriber);
var ObserveOnMessage = function ObserveOnMessage(notification, destination) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ObserveOnMessage);

  this.notification = notification;
  this.destination = destination;
}; //# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 59328:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": function() { return /* binding */ pairwise; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscriber */ 77393);





function pairwise() {
  return function (source) {
    return source.lift(new PairwiseOperator());
  };
}

var PairwiseOperator = /*#__PURE__*/function () {
  function PairwiseOperator() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, PairwiseOperator);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(PairwiseOperator, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(new PairwiseSubscriber(subscriber));
    }
  }]);

  return PairwiseOperator;
}();

var PairwiseSubscriber = /*#__PURE__*/function (_Subscriber) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(PairwiseSubscriber, _Subscriber);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(PairwiseSubscriber);

  function PairwiseSubscriber(destination) {
    var _this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, PairwiseSubscriber);

    _this = _super.call(this, destination);
    _this.hasPrev = false;
    return _this;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(PairwiseSubscriber, [{
    key: "_next",
    value: function _next(value) {
      var pair;

      if (this.hasPrev) {
        pair = [this.prev, value];
      } else {
        this.hasPrev = true;
      }

      this.prev = value;

      if (pair) {
        this.destination.next(pair);
      }
    }
  }]);

  return PairwiseSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_4__.Subscriber); //# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ 69499:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchMapTo": function() { return /* binding */ switchMapTo; }
/* harmony export */ });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ 43190);

function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(function () {
    return innerObservable;
  }, resultSelector) : (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(function () {
    return innerObservable;
  });
} //# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ 99403:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueAction": function() { return /* binding */ QueueAction; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AsyncAction */ 401);







var QueueAction = /*#__PURE__*/function (_AsyncAction) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(QueueAction, _AsyncAction);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(QueueAction);

  function QueueAction(scheduler, work) {
    var _this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, QueueAction);

    _this = _super.call(this, scheduler, work);
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(QueueAction, [{
    key: "schedule",
    value: function schedule(state) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (delay > 0) {
        return (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(QueueAction.prototype), "schedule", this).call(this, state, delay);
      }

      this.delay = delay;
      this.state = state;
      this.scheduler.flush(this);
      return this;
    }
  }, {
    key: "execute",
    value: function execute(state, delay) {
      return delay > 0 || this.closed ? (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(QueueAction.prototype), "execute", this).call(this, state, delay) : this._execute(state, delay);
    }
  }, {
    key: "requestAsyncId",
    value: function requestAsyncId(scheduler, id) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
        return (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(QueueAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
      }

      return scheduler.flush(this);
    }
  }]);

  return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_6__.AsyncAction); //# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ 40099:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueScheduler": function() { return /* binding */ QueueScheduler; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);




var QueueScheduler = /*#__PURE__*/function (_AsyncScheduler) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(QueueScheduler, _AsyncScheduler);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(QueueScheduler);

  function QueueScheduler() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, QueueScheduler);

    return _super.apply(this, arguments);
  }

  return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_3__.AsyncScheduler); //# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ 29661:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queue": function() { return /* binding */ queue; }
/* harmony export */ });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueAction */ 99403);
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueScheduler */ 40099);


var queue = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction); //# sourceMappingURL=queue.js.map

/***/ }),

/***/ 80904:
/*!*******************************************************!*\
  !*** ./src/app/shared/inmemory-db/calendar-events.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventDB": function() { return /* binding */ CalendarEventDB; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 98120);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 43257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 23501);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 51000);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 64465);

var CalendarEventDB = /** @class */ (function () {
    function CalendarEventDB() {
        this.colors = {
            red: {
                primary: '#f44336',
                secondary: '#FAE3E3'
            },
            blue: {
                primary: '#247ba0 ',
                secondary: '#D1E8FF'
            },
            yellow: {
                primary: '#ffd97d',
                secondary: '#FDF1BA'
            }
        };
        this.events = [{
                _id: '100',
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date()), 1),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(), 1),
                title: 'A 3 day event',
                color: this.colors.red
            }, {
                _id: '101',
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date()),
                title: 'An event with no end date',
                color: this.colors.yellow
            }, {
                _id: '102',
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date()), 3),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: this.colors.blue
            }, {
                _id: '103',
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: this.colors.yellow,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
    }
    return CalendarEventDB;
}());



/***/ }),

/***/ 60906:
/*!*******************************************************!*\
  !*** ./src/app/shared/models/calendar-event.model.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarAppEvent": function() { return /* binding */ CalendarAppEvent; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 43257);

var CalendarAppEvent = /** @class */ (function () {
    function CalendarAppEvent(data) {
        data = data || {};
        this.start = new Date(data.start) || (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(new Date());
        this.end = data.end ? new Date(data.end) : null;
        this._id = data._id || '';
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#247ba0',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.draggable = data.draggable || true;
        this.resizable = {
            beforeStart: data.resizable && data.resizable.beforeStart || true,
            afterEnd: data.resizable && data.resizable.afterEnd || true
        };
        this.actions = data.actions || [];
        this.allDay = data.allDay || false;
        this.cssClass = data.cssClass || '';
        this.meta = {
            location: data.meta && data.meta.location || '',
            notes: data.meta && data.meta.notes || ''
        };
    }
    return CalendarAppEvent;
}());



/***/ }),

/***/ 57579:
/*!********************************************************!*\
  !*** ./src/app/views/calendar/calendar-app.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarAppService": function() { return /* binding */ CalendarAppService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_shared_inmemory_db_calendar_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/inmemory-db/calendar-events */ 80904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58497);
// import { CalendarEventDB } from '../../shared/inmemory-db/calendarEvents';





var CalendarAppService = /** @class */ (function () {
    function CalendarAppService(http) {
        this.http = http;
    }
    CalendarAppService.prototype.getEvents = function () {
        // return this.http.get('api/calendar/events')
        // .map((events: CalendarEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        var _this = this;
        var eventDB = new src_app_shared_inmemory_db_calendar_events__WEBPACK_IMPORTED_MODULE_0__.CalendarEventDB();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(eventDB.events)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (events) {
            _this.events = events;
            return events;
        }));
    };
    CalendarAppService.prototype.addEvent = function (event) {
        // return this.http.post('api/calendar/events', event)
        // .map((events: CalendarAppEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events.push(event);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.events);
    };
    CalendarAppService.prototype.updateEvent = function (event) {
        // return this.http.put('api/calendar/events/'+event._id, event)
        // .map((events: CalendarAppEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events = this.events.map(function (e) {
            if (e._id === event._id) {
                return Object.assign(e, event);
            }
            return e;
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.events);
    };
    CalendarAppService.prototype.deleteEvent = function (eventID) {
        // return this.http.delete('api/calendar/events/'+eventID)
        // .map((events: CalendarAppEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events = this.events.filter(function (e) { return e._id !== eventID; });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.events);
    };
    CalendarAppService.ɵfac = function CalendarAppService_Factory(t) { return new (t || CalendarAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
    CalendarAppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CalendarAppService, factory: CalendarAppService.ɵfac, providedIn: 'root' });
    return CalendarAppService;
}());



/***/ }),

/***/ 28796:
/*!***************************************************************************************!*\
  !*** ./src/app/views/calendar/calendar-form-dialog/calendar-form-dialog.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarFormDialogComponent": function() { return /* binding */ CalendarFormDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var src_app_shared_models_calendar_event_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/calendar-event.model */ 60906);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ 16884);







var CalendarFormDialogComponent = /** @class */ (function () {
    function CalendarFormDialogComponent(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
    }
    CalendarFormDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.action === 'edit') {
                _this.dialogTitle = _this.event.title;
            }
            else {
                _this.dialogTitle = 'Add Event';
                _this.event = new src_app_shared_models_calendar_event_model__WEBPACK_IMPORTED_MODULE_0__.CalendarAppEvent(_this.data.event);
            }
            _this.eventForm = _this.buildEventForm(_this.event);
        }, 100);
        this.eventForm = this.buildEventForm(this.event);
    };
    CalendarFormDialogComponent.prototype.buildEventForm = function (event) {
        if (event === void 0) { event = { start: null, title: null, color: { primary: '', secondary: '' }, meta: { location: '', notes: '' } }; }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event._id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.dateToNgbDate(event.start), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.dateToNgbDate(event.end)),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event.allDay),
            color: this.formBuilder.group({
                primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event.color.primary),
                secondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event.color.secondary)
            }),
            meta: this.formBuilder.group({
                location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event.meta.location),
                notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(event.meta.notes)
            })
        });
    };
    CalendarFormDialogComponent.ɵfac = function CalendarFormDialogComponent_Factory(t) { return new (t || CalendarFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
    CalendarFormDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CalendarFormDialogComponent, selectors: [["app-calendar-form-dialog"]], decls: 33, vars: 8, consts: [["name", "eventForm", 1, "event-form", "p-3", 3, "formGroup"], [1, "row"], [1, "col-md-12", "form-group"], ["name", "title", "formControlName", "title", "placeholder", "Title*", 1, "form-control", "form-control-rounded"], ["formGroupName", "color", 1, "row"], [1, "col-md-6", "form-group"], ["name", "title", "formControlName", "primary", "placeholder", "Title", "placeholder", "Primary color", 1, "form-control", "form-control-rounded", 3, "colorPicker", "colorPickerChange"], ["name", "secondaryColor", "formControlName", "secondary", "placeholder", "Secondary color", 1, "form-control", "form-control-rounded", 3, "colorPicker", "colorPickerChange"], [1, "input-group"], ["type", "text", "ngbDatepicker", "", "placeholder", "Start Date", "name", "startDate", "formControlName", "start", 1, "form-control", "form-control-rounded"], ["startDate", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-rounded", 3, "click"], [1, "icon-regular", "i-Calendar-4"], ["type", "text", "ngbDatepicker", "", "placeholder", "End Date", "name", "endDate", "formControlName", "end", 1, "form-control", "form-control-rounded"], ["endDate", "ngbDatepicker"], ["formGroupName", "meta", 1, "row"], ["type", "text", "name", "location", "formControlName", "location", "placeholder", "Location", 1, "form-control", "form-control-rounded"], ["formControlName", "notes", "placeholder", "Notes", "max-rows", "4", 1, "form-control", "form-control-rounded"], [1, "modal-footer"], [1, "btn", "btn-primary", "btn-rounded", 3, "disabled", "click"]], template: function CalendarFormDialogComponent_Template(rf, ctx) { if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("colorPickerChange", function CalendarFormDialogComponent_Template_input_colorPickerChange_6_listener($event) { return (ctx.event == null ? null : ctx.event.color).primary = $event; })("colorPickerChange", function CalendarFormDialogComponent_Template_input_colorPickerChange_6_listener() { return ctx.eventForm.patchValue({ color: { primary: ctx.event == null ? null : ctx.event.color.primary } }); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("colorPickerChange", function CalendarFormDialogComponent_Template_input_colorPickerChange_8_listener($event) { return (ctx.event == null ? null : ctx.event.color).secondary = $event; })("colorPickerChange", function CalendarFormDialogComponent_Template_input_colorPickerChange_8_listener() { return ctx.eventForm.patchValue({ color: { secondary: ctx.event == null ? null : ctx.event.color.secondary } }); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarFormDialogComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return _r0.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarFormDialogComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20); return _r1.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "textarea", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "          ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarFormDialogComponent_Template_button_click_31_listener() { return ctx.activeModal.close({ action: "save", event: ctx.eventForm.value }); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.event == null ? null : ctx.event.color.primary);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colorPicker", ctx.event == null ? null : ctx.event.color.primary);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.event == null ? null : ctx.event.color.secondary);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colorPicker", ctx.event == null ? null : ctx.event.color.secondary);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.eventForm.invalid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__.ColorPickerDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbInputDatepicker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci1mb3JtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return CalendarFormDialogComponent;
}());



/***/ }),

/***/ 43959:
/*!***********************************************************!*\
  !*** ./src/app/views/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarRoutingModule": function() { return /* binding */ CalendarRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar/calendar.component */ 80523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);




var routes = [
    {
        path: '',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
    }
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule.ɵfac = function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); };
    CalendarRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
    CalendarRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return CalendarRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 87837:
/*!***************************************************!*\
  !*** ./src/app/views/calendar/calendar.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarAppModule": function() { return /* binding */ CalendarAppModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar */ 67325);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 83362);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color-picker */ 16884);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 43959);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar.component */ 80523);
/* harmony import */ var _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-form-dialog/calendar-form-dialog.component */ 28796);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);











var CalendarAppModule = /** @class */ (function () {
    function CalendarAppModule() {
    }
    CalendarAppModule.ɵfac = function CalendarAppModule_Factory(t) { return new (t || CalendarAppModule)(); };
    CalendarAppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CalendarAppModule });
    CalendarAppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__.ColorPickerModule,
                angular_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule.forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__.DateAdapter,
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__.adapterFactory
                }),
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule
            ]] });
    return CalendarAppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CalendarAppModule, { declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__.CalendarComponent, _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CalendarFormDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__.ColorPickerModule, angular_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule] }); })();


/***/ }),

/***/ 80523:
/*!***************************************************************!*\
  !*** ./src/app/views/calendar/calendar/calendar.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": function() { return /* binding */ CalendarComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 57888);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 12297);
/* harmony import */ var src_app_shared_models_calendar_event_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/calendar-event.model */ 60906);
/* harmony import */ var _calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-form-dialog/calendar-form-dialog.component */ 28796);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ 7433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _calendar_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calendar-app.service */ 57579);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ 67325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 12057);











var _c0 = ["eventDeleteConfirm"];
function CalendarComponent_mwl_calendar_month_view_26_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-month-view", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dayClicked", function CalendarComponent_mwl_calendar_month_view_26_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.dayClicked($event.day); })("eventClicked", function CalendarComponent_mwl_calendar_month_view_26_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.handleEvent("edit", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_month_view_26_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
} }
function CalendarComponent_mwl_calendar_week_view_27_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-week-view", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_week_view_27_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.handleEvent("edit", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_week_view_27_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
} }
function CalendarComponent_mwl_calendar_day_view_28_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-day-view", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_day_view_28_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.handleEvent("edit", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_day_view_28_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
} }
function CalendarComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delete Event?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_ng_template_29_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); var modal_r15 = restoredCtx.$implicit; return modal_r15.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_ng_template_29_Template_button_click_7_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); var modal_r15 = restoredCtx.$implicit; return modal_r15.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_ng_template_29_Template_button_click_9_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); var modal_r15 = restoredCtx.$implicit; return modal_r15.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(modalService, calendarService) {
        var _this = this;
        this.modalService = modalService;
        this.calendarService = calendarService;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.actions = [{
                label: '<i class="i-Edit m-1 text-secondary"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('edit', event);
                }
            }, {
                label: '<i class="i-Close m-1 text-danger"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.removeEvent(event);
                }
            }];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    CalendarComponent.prototype.initEvents = function (events) {
        var _this = this;
        return events.map(function (event) {
            event.actions = _this.actions;
            return new src_app_shared_models_calendar_event_model__WEBPACK_IMPORTED_MODULE_0__.CalendarAppEvent(event);
        });
    };
    CalendarComponent.prototype.loadEvents = function () {
        var _this = this;
        this.calendarService
            .getEvents()
            .subscribe(function (events) {
            _this.events = _this.initEvents(events);
        });
    };
    CalendarComponent.prototype.removeEvent = function (event) {
        var _this = this;
        this.modalService.open(this.eventDeleteConfirm, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.calendarService
                .deleteEvent(event._id)
                .subscribe(function (events) {
                _this.events = _this.initEvents(events);
                _this.refresh.next();
            });
        }, function (reason) {
        });
    };
    CalendarComponent.prototype.addEvent = function () {
        var _this = this;
        var dialogRef = this.modalService.open(_calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CalendarFormDialogComponent, { centered: true });
        dialogRef.componentInstance.data = {
            action: 'add',
            date: new Date()
        };
        dialogRef.result
            .then(function (res) {
            if (!res) {
                return;
            }
            var dialogAction = res.action;
            var responseEvent = res.event;
            responseEvent.start = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.ngbDateToDate(responseEvent.start);
            responseEvent.end = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.ngbDateToDate(responseEvent.end);
            _this.calendarService
                .addEvent(responseEvent)
                .subscribe(function (events) {
                _this.events = _this.initEvents(events);
                _this.refresh.next(true);
                console.log(_this.events);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        var _this = this;
        var dialogRef = this.modalService.open(_calendar_form_dialog_calendar_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CalendarFormDialogComponent, { centered: true });
        dialogRef.componentInstance.data = { event: event, action: action };
        dialogRef
            .result
            .then(function (res) {
            if (!res) {
                return;
            }
            var dialogAction = res.action;
            var responseEvent = res.event;
            responseEvent.start = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.ngbDateToDate(responseEvent.start);
            responseEvent.end = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.ngbDateToDate(responseEvent.end);
            console.log(res);
            if (dialogAction === 'save') {
                _this.calendarService
                    .updateEvent(responseEvent)
                    .subscribe(function (events) {
                    _this.events = _this.initEvents(events);
                    _this.refresh.next();
                    console.log(_this.events);
                });
            }
            else if (dialogAction === 'delete') {
                _this.removeEvent(event);
            }
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(date, this.viewDate)) {
            if (((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var _this = this;
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.calendarService
            .updateEvent(event)
            .subscribe(function (events) {
            _this.events = _this.initEvents(events);
            _this.refresh.next();
        });
    };
    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_calendar_app_service__WEBPACK_IMPORTED_MODULE_4__.CalendarAppService)); };
    CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.eventDeleteConfirm = _t.first);
        } }, decls: 31, vars: 20, consts: [[1, "mb-4"], [1, "btn", "btn-rounded", "btn-primary", 3, "click"], [1, "card"], [1, ""], [1, "p-3", "d-flex", "justify-content-between", "align-items-center", "calendar-title"], [1, "cal-top-col", "text-center"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-rounded", "btn-icon", "btn-outline-primary", "m-1", 3, "view", "viewDate", "viewDateChange"], [1, "i-Arrow-Left"], ["mwlCalendarToday", "", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "viewDate", "viewDateChange"], [1, "i-Calendar-2"], ["mwlCalendarNextView", "", 1, "btn", "btn-rounded", "btn-icon", "btn-outline-primary", "m-1", 3, "view", "viewDate", "viewDateChange"], [1, "i-Arrow-Right"], [1, "text-center"], [1, "m-0", "text-muted", "font-weight-bold"], [1, "d-flex", "justify-content-center"], ["ngbTooltip", "Month view", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "click"], [1, "i-Calendar"], ["ngbTooltip", "Week view", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "click"], [1, "i-Split-Vertical-2"], ["ngbTooltip", "Day view", 1, "btn", "btn-rounded", "btn-icon", "btn-primary", "m-1", 3, "click"], [1, "i-Align-Justify-All"], [1, "p-0"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], ["eventDeleteConfirm", ""], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-rounded", "btn-danger", 3, "click"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_1_listener() { return ctx.addEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Event");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_7_listener($event) { return ctx.viewDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_9_listener($event) { return ctx.viewDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_11_listener($event) { return ctx.viewDate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h5", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "calendarDate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_18_listener() { return ctx.view = "month"; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_20_listener() { return ctx.view = "week"; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_22_listener() { return ctx.view = "day"; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CalendarComponent_mwl_calendar_month_view_26_Template, 1, 4, "mwl-calendar-month-view", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CalendarComponent_mwl_calendar_week_view_27_Template, 1, 3, "mwl-calendar-week-view", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CalendarComponent_mwl_calendar_day_view_28_Template, 1, 3, "mwl-calendar-day-view", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CalendarComponent_ng_template_29_Template, 11, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx.viewDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](16, 16, ctx.viewDate, ctx.view + "ViewTitle", "en"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.view === "month");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.view === "week");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.view === "day");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.view);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "month");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "week");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "day");
        } }, directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵg"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, angular_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarMonthViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarWeekViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarDayViewComponent], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵi"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_3__.SharedAnimations] } });
    return CalendarComponent;
}());



/***/ }),

/***/ 19806:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_calendar_calendar_module_ts.js.map