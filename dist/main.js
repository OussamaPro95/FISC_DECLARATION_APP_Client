(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ 54453);
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.gaurd */ 57595);
/* harmony import */ var _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layouts/blank-layout/blank-layout.component */ 13447);
/* harmony import */ var _shared_components_layouts_admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component */ 47099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 74788);







var adminRoutes = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_js-src_app_shared_echart-styles_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 54727)).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'uikits',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_js-src_app_shared_echart-styles_ts"), __webpack_require__.e("src_app_views_ui-kits_ui-kits_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/ui-kits/ui-kits.module */ 79996)).then(function (m) { return m.UiKitsModule; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_babel_runtime_regenerator_index_js"), __webpack_require__.e("default-node_modules_ngx-chips_fesm2015_ngx-chips_js-node_modules_ngx-custom-validators_fesm2-caa199"), __webpack_require__.e("src_app_views_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/forms/forms.module */ 43929)).then(function (m) { return m.AppFormsModule; }); }
    },
    {
        path: 'invoice',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_views_invoice_invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/invoice/invoice.module */ 6608)).then(function (m) { return m.InvoiceModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_babel_runtime_regenerator_index_js"), __webpack_require__.e("src_app_views_inbox_inbox_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/inbox/inbox.module */ 72825)).then(function (m) { return m.InboxModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_calendar_calendar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/calendar/calendar.module */ 87837)).then(function (m) { return m.CalendarAppModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/chat/chat.module */ 34130)).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'contacts',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_contacts_contacts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/contacts/contacts.module */ 12008)).then(function (m) { return m.ContactsModule; }); }
    },
    {
        path: 'tables',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_data-tables_data-tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/data-tables/data-tables.module */ 57611)).then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/pages/pages.module */ 21244)).then(function (m) { return m.PagesModule; }); }
    },
    {
        path: 'icons',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/icons/icons.module */ 73150)).then(function (m) { return m.IconsModule; }); }
    },
    {
        path: 'societe',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_babel_runtime_regenerator_index_js"), __webpack_require__.e("default-node_modules_ngx-chips_fesm2015_ngx-chips_js-node_modules_ngx-custom-validators_fesm2-caa199"), __webpack_require__.e("src_app_societe_societe_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./societe/societe.module */ 32496)).then(function (m) { return m.SocieteModule; }); }
    }
];
var routes = [
    {
        path: '',
        redirectTo: 'dashboard/v1',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_sessions_sessions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/sessions/sessions.module */ 95134)).then(function (m) { return m.SessionsModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__.BlankLayoutComponent,
        children: [
            {
                path: 'others',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_others_others_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/others/others.module */ 4443)).then(function (m) { return m.OthersModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_3__.AdminLayoutSidebarCompactComponent,
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_1__.AuthGaurd],
        children: adminRoutes
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bootDash';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 27094);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ 93154);
/* harmony import */ var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/inmemory-db/inmemory-db.service */ 67567);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__.InMemoryWebApiModule.forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_4__.InMemoryDataService, { passThruUnknownUrl: true }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__.InMemoryWebApiModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 7433:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/shared-animations.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAnimations": function() { return /* binding */ SharedAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 56083);

var reusable = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var SharedAnimations = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('animate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(reusable)])]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            display: 'none'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            display: 'block'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms')),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 => 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms'))
    ]),
];


/***/ }),

/***/ 38845:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BtnLoadingComponent": function() { return /* binding */ BtnLoadingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 12057);


function BtnLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function BtnLoadingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BtnLoadingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
} }
var _c0 = function (a0) { return { loading: a0 }; };
var _c1 = ["*"];
var BtnLoadingComponent = /** @class */ (function () {
    function BtnLoadingComponent() {
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    BtnLoadingComponent.prototype.ngOnInit = function () {
    };
    BtnLoadingComponent.ɵfac = function BtnLoadingComponent_Factory(t) { return new (t || BtnLoadingComponent)(); };
    BtnLoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnLoadingComponent, selectors: [["btn-loading"]], inputs: { loading: "loading", btnClass: "btnClass", loadingText: "loadingText", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 11, consts: [[3, "type", "disabled", "ngClass"], ["class", "btn-spinner float-left", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner", "float-left"]], template: function BtnLoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BtnLoadingComponent_div_1_Template, 1, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BtnLoadingComponent_span_2_Template, 2, 0, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BtnLoadingComponent_span_3_Template, 2, 1, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn ", ctx.btnClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.loading));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["button[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all .15s ease-in-out;\n}\n\nbutton.loading[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n\nbutton[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNwQzs7QUFIQTtFQUlRLGtCQUFrQjtBQUcxQjs7QUFQQTtFQU9RLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0FBSWxCIiwiZmlsZSI6ImJ0bi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgICAuYnRuLXNwaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxufVxuIl19 */"] });
    return BtnLoadingComponent;
}());



/***/ }),

/***/ 35831:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerComponent": function() { return /* binding */ CustomizerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/navigation.service */ 21218);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customizer.service */ 60360);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24751);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};








var _c0 = function (a0) { return { active: a0 }; };
function CustomizerComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_7_div_1_Template_div_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); var l_r6 = restoredCtx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.selectLayout(l_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r5.customizer.selectedLayout.name === l_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", l_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CustomizerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomizerComponent_ng_template_7_div_1_Template, 3, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "More layouts coming...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.layouts);
} }
function CustomizerComponent_ngb_panel_8_ng_template_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_ngb_panel_8_ng_template_1_a_1_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); var c_r11 = restoredCtx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r12.selectSidebarColor(c_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r11 = ctx.$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("color ", c_r11.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, (ctx_r10.customizer == null ? null : ctx_r10.customizer.selectedSidebarColor == null ? null : ctx_r10.customizer.selectedSidebarColor.class) === c_r11.class))("title", c_r11.class);
} }
function CustomizerComponent_ngb_panel_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomizerComponent_ngb_panel_8_ng_template_1_a_1_Template, 2, 7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.colors);
} }
function CustomizerComponent_ngb_panel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomizerComponent_ngb_panel_8_ng_template_1_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_12_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.isRTL = $event; })("change", function CustomizerComponent_ng_template_12_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.toggleDir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enable RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.isRTL);
} }
var _c1 = function (a0) { return { open: a0 }; };
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, customizer, router) {
        this.navService = navService;
        this.customizer = customizer;
        this.router = router;
        this.isOpen = true;
        this.colors = [];
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav = __spreadArray([], __read(this.navService.defaultMenu));
        this.layouts = this.customizer.layouts;
        this.colors = this.customizer.colors;
        if (!this.customizer.selectedLayout) {
            this.layouts.forEach(function (layout) {
                if (layout.active) {
                    _this.selectLayout(layout);
                }
            });
        }
        if (!this.customizer.selectedSidebarColor) {
            this.colors.forEach(function (color) {
                if (color.active) {
                    _this.selectSidebarColor(color);
                }
            });
        }
    };
    CustomizerComponent.prototype.ngOnDestroy = function () { };
    CustomizerComponent.prototype.selectLayout = function (selectedLayout) {
        this.customizer.selectedLayout = selectedLayout;
        this.customizer.modifySidebarUrls(this.nav, selectedLayout.name);
        // this.navService.menuItems.next(this.nav);
        this.changeLayoutRoute(selectedLayout.name);
        // reset color on layout change
        if (this.customizer.selectedSidebarColor) {
            this.selectSidebarColor(this.customizer.selectedSidebarColor);
        }
    };
    CustomizerComponent.prototype.selectSidebarColor = function (color) {
        var _this = this;
        setTimeout(function () {
            var adminWrap = document.querySelector(".app-admin-wrap");
            var selectedColor = __assign({}, _this.customizer.selectedSidebarColor);
            _this.customizer.removeClass(adminWrap, selectedColor.sidebarClass);
            _this.customizer.addClass(adminWrap, color.sidebarClass);
            _this.customizer.selectedSidebarColor = color;
        }, 40);
    };
    CustomizerComponent.prototype.changeLayoutRoute = function (route) {
        var currentRoute = this.router.url;
        var changedRoute = this.customizer.replaceUrlString(route, currentRoute);
        this.router.navigateByUrl(changedRoute);
    };
    CustomizerComponent.prototype.toggleDir = function () {
        this.customizer.toggleDir(this.isRTL);
    };
    CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
    CustomizerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], decls: 13, vars: 4, consts: [[1, "customizer", 3, "ngClass"], [1, "handle", 3, "click"], [1, "i-Gear", "spin"], ["perfectScrollbar", "", 1, "customizer-body"], ["activeIds", "tab-layouts, tab-sidebar-colors"], ["acc", "ngbAccordion"], ["title", "Layouts", "id", "tab-layouts"], ["ngbPanelContent", ""], ["id", "tab-sidebar-colors", "title", "Sidebar Colors", 4, "ngIf"], ["title", "Bootstrap themes"], ["title", "Others"], [1, "layouts"], ["class", "layout-box", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "pt-3"], [1, "layout-box", 3, "ngClass", "click"], ["alt", "", 3, "src"], [1, "i-Eye"], ["id", "tab-sidebar-colors", "title", "Sidebar Colors"], [1, "colors"], [3, "class", "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "title", "click"], ["href", "http://gull.ui-lib.com/purple/", 1, "color", "purple"], ["href", "http://gull.ui-lib.com/blue/", 1, "color", "blue"], [1, "checkbox", "checkbox-primary"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "checkmark"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_div_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngb-accordion", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ngb-panel", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomizerComponent_ng_template_7_Template, 4, 1, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CustomizerComponent_ngb_panel_8_Template, 2, 0, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ngb-panel", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CustomizerComponent_ng_template_10_Template, 3, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ngb-panel", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CustomizerComponent_ng_template_12_Template, 5, 1, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customizer.selectedLayout.name !== "applayout-sidebar-large");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CustomizerComponent;
}());



/***/ }),

/***/ 74054:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconComponent": function() { return /* binding */ FeatherIconComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var FeatherIconComponent = /** @class */ (function () {
    function FeatherIconComponent() {
    }
    FeatherIconComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            feather.replace();
        });
    };
    FeatherIconComponent.ɵfac = function FeatherIconComponent_Factory(t) { return new (t || FeatherIconComponent)(); };
    FeatherIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatherIconComponent, selectors: [["feather-icon"]], inputs: { name: "name" }, decls: 1, vars: 1, template: function FeatherIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-feather", ctx.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return FeatherIconComponent;
}());



/***/ }),

/***/ 66526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 0, consts: [[1, "app-footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FooterComponent;
}());



/***/ }),

/***/ 47099:
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutSidebarCompactComponent": function() { return /* binding */ AdminLayoutSidebarCompactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/navigation.service */ 21218);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/search.service */ 43763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-compact/sidebar-compact.component */ 40498);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-sidebar-compact/header-sidebar-compact.component */ 50468);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ 66526);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../search/search.component */ 89727);











function AdminLayoutSidebarCompactComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminLayoutSidebarCompactComponent_app_search_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-search");
} }
var _c0 = function (a0) { return { "sidenav-open": a0 }; };
var _c1 = function () { return { suppressScrollX: true }; };
var AdminLayoutSidebarCompactComponent = /** @class */ (function () {
    function AdminLayoutSidebarCompactComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutSidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteConfigLoadStart || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ResolveStart) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteConfigLoadEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ResolveEnd) {
                _this.moduleLoading = false;
            }
        });
    };
    AdminLayoutSidebarCompactComponent.ɵfac = function AdminLayoutSidebarCompactComponent_Factory(t) { return new (t || AdminLayoutSidebarCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
    AdminLayoutSidebarCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AdminLayoutSidebarCompactComponent, selectors: [["app-admin-layout-sidebar-compact"]], decls: 11, vars: 7, consts: [[1, "sidebar-dark-purple", "app-admin-wrap", "layout-sidebar-compact", "clearfix", 3, "ngClass"], [1, "side-content-wrap"], [1, "main-content-wrap", "d-flex", "flex-column", 3, "perfectScrollbar"], [1, "main-content"], [1, "flex-grow-1"], ["class", "module-loader", 4, "ngIf"], [4, "ngIf"], [1, "module-loader"], [1, "spinner", "spinner-bubble", "spinner-bubble-primary", "mr-3"]], template: function AdminLayoutSidebarCompactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sidebar-compact");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-header-sidebar-compact");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AdminLayoutSidebarCompactComponent_div_9_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AdminLayoutSidebarCompactComponent_app_search_10_Template, 1, 0, "app-search", 6);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, ctx.navService.sidebarState.sidenavOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.moduleLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchService.searchOpen);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__.SidebarCompactComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_3__.HeaderSidebarCompactComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQtc2lkZWJhci1jb21wYWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AdminLayoutSidebarCompactComponent;
}());



/***/ }),

/***/ 50468:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderSidebarCompactComponent": function() { return /* binding */ HeaderSidebarCompactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ 21218);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/search.service */ 43763);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 10629);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _directives_full_screen_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../directives/full-screen.directive */ 25914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pipes/relative-time.pipe */ 84075);
/* harmony import */ var _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pipes/excerpt.pipe */ 10667);











