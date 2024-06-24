(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["src_app_views_inbox_inbox_module_ts"],{

/***/ 61282:
/*!******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUILL_CONFIG_TOKEN": function() { return /* binding */ QUILL_CONFIG_TOKEN; },
/* harmony export */   "QuillEditorBase": function() { return /* binding */ QuillEditorBase; },
/* harmony export */   "QuillEditorComponent": function() { return /* binding */ QuillEditorComponent; },
/* harmony export */   "QuillModule": function() { return /* binding */ QuillModule; },
/* harmony export */   "QuillService": function() { return /* binding */ QuillService; },
/* harmony export */   "QuillViewComponent": function() { return /* binding */ QuillViewComponent; },
/* harmony export */   "QuillViewHTMLComponent": function() { return /* binding */ QuillViewHTMLComponent; },
/* harmony export */   "defaultModules": function() { return /* binding */ defaultModules; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 42578);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24751);


















var _c0 = [[["", "quill-editor-toolbar", ""]]];
var _c1 = ["[quill-editor-toolbar]"];
var defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

var getFormat = function getFormat(format, configFormat) {
  var passedFormat = format || configFormat;
  return passedFormat || 'html';
};

var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('config');

var QuillService = /*#__PURE__*/function () {
  function QuillService(injector, config) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, QuillService);

    this.config = config;
    this.count = 0;
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT);

    if (!this.config) {
      this.config = {
        modules: defaultModules
      };
    }
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(QuillService, [{
    key: "getQuill",
    value: function getQuill() {
      var _this = this;

      this.count++;

      if (!this.Quill && this.count === 1) {
        this.$importPromise = new Promise(function (resolve) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
            var _this2 = this;

            var _a, _b, maybePatchedAddEventListener, quillImport;

            return E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
                    // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
                    // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
                    maybePatchedAddEventListener = this.document.addEventListener; // There're 2 types of Angular applications:
                    // 1) zone-full (by default)
                    // 2) zone-less
                    // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
                    // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
                    // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
                    // this means the `zone.js` is not imported.
                    // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
                    // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
                    // eslint-disable-next-line @typescript-eslint/dot-notation

                    this.document.addEventListener = this.document['__zone_symbol__addEventListener'] || this.document.addEventListener;
                    _context.next = 4;
                    return __webpack_require__.e(/*! import() */ "node_modules_quill_dist_quill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 72161, 23));

                  case 4:
                    quillImport = _context.sent;
                    this.document.addEventListener = maybePatchedAddEventListener;
                    this.Quill = quillImport.default ? quillImport.default : quillImport; // Only register custom options and modules once

                    (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                      var newCustomOption = _this2.Quill.import(customOption.import);

                      newCustomOption.whitelist = customOption.whitelist;

                      _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                    });
                    (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                      var implementation = _ref.implementation,
                          path = _ref.path;

                      _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                    });
                    resolve(this.Quill);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      return this.$importPromise;
    }
  }]);

  return QuillService;
}();

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](QUILL_CONFIG_TOKEN));
};

QuillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  factory: function QuillService_Factory() {
    return new QuillService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.INJECTOR), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](QUILL_CONFIG_TOKEN));
  },
  token: QuillService,
  providedIn: "root"
});

QuillService.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [QUILL_CONFIG_TOKEN]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


