(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["src_app_views_forms_forms_module_ts"],{

/***/ 41120:
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var core_1 = __webpack_require__(/*! @angular/core */ 74788);

var forms_1 = __webpack_require__(/*! @angular/forms */ 24751);

var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 91211);

var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ 42775);

var ɵngcc0 = __webpack_require__(/*! @angular/core */ 74788);

var TextMaskConfig = function () {
  function TextMaskConfig() {}

  return TextMaskConfig;
}();

exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
  provide: forms_1.NG_VALUE_ACCESSOR,
  useExisting: core_1.forwardRef(function () {
    return MaskedInputDirective;
  }),
  multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */

function _isAndroid() {
  var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}

var MaskedInputDirective = function () {
  function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._compositionMode = _compositionMode;
    this.textMaskConfig = {
      mask: [],
      guide: true,
      placeholderChar: '_',
      pipe: undefined,
      keepCharPositions: false
    };

    this.onChange = function (_) {};

    this.onTouched = function () {};
    /** Whether the user is creating a composition string (IME events). */


    this._composing = false;

    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }

  MaskedInputDirective.prototype.ngOnChanges = function (changes) {
    this._setupMask(true);

    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(this.inputElement.value);
    }
  };

  MaskedInputDirective.prototype.writeValue = function (value) {
    this._setupMask(); // set the initial value for cases where the mask is disabled


    var normalizedValue = value == null ? '' : value;

    this._renderer.setProperty(this.inputElement, 'value', normalizedValue);

    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(value);
    }
  };

  MaskedInputDirective.prototype.registerOnChange = function (fn) {
    this.onChange = fn;
  };

  MaskedInputDirective.prototype.registerOnTouched = function (fn) {
    this.onTouched = fn;
  };

  MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  };

  MaskedInputDirective.prototype._handleInput = function (value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this._setupMask();

      if (this.textMaskInputElement !== undefined) {
        this.textMaskInputElement.update(value); // get the updated value

        value = this.inputElement.value;
        this.onChange(value);
      }
    }
  };

  MaskedInputDirective.prototype._setupMask = function (create) {
    if (create === void 0) {
      create = false;
    }

    if (!this.inputElement) {
      if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
        // `textMask` directive is used directly on an input element
        this.inputElement = this._elementRef.nativeElement;
      } else {
        // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
        this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
      }
    }

    if (this.inputElement && create) {
      this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({
        inputElement: this.inputElement
      }, this.textMaskConfig));
    }
  };

  MaskedInputDirective.prototype._compositionStart = function () {
    this._composing = true;
  };

  MaskedInputDirective.prototype._compositionEnd = function (value) {
    this._composing = false;
    this._compositionMode && this._handleInput(value);
  };
  /** @nocollapse */


  MaskedInputDirective.ctorParameters = function () {
    return [{
      type: core_1.Renderer2
    }, {
      type: core_1.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: core_1.Optional
      }, {
        type: core_1.Inject,
        args: [forms_1.COMPOSITION_BUFFER_MODE]
      }]
    }];
  };

  MaskedInputDirective.propDecorators = {
    'textMaskConfig': [{
      type: core_1.Input,
      args: ['textMask']
    }]
  };

  MaskedInputDirective.ɵfac = function MaskedInputDirective_Factory(t) {
    return new (t || MaskedInputDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(forms_1.COMPOSITION_BUFFER_MODE, 8));
  };

  MaskedInputDirective.ɵdir = /*@__PURE__*/ɵngcc0.ɵɵdefineDirective({
    type: MaskedInputDirective,
    selectors: [["", "textMask", ""]],
    hostBindings: function MaskedInputDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function MaskedInputDirective_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function MaskedInputDirective_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function MaskedInputDirective_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function MaskedInputDirective_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    inputs: {
      textMaskConfig: ["textMask", "textMaskConfig"]
    },
    exportAs: ["textMask"],
    features: [ɵngcc0.ɵɵProvidersFeature([exports.MASKEDINPUT_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature]
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MaskedInputDirective, [{
      type: core_1.Directive,
      args: [{
        host: {
          '(input)': '_handleInput($event.target.value)',
          '(blur)': 'onTouched()',
          '(compositionstart)': '_compositionStart()',
          '(compositionend)': '_compositionEnd($event.target.value)'
        },
        selector: '[textMask]',
        exportAs: 'textMask',
        providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
      }]
    }], function () {
      return [{
        type: ɵngcc0.Renderer2
      }, {
        type: ɵngcc0.ElementRef
      }, {
        type: undefined,
        decorators: [{
          type: core_1.Optional
        }, {
          type: core_1.Inject,
          args: [forms_1.COMPOSITION_BUFFER_MODE]
        }]
      }];
    }, {
      textMaskConfig: [{
        type: core_1.Input,
        args: ['textMask']
      }]
    });
  })();

  return MaskedInputDirective;
}();

exports.MaskedInputDirective = MaskedInputDirective;

var TextMaskModule = function () {
  function TextMaskModule() {}
  /** @nocollapse */


  TextMaskModule.ctorParameters = function () {
    return [];
  };

  TextMaskModule.ɵfac = function TextMaskModule_Factory(t) {
    return new (t || TextMaskModule)();
  };

  TextMaskModule.ɵmod = /*@__PURE__*/ɵngcc0.ɵɵdefineNgModule({
    type: TextMaskModule
  });
  TextMaskModule.ɵinj = /*@__PURE__*/ɵngcc0.ɵɵdefineInjector({});

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TextMaskModule, [{
      type: core_1.NgModule,
      args: [{
        declarations: [MaskedInputDirective],
        exports: [MaskedInputDirective]
      }]
    }], function () {
      return [];
    }, null);
  })();

  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextMaskModule, {
      declarations: [MaskedInputDirective],
      exports: [MaskedInputDirective]
    });
  })();

  return TextMaskModule;
}();

exports.TextMaskModule = TextMaskModule;

var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ 42775);

exports.conformToMask = textMaskCore_2.conformToMask; //# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ 79869:
/*!******************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/fesm2015/ngx-img-cropper.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounds": function() { return /* binding */ Bounds; },
/* harmony export */   "CornerMarker": function() { return /* binding */ CornerMarker; },
/* harmony export */   "CropPosition": function() { return /* binding */ CropPosition; },
/* harmony export */   "CropService": function() { return /* binding */ CropService; },
/* harmony export */   "CropTouch": function() { return /* binding */ CropTouch; },
/* harmony export */   "CropperDrawSettings": function() { return /* binding */ CropperDrawSettings; },
/* harmony export */   "CropperSettings": function() { return /* binding */ CropperSettings; },
/* harmony export */   "DragMarker": function() { return /* binding */ DragMarker; },
/* harmony export */   "Exif": function() { return /* binding */ Exif; },
/* harmony export */   "Fraction": function() { return /* binding */ Fraction; },
/* harmony export */   "Handle": function() { return /* binding */ Handle; },
/* harmony export */   "ImageCropper": function() { return /* binding */ ImageCropper; },
/* harmony export */   "ImageCropperComponent": function() { return /* binding */ ImageCropperComponent; },
/* harmony export */   "ImageCropperDataShare": function() { return /* binding */ ImageCropperDataShare; },
/* harmony export */   "ImageCropperModel": function() { return /* binding */ ImageCropperModel; },
/* harmony export */   "ImageCropperModule": function() { return /* binding */ ImageCropperModule; },
/* harmony export */   "ImageCropperService": function() { return /* binding */ ImageCropperService; },
/* harmony export */   "Point": function() { return /* binding */ Point; },
/* harmony export */   "PointPool": function() { return /* binding */ PointPool; },
/* harmony export */   "ɵa": function() { return /* binding */ ImageCropperModel; }
/* harmony export */ });
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ 71357);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 72454);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ 51493);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);











var _c0 = ["cropcanvas"];
var _c1 = ["fileInput"];

function ImageCropperComponent_input_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ImageCropperComponent_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r3.fileChangeListener($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

var CropperDrawSettings = function CropperDrawSettings(settings) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CropperDrawSettings);

  this.lineDash = false;
  this.strokeWidth = 1;
  this.strokeColor = 'rgba(255,255,255,1)';
  this.fillColor = 'rgba(255,255,255,1)';
  this.dragIconStrokeWidth = 1;
  this.dragIconStrokeColor = 'rgba(0,0,0,1)';
  this.dragIconFillColor = 'rgba(255,255,255,1)';
  this.backgroundFillColor = 'rgba(0,0,0,0.6)';

  if (typeof settings === 'object') {
    this.lineDash = settings.lineDash || this.lineDash;
    this.strokeWidth = settings.strokeWidth || this.strokeWidth;
    this.fillColor = settings.fillColor || this.fillColor;
    this.strokeColor = settings.strokeColor || this.strokeColor;
    this.dragIconStrokeWidth = settings.dragIconStrokeWidth || this.dragIconStrokeWidth;
    this.dragIconStrokeColor = settings.dragIconStrokeColor || this.dragIconStrokeColor;
    this.dragIconFillColor = settings.dragIconFillColor || this.dragIconFillColor;
    this.backgroundFillColor = settings.backgroundFillColor || this.backgroundFillColor;
  }
};

var CropperSettings = /*#__PURE__*/function () {
  function CropperSettings(settings) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CropperSettings);

    this.canvasWidth = 300;
    this.canvasHeight = 300;
    this.dynamicSizing = false;
    this.width = 200;
    this.height = 200;
    this.minWidth = 50;
    this.minHeight = 50;
    this.minWithRelativeToResolution = true;
    this.croppedWidth = 100;
    this.croppedHeight = 100;
    this.cropperDrawSettings = new CropperDrawSettings();
    this.touchRadius = 20;
    this.noFileInput = false;
    this.markerSizeMultiplier = 1;
    this.centerTouchRadius = 20;
    this.showCenterMarker = true;
    this.allowedFilesRegex = /\.(jpe?g|png|gif|bmp)$/i;
    this.cropOnResize = true;
    this.preserveSize = false;
    this.compressRatio = 1.0; // tslint:disable-next-line:variable-name

    this._rounded = false; // tslint:disable-next-line:variable-name

    this._keepAspect = true;

    if (typeof settings === 'object') {
      Object.assign(this, settings);
    }
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CropperSettings, [{
    key: "rounded",
    get: function get() {
      return this._rounded;
    },
    set: function set(val) {
      this._rounded = val;

      if (val) {
        this._keepAspect = true;
      }
    }
  }, {
    key: "keepAspect",
    get: function get() {
      return this._keepAspect;
    },
    set: function set(val) {
      this._keepAspect = val;

      if (this._rounded === true && this._keepAspect === false) {
        console.error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
        this._keepAspect = true;
      }
    }
  }]);

  return CropperSettings;
}();

var Fraction = /*#__PURE__*/function (_Number) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Fraction, _Number);

  var _super = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Fraction);

  function Fraction() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, Fraction);

    return _super.apply(this, arguments);
  }

  return Fraction;
}( /*#__PURE__*/(0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__.default)(Number));