function HeaderSidebarCompactComponent_div_121_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-", item_r1.status, " ml-1 mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.badge);
} }
var _c0 = function (a0) { return [a0]; };
function HeaderSidebarCompactComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HeaderSidebarCompactComponent_div_121_span_7_Template, 2, 4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "relativeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "excerpt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c0, item_r1.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("", item_r1.icon, " text-", item_r1.status, " mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, item_r1.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 11, item_r1.text, 30));
} }
var HeaderSidebarCompactComponent = /** @class */ (function () {
    function HeaderSidebarCompactComponent(navService, searchService, auth) {
        this.navService = navService;
        this.searchService = searchService;
        this.auth = auth;
        this.notifications = [
            {
                icon: "i-Speach-Bubble-6",
                title: "New message",
                badge: "3",
                text: "James: Hey! are you busy?",
                time: new Date(),
                status: "primary",
                link: "/chat"
            },
            {
                icon: "i-Receipt-3",
                title: "New order received",
                badge: "$4036",
                text: "1 Headphone, 3 iPhone x",
                time: new Date("11/11/2018"),
                status: "success",
                link: "/tables/full"
            },
            {
                icon: "i-Empty-Box",
                title: "Product out of stock",
                text: "Headphone E67, R98, XL90, Q77",
                time: new Date("11/10/2018"),
                status: "danger",
                link: "/tables/list"
            },
            {
                icon: "i-Data-Power",
                title: "Server up!",
                text: "Server rebooted successfully",
                time: new Date("11/08/2018"),
                status: "success",
                link: "/dashboard/v2"
            },
            {
                icon: "i-Data-Block",
                title: "Server down!",
                badge: "Resolved",
                text: "Region 1: Server crashed!",
                time: new Date("11/06/2018"),
                status: "danger",
                link: "/dashboard/v3"
            }
        ];
    }
    HeaderSidebarCompactComponent.prototype.ngOnInit = function () { };
    HeaderSidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    HeaderSidebarCompactComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderSidebarCompactComponent.ɵfac = function HeaderSidebarCompactComponent_Factory(t) { return new (t || HeaderSidebarCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
    HeaderSidebarCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HeaderSidebarCompactComponent, selectors: [["app-header-sidebar-compact"]], decls: 134, vars: 5, consts: [[1, "main-header"], [1, "logo"], ["src", "./assets/images/logo.png", "alt", ""], [1, "menu-toggle", 3, "click"], [1, "d-flex", "align-items-center"], ["ngbDropdown", "", 1, "mega-menu", "d-none", "d-md-block"], ["ngbDropdownToggle", "", "href", "#", 1, "btn", "text-muted", "dropdown-toggle", "mr-3"], ["ngbDropdownMenu", "", "perfectScrollbar", ""], [1, "row", "m-0"], [1, "col-md-4", "p-4", "bg-img"], [1, "title"], [1, "mb-4"], [1, "btn", "btn-lg", "btn-rounded", "btn-outline-warning"], [1, "col-md-4", "p-4"], [1, "text-primary", "text--cap", "border-bottom-primary", "d-inline-block"], [1, "menu-icon-grid", "w-auto", "p-0"], ["href", "#"], [1, "i-Shop-4"], [1, "i-Library"], [1, "i-Drop"], [1, "i-File-Clipboard-File--Text"], [1, "i-Checked-User"], [1, "i-Ambulance"], [1, "links"], ["href", "accordion.html"], ["href", "alerts.html"], ["href", "buttons.html"], ["href", "badges.html"], ["href", "carousel.html"], ["href", "lists.html"], ["href", "popover.html"], ["href", "tables.html"], ["href", "datatables.html"], ["href", "modals.html"], ["href", "nouislider.html"], ["href", "tabs.html"], [1, "search-bar"], ["type", "text", "placeholder", "Search", 3, "focus"], [1, "search-icon", "text-muted", "i-Magnifi-Glass1"], [2, "margin", "auto"], [1, "header-part-right"], ["role", "button", 1, "i-Magnifi-Glass1", "header-icon", 3, "click"], ["fullScreenWindow", "", "role", "button", 1, "i-Full-Screen", "header-icon", "d-none", "d-sm-inline-block"], ["ngbDropdown", "", 1, "d-none", "d-sm-inline-block", 3, "placement"], ["ngbDropdownToggle", "", "role", "button", 1, "i-Gear", "text-muted", "header-icon"], ["ngbDropdownMenu", "", 1, "menu-icon-grid-dropdown"], [1, "menu-icon-grid"], ["ngbDropdown", "", 3, "placement"], [1, "badge-top-container"], [1, "badge", "badge-primary"], ["ngbDropdownToggle", "", "role", "button", 1, "i-Bell", "text-muted", "header-icon"], ["ngbDropdownMenu", "", "perfectScrollbar", "", 1, "notification-dropdown", "rtl-ps-none"], ["class", "dropdown-item d-flex", 3, "routerLink", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "user", "col", "align-self-end", 3, "placement"], ["src", "./assets/images/faces/1.jpg", "id", "userDropdown", "ngbDropdownToggle", "", "alt", ""], ["ngbDropdownMenu", "", "aria-labelledby", "userDropdown"], [1, "dropdown-header"], [1, "i-Lock-User", "mr-1"], [1, "dropdown-item"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item", "d-flex", 3, "routerLink"], [1, "notification-icon"], [1, "notification-details", "flex-grow-1"], [1, "m-0", "d-flex", "align-items-center"], [3, "class", 4, "ngIf"], [1, "flex-grow-1"], [1, "text-small", "text-muted", "ml-auto"], [1, "text-small", "text-muted", "m-0"]], template: function HeaderSidebarCompactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderSidebarCompactComponent_Template_div_click_3_listener() { return ctx.toggelSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Mega Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h2", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Mega Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat.");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Learn More");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " UI Kits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Apps");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Sessions");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Components");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "ul", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Alerts");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Badges");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Carousels");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Lists");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Tables");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Datatables");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Modals");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Sliders");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "a", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Tabs");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function HeaderSidebarCompactComponent_Template_input_focus_87_listener() { return ctx.searchService.searchOpen = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "i", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderSidebarCompactComponent_Template_i_click_91_listener() { return ctx.searchService.searchOpen = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, " UI Kits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Apps");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, " Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](110, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, " Sessions");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, " Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "i", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, HeaderSidebarCompactComponent_div_121_Template, 15, 16, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "img", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](126, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, " Timothy Carlson ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Account settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Billing history");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "button", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderSidebarCompactComponent_Template_button_click_132_listener() { return ctx.signout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Sign out");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placement", "bottom-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placement", "bottom-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.notifications == null ? null : ctx.notifications.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.notifications);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placement", "bottom-right");
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _directives_full_screen_directive__WEBPACK_IMPORTED_MODULE_3__.FullScreenWindowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__.RelativeTimePipe, _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__.ExcerptPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItc2lkZWJhci1jb21wYWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return HeaderSidebarCompactComponent;
}());



/***/ }),

/***/ 40498:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarCompactComponent": function() { return /* binding */ SidebarCompactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ 21218);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../directives/dropdown.directive */ 8971);
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../directives/dropdown-link.directive */ 2885);
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../directives/dropdown-anchor.directive */ 18163);











function SidebarCompactComponent_li_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_li_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.closeChildNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.name);
} }
function SidebarCompactComponent_li_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function SidebarCompactComponent_li_4_div_2_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.selectItem(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.name);
} }
function SidebarCompactComponent_li_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", item_r4.state, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.name);
} }
function SidebarCompactComponent_li_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 21);
} }
var _c0 = function (a0) { return { active: a0 }; };
function SidebarCompactComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_li_4_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); var item_r4 = restoredCtx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onClickChangeActiveFlag(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_li_4_div_1_Template, 4, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarCompactComponent_li_4_div_2_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarCompactComponent_li_4_div_3_Template, 5, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidebarCompactComponent_li_4_div_4_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, item_r4.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled && item_r4.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled && item_r4.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled && item_r4.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled);
} }
function SidebarCompactComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function SidebarCompactComponent_ng_template_15_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r21.icon);
} }
var _c1 = function (a0) { return { open: a0 }; };
function SidebarCompactComponent_ng_template_15_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_ng_template_15_li_1_a_1_i_1_Template, 1, 2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r21.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c1, item_r21.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21 == null ? null : item_r21.name);
} }
function SidebarCompactComponent_ng_template_15_li_1_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r21.icon);
} }
function SidebarCompactComponent_ng_template_15_li_1_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
var _c2 = function (a0) { return { parentItem: a0 }; };
function SidebarCompactComponent_ng_template_15_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarCompactComponent_ng_template_15_li_1_div_2_i_2_Template, 1, 2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SidebarCompactComponent_ng_template_15_li_1_div_2_ng_container_6_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, item_r21.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21 == null ? null : item_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, item_r21));
} }
function SidebarCompactComponent_ng_template_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_ng_template_15_li_1_a_1_Template, 4, 6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarCompactComponent_ng_template_15_li_1_div_2_Template, 7, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.type === "dropDown");
} }
function SidebarCompactComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_ng_template_15_li_1_Template, 3, 2, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var parentItem_r19 = ctx.parentItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", parentItem_r19 == null ? null : parentItem_r19.sub);
} }
var SidebarCompactComponent = /** @class */ (function () {
    function SidebarCompactComponent(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    SidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$.subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarCompactComponent.prototype.selectItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarCompactComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarCompactComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.selectedItem = item;
                            item.active = true;
                            // subItem.active = true;
                            // debugger;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarCompactComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    SidebarCompactComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    SidebarCompactComponent.ɵfac = function SidebarCompactComponent_Factory(t) { return new (t || SidebarCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
    SidebarCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SidebarCompactComponent, selectors: [["app-sidebar-compact"]], hostBindings: function SidebarCompactComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function SidebarCompactComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        } }, decls: 18, vars: 16, consts: [["perfectScrollbar", "", 1, "sidebar-left", "rtl-ps-none", 3, "ngClass"], [1, "logo"], ["src", "./assets/images/logo-white.png", "alt", ""], [1, "navigation-left"], ["class", "nav-item lvl1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["perfectScrollbar", "", 1, "sidebar-left-secondary", "rtl-ps-none", 3, "ngClass"], [1, "sidebar-close", "i-Close", 3, "click"], ["src", "./assets/images/logo-text.png", "alt", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTemplate", ""], [1, "sidebar-overlay", 3, "ngClass", "click"], [1, "nav-item", "lvl1", 3, "ngClass", "click"], ["class", "nav-item-hold", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-item-hold", 3, "mouseenter", 4, "ngIf"], ["class", "nav-item-hold", 4, "ngIf"], ["class", "triangle", 4, "ngIf"], [1, "nav-item-hold", 3, "routerLink", "click"], [1, "nav-text"], [1, "nav-item-hold", 3, "mouseenter"], [1, "nav-item-hold"], ["target", "_blank", 3, "href"], [1, "triangle"], ["appDropdown", "", 1, "childNav"], ["appDropdownLink", "", "class", "nav-item", 4, "ngFor", "ngForOf"], ["appDropdownLink", "", 1, "nav-item"], ["class", "", "routerLinkActive", "open", 3, "routerLink", "ngClass", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "open", 1, "", 3, "routerLink", "ngClass"], [3, "class", 4, "ngIf"], [1, "item-name", "lvl1"], ["appDropdownToggle", "", "routerLinkActive", "open", 3, "ngClass"], [1, "item-name"], [1, "dd-arrow", "i-Arrow-Down"]], template: function SidebarCompactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidebarCompactComponent_li_4_Template, 5, 7, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_Template_i_click_6_listener() { return ctx.toggelSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SidebarCompactComponent_ng_container_14_Template, 1, 0, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SidebarCompactComponent_ng_template_15_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_Template_div_click_17_listener() { return ctx.closeChildNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, ctx.navService.sidebarState.sidenavOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.nav);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, ctx.navService.sidebarState.childnavOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedItem == null ? null : ctx.selectedItem.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedItem == null ? null : ctx.selectedItem.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx.selectedItem));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c1, ctx.navService.sidebarState.childnavOpen));
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownAnchorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLWNvbXBhY3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SidebarCompactComponent;
}());



/***/ }),

/***/ 89404:
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutSidebarLargeComponent": function() { return /* binding */ AdminLayoutSidebarLargeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/navigation.service */ 21218);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/search.service */ 43763);
/* harmony import */ var _header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-sidebar-large/header-sidebar-large.component */ 3863);
/* harmony import */ var _sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-large/sidebar-large.component */ 61237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ 66526);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../customizer/customizer.component */ 35831);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../search/search.component */ 89727);













function AdminLayoutSidebarLargeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AdminLayoutSidebarLargeComponent_app_search_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-search");
} }
var _c0 = function (a0) { return { "sidenav-open": a0 }; };
var _c1 = function () { return { suppressScrollX: true }; };
var AdminLayoutSidebarLargeComponent = /** @class */ (function () {
    function AdminLayoutSidebarLargeComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutSidebarLargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteConfigLoadStart || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.ResolveStart) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteConfigLoadEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.ResolveEnd) {
                _this.moduleLoading = false;
            }
        });
    };
    AdminLayoutSidebarLargeComponent.ɵfac = function AdminLayoutSidebarLargeComponent_Factory(t) { return new (t || AdminLayoutSidebarLargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
    AdminLayoutSidebarLargeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AdminLayoutSidebarLargeComponent, selectors: [["app-admin-layout-sidebar-large"]], viewQuery: function AdminLayoutSidebarLargeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, 7);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.perfectScrollbar = _t.first);
        } }, decls: 12, vars: 7, consts: [[1, "app-admin-wrap", "layout-sidebar-large"], [1, "side-content-wrap"], [1, "main-content-wrap", "d-flex", "flex-column", 3, "ngClass", "perfectScrollbar"], [1, "flex-grow-1"], ["class", "module-loader", 4, "ngIf"], [4, "ngIf"], [1, "module-loader"], [1, "spinner", "spinner-bubble", "spinner-bubble-primary", "mr-3"]], template: function AdminLayoutSidebarLargeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-header-sidebar-large");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-sidebar-large");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AdminLayoutSidebarLargeComponent_div_9_Template, 2, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AdminLayoutSidebarLargeComponent_app_search_10_Template, 1, 0, "app-search", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-customizer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, ctx.navService.sidebarState.sidenavOpen))("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.moduleLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchService.searchOpen);
        } }, directives: [_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_2__.HeaderSidebarLargeComponent, _sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_3__.SidebarLargeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_5__.CustomizerComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQtc2lkZWJhci1sYXJnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AdminLayoutSidebarLargeComponent;
}());



/***/ }),

/***/ 3863:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.ts ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderSidebarLargeComponent": function() { return /* binding */ HeaderSidebarLargeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/navigation.service */ 21218);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/search.service */ 43763);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 10629);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _directives_full_screen_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../directives/full-screen.directive */ 25914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pipes/relative-time.pipe */ 84075);
/* harmony import */ var _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pipes/excerpt.pipe */ 10667);











function HeaderSidebarLargeComponent_div_121_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-", item_r1.status, " ml-1 mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.badge);
} }
var _c0 = function (a0) { return [a0]; };
function HeaderSidebarLargeComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HeaderSidebarLargeComponent_div_121_span_7_Template, 2, 4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "relativeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "excerpt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c0, item_r1.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("", item_r1.icon, " text-", item_r1.status, " mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, item_r1.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 11, item_r1.text, 30));
} }
var HeaderSidebarLargeComponent = /** @class */ (function () {
    function HeaderSidebarLargeComponent(navService, searchService, auth) {
        this.navService = navService;
        this.searchService = searchService;
        this.auth = auth;
        this.notifications = [
            {
                icon: 'i-Speach-Bubble-6',
                title: 'New message',
                badge: '3',
                text: 'James: Hey! are you busy?',
                time: new Date(),
                status: 'primary',
                link: '/chat'
            },
            {
                icon: 'i-Receipt-3',
                title: 'New order received',
                badge: '$4036',
                text: '1 Headphone, 3 iPhone x',
                time: new Date('11/11/2018'),
                status: 'success',
                link: '/tables/full'
            },
            {
                icon: 'i-Empty-Box',
                title: 'Product out of stock',
                text: 'Headphone E67, R98, XL90, Q77',
                time: new Date('11/10/2018'),
                status: 'danger',
                link: '/tables/list'
            },
            {
                icon: 'i-Data-Power',
                title: 'Server up!',
                text: 'Server rebooted successfully',
                time: new Date('11/08/2018'),
                status: 'success',
                link: '/dashboard/v2'
            },
            {
                icon: 'i-Data-Block',
                title: 'Server down!',
                badge: 'Resolved',
                text: 'Region 1: Server crashed!',
                time: new Date('11/06/2018'),
                status: 'danger',
                link: '/dashboard/v3'
            }
        ];
    }
    HeaderSidebarLargeComponent.prototype.ngOnInit = function () {
    };
    HeaderSidebarLargeComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        if (state.childnavOpen && state.sidenavOpen) {
            return state.childnavOpen = false;
        }
        if (!state.childnavOpen && state.sidenavOpen) {
            return state.sidenavOpen = false;
        }
        // item has child items
        if (!state.sidenavOpen && !state.childnavOpen
            && this.navService.selectedItem.type === 'dropDown') {
            state.sidenavOpen = true;
            setTimeout(function () {
                state.childnavOpen = true;
            }, 50);
        }
        // item has no child items
        if (!state.sidenavOpen && !state.childnavOpen) {
            state.sidenavOpen = true;
        }
    };
    HeaderSidebarLargeComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderSidebarLargeComponent.ɵfac = function HeaderSidebarLargeComponent_Factory(t) { return new (t || HeaderSidebarLargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
    HeaderSidebarLargeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HeaderSidebarLargeComponent, selectors: [["app-header-sidebar-large"]], decls: 134, vars: 5, consts: [[1, "main-header"], [1, "logo"], ["src", "./assets/images/logo.png", "alt", ""], [1, "menu-toggle", 3, "click"], [1, "d-flex", "align-items-center"], ["ngbDropdown", "", 1, "mega-menu", "d-none", "d-md-block"], ["ngbDropdownToggle", "", "href", "#", 1, "btn", "text-muted", "dropdown-toggle", "mr-3"], ["ngbDropdownMenu", "", "perfectScrollbar", ""], [1, "row", "m-0"], [1, "col-md-4", "p-4", "bg-img"], [1, "title"], [1, "mb-4"], [1, "btn", "btn-lg", "btn-rounded", "btn-outline-warning"], [1, "col-md-4", "p-4"], [1, "text-primary", "text--cap", "border-bottom-primary", "d-inline-block"], [1, "menu-icon-grid", "w-auto", "p-0"], ["href", "#"], [1, "i-Shop-4"], [1, "i-Library"], [1, "i-Drop"], [1, "i-File-Clipboard-File--Text"], [1, "i-Checked-User"], [1, "i-Ambulance"], [1, "links"], ["href", "accordion.html"], ["href", "alerts.html"], ["href", "buttons.html"], ["href", "badges.html"], ["href", "carousel.html"], ["href", "lists.html"], ["href", "popover.html"], ["href", "tables.html"], ["href", "datatables.html"], ["href", "modals.html"], ["href", "nouislider.html"], ["href", "tabs.html"], [1, "search-bar"], ["type", "text", "placeholder", "Search", 3, "focus"], [1, "search-icon", "text-muted", "i-Magnifi-Glass1"], [2, "margin", "auto"], [1, "header-part-right"], ["role", "button", 1, "i-Magnifi-Glass1", "header-icon", 3, "click"], ["fullScreenWindow", "", "role", "button", 1, "i-Full-Screen", "header-icon", "d-none", "d-sm-inline-block"], ["ngbDropdown", "", 1, "d-none", "d-sm-inline-block", 3, "placement"], ["ngbDropdownToggle", "", "role", "button", 1, "i-Gear", "text-muted", "header-icon"], ["ngbDropdownMenu", "", 1, "menu-icon-grid-dropdown"], [1, "menu-icon-grid"], ["ngbDropdown", "", 3, "placement"], [1, "badge-top-container"], [1, "badge", "badge-primary"], ["ngbDropdownToggle", "", "role", "button", 1, "i-Bell", "text-muted", "header-icon"], ["ngbDropdownMenu", "", "perfectScrollbar", "", 1, "notification-dropdown", "rtl-ps-none"], ["class", "dropdown-item d-flex", 3, "routerLink", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "user", "col", "align-self-end", 3, "placement"], ["src", "./assets/images/faces/1.jpg", "id", "userDropdown", "ngbDropdownToggle", "", "alt", ""], ["ngbDropdownMenu", "", "aria-labelledby", "userDropdown", 1, "header-account-dropdown"], [1, "dropdown-header"], [1, "i-Lock-User", "mr-1"], [1, "dropdown-item"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item", "d-flex", 3, "routerLink"], [1, "notification-icon"], [1, "notification-details", "flex-grow-1"], [1, "m-0", "d-flex", "align-items-center"], [3, "class", 4, "ngIf"], [1, "flex-grow-1"], [1, "text-small", "text-muted", "ml-auto"], [1, "text-small", "text-muted", "m-0"]], template: function HeaderSidebarLargeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderSidebarLargeComponent_Template_div_click_3_listener() { return ctx.toggelSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Mega Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h2", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Mega Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat.");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Learn More");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " UI Kits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Apps");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Sessions");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Components");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "ul", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Alerts");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Badges");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Carousels");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Lists");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Tables");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Datatables");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Modals");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Sliders");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "a", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Tabs");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function HeaderSidebarLargeComponent_Template_input_focus_87_listener() { return ctx.searchService.searchOpen = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "i", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderSidebarLargeComponent_Template_i_click_91_listener() { return ctx.searchService.searchOpen = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, " UI Kits");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Apps");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, " Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](110, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, " Sessions");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, " Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "i", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, HeaderSidebarLargeComponent_div_121_Template, 15, 16, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "img", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](126, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, " Timothy Carlson ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Account settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Billing history");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "button", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderSidebarLargeComponent_Template_button_click_132_listener() { return ctx.signout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Sign out");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placement", "bottom-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placement", "bottom-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.notifications.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.notifications);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placement", "bottom-right");
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _directives_full_screen_directive__WEBPACK_IMPORTED_MODULE_3__.FullScreenWindowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__.RelativeTimePipe, _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__.ExcerptPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItc2lkZWJhci1sYXJnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return HeaderSidebarLargeComponent;
}());



