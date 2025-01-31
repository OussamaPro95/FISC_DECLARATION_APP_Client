(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["polyfills"],{

/***/ 85240:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2015/init.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$localize": function() { return /* binding */ $localize; }
/* harmony export */ });
/**
 * @license Angular v12.1.3
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __globalThis = typeof globalThis !== 'undefined' && globalThis;

var __window = typeof window !== 'undefined' && window;

var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

var __global = typeof global !== 'undefined' && global; // Always use __globalThis if available; this is the spec-defined global variable across all
// environments.
// Then fallback to __global first; in Node tests both __global and __window may be defined.


var _global = __globalThis || __global || __window || __self;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Tag a template literal string for localization.
 *
 * For example:
 *
 * ```ts
 * $localize `some string to localize`
 * ```
 *
 * **Providing meaning, description and id**
 *
 * You can optionally specify one or more of `meaning`, `description` and `id` for a localized
 * string by pre-pending it with a colon delimited block of the form:
 *
 * ```ts
 * $localize`:meaning|description@@id:source message text`;
 *
 * $localize`:meaning|:source message text`;
 * $localize`:description:source message text`;
 * $localize`:@@id:source message text`;
 * ```
 *
 * This format is the same as that used for `i18n` markers in Angular templates. See the
 * [Angular 18n guide](guide/i18n#mark-text-for-translations).
 *
 * **Naming placeholders**
 *
 * If the template literal string contains expressions, then the expressions will be automatically
 * associated with placeholder names for you.
 *
 * For example:
 *
 * ```ts
 * $localize `Hi ${name}! There are ${items.length} items.`;
 * ```
 *
 * will generate a message-source of `Hi {$PH}! There are {$PH_1} items`.
 *
 * The recommended practice is to name the placeholder associated with each expression though.
 *
 * Do this by providing the placeholder name wrapped in `:` characters directly after the
 * expression. These placeholder names are stripped out of the rendered localized string.
 *
 * For example, to name the `items.length` expression placeholder `itemCount` you write:
 *
 * ```ts
 * $localize `There are ${items.length}:itemCount: items`;
 * ```
 *
 * **Escaping colon markers**
 *
 * If you need to use a `:` character directly at the start of a tagged string that has no
 * metadata block, or directly after a substitution expression that has no name you must escape
 * the `:` by preceding it with a backslash:
 *
 * For example:
 *
 * ```ts
 * // message has a metadata block so no need to escape colon
 * $localize `:some description::this message starts with a colon (:)`;
 * // no metadata block so the colon must be escaped
 * $localize `\:this message starts with a colon (:)`;
 * ```
 *
 * ```ts
 * // named substitution so no need to escape colon
 * $localize `${label}:label:: ${}`
 * // anonymous substitution so colon must be escaped
 * $localize `${label}\: ${}`
 * ```
 *
 * **Processing localized strings:**
 *
 * There are three scenarios:
 *
 * * **compile-time inlining**: the `$localize` tag is transformed at compile time by a
 * transpiler, removing the tag and replacing the template literal string with a translated
 * literal string from a collection of translations provided to the transpilation tool.
 *
 * * **run-time evaluation**: the `$localize` tag is a run-time function that replaces and
 * reorders the parts (static strings and expressions) of the template literal string with strings
 * from a collection of translations loaded at run-time.
 *
 * * **pass-through evaluation**: the `$localize` tag is a run-time function that simply evaluates
 * the original template literal string without applying any translations to the parts. This
 * version is used during development or where there is no need to translate the localized
 * template literals.
 *
 * @param messageParts a collection of the static parts of the template string.
 * @param expressions a collection of the values of each placeholder in the template string.
 * @returns the translated string, with the `messageParts` and `expressions` interleaved together.
 *
 * @globalApi
 * @publicApi
 */


var $localize = function $localize(messageParts) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  if ($localize.translate) {
    // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
    var translation = $localize.translate(messageParts, expressions);
    messageParts = translation[0];
    expressions = translation[1];
  }

  var message = stripBlock(messageParts[0], messageParts.raw[0]);

  for (var i = 1; i < messageParts.length; i++) {
    message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
  }

  return message;
};

var BLOCK_MARKER = ':';
/**
 * Strip a delimited "block" from the start of the `messagePart`, if it is found.
 *
 * If a marker character (:) actually appears in the content at the start of a tagged string or
 * after a substitution expression, where a block has not been provided the character must be
 * escaped with a backslash, `\:`. This function checks for this by looking at the `raw`
 * messagePart, which should still contain the backslash.
 *
 * @param messagePart The cooked message part to process.
 * @param rawMessagePart The raw message part to check.
 * @returns the message part with the placeholder name stripped, if found.
 * @throws an error if the block is unterminated
 */

function stripBlock(messagePart, rawMessagePart) {
  return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}
/**
 * Find the end of a "marked block" indicated by the first non-escaped colon.
 *
 * @param cooked The cooked string (where escaped chars have been processed)
 * @param raw The raw string (where escape sequences are still in place)
 *
 * @returns the index of the end of block marker
 * @throws an error if the block is unterminated
 */