var Exif = /*#__PURE__*/function () {
  function Exif() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, Exif);

    this.debug = false;
    this.IptcFieldMap = {
      0x78: 'caption',
      0x6e: 'credit',
      0x19: 'keywords',
      0x37: 'dateCreated',
      0x50: 'byline',
      0x55: 'bylineTitle',
      0x7a: 'captionWriter',
      0x69: 'headline',
      0x74: 'copyright',
      0x0f: 'category'
    };
    this.Tags = {
      // version tags
      0x9000: 'ExifVersion',
      0xa000: 'FlashpixVersion',
      // colorspace tags
      0xa001: 'ColorSpace',
      // image configuration
      0xa002: 'PixelXDimension',
      0xa003: 'PixelYDimension',
      0x9101: 'ComponentsConfiguration',
      0x9102: 'CompressedBitsPerPixel',
      // user information
      0x927c: 'MakerNote',
      0x9286: 'UserComment',
      // related file
      0xa004: 'RelatedSoundFile',
      // date and time
      0x9003: 'DateTimeOriginal',
      0x9004: 'DateTimeDigitized',
      0x9290: 'SubsecTime',
      0x9291: 'SubsecTimeOriginal',
      0x9292: 'SubsecTimeDigitized',
      // picture-taking conditions
      0x829a: 'ExposureTime',
      0x829d: 'FNumber',
      0x8822: 'ExposureProgram',
      0x8824: 'SpectralSensitivity',
      0x8827: 'ISOSpeedRatings',
      0x8828: 'OECF',
      0x9201: 'ShutterSpeedValue',
      0x9202: 'ApertureValue',
      0x9203: 'BrightnessValue',
      0x9204: 'ExposureBias',
      0x9205: 'MaxApertureValue',
      0x9206: 'SubjectDistance',
      0x9207: 'MeteringMode',
      0x9208: 'LightSource',
      0x9209: 'Flash',
      0x9214: 'SubjectArea',
      0x920a: 'FocalLength',
      0xa20b: 'FlashEnergy',
      0xa20c: 'SpatialFrequencyResponse',
      0xa20e: 'FocalPlaneXResolution',
      0xa20f: 'FocalPlaneYResolution',
      0xa210: 'FocalPlaneResolutionUnit',
      0xa214: 'SubjectLocation',
      0xa215: 'ExposureIndex',
      0xa217: 'SensingMethod',
      0xa300: 'FileSource',
      0xa301: 'SceneType',
      0xa302: 'CFAPattern',
      0xa401: 'CustomRendered',
      0xa402: 'ExposureMode',
      0xa403: 'WhiteBalance',
      0xa404: 'DigitalZoomRation',
      0xa405: 'FocalLengthIn35mmFilm',
      0xa406: 'SceneCaptureType',
      0xa407: 'GainControl',
      0xa408: 'Contrast',
      0xa409: 'Saturation',
      0xa40a: 'Sharpness',
      0xa40b: 'DeviceSettingDescription',
      0xa40c: 'SubjectDistanceRange',
      // other tags
      0xa005: 'InteroperabilityIFDPointer',
      0xa420: 'ImageUniqueID' // Identifier assigned uniquely to each image

    };
    this.TiffTags = {
      0x0100: 'ImageWidth',
      0x0101: 'ImageHeight',
      0x8769: 'ExifIFDPointer',
      0x8825: 'GPSInfoIFDPointer',
      0xa005: 'InteroperabilityIFDPointer',
      0x0102: 'BitsPerSample',
      0x0103: 'Compression',
      0x0106: 'PhotometricInterpretation',
      0x0112: 'Orientation',
      0x0115: 'SamplesPerPixel',
      0x011c: 'PlanarConfiguration',
      0x0212: 'YCbCrSubSampling',
      0x0213: 'YCbCrPositioning',
      0x011a: 'XResolution',
      0x011b: 'YResolution',
      0x0128: 'ResolutionUnit',
      0x0111: 'StripOffsets',
      0x0116: 'RowsPerStrip',
      0x0117: 'StripByteCounts',
      0x0201: 'JPEGInterchangeFormat',
      0x0202: 'JPEGInterchangeFormatLength',
      0x012d: 'TransferFunction',
      0x013e: 'WhitePoint',
      0x013f: 'PrimaryChromaticities',
      0x0211: 'YCbCrCoefficients',
      0x0214: 'ReferenceBlackWhite',
      0x0132: 'DateTime',
      0x010e: 'ImageDescription',
      0x010f: 'Make',
      0x0110: 'Model',
      0x0131: 'Software',
      0x013b: 'Artist',
      0x8298: 'Copyright'
    };
    this.GPSTags = {
      0x0000: 'GPSVersionID',
      0x0001: 'GPSLatitudeRef',
      0x0002: 'GPSLatitude',
      0x0003: 'GPSLongitudeRef',
      0x0004: 'GPSLongitude',
      0x0005: 'GPSAltitudeRef',
      0x0006: 'GPSAltitude',
      0x0007: 'GPSTimeStamp',
      0x0008: 'GPSSatellites',
      0x0009: 'GPSStatus',
      0x000a: 'GPSMeasureMode',
      0x000b: 'GPSDOP',
      0x000c: 'GPSSpeedRef',
      0x000d: 'GPSSpeed',
      0x000e: 'GPSTrackRef',
      0x000f: 'GPSTrack',
      0x0010: 'GPSImgDirectionRef',
      0x0011: 'GPSImgDirection',
      0x0012: 'GPSMapDatum',
      0x0013: 'GPSDestLatitudeRef',
      0x0014: 'GPSDestLatitude',
      0x0015: 'GPSDestLongitudeRef',
      0x0016: 'GPSDestLongitude',
      0x0017: 'GPSDestBearingRef',
      0x0018: 'GPSDestBearing',
      0x0019: 'GPSDestDistanceRef',
      0x001a: 'GPSDestDistance',
      0x001b: 'GPSProcessingMethod',
      0x001c: 'GPSAreaInformation',
      0x001d: 'GPSDateStamp',
      0x001e: 'GPSDifferential'
    };
    this.StringValues = {
      ExposureProgram: {
        0: 'Not defined',
        1: 'Manual',
        2: 'Normal program',
        3: 'Aperture priority',
        4: 'Shutter priority',
        5: 'Creative program',
        6: 'Action program',
        7: 'Portrait mode',
        8: 'Landscape mode'
      },
      MeteringMode: {
        0: 'Unknown',
        1: 'Average',
        2: 'CenterWeightedAverage',
        3: 'Spot',
        4: 'MultiSpot',
        5: 'Pattern',
        6: 'Partial',
        255: 'Other'
      },
      LightSource: {
        0: 'Unknown',
        1: 'Daylight',
        2: 'Fluorescent',
        3: 'Tungsten (incandescent light)',
        4: 'Flash',
        9: 'Fine weather',
        10: 'Cloudy weather',
        11: 'Shade',
        12: 'Daylight fluorescent (D 5700 - 7100K)',
        13: 'Day white fluorescent (N 4600 - 5400K)',
        14: 'Cool white fluorescent (W 3900 - 4500K)',
        15: 'White fluorescent (WW 3200 - 3700K)',
        17: 'Standard light A',
        18: 'Standard light B',
        19: 'Standard light C',
        20: 'D55',
        21: 'D65',
        22: 'D75',
        23: 'D50',
        24: 'ISO studio tungsten',
        255: 'Other'
      },
      Flash: {
        0x0000: 'Flash did not fire',
        0x0001: 'Flash fired',
        0x0005: 'Strobe return light not detected',
        0x0007: 'Strobe return light detected',
        0x0009: 'Flash fired, compulsory flash mode',
        0x000d: 'Flash fired, compulsory flash mode, return light not detected',
        0x000f: 'Flash fired, compulsory flash mode, return light detected',
        0x0010: 'Flash did not fire, compulsory flash mode',
        0x0018: 'Flash did not fire, auto mode',
        0x0019: 'Flash fired, auto mode',
        0x001d: 'Flash fired, auto mode, return light not detected',
        0x001f: 'Flash fired, auto mode, return light detected',
        0x0020: 'No flash function',
        0x0041: 'Flash fired, red-eye reduction mode',
        0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
        0x0047: 'Flash fired, red-eye reduction mode, return light detected',
        0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
        0x004d: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
        0x004f: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
        0x0059: 'Flash fired, auto mode, red-eye reduction mode',
        0x005d: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
        0x005f: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
      },
      SensingMethod: {
        1: 'Not defined',
        2: 'One-chip color area sensor',
        3: 'Two-chip color area sensor',
        4: 'Three-chip color area sensor',
        5: 'Color sequential area sensor',
        7: 'Trilinear sensor',
        8: 'Color sequential linear sensor'
      },
      SceneCaptureType: {
        0: 'Standard',
        1: 'Landscape',
        2: 'Portrait',
        3: 'Night scene'
      },
      SceneType: {
        1: 'Directly photographed'
      },
      CustomRendered: {
        0: 'Normal process',
        1: 'Custom process'
      },
      WhiteBalance: {
        0: 'Auto white balance',
        1: 'Manual white balance'
      },
      GainControl: {
        0: 'None',
        1: 'Low gain up',
        2: 'High gain up',
        3: 'Low gain down',
        4: 'High gain down'
      },
      Contrast: {
        0: 'Normal',
        1: 'Soft',
        2: 'Hard'
      },
      Saturation: {
        0: 'Normal',
        1: 'Low saturation',
        2: 'High saturation'
      },
      Sharpness: {
        0: 'Normal',
        1: 'Soft',
        2: 'Hard'
      },
      SubjectDistanceRange: {
        0: 'Unknown',
        1: 'Macro',
        2: 'Close view',
        3: 'Distant view'
      },
      FileSource: {
        3: 'DSC'
      },
      Components: {
        0: '',
        1: 'Y',
        2: 'Cb',
        3: 'Cr',
        4: 'R',
        5: 'G',
        6: 'B'
      }
    };
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Exif, [{
    key: "addEvent",
    value: function addEvent(element, event, handler) {
      if (element.addEventListener) {
        element.addEventListener(event, handler, false);
      } else {
        // Hello, IE!
        if (element.attachEvent) {
          element.attachEvent('on' + event, handler);
        }
      }
    }
  }, {
    key: "imageHasData",
    value: function imageHasData(img) {
      return !!img.exifdata;
    }
  }, {
    key: "base64ToArrayBuffer",
    value: function base64ToArrayBuffer(base64) {
      base64 = base64.replace(/^data:([^;]+);base64,/gim, '');
      var binary = atob(base64);
      var len = binary.length;
      var buffer = new ArrayBuffer(len);
      var view = new Uint8Array(buffer);

      for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
      }

      return buffer;
    }
  }, {
    key: "objectURLToBlob",
    value: function objectURLToBlob(url, callback) {
      var http = new XMLHttpRequest();
      http.open('GET', url, true);
      http.responseType = 'blob';

      http.onload = function () {
        if (http.status === 200 || http.status === 0) {
          callback(http.response);
        }
      };

      http.send();
    }
  }, {
    key: "getImageData",
    value: function getImageData(img, callback) {
      var _this = this;

      var handleBinaryFile = function handleBinaryFile(binFile) {
        var data = _this.findEXIFinJPEG(binFile);

        var iptcdata = _this.findIPTCinJPEG(binFile);

        img.exifdata = data || {};
        img.iptcdata = iptcdata || {};

        if (callback) {
          callback.call(img);
        }
      };

      if ('src' in img && img.src) {
        if (/^data:/i.test(img.src)) {
          // Data URI
          var arrayBuffer = this.base64ToArrayBuffer(img.src);
          handleBinaryFile(arrayBuffer);
        } else {
          if (/^blob:/i.test(img.src)) {
            // Object URL
            var fileReader = new FileReader();

            fileReader.onload = function (e) {
              handleBinaryFile(e.target.result);
            };

            this.objectURLToBlob(img.src, function (blob) {
              fileReader.readAsArrayBuffer(blob);
            });
          } else {
            var http = new XMLHttpRequest();

            http.onload = function () {
              if (http.status === 200 || http.status === 0) {
                handleBinaryFile(http.response);
              } else {
                throw new Error('Could not load image');
              }
            };

            http.open('GET', img.src, true);
            http.responseType = 'arraybuffer';
            http.send(null);
          }
        }
      } else {
        if (FileReader && (img instanceof Blob || img instanceof File)) {
          var _fileReader = new FileReader();

          _fileReader.onload = function (e) {
            _this.log('Got file of length ' + e.target.result.byteLength);

            handleBinaryFile(e.target.result);
          };

          _fileReader.readAsArrayBuffer(img);
        }
      }
    }
  }, {
    key: "findEXIFinJPEG",
    value: function findEXIFinJPEG(file) {
      var dataView = new DataView(file);
      this.log('Got file of length ' + file.byteLength);

      if (dataView.getUint8(0) !== 0xff || dataView.getUint8(1) !== 0xd8) {
        this.log('Not a valid JPEG');
        return false; // not a valid jpeg
      }

      var offset = 2;
      var length = file.byteLength;
      var marker;

      while (offset < length) {
        if (dataView.getUint8(offset) !== 0xff) {
          this.log('Not a valid marker at offset ' + offset + ', found: ' + dataView.getUint8(offset));
          return false; // not a valid marker, something is wrong
        }

        marker = dataView.getUint8(offset + 1);
        this.log(marker); // we could implement handling for other markers here,
        // but we're only looking for 0xFFE1 for EXIF data

        if (marker === 225) {
          this.log('Found 0xFFE1 marker');
          return this.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
          // offset += 2 + file.getShortAt(offset+2, true);
        } else {
          offset += 2 + dataView.getUint16(offset + 2);
        }
      }
    }
  }, {
    key: "findIPTCinJPEG",
    value: function findIPTCinJPEG(file) {
      var dataView = new DataView(file);
      this.log('Got file of length ' + file.byteLength);

      if (dataView.getUint8(0) !== 0xff || dataView.getUint8(1) !== 0xd8) {
        this.log('Not a valid JPEG');
        return false; // not a valid jpeg
      }

      var offset = 2;
      var length = file.byteLength; // tslint:disable-next-line:variable-name

      var isFieldSegmentStart = function isFieldSegmentStart(_dataView, _offset) {
        return _dataView.getUint8(_offset) === 0x38 && _dataView.getUint8(_offset + 1) === 0x42 && _dataView.getUint8(_offset + 2) === 0x49 && _dataView.getUint8(_offset + 3) === 0x4d && _dataView.getUint8(_offset + 4) === 0x04 && _dataView.getUint8(_offset + 5) === 0x04;
      };

      while (offset < length) {
        if (isFieldSegmentStart(dataView, offset)) {
          // Get the length of the name header (which is padded to an even number of bytes)
          var nameHeaderLength = dataView.getUint8(offset + 7);

          if (nameHeaderLength % 2 !== 0) {
            nameHeaderLength += 1;
          } // Check for pre photoshop 6 format


          if (nameHeaderLength === 0) {
            // Always 4
            nameHeaderLength = 4;
          }

          var startOffset = offset + 8 + nameHeaderLength;
          var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
          return this.readIPTCData(file, startOffset, sectionLength);
        } // Not the marker, continue searching


        offset++;
      }
    }
  }, {
    key: "readIPTCData",
    value: function readIPTCData(file, startOffset, sectionLength) {
      var dataView = new DataView(file);
      var data = {};
      var fieldValue;
      var fieldName;
      var dataSize;
      var segmentType;
      var segmentSize;
      var segmentStartPos = startOffset;

      while (segmentStartPos < startOffset + sectionLength) {
        if (dataView.getUint8(segmentStartPos) === 0x1c && dataView.getUint8(segmentStartPos + 1) === 0x02) {
          segmentType = dataView.getUint8(segmentStartPos + 2);

          if (segmentType in this.IptcFieldMap) {
            dataSize = dataView.getInt16(segmentStartPos + 3);
            segmentSize = dataSize + 5;
            fieldName = this.IptcFieldMap[segmentType];
            fieldValue = this.getStringFromDB(dataView, segmentStartPos + 5, dataSize); // Check if we already stored a value with this name

            if (data.hasOwnProperty(fieldName)) {
              // Value already stored with this name, create multivalue field
              if (data[fieldName] instanceof Array) {
                data[fieldName].push(fieldValue);
              } else {
                data[fieldName] = [data[fieldName], fieldValue];
              }
            } else {
              data[fieldName] = fieldValue;
            }
          }
        }

        segmentStartPos++;
      }

      return data;
    }
  }, {
    key: "readTags",
    value: function readTags(file, tiffStart, dirStart, strings, bigEnd) {
      var entries = file.getUint16(dirStart, !bigEnd);
      var tags = {};
      var entryOffset;
      var tag;

      for (var i = 0; i < entries; i++) {
        entryOffset = dirStart + i * 12 + 2;
        tag = strings[file.getUint16(entryOffset, !bigEnd)];

        if (!tag) {
          this.log('Unknown tag: ' + file.getUint16(entryOffset, !bigEnd));
        }

        tags[tag] = this.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
      }

      return tags;
    }
  }, {
    key: "readTagValue",
    value: function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
      var type = file.getUint16(entryOffset + 2, !bigEnd);
      var numValues = file.getUint32(entryOffset + 4, !bigEnd);
      var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
      var offset;
      var vals;
      var val;
      var n;
      var numerator;
      var denominator;

      switch (type) {
        case 1: // byte, 8-bit unsigned int

        case 7:
          // undefined, 8-bit byte, value depending on field
          if (numValues === 1) {
            return file.getUint8(entryOffset + 8, !bigEnd);
          } else {
            offset = numValues > 4 ? valueOffset : entryOffset + 8;
            vals = [];

            for (n = 0; n < numValues; n++) {
              vals[n] = file.getUint8(offset + n);
            }

            return vals;
          }

        case 2:
          // ascii, 8-bit byte
          offset = numValues > 4 ? valueOffset : entryOffset + 8;
          return this.getStringFromDB(file, offset, numValues - 1);

        case 3:
          // short, 16 bit int
          if (numValues === 1) {
            return file.getUint16(entryOffset + 8, !bigEnd);
          } else {
            offset = numValues > 2 ? valueOffset : entryOffset + 8;
            vals = [];

            for (n = 0; n < numValues; n++) {
              vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
            }

            return vals;
          }

        case 4:
          // long, 32 bit int
          if (numValues === 1) {
            return file.getUint32(entryOffset + 8, !bigEnd);
          } else {
            vals = [];

            for (n = 0; n < numValues; n++) {
              vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
            }

            return vals;
          }

        case 5:
          // rational = two long values, first is numerator, second is denominator
          if (numValues === 1) {
            numerator = file.getUint32(valueOffset, !bigEnd);
            denominator = file.getUint32(valueOffset + 4, !bigEnd);
            val = new Fraction(numerator / denominator);
            val.numerator = numerator;
            val.denominator = denominator;
            return val;
          } else {
            vals = [];

            for (n = 0; n < numValues; n++) {
              numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
              denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
              vals[n] = new Fraction(numerator / denominator);
              vals[n].numerator = numerator;
              vals[n].denominator = denominator;
            }

            return vals;
          }

        case 9:
          // slong, 32 bit signed int
          if (numValues === 1) {
            return file.getInt32(entryOffset + 8, !bigEnd);
          } else {
            vals = [];

            for (n = 0; n < numValues; n++) {
              vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
            }

            return vals;
          }

        case 10:
          // signed rational, two slongs, first is numerator, second is denominator
          if (numValues === 1) {
            return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
          } else {
            vals = [];

            for (n = 0; n < numValues; n++) {
              vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
            }

            return vals;
          }

        default:
          break;
      }
    }
  }, {
    key: "getStringFromDB",
    value: function getStringFromDB(buffer, start, length) {
      var outstr = '';

      for (var n = start; n < start + length; n++) {
        outstr += String.fromCharCode(buffer.getUint8(n));
      }

      return outstr;
    }
  }, {
    key: "readEXIFData",
    value: function readEXIFData(file, start) {
      if (this.getStringFromDB(file, start, 4) !== 'Exif') {
        this.log('Not valid EXIF data! ' + this.getStringFromDB(file, start, 4));
        return false;
      }

      var bigEnd;
      var tags;
      var tag;
      var exifData;
      var gpsData;
      var tiffOffset = start + 6; // test for TIFF validity and endianness

      if (file.getUint16(tiffOffset) === 0x4949) {
        bigEnd = false;
      } else {
        if (file.getUint16(tiffOffset) === 0x4d4d) {
          bigEnd = true;
        } else {
          this.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)');
          return false;
        }
      }

      if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002a) {
        this.log('Not valid TIFF data! (no 0x002A)');
        return false;
      }

      var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

      if (firstIFDOffset < 0x00000008) {
        this.log('Not valid TIFF data! (First offset less than 8)', file.getUint32(tiffOffset + 4, !bigEnd));
        return false;
      }

      tags = this.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, this.TiffTags, bigEnd);

      if (tags.ExifIFDPointer) {
        exifData = this.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, this.Tags, bigEnd);

        for (tag in exifData) {
          if ({}.hasOwnProperty.call(exifData, tag)) {
            switch (tag) {
              case 'LightSource':
              case 'Flash':
              case 'MeteringMode':
              case 'ExposureProgram':
              case 'SensingMethod':
              case 'SceneCaptureType':
              case 'SceneType':
              case 'CustomRendered':
              case 'WhiteBalance':
              case 'GainControl':
              case 'Contrast':
              case 'Saturation':
              case 'Sharpness':
              case 'SubjectDistanceRange':
              case 'FileSource':
                exifData[tag] = this.StringValues[tag][exifData[tag]];
                break;

              case 'ExifVersion':
              case 'FlashpixVersion':
                exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                break;

              case 'ComponentsConfiguration':
                var compopents = 'Components';
                exifData[tag] = this.StringValues[compopents][exifData[tag][0]] + this.StringValues[compopents][exifData[tag][1]] + this.StringValues[compopents][exifData[tag][2]] + this.StringValues[compopents][exifData[tag][3]];
                break;

              default:
                break;
            }

            tags[tag] = exifData[tag];
          }
        }
      }

      if (tags.GPSInfoIFDPointer) {
        gpsData = this.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, this.GPSTags, bigEnd);

        for (tag in gpsData) {
          if ({}.hasOwnProperty.call(gpsData, tag)) {
            switch (tag) {
              case 'GPSVersionID':
                gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
                break;

              default:
                break;
            }

            tags[tag] = gpsData[tag];
          }
        }
      }

      return tags;
    } //   get rid of this silly issue

  }, {
    key: "checkImageType",
    value: function checkImageType(img) {
      return img instanceof Image || img instanceof HTMLImageElement;
    }
  }, {
    key: "getData",
    value: function getData(img, callback) {
      if (this.checkImageType(img) && !img.complete) {
        return false;
      }

      if (!this.imageHasData(img)) {
        this.getImageData(img, callback);
      } else {
        if (callback) {
          callback.call(img);
        }
      }

      return true;
    }
  }, {
    key: "getTag",
    value: function getTag(img, tag) {
      if (!this.imageHasData(img)) {
        return;
      }

      return img.exifdata[tag];
    }
  }, {
    key: "getAllTags",
    value: function getAllTags(img) {
      if (!this.imageHasData(img)) {
        return {};
      }

      var a;
      var data = img.exifdata;
      var tags = {};

      for (a in data) {
        if (data.hasOwnProperty(a)) {
          tags[a] = data[a];
        }
      }

      return tags;
    }
  }, {
    key: "pretty",
    value: function pretty(img) {
      if (!this.imageHasData(img)) {
        return '';
      }

      var a;
      var data = img.exifdata;
      var strPretty = '';

      for (a in data) {
        if (data.hasOwnProperty(a)) {
          if (typeof data[a] === 'object') {
            if (data[a] instanceof Number) {
              strPretty += "".concat(a, " : ").concat(data[a], " [").concat(data[a].numerator, "/").concat(data[a].denominator, "]\r\n");
            } else {
              strPretty += "".concat(a, " : [").concat(data[a].length, " values]\r\n");
            }
          } else {
            strPretty += "".concat(a, " : ").concat(data[a], "\r\n");
          }
        }
      }

      return strPretty;
    }
  }, {
    key: "readFromBinaryFile",
    value: function readFromBinaryFile(file) {
      return this.findEXIFinJPEG(file);
    }
  }, {
    key: "log",
    value: function log() {
      if (this.debug) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log(args);
      }
    }
  }]);

  return Exif;
}();