/***/ }),

/***/ 61237:
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLargeComponent": function() { return /* binding */ SidebarLargeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ 21218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../directives/dropdown.directive */ 8971);
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../directives/dropdown-link.directive */ 2885);
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../directives/dropdown-anchor.directive */ 18163);












function SidebarLargeComponent_li_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarLargeComponent_li_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.closeChildNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.name);
} }
function SidebarLargeComponent_li_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function SidebarLargeComponent_li_4_div_2_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.selectItem(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.name);
} }
function SidebarLargeComponent_li_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", item_r4.state, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.name);
} }
function SidebarLargeComponent_li_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 19);
} }
var _c0 = function (a0) { return { active: a0 }; };
function SidebarLargeComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarLargeComponent_li_4_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); var item_r4 = restoredCtx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onClickChangeActiveFlag(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarLargeComponent_li_4_div_1_Template, 4, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarLargeComponent_li_4_div_2_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarLargeComponent_li_4_div_3_Template, 5, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidebarLargeComponent_li_4_div_4_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, item_r4.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled && item_r4.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled && item_r4.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled && item_r4.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r4.disabled);
} }
function SidebarLargeComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function SidebarLargeComponent_ng_template_12_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r21.icon);
} }
function SidebarLargeComponent_ng_template_12_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarLargeComponent_ng_template_12_li_1_a_1_i_1_Template, 1, 2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r21.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21.name);
} }
function SidebarLargeComponent_ng_template_12_li_1_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r21.icon);
} }
function SidebarLargeComponent_ng_template_12_li_1_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
var _c1 = function (a0) { return { open: a0 }; };
var _c2 = function (a0) { return { parentItem: a0 }; };
function SidebarLargeComponent_ng_template_12_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarLargeComponent_ng_template_12_li_1_div_2_i_2_Template, 1, 2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SidebarLargeComponent_ng_template_12_li_1_div_2_ng_container_6_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, item_r21.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, item_r21));
} }
function SidebarLargeComponent_ng_template_12_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarLargeComponent_ng_template_12_li_1_a_1_Template, 4, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarLargeComponent_ng_template_12_li_1_div_2_Template, 7, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r21.type === "dropDown");
} }
function SidebarLargeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarLargeComponent_ng_template_12_li_1_Template, 3, 2, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var parentItem_r19 = ctx.parentItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", parentItem_r19 == null ? null : parentItem_r19.sub);
} }
var _c3 = function () { return { suppressScrollX: true }; };
var SidebarLargeComponent = /** @class */ (function () {
    function SidebarLargeComponent(router, navService) {
        var _this = this;
        this.router = router;
        this.navService = navService;
        setTimeout(function () {
            _this.psContainerSecSidebar = _this.psContainers.toArray()[1];
        });
    }
    SidebarLargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$.subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarLargeComponent.prototype.selectItem = function (item) {
        var _this = this;
        this.navService.sidebarState.childnavOpen = true;
        this.navService.selectedItem = item;
        this.setActiveMainItem(item);
        // Scroll to top secondary sidebar
        setTimeout(function () {
            _this.psContainerSecSidebar.update();
            _this.psContainerSecSidebar.scrollToTop(0, 400);
        });
    };
    SidebarLargeComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarLargeComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarLargeComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (i) {
            i.active = false;
        });
        item.active = true;
    };
    SidebarLargeComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.navService.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.navService.selectedItem = item;
                            item.active = true;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.navService.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarLargeComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarLargeComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    SidebarLargeComponent.ɵfac = function SidebarLargeComponent_Factory(t) { return new (t || SidebarLargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
    SidebarLargeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SidebarLargeComponent, selectors: [["app-sidebar-large"]], viewQuery: function SidebarLargeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.psContainers = _t);
        } }, hostBindings: function SidebarLargeComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function SidebarLargeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        } }, decls: 15, vars: 18, consts: [[1, "sidebar-left", "rtl-ps-none", 3, "ngClass", "perfectScrollbar"], [1, "logo"], ["src", "./assets/images/logo.png", "alt", ""], [1, "navigation-left"], ["class", "nav-item lvl1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-left-secondary", "rtl-ps-none", 3, "ngClass", "perfectScrollbar", "mouseleave"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTemplate", ""], [1, "sidebar-overlay", 3, "ngClass", "click"], [1, "nav-item", "lvl1", 3, "ngClass", "click"], ["class", "nav-item-hold", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-item-hold", 3, "mouseenter", 4, "ngIf"], ["class", "nav-item-hold", 4, "ngIf"], ["class", "triangle", 4, "ngIf"], [1, "nav-item-hold", 3, "routerLink", "click"], [1, "nav-text"], [1, "nav-item-hold", 3, "mouseenter"], [1, "nav-item-hold"], ["target", "_blank", 3, "href"], [1, "triangle"], ["appDropdown", "", 1, "childNav"], ["appDropdownLink", "", "class", "nav-item", 4, "ngFor", "ngForOf"], ["appDropdownLink", "", 1, "nav-item"], ["class", "", "routerLinkActive", "open", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "open", 1, "", 3, "routerLink"], [3, "class", 4, "ngIf"], [1, "item-name", "lvl1"], ["appDropdownToggle", "", "routerLinkActive", "open", 3, "ngClass"], [1, "item-name"], [1, "dd-arrow", "i-Arrow-Down"]], template: function SidebarLargeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidebarLargeComponent_li_4_Template, 5, 7, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseleave", function SidebarLargeComponent_Template_div_mouseleave_5_listener() { return ctx.closeChildNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Apps");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SidebarLargeComponent_ng_container_11_Template, 1, 0, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SidebarLargeComponent_ng_template_12_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarLargeComponent_Template_div_click_14_listener() { return ctx.closeChildNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, ctx.navService.sidebarState.sidenavOpen))("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.nav);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c1, ctx.navService.sidebarState.childnavOpen))("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, ctx.navService.selectedItem));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c1, ctx.navService.sidebarState.childnavOpen));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownAnchorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLWxhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return SidebarLargeComponent;
}());



/***/ }),

/***/ 54453:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": function() { return /* binding */ AuthLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
    AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 3, vars: 0, consts: [[1, "auth-layout-wrap", 2, "background-image", "url(./assets/images/photo-wide-4.jpg)"], [1, "auth-content"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AuthLayoutComponent;
}());



/***/ }),

/***/ 13447:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankLayoutComponent": function() { return /* binding */ BlankLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);


var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngOnInit = function () {
    };
    BlankLayoutComponent.ɵfac = function BlankLayoutComponent_Factory(t) { return new (t || BlankLayoutComponent)(); };
    BlankLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankLayoutComponent, selectors: [["app-blank-layout"]], decls: 1, vars: 0, template: function BlankLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BlankLayoutComponent;
}());



/***/ }),

/***/ 58738:
/*!*************************************************************!*\
  !*** ./src/app/shared/components/layouts/layouts.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": function() { return /* binding */ LayoutsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout-sidebar-large/admin-layout-sidebar-large.component */ 89404);
/* harmony import */ var _admin_layout_sidebar_large_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component */ 3863);
/* harmony import */ var _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/admin-layout-sidebar-compact.component */ 47099);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 54453);
/* harmony import */ var _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blank-layout/blank-layout.component */ 13447);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/shared-pipes.module */ 81233);
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.module */ 83834);
/* harmony import */ var _admin_layout_sidebar_large_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-layout-sidebar-large/sidebar-large/sidebar-large.component */ 61237);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component */ 40498);
/* harmony import */ var _admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component */ 50468);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.component */ 66526);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customizer/customizer.component */ 35831);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/shared-directives.module */ 72747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 74788);



















var components = [
    _admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_9__.HeaderSidebarCompactComponent,
    _admin_layout_sidebar_large_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_1__.HeaderSidebarLargeComponent,
    _admin_layout_sidebar_large_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_7__.SidebarLargeComponent,
    _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_8__.SidebarCompactComponent,
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent,
    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__.CustomizerComponent,
    _admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutSidebarLargeComponent,
    _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutSidebarCompactComponent,
    _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__.AuthLayoutComponent,
    _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__.BlankLayoutComponent,
];
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
    LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: LayoutsModule });
    LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
                _search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule,
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__.SharedPipesModule,
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_12__.SharedDirectivesModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule
            ]] });
    return LayoutsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_9__.HeaderSidebarCompactComponent,
        _admin_layout_sidebar_large_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_1__.HeaderSidebarLargeComponent,
        _admin_layout_sidebar_large_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_7__.SidebarLargeComponent,
        _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_8__.SidebarCompactComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent,
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__.CustomizerComponent,
        _admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutSidebarLargeComponent,
        _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutSidebarCompactComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__.AuthLayoutComponent,
        _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__.BlankLayoutComponent], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule,
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__.SharedPipesModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_12__.SharedDirectivesModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule], exports: [_admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_9__.HeaderSidebarCompactComponent,
        _admin_layout_sidebar_large_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_1__.HeaderSidebarLargeComponent,
        _admin_layout_sidebar_large_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_7__.SidebarLargeComponent,
        _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_8__.SidebarCompactComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent,
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__.CustomizerComponent,
        _admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutSidebarLargeComponent,
        _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutSidebarCompactComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__.AuthLayoutComponent,
        _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__.BlankLayoutComponent] }); })();


/***/ }),

/***/ 89727:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": function() { return /* binding */ SearchComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/shared-animations */ 7433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-layer.service */ 38661);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ 43763);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 41801);
var __read = (undefined && undefined.__read) || function (o, n) {
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
};











var _c0 = function (a0) { return { delay: a0, y: "50px" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function SearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Gadget");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "del", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, i_r3 * 100 + "ms")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, item_r2 == null ? null : item_r2.price == null ? null : item_r2.price.sale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 11, item_r2 == null ? null : item_r2.price == null ? null : item_r2.price.previous));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-outline-", item_r2 == null ? null : item_r2.badge == null ? null : item_r2.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.badge == null ? null : item_r2.badge.text);
} }
function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "pagination-controls", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function SearchComponent_div_13_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
var _c2 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c3 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
var SearchComponent = /** @class */ (function () {
    function SearchComponent(dl, searchService) {
        this.dl = dl;
        this.searchService = searchService;
        this.page = 1;
        this.pageSize = 6;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.results$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)(this.dl.getProducts(), this.searchCtrl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200)))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_a) {
            var _b = __read(_a, 2), products = _b[0], searchTerm = _b[1];
            return products.filter(function (p) {
                return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }));
    };
    SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService)); };
    SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 15, vars: 17, consts: [["perfectScrollbar", "", 1, "search-ui", "rtl-ps-none"], [1, "search-header"], ["src", "./assets/images/logo.png", "alt", "", 1, "logo"], [1, "btn", "btn-icon", "bg-transparent", "float-right", "mt-2", 3, "click"], [1, "i-Close-Window", "text-22", "text-muted"], ["type", "text", "placeholder", "Type here", "autofocus", "", 1, "search-input", 3, "formControl"], [1, "search-title"], [1, "text-muted"], [1, "search-results", "list-horizontal"], ["class", "list-item col-md-12 p-0", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "list-item", "col-md-12", "p-0"], [1, "card", "o-hidden", "flex-row", "mb-4", "d-flex"], [1, "list-thumb", "d-flex"], ["alt", "", 3, "src"], [1, "flex-grow-1", "pl-2", "d-flex"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "justify-content-between", "align-items-lg-center", "flex-lg-row"], ["href", "", 1, "w-40", "w-sm-100"], [1, "item-title"], [1, "m-0", "text-muted", "text-small", "w-15", "w-sm-100"], [1, "text-secondary"], [1, "m-0", "text-muted", "text-small", "w-15", "w-sm-100", "d-none", "d-lg-block", "item-badges"], [1, "col-md-12", "mt-3"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() { return ctx.searchService.searchOpen = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Search results");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 20, 17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 2, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.searchCtrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, ctx.results$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c3, ctx.pageSize, ctx.page)));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 9, ctx.results$));
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__.SharedAnimations] } });
    return SearchComponent;
}());



/***/ }),

/***/ 83834:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/search/search.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": function() { return /* binding */ SearchModule; }
/* harmony export */ });
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 89727);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 41801);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);






var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
    SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchModule });
    SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule
            ]] });
    return SearchModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule], exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent] }); })();


/***/ }),