function findEndOfBlock(cooked, raw) {
  /***********************************************************************************************
   * This function is repeated in `src/utils/messages.ts` and the two should be kept in sync.
   * The reason is that this file is marked as having side-effects, and if we import `messages.ts`
   * into it, the whole of `src/utils` will be included in this bundle and none of the functions
   * will be tree shaken.
   ***********************************************************************************************/
  for (var cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
    if (raw[rawIndex] === '\\') {
      rawIndex++;
    } else if (cooked[cookedIndex] === BLOCK_MARKER) {
      return cookedIndex;
    }
  }

  throw new Error("Unterminated $localize metadata block in \"".concat(raw, "\"."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Attach $localize to the global context, as a side-effect of this module.


_global.$localize = $localize;
 //# sourceMappingURL=init.js.map

/***/ }),

/***/ 5416:
/*!************************************************!*\
  !*** ./node_modules/classlist.js/classList.js ***!
  \************************************************/
/***/ (function() {

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if ("document" in self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
    (function (view) {
      "use strict";

      if (!('Element' in view)) return;

      var classListProp = "classList",
          protoProp = "prototype",
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
          arrIndexOf = Array[protoProp].indexOf || function (item) {
        var i = 0,
            len = this.length;

        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }

        return -1;
      } // Vendors: please allow content code to instantiate DOMExceptions
      ,
          DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      },
          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === "") {
          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
        }

        if (/\s/.test(token)) {
          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
        }

        return arrIndexOf.call(classList, token);
      },
          ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;

        for (; i < len; i++) {
          this.push(classes[i]);
        }

        this._updateClassName = function () {
          elem.setAttribute("class", this.toString());
        };
      },
          classListProto = ClassList[protoProp] = [],
          classListGetter = function classListGetter() {
        return new ClassList(this);
      }; // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.


      DOMEx[protoProp] = Error[protoProp];

      classListProto.item = function (i) {
        return this[i] || null;
      };

      classListProto.contains = function (token) {
        token += "";
        return checkTokenAndGetIndex(this, token) !== -1;
      };

      classListProto.add = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false;

        do {
          token = tokens[i] + "";

          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.remove = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false,
            index;

        do {
          token = tokens[i] + "";
          index = checkTokenAndGetIndex(this, token);

          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.toggle = function (token, force) {
        token += "";
        var result = this.contains(token),
            method = result ? force !== true && "remove" : force !== false && "add";

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };

      classListProto.toString = function () {
        return this.join(" ");
      };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };

        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          // IE 8 doesn't support enumerable:true
          if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(self);
  } else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.
    (function () {
      "use strict";

      var testElement = document.createElement("_");
      testElement.classList.add("c1", "c2"); // Polyfill for IE 10/11 and Firefox <26, where classList.add and
      // classList.remove exist but support only one argument at a time.

      if (!testElement.classList.contains("c2")) {
        var createMethod = function createMethod(method) {
          var original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function (token) {
            var i,
                len = arguments.length;

            for (i = 0; i < len; i++) {
              token = arguments[i];
              original.call(this, token);
            }
          };
        };

        createMethod('add');
        createMethod('remove');
      }

      testElement.classList.toggle("c3", false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
      // support the second argument.

      if (testElement.classList.contains("c3")) {
        var _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          } else {
            return _toggle.call(this, token);
          }
        };
      }

      testElement = null;
    })();
  }
}

/***/ }),

/***/ 7277:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * @license Angular v12.0.0-next.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ 35554).default;

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ 75725).default;

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ 73560).default;

var Zone$1 = function (global) {
  var performance = global['performance'];

  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }

  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }

  mark('Zone'); // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.

  var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

  function __symbol__(name) {
    return symbolPrefix + name;
  }

  var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }

  var Zone = /*#__PURE__*/function () {
    function Zone(parent, zoneSpec) {
      _classCallCheck(this, Zone);

      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }

    _createClass(Zone, [{
      key: "parent",
      get: function get() {
        return this._parent;
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "get",
      value: function get(key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      }
    }, {
      key: "getZoneWith",
      value: function getZoneWith(key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      }
    }, {
      key: "fork",
      value: function fork(zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      }
    }, {
      key: "wrap",
      value: function wrap(callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      }
    }, {
      key: "run",
      value: function run(callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      }
    }, {
      key: "runGuarded",
      value: function runGuarded(callback) {
        var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
        var source = arguments.length > 3 ? arguments[3] : undefined;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      }
    }, {
      key: "runTask",
      value: function runTask(task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      }
    }, {
      key: "scheduleTask",
      value: function scheduleTask(task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      }
    }, {
      key: "scheduleMicroTask",
      value: function scheduleMicroTask(source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      }
    }, {
      key: "scheduleMacroTask",
      value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      }
    }, {
      key: "scheduleEventTask",
      value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      }
    }, {
      key: "cancelTask",
      value: function cancelTask(task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      }
    }, {
      key: "_updateTaskCount",
      value: function _updateTaskCount(task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      }
    }], [{
      key: "assertZonePatched",
      value: function assertZonePatched() {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      }
    }, {
      key: "root",
      get: function get() {
        var zone = Zone.current;

        while (zone.parent) {
          zone = zone.parent;
        }

        return zone;
      }
    }, {
      key: "current",
      get: function get() {
        return _currentZoneFrame.zone;
      }
    }, {
      key: "currentTask",
      get: function get() {
        return _currentTask;
      } // tslint:disable-next-line:require-internal-with-underscore

    }, {
      key: "__load_patch",
      value: function __load_patch(name, fn) {
        var ignoreDuplicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (patches.hasOwnProperty(name)) {
          // `checkDuplicate` option is defined from global variable
          // so it works for all modules.
          // `ignoreDuplicate` can work for the specified module
          if (!ignoreDuplicate && checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      }
    }]);

    return Zone;
  }(); // tslint:disable-next-line:require-internal-with-underscore


  Zone.__symbol__ = __symbol__;
  var DELEGATE_ZS = {
    name: '',
    onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
      return delegate.hasTask(target, hasTaskState);
    },
    onScheduleTask: function onScheduleTask(delegate, _, target, task) {
      return delegate.scheduleTask(target, task);
    },
    onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
      return delegate.invokeTask(target, task, applyThis, applyArgs);
    },
    onCancelTask: function onCancelTask(delegate, _, target, task) {
      return delegate.cancelTask(target, task);
    }
  };

  var ZoneDelegate = /*#__PURE__*/function () {
    function ZoneDelegate(zone, parentDelegate, zoneSpec) {
      _classCallCheck(this, ZoneDelegate);

      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;

        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }

        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }

        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }

    _createClass(ZoneDelegate, [{
      key: "fork",
      value: function fork(targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      }
    }, {
      key: "intercept",
      value: function intercept(targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      }
    }, {
      key: "invoke",
      value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      }
    }, {
      key: "handleError",
      value: function handleError(targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      }
    }, {
      key: "scheduleTask",
      value: function scheduleTask(targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      }
    }, {
      key: "invokeTask",
      value: function invokeTask(targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      }
    }, {
      key: "cancelTask",
      value: function cancelTask(targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      }
    }, {
      key: "hasTask",
      value: function hasTask(targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      } // tslint:disable-next-line:require-internal-with-underscore

    }, {
      key: "_updateTaskCount",
      value: function _updateTaskCount(type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      }
    }]);

    return ZoneDelegate;
  }();

  var ZoneTask = /*#__PURE__*/function () {
    function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
      _classCallCheck(this, ZoneTask);

      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

      this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;

      if (!callback) {
        throw new Error('callback is not defined');
      }

      this.callback = callback;
      var self = this; // TODO: @JiaLiPassion options should have interface

      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }

    _createClass(ZoneTask, [{
      key: "zone",
      get: function get() {
        return this._zone;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
    }, {
      key: "cancelScheduleRequest",
      value: function cancelScheduleRequest() {
        this._transitionTo(notScheduled, scheduling);
      } // tslint:disable-next-line:require-internal-with-underscore

    }, {
      key: "_transitionTo",
      value: function _transitionTo(toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      } // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)

    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      }
    }], [{
      key: "invokeTask",
      value: function invokeTask(task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      }
    }]);

    return ZoneTask;
  }(); //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////


  var symbolSetTimeout = __symbol__('setTimeout');

  var symbolPromise = __symbol__('Promise');

  var symbolThen = __symbol__('then');

  var _microTaskQueue = [];
  var _isDrainingMicrotaskQueue = false;
  var nativeMicroTaskQueuePromise;

  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      if (!nativeMicroTaskQueuePromise) {
        if (global[symbolPromise]) {
          nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
      }

      if (nativeMicroTaskQueuePromise) {
        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

        if (!nativeThen) {
          // native Promise is not patchable, we need to use `then` directly
          // issue 1078
          nativeThen = nativeMicroTaskQueuePromise['then'];
        }

        nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
      } else {
        global[symbolSetTimeout](drainMicroTaskQueue, 0);
      }
    }

    task && _microTaskQueue.push(task);
  }

  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;

      while (_microTaskQueue.length) {
        var queue = _microTaskQueue;
        _microTaskQueue = [];

        for (var i = 0; i < queue.length; i++) {
          var task = queue[i];

          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }

      _api.microtaskDrainDone();

      _isDrainingMicrotaskQueue = false;
    }
  } //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////


  var NO_ZONE = {
    name: 'NO ZONE'
  };
  var notScheduled = 'notScheduled',
      scheduling = 'scheduling',
      scheduled = 'scheduled',
      running = 'running',
      canceling = 'canceling',
      unknown = 'unknown';
  var microTask = 'microTask',
      macroTask = 'macroTask',
      eventTask = 'eventTask';
  var patches = {};
  var _api = {
    symbol: __symbol__,
    currentZoneFrame: function currentZoneFrame() {
      return _currentZoneFrame;
    },
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: function showUncaughtError() {
      return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
    },
    patchEventTarget: function patchEventTarget() {
      return [];
    },
    patchOnProperties: noop,
    patchMethod: function patchMethod() {
      return noop;
    },
    bindArguments: function bindArguments() {
      return [];
    },
    patchThen: function patchThen() {
      return noop;
    },
    patchMacroTask: function patchMacroTask() {
      return noop;
    },
    patchEventPrototype: function patchEventPrototype() {
      return noop;
    },
    isIEOrEdge: function isIEOrEdge() {
      return false;
    },
    getGlobalObjects: function getGlobalObjects() {
      return undefined;
    },
    ObjectDefineProperty: function ObjectDefineProperty() {
      return noop;
    },
    ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
      return undefined;
    },
    ObjectCreate: function ObjectCreate() {
      return undefined;
    },
    ArraySlice: function ArraySlice() {
      return [];
    },
    patchClass: function patchClass() {
      return noop;
    },
    wrapWithCurrentZone: function wrapWithCurrentZone() {
      return noop;
    },
    filterProperties: function filterProperties() {
      return [];
    },
    attachOriginToPatched: function attachOriginToPatched() {
      return noop;
    },
    _redefineProperty: function _redefineProperty() {
      return noop;
    },
    patchCallbacks: function patchCallbacks() {
      return noop;
    }
  };
  var _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  var _currentTask = null;
  var _numberOfNestedTaskFrames = 0;

  function noop() {}

  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
}(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name

/** Object.getOwnPropertyDescriptor */


var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */

var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */

var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */

var ObjectCreate = Object.create;
/** Array.prototype.slice */

var ArraySlice = Array.prototype.slice;
/** addEventListener string const */

var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */

var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */

var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */


var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */


var TRUE_STR = 'true';
/** false string const */

var FALSE_STR = 'false';
/** Zone symbol prefix string const. */

var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}

