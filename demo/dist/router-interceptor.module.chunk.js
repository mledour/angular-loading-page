webpackJsonp(["router-interceptor.module"],{

/***/ "../../../../../demo/src/app/+router-interceptor/router-interceptor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterInterceptorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_interceptor_component__ = __webpack_require__("../../../../../demo/src/app/+router-interceptor/router-interceptor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__router_interceptor_component__["a" /* RouterInterceptorComponent */]
    }];
var RouterInterceptorRoutingModule = (function () {
    function RouterInterceptorRoutingModule() {
    }
    return RouterInterceptorRoutingModule;
}());
RouterInterceptorRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
    })
], RouterInterceptorRoutingModule);

//# sourceMappingURL=router-interceptor-routing.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/+router-interceptor/router-interceptor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/+router-interceptor/router-interceptor.component.html":
/***/ (function(module, exports) {

module.exports = "<lte-box [solid]=\"true\" [collapsable]=\"false\" [removable]=\"false\">\n  <p>\n    This is an component loaded asychronously to test the loader router interceptor of the structural directive \"ngLoading\".<br/>\n  </p>\n  <p>\n    You can disable this feature like this:\n  </p>\n\n  <pre><code class=\"language-html\">&lt;div *mkLoadingPage=&quot;&#123;checkPendingHttp: true, checkPendingRoute: true&#125;&quot;&gt;\n  &lt;mk-material-bar colorOne=&quot;#dd4b39&quot; colorTwo=&quot;#00a65a&quot; colorThree=&quot;#f39c12&quot;&gt;&lt;/mk-material-bar&gt;\n&lt;/div&gt;</code></pre>\n</lte-box>\n"

/***/ }),

/***/ "../../../../../demo/src/app/+router-interceptor/router-interceptor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterInterceptorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RouterInterceptorComponent = (function () {
    function RouterInterceptorComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    RouterInterceptorComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    return RouterInterceptorComponent;
}());
RouterInterceptorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../demo/src/app/+router-interceptor/router-interceptor.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/+router-interceptor/router-interceptor.component.css")]
    })
], RouterInterceptorComponent);

//# sourceMappingURL=router-interceptor.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/+router-interceptor/router-interceptor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterInterceptorModule", function() { return RouterInterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_interceptor_routing_module__ = __webpack_require__("../../../../../demo/src/app/+router-interceptor/router-interceptor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_interceptor_component__ = __webpack_require__("../../../../../demo/src/app/+router-interceptor/router-interceptor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_admin_lte__ = __webpack_require__("../../../../../demo/src/app/ng-admin-lte/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RouterInterceptorModule = (function () {
    function RouterInterceptorModule() {
    }
    return RouterInterceptorModule;
}());
RouterInterceptorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__router_interceptor_routing_module__["a" /* RouterInterceptorRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_admin_lte__["a" /* BoxModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__router_interceptor_component__["a" /* RouterInterceptorComponent */]]
    })
], RouterInterceptorModule);

//# sourceMappingURL=router-interceptor.module.js.map

/***/ })

});
//# sourceMappingURL=router-interceptor.module.chunk.js.map