/***/ 50933:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": function() { return /* binding */ SharedComponentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn-loading/btn-loading.component */ 38845);
/* harmony import */ var _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feather-icon/feather-icon.component */ 74054);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ 81233);
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.module */ 83834);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/shared-directives.module */ 72747);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/layouts.module */ 58738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);











var components = [
    _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent,
    _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconComponent,
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
    SharedComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
    SharedComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
                _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__.LayoutsModule,
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__.SharedPipesModule,
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__.SharedDirectivesModule,
                _search_search_module__WEBPACK_IMPORTED_MODULE_3__.SearchModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule
            ]] });
    return SharedComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent,
        _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__.LayoutsModule,
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__.SharedPipesModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__.SharedDirectivesModule,
        _search_search_module__WEBPACK_IMPORTED_MODULE_3__.SearchModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule], exports: [_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent,
        _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconComponent] }); })();


/***/ }),

/***/ 18163:
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownAnchorDirective": function() { return /* binding */ DropdownAnchorDirective; }
/* harmony export */ });
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-link.directive */ 2885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);



var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective)); };
    DropdownAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ 2885:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownLinkDirective": function() { return /* binding */ DropdownLinkDirective; }
/* harmony export */ });
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 8971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);



var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective)); };
    DropdownLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
        } }, inputs: { group: "group", open: "open" } });
    return DropdownLinkDirective;
}());



/***/ }),

/***/ 8971:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDropdownDirective": function() { return /* binding */ AppDropdownDirective; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);




var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    AppDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });
    return AppDropdownDirective;
}());



/***/ }),

/***/ 25914:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/full-screen.directive.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenWindowDirective": function() { return /* binding */ FullScreenWindowDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var FullScreenWindowDirective = /** @class */ (function () {
    function FullScreenWindowDirective() {
    }
    // Full screen
    FullScreenWindowDirective.prototype.cancelFullScreen = function (el) {
        var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
        if (requestMethod) { // cancel full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
    };
    FullScreenWindowDirective.prototype.requestFullScreen = function (el) {
        // Supports most browsers and their versions.
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (requestMethod) { // Native full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
        return false;
    };
    FullScreenWindowDirective.prototype.toggleFullscreen = function () {
        var elem = document.body;
        var isInFullScreen = (document['fullScreenElement'] && document['fullScreenElement'] !== null) || (document['mozFullScreen'] || document['webkitIsFullScreen']);
        if (isInFullScreen) {
            this.cancelFullScreen(document);
        }
        else {
            this.requestFullScreen(elem);
        }
        return false;
    };
    FullScreenWindowDirective.ɵfac = function FullScreenWindowDirective_Factory(t) { return new (t || FullScreenWindowDirective)(); };
    FullScreenWindowDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FullScreenWindowDirective, selectors: [["", "fullScreenWindow", ""]], hostBindings: function FullScreenWindowDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenWindowDirective_click_HostBindingHandler($event) { return ctx.toggleFullscreen($event); });
        } } });
    return FullScreenWindowDirective;
}());



/***/ }),

/***/ 28991:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/highlightjs.directive.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightjsDirective": function() { return /* binding */ HighlightjsDirective; }
/* harmony export */ });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ 96786);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);


// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
var HighlightjsDirective = /** @class */ (function () {
    function HighlightjsDirective(el) {
        var _this = this;
        this.el = el;
        // this.registerLanguages();
        this.nativeEl = this.el.nativeElement;
        setTimeout(function () {
            highlight_js__WEBPACK_IMPORTED_MODULE_0___default().highlightBlock(_this.nativeEl);
        });
    }
    HighlightjsDirective.ɵfac = function HighlightjsDirective_Factory(t) { return new (t || HighlightjsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
    HighlightjsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HighlightjsDirective, selectors: [["", "highlight", ""]], inputs: { highlight: "highlight" } });
    return HighlightjsDirective;
}());



/***/ }),

/***/ 93001:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToDirective": function() { return /* binding */ ScrollToDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    };
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID) {
            return;
        }
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if (leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if (leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
        return false;
    };
    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
    ScrollToDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
        } } });
    return ScrollToDirective;
}());



/***/ }),

/***/ 72747:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDirectivesModule": function() { return /* binding */ SharedDirectivesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-anchor.directive */ 18163);
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ 2885);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ 8971);
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-to.directive */ 93001);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.directive */ 47396);
/* harmony import */ var _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlightjs.directive */ 28991);
/* harmony import */ var _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./full-screen.directive */ 25914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);









var directives = [
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownAnchorDirective,
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective,
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective,
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContainerDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContentDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerDirective,
    _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightjsDirective,
    _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__.FullScreenWindowDirective
];
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule.ɵfac = function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); };
    SharedDirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedDirectivesModule });
    SharedDirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
            ]] });
    return SharedDirectivesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedDirectivesModule, { declarations: [_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownAnchorDirective,
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective,
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContainerDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContentDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerDirective,
        _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightjsDirective,
        _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__.FullScreenWindowDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule], exports: [_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownAnchorDirective,
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective,
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContainerDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContentDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerDirective,
        _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightjsDirective,
        _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__.FullScreenWindowDirective] }); })();


/***/ }),

/***/ 47396:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarContainerDirective": function() { return /* binding */ SidebarContainerDirective; },
/* harmony export */   "SidebarContentDirective": function() { return /* binding */ SidebarContentDirective; },
/* harmony export */   "SidebarDirective": function() { return /* binding */ SidebarDirective; },
/* harmony export */   "SidebarTogglerDirective": function() { return /* binding */ SidebarTogglerDirective; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sidebar-helper.service */ 9131);



var SidebarContainerDirective = /** @class */ (function () {
    function SidebarContainerDirective(el, _sidenavHelperService) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.nativeEl = this.el.nativeElement;
        this.nativeEl.className += ' sidebar-container';
    }
    SidebarContainerDirective.prototype.ngOnInit = function () {
    };
    SidebarContainerDirective.ɵfac = function SidebarContainerDirective_Factory(t) { return new (t || SidebarContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService)); };
    SidebarContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarContainerDirective, selectors: [["", "appSidebarContainer", ""]], inputs: { id: ["appSidebarContainer", "id"] } });
    return SidebarContainerDirective;
}());

var SidebarContentDirective = /** @class */ (function () {
    function SidebarContentDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.nativeEl = this.el.nativeElement;
        this.container.content = this;
        this.nativeEl.className += ' sidebar-content';
    }
    SidebarContentDirective.prototype.createBackdrop = function () {
    };
    SidebarContentDirective.ɵfac = function SidebarContentDirective_Factory(t) { return new (t || SidebarContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](SidebarContainerDirective)); };
    SidebarContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarContentDirective, selectors: [["", "appSidebarContent", ""]], inputs: { id: ["appSidebarContent", "id"] } });
    return SidebarContentDirective;
}());

var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.align = 'left';
        this.mode = 'side';
        this.nativeEl = this.el.nativeElement;
        this.containerNativeEl = this.container.el.nativeElement;
        this.contentNativeEl = this.container.content.el.nativeElement;
        this.nativeEl.className += ' sidebar';
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.width = this.el.nativeElement.offsetWidth + 'px';
        this._sidenavHelperService.setSidenav(this.id, this);
        this.initSidebar();
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.initSidebar();
    };
    SidebarDirective.prototype.initSidebar = function () {
        this.closed = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile();
        if (this.closed) {
            this.close();
        }
        else {
            this.open();
        }
    };
    SidebarDirective.prototype.open = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                this.contentNativeEl.style.marginLeft = this.width;
            }
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                this.contentNativeEl.style.marginRight = this.width;
            }
        }
        this.closed = false;
    };
    SidebarDirective.prototype.close = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = '-' + this.width;
            this.contentNativeEl.style.marginLeft = 0;
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = '-' + this.width;
            this.contentNativeEl.style.marginRight = 0;
        }
        this.closed = true;
    };
    SidebarDirective.prototype.toggle = function () {
        if (this.closed) {
            this.open();
        }
        else {
            this.close();
        }
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](SidebarContainerDirective)); };
    SidebarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        } }, inputs: { align: "align", mode: "mode", id: ["appSidebar", "id"], closed: "closed" } });
    return SidebarDirective;
}());

var SidebarTogglerDirective = /** @class */ (function () {
    function SidebarTogglerDirective(_sidenavHelperService) {
        this._sidenavHelperService = _sidenavHelperService;
    }
    SidebarTogglerDirective.prototype.onClick = function () {
        this._sidenavHelperService.getSidenav(this.id).toggle();
    };
    SidebarTogglerDirective.ɵfac = function SidebarTogglerDirective_Factory(t) { return new (t || SidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService)); };
    SidebarTogglerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarTogglerDirective, selectors: [["", "appSidebarToggler", ""]], hostBindings: function SidebarTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { id: ["appSidebarToggler", "id"] } });
    return SidebarTogglerDirective;
}());



/***/ }),

/***/ 75643:
/*!***********************************************!*\
  !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatDB": function() { return /* binding */ ChatDB; }
/* harmony export */ });
var ChatDB = /** @class */ (function () {
    function ChatDB() {
    }
    ChatDB.user = [
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
            avatar: 'assets/images/faces/1.jpg',
            status: 'online',
            chatInfo: [
                {
                    chatId: '89564a680b3249760ea21fe77',
                    contactId: '323sa680b3249760ea21rt47',
                    contactName: 'Frank Powell',
                    unread: 4,
                    lastChatTime: '2017-06-12T02:10:18.931Z'
                },
                {
                    chatId: '3289564a680b2134760ea21fe7753',
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    contactName: 'Betty Diaz',
                    unread: 0,
                    lastChatTime: '2017-06-12T02:10:18.931Z'
                }
            ]
        }
    ];
    ChatDB.contacts = [
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
            avatar: 'assets/images/faces/13.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '14663a3406eb47ffa63d4fec9429cb71',
            name: 'Betty Diaz',
            avatar: 'assets/images/faces/12.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '43bd9bc59d164b5aea498e3ae1c24c3c',
            name: 'Brian Stephens',
            avatar: 'assets/images/faces/3.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '3fc8e01f3ce649d1caf884fbf4f698e4',
            name: 'Jacqueline Day',
            avatar: 'assets/images/faces/16.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'e929b1d790ab49968ed8e34648553df4',
            name: 'Arthur Mendoza',
            avatar: 'assets/images/faces/10.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: 'd6caf04bba614632b5fecf91aebf4564',
            name: 'Jeremy Lee',
            avatar: 'assets/images/faces/9.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'be0fb188c8e242f097fafa24632107e4',
            name: 'Johnny Newman',
            avatar: 'assets/images/faces/5.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'dea902191b964a68ba5f2d93cff37e13',
            name: 'Jeffrey Little',
            avatar: 'assets/images/faces/15.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '0bf58f5ccc4543a9f8747350b7bda3c7',
            name: 'Barbara Romero',
            avatar: 'assets/images/faces/4.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'c5d7498bbcb84d81fc72168871ac6a6e',
            name: 'Daniel James',
            avatar: 'assets/images/faces/2.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: '97bfbdd9413e46efdaca2010400fe18c',
            name: 'Alice Sanders',
            avatar: 'assets/images/faces/17.jpg',
            status: 'offline',
            mood: ''
        }
    ];
    ChatDB.chatCollection = [
        {
            id: '89564a680b3249760ea21fe77',
            chats: [
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-32T08:45:28.291Z'
                }
            ]
        },
        {
            id: '3289564a680b2134760ea21fe7753',
            chats: [
                {
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    text: 'Yes',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-03-32T08:45:28.291Z'
                }
            ]
        }
    ];
    return ChatDB;
}());



/***/ }),

/***/ 58195:
/*!*************************************************!*\
  !*** ./src/app/shared/inmemory-db/countries.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryDB": function() { return /* binding */ CountryDB; }