function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}

var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;

var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];

function bindArguments(args, source) {
  for (var i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }

  return args;
}

function patchPrototype(prototype, fnNames) {
  var source = prototype.constructor['name'];

  var _loop = function _loop(i) {
    var name = fnNames[i];
    var delegate = prototype[name];

    if (delegate) {
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

      if (!isPropertyWritable(prototypeDesc)) {
        return "continue";
      }

      prototype[name] = function (delegate) {
        var patched = function patched() {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };

        attachOriginToPatched(patched, delegate);
        return patched;
      }(delegate);
    }
  };

  for (var i = 0; i < fnNames.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.

var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.

var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};

var wrapFn = function wrapFn(event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;

  if (!event) {
    return;
  }

  var eventNameSymbol = zoneSymbolEventNames[event.type];

  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }

  var target = this || event.target || _global;
  var listener = target[eventNameSymbol];
  var result;

  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signiture
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    var errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);

    if (result != undefined && !result) {
      event.preventDefault();
    }
  }

  return result;
};

function patchProperty(obj, prop, prototype) {
  var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  } // if the descriptor not exists or is not configurable
  // just return


  if (!desc || !desc.configurable) {
    return;
  }

  var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  } // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified


  delete desc.writable;
  delete desc.value;
  var originalDescGet = desc.get;
  var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

  var eventName = prop.substr(2);
  var eventNameSymbol = zoneSymbolEventNames[eventName];

  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }

  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    var target = this;

    if (!target && obj === _global) {
      target = _global;
    }

    if (!target) {
      return;
    }

    var previousValue = target[eventNameSymbol];

    if (previousValue) {
      target.removeEventListener(eventName, wrapFn);
    } // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet


    if (originalDescSet) {
      originalDescSet.apply(target, NULL_ON_PROP_VALUE);
    }

    if (typeof newValue === 'function') {
      target[eventNameSymbol] = newValue;
      target.addEventListener(eventName, wrapFn, false);
    } else {
      target[eventNameSymbol] = null;
    }
  }; // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null


  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    var target = this;

    if (!target && obj === _global) {
      target = _global;
    }

    if (!target) {
      return null;
    }

    var listener = target[eventNameSymbol];

    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      var value = originalDescGet && originalDescGet.call(this);

      if (value) {
        desc.set.call(this, value);

        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }

        return value;
      }
    }

    return null;
  };

  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}

