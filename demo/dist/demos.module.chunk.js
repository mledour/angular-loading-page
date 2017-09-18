webpackJsonp(["demos.module"],{

/***/ "../../../../../demo/src/app/+demos/demos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demos_component__ = __webpack_require__("../../../../../demo/src/app/+demos/demos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__demos_component__["a" /* DemosComponent */]
    }];
var DemosRoutingModule = (function () {
    function DemosRoutingModule() {
    }
    return DemosRoutingModule;
}());
DemosRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
    })
], DemosRoutingModule);

//# sourceMappingURL=demos-routing.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/+demos/demos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/+demos/demos.component.html":
/***/ (function(module, exports) {

module.exports = "<lte-box lteTitle=\"Loaders\" [collapsable]=\"false\" [removable]=\"false\" contentClasses=\"no-padding\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>HTML Tag</th>\n        <th>Module Name</th>\n        <th>Options</th>\n        <th>Loader</th>\n      </tr>\n    <tbody>\n      <tr>\n        <td>chasing-dots</td>\n        <td>ChasingDotsModule</td>\n        <td>colorOne, colorTwo</td>\n        <td>\n          <a (click)=\"toggleLoader('chasingDots')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.chasingDots, 'label-danger': loaderState.chasingDots}\">{{loaderState.chasingDots ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>circle</td>\n        <td>CircleModule</td>\n        <td>color</td>\n        <td>\n          <a (click)=\"toggleLoader('circle')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.circle, 'label-danger': loaderState.circle}\">{{loaderState.circle ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>cube-grid</td>\n        <td>CubeGridModule</td>\n        <td>color</td>\n        <td>\n          <a (click)=\"toggleLoader('cubeGrid')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.cubeGrid, 'label-danger': loaderState.cubeGrid}\">{{loaderState.cubeGrid ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>double-bounce</td>\n        <td>DoubleBounceModule</td>\n        <td>colorOne, colorTwo</td>\n        <td>\n          <a (click)=\"toggleLoader('doubleBounce')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.doubleBounce, 'label-danger': loaderState.doubleBounce}\">{{loaderState.doubleBounce ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>fading-circle</td>\n        <td>FadingCircleModule</td>\n        <td>color</td>\n        <td>\n          <a (click)=\"toggleLoader('fadingCircle')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.fadingCircle, 'label-danger': loaderState.fadingCircle}\">{{loaderState.fadingCircle ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>folding-cube</td>\n        <td>FoldingCubeModule</td>\n        <td>color</td>\n        <td>\n          <a (click)=\"toggleLoader('foldingCube')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.foldingCube, 'label-danger': loaderState.foldingCube}\">{{loaderState.foldingCube ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>material-bar</td>\n        <td>MaterialBarModule</td>\n        <td>colorOne, colorTwo, colorThree</td>\n        <td>\n          <a (click)=\"toggleLoader('materialBar')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.materialBar, 'label-danger': loaderState.materialBar}\">{{loaderState.materialBar ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>pulse</td>\n        <td>PulseModule</td>\n        <td>color</td>\n        <td>\n          <a (click)=\"toggleLoader('pulse')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.pulse, 'label-danger': loaderState.pulse}\">{{loaderState.pulse ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>sliding-bar</td>\n        <td>SlidingBarModule</td>\n        <td>colorOne, colorTwo</td>\n        <td>\n          <a (click)=\"toggleLoader('slidingBar')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.slidingBar, 'label-danger': loaderState.slidingBar}\">{{loaderState.slidingBar ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>three-bounce</td>\n        <td>ThreeBounceModule</td>\n        <td>colorOne, colorTwo, colorThree</td>\n        <td>\n          <a (click)=\"toggleLoader('threeBounce')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.threeBounce, 'label-danger': loaderState.threeBounce}\">{{loaderState.threeBounce ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>wandering-cubes</td>\n        <td>WanderingCubesModule</td>\n        <td>colorOne, colorTwo</td>\n        <td>\n          <a (click)=\"toggleLoader('wanderingCubes')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.wanderingCubes, 'label-danger': loaderState.wanderingCubes}\">{{loaderState.wanderingCubes ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n      <tr>\n        <td>wave</td>\n        <td>WaveModule</td>\n        <td>color</td>\n        <td>\n          <a (click)=\"toggleLoader('wave')\" class=\"label\" [ngClass]=\"{'label-success': !loaderState.wave, 'label-danger': loaderState.wave}\">{{loaderState.wave ? 'Stop' : 'Play'}}</a>\n        <td>\n      </tr>\n    </tbody>\n  </table>\n</lte-box>\n\n<lte-box lteTitle=\"Chasing Dots\" *ngIf=\"loaderState.chasingDots\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-chasing-dots></mk-chasing-dots>\n</lte-box>\n\n<lte-box lteTitle=\"Circle\" *ngIf=\"loaderState.circle\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-circle></mk-circle>\n</lte-box>\n\n<lte-box lteTitle=\"Cube Grid\" *ngIf=\"loaderState.cubeGrid\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-cube-grid></mk-cube-grid>\n</lte-box>\n\n<lte-box lteTitle=\"Double Bounce\" *ngIf=\"loaderState.doubleBounce\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-double-bounce></mk-double-bounce>\n</lte-box>\n\n<lte-box lteTitle=\"Fading Circle\" *ngIf=\"loaderState.fadingCircle\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-fading-circle></mk-fading-circle>\n</lte-box>\n\n<lte-box lteTitle=\"Folding Cube\" *ngIf=\"loaderState.foldingCube\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-folding-cube></mk-folding-cube>\n</lte-box>\n\n<lte-box lteTitle=\"Material Bar\" *ngIf=\"loaderState.materialBar\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-material-bar></mk-material-bar>\n</lte-box>\n\n<lte-box lteTitle=\"Pulse\" *ngIf=\"loaderState.pulse\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-pulse></mk-pulse>\n</lte-box>\n\n<lte-box lteTitle=\"Sliding Bar\" *ngIf=\"loaderState.slidingBar\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-sliding-bar></mk-sliding-bar>\n</lte-box>\n\n<lte-box lteTitle=\"Three Bounce\" *ngIf=\"loaderState.threeBounce\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-three-bounce></mk-three-bounce>\n</lte-box>\n\n<lte-box lteTitle=\"Wandering Cubes\" *ngIf=\"loaderState.wanderingCubes\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-wandering-cubes></mk-wandering-cubes>\n</lte-box>\n\n<lte-box lteTitle=\"Wave\" *ngIf=\"loaderState.wave\" [collapsable]=\"false\" [removable]=\"false\">\n  <mk-wave></mk-wave>\n</lte-box>\n"

/***/ }),