/* harmony export */ });
var CountryDB = /** @class */ (function () {
    function CountryDB() {
    }
    CountryDB.countries = [
        { display: 'Afghanistan', value: 'AF' },
        { display: 'Åland Islands', value: 'AX' },
        { display: 'Albania', value: 'AL' },
        { display: 'Algeria', value: 'DZ' },
        { display: 'American Samoa', value: 'AS' },
        { display: 'AndorrA', value: 'AD' },
        { display: 'Angola', value: 'AO' },
        { display: 'Anguilla', value: 'AI' },
        { display: 'Antarctica', value: 'AQ' },
        { display: 'Antigua and Barbuda', value: 'AG' },
        { display: 'Argentina', value: 'AR' },
        { display: 'Armenia', value: 'AM' },
        { display: 'Aruba', value: 'AW' },
        { display: 'Australia', value: 'AU' },
        { display: 'Austria', value: 'AT' },
        { display: 'Azerbaijan', value: 'AZ' },
        { display: 'Bahamas', value: 'BS' },
        { display: 'Bahrain', value: 'BH' },
        { display: 'Bangladesh', value: 'BD' },
        { display: 'Barbados', value: 'BB' },
        { display: 'Belarus', value: 'BY' },
        { display: 'Belgium', value: 'BE' },
        { display: 'Belize', value: 'BZ' },
        { display: 'Benin', value: 'BJ' },
        { display: 'Bermuda', value: 'BM' },
        { display: 'Bhutan', value: 'BT' },
        { display: 'Bolivia', value: 'BO' },
        { display: 'Bosnia and Herzegovina', value: 'BA' },
        { display: 'Botswana', value: 'BW' },
        { display: 'Bouvet Island', value: 'BV' },
        { display: 'Brazil', value: 'BR' },
        { display: 'British Indian Ocean Territory', value: 'IO' },
        { display: 'Brunei Darussalam', value: 'BN' },
        { display: 'Bulgaria', value: 'BG' },
        { display: 'Burkina Faso', value: 'BF' },
        { display: 'Burundi', value: 'BI' },
        { display: 'Cambodia', value: 'KH' },
        { display: 'Cameroon', value: 'CM' },
        { display: 'Canada', value: 'CA' },
        { display: 'Cape Verde', value: 'CV' },
        { display: 'Cayman Islands', value: 'KY' },
        { display: 'Central African Republic', value: 'CF' },
        { display: 'Chad', value: 'TD' },
        { display: 'Chile', value: 'CL' },
        { display: 'China', value: 'CN' },
        { display: 'Christmas Island', value: 'CX' },
        { display: 'Cocos (Keeling) Islands', value: 'CC' },
        { display: 'Colombia', value: 'CO' },
        { display: 'Comoros', value: 'KM' },
        { display: 'Congo', value: 'CG' },
        { display: 'Congo, The Democratic Republic of the', value: 'CD' },
        { display: 'Cook Islands', value: 'CK' },
        { display: 'Costa Rica', value: 'CR' },
        { display: 'Cote D\'Ivoire', value: 'CI' },
        { display: 'Croatia', value: 'HR' },
        { display: 'Cuba', value: 'CU' },
        { display: 'Cyprus', value: 'CY' },
        { display: 'Czech Republic', value: 'CZ' },
        { display: 'Denmark', value: 'DK' },
        { display: 'Djibouti', value: 'DJ' },
        { display: 'Dominica', value: 'DM' },
        { display: 'Dominican Republic', value: 'DO' },
        { display: 'Ecuador', value: 'EC' },
        { display: 'Egypt', value: 'EG' },
        { display: 'El Salvador', value: 'SV' },
        { display: 'Equatorial Guinea', value: 'GQ' },
        { display: 'Eritrea', value: 'ER' },
        { display: 'Estonia', value: 'EE' },
        { display: 'Ethiopia', value: 'ET' },
        { display: 'Falkland Islands (Malvinas)', value: 'FK' },
        { display: 'Faroe Islands', value: 'FO' },
        { display: 'Fiji', value: 'FJ' },
        { display: 'Finland', value: 'FI' },
        { display: 'France', value: 'FR' },
        { display: 'French Guiana', value: 'GF' },
        { display: 'French Polynesia', value: 'PF' },
        { display: 'French Southern Territories', value: 'TF' },
        { display: 'Gabon', value: 'GA' },
        { display: 'Gambia', value: 'GM' },
        { display: 'Georgia', value: 'GE' },
        { display: 'Germany', value: 'DE' },
        { display: 'Ghana', value: 'GH' },
        { display: 'Gibraltar', value: 'GI' },
        { display: 'Greece', value: 'GR' },
        { display: 'Greenland', value: 'GL' },
        { display: 'Grenada', value: 'GD' },
        { display: 'Guadeloupe', value: 'GP' },
        { display: 'Guam', value: 'GU' },
        { display: 'Guatemala', value: 'GT' },
        { display: 'Guernsey', value: 'GG' },
        { display: 'Guinea', value: 'GN' },
        { display: 'Guinea-Bissau', value: 'GW' },
        { display: 'Guyana', value: 'GY' },
        { display: 'Haiti', value: 'HT' },
        { display: 'Heard Island and Mcdonald Islands', value: 'HM' },
        { display: 'Holy See (Vatican City State)', value: 'VA' },
        { display: 'Honduras', value: 'HN' },
        { display: 'Hong Kong', value: 'HK' },
        { display: 'Hungary', value: 'HU' },
        { display: 'Iceland', value: 'IS' },
        { display: 'India', value: 'IN' },
        { display: 'Indonesia', value: 'ID' },
        { display: 'Iran, Islamic Republic Of', value: 'IR' },
        { display: 'Iraq', value: 'IQ' },
        { display: 'Ireland', value: 'IE' },
        { display: 'Isle of Man', value: 'IM' },
        { display: 'Israel', value: 'IL' },
        { display: 'Italy', value: 'IT' },
        { display: 'Jamaica', value: 'JM' },
        { display: 'Japan', value: 'JP' },
        { display: 'Jersey', value: 'JE' },
        { display: 'Jordan', value: 'JO' },
        { display: 'Kazakhstan', value: 'KZ' },
        { display: 'Kenya', value: 'KE' },
        { display: 'Kiribati', value: 'KI' },
        { display: 'Korea, Democratic People\'S Republic of', value: 'KP' },
        { display: 'Korea, Republic of', value: 'KR' },
        { display: 'Kuwait', value: 'KW' },
        { display: 'Kyrgyzstan', value: 'KG' },
        { display: 'Lao People\'S Democratic Republic', value: 'LA' },
        { display: 'Latvia', value: 'LV' },
        { display: 'Lebanon', value: 'LB' },
        { display: 'Lesotho', value: 'LS' },
        { display: 'Liberia', value: 'LR' },
        { display: 'Libyan Arab Jamahiriya', value: 'LY' },
        { display: 'Liechtenstein', value: 'LI' },
        { display: 'Lithuania', value: 'LT' },
        { display: 'Luxembourg', value: 'LU' },
        { display: 'Macao', value: 'MO' },
        { display: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
        { display: 'Madagascar', value: 'MG' },
        { display: 'Malawi', value: 'MW' },
        { display: 'Malaysia', value: 'MY' },
        { display: 'Maldives', value: 'MV' },
        { display: 'Mali', value: 'ML' },
        { display: 'Malta', value: 'MT' },
        { display: 'Marshall Islands', value: 'MH' },
        { display: 'Martinique', value: 'MQ' },
        { display: 'Mauritania', value: 'MR' },
        { display: 'Mauritius', value: 'MU' },
        { display: 'Mayotte', value: 'YT' },
        { display: 'Mexico', value: 'MX' },
        { display: 'Micronesia, Federated States of', value: 'FM' },
        { display: 'Moldova, Republic of', value: 'MD' },
        { display: 'Monaco', value: 'MC' },
        { display: 'Mongolia', value: 'MN' },
        { display: 'Montserrat', value: 'MS' },
        { display: 'Morocco', value: 'MA' },
        { display: 'Mozambique', value: 'MZ' },
        { display: 'Myanmar', value: 'MM' },
        { display: 'Namibia', value: 'NA' },
        { display: 'Nauru', value: 'NR' },
        { display: 'Nepal', value: 'NP' },
        { display: 'Netherlands', value: 'NL' },
        { display: 'Netherlands Antilles', value: 'AN' },
        { display: 'New Caledonia', value: 'NC' },
        { display: 'New Zealand', value: 'NZ' },
        { display: 'Nicaragua', value: 'NI' },
        { display: 'Niger', value: 'NE' },
        { display: 'Nigeria', value: 'NG' },
        { display: 'Niue', value: 'NU' },
        { display: 'Norfolk Island', value: 'NF' },
        { display: 'Northern Mariana Islands', value: 'MP' },
        { display: 'Norway', value: 'NO' },
        { display: 'Oman', value: 'OM' },
        { display: 'Pakistan', value: 'PK' },
        { display: 'Palau', value: 'PW' },
        { display: 'Palestinian Territory, Occupied', value: 'PS' },
        { display: 'Panama', value: 'PA' },
        { display: 'Papua New Guinea', value: 'PG' },
        { display: 'Paraguay', value: 'PY' },
        { display: 'Peru', value: 'PE' },
        { display: 'Philippines', value: 'PH' },
        { display: 'Pitcairn', value: 'PN' },
        { display: 'Poland', value: 'PL' },
        { display: 'Portugal', value: 'PT' },
        { display: 'Puerto Rico', value: 'PR' },
        { display: 'Qatar', value: 'QA' },
        { display: 'Reunion', value: 'RE' },
        { display: 'Romania', value: 'RO' },
        { display: 'Russian Federation', value: 'RU' },
        { display: 'RWANDA', value: 'RW' },
        { display: 'Saint Helena', value: 'SH' },
        { display: 'Saint Kitts and Nevis', value: 'KN' },
        { display: 'Saint Lucia', value: 'LC' },
        { display: 'Saint Pierre and Miquelon', value: 'PM' },
        { display: 'Saint Vincent and the Grenadines', value: 'VC' },
        { display: 'Samoa', value: 'WS' },
        { display: 'San Marino', value: 'SM' },
        { display: 'Sao Tome and Principe', value: 'ST' },
        { display: 'Saudi Arabia', value: 'SA' },
        { display: 'Senegal', value: 'SN' },
        { display: 'Serbia and Montenegro', value: 'CS' },
        { display: 'Seychelles', value: 'SC' },
        { display: 'Sierra Leone', value: 'SL' },
        { display: 'Singapore', value: 'SG' },
        { display: 'Slovakia', value: 'SK' },
        { display: 'Slovenia', value: 'SI' },
        { display: 'Solomon Islands', value: 'SB' },
        { display: 'Somalia', value: 'SO' },
        { display: 'South Africa', value: 'ZA' },
        { display: 'South Georgia and the South Sandwich Islands', value: 'GS' },
        { display: 'Spain', value: 'ES' },
        { display: 'Sri Lanka', value: 'LK' },
        { display: 'Sudan', value: 'SD' },
        { display: 'Suridisplay', value: 'SR' },
        { display: 'Svalbard and Jan Mayen', value: 'SJ' },
        { display: 'Swaziland', value: 'SZ' },
        { display: 'Sweden', value: 'SE' },
        { display: 'Switzerland', value: 'CH' },
        { display: 'Syrian Arab Republic', value: 'SY' },
        { display: 'Taiwan, Province of China', value: 'TW' },
        { display: 'Tajikistan', value: 'TJ' },
        { display: 'Tanzania, United Republic of', value: 'TZ' },
        { display: 'Thailand', value: 'TH' },
        { display: 'Timor-Leste', value: 'TL' },
        { display: 'Togo', value: 'TG' },
        { display: 'Tokelau', value: 'TK' },
        { display: 'Tonga', value: 'TO' },
        { display: 'Trinidad and Tobago', value: 'TT' },
        { display: 'Tunisia', value: 'TN' },
        { display: 'Turkey', value: 'TR' },
        { display: 'Turkmenistan', value: 'TM' },
        { display: 'Turks and Caicos Islands', value: 'TC' },
        { display: 'Tuvalu', value: 'TV' },
        { display: 'Uganda', value: 'UG' },
        { display: 'Ukraine', value: 'UA' },
        { display: 'United Arab Emirates', value: 'AE' },
        { display: 'United Kingdom', value: 'GB' },
        { display: 'United States', value: 'US' },
        { display: 'United States Minor Outlying Islands', value: 'UM' },
        { display: 'Uruguay', value: 'UY' },
        { display: 'Uzbekistan', value: 'UZ' },
        { display: 'Vanuatu', value: 'VU' },
        { display: 'Venezuela', value: 'VE' },
        { display: 'Viet Nam', value: 'VN' },
        { display: 'Virgin Islands, British', value: 'VG' },
        { display: 'Virgin Islands, U.S.', value: 'VI' },
        { display: 'Wallis and Futuna', value: 'WF' },
        { display: 'Western Sahara', value: 'EH' },
        { display: 'Yemen', value: 'YE' },
        { display: 'Zambia', value: 'ZM' },
        { display: 'Zimbabwe', value: 'ZW' }
    ];
    return CountryDB;
}());



/***/ }),

/***/ 67567:
/*!***********************************************************!*\
  !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryDataService": function() { return /* binding */ InMemoryDataService; }
/* harmony export */ });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ 25340);
/* harmony import */ var _mails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mails */ 93721);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries */ 58195);
/* harmony import */ var _chat_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-db */ 75643);
/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoices */ 1900);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users */ 83361);






var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'products': _products__WEBPACK_IMPORTED_MODULE_0__.ProductDB.products,
            'invoices': _invoices__WEBPACK_IMPORTED_MODULE_4__.InvoiceDB.invoices,
            'mails': _mails__WEBPACK_IMPORTED_MODULE_1__.MailDB.messages,
            'countries': _countries__WEBPACK_IMPORTED_MODULE_2__.CountryDB.countries,
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_3__.ChatDB.contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_3__.ChatDB.chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_3__.ChatDB.user,
            'users': _users__WEBPACK_IMPORTED_MODULE_5__.UserDB.users
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ 1900:
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/invoices.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceDB": function() { return /* binding */ InvoiceDB; }
/* harmony export */ });
var InvoiceDB = /** @class */ (function () {
    function InvoiceDB() {
    }
    InvoiceDB.invoices = [
        {
            id: '5a9ae2106518248b68251fd1',
            orderNumber: '232',
            orderStatus: 'Pending',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Schoen, Conn and Mills',
                address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 9,
                    unitPrice: 200
                }, {
                    name: 'Item 2',
                    unit: 15,
                    unitPrice: 300
                }]
        },
        {
            id: '5a9ae2106518248b68251fd2',
            orderNumber: '233',
            orderStatus: 'Processing',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'New Age Inc.',
                address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 3,
                    unitPrice: 2000
                }, {
                    name: 'Item 2',
                    unit: 2,
                    unitPrice: 4000
                }]
        },
        {
            id: '5a9ae2106518248b68251fd3',
            orderNumber: '234',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Predovic, Schowalter and Haag',
                address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 5,
                    unitPrice: 1000
                }, {
                    name: 'Item 2',
                    unit: 2,
                    unitPrice: 4000
                }]
        },
        {
            id: '5a9ae2106518248b68251fd4',
            orderNumber: '235',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Hane PLC',
                address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 3,
                    unitPrice: 4000
                }, {
                    name: 'Item 2',
                    unit: 1,
                    unitPrice: 5000
                }]
        }
    ];
    return InvoiceDB;
}());



/***/ }),

/***/ 93721:
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/mails.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailDB": function() { return /* binding */ MailDB; }
/* harmony export */ });
var MailDB = /** @class */ (function () {
    function MailDB() {
    }
    MailDB.messages = [
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('1/25/2018'),
            selected: false,
            subject: 'Welcome to Angular World',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/3.jpg'
            },
            date: new Date('4/3/2017'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/4.jpg'
            },
            date: new Date('1/20/2017'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/5.jpg'
            },
            date: new Date('1/8/2017'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/9.jpg'
            },
            date: new Date('10/3/2016'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/10.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/15.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/12.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/13.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/16.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/17.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('10/3/2012'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        }
    ];
    return MailDB;
}());



/***/ }),

/***/ 25340:
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/products.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDB": function() { return /* binding */ ProductDB; }
/* harmony export */ });
var ProductDB = /** @class */ (function () {
    function ProductDB() {
    }
    ProductDB.products = [
        {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': './assets/images/products/speaker-1.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048bbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': './assets/images/products/speaker-2.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae210d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': './assets/images/products/headphone-2.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210e8329237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': './assets/images/products/watch-1.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '10% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210cb9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': './assets/images/products/watch-2.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '4% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': './assets/images/products/headphone-3.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$4 off',
                'color': 'success'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92e27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': './assets/images/products/headphone-4.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$5 off',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2108970b01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': './assets/images/products/iphone-2.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c04707145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': './assets/images/products/iphone-1.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': './assets/images/products/headphone-1.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }, {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': './assets/images/products/speaker-1.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048dsbbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': './assets/images/products/speaker-2.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2sd10d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': './assets/images/products/headphone-2.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'warning'
            }
        },
        {
            '_id': '5a9ae210e8329fs237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': './assets/images/products/watch-1.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae210cba9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': './assets/images/products/watch-2.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5ad9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': './assets/images/products/headphone-3.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92fe27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': './assets/images/products/headphone-4.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2108970bs01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': './assets/images/products/iphone-2.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c0470f7145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': './assets/images/products/iphone-1.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9aef21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': './assets/images/products/headphone-1.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }
    ];
    return ProductDB;
}());



/***/ }),