var QuillEditorBase = /*#__PURE__*/function () {
  function QuillEditorBase(injector, elementRef, domSanitizer, platformId, renderer, zone, service) {
    var _this3 = this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, QuillEditorBase);

    this.elementRef = elementRef;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.sanitize = false;
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */

    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit

    this.subscription = null;

    this.valueGetter = function (quillEditor, editorElement) {
      var html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = _this3.defaultEmptyValue;
      }

      var modelValue = html;
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'html') {
        if (_this3.sanitize) {
          value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_7__.SecurityContext.HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = function (range, oldRange, source) {
      var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

      if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
        return;
      }

      _this3.zone.run(function () {
        if (range === null) {
          _this3.onBlur.emit({
            editor: _this3.quillEditor,
            source: source
          });
        } else if (oldRange === null) {
          _this3.onFocus.emit({
            editor: _this3.quillEditor,
            source: source
          });
        }

        _this3.onSelectionChanged.emit({
          editor: _this3.quillEditor,
          oldRange: oldRange,
          range: range,
          source: source
        });

        if (shouldTriggerOnModelTouched) {
          _this3.onModelTouched();
        }
      });
    };

    this.textChangeHandler = function (delta, oldDelta, source) {
      // only emit changes emitted by user interactions
      var text = _this3.quillEditor.getText();

      var content = _this3.quillEditor.getContents();

      var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = _this3.defaultEmptyValue;
      }

      var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
      var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

      if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
        return;
      }

      _this3.zone.run(function () {
        if (shouldTriggerOnModelChange) {
          _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
        }

        _this3.onContentChanged.emit({
          content: content,
          delta: delta,
          editor: _this3.quillEditor,
          html: html,
          oldDelta: oldDelta,
          source: source,
          text: text
        });
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = function (event, current, old, source) {
      // only emit changes when there's any listener
      if (!_this3.onEditorChanged.observers.length) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        var text = _this3.quillEditor.getText();

        var content = _this3.quillEditor.getContents();

        var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = _this3.defaultEmptyValue;
        }

        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            content: content,
            delta: current,
            editor: _this3.quillEditor,
            event: event,
            html: html,
            oldDelta: old,
            source: source,
            text: text
          });
        });
      } else {
        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            editor: _this3.quillEditor,
            event: event,
            oldRange: old,
            range: current,
            source: source
          });
        });
      }
    };

    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(QuillEditorBase, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
        var _this4 = this;

        var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, defaultEmptyValue, scrollingContainer, formats, format, newValue;
        return E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformServer)(this.platformId)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context2.sent;
                this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                modules = Object.assign({}, this.modules || this.service.config.modules);

                if (toolbarElem) {
                  modules.toolbar = toolbarElem;
                } else if (modules.toolbar === undefined) {
                  modules.toolbar = defaultModules.toolbar;
                }

                placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                if (placeholder === undefined) {
                  placeholder = 'Insert text here ...';
                }

                if (this.styles) {
                  Object.keys(this.styles).forEach(function (key) {
                    _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                  });
                }

                if (this.classes) {
                  this.addClasses(this.classes);
                }

                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref2) {
                  var implementation = _ref2.implementation,
                      path = _ref2.path;
                  Quill.register(path, implementation);
                });
                bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                if (!bounds) {
                  bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
                }

                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                readOnly = this.readOnly;

                if (!readOnly && this.readOnly !== false) {
                  readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                }

                defaultEmptyValue = this.defaultEmptyValue;

                if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
                  defaultEmptyValue = this.service.config.defaultEmptyValue;
                }

                scrollingContainer = this.scrollingContainer;

                if (!scrollingContainer && this.scrollingContainer !== null) {
                  scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                this.zone.runOutsideAngular(function () {
                  var _a, _b, _c;

                  _this4.quillEditor = new Quill(_this4.editorElem, {
                    bounds: bounds,
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    placeholder: placeholder,
                    readOnly: readOnly,
                    defaultEmptyValue: defaultEmptyValue,
                    scrollingContainer: scrollingContainer,
                    strict: _this4.strict,
                    theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                  }); // Set optional link placeholder, Quill has no native API for it so using workaround

                  if (_this4.linkPlaceholder) {
                    var tooltip = (_b = (_a = _this4.quillEditor) === null || _a === void 0 ? void 0 : _a.theme) === null || _b === void 0 ? void 0 : _b.tooltip;
                    var input = (_c = tooltip === null || tooltip === void 0 ? void 0 : tooltip.root) === null || _c === void 0 ? void 0 : _c.querySelector('input[data-link]');

                    if (input === null || input === void 0 ? void 0 : input.dataset) {
                      input.dataset.link = _this4.linkPlaceholder;
                    }
                  }
                });

                if (this.content) {
                  format = getFormat(this.format, this.service.config.format);

                  if (format === 'text') {
                    this.quillEditor.setText(this.content, 'silent');
                  } else {
                    newValue = this.valueSetter(this.quillEditor, this.content);
                    this.quillEditor.setContents(newValue, 'silent');
                  }

                  this.quillEditor.getModule('history').clear();
                } // initialize disabled status based on this.disabled as default value


                this.setDisabledState();
                this.addQuillEventListeners(); // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
                // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.

                if (!(!this.onEditorCreated.observers.length && !this.onValidatorChanged)) {
                  _context2.next = 34;
                  break;
                }

                return _context2.abrupt("return");

              case 34:
                // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
                // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
                // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
                requestAnimationFrame(function () {
                  if (_this4.onValidatorChanged) {
                    _this4.onValidatorChanged();
                  }

                  _this4.onEditorCreated.emit(_this4.quillEditor);
                });

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.dispose();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this5 = this;

      if (!this.quillEditor) {
        return;
      }
      /* eslint-disable @typescript-eslint/dot-notation */


      if (changes.readOnly) {
        this.quillEditor.enable(!changes.readOnly.currentValue);
      }

      if (changes.placeholder) {
        this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
      }

      if (changes.defaultEmptyValue) {
        this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
      }

      if (changes.styles) {
        var currentStyling = changes.styles.currentValue;
        var previousStyling = changes.styles.previousValue;

        if (previousStyling) {
          Object.keys(previousStyling).forEach(function (key) {
            _this5.renderer.removeStyle(_this5.editorElem, key);
          });
        }

        if (currentStyling) {
          Object.keys(currentStyling).forEach(function (key) {
            _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
          });
        }
      }

      if (changes.classes) {
        var currentClasses = changes.classes.currentValue;
        var previousClasses = changes.classes.previousValue;

        if (previousClasses) {
          this.removeClasses(previousClasses);
        }

        if (currentClasses) {
          this.addClasses(currentClasses);
        }
      } // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
      // `debounceTime` operator or vice-versa remove it.


      if (changes.debounceTime) {
        this.addQuillEventListeners();
      }
      /* eslint-enable @typescript-eslint/dot-notation */

    }
  }, {
    key: "addClasses",
    value: function addClasses(classList) {
      var _this6 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this6.renderer.addClass(_this6.editorElem, c);
      });
    }
  }, {
    key: "removeClasses",
    value: function removeClasses(classList) {
      var _this7 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this7.renderer.removeClass(_this7.editorElem, c);
      });
    }
  }, {
    key: "writeValue",
    value: function writeValue(currentValue) {
      // optional fix for https://github.com/angular/angular/issues/14988
      if (this.filterNull && currentValue === null) {
        return;
      }

      this.content = currentValue;

      if (!this.quillEditor) {
        return;
      }

      var format = getFormat(this.format, this.service.config.format);
      var newValue = this.valueSetter(this.quillEditor, currentValue);

      if (this.compareValues) {
        var currentEditorValue = this.quillEditor.getContents();

        if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
          return;
        }
      }

      if (currentValue) {
        if (format === 'text') {
          this.quillEditor.setText(currentValue);
        } else {
          this.quillEditor.setContents(newValue);
        }

        return;
      }

      this.quillEditor.setText('');
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState() {
      var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
      // store initial value to set appropriate disabled status after ViewInit
      this.disabled = isDisabled;

      if (this.quillEditor) {
        if (isDisabled) {
          this.quillEditor.disable();
          this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
        } else {
          if (!this.readOnly) {
            this.quillEditor.enable();
          }

          this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        }
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onModelChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this.onValidatorChanged = fn;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.quillEditor) {
        return null;
      }

      var err = {};
      var valid = true;
      var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

      var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

      if (this.minLength && textLength && textLength < this.minLength) {
        err.minLengthError = {
          given: textLength,
          minLength: this.minLength
        };
        valid = false;
      }

      if (this.maxLength && textLength > this.maxLength) {
        err.maxLengthError = {
          given: textLength,
          maxLength: this.maxLength
        };
        valid = false;
      }

      if (this.required && !textLength) {
        err.requiredError = {
          empty: true
        };
        valid = false;
      }

      return valid ? null : err;
    }
  }, {
    key: "addQuillEventListeners",
    value: function addQuillEventListeners() {
      var _this8 = this;

      this.dispose(); // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
      // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
      // `zone.run` when we emit an event to the parent component.

      this.zone.runOutsideAngular(function () {
        _this8.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();

        _this8.subscription.add( // mark model as touched if editor lost focus
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(_this8.quillEditor, 'selection-change').subscribe(function (_ref3) {
          var _ref4 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref3, 3),
              range = _ref4[0],
              oldRange = _ref4[1],
              source = _ref4[2];

          _this8.selectionChangeHandler(range, oldRange, source);
        })); // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
        // will be invoked upon subscription and teardown.


        var textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(_this8.quillEditor, 'text-change');
        var editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(_this8.quillEditor, 'editor-change');

        if (typeof _this8.debounceTime === 'number') {
          textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(_this8.debounceTime));
          editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(_this8.debounceTime));
        }

        _this8.subscription.add( // update model if text changes
        textChange$.subscribe(function (_ref5) {
          var _ref6 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref5, 3),
              delta = _ref6[0],
              oldDelta = _ref6[1],
              source = _ref6[2];

          _this8.textChangeHandler(delta, oldDelta, source);
        }));

        _this8.subscription.add( // triggered if selection or text changed
        editorChange$.subscribe(function (_ref7) {
          var _ref8 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref7, 4),
              event = _ref8[0],
              current = _ref8[1],
              old = _ref8[2],
              source = _ref8[3];

          _this8.editorChangeHandler(event, current, old, source);
        }));
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.subscription !== null) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
    }
  }], [{
    key: "normalizeClassNames",
    value: function normalizeClassNames(classes) {
      var classList = classes.trim().split(' ');
      return classList.reduce(function (prev, cur) {
        var trimmed = cur.trim();

        if (trimmed) {
          prev.push(trimmed);
        }

        return prev;
      }, []);
    }
  }]);

  return QuillEditorBase;
}();

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    required: "required",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    customOptions: "customOptions",
    customModules: "customModules",
    preserveWhitespace: "preserveWhitespace",
    trimOnValidation: "trimOnValidation",
    compareValues: "compareValues",
    filterNull: "filterNull",
    defaultEmptyValue: "defaultEmptyValue",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter",
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    formats: "formats",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    trackChanges: "trackChanges",
    classes: "classes",
    linkPlaceholder: "linkPlaceholder",
    debounceTime: "debounceTime"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

QuillEditorBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: QuillService
  }];
};

QuillEditorBase.propDecorators = {
  format: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  theme: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  modules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  debug: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  readOnly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  maxLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  minLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  formats: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  customToolbarPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  sanitize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  styles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  strict: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  scrollingContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  bounds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  customOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  customModules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  trackChanges: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  preserveWhitespace: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  classes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  trimOnValidation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  linkPlaceholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  compareValues: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  filterNull: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  debounceTime: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  defaultEmptyValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  onEditorCreated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  onEditorChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  onContentChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  onSelectionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  valueGetter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  valueSetter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: QuillService
    }];
  }, {
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(QuillEditorComponent, _QuillEditorBase);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(QuillEditorComponent);

  function QuillEditorComponent(injector, elementRef, domSanitizer, platformId, renderer, zone, service) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, QuillEditorComponent);

    return _super.call(this, injector, elementRef, domSanitizer, platformId, renderer, zone, service);
  }

  return QuillEditorComponent;
}(QuillEditorBase);

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
      return QuillEditorComponent;
    })
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALIDATORS,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
      return QuillEditorComponent;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

QuillEditorComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef]
    }]
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone]
    }]
  }, {
    type: QuillService,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [QuillService]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
          return QuillEditorComponent;
        })
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function () {
          return QuillEditorComponent;
        })
      }],
      selector: 'quill-editor',
      template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [QuillService]
      }]
    }];
  }, null);
})();