var Point = /*#__PURE__*/function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, Point);

    this.x = x;
    this.y = y;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Point, [{
    key: "next",
    get: function get() {
      return this.myNext;
    },
    set: function set(p) {
      this.myNext = p;
    }
  }, {
    key: "prev",
    get: function get() {
      return this.myPrev;
    },
    set: function set(p) {
      this.myPrev = p;
    }
  }]);

  return Point;
}();

var PointPool = /*#__PURE__*/function () {
  function PointPool() {
    var initialSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, PointPool);

    var prev = this.firstAvailable = new Point();

    for (var i = 1; i < initialSize; i++) {
      var p = new Point();
      prev.next = p;
      prev = p;
    }
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(PointPool, [{
    key: "instance",
    get: function get() {
      return this;
    }
  }, {
    key: "borrow",
    value: function borrow(x, y) {
      if (this.firstAvailable == null) {
        throw new Error('Pool exhausted');
      }

      this.borrowed++;
      var p = this.firstAvailable;
      this.firstAvailable = p.next;
      p.x = x;
      p.y = y;
      return p;
    }
  }, {
    key: "returnPoint",
    value: function returnPoint(p) {
      this.borrowed--;
      p.x = 0;
      p.y = 0;
      p.next = this.firstAvailable;
      this.firstAvailable = p;
    }
  }]);

  return PointPool;
}();

var Bounds = /*#__PURE__*/function () {
  function Bounds(x, y, width, height) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, Bounds);

    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    if (width === void 0) {
      width = 0;
    }

    if (height === void 0) {
      height = 0;
    }

    this.left = x;
    this.right = x + width;
    this.top = y;
    this.bottom = y + height;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Bounds, [{
    key: "width",
    get: function get() {
      return this.right - this.left;
    }
  }, {
    key: "height",
    get: function get() {
      return this.bottom - this.top;
    }
  }, {
    key: "getCentre",
    value: function getCentre() {
      var w = this.width;
      var h = this.height;
      return new PointPool().instance.borrow(this.left + w / 2, this.top + h / 2);
    }
  }]);

  return Bounds;
}();

var Handle = /*#__PURE__*/function () {
  function Handle(x, y, radius, settings) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, Handle);

    this.cropperSettings = new CropperSettings();
    this.over = false;
    this.drag = false;
    this._position = new Point(x, y);
    this.offset = new Point(0, 0);
    this.radius = radius;
    this.cropperSettings = settings;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Handle, [{
    key: "setDrag",
    value: function setDrag(value) {
      this.drag = value;
      this.setOver(value);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {// this should't be empty
    }
  }, {
    key: "setOver",
    value: function setOver(over) {
      this.over = over;
    }
  }, {
    key: "touchInBounds",
    value: function touchInBounds(x, y) {
      return x > this.position.x - this.radius + this.offset.x && x < this.position.x + this.radius + this.offset.x && y > this.position.y - this.radius + this.offset.y && y < this.position.y + this.radius + this.offset.y;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      this._position.x = x;
      this._position.y = y;
    }
  }]);

  return Handle;
}();

var CornerMarker = /*#__PURE__*/function (_Handle) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(CornerMarker, _Handle);

  var _super2 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(CornerMarker);

  function CornerMarker(x, y, radius, cropperSettings) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CornerMarker);

    return _super2.call(this, x, y, radius, cropperSettings);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CornerMarker, [{
    key: "drawCornerBorder",
    value: function drawCornerBorder(ctx) {
      var sideLength = 10;

      if (this.over || this.drag) {
        sideLength = 12;
      }

      var hDirection = this.cropperSettings.markerSizeMultiplier;
      var vDirection = this.cropperSettings.markerSizeMultiplier;

      if (this.horizontalNeighbour.position.x < this.position.x) {
        hDirection = -this.cropperSettings.markerSizeMultiplier;
      }

      if (this.verticalNeighbour.position.y < this.position.y) {
        vDirection = -this.cropperSettings.markerSizeMultiplier;
      }

      ctx.beginPath();

      if (this.cropperSettings.cropperDrawSettings.lineDash) {
        ctx.setLineDash([1, 3]);
      }

      ctx.lineJoin = 'miter';
      ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
      ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y);
      ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y + sideLength * vDirection);
      ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + sideLength * vDirection);
      ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
      ctx.closePath();
      ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
      ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor || 'rgba(255,255,255,.7)';
      ctx.stroke();
    }
  }, {
    key: "drawCornerFill",
    value: function drawCornerFill(ctx) {
      var sideLength = 10;

      if (this.over || this.drag) {
        sideLength = 12;
      }

      var hDirection = this.cropperSettings.markerSizeMultiplier;
      var vDirection = this.cropperSettings.markerSizeMultiplier;

      if (this.horizontalNeighbour.position.x < this.position.x) {
        hDirection = -this.cropperSettings.markerSizeMultiplier;
      }

      if (this.verticalNeighbour.position.y < this.position.y) {
        vDirection = -this.cropperSettings.markerSizeMultiplier;
      }

      if (this.cropperSettings.rounded) {
        var width = this.position.x - this.horizontalNeighbour.position.x;
        var height = this.position.y - this.verticalNeighbour.position.y;
        var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
        var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
        this.offset.x = hDirection > 0 ? offX : -offX;
        this.offset.y = vDirection > 0 ? offY : -offY;
      } else {
        this.offset.x = 0;
        this.offset.y = 0;
      }

      ctx.beginPath();

      if (this.cropperSettings.cropperDrawSettings.lineDash) {
        ctx.setLineDash([1, 3]);
      }

      ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
      ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y);
      ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y + sideLength * vDirection);
      ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + sideLength * vDirection);
      ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
      ctx.closePath();
      ctx.fillStyle = this.cropperSettings.cropperDrawSettings.fillColor || 'rgba(255,255,255,.7)';
      ctx.fill();
    }
  }, {
    key: "moveX",
    value: function moveX(x) {
      this.setPosition(x, this.position.y);
    }
  }, {
    key: "moveY",
    value: function moveY(y) {
      this.setPosition(this.position.x, y);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      this.setPosition(x, y);
      this.verticalNeighbour.moveX(x);
      this.horizontalNeighbour.moveY(y);
    }
  }, {
    key: "addHorizontalNeighbour",
    value: function addHorizontalNeighbour(neighbour) {
      this.horizontalNeighbour = neighbour;
    }
  }, {
    key: "addVerticalNeighbour",
    value: function addVerticalNeighbour(neighbour) {
      this.verticalNeighbour = neighbour;
    }
  }, {
    key: "getHorizontalNeighbour",
    value: function getHorizontalNeighbour() {
      return this.horizontalNeighbour;
    }
  }, {
    key: "getVerticalNeighbour",
    value: function getVerticalNeighbour() {
      return this.verticalNeighbour;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.drawCornerFill(ctx);
      this.drawCornerBorder(ctx);
    }
  }]);

  return CornerMarker;
}(Handle);

var CropTouch = function CropTouch() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CropTouch);

  this.id = id;
  this.x = x;
  this.y = y;
};