/***/ 83361:
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/users.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDB": function() { return /* binding */ UserDB; }
/* harmony export */ });
var UserDB = /** @class */ (function () {
    function UserDB() {
    }
    UserDB.users = [
        {
            _id: "5a7b73f76bed15c94d1e46d4",
            index: 0,
            guid: "c01da2d1-07f8-4acc-a1e3-72dda7310af8",
            isActive: false,
            balance: 2838.08,
            age: 30,
            name: "Stefanie Marsh",
            gender: "female",
            company: "ACIUM",
            email: "stefaniemarsh@acium.com",
            phone: "+1 (857) 535-2066",
            address: "163 Poplar Avenue, Cliffside, Virginia, 4592",
            bd: "2015-02-08T04:28:44 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f7f79f4250b96a355a",
            index: 1,
            guid: "3f04aa40-62da-466d-ac14-2b8a5da3d1ce",
            isActive: true,
            balance: 3043.81,
            age: 39,
            name: "Elena Bennett",
            gender: "female",
            company: "FIBRODYNE",
            email: "elenabennett@fibrodyne.com",
            phone: "+1 (994) 570-2070",
            address: "526 Grace Court, Cherokee, Oregon, 7017",
            bd: "2017-11-15T09:04:57 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78b64a02a67204d6e",
            index: 2,
            guid: "e7d9d61e-b657-4fcf-b069-2eb9bfdc44fa",
            isActive: true,
            balance: 1796.92,
            age: 23,
            name: "Joni Cabrera",
            gender: "female",
            company: "POWERNET",
            email: "jonicabrera@powernet.com",
            phone: "+1 (848) 410-2368",
            address: "554 Barlow Drive, Alamo, Michigan, 3686",
            bd: "2017-10-15T12:55:51 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7572e59b231149b94",
            index: 3,
            guid: "47673d82-ab31-48a1-8a16-2c6701573c67",
            isActive: false,
            balance: 2850.27,
            age: 37,
            name: "Gallagher Shaw",
            gender: "male",
            company: "ZILLAR",
            email: "gallaghershaw@zillar.com",
            phone: "+1 (896) 422-3786",
            address: "111 Argyle Road, Graball, Idaho, 7272",
            bd: "2017-11-19T03:38:30 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f70f9d074552e13090",
            index: 4,
            guid: "bc9c7cd3-04e0-4095-a933-af28efaf3b3e",
            isActive: false,
            balance: 3743.48,
            age: 26,
            name: "Blanchard Knapp",
            gender: "male",
            company: "ACRODANCE",
            email: "blanchardknapp@acrodance.com",
            phone: "+1 (867) 542-2772",
            address: "707 Malta Street, Yukon, Wyoming, 6861",
            bd: "2014-05-28T01:33:58 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f78988bd6e92650473",
            index: 5,
            guid: "08cb947c-e49c-4736-9687-0fca0992ec38",
            isActive: false,
            balance: 3453.79,
            age: 34,
            name: "Parker Rivas",
            gender: "male",
            company: "SLAMBDA",
            email: "parkerrivas@slambda.com",
            phone: "+1 (997) 413-2418",
            address: "543 Roosevelt Place, Tibbie, Minnesota, 6944",
            bd: "2015-01-05T09:55:23 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f72488770f90649570",
            index: 6,
            guid: "771c85d5-7762-4bae-96fd-09892a9c4374",
            isActive: false,
            balance: 3334.73,
            age: 20,
            name: "Alexandria Forbes",
            gender: "female",
            company: "EQUITOX",
            email: "alexandriaforbes@equitox.com",
            phone: "+1 (869) 521-2533",
            address: "663 Minna Street, Omar, Alabama, 5265",
            bd: "2017-03-09T05:48:57 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7c576e368b321a705",
            index: 7,
            guid: "2455a7ef-a537-46e1-a210-75e5e2187460",
            isActive: false,
            balance: 3488.64,
            age: 37,
            name: "Lessie Wise",
            gender: "female",
            company: "AFFLUEX",
            email: "lessiewise@affluex.com",
            phone: "+1 (820) 404-2967",
            address: "752 Woodhull Street, Utting, Oklahoma, 2739",
            bd: "2014-10-21T03:09:34 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f705f8a9c6e35c8ca2",
            index: 8,
            guid: "a90d65a8-681d-462f-bf08-eceeef366375",
            isActive: true,
            balance: 3786.67,
            age: 36,
            name: "Carrie Gates",
            gender: "female",
            company: "VIRVA",
            email: "carriegates@virva.com",
            phone: "+1 (845) 463-3986",
            address: "561 Boulevard Court, Rote, Louisiana, 8458",
            bd: "2017-03-30T02:06:23 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7a3e2be2dbb7b093e",
            index: 9,
            guid: "fb3d0f97-91ae-4336-b0b4-19f4a00fe567",
            isActive: false,
            balance: 3335.5,
            age: 33,
            name: "Dalton Spears",
            gender: "male",
            company: "MIRACLIS",
            email: "daltonspears@miraclis.com",
            phone: "+1 (919) 541-3528",
            address: "167 Lester Court, Glasgow, Arkansas, 6311",
            bd: "2017-04-01T01:41:12 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f716de69a9217c1273",
            index: 10,
            guid: "129a92fd-848f-48eb-98a1-aebf6e92b079",
            isActive: false,
            balance: 3811.15,
            age: 30,
            name: "Delia Merrill",
            gender: "female",
            company: "COMTEST",
            email: "deliamerrill@comtest.com",
            phone: "+1 (879) 401-2304",
            address: "761 Polhemus Place, Kidder, Puerto Rico, 5901",
            bd: "2014-08-29T08:42:59 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7ed19007bed2d29fb",
            index: 11,
            guid: "d799b69a-192d-4ee3-9a69-9e8e5afc45b0",
            isActive: false,
            balance: 3935.82,
            age: 28,
            name: "Vance Aguilar",
            gender: "male",
            company: "CYCLONICA",
            email: "vanceaguilar@cyclonica.com",
            phone: "+1 (972) 549-2681",
            address: "653 Billings Place, Gardners, Connecticut, 7805",
            bd: "2015-02-21T03:06:14 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f78d0dc0858a70c44a",
            index: 12,
            guid: "8cbb37bb-7644-4993-b48b-df3a69deb339",
            isActive: true,
            balance: 3868.95,
            age: 28,
            name: "Adams Harper",
            gender: "male",
            company: "NORSUP",
            email: "adamsharper@norsup.com",
            phone: "+1 (824) 494-3395",
            address: "571 Turner Place, Norris, Mississippi, 3829",
            bd: "2014-01-30T02:05:53 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7e929494a8568a885",
            index: 13,
            guid: "22ec32d7-0ba9-4366-b6d8-ca16389a2cd9",
            isActive: false,
            balance: 3954.41,
            age: 34,
            name: "Bass Sexton",
            gender: "male",
            company: "CIRCUM",
            email: "basssexton@circum.com",
            phone: "+1 (930) 476-3634",
            address: "563 Victor Road, Richmond, Kansas, 7742",
            bd: "2014-05-04T10:16:32 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f767e97ce3136444fd",
            index: 14,
            guid: "031d282f-0be9-49e1-a211-9aa59d449d91",
            isActive: false,
            balance: 3287.33,
            age: 24,
            name: "Howard Velez",
            gender: "male",
            company: "ECOSYS",
            email: "howardvelez@ecosys.com",
            phone: "+1 (920) 556-2885",
            address: "378 Grimes Road, Websterville, Marshall Islands, 3506",
            bd: "2015-12-19T08:17:58 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7fba076653cc18925",
            index: 15,
            guid: "d76ab6d6-d1db-4286-8516-ce6c9db3972a",
            isActive: false,
            balance: 3279.98,
            age: 21,
            name: "Lola Morton",
            gender: "female",
            company: "PROVIDCO",
            email: "lolamorton@providco.com",
            phone: "+1 (963) 458-2788",
            address: "991 Ashland Place, Richville, New York, 3529",
            bd: "2016-11-29T07:58:24 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7c6d408bc853be87c",
            index: 16,
            guid: "30c2d1c7-770b-4adb-b6df-cc205d748323",
            isActive: false,
            balance: 3955.55,
            age: 37,
            name: "Bishop Rutledge",
            gender: "male",
            company: "DAYCORE",
            email: "bishoprutledge@daycore.com",
            phone: "+1 (886) 539-3156",
            address: "870 Vanderveer Place, Bridgetown, California, 7593",
            bd: "2014-11-10T04:47:00 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7abe6c78719d2f494",
            index: 17,
            guid: "2d8e77a1-4a88-4642-b6a8-693de296661c",
            isActive: true,
            balance: 1832.83,
            age: 23,
            name: "Lea Reese",
            gender: "female",
            company: "GLUID",
            email: "leareese@gluid.com",
            phone: "+1 (866) 413-2199",
            address: "811 Dunne Place, Vowinckel, Rhode Island, 8646",
            bd: "2014-03-16T04:30:06 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f72d64af126b8080be",
            index: 18,
            guid: "e1e8ee63-6d08-48fc-a077-2265cee34f23",
            isActive: true,
            balance: 2419.18,
            age: 23,
            name: "Knox Moses",
            gender: "male",
            company: "BRAINCLIP",
            email: "knoxmoses@brainclip.com",
            phone: "+1 (982) 519-2486",
            address: "917 Turnbull Avenue, Shasta, Virgin Islands, 7016",
            bd: "2015-11-09T10:11:15 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f789b4e9086d34b255",
            index: 19,
            guid: "13552b7d-928c-4b92-a2ae-5ccbee807594",
            isActive: false,
            balance: 1220.91,
            age: 22,
            name: "Marsha Jacobs",
            gender: "female",
            company: "COMSTAR",
            email: "marshajacobs@comstar.com",
            phone: "+1 (858) 511-2546",
            address: "580 Hampton Avenue, Ilchester, New Hampshire, 2191",
            bd: "2016-02-11T01:34:23 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f737eea8e94089b7b4",
            index: 20,
            guid: "cf577c87-b40c-4c09-9fac-d04c9a824b86",
            isActive: false,
            balance: 2446.07,
            age: 25,
            name: "Bell Emerson",
            gender: "male",
            company: "MULTIFLEX",
            email: "bellemerson@multiflex.com",
            phone: "+1 (806) 496-2473",
            address: "238 Oxford Walk, Monument, New Mexico, 1345",
            bd: "2016-10-07T01:07:21 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f76bc821dc6ee56ee2",
            index: 21,
            guid: "b6c685c2-a497-4261-9217-622723d5235f",
            isActive: false,
            balance: 3694.63,
            age: 33,
            name: "Cecelia Graham",
            gender: "female",
            company: "ZOXY",
            email: "ceceliagraham@zoxy.com",
            phone: "+1 (933) 429-3129",
            address: "954 Lawton Street, Terlingua, New Jersey, 6723",
            bd: "2017-12-01T04:36:13 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f794c27c4048290cbf",
            index: 22,
            guid: "7e887403-8ff5-41b4-9902-bb63ff714fee",
            isActive: true,
            balance: 2804.02,
            age: 29,
            name: "Anthony Pennington",
            gender: "male",
            company: "NAMEGEN",
            email: "anthonypennington@namegen.com",
            phone: "+1 (860) 458-3988",
            address: "287 Auburn Place, Gardiner, Northern Mariana Islands, 7131",
            bd: "2018-02-04T11:06:51 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f720a5781f7d19597a",
            index: 23,
            guid: "9e108687-e1ca-4385-bdd5-62ab006f8aa3",
            isActive: true,
            balance: 1984.1,
            age: 36,
            name: "Mayo Justice",
            gender: "male",
            company: "SLOFAST",
            email: "mayojustice@slofast.com",
            phone: "+1 (854) 428-2270",
            address: "648 Melba Court, Dodge, Pennsylvania, 7596",
            bd: "2016-12-29T07:28:10 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7f0a4c5e6c9807fb2",
            index: 24,
            guid: "93b0b383-dd69-4453-be26-f13ae361ce67",
            isActive: true,
            balance: 1845.13,
            age: 22,
            name: "Vaughn Salazar",
            gender: "male",
            company: "ZAGGLE",
            email: "vaughnsalazar@zaggle.com",
            phone: "+1 (986) 415-3294",
            address: "382 Dewitt Avenue, Goodville, Palau, 711",
            bd: "2014-10-31T12:32:59 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7e6c45298c709371c",
            index: 25,
            guid: "5a059bbb-3f6d-47bc-ba2b-c13eeaaa93b4",
            isActive: false,
            balance: 3684.79,
            age: 31,
            name: "Calhoun Bradshaw",
            gender: "male",
            company: "OVERPLEX",
            email: "calhounbradshaw@overplex.com",
            phone: "+1 (964) 594-2363",
            address: "527 Seton Place, Wedgewood, Wisconsin, 8306",
            bd: "2016-05-27T10:46:17 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f79468759d25ecdcf4",
            index: 26,
            guid: "68d7f78e-5001-480b-a67d-72b370a5c2de",
            isActive: false,
            balance: 1831.14,
            age: 29,
            name: "Dianne Bauer",
            gender: "female",
            company: "XUMONK",
            email: "diannebauer@xumonk.com",
            phone: "+1 (866) 510-2479",
            address: "540 Moffat Street, Emison, South Carolina, 7329",
            bd: "2014-09-02T04:57:23 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7346b1bbab11524fa",
            index: 27,
            guid: "0729eef8-36c5-4aa2-8e31-f5e2ca19b94b",
            isActive: false,
            balance: 1719.77,
            age: 22,
            name: "Hebert Bryan",
            gender: "male",
            company: "COMTRAIL",
            email: "hebertbryan@comtrail.com",
            phone: "+1 (838) 579-3709",
            address: "669 Hausman Street, Gerber, Kentucky, 7779",
            bd: "2017-11-29T12:22:59 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f75116874002de08de",
            index: 28,
            guid: "63014b40-3f1e-40ff-b2f7-f55ef6a5a599",
            isActive: true,
            balance: 1973.27,
            age: 20,
            name: "Cash Bean",
            gender: "male",
            company: "SUPREMIA",
            email: "cashbean@supremia.com",
            phone: "+1 (846) 551-2291",
            address: "152 Garnet Street, Boling, Nevada, 4867",
            bd: "2014-01-06T10:18:37 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f739be4dc1f743993c",
            index: 29,
            guid: "ae498760-b43b-4c9c-8575-820f419984f6",
            isActive: true,
            balance: 2118.14,
            age: 36,
            name: "Candy Hopper",
            gender: "female",
            company: "ACCUFARM",
            email: "candyhopper@accufarm.com",
            phone: "+1 (841) 425-2442",
            address: "695 Nassau Avenue, Nutrioso, Maryland, 2026",
            bd: "2016-01-03T02:15:56 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f70b86f2969d762be2",
            index: 30,
            guid: "f19cb86e-ab4f-4d07-833a-4adb8a19d0af",
            isActive: false,
            balance: 3794.89,
            age: 37,
            name: "Fisher Powell",
            gender: "male",
            company: "ENOMEN",
            email: "fisherpowell@enomen.com",
            phone: "+1 (876) 562-2932",
            address: "616 Tapscott Avenue, Crucible, Nebraska, 4900",
            bd: "2018-01-31T05:15:13 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f7394648a68c2a6ae3",
            index: 31,
            guid: "a88e5389-0b07-4d19-ac6c-718ce9e0de55",
            isActive: false,
            balance: 3343.45,
            age: 38,
            name: "Rosemary Sloan",
            gender: "female",
            company: "PHORMULA",
            email: "rosemarysloan@phormula.com",
            phone: "+1 (924) 517-3289",
            address: "687 Navy Walk, Edmund, Delaware, 1419",
            bd: "2018-01-23T11:32:25 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f77ad97f4e1c2fa65a",
            index: 32,
            guid: "fb915568-2875-49b3-96d7-6b54b2b186a1",
            isActive: true,
            balance: 2680.62,
            age: 30,
            name: "Elba Glover",
            gender: "female",
            company: "APPLICA",
            email: "elbaglover@applica.com",
            phone: "+1 (857) 495-3565",
            address: "279 Bridgewater Street, Edneyville, Utah, 9246",
            bd: "2015-10-03T12:24:56 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f72598106a97fbf7d5",
            index: 33,
            guid: "fac3cd4b-2d42-4b4f-9d6f-0bac689bd47b",
            isActive: false,
            balance: 3286.46,
            age: 37,
            name: "Mildred Short",
            gender: "female",
            company: "NIXELT",
            email: "mildredshort@nixelt.com",
            phone: "+1 (980) 530-3588",
            address: "434 Elm Place, Coloma, West Virginia, 1990",
            bd: "2016-03-22T10:13:26 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7b88290b05f53faa1",
            index: 34,
            guid: "b1c6a3a3-00bd-4bc6-87df-69eecd909ab5",
            isActive: false,
            balance: 1484.16,
            age: 24,
            name: "Karin Schultz",
            gender: "female",
            company: "PLASMOS",
            email: "karinschultz@plasmos.com",
            phone: "+1 (904) 544-2796",
            address: "380 Rockaway Avenue, Faxon, American Samoa, 5776",
            bd: "2016-03-27T09:30:36 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7d2f7429d0caec5fe",
            index: 35,
            guid: "62c961ac-49b1-4a69-b4bf-13a396ec4fd9",
            isActive: false,
            balance: 3450.17,
            age: 23,
            name: "Addie Rose",
            gender: "female",
            company: "XYQAG",
            email: "addierose@xyqag.com",
            phone: "+1 (838) 549-3147",
            address: "999 Coleridge Street, Golconda, Vermont, 9575",
            bd: "2016-10-01T06:50:42 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78a4c54ff8334e053",
            index: 36,
            guid: "4f2f7ae5-0bd1-4665-b97f-c556e5162349",
            isActive: false,
            balance: 1797.89,
            age: 23,
            name: "Janie Ellison",
            gender: "female",
            company: "SPLINX",
            email: "janieellison@splinx.com",
            phone: "+1 (947) 460-2254",
            address: "114 Landis Court, Genoa, Indiana, 5198",
            bd: "2017-07-28T12:45:44 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7c87f7e86fcb00055",
            index: 37,
            guid: "b7236378-8129-44b5-bcc6-0369290ffad6",
            isActive: false,
            balance: 3776.51,
            age: 38,
            name: "Elisabeth Campbell",
            gender: "female",
            company: "GOKO",
            email: "elisabethcampbell@goko.com",
            phone: "+1 (849) 430-3377",
            address: "832 Kermit Place, Lutsen, Georgia, 9145",
            bd: "2015-04-26T06:40:08 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f712f9208f145fa6ea",
            index: 38,
            guid: "5c955e3a-5f3a-4ead-96ee-80a5de6dc479",
            isActive: true,
            balance: 3794.93,
            age: 27,
            name: "Noble Holland",
            gender: "male",
            company: "NUTRALAB",
            email: "nobleholland@nutralab.com",
            phone: "+1 (888) 573-3730",
            address: "408 Roosevelt Court, Hiwasse, North Dakota, 281",
            bd: "2014-03-25T12:24:34 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f7aa1f371de59df90b",
            index: 39,
            guid: "94698a81-61a6-4e23-a952-76a50fba71ef",
            isActive: true,
            balance: 2205.55,
            age: 35,
            name: "Laverne Brock",
            gender: "female",
            company: "ICOLOGY",
            email: "lavernebrock@icology.com",
            phone: "+1 (821) 600-3174",
            address: "391 Conover Street, Cassel, Tennessee, 6566",
            bd: "2016-01-27T09:40:41 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7c45c697931199945",
            index: 40,
            guid: "a05a215f-be1c-49d1-89ca-c821b118f923",
            isActive: true,
            balance: 2397.12,
            age: 29,
            name: "Irene Frost",
            gender: "female",
            company: "RODEMCO",
            email: "irenefrost@rodemco.com",
            phone: "+1 (918) 539-2612",
            address: "401 Moore Place, Groton, Arizona, 3415",
            bd: "2017-09-14T09:46:55 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7ef55416e92ebc818",
            index: 41,
            guid: "1ae8ceac-e8d0-4417-9f6f-04cd4e4738ad",
            isActive: false,
            balance: 3335.51,
            age: 35,
            name: "Beard Hendricks",
            gender: "male",
            company: "QUONK",
            email: "beardhendricks@quonk.com",
            phone: "+1 (847) 521-3952",
            address: "576 Bayard Street, Chloride, Federated States Of Micronesia, 8070",
            bd: "2016-11-01T12:47:26 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7cbeecfe6febd672d",
            index: 42,
            guid: "afdf3298-77bd-46b3-ae8d-232f815c5f01",
            isActive: false,
            balance: 2205.01,
            age: 37,
            name: "Nelson Shields",
            gender: "male",
            company: "ARTWORLDS",
            email: "nelsonshields@artworlds.com",
            phone: "+1 (956) 534-3050",
            address: "581 Maple Street, Needmore, Colorado, 2062",
            bd: "2014-07-21T08:22:01 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f71803de25c5f754ad",
            index: 43,
            guid: "5b872cad-4388-496b-8ede-5f86990dec00",
            isActive: true,
            balance: 1001.05,
            age: 21,
            name: "Luella Duffy",
            gender: "female",
            company: "KROG",
            email: "luelladuffy@krog.com",
            phone: "+1 (973) 451-2222",
            address: "349 Bryant Street, Tioga, South Dakota, 6493",
            bd: "2016-04-27T02:46:46 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f77f2a05eacb331c74",
            index: 44,
            guid: "7d6b7650-10d7-435d-87ca-33a1fe12cd57",
            isActive: false,
            balance: 1926.79,
            age: 27,
            name: "Rosa Guthrie",
            gender: "female",
            company: "COMTOURS",
            email: "rosaguthrie@comtours.com",
            phone: "+1 (814) 528-2701",
            address: "719 Kathleen Court, Morriston, Guam, 4011",
            bd: "2015-07-02T08:22:18 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7727afbb0fc15653b",
            index: 45,
            guid: "ebbc985b-227e-4954-a8a6-588b2a2bff22",
            isActive: false,
            balance: 2464.9,
            age: 29,
            name: "Dillard Carlson",
            gender: "male",
            company: "COMCUR",
            email: "dillardcarlson@comcur.com",
            phone: "+1 (847) 469-3741",
            address: "918 Oceanic Avenue, Cochranville, Missouri, 1018",
            bd: "2016-06-11T11:31:54 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f71dd7612e967e01ae",
            index: 46,
            guid: "63a2ee7f-2141-4ec5-b1e2-fcdcd62f28ed",
            isActive: false,
            balance: 3917.74,
            age: 25,
            name: "Faye Walls",
            gender: "female",
            company: "EMERGENT",
            email: "fayewalls@emergent.com",
            phone: "+1 (964) 527-3791",
            address: "947 Judge Street, Nescatunga, Maine, 4928",
            bd: "2014-06-23T12:46:21 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7b33c73c425db7ee0",
            index: 47,
            guid: "61d40a89-af0c-40ca-8970-c54978134e6b",
            isActive: true,
            balance: 2213.18,
            age: 32,
            name: "Norma Hooper",
            gender: "female",
            company: "PARCOE",
            email: "normahooper@parcoe.com",
            phone: "+1 (827) 503-2742",
            address: "470 Fenimore Street, Hatteras, Texas, 1582",
            bd: "2015-01-15T12:22:00 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7c30aa4064670cf21",
            index: 48,
            guid: "969d77af-b251-4924-82cf-7c787752161d",
            isActive: false,
            balance: 3673.94,
            age: 23,
            name: "Lee Wiggins",
            gender: "female",
            company: "NITRACYR",
            email: "leewiggins@nitracyr.com",
            phone: "+1 (941) 478-3536",
            address: "958 Flatbush Avenue, Clara, North Carolina, 970",
            bd: "2018-01-09T11:09:34 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7ecd5a4859f2d94dc",
            index: 49,
            guid: "cdf9b8de-a309-4cb7-80bb-f1b830b8b640",
            isActive: true,
            balance: 2166.21,
            age: 27,
            name: "Alvarez Lynch",
            gender: "male",
            company: "KIGGLE",
            email: "alvarezlynch@kiggle.com",
            phone: "+1 (929) 528-3805",
            address: "901 Stratford Road, Derwood, Iowa, 1402",
            bd: "2015-01-08T04:28:57 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7216c8cabc849eea7",
            index: 50,
            guid: "c4175d6a-1560-468e-b682-701c1549b6b1",
            isActive: false,
            balance: 3479.39,
            age: 39,
            name: "Oneal Rosario",
            gender: "male",
            company: "UBERLUX",
            email: "onealrosario@uberlux.com",
            phone: "+1 (951) 572-3027",
            address: "267 Rockaway Parkway, Chapin, Montana, 7813",
            bd: "2014-02-10T05:08:13 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78841719bf955b2d9",
            index: 51,
            guid: "966c9ce6-9151-47cb-8c71-98c4cd0d2f40",
            isActive: false,
            balance: 1625.49,
            age: 36,
            name: "Olsen Stevens",
            gender: "male",
            company: "EMPIRICA",
            email: "olsenstevens@empirica.com",
            phone: "+1 (871) 403-3377",
            address: "704 Lamont Court, Saranap, Massachusetts, 3171",
            bd: "2014-09-17T05:13:13 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7b7b8e578dff0f85c",
            index: 52,
            guid: "8269a34f-3a02-47d6-bcb1-8f076bb478f0",
            isActive: true,
            balance: 1143.73,
            age: 27,
            name: "Marian Henson",
            gender: "female",
            company: "ENDIPINE",
            email: "marianhenson@endipine.com",
            phone: "+1 (995) 406-2592",
            address: "803 Ellery Street, Boykin, Alaska, 8624",
            bd: "2016-08-28T01:22:51 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f737459ec79c91ca75",
            index: 53,
            guid: "badb9342-10fd-4520-ae66-c246e47add8f",
            isActive: false,
            balance: 1458.01,
            age: 23,
            name: "Dudley Dickson",
            gender: "male",
            company: "POLARIA",
            email: "dudleydickson@polaria.com",
            phone: "+1 (860) 428-3250",
            address: "833 Revere Place, Rockbridge, Illinois, 4628",
            bd: "2017-01-19T12:36:59 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f70ddc6fc11ebf043a",
            index: 54,
            guid: "52b1be89-8186-4685-81b7-203c17ed9f89",
            isActive: true,
            balance: 2815.76,
            age: 25,
            name: "Earnestine Oneil",
            gender: "female",
            company: "CYTREK",
            email: "earnestineoneil@cytrek.com",
            phone: "+1 (879) 541-3490",
            address: "442 Emerald Street, Graniteville, Hawaii, 1302",
            bd: "2017-07-07T10:34:33 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78b816185ccd2b4b3",
            index: 55,
            guid: "e66850ea-546b-4eb5-ae76-d66b0e727f44",
            isActive: true,
            balance: 3645.09,
            age: 21,
            name: "Nicholson Mason",
            gender: "male",
            company: "TELEQUIET",
            email: "nicholsonmason@telequiet.com",
            phone: "+1 (861) 528-3215",
            address: "261 Aitken Place, Cecilia, Ohio, 1381",
            bd: "2016-03-20T08:31:34 -06:00",
            avatar: "assets/images/faces/10.jpg"
        },
        {
            _id: "5a7b73f780f8bf8fbe24d75c",
            index: 56,
            guid: "40b999cd-00bf-46e0-9107-b44906d832e0",
            isActive: false,
            balance: 2477.66,
            age: 36,
            name: "Linda Shaffer",
            gender: "female",
            company: "ZORK",
            email: "lindashaffer@zork.com",
            phone: "+1 (828) 524-3011",
            address: "350 Plymouth Street, Waterford, Washington, 6715",
            bd: "2017-07-09T05:51:11 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f741e22fc19ffa6952",
            index: 57,
            guid: "cc2ac19d-7d67-4f60-973a-369160a9c377",
            isActive: false,
            balance: 2651.39,
            age: 20,
            name: "Montoya Riggs",
            gender: "male",
            company: "MARKETOID",
            email: "montoyariggs@marketoid.com",
            phone: "+1 (809) 562-3786",
            address: "633 Monitor Street, Chicopee, District Of Columbia, 550",
            bd: "2016-02-05T12:36:05 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7de56ead40c26e69a",
            index: 58,
            guid: "6e0b06b8-1199-498c-8002-41f4972aa2d2",
            isActive: false,
            balance: 3463.92,
            age: 28,
            name: "Walker Duran",
            gender: "male",
            company: "GEOFORM",
            email: "walkerduran@geoform.com",
            phone: "+1 (868) 502-2553",
            address: "550 Kensington Walk, Wyano, Virginia, 7703",
            bd: "2017-08-18T12:39:37 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f70a04fe142269ea8d",
            index: 59,
            guid: "c6733cd5-1e73-4317-b4bc-1a9e597581a4",
            isActive: true,
            balance: 3846.35,
            age: 26,
            name: "Suzanne House",
            gender: "female",
            company: "SYBIXTEX",
            email: "suzannehouse@sybixtex.com",
            phone: "+1 (892) 533-2739",
            address: "367 Harwood Place, Twilight, Oregon, 9799",
            bd: "2016-11-26T11:57:18 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7339943d94af3b39d",
            index: 60,
            guid: "4ff2c2aa-0573-4be1-a1c8-f684af8a5fbf",
            isActive: false,
            balance: 2717.94,
            age: 26,
            name: "Lewis Oconnor",
            gender: "male",
            company: "EXOZENT",
            email: "lewisoconnor@exozent.com",
            phone: "+1 (954) 582-2660",
            address: "717 Sutter Avenue, Bartley, Michigan, 1142",
            bd: "2017-08-21T08:25:00 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7d8e266ad1bc5daa8",
            index: 61,
            guid: "94667aad-86fc-4a2c-94fb-11b572307c75",
            isActive: false,
            balance: 2725.58,
            age: 39,
            name: "Shelley Bonner",
            gender: "female",
            company: "INDEXIA",
            email: "shelleybonner@indexia.com",
            phone: "+1 (965) 490-3768",
            address: "896 Clinton Avenue, Canoochee, Idaho, 1154",
            bd: "2016-04-11T06:08:29 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7e74a5af674e4cbdd",
            index: 62,
            guid: "ec68c47e-7cbd-485e-8d54-fab1bb6ea008",
            isActive: true,
            balance: 1343.87,
            age: 29,
            name: "Mccall Morales",
            gender: "male",
            company: "QUILITY",
            email: "mccallmorales@quility.com",
            phone: "+1 (939) 455-2610",
            address: "325 Crystal Street, Harleigh, Wyoming, 5658",
            bd: "2014-11-20T07:30:04 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f7efb231e53a0c94cd",
            index: 63,
            guid: "6a8b3f55-406c-4ae8-be59-94a0f8fbd180",
            isActive: false,
            balance: 1092.69,
            age: 37,
            name: "Vera Mcpherson",
            gender: "female",
            company: "CIPROMOX",
            email: "veramcpherson@cipromox.com",
            phone: "+1 (890) 500-3729",
            address: "771 Beard Street, Rivera, Minnesota, 4726",
            bd: "2017-07-13T02:47:50 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7e345c5dfc5d636e4",
            index: 64,
            guid: "46879caf-76e6-46e0-9b8b-bc17667a81ea",
            isActive: true,
            balance: 2077.12,
            age: 36,
            name: "Gregory Roth",
            gender: "male",
            company: "EARWAX",
            email: "gregoryroth@earwax.com",
            phone: "+1 (806) 595-2477",
            address: "349 Dunham Place, Sardis, Alabama, 3320",
            bd: "2017-11-08T02:26:23 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f77f5f9d730fab11e0",
            index: 65,
            guid: "9cfb8f58-7acf-4a39-bf2b-c90269c33db0",
            isActive: true,
            balance: 3503.58,
            age: 31,
            name: "Russell Carver",
            gender: "male",
            company: "PREMIANT",
            email: "russellcarver@premiant.com",
            phone: "+1 (849) 521-2335",
            address: "851 Noble Street, Holcombe, Oklahoma, 311",
            bd: "2016-07-10T10:08:35 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f7cab10f461153989c",
            index: 66,
            guid: "2562a818-4451-4193-94cd-650d131ff097",
            isActive: false,
            balance: 1652.9,
            age: 21,
            name: "Darlene Hurley",
            gender: "female",
            company: "STELAECOR",
            email: "darlenehurley@stelaecor.com",
            phone: "+1 (868) 492-2270",
            address: "627 Wilson Street, Loveland, Louisiana, 765",
            bd: "2017-05-20T12:39:31 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7ecccc997e4160a59",
            index: 67,
            guid: "0050170f-0283-481d-9633-dc9d134be121",
            isActive: true,
            balance: 3692.88,
            age: 21,
            name: "Lela Bailey",
            gender: "female",
            company: "AQUOAVO",
            email: "lelabailey@aquoavo.com",
            phone: "+1 (917) 449-2329",
            address: "121 Adams Street, Malo, Arkansas, 7435",
            bd: "2016-11-06T04:55:46 -06:00",
            avatar: "assets/images/faces/5.jpg"
        }
    ];
    return UserDB;
}());



