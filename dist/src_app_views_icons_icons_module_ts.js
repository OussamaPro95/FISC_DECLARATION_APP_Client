(self["webpackChunkgull"] = self["webpackChunkgull"] || []).push([["src_app_views_icons_icons_module_ts"],{

/***/ 90394:
/*!*****************************************************!*\
  !*** ./src/app/views/icons/icons-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsRoutingModule": function() { return /* binding */ IconsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _iconsmind_iconsmind_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsmind/iconsmind.component */ 90371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);




var routes = [
    {
        path: 'iconsmind',
        component: _iconsmind_iconsmind_component__WEBPACK_IMPORTED_MODULE_0__.IconsmindComponent
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule.ɵfac = function IconsRoutingModule_Factory(t) { return new (t || IconsRoutingModule)(); };
    IconsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsRoutingModule });
    IconsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return IconsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 73150:
/*!*********************************************!*\
  !*** ./src/app/views/icons/icons.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": function() { return /* binding */ IconsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-routing.module */ 90394);
/* harmony import */ var _iconsmind_iconsmind_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconsmind/iconsmind.component */ 90371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);




var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule.ɵfac = function IconsModule_Factory(t) { return new (t || IconsModule)(); };
    IconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconsModule });
    IconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule
            ]] });
    return IconsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_iconsmind_iconsmind_component__WEBPACK_IMPORTED_MODULE_1__.IconsmindComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule] }); })();


/***/ }),

/***/ 90371:
/*!**************************************************************!*\
  !*** ./src/app/views/icons/iconsmind/iconsmind.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsmindComponent": function() { return /* binding */ IconsmindComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 12057);


function IconsmindComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-20 i-", i_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("i-", i_r1, "");
} }
var IconsmindComponent = /** @class */ (function () {
    function IconsmindComponent() {
        this.icons = ["Add-Window", "Approved-Window", "Block-Window", "Close-Window", "Code-Window", "Delete-Window", "Duplicate-Window", "Error-404-Window", "Favorite-Window", "Full-View-Window", "Loading-Window", "Maximize-Window", "Minimize-Window", "Network-Window", "New-Tab", "One-Window", "Restore-Window", "Sidebar-Window", "Split-Four-Square-Window", "Split-Horizontal-2-Window", "Split-Horizontal", "Split-Vertical-2", "Split-Vertical", "Time-Window", "Touch-Window", "Two-Windows", "Upload-Window", "URL-Window", "Warning-Window", "Width-Window", "Windows-2", "Cloud-Sun", "Cloud-Weather", "Clouds-Weather", "Drop", "Dry", "Fahrenheit", "Film-Video", "Film", "Flash-Video", "Movie", "Old-TV", "Video-2", "Video-4", "Video-5", "Video", "Billing", "Crop-2", "Dashboard", "Duplicate-Layer", "Filter-2", "Gear-2", "Gear", "Gears", "Information", "Library", "Loading-3", "Loading", "Magnifi-Glass", "Magnifi-Glass-", "Magnifi-Glass1", "Share", "Statistic", "Support", "Bicycle", "Car-2", "Jeep-2", "Jeep", "Jet", "Motorcycle", "Plane-2", "Plane", "Road-2", "Double-Tap", "Drag", "Clock-3", "Clock-4", "Clock-Back", "Clock-Forward", "Clock", "Over-Time-2", "Over-Time", "Sand-watch-2", "Sand-watch", "Stopwatch", "Medal-2", "Medal-3", "Speach-Bubble-3", "Speach-Bubble-6", "Speach-Bubble-8", "Speach-Bubble-11", "Speach-Bubble-12", "Speach-Bubble-13", "Speach-Bubble-Asking", "Speach-Bubbles", "Bebo", "Behance", "Betvibes", "Bing", "Blinklist", "Blogger", "Brightkite", "Digg", "Doplr", "Dribble", "Email", "Evernote", "Facebook-2", "Facebook", "Friendster", "Furl", "Google-Plus", "Google", "ImDB", "Instagram", "Like-2", "Like", "Linkedin-2", "Linkedin", "Picasa", "Pinterest", "Plaxo", "Posterous", "QIK", "Reddit", "Reverbnation", "RSS", "Skype", "Tumblr", "Twitter-2", "Twitter", "Unlike-2", "Unlike", "Vimeo", "Wordpress", "Yahoo", "Youtube", "Bisexual", "Female-2", "Gey", "Heart", "Homosexual", "Inifity", "Male-2", "Men", "Quotes-2", "Quotes", "Add-Cart", "Bag-Coins", "Bag-Items", "Bar-Code", "Bitcoin", "Car-Coins", "Car-Items", "Cart-Quantity", "Cash-register-2", "Cash-Register", "Checkout-Bag", "Checkout-Basket", "Checkout", "Full-Basket", "Full-Cart", "Password-shopping", "Receipt-3", "Receipt-4", "Receipt", "Remove-Bag", "Remove-Basket", "Remove-Cart", "Shop-2", "Shop-3", "Shop-4", "Shop", "Shopping-Bag", "Shopping-Basket", "Shopping-Cart", "Tag-2", "Tag-3", "Tag-4", "Tag-5", "Broke-Link-2", "Coding", "Consulting", "Copyright", "Idea-2", "Idea-3", "Internet-2", "Internet", "Link-2", "Management", "Tag", "Target", "Computer-Secure", "Firewall", "Laptop-Secure", "Lock-2", "Safe-Box", "Security-Check", "SSL", "Unlock-2", "Ambulance", "Atom", "Cube-Molecule-2", "Danger", "First-Aid", "Medicine", "Pulse", "Stethoscope", "Temperature1", "Camera", "Edit", "Eye", "Flash-2", "Flash", "Landscape", "Macro", "Memory-Card-2", "Memory-Card-3", "Memory-Card", "Shutter", "Signal", "Add-User", "Add-UserStar", "Administrator", "Assistant", "Boy", "Business-Man", "Business-ManWoman", "Business-Mens", "Business-Woman", "Checked-User", "Chef", "Conference", "Cool-Guy", "Doctor", "Engineering", "Female-21", "Female", "Find-User", "Geek", "Girl", "ID-2", "ID-3", "ID-Card", "Lock-User", "Love-User", "Male-21", "Male", "MaleFemale", "Man-Sign", "Remove-User", "Flag-2", "Gift-Box", "Key", "Movie-Ticket", "Paint-Brush", "Paint-Bucket", "Paper-Plane", "Post-Sign-2-ways", "Post-Sign", "Suitcase", "Ticket", "Landscape1", "Recycling-2", "Tree-3", "Bell", "First", "Keyboard3", "Last", "Microphone-3", "Music-Note-2", "Next-Music", "Play-Music", "Stop-Music", "Pause-2", "Pause", "Power-2", "Record-2", "Repeat-2", "Shuffle-2", "Start-2", "Start", "Stop-2", "Compass-2", "Edit-Map", "Geo2-", "Geo21", "Globe", "Map-Marker", "Map", "Map2", "Android-Store", "Box1", "Dropbox", "Google-Drive", "X-Box", "Add", "Back1", "Broken-Link", "Check", "Circular-Point", "Close", "Cursor-Click-2", "Cursor-Click", "Cursor-Move-2", "Cursor-Select", "Cursor", "Down", "Download", "Endways", "Left", "Link", "Next1", "Pointer", "Previous", "Reload", "Remove", "Rewind", "Right", "Up", "Upload", "Upward", "Yes", "Disk", "Folder-Cloud", "Folder-Delete", "Folder-Download", "Folder-Hide", "Folder-Lock", "Folder-Trash", "Folder-Zip", "Folder", "Folders", "Add-File", "Delete-File", "File-Block", "File-Chart", "File-Clipboard-File--Text", "File-Clipboard-Text--Image", "File-Cloud", "File-Copy-2", "File-Copy", "File-CSV", "File-Download", "File-Edit", "File-Excel", "File-Hide", "File-Horizontal-Text", "File-Horizontal", "File-HTML", "File-JPG", "File-Link", "File-Pictures", "File-Refresh", "File-Search", "File-TXT", "File-Video", "File-Word", "File-Zip", "File", "Files", "Remove-File", "Angry", "Depression", "Eyeglasses-Smiley-2", "Eyeglasses-Smiley", "Happy", "Humor", "Love1", "Money", "Smile", "Surprise", "Thumbs-Down-Smiley", "Thumbs-Up-Smiley", "Tongue", "At-Sign", "Box-Full", "Empty-Box", "Envelope-2", "Envelope", "Inbox-Empty", "Inbox-Into", "Inbox-Out", "Letter-Close", "Letter-Open", "Letter-Sent", "Mail-2", "Mail-3", "Mail-Add-", "Mail-Attachement", "Mail-Delete", "Mail-Favorite", "Mail-Open", "Mail-Outbox", "Mail-Password", "Mail-Read", "Mail-Remove-x", "Mail-Reply-All", "Mail-Reply", "Mail-Search", "Mail-Send", "Mail-Video", "Mail-with-At-Sign", "Mail", "Mailbox-Empty", "Spam-Mail", "Book", "Bookmark", "Diploma-2", "Pen-2", "Pen-3", "Pen-4", "Pen-5", "Student-Hat-2", "University", "Computer-2", "Monitor-2", "Monitor-3", "Monitor-5", "Monitor-Vertical", "Orientation-2", "Brush", "CMYK", "Big-Data", "Data-Backup", "Data-Block", "Data-Center", "Data-Clock", "Data-Cloud", "Data-Compress", "Data-Copy", "Data-Download", "Data-Power", "Data-Refresh", "Data-Save", "Data-Search", "Data-Security", "Data-Settings", "Data-Sharing", "Data-Shield", "Data-Storage", "Data-Stream", "Data", "Address-Book", "Newspaper", "Router-2", "Telephone", "Wifi", "Block-Cloud", "Cloud", "Cloud-", "Cloud-Email", "Cloud-Laptop", "Cloud1", "Clouds", "Download-from-Cloud", "Search-on-Cloud", "Share-on-Cloud", "Belt-3", "Dec", "Bow1", "Christmas-Bell", "Christmas-Candle", "Bar-Chart-2", "Bar-Chart-3", "Bar-Chart-4", "Bar-Chart-5", "Bar-Chart", "Calculator-2", "Calendar-2", "Calendar-3", "Calendar-4", "Calendar", "Coins", "Credit-Card", "Dollar-Sign-2", "Dollar-Sign", "Dollar", "Euro-Sign-2", "Euro-Sign", "Euro", "Financial", "Line-Chart-2", "Line-Chart", "Money-2", "Money-Bag", "Money1", "Pie-Chart-2", "Pie-Chart-3", "Pie-Chart", "Pound-Sign", "Pound", "Safe-Box1", "Token-", "Visa", "Wallet", "Building", "Clothing-Store", "Door", "Home-4", "Home1", "University1", "Window", "Android", "Chrome", "Debian", "Firefox", "Internet-Explorer", "iOS-Apple", "Linux", "Netscape", "Opera", "Windows-Microsoft", "Fingerprint-2", "Hand", "Heart1", "Arrow-Back-2", "Arrow-Back-3", "Arrow-Back", "Arrow-Down-2", "Arrow-Down-3", "Arrow-Down-in-Circle", "Arrow-Down", "Arrow-Forward-2", "Arrow-Forward", "Arrow-Left-2", "Arrow-Left-in-Circle", "Arrow-Left", "Arrow-Next", "Arrow-Right-2", "Arrow-Right-in-Circle", "Arrow-Right", "Arrow-Turn-Left", "Arrow-Turn-Right", "Arrow-Up-2", "Arrow-Up-3", "Arrow-Up-in-Circle", "Arrow-Up", "Arrow-X-Left", "Arrow-X-Right", "Bottom-To-Top", "Down-2", "Down-3", "Down1", "Download1", "End1", "Fit-To-2", "Fit-To", "Full-Screen-2", "Full-Screen", "Go-Bottom", "Go-Top", "Left---Right", "Left-2", "Left-3", "Left-To-Right", "Left1", "Navigat-Start", "Navigate-End", "Reload1", "Repeat-3", "Repeat2", "Right-2", "Right-3", "Right-To-Left", "Right1", "Shuffle-21", "Shuffle1", "Start1", "Sync", "To-Bottom-2", "To-Bottom", "To-Left", "To-Right", "To-Top-2", "To-Top", "Top-To-Bottom", "Triangle-Arrow-Down", "Triangle-Arrow-Left", "Triangle-Arrow-Right", "Triangle-Arrow-Up", "Turn-Down-2", "Turn-Down-From-Left", "Turn-Down-From-Right", "Turn-Down", "Turn-Left-3", "Turn-Left", "Turn-Right-3", "Turn-Right", "Turn-Up-2", "Turn-Up", "Up---Down-3", "Up---Down", "Up-3", "Up1", "Upload1", "Arrow-Circle", "Arrow-Out-Left", "Arrow-Out-Right", "Align-Justify-All", "Align-Justify-Center", "Align-Justify-Left", "Align-Justify-Right", "Align-Left", "Align-Right"];
    }
    IconsmindComponent.prototype.ngOnInit = function () {
    };
    IconsmindComponent.ɵfac = function IconsmindComponent_Factory(t) { return new (t || IconsmindComponent)(); };
    IconsmindComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsmindComponent, selectors: [["app-iconsmind"]], decls: 23, vars: 1, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], [1, "card"], ["class", "col-sm-2 text-center mb-3", 4, "ngFor", "ngForOf"], [1, "col-sm-2", "text-center", "mb-3"]], template: function IconsmindComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Iconsmind");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Icons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Iconsmind");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Usage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<i class=\"i-Add-Cart\"></i>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, IconsmindComponent_div_22_Template, 4, 4, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uc21pbmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return IconsmindComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_views_icons_icons_module_ts.js.map