var DragMarker = /*#__PURE__*/function (_Handle2) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DragMarker, _Handle2);

  var _super3 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(DragMarker);

  function DragMarker(x, y, radius, cropperSettings) {
    var _this2;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, DragMarker);

    _this2 = _super3.call(this, x, y, radius, cropperSettings);
    _this2.iconPoints = [];
    _this2.scaledIconPoints = [];

    _this2.getDragIconPoints(_this2.iconPoints, 1);

    _this2.getDragIconPoints(_this2.scaledIconPoints, 1.2);

    return _this2;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(DragMarker, [{
    key: "draw",
    value: function draw(ctx) {
      if (this.over || this.drag) {
        this.drawIcon(ctx, this.scaledIconPoints);
      } else {
        this.drawIcon(ctx, this.iconPoints);
      }
    }
  }, {
    key: "getDragIconPoints",
    value: function getDragIconPoints(arr, scale) {
      var maxLength = 17 * scale;
      var arrowWidth = 14 * scale;
      var arrowLength = 8 * scale;
      var connectorThroat = 4 * scale;
      arr.push(new PointPool().instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
      arr.push(new PointPool().instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
      arr.push(new PointPool().instance.borrow(0, maxLength));
      arr.push(new PointPool().instance.borrow(arrowWidth / 2, maxLength - arrowLength));
      arr.push(new PointPool().instance.borrow(connectorThroat / 2, maxLength - arrowLength));
      arr.push(new PointPool().instance.borrow(connectorThroat / 2, connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(maxLength - arrowLength, connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(maxLength - arrowLength, arrowWidth / 2));
      arr.push(new PointPool().instance.borrow(maxLength, 0));
      arr.push(new PointPool().instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
      arr.push(new PointPool().instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(connectorThroat / 2, -connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
      arr.push(new PointPool().instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
      arr.push(new PointPool().instance.borrow(0, -maxLength));
      arr.push(new PointPool().instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
      arr.push(new PointPool().instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
      arr.push(new PointPool().instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
      arr.push(new PointPool().instance.borrow(-maxLength, 0));
      arr.push(new PointPool().instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
      arr.push(new PointPool().instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
      arr.push(new PointPool().instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    }
  }, {
    key: "drawIcon",
    value: function drawIcon(ctx, points) {
      if (this.cropperSettings.showCenterMarker) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);

        var _iterator = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.default)(points),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        ctx.closePath();
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
        ctx.fill();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
        ctx.stroke();
      }
    }
  }, {
    key: "recalculatePosition",
    value: function recalculatePosition(bounds) {
      var c = bounds.getCentre();
      this.setPosition(c.x, c.y);
      new PointPool().instance.returnPoint(c);
    }
  }]);

  return DragMarker;
}(Handle);

var ImageCropperModel = function ImageCropperModel() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, ImageCropperModel);
};

var ImageCropperDataShare = /*#__PURE__*/function () {
  function ImageCropperDataShare() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, ImageCropperDataShare);

    this.share = {};
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(ImageCropperDataShare, [{
    key: "setPressed",
    value: function setPressed(canvas) {
      this.pressed = canvas;
    }
  }, {
    key: "setReleased",
    value: function setReleased(canvas) {
      if (canvas === this.pressed) {//  this.pressed = undefined;
      }
    }
  }, {
    key: "setOver",
    value: function setOver(canvas) {
      this.over = canvas;
    }
  }, {
    key: "setStyle",
    value: function setStyle(canvas, style) {
      if (this.pressed !== undefined) {
        if (this.pressed === canvas) {// TODO: check this
          // angular.element(document.documentElement).css('cursor', style);
        }
      } else {
        if (canvas === this.over) {// TODO: check this
          // angular.element(document.documentElement).css('cursor', style);
        }
      }
    }
  }]);

  return ImageCropperDataShare;
}();

var ImageCropper = /*#__PURE__*/function (_ImageCropperModel) {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ImageCropper, _ImageCropperModel);

  var _super4 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(ImageCropper);

  function ImageCropper(cropperSettings) {
    var _this3;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, ImageCropper);

    _this3 = _super4.call(this);
    _this3.imageCropperDataShare = new ImageCropperDataShare();
    var x = 0;
    var y = 0;
    var width = cropperSettings.width;
    var height = cropperSettings.height;
    var keepAspect = cropperSettings.keepAspect;
    var touchRadius = cropperSettings.touchRadius;
    var centerTouchRadius = cropperSettings.centerTouchRadius;
    var minWidth = cropperSettings.minWidth;
    var minHeight = cropperSettings.minHeight;
    var croppedWidth = cropperSettings.croppedWidth;
    var croppedHeight = cropperSettings.croppedHeight;
    _this3.cropperSettings = cropperSettings;
    _this3.crop = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this3);
    _this3.x = x;
    _this3.y = y;
    _this3.canvasHeight = cropperSettings.canvasHeight;
    _this3.canvasWidth = cropperSettings.canvasWidth;
    _this3.width = width;

    if (width === void 0) {
      _this3.width = 100;
    }

    _this3.height = height;

    if (height === void 0) {
      _this3.height = 50;
    }

    _this3.keepAspect = keepAspect;

    if (keepAspect === void 0) {
      _this3.keepAspect = true;
    }

    _this3.touchRadius = touchRadius;

    if (touchRadius === void 0) {
      _this3.touchRadius = 20;
    }

    _this3.minWidth = minWidth;
    _this3.minHeight = minHeight;
    _this3.aspectRatio = 0;
    _this3.currentDragTouches = [];
    _this3.isMouseDown = false;
    _this3.ratioW = 1;
    _this3.ratioH = 1;
    _this3.fileType = cropperSettings.fileType;
    _this3.imageSet = false;
    _this3.pointPool = new PointPool(200);
    _this3.tl = new CornerMarker(x, y, touchRadius, _this3.cropperSettings);
    _this3.tr = new CornerMarker(x + width, y, touchRadius, _this3.cropperSettings);
    _this3.bl = new CornerMarker(x, y + height, touchRadius, _this3.cropperSettings);
    _this3.br = new CornerMarker(x + width, y + height, touchRadius, _this3.cropperSettings);

    _this3.tl.addHorizontalNeighbour(_this3.tr);

    _this3.tl.addVerticalNeighbour(_this3.bl);

    _this3.tr.addHorizontalNeighbour(_this3.tl);

    _this3.tr.addVerticalNeighbour(_this3.br);

    _this3.bl.addHorizontalNeighbour(_this3.br);

    _this3.bl.addVerticalNeighbour(_this3.tl);

    _this3.br.addHorizontalNeighbour(_this3.bl);

    _this3.br.addVerticalNeighbour(_this3.tr);

    _this3.markers = [_this3.tl, _this3.tr, _this3.bl, _this3.br];
    _this3.center = new DragMarker(x + width / 2, y + height / 2, centerTouchRadius, _this3.cropperSettings);
    _this3.aspectRatio = height / width;
    _this3.croppedImage = new Image();
    _this3.currentlyInteracting = false;
    _this3.cropWidth = croppedWidth;
    _this3.cropHeight = croppedHeight;
    return _this3;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(ImageCropper, [{
    key: "sign",
    value: function sign(x) {
      if (+x === x) {
        return x === 0 ? x : x > 0 ? 1 : -1;
      }

      return NaN;
    }
  }, {
    key: "getMousePos",
    value: function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return new PointPool().instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    }
  }, {
    key: "getTouchPos",
    value: function getTouchPos(canvas, touch) {
      var rect = canvas.getBoundingClientRect();
      return new PointPool().instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    }
  }, {
    key: "detectVerticalSquash",
    value: function detectVerticalSquash(img) {
      var ih = img.height;
      var canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = ih;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var imageData = ctx.getImageData(0, 0, 1, ih);

      if (imageData) {
        var data = imageData.data; // search image edge pixel position in case it is squashed vertically.

        var sy = 0;
        var ey = ih;
        var py = ih;

        while (py > sy) {
          var alpha = data[(py - 1) * 4 + 3];

          if (alpha === 0) {
            ey = py;
          } else {
            sy = py;
          } // tslint:disable-next-line:no-bitwise


          py = ey + sy >> 1;
        }

        var ratio = py / ih;
        return ratio === 0 ? 1 : ratio;
      } else {
        return 1;
      }
    }
  }, {
    key: "getDataUriMimeType",
    value: function getDataUriMimeType(dataUri) {
      // Get a substring because the regex does not perform well on very large strings.
      // Cater for optional charset. Length 50 shoould be enough.
      var dataUriSubstring = dataUri.substring(0, 50);
      var mimeType = 'image/png'; // data-uri scheme
      // data:[<media type>][;charset=<character set>][;base64],<data>

      var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
      var matches = regEx.exec(dataUriSubstring);

      if (matches && matches[2]) {
        mimeType = matches[2];

        if (mimeType === 'image/jpg') {
          mimeType = 'image/jpeg';
        }
      }

      return mimeType;
    }
  }, {
    key: "prepare",
    value: function prepare(canvas) {
      this.buffer = document.createElement('canvas');
      this.cropCanvas = document.createElement('canvas'); // todo get more reliable parent width value.

      var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;

      if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
        this.cropCanvas.width = responsiveWidth;
        this.buffer.width = responsiveWidth;
        canvas.width = responsiveWidth;
      } else {
        this.cropCanvas.width = this.cropWidth;
        this.buffer.width = canvas.width;
      }

      this.cropCanvas.height = this.cropHeight;
      this.buffer.height = canvas.height;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.draw(this.ctx);
    }
  }, {
    key: "updateSettings",
    value: function updateSettings(cropperSettings) {
      this.cropperSettings = cropperSettings;
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas(width, height) {
      var setImage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
      this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;

      if (setImage) {
        this.setImage(this.srcImage);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setImage(undefined);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var bounds = this.getBounds();

      if (this.srcImage) {
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var w = this.canvasWidth;
        var h = this.canvasHeight;

        if (canvasAspect > sourceAspect) {
          w = this.canvasWidth;
          h = this.canvasWidth * sourceAspect;
        } else {
          h = this.canvasHeight;
          w = this.canvasHeight / sourceAspect;
        }

        this.ratioW = w / this.srcImage.width;
        this.ratioH = h / this.srcImage.height;

        if (canvasAspect < sourceAspect) {
          this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
        } else {
          this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
        }

        this.buffer.getContext('2d').drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor;
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.backgroundFillColor;

        if (!this.cropperSettings.rounded) {
          ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
          ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
          ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
        } else {
          ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          ctx.save();
          ctx.beginPath();
          ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.clip();

          if (canvasAspect < sourceAspect) {
            this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
          } else {
            this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
          }

          ctx.restore();
        }

        var marker; // tslint:disable-next-line:prefer-for-of

        for (var i = 0; i < this.markers.length; i++) {
          marker = this.markers[i];
          marker.draw(ctx);
        }

        this.center.draw(ctx);
      } else {
        ctx.fillStyle = 'rgba(192,192,192,1)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }, {
    key: "dragCenter",
    value: function dragCenter(x, y, marker) {
      var bounds = this.getBounds();
      var left = x - bounds.width / 2;
      var right = x + bounds.width / 2;
      var top = y - bounds.height / 2;
      var bottom = y + bounds.height / 2;

      if (right >= this.maxXClamp) {
        x = this.maxXClamp - bounds.width / 2;
      }

      if (left <= this.minXClamp) {
        x = bounds.width / 2 + this.minXClamp;
      }

      if (top < this.minYClamp) {
        y = bounds.height / 2 + this.minYClamp;
      }

      if (bottom >= this.maxYClamp) {
        y = this.maxYClamp - bounds.height / 2;
      }

      this.tl.moveX(x - bounds.width / 2);
      this.tl.moveY(y - bounds.height / 2);
      this.tr.moveX(x + bounds.width / 2);
      this.tr.moveY(y - bounds.height / 2);
      this.bl.moveX(x - bounds.width / 2);
      this.bl.moveY(y + bounds.height / 2);
      this.br.moveX(x + bounds.width / 2);
      this.br.moveY(y + bounds.height / 2);
      marker.setPosition(x, y);
    }
  }, {
    key: "enforceMinSize",
    value: function enforceMinSize(x, y, marker) {
      var xLength = x - marker.getHorizontalNeighbour().position.x;
      var yLength = y - marker.getVerticalNeighbour().position.y;
      var xOver = this.minWidth - Math.abs(xLength);
      var yOver = this.minHeight - Math.abs(yLength);

      if (xLength === 0 || yLength === 0) {
        x = marker.position.x;
        y = marker.position.y;
        return new PointPool().instance.borrow(x, y);
      }

      if (this.keepAspect) {
        if (xOver > 0 && yOver / this.aspectRatio > 0) {
          if (xOver > yOver / this.aspectRatio) {
            if (xLength < 0) {
              x -= xOver;

              if (yLength < 0) {
                y -= xOver * this.aspectRatio;
              } else {
                y += xOver * this.aspectRatio;
              }
            } else {
              x += xOver;

              if (yLength < 0) {
                y -= xOver * this.aspectRatio;
              } else {
                y += xOver * this.aspectRatio;
              }
            }
          } else {
            if (yLength < 0) {
              y -= yOver;

              if (xLength < 0) {
                x -= yOver / this.aspectRatio;
              } else {
                x += yOver / this.aspectRatio;
              }
            } else {
              y += yOver;

              if (xLength < 0) {
                x -= yOver / this.aspectRatio;
              } else {
                x += yOver / this.aspectRatio;
              }
            }
          }
        } else {
          if (xOver > 0) {
            if (xLength < 0) {
              x -= xOver;

              if (yLength < 0) {
                y -= xOver * this.aspectRatio;
              } else {
                y += xOver * this.aspectRatio;
              }
            } else {
              x += xOver;

              if (yLength < 0) {
                y -= xOver * this.aspectRatio;
              } else {
                y += xOver * this.aspectRatio;
              }
            }
          } else {
            if (yOver > 0) {
              if (yLength < 0) {
                y -= yOver;

                if (xLength < 0) {
                  x -= yOver / this.aspectRatio;
                } else {
                  x += yOver / this.aspectRatio;
                }
              } else {
                y += yOver;

                if (xLength < 0) {
                  x -= yOver / this.aspectRatio;
                } else {
                  x += yOver / this.aspectRatio;
                }
              }
            }
          }
        }
      } else {
        if (xOver > 0) {
          if (xLength < 0) {
            x -= xOver;
          } else {
            x += xOver;
          }
        }

        if (yOver > 0) {
          if (yLength < 0) {
            y -= yOver;
          } else {
            y += yOver;
          }
        }
      }

      if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
        x = marker.position.x;
        y = marker.position.y;
      }

      return new PointPool().instance.borrow(x, y);
    }
  }, {
    key: "dragCorner",
    value: function dragCorner(x, y, marker) {
      var iX = 0;
      var iY = 0;
      var ax = 0;
      var ay = 0;
      var newHeight = 0;
      var newWidth = 0;
      var newY = 0;
      var newX = 0;
      var anchorMarker;
      var fold = 0;

      if (this.keepAspect) {
        anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
        ax = anchorMarker.position.x;
        ay = anchorMarker.position.y;

        if (x <= anchorMarker.position.x) {
          if (y <= anchorMarker.position.y) {
            iX = ax - 100 / this.aspectRatio;
            iY = ay - 100 / this.aspectRatio * this.aspectRatio;
            fold = this.getSide(new PointPool().instance.borrow(iX, iY), anchorMarker.position, new PointPool().instance.borrow(x, y));

            if (fold > 0) {
              newHeight = Math.abs(anchorMarker.position.y - y);
              newWidth = newHeight / this.aspectRatio;
              newY = anchorMarker.position.y - newHeight;
              newX = anchorMarker.position.x - newWidth;
              var min = this.enforceMinSize(newX, newY, marker);
              marker.move(min.x, min.y);
              new PointPool().instance.returnPoint(min);
            } else {
              if (fold < 0) {
                newWidth = Math.abs(anchorMarker.position.x - x);
                newHeight = newWidth * this.aspectRatio;
                newY = anchorMarker.position.y - newHeight;
                newX = anchorMarker.position.x - newWidth;

                var _min = this.enforceMinSize(newX, newY, marker);

                marker.move(_min.x, _min.y);
                new PointPool().instance.returnPoint(_min);
              }
            }
          } else {
            iX = ax - 100 / this.aspectRatio;
            iY = ay + 100 / this.aspectRatio * this.aspectRatio;
            fold = this.getSide(new PointPool().instance.borrow(iX, iY), anchorMarker.position, new PointPool().instance.borrow(x, y));

            if (fold > 0) {
              newWidth = Math.abs(anchorMarker.position.x - x);
              newHeight = newWidth * this.aspectRatio;
              newY = anchorMarker.position.y + newHeight;
              newX = anchorMarker.position.x - newWidth;

              var _min2 = this.enforceMinSize(newX, newY, marker);

              marker.move(_min2.x, _min2.y);
              new PointPool().instance.returnPoint(_min2);
            } else {
              if (fold < 0) {
                newHeight = Math.abs(anchorMarker.position.y - y);
                newWidth = newHeight / this.aspectRatio;
                newY = anchorMarker.position.y + newHeight;
                newX = anchorMarker.position.x - newWidth;

                var _min3 = this.enforceMinSize(newX, newY, marker);

                marker.move(_min3.x, _min3.y);
                new PointPool().instance.returnPoint(_min3);
              }
            }
          }
        } else {
          if (y <= anchorMarker.position.y) {
            iX = ax + 100 / this.aspectRatio;
            iY = ay - 100 / this.aspectRatio * this.aspectRatio;
            fold = this.getSide(new PointPool().instance.borrow(iX, iY), anchorMarker.position, new PointPool().instance.borrow(x, y));

            if (fold < 0) {
              newHeight = Math.abs(anchorMarker.position.y - y);
              newWidth = newHeight / this.aspectRatio;
              newY = anchorMarker.position.y - newHeight;
              newX = anchorMarker.position.x + newWidth;

              var _min4 = this.enforceMinSize(newX, newY, marker);

              marker.move(_min4.x, _min4.y);
              new PointPool().instance.returnPoint(_min4);
            } else {
              if (fold > 0) {
                newWidth = Math.abs(anchorMarker.position.x - x);
                newHeight = newWidth * this.aspectRatio;
                newY = anchorMarker.position.y - newHeight;
                newX = anchorMarker.position.x + newWidth;

                var _min5 = this.enforceMinSize(newX, newY, marker);

                marker.move(_min5.x, _min5.y);
                new PointPool().instance.returnPoint(_min5);
              }
            }
          } else {
            iX = ax + 100 / this.aspectRatio;
            iY = ay + 100 / this.aspectRatio * this.aspectRatio;
            fold = this.getSide(new PointPool().instance.borrow(iX, iY), anchorMarker.position, new PointPool().instance.borrow(x, y));

            if (fold < 0) {
              newWidth = Math.abs(anchorMarker.position.x - x);
              newHeight = newWidth * this.aspectRatio;
              newY = anchorMarker.position.y + newHeight;
              newX = anchorMarker.position.x + newWidth;

              var _min6 = this.enforceMinSize(newX, newY, marker);

              marker.move(_min6.x, _min6.y);
              new PointPool().instance.returnPoint(_min6);
            } else {
              if (fold > 0) {
                newHeight = Math.abs(anchorMarker.position.y - y);
                newWidth = newHeight / this.aspectRatio;
                newY = anchorMarker.position.y + newHeight;
                newX = anchorMarker.position.x + newWidth;

                var _min7 = this.enforceMinSize(newX, newY, marker);

                marker.move(_min7.x, _min7.y);
                new PointPool().instance.returnPoint(_min7);
              }
            }
          }
        }
      } else {
        var _min8 = this.enforceMinSize(x, y, marker);

        marker.move(_min8.x, _min8.y);
        new PointPool().instance.returnPoint(_min8);
      }

      this.center.recalculatePosition(this.getBounds());
    }
  }, {
    key: "getSide",
    value: function getSide(a, b, c) {
      var n = this.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)); // TODO move the return of the pools to outside of this function

      new PointPool().instance.returnPoint(a);
      new PointPool().instance.returnPoint(c);
      return n;
    }
  }, {
    key: "handleRelease",
    value: function handleRelease(newCropTouch) {
      if (newCropTouch == null) {
        return;
      }

      var index = 0;

      for (var k = 0; k < this.currentDragTouches.length; k++) {
        if (newCropTouch.id === this.currentDragTouches[k].id) {
          this.currentDragTouches[k].dragHandle.setDrag(false);
          index = k;
        }
      }

      this.currentDragTouches.splice(index, 1);
      this.draw(this.ctx);
    }
  }, {
    key: "handleMove",
    value: function handleMove(newCropTouch) {
      var matched = false; // tslint:disable-next-line:prefer-for-of

      for (var k = 0; k < this.currentDragTouches.length; k++) {
        if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
          var dragTouch = this.currentDragTouches[k];
          var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
          newCropTouch.x = clampedPositions.x;
          newCropTouch.y = clampedPositions.y;
          new PointPool().instance.returnPoint(clampedPositions);

          if (dragTouch.dragHandle instanceof CornerMarker) {
            this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
          } else {
            this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
          }

          this.currentlyInteracting = true;
          matched = true;
          this.imageCropperDataShare.setPressed(this.canvas);
          break;
        }
      }

      if (!matched) {
        var _iterator2 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.default)(this.markers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var marker = _step2.value;

            if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
              newCropTouch.dragHandle = marker;
              this.currentDragTouches.push(newCropTouch);
              marker.setDrag(true);
              newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
              newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
              this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
          if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
            newCropTouch.dragHandle = this.center;
            this.currentDragTouches.push(newCropTouch);
            newCropTouch.dragHandle.setDrag(true);
            newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
            newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
            this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
          }
        }
      }
    }
  }, {
    key: "updateClampBounds",
    value: function updateClampBounds() {
      var sourceAspect = this.srcImage.height / this.srcImage.width;
      var canvasAspect = this.canvas.height / this.canvas.width;
      var w = this.canvas.width;
      var h = this.canvas.height;

      if (canvasAspect > sourceAspect) {
        w = this.canvas.width;
        h = this.canvas.width * sourceAspect;
      } else {
        h = this.canvas.height;
        w = this.canvas.height / sourceAspect;
      }

      this.minXClamp = this.canvas.width / 2 - w / 2;
      this.minYClamp = this.canvas.height / 2 - h / 2;
      this.maxXClamp = this.canvas.width / 2 + w / 2;
      this.maxYClamp = this.canvas.height / 2 + h / 2;
    }
  }, {
    key: "getCropBounds",
    value: function getCropBounds() {
      var bounds = this.getBounds();
      bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
      bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
      bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
      bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
      return bounds;
    }
  }, {
    key: "clampPosition",
    value: function clampPosition(x, y) {
      if (x < this.minXClamp) {
        x = this.minXClamp;
      }

      if (x > this.maxXClamp) {
        x = this.maxXClamp;
      }

      if (y < this.minYClamp) {
        y = this.minYClamp;
      }

      if (y > this.maxYClamp) {
        y = this.maxYClamp;
      }

      return new PointPool().instance.borrow(x, y);
    }
  }, {
    key: "isImageSet",
    value: function isImageSet() {
      return this.imageSet;
    }
  }, {
    key: "setImage",
    value: function setImage(img) {
      this.srcImage = img;

      if (!img) {
        this.imageSet = false;
        this.draw(this.ctx);
      } else {
        this.imageSet = true;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var bufferContext = this.buffer.getContext('2d');
        bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);

        if (!this.cropperSettings.fileType) {
          this.fileType = this.getDataUriMimeType(img.src);
        }

        if (this.cropperSettings.minWithRelativeToResolution) {
          this.minWidth = this.canvas.width * this.cropperSettings.minWidth / this.srcImage.width;
          this.minHeight = this.canvas.height * this.cropperSettings.minHeight / this.srcImage.height;
        }

        this.updateClampBounds();
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        var cropPosition = this.getCropPositionFromMarkers();
        this.setCropPosition(cropPosition);
      }
    }
  }, {
    key: "updateCropPosition",
    value: function updateCropPosition(cropBounds) {
      var cropPosition = this.getCropPositionFromBounds(cropBounds);
      this.setCropPosition(cropPosition);
    }
  }, {
    key: "setCropPosition",
    value: function setCropPosition(cropPosition) {
      this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
      this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
      this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
      this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
      this.center.setPosition(cropPosition[4].x, cropPosition[4].y);

      var _iterator3 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.default)(cropPosition),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var position = _step3.value;
          new PointPool().instance.returnPoint(position);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.vertSquashRatio = this.detectVerticalSquash(this.srcImage);
      this.draw(this.ctx);
      this.croppedImage = this.getCroppedImageHelper(false, this.cropWidth, this.cropHeight);
    }
  }, {
    key: "getCropPositionFromMarkers",
    value: function getCropPositionFromMarkers() {
      var w = this.canvas.width;
      var h = this.canvas.height;
      var tlPos;
      var trPos;
      var blPos;
      var brPos;
      var center;
      var sourceAspect = this.srcImage.height / this.srcImage.width;
      var cropBounds = this.getBounds();
      var cropAspect = cropBounds.height / cropBounds.width;
      var cX = this.canvas.width / 2;
      var cY = this.canvas.height / 2;

      if (cropAspect > sourceAspect) {
        var imageH = Math.min(w * sourceAspect, h);
        var cropW = imageH / cropAspect;
        tlPos = new PointPool().instance.borrow(cX - cropW / 2, cY + imageH / 2);
        trPos = new PointPool().instance.borrow(cX + cropW / 2, cY + imageH / 2);
        blPos = new PointPool().instance.borrow(cX - cropW / 2, cY - imageH / 2);
        brPos = new PointPool().instance.borrow(cX + cropW / 2, cY - imageH / 2);
      } else {
        var imageW = Math.min(h / sourceAspect, w);
        var cropH = imageW * cropAspect;
        tlPos = new PointPool().instance.borrow(cX - imageW / 2, cY + cropH / 2);
        trPos = new PointPool().instance.borrow(cX + imageW / 2, cY + cropH / 2);
        blPos = new PointPool().instance.borrow(cX - imageW / 2, cY - cropH / 2);
        brPos = new PointPool().instance.borrow(cX + imageW / 2, cY - cropH / 2);
      }

      center = new PointPool().instance.borrow(cX, cY);
      var positions = [tlPos, trPos, blPos, brPos, center];
      return positions;
    }
  }, {
    key: "getCropPositionFromBounds",
    value: function getCropPositionFromBounds(cropPosition) {
      var marginTop = 0;
      var marginLeft = 0;
      var canvasAspect = this.canvasHeight / this.canvasWidth;
      var sourceAspect = this.srcImage.height / this.srcImage.width;

      if (canvasAspect > sourceAspect) {
        marginTop = this.buffer.height / 2 - this.canvasWidth * sourceAspect / 2;
      } else {
        marginLeft = this.buffer.width / 2 - this.canvasHeight / sourceAspect / 2;
      }

      var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
      var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
      var actualH = cropPosition.height * ratioH;
      var actualW = cropPosition.width * ratioW;
      var actualX = cropPosition.left * ratioW + marginLeft;
      var actualY = cropPosition.top * ratioH + marginTop;

      if (this.keepAspect) {
        var scaledW = actualH / this.aspectRatio;
        var scaledH = actualW * this.aspectRatio;

        if (this.getCropBounds().height === cropPosition.height) {
          // only width changed
          actualH = scaledH;
        } else if (this.getCropBounds().width === cropPosition.width) {
          // only height changed
          actualW = scaledW;
        } else {
          // height and width changed
          if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
            actualW = scaledW;
          } else {
            actualH = scaledH;
          }
        }
      }

      var tlPos = new PointPool().instance.borrow(actualX, actualY + actualH);
      var trPos = new PointPool().instance.borrow(actualX + actualW, actualY + actualH);
      var blPos = new PointPool().instance.borrow(actualX, actualY);
      var brPos = new PointPool().instance.borrow(actualX + actualW, actualY);
      var center = new PointPool().instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
      var positions = [tlPos, trPos, blPos, brPos, center];
      return positions;
    }
  }, {
    key: "getCroppedImageHelper",
    value: function getCroppedImageHelper(preserveSize, fillWidth, fillHeight) {
      if (this.cropperSettings.cropOnResize) {
        return this.getCroppedImage(preserveSize, fillWidth, fillHeight);
      }

      return this.croppedImage ? this.croppedImage : document.createElement('img');
    } // todo: Unused parameters?

  }, {
    key: "getCroppedImage",
    value: function getCroppedImage(preserveSize, fillWidth, fillHeight) {
      var bounds = this.getBounds();

      if (!this.srcImage) {
        return document.createElement('img');
      } else {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;

        if (canvasAspect > sourceAspect) {
          w = this.canvas.width;
          h = this.canvas.width * sourceAspect;
        } else {
          if (canvasAspect < sourceAspect) {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
          } else {
            h = this.canvas.height;
            w = this.canvas.width;
          }
        }

        this.ratioW = w / this.srcImage.width;
        this.ratioH = h / this.srcImage.height;
        var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
        var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
        var ctx = this.cropCanvas.getContext('2d');

        if (this.cropperSettings.preserveSize || preserveSize) {
          var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
          var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
          this.cropCanvas.width = width;
          this.cropCanvas.height = height;
          this.cropperSettings.croppedWidth = this.cropCanvas.width;
          this.cropperSettings.croppedHeight = this.cropCanvas.height;
        } else {
          this.cropCanvas.width = this.cropWidth;
          this.cropCanvas.height = this.cropHeight;
        }

        ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
        this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round(bounds.left / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);

        if (this.cropperSettings.resampleFn) {
          this.cropperSettings.resampleFn(this.cropCanvas);
        }

        this.croppedImage.width = this.cropCanvas.width;
        this.croppedImage.height = this.cropCanvas.height;
        this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
        return this.croppedImage;
      }
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var minX = Number.MAX_VALUE;
      var minY = Number.MAX_VALUE;
      var maxX = -Number.MAX_VALUE;
      var maxY = -Number.MAX_VALUE;

      var _iterator4 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.default)(this.markers),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var marker = _step4.value;

          if (marker.position.x < minX) {
            minX = marker.position.x;
          }

          if (marker.position.x > maxX) {
            maxX = marker.position.x;
          }

          if (marker.position.y < minY) {
            minY = marker.position.y;
          }

          if (marker.position.y > maxY) {
            maxY = marker.position.y;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var bounds = new Bounds();
      bounds.left = minX;
      bounds.right = maxX;
      bounds.top = minY;
      bounds.bottom = maxY;
      return bounds;
    }
  }, {
    key: "setBounds",
    value: function setBounds(bounds) {
      // const topLeft: CornerMarker;
      // const topRight: CornerMarker;
      // const bottomLeft: CornerMarker;
      // const bottomRight: CornerMarker;
      var currentBounds = this.getBounds();

      var _iterator5 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.default)(this.markers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var marker = _step5.value;

          if (marker.position.x === currentBounds.left) {
            if (marker.position.y === currentBounds.top) {
              marker.setPosition(bounds.left, bounds.top);
            } else {
              marker.setPosition(bounds.left, bounds.bottom);
            }
          } else {
            if (marker.position.y === currentBounds.top) {
              marker.setPosition(bounds.right, bounds.top);
            } else {
              marker.setPosition(bounds.right, bounds.bottom);
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this.center.recalculatePosition(bounds);
      this.center.draw(this.ctx);
      this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      if (this.crop.isImageSet()) {
        if (event.touches.length === 1) {
          if (this.isMouseDown) {
            event.preventDefault(); // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < event.touches.length; i++) {
              var touch = event.touches[i];
              var touchPosition = this.getTouchPos(this.canvas, touch);
              var cropTouch = new CropTouch(touchPosition.x, touchPosition.y, touch.identifier);
              new PointPool().instance.returnPoint(touchPosition);
              this.move(cropTouch);
            }
          }
        } else {
          if (event.touches.length === 2) {
            event.preventDefault();
            var distance = (event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX) + (event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY);

            if (this.previousDistance && this.previousDistance !== distance) {
              var bounds = this.getBounds();

              if (distance < this.previousDistance) {
                bounds.top += 1;
                bounds.left += 1;
                bounds.right -= 1;
                bounds.bottom -= 1;
              }

              if (distance > this.previousDistance) {
                if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                  // none
                  bounds.top -= 1;
                  bounds.left -= 1;
                  bounds.right += 1;
                  bounds.bottom += 1;
                } else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                  // left
                  bounds.top -= 1;
                  bounds.right += 2;
                  bounds.bottom += 1;
                } else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                  // right
                  bounds.top -= 1;
                  bounds.left -= 2;
                  bounds.bottom += 1;
                } else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                  // top
                  bounds.left -= 1;
                  bounds.right += 1;
                  bounds.bottom += 2;
                } else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                  // bottom
                  bounds.top -= 2;
                  bounds.left -= 1;
                  bounds.right += 1;
                } else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                  // top left
                  bounds.right += 2;
                  bounds.bottom += 2;
                } else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                  // top right
                  bounds.left -= 2;
                  bounds.bottom += 2;
                } else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                  // bottom left
                  bounds.top -= 2;
                  bounds.right += 2;
                } else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                  // bottom right
                  bounds.top -= 2;
                  bounds.left -= 2;
                }
              }

              if (bounds.top < this.minYClamp) {
                bounds.top = this.minYClamp;
              }

              if (bounds.bottom > this.maxYClamp) {
                bounds.bottom = this.maxYClamp;
              }

              if (bounds.left < this.minXClamp) {
                bounds.left = this.minXClamp;
              }

              if (bounds.right > this.maxXClamp) {
                bounds.right = this.maxXClamp;
              }

              this.setBounds(bounds);
            }

            this.previousDistance = distance;
          }
        }

        this.draw(this.ctx);
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (this.crop.isImageSet() && this.isMouseDown) {
        var mousePosition = this.getMousePos(this.canvas, e);
        this.move(new CropTouch(mousePosition.x, mousePosition.y, 0));
        var dragTouch = this.getDragTouchForID(0);

        if (dragTouch) {
          dragTouch.x = mousePosition.x;
          dragTouch.y = mousePosition.y;
        } else {
          dragTouch = new CropTouch(mousePosition.x, mousePosition.y, 0);
        }

        new PointPool().instance.returnPoint(mousePosition);
        this.drawCursors(dragTouch);
        this.draw(this.ctx);
      }
    }
  }, {
    key: "move",
    value: function move(cropTouch) {
      if (this.isMouseDown) {
        this.handleMove(cropTouch);
      }
    }
  }, {
    key: "getDragTouchForID",
    value: function getDragTouchForID(id) {
      // tslint:disable-next-line:prefer-for-of
      for (var i = 0; i < this.currentDragTouches.length; i++) {
        if (id === this.currentDragTouches[i].id) {
          return this.currentDragTouches[i];
        }
      }

      return undefined;
    }
  }, {
    key: "drawCursors",
    value: function drawCursors(cropTouch) {
      var cursorDrawn = false;

      if (cropTouch != null) {
        if (cropTouch.dragHandle === this.center) {
          this.imageCropperDataShare.setStyle(this.canvas, 'move');
          cursorDrawn = true;
        }

        if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof CornerMarker) {
          this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
          cursorDrawn = true;
        }
      }

      var didDraw = false;

      if (!cursorDrawn) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < this.markers.length; i++) {
          didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
        }

        if (!didDraw) {
          this.imageCropperDataShare.setStyle(this.canvas, 'initial');
        }
      }

      if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
        this.center.setOver(true);
        this.imageCropperDataShare.setOver(this.canvas);
        this.imageCropperDataShare.setStyle(this.canvas, 'move');
      } else {
        this.center.setOver(false);
      }
    }
  }, {
    key: "drawCornerCursor",
    value: function drawCornerCursor(marker, x, y) {
      if (marker.touchInBounds(x, y)) {
        marker.setOver(true);

        if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
          if (marker.getVerticalNeighbour().position.y > marker.position.y) {
            this.imageCropperDataShare.setOver(this.canvas);
            this.imageCropperDataShare.setStyle(this.canvas, 'nwse-resize');
          } else {
            this.imageCropperDataShare.setOver(this.canvas);
            this.imageCropperDataShare.setStyle(this.canvas, 'nesw-resize');
          }
        } else {
          if (marker.getVerticalNeighbour().position.y > marker.position.y) {
            this.imageCropperDataShare.setOver(this.canvas);
            this.imageCropperDataShare.setStyle(this.canvas, 'nesw-resize');
          } else {
            this.imageCropperDataShare.setOver(this.canvas);
            this.imageCropperDataShare.setStyle(this.canvas, 'nwse-resize');
          }
        }

        return true;
      }

      marker.setOver(false);
      return false;
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      if (this.crop.isImageSet()) {
        var touch = event.touches[0];
        var touchPosition = this.getTouchPos(this.canvas, touch);
        var cropTouch = new CropTouch(touchPosition.x, touchPosition.y, touch.identifier);
        new PointPool().instance.returnPoint(touchPosition);
        this.isMouseDown = false;

        var _iterator6 = (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.default)(this.markers),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var marker = _step6.value;

            if (marker.touchInBounds(cropTouch.x, cropTouch.y)) {
              this.isMouseDown = true;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        if (this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
          this.isMouseDown = true;
        }
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      if (this.crop.isImageSet()) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          var dragTouch = this.getDragTouchForID(touch.identifier);

          if (dragTouch && dragTouch !== undefined) {
            if (dragTouch.dragHandle instanceof CornerMarker || dragTouch.dragHandle instanceof DragMarker) {
              dragTouch.dragHandle.setOver(false);
            }

            this.handleRelease(dragTouch);
          }
        }

        if (this.currentDragTouches.length === 0) {
          this.isMouseDown = false;
          this.currentlyInteracting = false;
        }
      }
    } // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios

  }, {
    key: "drawImageIOSFix",
    value: function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
      // Works only if whole image is displayed:
      // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
      // The following works correct also when only a part of the image is displayed:
      // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
      // this.vertSquashRatio, dx, dy, dw, dh);
      ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (this.crop.isImageSet()) {
        this.isMouseDown = true;
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      if (this.crop.isImageSet()) {
        this.imageCropperDataShare.setReleased(this.canvas);
        this.isMouseDown = false;
        this.handleRelease(new CropTouch(0, 0, 0));
      }
    }
  }]);

  return ImageCropper;
}(ImageCropperModel);