/***/ }),

/***/ 10667:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcerptPipe": function() { return /* binding */ ExcerptPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) { return new (t || ExcerptPipe)(); };
    ExcerptPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "excerpt", type: ExcerptPipe, pure: true });
    return ExcerptPipe;
}());



/***/ }),

/***/ 64914:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetValueByKeyPipe": function() { return /* binding */ GetValueByKeyPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) { return new (t || GetValueByKeyPipe)(); };
    GetValueByKeyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getValueByKey", type: GetValueByKeyPipe, pure: false });
    return GetValueByKeyPipe;
}());



/***/ }),

/***/ 84075:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeTimePipe": function() { return /* binding */ RelativeTimePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date)) {
            value = new Date(value);
        }
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + ' years ago';
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' months ago';
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' days ago';
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' hours ago';
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' minutes ago';
        }
        return Math.floor(seconds) + ' seconds ago';
    };
    RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) { return new (t || RelativeTimePipe)(); };
    RelativeTimePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "relativeTime", type: RelativeTimePipe, pure: true });
    return RelativeTimePipe;
}());



/***/ }),

/***/ 81233:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPipesModule": function() { return /* binding */ SharedPipesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./excerpt.pipe */ 10667);
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-value-by-key.pipe */ 64914);
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relative-time.pipe */ 84075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);