function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (var i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    var onProperties = [];

    for (var prop in obj) {
      if (prop.substr(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }

    for (var j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}

var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

function patchClass(className) {
  var OriginalClass = _global[className];
  if (!OriginalClass) return; // keep original class in global

  _global[zoneSymbol(className)] = OriginalClass;

  _global[className] = function () {
    var a = bindArguments(arguments, className);

    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;

      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;

      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;

      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;

      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;

      default:
        throw new Error('Arg list too long.');
    }
  }; // attach original delegate to patched function


  attachOriginToPatched(_global[className], OriginalClass);
  var instance = new OriginalClass(function () {});
  var prop;

  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function set(fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.

              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function get() {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }

  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}

function patchMethod(target, name, patchFn) {
  var proto = target;

  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }

  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }

  var delegateName = zoneSymbol(name);
  var delegate = null;

  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

    var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
} // TODO: @JiaLiPassion, support cancel task later if necessary


function patchMacroTask(obj, funcName, metaCreator) {
  var setNative = null;

  function scheduleTask(task) {
    var data = task.data;

    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };

    setNative.apply(data.target, data.args);
    return task;
  }

  setNative = patchMethod(obj, funcName, function (delegate) {
    return function (self, args) {
      var meta = metaCreator(self, args);

      if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
        return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
      } else {
        // cause an error by calling it directly.
        return delegate.apply(self, args);
      }
    };
  });
}

function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}

var isDetectedIEOrEdge = false;
var ieOrEdge = false;

function isIE() {
  try {
    var ua = internalWindow.navigator.userAgent;

    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}

  return false;
}

function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }

  isDetectedIEOrEdge = true;

  try {
    var ua = internalWindow.navigator.userAgent;

    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}

  return ieOrEdge;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ObjectDefineProperty = Object.defineProperty;

  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      var className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }

    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }

  var __symbol__ = api.symbol;
  var _uncaughtPromiseErrors = [];
  var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

  var symbolPromise = __symbol__('Promise');

  var symbolThen = __symbol__('then');

  var creationTrace = '__creationTrace__';

  api.onUnhandledError = function (e) {
    if (api.showUncaughtError()) {
      var rejection = e && e.rejection;

      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };

  api.microtaskDrainDone = function () {
    var _loop2 = function _loop2() {
      var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

      try {
        uncaughtPromiseError.zone.runGuarded(function () {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }

          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    };

    while (_uncaughtPromiseErrors.length) {
      _loop2();
    }
  };

  var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);

    try {
      var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }

  function isThenable(value) {
    return value && value.then;
  }

  function forwardResolution(value) {
    return value;
  }

  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }

  var symbolState = __symbol__('state');

  var symbolValue = __symbol__('value');

  var symbolFinally = __symbol__('finally');

  var symbolParentPromiseValue = __symbol__('parentPromiseValue');

  var symbolParentPromiseState = __symbol__('parentPromiseState');

  var source = 'Promise.then';
  var UNRESOLVED = null;
  var RESOLVED = true;
  var REJECTED = false;
  var REJECTED_NO_CATCH = 0;

  function makeResolver(promise, state) {
    return function (v) {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      } // Do not return value or you will break the Promise spec.

    };
  }

  var once = function once() {
    var wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }

        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };

  var TYPE_ERROR = 'Promise resolved with itself';

  var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


  function resolvePromise(promise, state, value) {
    var onceWrapper = once();

    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }

    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      var then = null;

      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(function () {
          resolvePromise(promise, false, err);
        })();
        return promise;
      } // if (value instanceof ZoneAwarePromise) {


      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        var queue = promise[symbolValue];
        promise[symbolValue] = value;

        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        } // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace


        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }

        for (var i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }

        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          var uncaughtPromiseError = value;

          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }

          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }

          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;

          _uncaughtPromiseErrors.push(uncaughtPromiseError);

          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    } // Resolving an already resolved promise is a noop.


    return promise;
  }

  var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        var handler = Zone[REJECTION_HANDLED_HANDLER];

        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}

      promise[symbolState] = REJECTED;

      for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }

  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    var promiseState = promise[symbolState];
    var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, function () {
      try {
        var parentPromiseValue = promise[symbolValue];
        var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        } // should not pass value to finally callback


        var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }

  var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

  var noop = function noop() {};

  var ZoneAwarePromise = /*#__PURE__*/function () {
    function ZoneAwarePromise(executor) {
      _classCallCheck(this, ZoneAwarePromise);

      var promise = this;

      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }

      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;

      try {
        executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }

    _createClass(ZoneAwarePromise, [{
      key: Symbol.toStringTag,
      get: function get() {
        return 'Promise';
      }
    }, {
      key: Symbol.species,
      get: function get() {
        return ZoneAwarePromise;
      }
    }, {
      key: "then",
      value: function then(onFulfilled, onRejected) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      }
    }, {
      key: "catch",
      value: function _catch(onRejected) {
        return this.then(null, onRejected);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      }
    }], [{
      key: "toString",
      value: function toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
    }, {
      key: "resolve",
      value: function resolve(value) {
        return resolvePromise(new this(null), RESOLVED, value);
      }
    }, {
      key: "reject",
      value: function reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
    }, {
      key: "race",
      value: function race(values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        var _iterator = _createForOfIteratorHelper(values),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var value = _step.value;

            if (!isThenable(value)) {
              value = this.resolve(value);
            }

            value.then(onResolve, onReject);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return promise;
      }
    }, {
      key: "all",
      value: function all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
    }, {
      key: "allSettled",
      value: function allSettled(values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function thenCallback(value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function errorCallback(err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      }
    }, {
      key: "allWithCallback",
      value: function allWithCallback(values, callback) {
        var _this = this;

        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _iterator2 = _createForOfIteratorHelper(values),
            _step2;

        try {
          var _loop3 = function _loop3() {
            var value = _step2.value;

            if (!isThenable(value)) {
              value = _this.resolve(value);
            }

            var curValueIndex = valueIndex;

            try {
              value.then(function (value) {
                resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }, function (err) {
                if (!callback) {
                  reject(err);
                } else {
                  resolvedValues[curValueIndex] = callback.errorCallback(err);
                  unresolvedCount--;

                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }
              });
            } catch (thenErr) {
              reject(thenErr);
            }

            unresolvedCount++;
            valueIndex++;
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop3();
          } // Make the unresolvedCount zero-based again.

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      }
    }]);

    return ZoneAwarePromise;
  }(); // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.


  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  var NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;

  var symbolThenPatched = __symbol__('thenPatched');

  function patchThen(Ctor) {
    var proto = Ctor.prototype;
    var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }

    var originalThen = proto.then; // Keep a reference to the original method.

    proto[symbolThen] = originalThen;

    Ctor.prototype.then = function (onResolve, onReject) {
      var _this2 = this;

      var wrapped = new ZoneAwarePromise(function (resolve, reject) {
        originalThen.call(_this2, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };

    Ctor[symbolThenPatched] = true;
  }

  api.patchThen = patchThen;

  function zoneify(fn) {
    return function (self, args) {
      var resultPromise = fn.apply(self, args);

      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }

      var ctor = resultPromise.constructor;

      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }

      return resultPromise;
    };
  }

  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', function (delegate) {
      return zoneify(delegate);
    });
  } // This is not part of public API, but it is useful for tests, so we expose it.


  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function