var CropPosition = /*#__PURE__*/function () {
  function CropPosition() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CropPosition);

    this.x = +x;
    this.y = +y;
    this.w = +w;
    this.h = +h;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CropPosition, [{
    key: "toBounds",
    value: function toBounds() {
      return new Bounds(this.x, this.y, this.w, this.h);
    }
  }, {
    key: "isInitialized",
    value: function isInitialized() {
      return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    }
  }]);

  return CropPosition;
}();

var ImageCropperComponent = /*#__PURE__*/function () {
  function ImageCropperComponent(renderer, document) {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, ImageCropperComponent);

    this.document = document;
    this.cropPositionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.exif = new Exif(); // tslint:disable-next-line:no-output-on-prefix

    this.onCrop = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.imageSet = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.dragUnsubscribers = [];
    this.renderer = renderer;
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(ImageCropperComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var canvas = this.cropcanvas.nativeElement;

      if (!this.settings) {
        this.settings = new CropperSettings();
      }

      if (this.settings.cropperClass) {
        this.renderer.setAttribute(canvas, 'class', this.settings.cropperClass);
      }

      if (!this.settings.dynamicSizing) {
        this.renderer.setAttribute(canvas, 'width', this.settings.canvasWidth.toString());
        this.renderer.setAttribute(canvas, 'height', this.settings.canvasHeight.toString());
      } else {
        this.windowListener = this.resize.bind(this);
        window.addEventListener('resize', this.windowListener);
      }

      if (!this.cropper) {
        this.cropper = new ImageCropper(this.settings);
      }

      this.cropper.prepare(canvas);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this.isCropPositionChanged(changes)) {
        this.cropper.updateCropPosition(this.cropPosition.toBounds());

        if (this.cropper.isImageSet()) {
          var bounds = this.cropper.getCropBounds();
          this.image.image = this.cropper.getCroppedImageHelper().src;
          this.onCrop.emit(bounds);
        }

        this.updateCropBounds();
      }

      if (changes.inputImage) {
        this.setImage(changes.inputImage.currentValue);
      }

      if (changes.settings && this.cropper) {
        this.cropper.updateSettings(this.settings);

        if (this.cropper.isImageSet()) {
          this.image.image = this.cropper.getCroppedImageHelper().src;
          this.onCrop.emit(this.cropper.getCropBounds());
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.removeDragListeners();

      if (this.settings.dynamicSizing && this.windowListener) {
        window.removeEventListener('resize', this.windowListener);
      }
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      this.cropper.onTouchMove(event);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      this.cropper.onTouchStart(event);
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      this.cropper.onTouchEnd(event);

      if (this.cropper.isImageSet()) {
        this.image.image = this.cropper.getCroppedImageHelper().src;
        this.onCrop.emit(this.cropper.getCropBounds());
        this.updateCropBounds();
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.dragUnsubscribers.push(this.renderer.listen(this.document, 'mousemove', this.onMouseMove.bind(this)));
      this.dragUnsubscribers.push(this.renderer.listen(this.document, 'mouseup', this.onMouseUp.bind(this)));
      this.cropper.onMouseDown(event); // if (!this.cropper.isImageSet() && !this.settings.noFileInput) {
      //   // load img
      //   this.fileInput.nativeElement.click();
      // }
    }
  }, {
    key: "removeDragListeners",
    value: function removeDragListeners() {
      this.dragUnsubscribers.forEach(function (unsubscribe) {
        return unsubscribe();
      });
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      this.removeDragListeners();

      if (this.cropper.isImageSet()) {
        this.cropper.onMouseUp(event);
        this.image.image = this.cropper.getCroppedImageHelper().src;
        this.onCrop.emit(this.cropper.getCropBounds());
        this.updateCropBounds();
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      this.cropper.onMouseMove(event);
    }
  }, {
    key: "fileChangeListener",
    value: function fileChangeListener($event) {
      var _this4 = this;

      if ($event.target.files.length === 0) {
        return;
      }

      var file = $event.target.files[0];

      if (this.settings.allowedFilesRegex.test(file.name)) {
        var image = new Image();
        var fileReader = new FileReader();
        fileReader.addEventListener('loadend', function (loadEvent) {
          image.addEventListener('load', function () {
            _this4.setImage(image);
          });
          image.src = loadEvent.target.result;
        });
        fileReader.readAsDataURL(file);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var canvas = this.cropcanvas.nativeElement;
      this.settings.canvasWidth = canvas.offsetWidth;
      this.settings.canvasHeight = canvas.offsetHeight;
      this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cropper.reset();
      this.renderer.setAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass);
      this.image.image = this.cropper.getCroppedImageHelper().src;
    }
  }, {
    key: "setImage",
    value: function setImage(image) {
      var _this5 = this;

      var newBounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.imageSet.emit(true);
      this.renderer.setAttribute(this.cropcanvas.nativeElement, 'class', "".concat(this.settings.cropperClass, " ").concat(this.settings.croppingClass));
      this.raf = window.requestAnimationFrame(function () {
        if (_this5.raf) {
          window.cancelAnimationFrame(_this5.raf);
        }

        if (image.naturalHeight > 0 && image.naturalWidth > 0) {
          image.height = image.naturalHeight;
          image.width = image.naturalWidth;
          window.cancelAnimationFrame(_this5.raf);

          _this5.getOrientedImage(image, function (img) {
            if (_this5.settings.dynamicSizing) {
              var canvas = _this5.cropcanvas.nativeElement;
              _this5.settings.canvasWidth = canvas.offsetWidth;
              _this5.settings.canvasHeight = canvas.offsetHeight;

              _this5.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
            }

            _this5.cropper.setImage(img);

            if (_this5.cropPosition && _this5.cropPosition.isInitialized()) {
              _this5.cropper.updateCropPosition(_this5.cropPosition.toBounds());
            }

            _this5.image.original = img;

            var bounds = _this5.cropper.getCropBounds();

            _this5.image.image = _this5.cropper.getCroppedImageHelper().src;

            if (!_this5.image) {
              _this5.image = image;
            }

            if (newBounds != null) {
              bounds = newBounds;

              _this5.cropper.setBounds(bounds);

              _this5.cropper.updateCropPosition(bounds);
            }

            _this5.onCrop.emit(bounds);
          });
        }
      });
    }
  }, {
    key: "isCropPositionChanged",
    value: function isCropPositionChanged(changes) {
      if (this.cropper && changes.cropPosition && this.isCropPositionUpdateNeeded) {
        return true;
      } else {
        this.isCropPositionUpdateNeeded = true;
        return false;
      }
    }
  }, {
    key: "updateCropBounds",
    value: function updateCropBounds() {
      var cropBound = this.cropper.getCropBounds();
      this.cropPositionChange.emit(new CropPosition(cropBound.left, cropBound.top, cropBound.width, cropBound.height));
      this.isCropPositionUpdateNeeded = false;
    }
  }, {
    key: "getOrientedImage",
    value: function getOrientedImage(image, callback) {
      var _this6 = this;

      var img;
      this.exif.getData(image, function () {
        var orientation = _this6.exif.getTag(image, 'Orientation');

        if ([3, 6, 8].indexOf(orientation) > -1) {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var cw = image.width;
          var ch = image.height;
          var cx = 0;
          var cy = 0;
          var deg = 0;

          switch (orientation) {
            case 3:
              cx = -image.width;
              cy = -image.height;
              deg = 180;
              break;

            case 6:
              cw = image.height;
              ch = image.width;
              cy = -image.height;
              deg = 90;
              break;

            case 8:
              cw = image.height;
              ch = image.width;
              cx = -image.width;
              deg = 270;
              break;

            default:
              break;
          }

          canvas.width = cw;
          canvas.height = ch;
          ctx.rotate(deg * Math.PI / 180);
          ctx.drawImage(image, cx, cy);
          img = document.createElement('img');
          img.width = cw;
          img.height = ch;
          img.addEventListener('load', function () {
            callback(img);
          });
          img.src = canvas.toDataURL('image/png');
        } else {
          img = image;
          callback(img);
        }
      });
    }
  }]);

  return ImageCropperComponent;
}();

ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
  return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
};

ImageCropperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ImageCropperComponent,
  selectors: [["img-cropper"]],
  viewQuery: function ImageCropperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.cropcanvas = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    }
  },
  inputs: {
    settings: "settings",
    cropper: "cropper",
    image: "image",
    inputImage: "inputImage",
    cropPosition: "cropPosition"
  },
  outputs: {
    cropPositionChange: "cropPositionChange",
    onCrop: "onCrop",
    imageSet: "imageSet"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 1,
  consts: [[1, "ng2-imgcrop"], ["type", "file", "accept", "image/*", 3, "change", 4, "ngIf"], [3, "mousedown", "touchmove", "touchend", "touchstart"], ["cropcanvas", ""], ["type", "file", "accept", "image/*", 3, "change"], ["fileInput", ""]],
  template: function ImageCropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ImageCropperComponent_input_1_Template, 2, 0, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "canvas", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function ImageCropperComponent_Template_canvas_mousedown_2_listener($event) {
        return ctx.onMouseDown($event);
      })("touchmove", function ImageCropperComponent_Template_canvas_touchmove_2_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function ImageCropperComponent_Template_canvas_touchend_2_listener($event) {
        return ctx.onTouchEnd($event);
      })("touchstart", function ImageCropperComponent_Template_canvas_touchstart_2_listener($event) {
        return ctx.onTouchStart($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.settings.noFileInput);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  encapsulation: 2
});

ImageCropperComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }];
};

ImageCropperComponent.propDecorators = {
  cropcanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['cropcanvas', {
      static: true
    }]
  }],
  fileInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['fileInput']
  }],
  settings: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  image: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  inputImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  cropper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  cropPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  cropPositionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  onCrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  imageSet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ImageCropperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      // tslint:disable-next-line:component-selector
      selector: 'img-cropper',
      template: "<span class=\"ng2-imgcrop\">\r\n  <input\r\n    *ngIf=\"!settings.noFileInput\"\r\n    #fileInput\r\n    type=\"file\"\r\n    accept=\"image/*\"\r\n    (change)=\"fileChangeListener($event)\"\r\n  />\r\n  <canvas\r\n    #cropcanvas\r\n    (mousedown)=\"onMouseDown($event)\"\r\n    (touchmove)=\"onTouchMove($event)\"\r\n    (touchend)=\"onTouchEnd($event)\"\r\n    (touchstart)=\"onTouchStart($event)\"\r\n  >\r\n  </canvas>\r\n</span>\r\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
      }]
    }];
  }, {
    cropPositionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    onCrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    imageSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    settings: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    cropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    cropcanvas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['cropcanvas', {
        static: true
      }]
    }],
    fileInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['fileInput']
    }],
    inputImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    cropPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

var ImageCropperModule = function ImageCropperModule() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, ImageCropperModule);
};

ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) {
  return new (t || ImageCropperModule)();
};

ImageCropperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ImageCropperModule
});
ImageCropperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ImageCropperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      declarations: [ImageCropperComponent],
      exports: [ImageCropperComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ImageCropperModule, {
    declarations: function declarations() {
      return [ImageCropperComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule];
    },
    exports: function exports() {
      return [ImageCropperComponent];
    }
  });
})();

var ImageCropperService = function ImageCropperService() {
  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, ImageCropperService);
};

ImageCropperService.ɵfac = function ImageCropperService_Factory(t) {
  return new (t || ImageCropperService)();
};

ImageCropperService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  factory: function ImageCropperService_Factory() {
    return new ImageCropperService();
  },
  token: ImageCropperService,
  providedIn: "root"
});

ImageCropperService.ctorParameters = function () {
  return [];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ImageCropperService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})(); // looks like this CropService is never used


var CropService = /*#__PURE__*/function () {
  function CropService() {
    (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CropService);
  }

  (0,E_Projet_Cnss_gull_admin_full_version_12_0_gull_compact_sidebar_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(CropService, [{
    key: "init",
    value: function init(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
    }
  }]);

  return CropService;
}();
/*
 * Public API Surface of ngx-img-cropper
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-img-cropper.js.map

/***/ }),

/***/ 42775:
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/***/ (function(module) {

!function (e, r) {
   true ? module.exports = r() : 0;
}(this, function () {
  return function (e) {
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
    }

    var t = {};
    return r.m = e, r.c = t, r.p = "", r(0);
  }([function (e, r, t) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = t(3);
    Object.defineProperty(r, "conformToMask", {
      enumerable: !0,
      get: function get() {
        return n(o).default;
      }
    });
    var i = t(2);
    Object.defineProperty(r, "adjustCaretPosition", {
      enumerable: !0,
      get: function get() {
        return n(i).default;
      }
    });
    var a = t(5);
    Object.defineProperty(r, "createTextMaskInputElement", {
      enumerable: !0,
      get: function get() {
        return n(a).default;
      }
    });
  }, function (e, r) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.placeholderChar = "_", r.strFunction = "function";
  }, function (e, r) {
    "use strict";

    function t(e) {
      var r = e.previousConformedValue,
          t = void 0 === r ? o : r,
          i = e.previousPlaceholder,
          a = void 0 === i ? o : i,
          u = e.currentCaretPosition,
          l = void 0 === u ? 0 : u,
          s = e.conformedValue,
          f = e.rawValue,
          d = e.placeholderChar,
          c = e.placeholder,
          p = e.indexesOfPipedChars,
          v = void 0 === p ? n : p,
          h = e.caretTrapIndexes,
          m = void 0 === h ? n : h;
      if (0 === l || !f.length) return 0;
      var y = f.length,
          g = t.length,
          b = c.length,
          C = s.length,
          P = y - g,
          k = P > 0,
          x = 0 === g,
          O = P > 1 && !k && !x;
      if (O) return l;
      var T = k && (t === s || s === c),
          w = 0,
          M = void 0,
          S = void 0;
      if (T) w = l - P;else {
        var j = s.toLowerCase(),
            _ = f.toLowerCase(),
            V = _.substr(0, l).split(o),
            A = V.filter(function (e) {
          return j.indexOf(e) !== -1;
        });

        S = A[A.length - 1];
        var N = a.substr(0, A.length).split(o).filter(function (e) {
          return e !== d;
        }).length,
            E = c.substr(0, A.length).split(o).filter(function (e) {
          return e !== d;
        }).length,
            F = E !== N,
            R = void 0 !== a[A.length - 1] && void 0 !== c[A.length - 2] && a[A.length - 1] !== d && a[A.length - 1] !== c[A.length - 1] && a[A.length - 1] === c[A.length - 2];
        !k && (F || R) && N > 0 && c.indexOf(S) > -1 && void 0 !== f[l] && (M = !0, S = f[l]);

        for (var I = v.map(function (e) {
          return j[e];
        }), J = I.filter(function (e) {
          return e === S;
        }).length, W = A.filter(function (e) {
          return e === S;
        }).length, q = c.substr(0, c.indexOf(d)).split(o).filter(function (e, r) {
          return e === S && f[r] !== e;
        }).length, L = q + W + J + (M ? 1 : 0), z = 0, B = 0; B < C; B++) {
          var D = j[B];
          if (w = B + 1, D === S && z++, z >= L) break;
        }
      }

      if (k) {
        for (var G = w, H = w; H <= b; H++) {
          if (c[H] === d && (G = H), c[H] === d || m.indexOf(H) !== -1 || H === b) return G;
        }
      } else if (M) {
        for (var K = w - 1; K >= 0; K--) {
          if (s[K] === S || m.indexOf(K) !== -1 || 0 === K) return K;
        }
      } else for (var Q = w; Q >= 0; Q--) {
        if (c[Q - 1] === d || m.indexOf(Q) !== -1 || 0 === Q) return Q;
      }
    }

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = t;
    var n = [],
        o = "";
  }, function (e, r, t) {
    "use strict";

    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
          t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

      if (!(0, i.isArray)(r)) {
        if (("undefined" == typeof r ? "undefined" : o(r)) !== a.strFunction) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
        r = r(e, t), r = (0, i.processCaretTraps)(r).maskWithoutCaretTraps;
      }

      var n = t.guide,
          s = void 0 === n || n,
          f = t.previousConformedValue,
          d = void 0 === f ? l : f,
          c = t.placeholderChar,
          p = void 0 === c ? a.placeholderChar : c,
          v = t.placeholder,
          h = void 0 === v ? (0, i.convertMaskToPlaceholder)(r, p) : v,
          m = t.currentCaretPosition,
          y = t.keepCharPositions,
          g = s === !1 && void 0 !== d,
          b = e.length,
          C = d.length,
          P = h.length,
          k = r.length,
          x = b - C,
          O = x > 0,
          T = m + (O ? -x : 0),
          w = T + Math.abs(x);

      if (y === !0 && !O) {
        for (var M = l, S = T; S < w; S++) {
          h[S] === p && (M += p);
        }

        e = e.slice(0, T) + M + e.slice(T, b);
      }

      for (var j = e.split(l).map(function (e, r) {
        return {
          char: e,
          isNew: r >= T && r < w
        };
      }), _ = b - 1; _ >= 0; _--) {
        var V = j[_].char;

        if (V !== p) {
          var A = _ >= T && C === k;
          V === h[A ? _ - x : _] && j.splice(_, 1);
        }
      }

      var N = l,
          E = !1;

      e: for (var F = 0; F < P; F++) {
        var R = h[F];

        if (R === p) {
          if (j.length > 0) for (; j.length > 0;) {
            var I = j.shift(),
                J = I.char,
                W = I.isNew;

            if (J === p && g !== !0) {
              N += p;
              continue e;
            }

            if (r[F].test(J)) {
              if (y === !0 && W !== !1 && d !== l && s !== !1 && O) {
                for (var q = j.length, L = null, z = 0; z < q; z++) {
                  var B = j[z];
                  if (B.char !== p && B.isNew === !1) break;

                  if (B.char === p) {
                    L = z;
                    break;
                  }
                }

                null !== L ? (N += J, j.splice(L, 1)) : F--;
              } else N += J;

              continue e;
            }

            E = !0;
          }
          g === !1 && (N += h.substr(F, P));
          break;
        }

        N += R;
      }

      if (g && O === !1) {
        for (var D = null, G = 0; G < N.length; G++) {
          h[G] === p && (D = G);
        }

        N = null !== D ? N.substr(0, D + 1) : l;
      }

      return {
        conformedValue: N,
        meta: {
          someCharsRejected: E
        }
      };
    }

    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    r.default = n;
    var i = t(4),
        a = t(1),
        u = [],
        l = "";
  }, function (e, r, t) {
    "use strict";

    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.placeholderChar;
      if (!o(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
      if (e.indexOf(r) !== -1) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(r) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e)));
      return e.map(function (e) {
        return e instanceof RegExp ? r : e;
      }).join("");
    }

    function o(e) {
      return Array.isArray && Array.isArray(e) || e instanceof Array;
    }

    function i(e) {
      return "string" == typeof e || e instanceof String;
    }

    function a(e) {
      return "number" == typeof e && void 0 === e.length && !isNaN(e);
    }

    function u(e) {
      return "undefined" == typeof e || null === e;
    }

    function l(e) {
      for (var r = [], t = void 0; t = e.indexOf(d), t !== -1;) {
        r.push(t), e.splice(t, 1);
      }

      return {
        maskWithoutCaretTraps: e,
        indexes: r
      };
    }

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.convertMaskToPlaceholder = n, r.isArray = o, r.isString = i, r.isNumber = a, r.isNil = u, r.processCaretTraps = l;
    var s = t(1),
        f = [],
        d = "[]";
  }, function (e, r, t) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e) {
      var r = {
        previousConformedValue: void 0,
        previousPlaceholder: void 0
      };
      return {
        state: r,
        update: function update(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
              o = n.inputElement,
              s = n.mask,
              d = n.guide,
              m = n.pipe,
              g = n.placeholderChar,
              b = void 0 === g ? v.placeholderChar : g,
              C = n.keepCharPositions,
              P = void 0 !== C && C,
              k = n.showMask,
              x = void 0 !== k && k;

          if ("undefined" == typeof t && (t = o.value), t !== r.previousConformedValue) {
            ("undefined" == typeof s ? "undefined" : l(s)) === y && void 0 !== s.pipe && void 0 !== s.mask && (m = s.pipe, s = s.mask);
            var O = void 0,
                T = void 0;

            if (s instanceof Array && (O = (0, p.convertMaskToPlaceholder)(s, b)), s !== !1) {
              var w = a(t),
                  M = o.selectionEnd,
                  S = r.previousConformedValue,
                  j = r.previousPlaceholder,
                  _ = void 0;

              if (("undefined" == typeof s ? "undefined" : l(s)) === v.strFunction) {
                if (T = s(w, {
                  currentCaretPosition: M,
                  previousConformedValue: S,
                  placeholderChar: b
                }), T === !1) return;
                var V = (0, p.processCaretTraps)(T),
                    A = V.maskWithoutCaretTraps,
                    N = V.indexes;
                T = A, _ = N, O = (0, p.convertMaskToPlaceholder)(T, b);
              } else T = s;

              var E = {
                previousConformedValue: S,
                guide: d,
                placeholderChar: b,
                pipe: m,
                placeholder: O,
                currentCaretPosition: M,
                keepCharPositions: P
              },
                  F = (0, c.default)(w, T, E),
                  R = F.conformedValue,
                  I = ("undefined" == typeof m ? "undefined" : l(m)) === v.strFunction,
                  J = {};
              I && (J = m(R, u({
                rawValue: w
              }, E)), J === !1 ? J = {
                value: S,
                rejected: !0
              } : (0, p.isString)(J) && (J = {
                value: J
              }));
              var W = I ? J.value : R,
                  q = (0, f.default)({
                previousConformedValue: S,
                previousPlaceholder: j,
                conformedValue: W,
                placeholder: O,
                rawValue: w,
                currentCaretPosition: M,
                placeholderChar: b,
                indexesOfPipedChars: J.indexesOfPipedChars,
                caretTrapIndexes: _
              }),
                  L = W === O && 0 === q,
                  z = x ? O : h,
                  B = L ? z : W;
              r.previousConformedValue = B, r.previousPlaceholder = O, o.value !== B && (o.value = B, i(o, q));
            }
          }
        }
      };
    }

    function i(e, r) {
      document.activeElement === e && (g ? b(function () {
        return e.setSelectionRange(r, r, m);
      }, 0) : e.setSelectionRange(r, r, m));
    }

    function a(e) {
      if ((0, p.isString)(e)) return e;
      if ((0, p.isNumber)(e)) return String(e);
      if (void 0 === e || null === e) return h;
      throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e));
    }

    Object.defineProperty(r, "__esModule", {
      value: !0
    });

    var u = Object.assign || function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];

        for (var n in t) {
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
      }

      return e;
    },
        l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };

    r.default = o;
    var s = t(2),
        f = n(s),
        d = t(3),
        c = n(d),
        p = t(4),
        v = t(1),
        h = "",
        m = "none",
        y = "object",
        g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
        b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
  }]);
});

