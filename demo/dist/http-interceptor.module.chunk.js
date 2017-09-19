webpackJsonp(["http-interceptor.module"],{

/***/ "../../../../../demo/src/app/+http-interceptor/http-interceptor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_interceptor_component__ = __webpack_require__("../../../../../demo/src/app/+http-interceptor/http-interceptor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__http_interceptor_component__["a" /* HttpInterceptorComponent */]
    }];
var HttpInterceptorRoutingModule = (function () {
    function HttpInterceptorRoutingModule() {
    }
    return HttpInterceptorRoutingModule;
}());
HttpInterceptorRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
    })
], HttpInterceptorRoutingModule);

//# sourceMappingURL=http-interceptor-routing.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/+http-interceptor/http-interceptor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/+http-interceptor/http-interceptor.component.html":
/***/ (function(module, exports) {

module.exports = "<lte-box [solid]=\"true\" [collapsable]=\"false\" [removable]=\"false\">\n  <p>This is an component to test the Http interceptor of the structural directive \"ngLoading\".</p>\n  <p>You can disable this feature like this:</p>\n  <pre><code class=\"language-html\">&lt;div *mkLoadingPage=&quot;&#123;checkPendingHttp: true, checkPendingRoute: true&#125;&quot;&gt;\n  &lt;mk-material-bar colorOne=&quot;#dd4b39&quot; colorTwo=&quot;#00a65a&quot; colorThree=&quot;#f39c12&quot;&gt;&lt;/mk-material-bar&gt;\n&lt;/div&gt;</code></pre>\n</lte-box>\n\n<button class=\"btn btn-sm btn-success\" (click)=\"startRequest()\">Start http request</button><br/><br/>\n\n<lte-box *ngIf=\"response\" lteTitle=\"Http Response\" [collapsable]=\"false\" [removable]=\"false\">\n  <pre style=\"max-height: 300px; overflow: scroll;\">{{response}}</pre>\n</lte-box>\n"

/***/ }),

/***/ "../../../../../demo/src/app/+http-interceptor/http-interceptor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpInterceptorComponent = (function () {
    function HttpInterceptorComponent(http) {
        this.http = http;
    }
    /**
     * @method ngAfterViewInit
     */
    HttpInterceptorComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    /**
     * [startRequest description]
     * @method startRequest
     */
    HttpInterceptorComponent.prototype.startRequest = function () {
        var _this = this;
        this.get().subscribe(function (response) {
            _this.response = response;
            Prism.highlightAll();
        });
    };
    /**
     * [get description]
     * @method get
     * @return {Observable<any>} [description]
     */
    HttpInterceptorComponent.prototype.get = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(this.handleResponse);
    };
    /**
     * [handleResponse description]
     * @method handleResponse
     * @param  {Response}     response [description]
     * @return {Response}              [description]
     */
    HttpInterceptorComponent.prototype.handleResponse = function (response) {
        return response.text();
    };
    /**
     * [handleError description]
     * @method handleError
     * @param  {[type]}    error [description]
     */
    HttpInterceptorComponent.prototype.handleError = function (error) {
        console.log('Error', error);
    };
    return HttpInterceptorComponent;
}());
HttpInterceptorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-http-interceptor',
        template: __webpack_require__("../../../../../demo/src/app/+http-interceptor/http-interceptor.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/+http-interceptor/http-interceptor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpInterceptorComponent);

var _a;
//# sourceMappingURL=http-interceptor.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/+http-interceptor/http-interceptor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorModule", function() { return HttpInterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_interceptor_routing_module__ = __webpack_require__("../../../../../demo/src/app/+http-interceptor/http-interceptor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_interceptor_component__ = __webpack_require__("../../../../../demo/src/app/+http-interceptor/http-interceptor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_admin_lte__ = __webpack_require__("../../../../../demo/src/app/ng-admin-lte/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HttpInterceptorModule = (function () {
    function HttpInterceptorModule() {
    }
    return HttpInterceptorModule;
}());
HttpInterceptorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__http_interceptor_routing_module__["a" /* HttpInterceptorRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_admin_lte__["a" /* BoxModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__http_interceptor_component__["a" /* HttpInterceptorComponent */]]
    })
], HttpInterceptorModule);

//# sourceMappingURL=http-interceptor.module.js.map

/***/ })

});
//# sourceMappingURL=http-interceptor.module.chunk.js.map