var QuillViewHTMLComponent = /*#__PURE__*/function () {
  function QuillViewHTMLComponent(sanitizer, service) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, QuillViewHTMLComponent);

    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.sanitize = false;
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(QuillViewHTMLComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.theme) {
        var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
        this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
      } else if (!this.theme) {
        var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

        this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
      }

      if (changes.content) {
        var content = changes.content.currentValue;
        this.innerHTML = this.sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
      }
    }
  }]);

  return QuillViewHTMLComponent;
}();

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    sanitize: "sanitize",
    theme: "theme"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
  styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
  encapsulation: 2
});

QuillViewHTMLComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer]
    }]
  }, {
    type: QuillService
  }];
};

QuillViewHTMLComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  theme: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  sanitize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
      styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

var QuillViewComponent = /*#__PURE__*/function () {
  function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
    var _this9 = this;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, QuillViewComponent);

    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.sanitize = false;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this9.format, _this9.service.config.format);
      var content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          if (_this9.sanitize) {
            value = _this9.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_7__.SecurityContext.HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(QuillViewComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this.quillEditor) {
        return;
      }

      if (changes.content) {
        this.valueSetter(this.quillEditor, changes.content.currentValue);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee3() {
        var _this10 = this;

        var Quill, modules, debug, formats, theme;
        return E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformServer)(this.platformId)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context3.sent;
                modules = Object.assign({}, this.modules || this.service.config.modules);
                modules.toolbar = false;
                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref9) {
                  var implementation = _ref9.implementation,
                      path = _ref9.path;
                  Quill.register(path, implementation);
                });
                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                this.zone.runOutsideAngular(function () {
                  _this10.quillEditor = new Quill(_this10.editorElem, {
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    readOnly: true,
                    strict: _this10.strict,
                    theme: theme
                  });
                });
                this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                if (this.content) {
                  this.valueSetter(this.quillEditor, this.content);
                } // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
                // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


                if (this.onEditorCreated.observers.length) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("return");

              case 21:
                // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
                // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
                // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
                requestAnimationFrame(function () {
                  _this10.onEditorCreated.emit(_this10.quillEditor);
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return QuillViewComponent;
}();

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID));
};

QuillViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    sanitize: "sanitize",
    strict: "strict",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace",
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    content: "content"
  },
  outputs: {
    onEditorCreated: "onEditorCreated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function QuillViewComponent_Template(rf, ctx) {},
  styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
  encapsulation: 2
});

QuillViewComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: QuillService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
    }]
  }];
};

QuillViewComponent.propDecorators = {
  format: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  theme: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  modules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  debug: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  formats: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  sanitize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  strict: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  customModules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  customOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  preserveWhitespace: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  onEditorCreated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
      selector: 'quill-view',
      template: "\n",
      styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
      }]
    }];
  }, {
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

var QuillModule = /*#__PURE__*/function () {
  function QuillModule() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, QuillModule);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(QuillModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: QuillModule,
        providers: [{
          provide: QUILL_CONFIG_TOKEN,
          useValue: config
        }]
      };
    }
  }]);

  return QuillModule;
}();

QuillModule.ɵfac = function QuillModule_Factory(t) {
  return new (t || QuillModule)();
};

QuillModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [QuillService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
      providers: [QuillService]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](QuillModule, {
    declarations: function declarations() {
      return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule];
    },
    exports: function exports() {
      return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
    }
  });
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-quill.js.map

/***/ }),

/***/ 22633:
/*!************************************************************************!*\
  !*** ./src/app/views/inbox/compose-dialog/compose-dialog.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeDialogComponent": function() { return /* binding */ ComposeDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ 61282);