/***/ }),

/***/ 56090:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/form-wizard.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormWizardModule": function() { return /* binding */ FormWizardModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard/wizard.component */ 74514);
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard-step/wizard-step.component */ 71971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);




var FormWizardModule = /** @class */ (function () {
    function FormWizardModule() {
    }
    FormWizardModule.ɵfac = function FormWizardModule_Factory(t) { return new (t || FormWizardModule)(); };
    FormWizardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FormWizardModule });
    FormWizardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
            ]] });
    return FormWizardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FormWizardModule, { declarations: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__.WizardComponent, _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__.WizardStepComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__.WizardComponent, _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__.WizardStepComponent] }); })();


/***/ }),

/***/ 71971:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardStepComponent": function() { return /* binding */ WizardStepComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);


var _c0 = ["*"];
var WizardStepComponent = /** @class */ (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: false,
        configurable: true
    });
    WizardStepComponent.ɵfac = function WizardStepComponent_Factory(t) { return new (t || WizardStepComponent)(); };
    WizardStepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardStepComponent, selectors: [["wizard-step"]], inputs: { title: "title", hidden: "hidden", isValid: "isValid", showNext: "showNext", showPrev: "showPrev", isActive: "isActive" }, outputs: { onNext: "onNext", onPrev: "onPrev", onComplete: "onComplete" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function WizardStepComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isActive);
        } }, encapsulation: 2 });
    return WizardStepComponent;
}());



/***/ }),

/***/ 74514:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardComponent": function() { return /* binding */ WizardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wizard-step/wizard-step.component */ 71971);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 12057);




var _c0 = function (a0, a1, a2, a3) { return { "active": a0, "enabled": a1, "disabled": a2, "completed": a3 }; };
function WizardComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardComponent_li_3_Template_a_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var step_r1 = restoredCtx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.goToStep(step_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var step_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c0, step_r1.isActive, !step_r1.isDisabled, step_r1.isDisabled, ctx_r0.isCompleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r1.title);
} }
var _c1 = ["*"];
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: false,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(); };
    WizardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["form-wizard"]], contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_0__.WizardStepComponent, 4);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardSteps = _t);
        } }, outputs: { onStepChanged: "onStepChanged" }, ngContentSelectors: _c1, decls: 13, vars: 7, consts: [[1, "card"], [1, "card-header"], [1, "nav", "nav-justified"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-block"], [1, "card-footer", 3, "hidden"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary", "float-left", 3, "hidden", "click"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary", "float-right", 3, "disabled", "hidden", "click"], [1, "nav-item", 3, "ngClass"], [3, "click"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WizardComponent_li_3_Template, 3, 7, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_7_listener() { return ctx.previous(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Previous");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_9_listener() { return ctx.next(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Next");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_11_listener() { return ctx.complete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Done");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.isCompleted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.hasPrevStep || !ctx.activeStep.showPrev);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.activeStep.isValid)("hidden", !ctx.hasNextStep || !ctx.activeStep.showNext);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.activeStep.isValid)("hidden", ctx.hasNextStep);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0;\n  font-size: 1.25rem;\n}\n\n.card-block[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: 0 none;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding: 1rem 0rem;\n  border-bottom: 0.5rem solid #ccc;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  border-bottom-color: #1976D2 !important;\n}\n\n.enabled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom-color: #58a2ea;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.completed[_ngcontent-%COMP%] {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLFlBQVk7QUFFcEI7O0FBREE7RUFBZSxzQkFBc0I7RUFBRSxVQUFVO0VBQUUsa0JBQWtCO0FBT3JFOztBQU5BO0VBQWMsZ0JBQWdCO0FBVTlCOztBQVRBO0VBQWUsc0JBQXNCO0VBQUUsa0JBQWtCO0FBY3pEOztBQWJBO0VBQVksa0JBQWtCO0VBQUUsZ0NBQWdDO0FBa0JoRTs7QUFqQkE7RUFBVSxpQkFBaUI7RUFBRSxZQUFZO0VBQUUsdUNBQXVDO0FBdUJsRjs7QUF0QkE7RUFBVyxlQUFlO0VBQUUsNEJBQXNDO0FBMkJsRTs7QUExQkE7RUFBWSxXQUFXO0FBOEJ2Qjs7QUE3QkE7RUFBYSxlQUFlO0FBaUM1QiIsImZpbGUiOiJ3aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7IGhlaWdodDogMTAwJTsgfVxuLmNhcmQtaGVhZGVyIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgcGFkZGluZzogMDsgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4uY2FyZC1ibG9jayB7IG92ZXJmbG93LXk6IGF1dG87IH1cbi5jYXJkLWZvb3RlciB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci10b3A6IDAgbm9uZTsgfVxuLm5hdi1pdGVtIHsgcGFkZGluZzogMXJlbSAwcmVtOyBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgI2NjYzsgfVxuLmFjdGl2ZSB7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogYmxhY2s7IGJvcmRlci1ib3R0b20tY29sb3I6ICMxOTc2RDIgIWltcG9ydGFudDsgfVxuLmVuYWJsZWQgeyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlci1ib3R0b20tY29sb3I6IHJnYig4OCwgMTYyLCAyMzQpOyB9XG4uZGlzYWJsZWQgeyBjb2xvcjogI2NjYzsgfVxuLmNvbXBsZXRlZCB7IGN1cnNvcjogZGVmYXVsdH0iXX0= */"] });
    return WizardComponent;
}());



/***/ }),

/***/ 27553:
/*!****************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFormComponent": function() { return /* binding */ BasicFormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 91376);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/btn-loading/btn-loading.component */ 38845);





var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent(fb, toastr) {
        this.fb = fb;
        this.toastr = toastr;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        this.buildFormBasic();
        this.radioGroup = this.fb.group({
            radio: []
        });
    };
    BasicFormComponent.prototype.buildFormBasic = function () {
        this.formBasic = this.fb.group({
            experience: []
        });
    };
    BasicFormComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.toastr.success('Profile updated.', 'Success!', { progressBar: true });
        }, 3000);
    };
    BasicFormComponent.ɵfac = function BasicFormComponent_Factory(t) { return new (t || BasicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
    BasicFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BasicFormComponent, selectors: [["app-basic-form"]], decls: 317, vars: 20, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title", "mb-3"], [3, "formGroup", "ngSubmit"], [1, "col-md-6", "form-group", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "Enter your first name", 1, "form-control"], ["for", "lastName"], ["type", "text", "id", "lastName", "placeholder", "Enter your last name", 1, "form-control"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["for", "phone"], ["id", "phone", "placeholder", "Enter phone", 1, "form-control"], ["for", "credit"], ["id", "credit", "placeholder", "Card", 1, "form-control"], ["id", "credit", "placeholder", "Web address", 1, "form-control"], ["for", "picker1"], [1, "input-group"], ["id", "picker1", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["dp", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "icon-regular", "i-Calendar-4"], [1, "form-control"], ["btnClass", "btn-primary btn-rounded", 3, "loading"], ["type", "text", "id", "firstName", "placeholder", "Enter your first name", 1, "form-control", "form-control-rounded"], ["type", "text", "id", "lastName", "placeholder", "Enter your last name", 1, "form-control", "form-control-rounded"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control", "form-control-rounded"], ["id", "phone", "placeholder", "Enter phone", 1, "form-control", "form-control-rounded"], ["id", "credit", "placeholder", "Card", 1, "form-control", "form-control-rounded"], ["id", "credit", "placeholder", "Web address", 1, "form-control", "form-control-rounded"], ["id", "picker1", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-rounded"], ["type", "button", 1, "btn", "btn-secondary", "btn-rounded", 3, "click"], [1, "form-control", "form-control-rounded"], [1, "card-title"], [1, "switch", "switch-primary", "mr-3"], ["type", "checkbox", "checked", ""], [1, "slider"], [1, "switch", "switch-secondary", "mr-3"], [1, "switch", "switch-success", "mr-3"], [1, "switch", "switch-warning", "mr-3"], [1, "switch", "switch-danger", "mr-3"], [1, "switch", "switch-light", "mr-3"], [1, "switch", "switch-dark", "mr-3"], [1, "col-md-6"], [1, "checkbox", "checkbox-primary"], [1, "checkmark"], [1, "checkbox", "checkbox-secondary"], [1, "checkbox", "checkbox-success"], [1, "checkbox", "checkbox-warning"], [1, "checkbox", "checkbox-danger"], [1, "checkbox", "checkbox-info"], [1, "checkbox", "checkbox-dark"], [1, "checkbox", "checkbox-outline-primary"], [1, "checkbox", "checkbox-outline-secondary"], [1, "checkbox", "checkbox-outline-success"], [1, "checkbox", "checkbox-outline-warning"], [1, "checkbox", "checkbox-outline-danger"], [1, "checkbox", "checkbox-outline-info"], [1, "checkbox", "checkbox-outline-dark"], [1, "card-body", 3, "formGroup"], [1, "radio", "radio-primary"], ["type", "radio", "name", "radio", "formControlName", "radio", 3, "value"], [1, "radio", "radio-secondary"], [1, "radio", "radio-success"], [1, "radio", "radio-warning"], [1, "radio", "radio-danger"], [1, "radio", "radio-light"], [1, "radio", "radio-dark"], [1, "radio", "radio-outline-primary"], [1, "radio", "radio-outline-secondary"], [1, "radio", "radio-outline-success"], [1, "radio", "radio-outline-warning"], [1, "radio", "radio-outline-danger"], [1, "radio", "radio-outline-light"], [1, "radio", "radio-outline-dark"]], template: function BasicFormComponent_Template(rf, ctx) { if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Form Inputs");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BasicFormComponent_Template_form_ngSubmit_16_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "First name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Last name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cradit card number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Website");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Birth date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 23, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicFormComponent_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); return _r0.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "select", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Option 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Option 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Option 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "btn-loading", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Form Inputs Rounded");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BasicFormComponent_Template_form_ngSubmit_69_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "First name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Last name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Cradit card number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Website");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Birth date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 36, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicFormComponent_Template_button_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); return _r0.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "select", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Option 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Option 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Option 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "btn-loading", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Switch");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "label", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Secondary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "label", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "label", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Checkbox Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "label", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "label", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Secondary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "label", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "label", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "label", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "label", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Checkbox Outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "label", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "label", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Secondary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "label", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "label", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "label", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "label", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "label", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Radio Button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "label", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "label", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Secondary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "label", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "label", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "label", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "label", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "label", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Radio Button Outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "label", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "label", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Secondary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "label", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "label", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "label", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "label", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "label", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formBasic);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formBasic);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](124);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.radioGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.radioGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 7);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return BasicFormComponent;
}());



/***/ }),

/***/ 75320:
/*!********************************************************************!*\
  !*** ./src/app/views/forms/form-layouts/form-layouts.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLayoutsComponent": function() { return /* binding */ FormLayoutsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);



var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    FormLayoutsComponent.ɵfac = function FormLayoutsComponent_Factory(t) { return new (t || FormLayoutsComponent)(); };
    FormLayoutsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormLayoutsComponent, selectors: [["app-form-layouts"]], decls: 109, vars: 0, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "card", "mb-5"], [1, "card-body"], [1, "row", "row-xs"], [1, "col-md-4"], ["type", "text", "placeholder", "Enter your username", 1, "form-control"], [1, "col-md-4", "mt-3", "mt-md-0"], ["type", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "btn", "btn-primary", "btn-block"], [1, "border-top", "mb-5"], [1, "col-md-6"], [1, "d-flex", "flex-column"], [1, "form-group"], [1, "btn", "btn-primary", "pd-x-20"], [1, "form-group", "row"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "email", "id", "inputEmail3", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword3", "placeholder", "Password", 1, "form-control"], [1, "col-form-label", "col-sm-2", "pt-0"], [1, "form-check"], ["type", "radio", "name", "gridRadios", "id", "gridRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "gridRadios1", 1, "form-check-label"], ["type", "radio", "name", "gridRadios", "id", "gridRadios2", "value", "option2", 1, "form-check-input"], ["for", "gridRadios2", 1, "form-check-label"], [1, "form-check", "disabled"], ["type", "radio", "name", "gridRadios", "id", "gridRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "gridRadios3", 1, "form-check-label"], [1, "col-sm-2"], ["type", "checkbox", "id", "gridCheck1", 1, "form-check-input"], ["for", "gridCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["ngbDropdownMenu", "", 1, "p-3", 2, "width", "320px"]], template: function FormLayoutsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Form Layouts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form Layouts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Horizontal Layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A form control layout using row to create horizontal alignment.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Verticle Layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "A form control layout using flex to create verticle alignment.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Left Label Alignment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "A form control layout using row with left label alignment.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "fieldset", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "legend", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Radios");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " First radio ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Second radio ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Third disabled radio ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Checkbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Example checkbox ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Form Inside Dropdown");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "A form group layout inside dropdown");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Download File");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FormLayoutsComponent;
}());