/***/ "../../../../../demo/src/app/+demos/demos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemosComponent = (function () {
    function DemosComponent() {
        this.loaderState = {};
    }
    /**
     * [toggleLoader description]
     * @method toggleLoader
     * @param  {string}     name [description]
     */
    DemosComponent.prototype.toggleLoader = function (name) {
        this.showLoaderBox = !this.showLoaderBox;
        this.loaderState[name] = !this.loaderState[name];
    };
    return DemosComponent;
}());
DemosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-demos',
        template: __webpack_require__("../../../../../demo/src/app/+demos/demos.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/+demos/demos.component.css")]
    })
], DemosComponent);

//# sourceMappingURL=demos.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/+demos/demos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosModule", function() { return DemosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demos_routing_module__ = __webpack_require__("../../../../../demo/src/app/+demos/demos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demos_component__ = __webpack_require__("../../../../../demo/src/app/+demos/demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_admin_lte__ = __webpack_require__("../../../../../demo/src/app/ng-admin-lte/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemosModule = (function () {
    function DemosModule() {
    }
    return DemosModule;
}());
DemosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__demos_routing_module__["a" /* DemosRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_admin_lte__["a" /* BoxModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["a" /* ChasingDotsModule */], __WEBPACK_IMPORTED_MODULE_5__src__["b" /* CircleModule */], __WEBPACK_IMPORTED_MODULE_5__src__["c" /* CubeGridModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["d" /* DoubleBounceModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["e" /* FadingCircleModule */], __WEBPACK_IMPORTED_MODULE_5__src__["f" /* FoldingCubeModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["h" /* MaterialbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["i" /* PulseModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["j" /* SlidingBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["k" /* ThreeBounceModule */],
            __WEBPACK_IMPORTED_MODULE_5__src__["l" /* WanderingCubesModule */], __WEBPACK_IMPORTED_MODULE_5__src__["m" /* WaveModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__demos_component__["a" /* DemosComponent */]]
    })
], DemosModule);

//# sourceMappingURL=demos.module.js.map

/***/ })

});
//# sourceMappingURL=demos.module.chunk.js.map