var ComposeDialogComponent = /** @class */ (function () {
    function ComposeDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ComposeDialogComponent.prototype.ngOnInit = function () {
    };
    ComposeDialogComponent.ɵfac = function ComposeDialogComponent_Factory(t) { return new (t || ComposeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
    ComposeDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComposeDialogComponent, selectors: [["app-compose-dialog"]], decls: 16, vars: 0, consts: [[1, "p-3"], [1, "form-group"], ["type", "email", "placeholder", "Email", 1, "form-control", "form-control-rounded"], ["type", "text", "placeholder", "Subject", 1, "form-control", "form-control-rounded"], [1, "mb-3"], [1, "rounded"], [1, "row"], [1, "flex-grow-1"], [1, "col-md-2"], [1, "btn", "btn-rounded", "btn-primary", "btn-block", "mb-2"], [1, "btn", "btn-rounded", "btn-light", "btn-block", 3, "click"]], template: function ComposeDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "quill-editor", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComposeDialogComponent_Template_button_click_14_listener() { return ctx.activeModal.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [ngx_quill__WEBPACK_IMPORTED_MODULE_2__.QuillEditorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb3NlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ComposeDialogComponent;
}());



/***/ }),

/***/ 32206:
/*!*****************************************************!*\
  !*** ./src/app/views/inbox/inbox-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxRoutingModule": function() { return /* binding */ InboxRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/messages.component */ 48775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);




var routes = [
    {
        path: '',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule.ɵfac = function InboxRoutingModule_Factory(t) { return new (t || InboxRoutingModule)(); };
    InboxRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InboxRoutingModule });
    InboxRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return InboxRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 72825:
/*!*********************************************!*\
  !*** ./src/app/views/inbox/inbox.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxModule": function() { return /* binding */ InboxModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-routing.module */ 32206);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/messages.component */ 48775);
/* harmony import */ var _compose_dialog_compose_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose-dialog/compose-dialog.component */ 22633);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ 61282);
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ 72747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 74788);









var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule.ɵfac = function InboxModule_Factory(t) { return new (t || InboxModule)(); };
    InboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InboxModule });
    InboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
                ngx_quill__WEBPACK_IMPORTED_MODULE_8__.QuillModule,
                src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectivesModule,
                _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxRoutingModule
            ]] });
    return InboxModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InboxModule, { declarations: [_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__.MessagesComponent, _compose_dialog_compose_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ComposeDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
        ngx_quill__WEBPACK_IMPORTED_MODULE_8__.QuillModule,
        src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectivesModule,
        _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxRoutingModule] }); })();


/***/ }),

/***/ 48775:
/*!************************************************************!*\
  !*** ./src/app/views/inbox/messages/messages.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": function() { return /* binding */ MessagesComponent; }
/* harmony export */ });
/* harmony import */ var _compose_dialog_compose_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compose-dialog/compose-dialog.component */ 22633);
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ 7433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ 38661);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/sidebar.directive */ 47396);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 12057);








function MessagesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
var _c0 = function () { return { suppressScrollX: true }; };
function MessagesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.selected == null ? null : ctx_r1.selected.sender == null ? null : ctx_r1.selected.sender.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selected == null ? null : ctx_r1.selected.sender == null ? null : ctx_r1.selected.sender.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 6, ctx_r1.selected == null ? null : ctx_r1.selected.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selected == null ? null : ctx_r1.selected.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.selected == null ? null : ctx_r1.selected.message, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
var _c1 = function () { return { scale: ".2", delay: "400ms", duration: "400ms" }; };
var _c2 = function (a1) { return { value: "*", params: a1 }; };
var _c3 = function () { return { y: "120px", delay: "600ms", duration: "400ms" }; };
function MessagesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Inbox App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c3)));
} }
function MessagesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_17_Template_div_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); var m_r4 = restoredCtx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.select(m_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var m_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", m_r4.sender.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](m_r4.sender.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](m_r4.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 4, m_r4.date));
} }
var _c4 = function () { return { suppressScrollY: true }; };
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(dl, modalService) {
        this.dl = dl;
        this.modalService = modalService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.mails$ = this.dl.getMails();
    };
    MessagesComponent.prototype.select = function (mail) {
        this.selected = mail;
    };
    MessagesComponent.prototype.openComposeModal = function () {
        this.modalService.open(_compose_dialog_compose_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ComposeDialogComponent, { size: 'lg', centered: true });
    };
    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
    MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 47, vars: 10, consts: [["appSidebarContainer", "", 1, "inbox-main-sidebar-container"], ["appSidebarContent", "", 1, "inbox-main-content"], ["appSidebarContainer", "", 1, "inbox-secondary-sidebar-container", "box-shadow-1"], ["appSidebarContent", ""], [1, "inbox-secondary-sidebar-content", "position-relative", 2, "min-height", "500px"], [1, "inbox-topbar", "box-shadow-1", "pl-3", "rtl-ps-none", 3, "perfectScrollbar"], ["appSidebarToggler", "inbox-main-sidebar", 1, "link-icon", "d-md-none"], [1, "icon-regular", "i-Arrow-Turn-Left"], ["appSidebarToggler", "inbox-secondary-sidebar", 1, "link-icon", "mr-3", "d-md-none"], [1, "icon-regular", "mr-1", "i-Left-3"], ["class", "d-flex", 4, "ngIf"], ["class", "inbox-details rtl-ps-none", 3, "perfectScrollbar", 4, "ngIf"], ["class", "app-inro-circle inbox-intro", 4, "ngIf"], ["appSidebar", "inbox-secondary-sidebar", 1, "inbox-secondary-sidebar", "rtl-ps-none", 3, "perfectScrollbar"], ["appSidebarToggler", "inbox-secondary-sidebar", 1, "sidebar-close", "i-Close"], ["class", "mail-item", 3, "click", 4, "ngFor", "ngForOf"], ["appSidebar", "inbox-main-sidebar", 1, "inbox-main-sidebar"], [1, "pt-3", "pr-3", "pb-3"], ["appSidebarToggler", "inbox-main-sidebar", 1, "sidebar-close", "i-Close"], [1, "btn", "btn-rounded", "btn-primary", "btn-block", "mb-4", 3, "click"], [1, "text-muted", "mb-2"], [1, "inbox-main-nav"], ["href", "", 1, "active"], [1, "icon-regular", "i-Mail-2"], ["href", ""], [1, "icon-regular", "i-Mail-Outbox"], [1, "icon-regular", "i-Mail-Favorite"], [1, "icon-regular", "i-Folder-Trash"], [1, "icon-regular", "i-Spam-Mail"], [1, "d-flex"], ["href", "", 1, "link-icon", "mr-3"], [1, "icon-regular", "i-Mail-Reply"], [1, "icon-regular", "i-Mail-Reply-All"], [1, "inbox-details", "rtl-ps-none", 3, "perfectScrollbar"], [1, "row", "no-gutters"], [1, "mr-2", 2, "width", "36px"], ["alt", "", 1, "rounded-circle", 3, "src"], [1, "col-xs-12"], [1, "m-0"], [1, "text-12", "text-muted"], [1, "mb-3"], [3, "innerHTML"], [1, "app-inro-circle", "inbox-intro"], [1, "border", "rounded-circle", "big-bubble"], [1, "i-Email"], [1, "text-16"], [1, "mail-item", 3, "click"], [1, "avatar"], ["alt", "", 3, "src"], [1, "col-xs-6", "details"], [1, "name", "text-muted"], [1, "col-xs-3", "date"], [1, "text-muted"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Inbox ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MessagesComponent_div_12_Template, 10, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MessagesComponent_div_13_Template, 13, 9, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MessagesComponent_div_14_Template, 5, 8, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MessagesComponent_div_17_Template, 12, 6, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_Template_button_click_22_listener() { return ctx.openComposeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Compose");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Browse");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Inbox (2)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Sent");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Starred");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Trash");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Spam");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 6, ctx.mails$));
        } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__.SidebarContainerDirective, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__.SidebarContentDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__.SidebarTogglerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__.SidebarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__.SharedAnimations] } });
    return MessagesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_views_inbox_inbox_module_ts.js.map