/***/ }),

/***/ 67725:
/*!*****************************************************!*\
  !*** ./src/app/views/forms/forms-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsRoutingModule": function() { return /* binding */ FormsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-form/basic-form.component */ 27553);
/* harmony import */ var _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-inputs/tag-inputs.component */ 12753);
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ 18019);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ 96389);
/* harmony import */ var _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-mask/input-mask.component */ 62799);
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-groups/input-groups.component */ 96919);
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ 75320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);










var routes = [
    {
        path: 'basic',
        component: _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_0__.BasicFormComponent
    },
    {
        path: 'layouts',
        component: _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_6__.FormLayoutsComponent
    },
    {
        path: 'input-group',
        component: _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_5__.InputGroupsComponent
    },
    {
        path: 'input-mask',
        component: _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_4__.InputMaskComponent
    },
    {
        path: 'tag-input',
        component: _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_1__.TagInputsComponent
    },
    {
        path: 'wizard',
        component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__.WizardComponent
    },
    {
        path: 'img-cropper',
        component: _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_2__.AppImgCropperComponent
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule.ɵfac = function FormsRoutingModule_Factory(t) { return new (t || FormsRoutingModule)(); };
    FormsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: FormsRoutingModule });
    FormsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
    return FormsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 43929:
/*!*********************************************!*\
  !*** ./src/app/views/forms/forms.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFormsModule": function() { return /* binding */ AppFormsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms-routing.module */ 67725);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-chips */ 44436);
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-form/basic-form.component */ 27553);
/* harmony import */ var _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-inputs/tag-inputs.component */ 12753);
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ 18019);
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-img-cropper */ 79869);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard/wizard.component */ 96389);
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ 50933);
/* harmony import */ var src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/form-wizard/form-wizard.module */ 56090);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ 41120);
/* harmony import */ var _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input-mask/input-mask.component */ 62799);
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-groups/input-groups.component */ 96919);
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ 75320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 74788);


















var AppFormsModule = /** @class */ (function () {
    function AppFormsModule() {
    }
    AppFormsModule.ɵfac = function AppFormsModule_Factory(t) { return new (t || AppFormsModule)(); };
    AppFormsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppFormsModule });
    AppFormsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomFormsModule,
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__.SharedComponentsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
                ngx_chips__WEBPACK_IMPORTED_MODULE_16__.TagInputModule,
                ngx_img_cropper__WEBPACK_IMPORTED_MODULE_17__.ImageCropperModule,
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__.TextMaskModule,
                src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_6__.FormWizardModule,
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule
            ]] });
    return AppFormsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppFormsModule, { declarations: [_basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_1__.BasicFormComponent, _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_2__.TagInputsComponent, _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_3__.AppImgCropperComponent, _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__.WizardComponent, _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_8__.InputMaskComponent, _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_9__.InputGroupsComponent, _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_10__.FormLayoutsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomFormsModule,
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__.SharedComponentsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        ngx_chips__WEBPACK_IMPORTED_MODULE_16__.TagInputModule,
        ngx_img_cropper__WEBPACK_IMPORTED_MODULE_17__.ImageCropperModule,
        angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__.TextMaskModule,
        src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_6__.FormWizardModule,
        _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule] }); })();


/***/ }),

/***/ 18019:
/*!******************************************************************!*\
  !*** ./src/app/views/forms/img-cropper/img-cropper.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppImgCropperComponent": function() { return /* binding */ AppImgCropperComponent; }
/* harmony export */ });
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-img-cropper */ 79869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 12057);





function AppImgCropperComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data == null ? null : ctx_r0.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx_r0.cropperSettings.croppedWidth)("height", ctx_r0.cropperSettings.croppedHeight);
} }
function AppImgCropperComponent_ng_template_20_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.data == null ? null : ctx_r4.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx_r4.cropperSettings.croppedWidth)("height", ctx_r4.cropperSettings.croppedHeight);
} }
function AppImgCropperComponent_ng_template_20_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.data == null ? null : ctx_r5.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx_r5.cropperSettings.croppedWidth)("height", ctx_r5.cropperSettings.croppedHeight);
} }
function AppImgCropperComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload & Crop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppImgCropperComponent_ng_template_20_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var modal_r3 = restoredCtx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img-cropper", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppImgCropperComponent_ng_template_20_img_9_Template, 1, 3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppImgCropperComponent_ng_template_20_img_10_Template, 1, 3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppImgCropperComponent_ng_template_20_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var modal_r3 = restoredCtx.$implicit; return modal_r3.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx_r2.data)("settings", ctx_r2.cropperSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.data == null ? null : ctx_r2.data.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.data == null ? null : ctx_r2.data.image);
} }
var AppImgCropperComponent = /** @class */ (function () {
    function AppImgCropperComponent(modalService) {
        this.modalService = modalService;
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_1__.CropperSettings();
        // this.cropperSettings.width = 100;
        // this.cropperSettings.height = 100;
        // this.cropperSettings.croppedWidth = 100;
        // this.cropperSettings.croppedHeight = 100;
        // this.cropperSettings.canvasWidth = 400;
        // this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.cropperDrawSettings.lineDash = true;
        this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth = 0;
        this.data = {};
    }
    AppImgCropperComponent.prototype.ngOnInit = function () {
    };
    AppImgCropperComponent.prototype.open = function (modal) {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    AppImgCropperComponent.ɵfac = function AppImgCropperComponent_Factory(t) { return new (t || AppImgCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
    AppImgCropperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppImgCropperComponent, selectors: [["app-img-cropper"]], decls: 22, vars: 1, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-outline-primary", "btn-rounded", "mr-3", 3, "click"], ["class", "rounded-circle", 3, "src", "width", "height", 4, "ngIf"], ["modalCropper", ""], [1, "rounded-circle", 3, "src", "width", "height"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "image", "settings"], ["class", "mt-3  mr-3", 3, "src", "width", "height", 4, "ngIf"], ["class", "rounded-circle  mt-3", 3, "src", "width", "height", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-dark", 3, "click"], [1, "mt-3", "mr-3", 3, "src", "width", "height"], [1, "rounded-circle", "mt-3", 3, "src", "width", "height"]], template: function AppImgCropperComponent_Template(rf, ctx) { if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image Cropper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Image Cropper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NGX Image Cropper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppImgCropperComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.open(_r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Launch Cropper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppImgCropperComponent_img_19_Template, 1, 3, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppImgCropperComponent_ng_template_20_Template, 14, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.image);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_img_cropper__WEBPACK_IMPORTED_MODULE_1__.ImageCropperComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWctY3JvcHBlci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppImgCropperComponent;
}());



/***/ }),

/***/ 96919:
/*!********************************************************************!*\
  !*** ./src/app/views/forms/input-groups/input-groups.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputGroupsComponent": function() { return /* binding */ InputGroupsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var InputGroupsComponent = /** @class */ (function () {
    function InputGroupsComponent() {
    }
    InputGroupsComponent.prototype.ngOnInit = function () {
    };
    InputGroupsComponent.ɵfac = function InputGroupsComponent_Factory(t) { return new (t || InputGroupsComponent)(); };
    InputGroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputGroupsComponent, selectors: [["app-input-groups"]], decls: 67, vars: 0, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["for", "basic-url"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "input-group"], ["aria-label", "With textarea", 1, "form-control"], [1, "card"], ["id", "inputGroupFileAddon01", 1, "input-group-text"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "file", "id", "inputGroupFile02", 1, "custom-file-input"], ["for", "inputGroupFile02", "aria-describedby", "inputGroupFileAddon02", 1, "custom-file-label"], ["id", "inputGroupFileAddon02", 1, "input-group-text"]], template: function InputGroupsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Input Group");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Input Group");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Basic Example");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "@");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "@example.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Your vanity URL");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "https://example.com/users/");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "With textarea");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "File inputs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Upload");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Upload");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return InputGroupsComponent;
}());



/***/ }),

/***/ 62799:
/*!****************************************************************!*\
  !*** ./src/app/views/forms/input-mask/input-mask.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputMaskComponent": function() { return /* binding */ InputMaskComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-text-mask */ 41120);
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/btn-loading/btn-loading.component */ 38845);




var _c0 = function (a0) { return { mask: a0 }; };
var InputMaskComponent = /** @class */ (function () {
    function InputMaskComponent(fb) {
        this.fb = fb;
        this.isbnMask1 = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/];
        this.isbnMask2 = [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/];
        this.isbnMask3 = [/\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '/', /\d/];
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
        this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    }
    InputMaskComponent.prototype.ngOnInit = function () {
        this.formMask = this.fb.group({
            experience: [],
            phone: []
        });
    };
    InputMaskComponent.prototype.submit = function () {
        console.log(this.formMask.value);
    };
    InputMaskComponent.ɵfac = function InputMaskComponent_Factory(t) { return new (t || InputMaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
    InputMaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InputMaskComponent, selectors: [["app-input-mask"]], decls: 46, vars: 19, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title", "mb-3"], [3, "formGroup", "ngSubmit"], [1, "col-md-6", "form-group", "mb-3"], ["for", "isbn1"], ["type", "text", "id", "isbn1", "placeholder", "999-99-999-9999-9", 1, "form-control", 3, "textMask"], ["for", "isbn2"], ["type", "text", "id", "isbn2", "placeholder", "999 99 999 9999 9", 1, "form-control", 3, "textMask"], ["for", "isbn3"], ["type", "text", "id", "isbn3", "placeholder", "999/99/999/9999/9", 1, "form-control", 3, "textMask"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "placeholder", "(323) 323-4324", 1, "form-control", 3, "textMask"], ["for", "card"], ["id", "card", "placeholder", "9999 9999 9999 9999", 1, "form-control", 3, "textMask"], ["for", "picker1"], [1, "input-group"], ["id", "picker1", "placeholder", "mm/dd/yyyy", 1, "form-control", 3, "textMask"], ["btnClass", "btn-primary"]], template: function InputMaskComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Masks");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Input Masks");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Input Masks");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InputMaskComponent_Template_form_ngSubmit_16_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "ISBN 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "ISBN 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "ISBN 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Master card");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "btn-loading", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formMask);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.isbnMask1));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.isbnMask2));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.isbnMask3));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.phoneMask));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx.cardMask));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.dateMask));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, angular2_text_mask__WEBPACK_IMPORTED_MODULE_0__.MaskedInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_1__.BtnLoadingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1tYXNrLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return InputMaskComponent;
}());



/***/ }),

/***/ 12753:
/*!****************************************************************!*\
  !*** ./src/app/views/forms/tag-inputs/tag-inputs.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagInputsComponent": function() { return /* binding */ TagInputsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ 38661);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-chips */ 44436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);






var TagInputsComponent = /** @class */ (function () {
    function TagInputsComponent(dl) {
        this.dl = dl;
        this.items = ['Javascript', 'Typescript'];
        this.tagsCtrl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.items);
        this.tagsCtrl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl([{ display: 'Bangladesh', value: 'BD' }]);
    }
    TagInputsComponent.prototype.ngOnInit = function () {
        this.autocompletes$ = this.dl.getCountries();
    };
    TagInputsComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is ' + item);
    };
    TagInputsComponent.ɵfac = function TagInputsComponent_Factory(t) { return new (t || TagInputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_0__.DataLayerService)); };
    TagInputsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TagInputsComponent, selectors: [["app-tag-inputs"]], decls: 25, vars: 7, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], ["theme", "primary", 3, "formControl", "modelAsStrings", "onSelect"], ["theme", "primary", "placeholder", "Type Country name", 3, "formControl", "onSelect"], [3, "focusFirstElement", "autocompleteItems"]], template: function TagInputsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tag Input");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tag input");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Tag inputs");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tag-input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function TagInputsComponent_Template_tag_input_onSelect_16_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Autocomplete");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tag-input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function TagInputsComponent_Template_tag_input_onSelect_22_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "tag-input-dropdown", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.tagsCtrl1)("modelAsStrings", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.tagsCtrl2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("focusFirstElement", true)("autocompleteItems", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 5, ctx.autocompletes$));
        } }, directives: [ngx_chips__WEBPACK_IMPORTED_MODULE_3__.TagInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, ngx_chips__WEBPACK_IMPORTED_MODULE_3__.TagInputDropdown], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWctaW5wdXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TagInputsComponent;
}());



/***/ }),

/***/ 96389:
/*!********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardComponent": function() { return /* binding */ WizardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _shared_components_form_wizard_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/form-wizard/wizard/wizard.component */ 74514);
/* harmony import */ var _shared_components_form_wizard_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/form-wizard/wizard-step/wizard-step.component */ 71971);




var WizardComponent = /** @class */ (function () {
    function WizardComponent(fb) {
        this.fb = fb;
        this.data = {
            email: ''
        };
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.step2Form = this.fb.group({
            experience: [2]
        });
    };
    WizardComponent.prototype.onStep1Next = function (e) { };
    WizardComponent.prototype.onStep2Next = function (e) { };
    WizardComponent.prototype.onStep3Next = function (e) { };
    WizardComponent.prototype.onComplete = function (e) { };
    WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
    WizardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["app-wizard"]], decls: 93, vars: 17, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [3, "title", "isValid", "onNext"], ["basicForm", "ngForm"], [1, "form-group", "col-md-6", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "First name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "Last name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-6"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "name", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "text", "id", "phone", "name", "phone", "placeholder", "Phone number", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "formGroup"], [1, "col-md-6"], [1, "mb-2"], [1, "checkbox", "checkbox-primary"], ["type", "checkbox", "checked", ""], [1, "checkmark"], [1, "checkbox", "checkbox-secondary"], [1, "checkbox", "checkbox-success"], [1, "radio", "radio-outline-primary"], ["type", "radio", "name", "experience", "formControlName", "experience", 3, "value"], [1, "radio", "radio-outline-success"], [1, "radio", "radio-outline-warning"], [3, "title", "onNext"], ["paymentForm", "ngForm"], ["for", "card"], ["type", "text", "id", "card", "name", "card", "placeholder", "Card Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exp"], ["type", "text", "id", "exp", "name", "exp", "placeholder", "Expires at", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "security"], ["type", "text", "id", "security", "name", "exp", "placeholder", "Security code", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "title", "onComplete"], [1, "text-center", "mt-4", "mb-4"], [1, "i-Checked-User", "text-32", "mb-3", "text-success", "d-inline-block"], [1, "font-weight-light"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Form Wizard");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Wizard");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form-wizard");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "wizard-step", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onNext", function WizardComponent_Template_wizard_step_onNext_13_listener($event) { return ctx.onStep1Next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_20_listener($event) { return ctx.data.firstName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_24_listener($event) { return ctx.data.lastName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_28_listener($event) { return ctx.data.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Phone number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_32_listener($event) { return ctx.data.phone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "wizard-step", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onNext", function WizardComponent_Template_wizard_step_onNext_33_listener($event) { return ctx.onStep2Next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "form", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h6", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Employees");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Coder");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "QA");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h6", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Company age");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Less than 1 Year");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "1-5 Years");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "5+ Years");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "wizard-step", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onNext", function WizardComponent_Template_wizard_step_onNext_72_listener($event) { return ctx.onStep3Next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "form", null, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Card number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_79_listener($event) { return ctx.data.card = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Expires at");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_83_listener($event) { return ctx.data.cardExpiresAt = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "label", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Security code");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WizardComponent_Template_input_ngModelChange_87_listener($event) { return ctx.data.code = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "wizard-step", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onComplete", function WizardComponent_Template_wizard_step_onComplete_88_listener($event) { return ctx.onComplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Thank you! You have completed all the steps.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Basic Info")("isValid", _r0.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Company info")("isValid", ctx.step2Form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.step2Form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Payment Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.card);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.cardExpiresAt);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.code);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Final");
        } }, directives: [_shared_components_form_wizard_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__.WizardComponent, _shared_components_form_wizard_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__.WizardStepComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXphcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_views_forms_forms_module_ts.js.map