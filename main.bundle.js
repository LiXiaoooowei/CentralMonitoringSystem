webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/CreateTradeRecord/create-trade-record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  background: rgba(0,0,0,0.6);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CreateTradeRecord/create-trade-record.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/CreateTradeRecord/create-trade-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTradeRecordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateTradeRecordComponent = (function () {
    function CreateTradeRecordComponent(afAuth) {
        this.afAuth = afAuth;
        this.visible = false;
        this.visibleAnimate = false;
    }
    CreateTradeRecordComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    CreateTradeRecordComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    CreateTradeRecordComponent.prototype.add = function () {
        var id = this.tradeTime + this.tradeSymbol;
        var userRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref().child('traders').child(this.afAuth.auth.currentUser.uid);
        userRef.child('records').child(id).set({
            'amount': this.tradeAmt,
            'symbol': this.tradeSymbol,
            'time': this.tradeTime,
            'price_int': this.priceInt,
            'hide': false
        });
        this.hide();
    };
    CreateTradeRecordComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], CreateTradeRecordComponent.prototype, "tradeTime", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], CreateTradeRecordComponent.prototype, "tradeSymbol", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], CreateTradeRecordComponent.prototype, "tradeAmt", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], CreateTradeRecordComponent.prototype, "priceInt", void 0);
    CreateTradeRecordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("../../../../../src/app/CreateTradeRecord/create-trade-record.component.html"),
            styles: [__webpack_require__("../../../../../src/app/CreateTradeRecord/create-trade-record.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
    ], CreateTradeRecordComponent);
    return CreateTradeRecordComponent;
    var _a;
}());

//# sourceMappingURL=create-trade-record.component.js.map

/***/ }),

/***/ "../../../../../src/app/CustomerErrRpt/trader-error-report.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  height: 3.1em;\n  width: 3.1em;\n  margin-top: -.4em;\n  padding: 0;\n}\nh3 {\n  margin-top: 0;\n  color: #444444;\n}\n.custom-btn {\n  margin-top: 2%;\n  margin-left: 1%;\n}\n\n.selected {\n  background-color: #CFD8DC;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2rem 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 4em;\n  border-radius: 4px;\n}\n.heroes li.selected:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n  height: 4em;\n}\n\n.heroes .badge {\n  display: inline-block;\n  font-size: large;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 4em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\ntextarea {\n  font-size: large;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/CustomerErrRpt/trader-error-report.html":
/***/ (function(module, exports) {

module.exports = "<h1>Please Select Your Issue Type: </h1>\n<ul class=\"heroes\">\n  <li *ngFor=\"let issue of issues\"><span><h3>\n    <input type=\"checkbox\" class=\"badge\" (click)=\"issue.selected = !issue.selected\">{{issue.desp}}</h3></span></li>\n</ul>\n<h1>Others(Please Specify):</h1>\n<textarea class=\"form-control\" rows=\"3\" placeholder=\"Please specify your issue...\"></textarea>\n<button type=\"button\" class=\"btn btn-primary btn-lg custom-btn pull-right\" (click)=\"onSubmit()\">Submit</button>\n<button type=\"button\" class=\"btn btn-default btn-lg custom-btn pull-right\" (click)=\"goBack()\">Cancel</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/CustomerErrRpt/trader-error-report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraderErrorReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TraderErrorReportComponent = (function () {
    function TraderErrorReportComponent(location, db, afAuth) {
        this.location = location;
        this.db = db;
        this.afAuth = afAuth;
        this.issues = [
            { desp: 'Wrong Price Quote', selected: false, category: 'price' },
            { desp: 'Wrong Booking Record', selected: false, category: 'booking' },
            { desp: 'Common Issue 3', selected: false, category: 'undefined' },
            { desp: 'Common Issue 4', selected: false, category: 'undefined' },
            { desp: 'Common Issue 5', selected: false, category: 'undefined' },
            { desp: 'Common Issue 6', selected: false, category: 'undefined' }
        ];
    }
    TraderErrorReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    TraderErrorReportComponent.prototype.onSubmit = function () {
        this.issues.forEach(function (issue) {
            if (issue['selected']) {
                __WEBPACK_IMPORTED_MODULE_4_firebase_app__["database"]().ref().child('issues').push({
                    'uid': __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid,
                    'description': issue['desp'],
                    'category': issue['category']
                });
            }
        });
        alert('Submitted Successfully');
        this.goBack();
    };
    TraderErrorReportComponent.prototype.change = function () {
        console.log('changed');
    };
    TraderErrorReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-tradereport',
            template: __webpack_require__("../../../../../src/app/CustomerErrRpt/trader-error-report.html"),
            styles: [__webpack_require__("../../../../../src/app/CustomerErrRpt/trader-error-report.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
    ], TraderErrorReportComponent);
    return TraderErrorReportComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=trader-error-report.js.map

/***/ }),