Zone.__load_patch('toString', function (global) {
  // patch Func.prototype.toString to let them look like native
  var originalFunctionToString = Function.prototype.toString;
  var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  var PROMISE_SYMBOL = zoneSymbol('Promise');
  var ERROR_SYMBOL = zoneSymbol('Error');

  var newFunctionToString = function toString() {
    if (typeof this === 'function') {
      var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }

      if (this === Promise) {
        var nativePromise = global[PROMISE_SYMBOL];

        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }

      if (this === Error) {
        var nativeError = global[ERROR_SYMBOL];

        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }

    return originalFunctionToString.call(this);
  };

  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

  var originalObjectToString = Object.prototype.toString;
  var PROMISE_OBJECT_TO_STRING = '[object Promise]';

  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }

    return originalObjectToString.call(this);
  };
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var passiveSupported = false;

if (typeof window !== 'undefined') {
  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passiveSupported = true;
      }
    });
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
} // an identifier to tell ZoneTask do not create a new invoke closure


var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

function prepareEventNames(eventName, eventNameToString) {
  var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames$1[eventName] = {};
  zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
}

function patchEventTarget(_global, apis, patchOptions) {
  var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  var PREPEND_EVENT_LISTENER = 'prependListener';
  var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

  var invokeTask = function invokeTask(task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }

    var delegate = task.callback;

    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = function (event) {
        return delegate.handleEvent(event);
      };

      task.originalDelegate = delegate;
    } // invoke static task.invoke


    task.invoke(task, target, [event]);
    var options = task.options;

    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

      target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
    }
  }; // global shared zoneAwareCallback to handle all event callback with capture = false


  var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    } // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190


    var target = this || event.target || _global;
    var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

    if (tasks) {
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        invokeTask(tasks[0], target, event);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        var copyTasks = tasks.slice();

        for (var i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }

          invokeTask(copyTasks[i], target, event);
        }
      }
    }
  }; // global shared zoneAwareCallback to handle all event callback with capture = true


  var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    } // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190


    var target = this || event.target || _global;
    var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

    if (tasks) {
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        invokeTask(tasks[0], target, event);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        var copyTasks = tasks.slice();

        for (var i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }

          invokeTask(copyTasks[i], target, event);
        }
      }
    }
  };

  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }

    var useGlobalCallback = true;

    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }

    var validateHandler = patchOptions && patchOptions.vh;
    var checkDuplicate = true;

    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }

    var returnTarget = false;

    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }

    var proto = obj;

    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }

    if (!proto) {
      return false;
    }

    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }

    var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data

    var taskData = {};
    var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    var nativePrependEventListener;

    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */


    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }

      if (!passiveSupported || !passive) {
        return options;
      }

      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }

      if (!options) {
        return {
          passive: true
        };
      }

      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }

      return options;
    }

    var customScheduleGlobal = function customScheduleGlobal(task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }

      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };

    var customCancelGlobal = function customCancelGlobal(task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && task.target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (existingTask === task) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              task.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }

              break;
            }
          }
        }
      } // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return


      if (!task.allRemoved) {
        return;
      }

      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };

    var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };

    var customSchedulePrepend = function customSchedulePrepend(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };

    var customCancelNonGlobal = function customCancelNonGlobal(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };

    var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

    var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
      var typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };

    var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];

    var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

    var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
      var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      return function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var delegate = arguments[1];

        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }

        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        } // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke


        var isHandleEvent = false;

        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }

          isHandleEvent = true;
        }

        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }

        var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        var options = buildEventListenerOptions(arguments[2], passive);

        if (unpatchedEvents) {
          // check upatched list
          for (var i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }

        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var once = options && typeof options === 'object' ? options.once : false;
        var zone = Zone.current;
        var symbolEventNames = zoneSymbolEventNames$1[eventName];

        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames$1[eventName];
        }

        var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        var existingTasks = target[symbolEventName];
        var isExisting = false;

        if (existingTasks) {
          // already have task registered
          isExisting = true;

          if (checkDuplicate) {
            for (var _i = 0; _i < existingTasks.length; _i++) {
              if (compare(existingTasks[_i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }

        var source;
        var constructorName = target.constructor['name'];
        var targetSource = globalSources[constructorName];

        if (targetSource) {
          source = targetSource[eventName];
        }

        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        } // do not create a new object as task.data to pass those things
        // just use the global shared one


        taskData.options = options;

        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }

        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

        if (data) {
          data.taskData = taskData;
        }

        var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442

        taskData.target = null; // need to clear up taskData because it is a global object

        if (data) {
          data.taskData = null;
        } // have to save those information to task in case
        // application may call task.zone.cancelTask() directly


        if (once) {
          options.once = true;
        }

        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }

        task.target = target;
        task.capture = capture;
        task.eventName = eventName;

        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }

        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }

        if (returnTarget) {
          return target;
        }
      };
    };

    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }

    proto[REMOVE_EVENT_LISTENER] = function () {
      var target = this || _global;
      var eventName = arguments[0];

      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }

      var options = arguments[2];
      var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      var delegate = arguments[1];

      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }

      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }

      var symbolEventNames = zoneSymbolEventNames$1[eventName];
      var symbolEventName;

      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }

      var existingTasks = symbolEventName && target[symbolEventName];

      if (existingTasks) {
        for (var i = 0; i < existingTasks.length; i++) {
          var existingTask = existingTasks[i];

          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

            existingTask.isRemoved = true;

            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed

              if (typeof eventName === 'string') {
                var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }

            existingTask.zone.cancelTask(existingTask);

            if (returnTarget) {
              return target;
            }

            return;
          }
        }
      } // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.


      return nativeRemoveEventListener.apply(this, arguments);
    };

    proto[LISTENERS_EVENT_LISTENER] = function () {
      var target = this || _global;
      var eventName = arguments[0];

      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }

      var listeners = [];
      var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

      for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }

      return listeners;
    };

    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      var target = this || _global;
      var eventName = arguments[0];

      if (!eventName) {
        var keys = Object.keys(target);

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed

          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        } // remove removeListener listener finally


        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var symbolEventNames = zoneSymbolEventNames$1[eventName];

        if (symbolEventNames) {
          var symbolEventName = symbolEventNames[FALSE_STR];
          var symbolCaptureEventName = symbolEventNames[TRUE_STR];
          var tasks = target[symbolEventName];
          var captureTasks = target[symbolCaptureEventName];

          if (tasks) {
            var removeTasks = tasks.slice();

            for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
              var task = removeTasks[_i2];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }

          if (captureTasks) {
            var _removeTasks = captureTasks.slice();

            for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
              var _task = _removeTasks[_i3];

              var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

              this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
            }
          }
        }
      }

      if (returnTarget) {
        return this;
      }
    }; // for native toString patch


    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }

    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }

    return true;
  }

  var results = [];

  for (var i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }

  return results;
}