var pipes = [
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__.ExcerptPipe,
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.GetValueByKeyPipe,
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe
];
var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule.ɵfac = function SharedPipesModule_Factory(t) { return new (t || SharedPipesModule)(); };
    SharedPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedPipesModule });
    SharedPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
            ]] });
    return SharedPipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedPipesModule, { declarations: [_excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__.ExcerptPipe,
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.GetValueByKeyPipe,
        _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__.ExcerptPipe,
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.GetValueByKeyPipe,
        _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe] }); })();


/***/ }),

/***/ 57595:
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.gaurd.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurd": function() { return /* binding */ AuthGaurd; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 10629);



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.auth.authenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/sessions/signin');
        }
    };
    AuthGaurd.ɵfac = function AuthGaurd_Factory(t) { return new (t || AuthGaurd)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
    AuthGaurd.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGaurd, factory: AuthGaurd.ɵfac, providedIn: 'root' });
    return AuthGaurd;
}());



/***/ }),

/***/ 10629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 65792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-store.service */ 69122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3984);





var AuthService = /** @class */ (function () {
    function AuthService(store, router) {
        this.store = store;
        this.router = router;
        //Only for demo purpose
        this.authenticated = true;
        this.checkAuth();
    }
    AuthService.prototype.checkAuth = function () {
        // this.authenticated = this.store.getItem("demo_login_status");
    };
    AuthService.prototype.getuser = function () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({});
    };
    AuthService.prototype.signin = function (credentials) {
        this.authenticated = true;
        this.store.setItem("demo_login_status", true);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1500));
    };
    AuthService.prototype.signout = function () {
        this.authenticated = false;
        this.store.setItem("demo_login_status", false);
        this.router.navigateByUrl("/sessions/signin");
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_0__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
    AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
    return AuthService;
}());



/***/ }),

/***/ 60360:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": function() { return /* binding */ CustomizerService; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);




var CustomizerService = /** @class */ (function () {
    function CustomizerService(router) {
        var _this = this;
        this.router = router;
        this.layouts = [
            {
                title: "Sidebar Compact",
                name: "applayout-sidebar-compact",
                img: "./assets/images/screenshots/02_preview.png",
                active: false
            },
            {
                title: "Sidebar Large",
                name: "applayout-sidebar-large",
                img: "./assets/images/screenshots/04_preview.png",
                active: true
            }
        ];
        this.colors = [
            {
                sidebarClass: "sidebar-gradient-purple-indigo",
                class: "gradient-purple-indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-blue",
                class: "gradient-black-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-gray",
                class: "gradient-black-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-steel-gray",
                class: "gradient-steel-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-dark-purple",
                class: "dark-purple",
                active: true
            },
            {
                sidebarClass: "sidebar-slate-gray",
                class: "slate-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-midnight-blue",
                class: "midnight-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-blue",
                class: "blue",
                active: false
            },
            {
                sidebarClass: "sidebar-indigo",
                class: "indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-pink",
                class: "pink",
                active: false
            },
            {
                sidebarClass: "sidebar-red",
                class: "red",
                active: false
            },
            {
                sidebarClass: "sidebar-purple",
                class: "purple",
                active: false
            }
        ];
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart; }))
            .subscribe(function (event) {
            if (event.url.indexOf("applayout-") === -1) {
                if (event.url.indexOf("sessions") !== -1) {
                    return;
                }
                var url = "/" + _this.selectedLayout.name + event.url;
                _this.router.navigateByUrl(url);
            }
        });
    }
    CustomizerService.prototype.modifySidebarUrls = function (nav, selectedLayoutName) {
        var _this = this;
        nav.forEach(function (item) {
            if (item.state && item.state.indexOf("sessions") !== -1) {
                return;
            }
            if (item.type === "link" && item.state.indexOf("applayout-") === -1) {
                item.state = "/" + selectedLayoutName + item.state;
            }
            else if (item.type === "link") {
                item.state = _this.replaceUrlString(selectedLayoutName, item.state);
            }
            if (item.type === "dropDown" && item.sub) {
                _this.modifySidebarUrls(item.sub, selectedLayoutName);
            }
        });
    };
    CustomizerService.prototype.replaceUrlString = function (inputString, fullString) {
        var currentRoute = fullString;
        var routeArray = currentRoute.split("/");
        routeArray = routeArray.map(function (r) {
            if (r.indexOf("applayout-") !== -1) {
                return inputString;
            }
            return r;
        });
        return routeArray.join("/");
    };
    CustomizerService.prototype.removeClass = function (el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    };
    CustomizerService.prototype.addClass = function (el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    };
    CustomizerService.prototype.findClosest = function (el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    };
    CustomizerService.prototype.hasClass = function (el, className) {
        if (!el)
            return;
        return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1);
    };
    CustomizerService.prototype.toggleClass = function (el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    };
    CustomizerService.prototype.toggleDir = function (isRTL) {
        var html = document.getElementsByTagName('html')[0];
        if (!html) {
            return;
        }
        if (isRTL) {
            html.setAttribute('dir', 'rtl');
        }
        else {
            html.setAttribute('dir', 'ltr');
        }
    };
    CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    CustomizerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });
    return CustomizerService;
}());



/***/ }),

/***/ 38661:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/data-layer.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataLayerService": function() { return /* binding */ DataLayerService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58497);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 22134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);







var DataLayerService = /** @class */ (function () {
    function DataLayerService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.baseEntitysUrl = this.baseUrl + 'societe';
        this.baseStatesUrl = this.baseUrl + 'states';
        this.auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50aWQiOiJCcmFuY2hBIiwiZXhwIjoxNzE5MjE4NTY3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxMTMvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTEzLyJ9.fQ3PWjMZe3AfdC_ygbw1KQB5QB0KD8JFjOmeYaIaxlE';
    }
    DataLayerService.prototype.getInvoices = function () {
        return this.http.get('/api/invoices');
    };
    DataLayerService.prototype.getInvoice = function (id) {
        return this.http.get('/api/invoices/' + id);
    };
    DataLayerService.prototype.saveInvoice = function (invoice) {
        if (invoice.id) {
            return this.http.put('/api/invoices/' + invoice.id, invoice);
        }
        else {
            invoice.id = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.genId();
            return this.http.post('/api/invoices/', invoice);
        }
    };
    DataLayerService.prototype.deleteInvoice = function (id) {
        return this.http.delete('/api/invoices/' + id);
    };
    DataLayerService.prototype.getMails = function () {
        return this.http.get('/api/mails');
    };
    DataLayerService.prototype.getCountries = function () {
        return this.http.get('/api/countries');
    };
    DataLayerService.prototype.getProducts = function () {
        return this.http.get('api/products');
    };
    DataLayerService.prototype.saveSociete = function (societe) {
        // const headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${this.auth_token}`
        //   });
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth_token
        });
        return this.http.post(this.baseEntitysUrl, societe, { headers: reqHeader })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (data) {
            console.log('insertCustomer status: ' + data.status);
            return data.societe;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
        // if(societe.id) {
        //     return this.http.put<ISocieteResponse>('/societe/'+societe.id, societe);
        // } else {
        //     societe.id = 0;
        //     return this.http.post<ISocieteResponse>('/societe/', societe);
        // }
    };
    DataLayerService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage_1 = error.error.message;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(function () { return new Error(errMessage_1); });
            // Use the following instead if using lite-server
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(function () { return new Error(error.message || 'Node.js server error'); });
    };
    DataLayerService.ɵfac = function DataLayerService_Factory(t) { return new (t || DataLayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    DataLayerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataLayerService, factory: DataLayerService.ɵfac, providedIn: 'root' });
    return DataLayerService;
}());



/***/ }),

/***/ 69122:
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStoreService": function() { return /* binding */ LocalStoreService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var LocalStoreService = /** @class */ (function () {
    function LocalStoreService() {
        this.ls = window.localStorage;
    }
    LocalStoreService.prototype.setItem = function (key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    };
    LocalStoreService.prototype.getItem = function (key) {
        var value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            // console.log(e)
            return null;
        }
    };
    LocalStoreService.prototype.clear = function () {
        this.ls.clear();
    };
    LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
    LocalStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });
    return LocalStoreService;
}());



/***/ }),

/***/ 21218:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": function() { return /* binding */ NavigationService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.sidebarState = {
            sidenavOpen: true,
            childnavOpen: false
        };
        this.defaultMenu = [
            {
                name: 'Dashboard',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-Bar-Chart',
                sub: [
                    { icon: 'i-Clock-3', name: 'Version 1', state: '/dashboard/v1', type: 'link' },
                    { icon: 'i-Clock-4', name: 'Version 2', state: '/dashboard/v2', type: 'link' },
                    { icon: 'i-Over-Time', name: 'Version 3', state: '/dashboard/v3', type: 'link' },
                    { icon: 'i-Clock', name: 'Version 4', state: '/dashboard/v4', type: 'link' },
                ]
            },
            {
                name: 'UI kits',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                type: 'dropDown',
                icon: 'i-Library',
                sub: [
                    { icon: 'i-Bell', name: 'Alerts', state: '/uikits/alerts', type: 'link' },
                    { icon: 'i-Split-Horizontal-2-Window', name: 'Accordions', state: '/uikits/accordions', type: 'link' },
                    { icon: 'i-Medal-2', name: 'Badges', state: '/uikits/badges', type: 'link' },
                    {
                        icon: 'i-Arrow-Right-in-Circle',
                        name: 'Buttons',
                        type: 'dropDown',
                        sub: [
                            { name: 'Bootstrap Buttons', state: '/uikits/buttons', type: 'link' },
                            { name: 'Loding Buttons', state: '/uikits/buttons-loading', type: 'link' }
                        ]
                    },
                    { icon: 'i-ID-Card', name: 'Cards', state: '/uikits/cards', type: 'link' },
                    { icon: 'i-Line-Chart-2', name: 'Cards metrics', state: '/uikits/cards-metrics', type: 'link' },
                    { icon: 'i-Credit-Card', name: 'Cards widget', state: '/uikits/cards-widget', type: 'link' },
                    { icon: 'i-Full-Cart', name: 'Cards ecommerce', state: '/uikits/cards-ecommerce', type: 'link' },
                    { icon: 'i-Duplicate-Window', name: 'Modals', state: '/uikits/modals', type: 'link' },
                    { icon: 'i-Speach-Bubble-3', name: 'Popover', state: '/uikits/popover', type: 'link' },
                    { icon: 'i-Like', name: 'Rating', state: '/uikits/rating', type: 'link' },
                    { icon: 'i-Loading-3', name: 'Loaders', state: '/uikits/loaders', type: 'link' },
                ]
            },
            {
                name: 'Apps',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-Computer-Secure',
                sub: [
                    { icon: 'i-Add-File', name: 'Invoice Builder', state: '/invoice', type: 'link' },
                    { icon: 'i-Email', name: 'Inbox', state: '/inbox', type: 'link' },
                    { icon: 'i-Speach-Bubble-3', name: 'Chat', state: '/chat', type: 'link' },
                    { icon: 'i-Calendar', name: 'Calendar', state: '/calendar', type: 'link' },
                ]
            },
            {
                name: 'Forms',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-File-Clipboard-File--Text',
                sub: [
                    { icon: 'i-File-Clipboard-Text--Image', name: 'Basic components', state: '/forms/basic', type: 'link' },
                    { icon: 'i-Split-Vertical', name: 'Form layouts', state: '/forms/layouts', type: 'link' },
                    { icon: 'i-Receipt-4', name: 'Input Group', state: '/forms/input-group', type: 'link' },
                    { icon: 'i-File-Edit', name: 'Input Mask', state: '/forms/input-mask', type: 'link' },
                    { icon: 'i-Tag-2', name: 'Tag Input', state: '/forms/tag-input', type: 'link' },
                    { icon: 'i-Width-Window', name: 'Wizard', state: '/forms/wizard', type: 'link' },
                    { icon: 'i-Crop-2', name: 'Image Cropper', state: '/forms/img-cropper', type: 'link' },
                ]
            },
            {
                name: 'Data Tables',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-File-Horizontal-Text',
                sub: [
                    { icon: 'i-File-Horizontal-Text', name: 'List', state: '/tables/list', type: 'link' },
                    { icon: 'i-Full-View-Window', name: 'Fullscreen', state: '/tables/full', type: 'link' },
                    { icon: 'i-Code-Window', name: 'Paging', state: '/tables/paging', type: 'link' },
                    { icon: 'i-Filter-2', name: 'Filter', state: '/tables/filter', type: 'link' },
                ]
            },
            {
                name: 'Sessions',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-Administrator',
                sub: [
                    { icon: 'i-Add-User', name: 'Sign up', state: '/sessions/signup', type: 'link' },
                    { icon: 'i-Checked-User', name: 'Sign in', state: '/sessions/signin', type: 'link' },
                    { icon: 'i-Find-User', name: 'Forgot', state: '/sessions/forgot', type: 'link' }
                ]
            },
            {
                name: 'Pages',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-Windows-2',
                sub: [
                    { icon: 'i-Male', name: 'User Profile', state: '/pages/profile', type: 'link' }
                ]
            },
            {
                name: 'Icons',
                description: '600+ premium icons',
                type: 'link',
                icon: 'i-Cloud-Sun',
                state: '/icons/iconsmind'
            },
            {
                name: 'Others',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                type: 'dropDown',
                icon: 'i-Double-Tap',
                sub: [
                    { icon: 'i-Error-404-Window', name: 'Not found', state: '/others/404', type: 'link' }
                ]
            },
            {
                name: 'Doc',
                type: 'extLink',
                tooltip: 'Documentation',
                icon: 'i-Safe-Box1',
                state: 'http://demos.ui-lib.com/gull-doc'
            }
        ];
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.defaultMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
    NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });
    return NavigationService;
}());



/***/ }),

/***/ 43763:
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
    SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
    return SearchService;
}());



/***/ }),

/***/ 9131:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/sidebar-helper.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarHelperService": function() { return /* binding */ SidebarHelperService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

var SidebarHelperService = /** @class */ (function () {
    function SidebarHelperService() {
        this.sidenavInstances = [];
    }
    /**
     * Set sidenav
     *
     * @param id
     * @param instance
     */
    SidebarHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    /**
     * Get sidenav
     *
     * @param id
     * @returns {any}
     */
    SidebarHelperService.prototype.getSidenav = function (id) {
        console.log(this.sidenavInstances);
        return this.sidenavInstances[id];
    };
    SidebarHelperService.ɵfac = function SidebarHelperService_Factory(t) { return new (t || SidebarHelperService)(); };
    SidebarHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarHelperService, factory: SidebarHelperService.ɵfac, providedIn: 'root' });
    return SidebarHelperService;
}());



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 91376);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/search/search.module */ 83834);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared-components.module */ 50933);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/shared-directives.module */ 72747);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ 81233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 74788);











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_0__.SearchModule,
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule.forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule,
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__.SharedDirectivesModule,
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.SharedPipesModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
        _components_search_search_module__WEBPACK_IMPORTED_MODULE_0__.SearchModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        _components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__.SharedDirectivesModule,
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.SharedPipesModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 22134:
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": function() { return /* binding */ Utils; }
/* harmony export */ });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isMobile = function () {
        return window && window.matchMedia('(max-width: 767px)').matches;
    };
    Utils.ngbDateToDate = function (ngbDate) {
        if (!ngbDate) {
            return null;
        }
        return new Date(ngbDate.month + "/" + ngbDate.day + "/" + ngbDate.year);
    };
    Utils.dateToNgbDate = function (date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    };
    Utils.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    Utils.genId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    return Utils;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://localhost:7274/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });
/**
 * Only for the demo purpose
 */
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production && document) {
    var script = document.createElement('script');
    script.innerHTML = "\n    !function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '2268386293237836');\n    fbq('track', 'PageView');";
    document.head.appendChild(script);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map