/***/ "../../../../../src/app/Dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 40px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-3 {\n  width: 33%;\n}\n.col-1-1 {\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  min-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 20px;\n}\n.add {\n  padding: 20px;\n  text-align: center;\n  color: #607D8B;\n  min-height: 60px;\n  min-width: 120px;\n  background-color: #EEEEEE;\n  border-radius: 20px;\n  border-color: #f0ad4e;\n  border-width: 4px;\n  border-style: solid;\n}\n.add:hover {\n  background-color: #f0ad4e;\n  cursor: pointer;\n  color: #EEEEEE;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\nlabel {\n  display: inline-block;\n  width: 3.5em;\n  margin: 0.5em 0 0 0.5em;\n  color: #607D8B;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n  width: 9em;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"grid grid-pad\">\n  <nav>\n    <a routerLink=\"/trader\" routerLinkActive=\"active\" class = \"col-1-3\">\n      <div class = \"module\">\n        <h3>Click to Report Error</h3>\n      </div>\n    </a>\n    <a class = \"col-1-3\" (click)=\"navigate()\">\n      <div class = \"module\" >\n        <h3>Click to run Error Prevention Algorithm</h3>\n      </div>\n    </a>\n    <a routerLink=\"/errdetection\" routerLinkActive=\"active\" class = \"col-1-3\">\n      <div class = \"module\">\n        <h3>Click to Run Error Detection Algorithm</h3>\n      </div>\n    </a>\n    <a routerLink=\"/tradebooking\" routerLinkActive=\"active\" class = \"col-1-3\">\n      <div class = \"module\">\n        <h3>Click to Check Trade Booking Details</h3>\n      </div>\n    </a>\n    <a  class = \"col-1-3\">\n      <div class = \"module\">\n        <h3>Click to Generate P&L</h3>\n      </div>\n    </a>\n    <a routerLink=\"/issuecatcher\" routerLinkActive=\"active\" class = \"col-1-3\">\n      <div class = \"module\">\n        <h3>View Issue Catcher Logs</h3>\n      </div>\n    </a>\n    <a  class = \"col-1-1\" (click)=\"popup.show()\">\n      <div class = \"add\">\n        <h1>Add a New Trading Record</h1>\n      </div>\n    </a>\n  </nav>\n  <app-popup #popup>\n    <div class=\"app-modal-header\">\n      Create New Trade\n    </div>\n    <div class=\"app-modal-body\">\n      <label>Time: </label>\n      <input [(ngModel)]=\"popup.tradeTime\" placeholder=\"YYYY-MM-DD HH:MM:SS\"/>\n      <label>Symbol: </label>\n      <input [(ngModel)]=\"popup.tradeSymbol\" placeholder=\"enter symbol\"/>\n      <label>Price: </label>\n      <input [(ngModel)]=\"popup.priceInt\" placeholder=\"enter price quote\"/>\n      <label>Amount: </label>\n      <input [(ngModel)]=\"popup.tradeAmt\" placeholder=\"enter amount\"/>\n    </div>\n    <div class=\"app-modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"popup.hide()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"popup.add()\">Add</button>\n    </div>\n  </app-popup>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(db, afAuth, router) {
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
    }
    DashboardComponent.prototype.navigate = function () {
        this.router.navigate(['./errprevention', this.afAuth.auth.currentUser.uid]);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/Dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/ErrDetect/error-detection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardview {\n  width: 100%;\n  border-radius: 20px;\n  background-color: lightcoral;\n  margin-bottom: 2%;\n  min-height: 150px;\n}\n\nh2 {\n  padding: 1rem 0 0 1em;\n  color:black;\n}\n\nh4 {\n  padding: 0 0 0 2rem;\n  color: black;\n}\nimg {\n  margin-top: 5%;\n}\n\nbutton {\n  margin-bottom: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ErrDetect/error-detection.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default btn-lg\" (click)=\"goBack()\">Back</button>\n<div *ngFor=\"let issue of issues | async\">\n  <div *ngIf=\"issue.category === 'price'\" class=\"cardview\">\n  <div class=\"col-md-8\">\n    <h2>Issue Description: {{issue.description}}</h2>\n    <div class=\"col-lg-6 col-md-8\">\n      <h4>Posted by: {{issue.uid}}</h4>\n    </div>\n    <div class=\"col-lg-6 col-md-4\">\n      <h4>Category: {{issue.category}}</h4>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <img src=\"https://storage.googleapis.com/centralmonitoringsystem-1a619.appspot.com/icn_rightarrow.png\" class=\"img-responsive pull-right\" (click)=\"navigate(issue.uid)\">\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ErrDetect/error-detection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDetectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorDetectionComponent = (function () {
    function ErrorDetectionComponent(location, db, afAuth, router) {
        this.location = location;
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.issues = db.list('/issues/');
    }
    ErrorDetectionComponent.prototype.ngOnInit = function () {
    };
    ErrorDetectionComponent.prototype.navigate = function (uid) {
        this.router.navigate(['./errprevention', uid]);
    };
    ErrorDetectionComponent.prototype.goBack = function () {
        this.location.back();
    };
    ErrorDetectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-errdetection',
            template: __webpack_require__("../../../../../src/app/ErrDetect/error-detection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ErrDetect/error-detection.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], ErrorDetectionComponent);
    return ErrorDetectionComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=error-detection.component.js.map

/***/ }),

/***/ "../../../../../src/app/ErrPrevention/error-prevention.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ErrPrevention/error-prevention.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\" class=\"btn btn-default\">Back</button>\n<div class=\"panel-body row\">\n  <div class=\"table-responsive col-md-7\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <th>Trade Ref</th>\n        <th>Time</th>\n        <th>Symbol</th>\n        <th>Quantity</th>\n        <th>Price Quote Int.</th>\n        <th>Price Quote Ext.</th>\n      </tr>\n      <tr *ngFor=\"let record of tradeRecords | async\">\n        <td>Trade Ref</td>\n        <td>{{record.time}}</td>\n        <td>{{record.symbol}}</td>\n        <td>{{record.amount}}</td>\n        <td>{{record.price_int}}</td>\n        <td id=\"{{record.symbol+record.time}}\">{{getQuote(record.symbol, record.time)}}</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"col-md-5\">\n    <table class=\"table\">\n      <tr>\n        <th>Time</th>\n        <th>Symbol</th>\n        <th>Int.</th>\n        <th>Ext.</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let quote of tradeRecords | async\">\n        <td *ngIf=\"quote.price_int !== quote.price_ext && !quote.hide\">{{quote.time}}</td>\n        <td *ngIf=\"quote.price_int !== quote.price_ext && !quote.hide\">{{quote.symbol}}</td>\n        <td *ngIf=\"quote.price_int !== quote.price_ext && !quote.hide\">{{quote.price_int}}</td>\n        <td *ngIf=\"quote.price_int !== quote.price_ext && !quote.hide\">{{quote.price_ext}}</td>\n        <td *ngIf=\"quote.price_int !== quote.price_ext && !quote.hide\">\n          <button class=\"btn btn-success\" (click)=\"correctQuote(quote.symbol, quote.time, quote.price_ext, quote.price_int, quote.amount)\">Correct</button>\n          <button class=\"btn btn-danger\" (click)=\"ignoreQuote(quote.symbol, quote.time, quote.price_ext, quote.price_int, quote.amount)\">Ignore</button></td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ErrPrevention/error-prevention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_stock_quote_service__ = __webpack_require__("../../../../../src/app/Services/stock-quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPreventionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ErrorPreventionComponent = (function () {
    function ErrorPreventionComponent(location, route, stockQuoteService, db, afAuth) {
        var _this = this;
        this.location = location;
        this.route = route;
        this.stockQuoteService = stockQuoteService;
        this.db = db;
        this.afAuth = afAuth;
        this.route.paramMap.switchMap(function (params) { return _this.uid = params.get('uid'); }).subscribe();
        this.tradeRecords = db.list('/traders/' + this.uid + '/records');
    }
    ErrorPreventionComponent.prototype.getQuote = function (symbol, time) {
        this.stockQuoteService.getQuote(symbol, time).then(function (val) {
            document.getElementById(symbol + time).innerHTML = val;
            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref().child('traders').child(this.uid).child('records').child(time + symbol)
                .update({
                price_ext: val
            });
        }).catch();
    };
    ErrorPreventionComponent.prototype.correctQuote = function (symbol, time, price_ext, price_int, amount) {
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref().child('issuerecords').push({
            time_transaction: time,
            symbol: symbol,
            amount: amount,
            price_int: price_int,
            price_ext: price_ext,
            action: 'Corrected',
            time_action: this.computeCurrentDateTime()
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref().child('traders').child(this.uid).child('records').child(time + symbol)
            .update({
            price_int: price_ext
        });
    };
    ErrorPreventionComponent.prototype.ignoreQuote = function (symbol, time, price_ext, price_int, amount) {
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref().child('issuerecords').push({
            time_transaction: time,
            symbol: symbol,
            amount: amount,
            price_int: price_int,
            price_ext: price_ext,
            action: 'Ignored',
            time_action: this.computeCurrentDateTime()
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref().child('traders').child(this.uid).child('records').child(time + symbol)
            .update({
            hide: true
        });
    };
    ErrorPreventionComponent.prototype.computeCurrentDateTime = function () {
        var dd = (new Date()).getDate().toString(10);
        if (parseInt(dd, 10) < 10) {
            dd = '0' + dd;
        }
        var mm = ((new Date()).getMonth() + 1).toString(10);
        if (parseInt(mm, 10) < 10) {
            mm = '0' + mm;
        }
        var yyyy = (new Date()).getFullYear();
        var hh = (new Date()).getHours().toString(10);
        if (parseInt(hh, 10) < 10) {
            hh = '0' + hh;
        }
        var min = (new Date()).getMinutes().toString(10);
        if (parseInt(min, 10) < 10) {
            min = '0' + min;
        }
        var ss = (new Date()).getSeconds().toString(10);
        if (parseInt(ss, 10) < 10) {
            ss = '0' + ss;
        }
        return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss;
    };
    ErrorPreventionComponent.prototype.goBack = function () {
        this.location.back();
    };
    ErrorPreventionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-errprevention',
            template: __webpack_require__("../../../../../src/app/ErrPrevention/error-prevention.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ErrPrevention/error-prevention.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__Services_stock_quote_service__["a" /* StockQuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__Services_stock_quote_service__["a" /* StockQuoteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _e || Object])
    ], ErrorPreventionComponent);
    return ErrorPreventionComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=error-prevention.component.js.map

/***/ }),

/***/ "../../../../../src/app/IssueCatcher/issue-catcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/IssueCatcher/issue-catcher.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\" class=\"btn btn-default\">Back</button>\n<div class=\"panel-body row\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <th>Time of Transaction</th>\n        <th>Symbol</th>\n        <th>Quantity</th>\n        <th>Price Quote Int.</th>\n        <th>Price Quote Ext.</th>\n        <th>Action</th>\n        <th>Time of Action</th>\n      </tr>\n      <tr *ngFor=\"let record of issueRecords | async\">\n        <td>{{record.time_transaction}}</td>\n        <td>{{record.symbol}}</td>\n        <td>{{record.amount}}</td>\n        <td>{{record.price_int}}</td>\n        <td>{{record.price_ext}}</td>\n        <td>{{record.action}}</td>\n        <td>{{record.time_action}}</td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/IssueCatcher/issue-catcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueCatcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueCatcherComponent = (function () {
    function IssueCatcherComponent(location, db, afAuth) {
        this.location = location;
        this.db = db;
        this.afAuth = afAuth;
        this.issueRecords = db.list('/issuerecords/');
    }
    IssueCatcherComponent.prototype.goBack = function () {
        this.location.back();
    };
    IssueCatcherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-issuecatcher',
            template: __webpack_require__("../../../../../src/app/IssueCatcher/issue-catcher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/IssueCatcher/issue-catcher.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
    ], IssueCatcherComponent);
    return IssueCatcherComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=issue-catcher.component.js.map

/***/ }),

/***/ "../../../../../src/app/Login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n  padding-bottom: 5%;\n}\n.group {\n  margin-top: 20%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"justify-content-center align-items-center group\">\n  <form (ngSubmit)=\"login()\">\n  <div class=\"form-group has-feedback\">\n    <div class=\"col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n  <label class=\"control-label\">Email: </label>\n    </div>\n    <div class=\"col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n  <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Please enter email address\" name=\"email\">\n    </div>\n  </div>\n  <div class=\"form-group has-feedback\">\n    <div class=\"col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n  <label class=\"control-label\">Password: </label>\n    </div>\n    <div class=\"col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n  <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Please enter password\" name=\"password\">\n    </div>\n  </div>\n    <div class=\"form-group col-sm-10 col-xs-10\">\n  <button type=\"submit\" class=\" btn btn-default col-md-6 col-md-offset-4 col-lg-6 col-lg-offset-4\">LogIn</button>\n    </div>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            console.log(user);
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (error) { console.log(error); });
    };
    LoginComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/Login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/Services/firebase-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FirebaseClientService = (function () {
    function FirebaseClientService() {
    }
    FirebaseClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], FirebaseClientService);
    return FirebaseClientService;
}());