function findEventTasks(target, eventName) {
  if (!eventName) {
    var foundTasks = [];

    for (var prop in target) {
      var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      var evtName = match && match[1];

      if (evtName && (!eventName || evtName === eventName)) {
        var tasks = target[prop];

        if (tasks) {
          for (var i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }

    return foundTasks;
  }

  var symbolEventName = zoneSymbolEventNames$1[eventName];

  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames$1[eventName];
  }

  var captureFalseTasks = target[symbolEventName[FALSE_STR]];
  var captureTrueTasks = target[symbolEventName[TRUE_STR]];

  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}

function patchEventPrototype(global, api) {
  var Event = global['Event'];

  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
      return function (self, args) {
        self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
        // in case in some hybrid application, some part of
        // application will be controlled by zone, some are not

        delegate && delegate.apply(self, args);
      };
    });
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function patchCallbacks(api, target, targetName, method, callbacks) {
  var symbol = Zone.__symbol__(method);

  if (target[symbol]) {
    return;
  }

  var nativeDelegate = target[symbol] = target[method];

  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        var source = "".concat(targetName, ".").concat(method, "::") + callback;
        var prototype = opts.prototype;

        if (prototype.hasOwnProperty(callback)) {
          var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

          if (descriptor && descriptor.value) {
            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

            api._redefineProperty(opts.prototype, callback, descriptor);
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } else if (prototype[callback]) {
          prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
        }
      });
    }

    return nativeDelegate.call(target, name, opts, options);
  };

  api.attachOriginToPatched(target[method], nativeDelegate);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }

  var tip = ignoreProperties.filter(function (ip) {
    return ip.target === target;
  });

  if (!tip || tip.length === 0) {
    return onProperties;
  }

  var targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(function (op) {
    return targetIgnoreProperties.indexOf(op) === -1;
  });
}

function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }

  var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}

function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }

  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }

  var supportsWebSocket = typeof WebSocket !== 'undefined';
  var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

  if (isBrowser) {
    var _internalWindow = window;
    var ignoreErrorProperties = isIE() ? [{
      target: _internalWindow,
      ignoreProperties: ['error']
    }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not

    patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
    patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

    if (typeof _internalWindow['SVGElement'] !== 'undefined') {
      patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
    }

    patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
    patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
    patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
    patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
    patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
    patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
    patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
    var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

    if (HTMLMarqueeElement) {
      patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
    }

    var Worker = _internalWindow['Worker'];

    if (Worker) {
      patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
    }
  }

  var XMLHttpRequest = _global['XMLHttpRequest'];

  if (XMLHttpRequest) {
    // XMLHttpRequest is not available in ServiceWorker, so we need to check here
    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
  }

  var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

  if (XMLHttpRequestEventTarget) {
    patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
  }

  if (typeof IDBIndex !== 'undefined') {
    patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
  }

  if (supportsWebSocket) {
    patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('util', function (global, Zone, api) {
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.

  var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

  var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }

  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }

  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;

  api.getGlobalObjects = function () {
    return {
      globalSources: globalSources,
      zoneSymbolEventNames: zoneSymbolEventNames$1,
      eventNames: eventNames,
      isBrowser: isBrowser,
      isMix: isMix,
      isNode: isNode,
      TRUE_STR: TRUE_STR,
      FALSE_STR: FALSE_STR,
      ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    };
  };
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var taskSymbol = zoneSymbol('zoneTask');

function patchTimer(window, setName, cancelName, nameSuffix) {
  var setNative = null;
  var clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  var tasksByHandleId = {};

  function scheduleTask(task) {
    var data = task.data;

    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };

    data.handleId = setNative.apply(window, data.args);
    return task;
  }

  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }

  setNative = patchMethod(window, setName, function (delegate) {
    return function (self, args) {
      if (typeof args[0] === 'function') {
        var _options = {
          isPeriodic: nameSuffix === 'Interval',
          delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
          args: args
        };
        var callback = args[0];

        args[0] = function timer() {
          try {
            return callback.apply(this, arguments);
          } finally {
            // issue-934, task will be cancelled
            // even it is a periodic task such as
            // setInterval
            // https://github.com/angular/angular/issues/40387
            // Cleanup tasksByHandleId should be handled before scheduleTask
            // Since some zoneSpec may intercept and doesn't trigger
            // scheduleFn(scheduleTask) provided here.
            if (!_options.isPeriodic) {
              if (typeof _options.handleId === 'number') {
                // in non-nodejs env, we remove timerId
                // from local cache
                delete tasksByHandleId[_options.handleId];
              } else if (_options.handleId) {
                // Node returns complex objects as handleIds
                // we remove task reference from timer object
                _options.handleId[taskSymbol] = null;
              }
            }
          }
        };

        var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

        if (!task) {
          return task;
        } // Node.js must additionally support the ref and unref functions.


        var handle = task.data.handleId;

        if (typeof handle === 'number') {
          // for non nodejs env, we save handleId: task
          // mapping in local cache for clearTimeout
          tasksByHandleId[handle] = task;
        } else if (handle) {
          // for nodejs env, we save task
          // reference in timerId Object for clearTimeout
          handle[taskSymbol] = task;
        } // check whether handle is null, because some polyfill or browser
        // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


        if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
          task.ref = handle.ref.bind(handle);
          task.unref = handle.unref.bind(handle);
        }

        if (typeof handle === 'number' || handle) {
          return handle;
        }

        return task;
      } else {
        // cause an error by calling it directly.
        return delegate.apply(window, args);
      }
    };
  });
  clearNative = patchMethod(window, cancelName, function (delegate) {
    return function (self, args) {
      var id = args[0];
      var task;

      if (typeof id === 'number') {
        // non nodejs env.
        task = tasksByHandleId[id];
      } else {
        // nodejs env.
        task = id && id[taskSymbol]; // other environments.

        if (!task) {
          task = id;
        }
      }

      if (task && typeof task.type === 'string') {
        if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
          if (typeof id === 'number') {
            delete tasksByHandleId[id];
          } else if (id) {
            id[taskSymbol] = null;
          } // Do not cancel already canceled functions


          task.zone.cancelTask(task);
        }
      } else {
        // cause an error by calling it directly.
        delegate.apply(window, args);
      }
    };
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function patchCustomElements(_global, api) {
  var _api$getGlobalObjects = api.getGlobalObjects(),
      isBrowser = _api$getGlobalObjects.isBrowser,
      isMix = _api$getGlobalObjects.isMix;

  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }

  var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }

  var _api$getGlobalObjects2 = api.getGlobalObjects(),
      eventNames = _api$getGlobalObjects2.eventNames,
      zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
      TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
      FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
      ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


  for (var i = 0; i < eventNames.length; i++) {
    var eventName = eventNames[i];
    var falseEventName = eventName + FALSE_STR;
    var trueEventName = eventName + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }

  var EVENT_TARGET = _global['EventTarget'];

  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }

  api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}

