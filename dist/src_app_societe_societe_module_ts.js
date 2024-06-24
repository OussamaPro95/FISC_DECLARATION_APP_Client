(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["src_app_societe_societe_module_ts"],{

/***/ 14199:
/*!***************************************************!*\
  !*** ./src/app/societe/societe-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocieteRoutingModule": function() { return /* binding */ SocieteRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _societe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./societe.component */ 8209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);




var routes = [
    {
        path: '',
        component: _societe_component__WEBPACK_IMPORTED_MODULE_0__.SocieteComponent
    }
];
var SocieteRoutingModule = /** @class */ (function () {
    function SocieteRoutingModule() {
    }
    SocieteRoutingModule.ɵfac = function SocieteRoutingModule_Factory(t) { return new (t || SocieteRoutingModule)(); };
    SocieteRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SocieteRoutingModule });
    SocieteRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return SocieteRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocieteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8209:
/*!**********************************************!*\
  !*** ./src/app/societe/societe.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocieteComponent": function() { return /* binding */ SocieteComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 91376);
/* harmony import */ var _shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/data-layer.service */ 38661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/btn-loading/btn-loading.component */ 38845);






var SocieteComponent = /** @class */ (function () {
    function SocieteComponent(fb, toastr, dataService, router, route) {
        this.fb = fb;
        this.toastr = toastr;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.societe = {
            nom: '',
            TenantId: 'BranchA',
            matriculeFiscal: '',
            TVA: '',
            adresse: '',
            C: '',
            A: '',
            Cin: '',
            Activite: '',
            CodePostal: '',
            NumeroEmployeurCNSS: ''
        };
        this.errorMessage = '';
    }
    SocieteComponent.prototype.ngOnInit = function () {
        this.buildFormBasic();
        this.radioGroup = this.fb.group({
            radio: []
        });
    };
    SocieteComponent.prototype.buildFormBasic = function () {
        this.formBasic = this.fb.group({
            experience: []
        });
    };
    SocieteComponent.prototype.submit = function () {
        var _this = this;
        this.dataService.saveSociete(this.societe)
            .subscribe(function (societe) {
            if (societe) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to add customer';
            }
        }, function (err) { return console.log(err); });
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.toastr.success('Profile updated.', 'Success!', { progressBar: true });
        }, 3000);
    };
    SocieteComponent.ɵfac = function SocieteComponent_Factory(t) { return new (t || SocieteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_0__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    SocieteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SocieteComponent, selectors: [["app-societe"]], decls: 61, vars: 2, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title", "mb-3"], [3, "formGroup", "ngSubmit"], [1, "col-md-6", "form-group", "mb-3"], ["for", "Nom"], ["type", "text", "id", "Nom", "formControlName", "Nom", "placeholder", "Entrer Nom", 1, "form-control"], ["for", "Adress"], ["id", "Adresse", "formControlName", "Adresse", 1, "form-control"], ["for", "Activite"], ["type", "text", "id", "Activite", "formControlName", "Activite", "aria-describedby", "emailHelp", "placeholder", "Enter Activite", 1, "form-control"], ["for", "credit"], ["id", "Matricle", "formControlName", "Matricle", "placeholder", " Entrer Matricle fiscal", 1, "form-control"], ["id", "TVA", "formControlName", "TVA", "placeholder", "Entrer TVA", 1, "form-control"], ["id", "C", "formControlName", "C", "placeholder", "Entrer c", 1, "form-control"], ["id", "A", "formControlName", "A", "placeholder", "Entrer a", 1, "form-control"], ["for", "phone"], ["id", "NumeroEmployeurCNSS", "formControlName", "NumeroEmployeurCNSS", "placeholder", "Entrer Numero", 1, "form-control"], ["id", "Cin", "formControlName", "Cin", "placeholder", "Entrer Cin", 1, "form-control"], ["id", "CodePostal", "formControlName", "CodePostal", "placeholder", "Entrer Code", 1, "form-control"], ["btnClass", "btn-primary btn-rounded", 3, "loading"]], template: function SocieteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Societe");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SocieteComponent_Template_form_ngSubmit_16_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Nom");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Adresse");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "textarea", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Activite");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Matricle fiscal");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "TVA");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "C");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "A");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Numero Employeur CNSS");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "CIN");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Code Postal");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "btn-loading", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Submit");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formBasic);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_1__.BtnLoadingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpZXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return SocieteComponent;
}());



/***/ }),

/***/ 32496:
/*!*******************************************!*\
  !*** ./src/app/societe/societe.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocieteModule": function() { return /* binding */ SocieteModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 96797);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ 44436);
/* harmony import */ var _societe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./societe.component */ 8209);
/* harmony import */ var _societe_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./societe-routing.module */ 14199);
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/shared-components.module */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);









var SocieteModule = /** @class */ (function () {
    function SocieteModule() {
    }
    SocieteModule.ɵfac = function SocieteModule_Factory(t) { return new (t || SocieteModule)(); };
    SocieteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SocieteModule });
    SocieteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__.CustomFormsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
                ngx_chips__WEBPACK_IMPORTED_MODULE_8__.TagInputModule,
                _societe_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocieteRoutingModule,
                _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
            ]] });
    return SocieteModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SocieteModule, { declarations: [_societe_component__WEBPACK_IMPORTED_MODULE_0__.SocieteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__.CustomFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        ngx_chips__WEBPACK_IMPORTED_MODULE_8__.TagInputModule,
        _societe_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocieteRoutingModule,
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_societe_societe_module_ts.js.map