//# sourceMappingURL=firebase-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/stock-quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockQuoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockQuoteService = (function () {
    function StockQuoteService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    StockQuoteService.prototype.getQuote = function (symbol, datetime) {
        return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=1min&outputsize=full&apikey=X484ZBZKOT7MYL4G').toPromise().then(function (response) { return response.json()['Time Series (1min)'][datetime]['1. open']; }).catch(this.handleError);
    };
    StockQuoteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    StockQuoteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], StockQuoteService);
    return StockQuoteService;
    var _a;
}());

//# sourceMappingURL=stock-quote.service.js.map

/***/ }),

/***/ "../../../../../src/app/TradeBookingDetails/trade-booking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardview {\n  width: 100%;\n  border-radius: 20px;\n  background-color: lightcoral;\n  margin-bottom: 2%;\n  min-height: 150px;\n}\n\nh2 {\n  padding: 1rem 0 0 1em;\n  color:black;\n}\n\nh4 {\n  padding: 0 0 0 2rem;\n  color: black;\n}\nimg {\n  margin-top: 5%;\n}\n\nbutton {\n  margin-bottom: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/TradeBookingDetails/trade-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default btn-lg\" (click)=\"goBack()\">Back</button>\n<div *ngFor=\"let issue of issues | async\">\n  <div *ngIf=\"issue.category === 'booking'\" class=\"cardview\">\n  <div class=\"col-md-8\">\n    <h2>Issue Description: {{issue.description}}</h2>\n    <div class=\"col-lg-6 col-md-8\">\n      <h4>Posted by: {{issue.uid}}</h4>\n    </div>\n    <div class=\"col-lg-6 col-md-4\">\n      <h4>Category: {{issue.category}}</h4>\n    </div></div>\n  <div class=\"col-md-4\">\n    <img src=\"../../assets/icn_rightarrow.png\" class=\"img-responsive pull-right\">\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/TradeBookingDetails/trade-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeBookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TradeBookingComponent = (function () {
    function TradeBookingComponent(location, db, afAuth, router) {
        this.location = location;
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.issues = db.list('/issues/');
    }
    TradeBookingComponent.prototype.goBack = function () {
        this.location.back();
    };
    TradeBookingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-errdetection',
            template: __webpack_require__("../../../../../src/app/TradeBookingDetails/trade-booking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/TradeBookingDetails/trade-booking.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], TradeBookingComponent);
    return TradeBookingComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=trade-booking.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/Dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrPrevention_error_prevention_component__ = __webpack_require__("../../../../../src/app/ErrPrevention/error-prevention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CustomerErrRpt_trader_error_report__ = __webpack_require__("../../../../../src/app/CustomerErrRpt/trader-error-report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ErrDetect_error_detection_component__ = __webpack_require__("../../../../../src/app/ErrDetect/error-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TradeBookingDetails_trade_booking_component__ = __webpack_require__("../../../../../src/app/TradeBookingDetails/trade-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__IssueCatcher_issue_catcher_component__ = __webpack_require__("../../../../../src/app/IssueCatcher/issue-catcher.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__Dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'errprevention/:uid', component: __WEBPACK_IMPORTED_MODULE_3__ErrPrevention_error_prevention_component__["a" /* ErrorPreventionComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__Login_login_component__["a" /* LoginComponent */] },
    { path: 'trader', component: __WEBPACK_IMPORTED_MODULE_5__CustomerErrRpt_trader_error_report__["a" /* TraderErrorReportComponent */] },
    { path: 'errdetection', component: __WEBPACK_IMPORTED_MODULE_6__ErrDetect_error_detection_component__["a" /* ErrorDetectionComponent */] },
    { path: 'tradebooking', component: __WEBPACK_IMPORTED_MODULE_7__TradeBookingDetails_trade_booking_component__["a" /* TradeBookingComponent */] },
    { path: 'issuecatcher', component: __WEBPACK_IMPORTED_MODULE_8__IssueCatcher_issue_catcher_component__["a" /* IssueCatcherComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/Dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ErrPrevention_error_prevention_component__ = __webpack_require__("../../../../../src/app/ErrPrevention/error-prevention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_stock_quote_service__ = __webpack_require__("../../../../../src/app/Services/stock-quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_firebase_client_service__ = __webpack_require__("../../../../../src/app/Services/firebase-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CreateTradeRecord_create_trade_record_component__ = __webpack_require__("../../../../../src/app/CreateTradeRecord/create-trade-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CustomerErrRpt_trader_error_report__ = __webpack_require__("../../../../../src/app/CustomerErrRpt/trader-error-report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ErrDetect_error_detection_component__ = __webpack_require__("../../../../../src/app/ErrDetect/error-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__TradeBookingDetails_trade_booking_component__ = __webpack_require__("../../../../../src/app/TradeBookingDetails/trade-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__IssueCatcher_issue_catcher_component__ = __webpack_require__("../../../../../src/app/IssueCatcher/issue-catcher.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ErrPrevention_error_prevention_component__["a" /* ErrorPreventionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__CreateTradeRecord_create_trade_record_component__["a" /* CreateTradeRecordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__CustomerErrRpt_trader_error_report__["a" /* TraderErrorReportComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ErrDetect_error_detection_component__["a" /* ErrorDetectionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__TradeBookingDetails_trade_booking_component__["a" /* TradeBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__IssueCatcher_issue_catcher_component__["a" /* IssueCatcherComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__Services_stock_quote_service__["a" /* StockQuoteService */], __WEBPACK_IMPORTED_MODULE_13__Services_firebase_client_service__["a" /* FirebaseClientService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyDBSr1JH-MLoinouS1iKnT-_MMC0g3RKYM',
        authDomain: 'centralmonitoringsystem-1a619.firebaseapp.com',
        databaseURL: 'https://centralmonitoringsystem-1a619.firebaseio.com',
        projectId: 'centralmonitoringsystem-1a619',
        storageBucket: 'centralmonitoringsystem-1a619.appspot.com',
        messagingSenderId: '955806803705'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map