function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('legacy', function (global) {
  var legacyPatch = global[Zone.__symbol__('legacyPatch')];

  if (legacyPatch) {
    legacyPatch();
  }
});

Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
  api.patchMethod(global, 'queueMicrotask', function (delegate) {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});

Zone.__load_patch('timers', function (global) {
  var set = 'set';
  var clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});

Zone.__load_patch('requestAnimationFrame', function (global) {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});

Zone.__load_patch('blocking', function (global, Zone) {
  var blockingMethods = ['alert', 'prompt', 'confirm'];

  for (var i = 0; i < blockingMethods.length; i++) {
    var name = blockingMethods[i];
    patchMethod(global, name, function (delegate, symbol, name) {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});

Zone.__load_patch('EventTarget', function (global, Zone, api) {
  patchEvent(global, api);
  eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

  var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
  }
});

Zone.__load_patch('MutationObserver', function (global, Zone, api) {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});

Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
  patchClass('IntersectionObserver');
});

Zone.__load_patch('FileReader', function (global, Zone, api) {
  patchClass('FileReader');
});

Zone.__load_patch('on_property', function (global, Zone, api) {
  propertyDescriptorPatch(api, global);
});

Zone.__load_patch('customElements', function (global, Zone, api) {
  patchCustomElements(global, api);
});

Zone.__load_patch('XHR', function (global, Zone) {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  var XHR_TASK = zoneSymbol('xhrTask');
  var XHR_SYNC = zoneSymbol('xhrSync');
  var XHR_LISTENER = zoneSymbol('xhrListener');
  var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  var XHR_URL = zoneSymbol('xhrURL');
  var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

  function patchXHR(window) {
    var XMLHttpRequest = window['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }

    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

    function findPendingTask(target) {
      return target[XHR_TASK];
    }

    var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

    if (!oriAddListener) {
      var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }

    var READY_STATE_CHANGE = 'readystatechange';
    var SCHEDULED = 'scheduled';

    function scheduleTask(task) {
      var data = task.data;
      var target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

      var listener = target[XHR_LISTENER];

      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }

      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }

      var newListener = target[XHR_LISTENER] = function () {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            var loadTasks = target[Zone.__symbol__('loadfalse')];

            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              var oriInvoke = task.invoke;

              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                var loadTasks = target[Zone.__symbol__('loadfalse')];

                for (var i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }

                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };

              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };

      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      var storedTask = target[XHR_TASK];

      if (!storedTask) {
        target[XHR_TASK] = task;
      }

      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }

    function placeholderCallback() {}

    function clearTask(task) {
      var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.

      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }

    var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
      return function (self, args) {
        self[XHR_SYNC] = args[2] == false;
        self[XHR_URL] = args[1];
        return openNative.apply(self, args);
      };
    });
    var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
      return function (self, args) {
        if (Zone.current[fetchTaskScheduling] === true) {
          // a fetch is scheduling, so we are using xhr to polyfill fetch
          // and because we already schedule macroTask for fetch, we should
          // not schedule a macroTask for xhr again
          return sendNative.apply(self, args);
        }

        if (self[XHR_SYNC]) {
          // if the XHR is sync there is no task to schedule, just execute the code.
          return sendNative.apply(self, args);
        } else {
          var _options2 = {
            target: self,
            url: self[XHR_URL],
            isPeriodic: false,
            args: args,
            aborted: false
          };
          var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

          if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
            // xhr request throw error when send
            // we should invoke task instead of leaving a scheduled
            // pending macroTask
            task.invoke();
          }
        }
      };
    });
    var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
      return function (self, args) {
        var task = findPendingTask(self);

        if (task && typeof task.type == 'string') {
          // If the XHR has already completed, do nothing.
          // If the XHR has already been aborted, do nothing.
          // Fix #569, call abort multiple times before done will cause
          // macroTask task count be negative number
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }

          task.zone.cancelTask(task);
        } else if (Zone.current[fetchTaskAborting] === true) {
          // the abort is called from fetch polyfill, we need to call native abort of XHR.
          return abortNative.apply(self, args);
        } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
        // task
        // to cancel. Do nothing.

      };
    });
  }
});

Zone.__load_patch('geolocation', function (global) {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});

Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      var eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(function (eventTask) {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        var PromiseRejectionEvent = global['PromiseRejectionEvent'];

        if (PromiseRejectionEvent) {
          var evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }

  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ 85240);
/* harmony import */ var classlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classlist.js */ 5416);
/* harmony import */ var classlist_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classlist_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es/reflect */ 20333);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zone.js */ 7277);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_3__);
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
* BROWSER POLYFILLS
*/
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
 // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
window.__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
window.__Zone_disable_on_property = true; // disable patch onProperty such as onclick
window.__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
window.__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
// import "echarts/dist/echarts.min.js";
// import "../node_modules/feather-icons/dist/feather.min.js";


/***/ }),

/***/ 80795:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 75725:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 73560:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 35554:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 34466);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 34466:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 80795);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 20333:
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/reflect/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.reflect.apply */ 28115);
__webpack_require__(/*! ../../modules/es.reflect.construct */ 87821);
__webpack_require__(/*! ../../modules/es.reflect.define-property */ 73138);
__webpack_require__(/*! ../../modules/es.reflect.delete-property */ 92786);
__webpack_require__(/*! ../../modules/es.reflect.get */ 72633);
__webpack_require__(/*! ../../modules/es.reflect.get-own-property-descriptor */ 6718);
__webpack_require__(/*! ../../modules/es.reflect.get-prototype-of */ 16989);
__webpack_require__(/*! ../../modules/es.reflect.has */ 80941);
__webpack_require__(/*! ../../modules/es.reflect.is-extensible */ 99062);
__webpack_require__(/*! ../../modules/es.reflect.own-keys */ 4101);
__webpack_require__(/*! ../../modules/es.reflect.prevent-extensions */ 48905);
__webpack_require__(/*! ../../modules/es.reflect.set */ 79421);
__webpack_require__(/*! ../../modules/es.reflect.set-prototype-of */ 10408);
var path = __webpack_require__(/*! ../../internals/path */ 86950);

module.exports = path.Reflect;


/***/ }),

/***/ 97625:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 95143:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 21099:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 70452:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 8643);
var toLength = __webpack_require__(/*! ../internals/to-length */ 15902);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 20222);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 96644:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 30009:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 67791);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 99376);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 93099);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 52975);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ 51335:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 8597);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 815:
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 52975);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 53203);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 53203:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 47012:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 8597);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 85815:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);
var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 71001:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 51163:
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 93099).f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 815);
var redefine = __webpack_require__(/*! ../internals/redefine */ 87763);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 22341);
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ 30009);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 87215);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 8597:
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 39352:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 8597);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 72702:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ 97625);
var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ 73626:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 86950);
var global = __webpack_require__(/*! ../internals/global */ 31864);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 31864:
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();


/***/ }),

/***/ 67791:
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 3536:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 67538:
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 73626);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 27091:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var fails = __webpack_require__(/*! ../internals/fails */ 8597);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 85815);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 56169:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 8597);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 96644);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 87720:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ 59941);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 52493:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 51635);
var global = __webpack_require__(/*! ../internals/global */ 31864);
var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 815);
var objectHas = __webpack_require__(/*! ../internals/has */ 67791);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 42650);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 3536);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 87215:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 8597);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 60726:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 97515:
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 51635:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 87720);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 38724:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 10988);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 71001);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 3536);
var html = __webpack_require__(/*! ../internals/html */ 67538);
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ 85815);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 42650);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 10988:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 52975);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 68032);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 52975:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 27091);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 28495);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 93099:
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 5600);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 53203);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 8643);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 28495);
var has = __webpack_require__(/*! ../internals/has */ 67791);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 27091);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 94564:
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 77759);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 71001);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 77593:
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3963:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 67791);
var toObject = __webpack_require__(/*! ../internals/to-object */ 16174);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 42650);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 51335);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 77759:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 67791);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 8643);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 70452).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 3536);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 68032:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 77759);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 71001);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5600:
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ 91464:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 95143);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 99376:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 73626);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 94564);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 77593);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 86950:
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);

module.exports = global;


/***/ }),

/***/ 87763:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 815);
var has = __webpack_require__(/*! ../internals/has */ 67791);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 22341);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 87720);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 52493);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 95025:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 22341:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 815);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 42650:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 77719);
var uid = __webpack_require__(/*! ../internals/uid */ 94295);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 59941:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31864);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 22341);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 77719:
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 97515);
var store = __webpack_require__(/*! ../internals/shared-store */ 59941);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 20222:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 59463);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 8643:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 56169);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 95025);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 59463:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 15902:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 59463);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 16174:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 95025);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 28495:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 94295:
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 28115:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.apply.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 73626);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 97625);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var fails = __webpack_require__(/*! ../internals/fails */ 8597);

var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  nativeApply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.github.io/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    aFunction(target);
    anObject(argumentsList);
    return nativeApply
      ? nativeApply(target, thisArgument, argumentsList)
      : functionApply.call(target, thisArgument, argumentsList);
  }
});


/***/ }),

/***/ 87821:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 73626);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 97625);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);
var create = __webpack_require__(/*! ../internals/object-create */ 38724);
var bind = __webpack_require__(/*! ../internals/function-bind */ 72702);
var fails = __webpack_require__(/*! ../internals/fails */ 8597);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 73138:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.define-property.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 28495);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 52975);
var fails = __webpack_require__(/*! ../internals/fails */ 8597);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 92786:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.delete-property.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 93099).f;

// `Reflect.deleteProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 6718:
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 47012);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 93099);

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 16989:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 3963);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 51335);

// `Reflect.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ 72633:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var has = __webpack_require__(/*! ../internals/has */ 67791);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 93099);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 3963);

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 80941:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.has.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);

// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 99062:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.is-extensible.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);

var objectIsExtensible = Object.isExtensible;

// `Reflect.isExtensible` method
// https://tc39.github.io/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return objectIsExtensible ? objectIsExtensible(target) : true;
  }
});


/***/ }),

/***/ 4101:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.own-keys.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 99376);

// `Reflect.ownKeys` method
// https://tc39.github.io/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ 48905:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.prevent-extensions.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 73626);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var FREEZING = __webpack_require__(/*! ../internals/freezing */ 39352);

// `Reflect.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 10408:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 95143);
var objectSetPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 91464);

// `Reflect.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 79421:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 51163);
var anObject = __webpack_require__(/*! ../internals/an-object */ 21099);
var isObject = __webpack_require__(/*! ../internals/is-object */ 60726);
var has = __webpack_require__(/*! ../internals/has */ 67791);
var fails = __webpack_require__(/*! ../internals/fails */ 8597);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 52975);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 93099);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 3963);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 53203);

// `Reflect.set` method
// https://tc39.github.io/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (has(ownDescriptor, 'value')) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    return true;
  }
  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var object = definePropertyModule.f({}, 'a', { configurable: true });
  // eslint-disable-next-line no-undef
  return Reflect.set(getPrototypeOf(object), 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);
//# sourceMappingURL=polyfills.js.map