webpackJsonp(["main"],{

/***/ "../../../../../demo/src lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/+demos/demos.module": [
		"../../../../../demo/src/app/+demos/demos.module.ts",
		"demos.module"
	],
	"app/+http-interceptor/http-interceptor.module": [
		"../../../../../demo/src/app/+http-interceptor/http-interceptor.module.ts",
		"http-interceptor.module"
	],
	"app/+router-interceptor/router-interceptor.module": [
		"../../../../../demo/src/app/+router-interceptor/router-interceptor.module.ts",
		"router-interceptor.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../demo/src lazy recursive";

/***/ }),

/***/ "../../../../../demo/src/app/admin-lte.conf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminLteConf; });
var adminLteConf = {
    isLeftSidebarCollapsed: true,
    skin: 'blue',
    sidebarLeftMenu: [
        { label: 'MAIN NAVIGATION', separator: true },
        { label: 'Get started', route: '/', iconClasses: 'fa fa-home' },
        { label: 'Http interceptor', route: '/http-interceptor', iconClasses: 'fa fa-refresh' },
        { label: 'Router interceptor', route: '/router-interceptor', iconClasses: 'fa fa-road' },
        { label: 'Loaders demos', route: '/demos', iconClasses: 'fa fa-wpforms' }
    ]
};
//# sourceMappingURL=admin-lte.conf.js.map

/***/ }),

/***/ "../../../../../demo/src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../demo/src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        data: {
            title: 'Get Started',
            icon: 'fa fa-home',
            breadcrumb: ' ',
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
            }, {
                path: 'router-interceptor',
                loadChildren: 'app/+router-interceptor/router-interceptor.module#RouterInterceptorModule',
                data: {
                    title: 'Router Interceptor',
                    breadcrumb: 'router interceptor',
                    icon: ''
                }
            }, {
                path: 'http-interceptor',
                loadChildren: 'app/+http-interceptor/http-interceptor.module#HttpInterceptorModule',
                data: {
                    title: 'Http Interceptor',
                    breadcrumb: 'http interceptor',
                    icon: ''
                }
            }, {
                path: 'demos',
                loadChildren: 'app/+demos/demos.module#DemosModule',
                data: {
                    title: 'Loaders Demos',
                    description: 'Demos Using loaders',
                    breadcrumb: 'loaders demos',
                    icon: ''
                }
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lte-content-before-header {\n  position: absolute;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<lte-wrapper>\n  <lte-header>\n    <lte-header-logo><b>Angular</b> Loading Page</lte-header-logo>\n    <lte-header-logo-mini><b>A</b>LP</lte-header-logo-mini>\n  </lte-header>\n  <lte-sidebar-left>\n    <app-sidebar-left-inner></app-sidebar-left-inner>\n  </lte-sidebar-left>\n  <lte-content>\n    <div *mkLoadingPage class=\"lte-content-before-header\" lte-content-before-header>\n      <mk-material-bar colorOne=\"#dd4b39\" colorTwo=\"#00a65a\" colorThree=\"#f39c12\"></mk-material-bar>\n    </div>\n    <router-outlet></router-outlet>\n  </lte-content>\n  <lte-footer>\n    <lte-footer-left>\n      <strong>Demo powered by <a href=\"http://almsaeedstudio.com\">AdminLte</a>.</strong>\n    </lte-footer-left>\n    <lte-footer-right>\n      <b>Version</b> 0.1.0\n    </lte-footer-right>\n  </lte-footer>\n</lte-wrapper>\n"

/***/ }),

/***/ "../../../../../demo/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../demo/src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../demo/src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../demo/src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_admin_lte__ = __webpack_require__("../../../../../demo/src/app/ng-admin-lte/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_lte_conf__ = __webpack_require__("../../../../../demo/src/app/admin-lte.conf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../demo/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../demo/src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_admin_lte__["a" /* BoxModule */],
            __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__src__["g" /* LoadingPageModule */], __WEBPACK_IMPORTED_MODULE_2__src__["a" /* ChasingDotsModule */], __WEBPACK_IMPORTED_MODULE_2__src__["b" /* CircleModule */], __WEBPACK_IMPORTED_MODULE_2__src__["c" /* CubeGridModule */], __WEBPACK_IMPORTED_MODULE_2__src__["d" /* DoubleBounceModule */], __WEBPACK_IMPORTED_MODULE_2__src__["e" /* FadingCircleModule */], __WEBPACK_IMPORTED_MODULE_2__src__["f" /* FoldingCubeModule */], __WEBPACK_IMPORTED_MODULE_2__src__["h" /* MaterialbarModule */], __WEBPACK_IMPORTED_MODULE_2__src__["i" /* PulseModule */], __WEBPACK_IMPORTED_MODULE_2__src__["j" /* SlidingBarModule */], __WEBPACK_IMPORTED_MODULE_2__src__["k" /* ThreeBounceModule */], __WEBPACK_IMPORTED_MODULE_2__src__["l" /* WanderingCubesModule */], __WEBPACK_IMPORTED_MODULE_2__src__["m" /* WaveModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_admin_lte__["b" /* LayoutModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__admin_lte_conf__["a" /* adminLteConf */]),
            __WEBPACK_IMPORTED_MODULE_2__src__["h" /* MaterialbarModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_left_inner_sidebar_left_inner_component__ = __webpack_require__("../../../../../demo/src/app/core/sidebar-left-inner/sidebar-left-inner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_left_inner_sidebar_left_inner_component__["a" /* SidebarLeftInnerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__sidebar_left_inner_sidebar_left_inner_component__["a" /* SidebarLeftInnerComponent */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/core/sidebar-left-inner/sidebar-left-inner.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../demo/src/app/core/sidebar-left-inner/sidebar-left-inner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLeftInnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarLeftInnerComponent = (function () {
    function SidebarLeftInnerComponent() {
    }
    return SidebarLeftInnerComponent;
}());
SidebarLeftInnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar-left-inner',
        template: __webpack_require__("../../../../../demo/src/app/core/sidebar-left-inner/sidebar-left-inner.component.html")
    })
], SidebarLeftInnerComponent);

//# sourceMappingURL=sidebar-left-inner.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<lte-box lteTitle=\"Download\" [collapsable]=\"false\" [removable]=\"false\">\n  <p>NgLoadingPage is available at npm, if you have an existing application run the following command to download it to your project.</p>\n  <pre><code class=\"language-bash\">npm install angular-loading-page --save</code></pre>\n</lte-box>\n\n<lte-box lteTitle=\"Load Configuration\" [collapsable]=\"false\" [removable]=\"false\">\n  <p>Angular Loading Page is distributed in commonjs format, a module manager of your choice is required and this guide provides samples for SystemJS, WebPack and Angular CLI.</p>\n</lte-box>\n\n<lte-box lteTitle=\"Import\" [collapsable]=\"false\" [removable]=\"false\">\n  <p>UI components are configured as modules, once Angular Loading Page is downloaded and configured, modules and apis can be imported from 'angular-loading-page' shorthand in your application code.</p>\n  <pre><code class=\"language-typescript\">import &#123; LoadingPageModule &#125; from 'angular-loading-page';         //Loading directive\nimport &#123; MaterialBarModule &#125; from 'angular-loading-page';         //Loading animation component</code></pre>\n</lte-box>\n\n<lte-box lteTitle=\"Usage\" [collapsable]=\"false\" [removable]=\"false\">\n  <pre><code class=\"language-html\">&lt;div *mkLoadingPage [checkPendingRoute]=\"true\" [checkPendingHttp]=\"true\"&gt;\n  &lt;mk-material-bar colorOne=&quot;#dd4b39&quot; colorTwo=&quot;#00a65a&quot; colorThree=&quot;#f39c12&quot;&gt;&lt;/mk-material-bar&gt;\n&lt;/div&gt;</code></pre>\n</lte-box>\n"

/***/ }),

/***/ "../../../../../demo/src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    HomeComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../demo/src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/ng-admin-lte/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutModule; });
/* unused harmony export RoutingService */
/* unused harmony export AccordionModule */
/* unused harmony export AlertModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxModule; });
/* unused harmony export BreadcrumbsModule */
/* unused harmony export CalloutModule */
/* unused harmony export DropdownModule */
/* unused harmony export ProgressBarModule */
/* unused harmony export TabsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");







var RoutingService = (function () {
    /**
     * \@method constructor
     * @param {?} router
     */
    function RoutingService(router) {
        this.router = router;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](undefined);
        this.init();
    }
    /**
     * [init description]
     * \@method init
     * @return {?}
     */
    RoutingService.prototype.init = function () {
        var _this = this;
        this.router.events.subscribe(function (routeEvent) {
            if (routeEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                var /** @type {?} */ route = _this.router.routerState.root.snapshot, /** @type {?} */ url = '', /** @type {?} */ paths = [], /** @type {?} */ rootRoot = true;
                while (route.children.length) {
                    route = route.firstChild;
                    if (route.outlet !== __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* PRIMARY_OUTLET */] || (!route.routeConfig.path && !rootRoot)) {
                        continue;
                    }
                    rootRoot = false;
                    if (route.params || route.data) {
                        for (var /** @type {?} */ key in route.params) {
                            if (route.data['title']) {
                                route.data['title'] = route.data['title'].replace(":" + key, route.params[key]);
                            }
                            if (route.data['breadcrumb']) {
                                route.data['breadcrumb'] = route.data['breadcrumb'].replace(":" + key, route.params[key]);
                            }
                            if (route.data['description']) {
                                route.data['description'] = route.data['description'].replace(":" + key, route.params[key]);
                            }
                        }
                    }
                    url += "/" + _this.createUrl(route);
                    paths.push(_this.createBreadcrumb(route, url));
                }
                _this.onChange.next(paths);
            }
        });
    };
    /**
     * [createBreadcrumb description]
     * \@method createBreadcrumb
     * @param {?} route
     * @param {?} url
     * @return {?}
     */
    RoutingService.prototype.createBreadcrumb = function (route, url) {
        return {
            data: route.data,
            params: route.params,
            url: route.children.length !== 0 && route.firstChild.routeConfig.path ? url : ''
        };
    };
    /**
     * [createUrl description]
     * \@method createUrl
     * @param {?} route
     * @return {?}
     */
    RoutingService.prototype.createUrl = function (route) {
        return route.url.map(function (urlSegment) { return urlSegment.toString(); }).join('/');
    };
    return RoutingService;
}());
RoutingService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
RoutingService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], },
]; };

var BreadcrumbsComponent = (function () {
    /**
     * \@method constructor
     * @param {?} routingService
     */
    function BreadcrumbsComponent(routingService) {
        this.routingService = routingService;
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routingService.onChange.subscribe(function (value) {
            _this.breadcrumbs = value;
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-breadcrumbs',
                template: "<ol class=\"breadcrumb\"> <li *ngFor=\"let breadcrumb of breadcrumbs; let l = last\" [class.active]=\"l\"> <a *ngIf=\"breadcrumb.url\" [routerLink]=\"breadcrumb.url\"> <i *ngIf=\"breadcrumb.data.icon\" ngClass=\"{{breadcrumb.data.icon}}\"></i> <ng-template [ngIf]=\"breadcrumb.data.breadcrumb\">{{breadcrumb.data.breadcrumb}}</ng-template> <ng-template [ngIf]=\"!breadcrumb.data.breadcrumb\">{{breadcrumb.data.title}}</ng-template> </a> <ng-template [ngIf]=\"!breadcrumb.url\"> <i *ngIf=\"breadcrumb.data.icon\" ngClass=\"{{breadcrumb.data.icon}}\"></i> <ng-template [ngIf]=\"breadcrumb.data.breadcrumb\">{{breadcrumb.data.breadcrumb}}</ng-template> <ng-template [ngIf]=\"!breadcrumb.data.breadcrumb\">{{breadcrumb.data.title}}</ng-template> </ng-template> </li> </ol> ",
                styles: [".breadcrumb { float: right; background: transparent; margin-top: 0; margin-bottom: 0; font-size: 12px; padding: 7px 5px; position: absolute; top: 15px; right: 10px; border-radius: 2px; } .breadcrumb > li > a { color: #444; text-decoration: none; display: inline-block; } .breadcrumb > li > a > .fa, .breadcrumb > li > a > .glyphicon, .breadcrumb > li > a > .ion { margin-right: 5px; } "]
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbsComponent.ctorParameters = function () { return [
    { type: RoutingService, },
]; };

var BreadcrumbsModule = (function () {
    function BreadcrumbsModule() {
    }
    return BreadcrumbsModule;
}());
BreadcrumbsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
                exports: [BreadcrumbsComponent],
                declarations: [BreadcrumbsComponent]
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbsModule.ctorParameters = function () { return []; };

var LayoutStore = (function () {
    /**
     * \@method constructor
     * @param {?} layoutConfig
     */
    function LayoutStore(layoutConfig) {
        this.initialLayoutState = {
            isSidebarLeftCollapsed: false,
            isSidebarLeftExpandOnOver: false,
            isSidebarLeftMouseOver: false,
            isSidebarLeftMini: true,
            sidebarRightSkin: 'dark',
            isSidebarRightCollapsed: true,
            isSidebarRightOverContent: true,
            layout: 'normal',
            sidebarLeftMenu: [],
            skin: 'blue',
        };
        if (layoutConfig) {
            this.initialLayoutState = Object.assign(this.initialLayoutState, layoutConfig);
        }
        this._layoutState = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](this.initialLayoutState);
    }
    Object.defineProperty(LayoutStore.prototype, "uiState", {
        /**
         * [uiState description]
         * @return {?}
         */
        get: function () {
            return this._layoutState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "windowInnerHeight", {
        /**
         * [windowHeight description]
         * \@method windowHeight
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('windowInnerHeight').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftCollapsed", {
        /**
         * [isSidebarLeftCollapsed description]
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('isSidebarLeftCollapsed').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftExpandOnOver", {
        /**
         * [isSidebarLeftExpandOnOver description]
         * \@method isSidebarLeftExpandOnOver
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('isSidebarLeftExpandOnOver').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMouseOver", {
        /**
         * [isSidebarLeftMouseOver description]
         * \@method isSidebarLeftMouseOver
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('isSidebarLeftMouseOver').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMini", {
        /**
         * [isSidebarLeftMini description]
         * \@method isSidebarLeftMini
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('isSidebarLeftMini').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarRightSkin", {
        /**
         * [sidebarRightSkin description]
         * \@method sidebarRightSkin
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('sidebarRightSkin').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarRightCollapsed", {
        /**
         * [isSidebarRightCollapsed description]
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('isSidebarRightCollapsed').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarRightOverContent", {
        /**
         * [isSidebarRightOverContent description]
         * \@method isSidebarRightOverContent
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('isSidebarRightOverContent').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenu", {
        /**
         * [sidebarLeftMenu description]
         * \@method sidebarLeftMenu
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('sidebarLeftMenu').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftElementHeight", {
        /**
         * [sidebarLeftElementHeight description]
         * \@method sidebarLeftElementHeight
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('sidebarLeftElementHeight').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarRightElementHeight", {
        /**
         * [sidebarRightElementHeight description]
         * \@method sidebarRightElementHeight
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('sidebarRightElementHeight').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "layout", {
        /**
         * [layoutType description]
         * \@method layoutType
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('layout').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "skin", {
        /**
         * [skin description]
         * \@method skin
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('skin').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "wrapperClasses", {
        /**
         * [wrapperClasses description]
         * \@method wrapperClasses
         * @return {?}
         */
        get: function () {
            return this._layoutState.pluck('wrapperClasses').distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [toogleSidebarLeft description]
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.sidebarLeftCollapsed = function (value) {
        value = value ? value : !this._layoutState.value.isSidebarLeftCollapsed;
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftCollapsed: value }));
    };
    /**
     * [sidebarLeftExpandOnOver description]
     * \@method sidebarLeftExpandOnOver
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.sidebarLeftExpandOnOver = function (value) {
        value = value ? value : !this._layoutState.value.isSidebarLeftExpandOnOver;
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftExpandOnOver: value }));
    };
    /**
     * [setSidebarLeftElementHeight description]
     * \@method setSidebarLeftElementHeight
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setSidebarLeftElementHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftElementHeight: value }));
    };
    /**
     * [setSidebarRightSkin description]
     * \@method setSidebarRightSkin
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.setSidebarRightSkin = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarRightSkin: value }));
    };
    /**
     * [sidebarLeftMouseOver description]
     * \@method sidebarLeftMouseOver
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.sidebarLeftMouseOver = function (value) {
        value = value ? value : !this._layoutState.value.isSidebarLeftMouseOver;
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftMouseOver: value }));
    };
    /**
     * [sidebarLeftMini description]
     * \@method sidebarLeftMini
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.sidebarLeftMini = function (value) {
        value = value ? value : !this._layoutState.value.isSidebarLeftMini;
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftMini: value }));
    };
    /**
     * [sidebarRightCollapsed description]
     * \@method sidebarRightCollapsed
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.sidebarRightCollapsed = function (value) {
        value = value ? value : !this._layoutState.value.isSidebarRightCollapsed;
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarRightCollapsed: value }));
    };
    /**
     * [sidebarRightOverContent description]
     * \@method sidebarRightOverContent
     * @param {?=} value
     * @return {?}
     */
    LayoutStore.prototype.sidebarRightOverContent = function (value) {
        value = value ? value : !this._layoutState.value.isSidebarRightOverContent;
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarRightOverContent: value }));
    };
    /**
     * [setSidebarRightElementHeight description]
     * \@method setSidebarRightElementHeight
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setSidebarRightElementHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarRightElementHeight: value }));
    };
    /**
     * [setSidebarLeftMenu description]
     * \@method setSidebarLeftMenu
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setSidebarLeftMenu = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sSidebarLeftMenu: value }));
    };
    /**
     * [setLayout description]
     * \@method setLayout
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setLayout = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { layout: value }));
    };
    /**
     * [setSkin description]
     * \@method setSkin
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setSkin = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { skin: value }));
    };
    /**
     * [setWrapperClasses description]
     * \@method setWrapperClasses
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setWrapperClasses = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { wrapperClasses: value }));
    };
    /**
     * [setWindowInnerHeight description]
     * \@method setWindowInnerHeight
     * @param {?} value
     * @return {?}
     */
    LayoutStore.prototype.setWindowInnerHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { windowInnerHeight: value }));
    };
    return LayoutStore;
}());

var LayoutService = (function () {
    /**
     * @param {?} layoutStore
     */
    function LayoutService(layoutStore) {
        this.layoutStore = layoutStore;
        this.init();
    }
    /**
     * [init description]
     * \@method init
     * @return {?}
     */
    LayoutService.prototype.init = function () {
        var _this = this;
        var /** @type {?} */ windowTimeout;
        this.layoutStore.wrapperClasses.subscribe(function (value) {
            _this.wrapperClasses = value ? value : '';
        });
        window.onresize = function () {
            clearTimeout(windowTimeout);
            windowTimeout = setTimeout(function () {
                _this.layoutStore.setWindowInnerHeight(window.innerHeight);
            }, 250);
        };
    };
    /**
     * [removeBodyClass description]
     * \@method removeBodyClass
     * @param {?} className
     * @return {?}
     */
    LayoutService.prototype.removeWrapperClass = function (className) {
        this.layoutStore.setWrapperClasses(this.wrapperClasses.replace("" + className, ''));
    };
    /**
     * [addBodyClass description]
     * \@method addBodyClass
     * @param {?} className
     * @return {?}
     */
    LayoutService.prototype.addWrapperClass = function (className) {
        this.layoutStore.setWrapperClasses(" " + this.wrapperClasses + " " + className);
    };
    return LayoutService;
}());
LayoutService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
LayoutService.ctorParameters = function () { return [
    { type: LayoutStore, },
]; };

var ContentComponent = (function () {
    /**
     * @param {?} layoutStore
     * @param {?} layoutService
     * @param {?} routingService
     * @param {?} titleService
     */
    function ContentComponent(layoutStore, layoutService, routingService, titleService) {
        this.layoutStore = layoutStore;
        this.layoutService = layoutService;
        this.routingService = routingService;
        this.titleService = titleService;
    }
    /**
     * [ngOnInit description]
     * \@method ngOnInit
     * @return {?}
     */
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleTag = this.titleService.getTitle();
        this.routingService.onChange.subscribe(function (value) {
            if (value && value[value.length - 1]) {
                _this.titleService.setTitle(_this.getTitle(value[value.length - 1].data['title']));
                _this.header = value[value.length - 1].data['title'];
                _this.description = value[value.length - 1].data['description'];
            }
        });
    };
    /**
     * [ngAfterViewInit description]
     * \@method ngAfterViewInit
     * @return {?}
     */
    ContentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutStore.sidebarLeftElementHeight.subscribe(function (value) {
            _this.sidebarLeftHeight = value;
            _this.setMinHeight();
        });
        this.layoutStore.sidebarRightElementHeight.subscribe(function (value) {
            _this.sidebarRightHeight = value;
            _this.setMinHeight();
        });
        this.layoutStore.layout.subscribe(function (value) {
            _this.layout = value;
            _this.setMinHeight();
        });
        this.layoutStore.windowInnerHeight.subscribe(function (value) {
            _this.windowInnerHeight = value;
            _this.setMinHeight();
        });
    };
    /**
     * [getTitle description]
     * \@method getTitle
     * @param {?} title
     * @return {?}
     */
    ContentComponent.prototype.getTitle = function (title) {
        return title ? title + " - " + this.titleTag : this.titleTag;
    };
    /**
     * [setMinHeight description]
     * \@method setMinHeight
     * @return {?}
     */
    ContentComponent.prototype.setMinHeight = function () {
        if (this.layout && this.sidebarLeftHeight) {
            var /** @type {?} */ sidebarRightHeight = this.layout === 'fixed' ? 0 : (this.sidebarRightHeight ? this.sidebarRightHeight : 0);
            var /** @type {?} */ windowInnerHeight = this.windowInnerHeight ? this.windowInnerHeight : window.innerHeight;
            windowInnerHeight = this.layout === 'fixed' ? windowInnerHeight - 51 : windowInnerHeight - 101;
            this.heightStyle = Math.max(windowInnerHeight, this.sidebarLeftHeight - 50, sidebarRightHeight - 101);
        }
    };
    return ContentComponent;
}());
ContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-content',
                template: "<div class=\"content-wrapper\" [style.min-height.px]=\"heightStyle\"> <ng-content select=\"[lte-content-before-header]\"></ng-content> <section *ngIf=\"header || description\" class=\"content-header\"> <h1> {{header}} <small *ngIf=\"description\">{{description}}</small> </h1> <lte-breadcrumbs (onChange)=\"onBreadcrumbsChange($event)\"></lte-breadcrumbs> </section> <ng-content select=\"[lte-content-after-header]\"></ng-content> <section class=\"content\"> <ng-content></ng-content> </section> </div> ",
                styles: [".content-wrapper { position: relative; } "]
            },] },
];
/**
 * @nocollapse
 */
ContentComponent.ctorParameters = function () { return [
    { type: LayoutStore, },
    { type: LayoutService, },
    { type: RoutingService, },
    { type: __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */], },
]; };

var ContentModule = (function () {
    function ContentModule() {
    }
    return ContentModule;
}());
ContentModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */], BreadcrumbsModule],
                exports: [ContentComponent],
                declarations: [ContentComponent]
            },] },
];
/**
 * @nocollapse
 */
ContentModule.ctorParameters = function () { return []; };

/**
 * Footer Left
 */
var FooterLeftComponent = (function () {
    function FooterLeftComponent() {
    }
    return FooterLeftComponent;
}());
FooterLeftComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-footer-left',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
FooterLeftComponent.ctorParameters = function () { return []; };
FooterLeftComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
/**
 * Footer Right
 */
var FooterRightComponent = (function () {
    function FooterRightComponent() {
    }
    return FooterRightComponent;
}());
FooterRightComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-footer-right',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
FooterRightComponent.ctorParameters = function () { return []; };
FooterRightComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-footer',
                template: "<footer class=\"main-footer\"> <div class=\"pull-right hidden-xs\"> <ng-template [ngTemplateOutlet]=\"footerRightComponent?.templateRef\"></ng-template> </div> <ng-template [ngTemplateOutlet]=\"footerLeftComponent?.templateRef\"></ng-template> </footer> "
            },] },
];
/**
 * @nocollapse
 */
FooterComponent.ctorParameters = function () { return []; };
FooterComponent.propDecorators = {
    'footerLeftComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [FooterLeftComponent,] },],
    'footerRightComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [FooterRightComponent,] },],
};

var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [FooterComponent, FooterLeftComponent, FooterRightComponent],
                declarations: [FooterComponent, FooterLeftComponent, FooterRightComponent]
            },] },
];
/**
 * @nocollapse
 */
FooterModule.ctorParameters = function () { return []; };

/**
 * Header Logo
 */
var HeaderLogoComponent = (function () {
    function HeaderLogoComponent() {
    }
    return HeaderLogoComponent;
}());
HeaderLogoComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-header-logo',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
HeaderLogoComponent.ctorParameters = function () { return []; };
HeaderLogoComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
/**
 * Header Logo Mini
 */
var HeaderLogoMiniComponent = (function () {
    function HeaderLogoMiniComponent() {
    }
    return HeaderLogoMiniComponent;
}());
HeaderLogoMiniComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-header-logo-mini',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
HeaderLogoMiniComponent.ctorParameters = function () { return []; };
HeaderLogoMiniComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
/**
 * Header
 */
var HeaderComponent = (function () {
    /**
     * @param {?} layoutStore
     */
    function HeaderComponent(layoutStore) {
        this.layoutStore = layoutStore;
    }
    /**
     * [sidebarToggle description]
     * \@method sidebarToggle
     * @param {?} event
     * @return {?}
     */
    HeaderComponent.prototype.sidebarToggle = function (event) {
        event.preventDefault();
        this.layoutStore.sidebarLeftCollapsed();
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-header',
                template: "<header class=\"main-header\"> <a href=\"/\" class=\"logo\"> <span class=\"logo-mini\"><ng-template [ngTemplateOutlet]=\"headerLogoMiniComponent?.templateRef\"></ng-template></span> <span class=\"logo-lg\"><ng-template [ngTemplateOutlet]=\"headerLogoComponent?.templateRef\"></ng-template></span> </a> <nav class=\"navbar navbar-static-top\"> <a href=\"#\" class=\"sidebar-toggle\" (click)=\"sidebarToggle($event)\" role=\"button\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </a> <ng-content></ng-content> </nav> </header> "
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return [
    { type: LayoutStore, },
]; };
HeaderComponent.propDecorators = {
    'headerLogoComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [HeaderLogoComponent,] },],
    'headerLogoMiniComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [HeaderLogoMiniComponent,] },],
};

var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent],
                declarations: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent]
            },] },
];
/**
 * @nocollapse
 */
HeaderModule.ctorParameters = function () { return []; };

var SidebarLeftComponent = (function () {
    /**
     * @param {?} renderer
     * @param {?} layoutStore
     * @param {?} layoutService
     */
    function SidebarLeftComponent(renderer, layoutStore, layoutService) {
        this.renderer = renderer;
        this.layoutStore = layoutStore;
        this.layoutService = layoutService;
        this.showItemBSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](null);
    }
    /**
     * @return {?}
     */
    SidebarLeftComponent.prototype.setHeight = function () {
        if (this.layout === 'fixed') {
            this.sidebarStyles.height = window.innerHeight + "px";
        }
    };
    /**
     * \@method ngOnInit
     * @return {?}
     */
    SidebarLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menu = this.layoutService.menu;
        this.layoutService.sidebarLeftElement = this.sidebarElement;
        this.layoutStore.layout.subscribe(function (value) {
            _this.layout = value;
            _this.sidebarStyles = value === 'fixed' ? { 'height': window.innerHeight + "px", 'overflow': 'auto' } : '';
        });
        this.layoutStore.sidebarLeftMenu.subscribe(function (value) {
            _this.menu = value;
        });
        this.layoutStore.isSidebarLeftMouseOver.subscribe(function (value) {
            if (!_this.isSidebarLeftExpandOnOverDisabled) {
                if (value && _this.isSidebarLeftExpandOnOver) {
                    _this.collapseSidebarLeft(false, true);
                }
                else if (!value && _this.isSidebarLeftExpandOnOver) {
                    _this.collapseSidebarLeft(true, true);
                }
            }
        });
        this.layoutStore.isSidebarLeftExpandOnOver.subscribe(function (value) {
            _this.isSidebarLeftExpandOnOver = value;
            if (_this.isSidebarLeftExpandOnOverInitialised) {
                _this.layoutStore.sidebarLeftCollapsed(value);
            }
            else {
                _this.isSidebarLeftExpandOnOverInitialised = true;
            }
        });
        this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
            _this.collapseSidebarLeft(value, false);
            if (_this.isSidebarLeftExpandOnOver && !value) {
                _this.isSidebarLeftExpandOnOverDisabled = true;
            }
            else if (_this.isSidebarLeftExpandOnOver && !value) {
                _this.isSidebarLeftExpandOnOverDisabled = false;
            }
        });
        this.layoutStore.isSidebarLeftMini.subscribe(function (value) {
            value ?
                _this.renderer.setElementClass(_this.layoutService.wrapperElementRef.nativeElement, 'sidebar-mini', true)
                : _this.renderer.setElementClass(_this.layoutService.wrapperElementRef.nativeElement, 'sidebar-mini', false);
        });
    };
    /**
     * \@method ngAfterViewInit
     * @return {?}
     */
    SidebarLeftComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ menuHaveChildren;
        for (var /** @type {?} */ menuItem in this.menu) {
            if (menuItem['children']) {
                menuHaveChildren = true;
                break;
            }
        }
        if (!menuHaveChildren) {
            setTimeout(function () {
                _this.layoutStore.setSidebarLeftElementHeight(_this.sidebarElement.nativeElement.offsetHeight);
            });
        }
    };
    /**
     * [onSidebarMouseEnter description]
     * \@method onSidebarMouseEnter
     * @param {?} event
     * @return {?}
     */
    SidebarLeftComponent.prototype.onSidebarMouseEnter = function (event) {
        event.preventDefault();
        this.layoutStore.sidebarLeftMouseOver(true);
    };
    /**
     * [onSidebarMouseLeave description]
     * \@method onSidebarMouseLeave
     * @param {?} event
     * @return {?}
     */
    SidebarLeftComponent.prototype.onSidebarMouseLeave = function (event) {
        event.preventDefault();
        this.layoutStore.sidebarLeftMouseOver(false);
    };
    /**
     * [visibilityStateDone description]
     * \@method visibilityStateDone
     * @param {?} event
     * @return {?}
     */
    SidebarLeftComponent.prototype.visibilityStateDone = function (event) {
        if (event.toState === '0') {
            this.layoutStore.setSidebarLeftElementHeight(this.sidebarElement.nativeElement.offsetHeight);
        }
    };
    /**
     * [collapseSidebarLeft description]
     * \@method collapseSidebarLeft
     * @param {?} value
     * @param {?} onHover
     * @return {?}
     */
    SidebarLeftComponent.prototype.collapseSidebarLeft = function (value, onHover) {
        if (value) {
            this.renderer.setElementClass(this.layoutService.wrapperElementRef.nativeElement, 'sidebar-collapse', true);
            this.renderer.setElementClass(this.layoutService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover', false);
        }
        else {
            this.renderer.setElementClass(this.layoutService.wrapperElementRef.nativeElement, 'sidebar-collapse', false);
            if (onHover) {
                this.renderer.setElementClass(this.layoutService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover', true);
            }
        }
    };
    return SidebarLeftComponent;
}());
SidebarLeftComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-sidebar-left',
                template: "<aside class=\"main-sidebar\"> <section class=\"sidebar\" #sidebarElement [ngStyle]=\"sidebarStyles\" (mouseenter)=\"onSidebarMouseEnter($event)\" (mouseleave)=\"onSidebarMouseLeave($event)\"> <ng-content></ng-content> <ul class=\"sidebar-menu\"> <li *ngFor=\"let item of menu; let last = last\" class=\"lte-sidebar-left-menu\" [item]=\"item\" [parent]=\"true\" (collapseDone)=\"visibilityStateDone($event)\" [showItemBSubject]=\"showItemBSubject\"></li> </ul> </section> </aside> ",
                styles: [".main-sidebar { overflow: hidden; } :host /deep/ .sidebar-menu .treeview-menu { display: inherit; } "],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/**
 * @nocollapse
 */
SidebarLeftComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */], },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };
SidebarLeftComponent.propDecorators = {
    'sidebarElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['sidebarElement',] },],
    'setHeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['window:resize', ['$event'],] },],
};

/**
 * @param {?=} duration
 * @param {?=} easing
 * @return {?}
 */
function collapseAnimation(duration, easing) {
    if (duration === void 0) { duration = '350ms'; }
    if (easing === void 0) { easing = 'ease'; }
    return Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('collapseAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
            height: '0',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
            height: '*'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('0 => 1', [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                height: '*',
                overflow: 'hidden'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])(duration + " " + easing, Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                height: '0',
                overflow: 'hidden'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('1 => 0', [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                height: '0',
                overflow: 'hidden'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])(duration + " " + easing, Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ height: '*' }))
        ])
    ]);
}

var SidebarLeftMenuComponent = (function () {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} router
     * @param {?} layoutStore
     * @param {?} layoutService
     */
    function SidebarLeftMenuComponent(elementRef, changeDetectorRef, router, layoutStore, layoutService) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.layoutStore = layoutStore;
        this.layoutService = layoutService;
        this.isActive = false;
        this.parent = false;
        this.collapseDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(SidebarLeftMenuComponent.prototype, "classActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLeftMenuComponent.prototype, "classMenuOpen", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isCollapsed === false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLeftMenuComponent.prototype, "classTreeview", {
        /**
         * @return {?}
         */
        get: function () {
            return this.item.children ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLeftMenuComponent.prototype, "classHeader", {
        /**
         * @return {?}
         */
        get: function () {
            return this.item.separator ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [ngOnInit description]
     * \@method ngOnInit
     * @return {?}
     */
    SidebarLeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isCollapsed) {
            this.heightStyle = 0;
        }
        else {
            this.heightStyle = 'auto';
        }
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* RoutesRecognized */]) {
                if (_this.item.route && _this.item.route === event.urlAfterRedirects) {
                    _this.showItemBSubject.next({ event: event, elementRef: _this.elementRef });
                    _this.isActive = true;
                }
                else {
                    _this.isActive = false;
                }
            }
        });
        this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
            _this.isSidebarLeftCollapsed = value;
        });
        this.showItemBSubject.subscribe(function (value) {
            if (!value || !value.elementRef || (_this.parent && _this.isSidebarLeftCollapsed)) {
                return;
            }
            if (_this.parent && value.event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* RoutesRecognized */]) {
                if (_this.elementRef.nativeElement.contains(value.elementRef.nativeElement)) {
                    _this.isActive = true;
                }
                else {
                    _this.isActive = false;
                }
            }
            var /** @type {?} */ isCollapsed = _this.isCollapsed;
            if (value.elementRef === _this.elementRef) {
                _this.isCollapsed = !_this.isCollapsed;
            }
            else if (_this.elementRef.nativeElement.contains(value.elementRef.nativeElement)) {
                _this.isCollapsed = false;
            }
            else {
                _this.isCollapsed = true;
            }
            if (isCollapsed !== _this.isCollapsed) {
                _this.changeDetectorRef.markForCheck();
            }
        });
    };
    /**
     * [toggleActiveLink description]
     * \@method toggleActiveLink
     * @param {?} event
     * @return {?}
     */
    SidebarLeftMenuComponent.prototype.toggleActiveLink = function (event) {
        event.preventDefault();
        if (!(this.parent && this.isSidebarLeftCollapsed)) {
            this.showItemBSubject.next({ event: event, elementRef: this.elementRef });
        }
    };
    /**
     * [visibilityStateDone description]
     * \@method visibilityStateDone
     * @param {?} event
     * @return {?}
     */
    SidebarLeftMenuComponent.prototype.visibilityStateDone = function (event) {
        this.collapseDone.emit(event);
    };
    /**
     * [getIconClasses description]
     * \@method getIconClasses
     * @param {?} item
     * @return {?}
     */
    SidebarLeftMenuComponent.prototype.getIconClasses = function (item) {
        if (item.iconClasses || item.iconClasses === '') {
            return item.iconClasses;
        }
        else {
            return 'fa fa-circle-o';
        }
    };
    return SidebarLeftMenuComponent;
}());
SidebarLeftMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: '.lte-sidebar-left-menu',
                template: "<span *ngIf=\"item.separator\">{{item.label}}</span> <a *ngIf=\"!item.separator && item.route\" [routerLink]=\"item.route\"> <i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span> <span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\"> <span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span> <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i> </span> </a> <a *ngIf=\"!item.separator && !item.route\" href=\"#\" (click)=\"toggleActiveLink($event)\"> <i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span> <span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\"> <span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span> <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i> </span> </a> <ul *ngIf=\"item.children\" class=\"treeview-menu\" [@collapseAnimation]=\"isCollapsed\" (@collapseAnimation.done)=\"visibilityStateDone($event)\"> <li *ngFor=\"let item of item.children\" class=\"lte-sidebar-left-menu\" [item]=\"item\" [showItemBSubject]=\"showItemBSubject\"></li> </ul> ",
                animations: [collapseAnimation('400ms')],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/**
 * @nocollapse
 */
SidebarLeftMenuComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };
SidebarLeftMenuComponent.propDecorators = {
    'item': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'parent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showItemBSubject': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'collapseDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */] },],
    'classActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.active',] },],
    'classMenuOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.menu-open',] },],
    'classTreeview': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.treeview',] },],
    'classHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.header',] },],
};

var SidebarLeftModule = (function () {
    function SidebarLeftModule() {
    }
    return SidebarLeftModule;
}());
SidebarLeftModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
                exports: [SidebarLeftComponent, SidebarLeftMenuComponent],
                declarations: [SidebarLeftComponent, SidebarLeftMenuComponent]
            },] },
];
/**
 * @nocollapse
 */
SidebarLeftModule.ctorParameters = function () { return []; };

var SidebarRightComponent = (function () {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} layoutStore
     * @param {?} layoutService
     */
    function SidebarRightComponent(elementRef, renderer, layoutStore, layoutService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.layoutStore = layoutStore;
        this.layoutService = layoutService;
    }
    /**
     * [ngOnInit description]
     * \@method ngOnInit
     * @return {?}
     */
    SidebarRightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutService.sidebarRightElement = this.elementRef;
        this.renderer.setElementClass(this.elementRef.nativeElement, 'control-sidebar', true);
        this.layoutStore.isSidebarRightCollapsed.subscribe(function (value) {
            _this.isSidebarRightCollapsed = value;
            if (!value) {
                _this.renderer.setElementClass(_this.elementRef.nativeElement, 'control-sidebar-open', true);
                if (!_this.isSidebarRightOverContent) {
                    _this.renderer.setElementClass(_this.layoutService.wrapperElementRef.nativeElement, 'control-sidebar-open', true);
                }
            }
            else {
                _this.renderer.setElementClass(_this.elementRef.nativeElement, 'control-sidebar-open', false);
                if (!_this.isSidebarRightOverContent) {
                    _this.renderer.setElementClass(_this.layoutService.wrapperElementRef.nativeElement, 'control-sidebar-open', false);
                }
            }
        });
        this.layoutStore.isSidebarRightOverContent.subscribe(function (value) {
            _this.isSidebarRightOverContent = value;
            if (!_this.isSidebarRightCollapsed) {
                _this.renderer.setElementClass(_this.layoutService.wrapperElementRef.nativeElement, 'control-sidebar-open', !value);
            }
        });
        this.layoutStore.sidebarRightSkin.subscribe(function (value) {
            if (_this.skin !== value) {
                _this.renderer.setElementClass(_this.elementRef.nativeElement, "control-sidebar-" + _this.skin, false);
            }
            _this.skin = value;
            _this.renderer.setElementClass(_this.elementRef.nativeElement, "control-sidebar-" + value, true);
        });
        this.layoutStore.layout.subscribe(function (value) {
            _this.layout = value;
            if (value === 'boxed') {
                _this.renderer.setElementStyle(_this.elementRef.nativeElement, 'height', "auto");
                _this.styles = { 'position': 'absolute' };
            }
            else if (value === 'fixed') {
                _this.renderer.setElementStyle(_this.elementRef.nativeElement, 'overflow', "scroll");
                _this.renderer.setElementStyle(_this.elementRef.nativeElement, 'position', "fixed");
                _this.renderer.setElementStyle(_this.elementRef.nativeElement, 'height', value + "px");
                _this.styles = { 'position': 'fixed', 'height': (window.innerHeight + 100) + "px", 'overflow': 'auto' };
            }
            else {
                _this.renderer.setElementStyle(_this.elementRef.nativeElement, 'height', "auto");
                _this.styles = '';
            }
        });
        this.layoutStore.windowInnerHeight.subscribe(function (value) {
            _this.windowInnerHeight = value;
            if (_this.layout === 'fixed') {
                _this.renderer.setElementStyle(_this.elementRef.nativeElement, 'height', value + "px");
                _this.height = value;
            }
        });
    };
    /**
     * [ngAfterViewInit description]
     * \@method ngAfterViewInit
     * @return {?}
     */
    SidebarRightComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutStore.setSidebarRightElementHeight(_this.elementRef.nativeElement.offsetHeight);
        });
    };
    return SidebarRightComponent;
}());
SidebarRightComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-sidebar-right',
                template: "<ng-content></ng-content> <div class=\"control-sidebar-bg\"></div> ",
                styles: [":host .control-sidebar-bg { z-index: -1; } :host.control-sidebar-dark .control-sidebar-bg { background-color: #222d32; } :host /deep/ .tab-content { padding: 10px 15px; } "]
            },] },
];
/**
 * @nocollapse
 */
SidebarRightComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */], },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };
SidebarRightComponent.propDecorators = {
    'sidebarElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['sidebarElement',] },],
};

var SidebarRightModule = (function () {
    function SidebarRightModule() {
    }
    return SidebarRightModule;
}());
SidebarRightModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [SidebarRightComponent],
                declarations: [SidebarRightComponent]
            },] },
];
/**
 * @nocollapse
 */
SidebarRightModule.ctorParameters = function () { return []; };

var WrapperComponent = (function () {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} layoutStore
     * @param {?} layoutService
     */
    function WrapperComponent(elementRef, renderer, layoutStore, layoutService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.layoutStore = layoutStore;
        this.layoutService = layoutService;
    }
    /**
     * [ngOnInit description]
     * \@method ngOnInit
     * @return {?}
     */
    WrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutService.wrapperElementRef = this.elementRef;
        this.layoutStore.wrapperClasses.subscribe(function (value) {
            if (value) {
                _this.classes = value;
            }
        });
        this.layoutStore.layout.subscribe(function (value) {
            value === 'fixed' ? _this.renderer.setElementClass(_this.elementRef.nativeElement, 'fixed', true) : _this.renderer.setElementClass(_this.elementRef.nativeElement, 'fixed', false);
            value === 'boxed' ? _this.renderer.setElementClass(_this.elementRef.nativeElement, 'layout-boxed', true) : _this.renderer.setElementClass(_this.elementRef.nativeElement, 'layout-boxed', false);
        });
        this.layoutStore.skin.subscribe(function (value) {
            if (_this.skin && _this.skin !== value) {
                _this.renderer.setElementClass(_this.elementRef.nativeElement, "skin-" + _this.skin, false);
            }
            _this.renderer.setElementClass(_this.elementRef.nativeElement, "skin-" + value, true);
            _this.skin = value;
        });
    };
    return WrapperComponent;
}());
WrapperComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-wrapper',
                template: "<div class=\"wrapper\" [ngClass]=\"classes\"> <ng-content></ng-content> </div> ",
                styles: [":host { display: block; } /** * Fixed layout sidebar right styles */ :host.fixed /deep/ .control-sidebar { overflow: auto; height: 100%; } :host.layout-boxed /deep/ .control-sidebar-bg { position: absolute; } "]
            },] },
];
/**
 * @nocollapse
 */
WrapperComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */], },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };

var WrapperModule = (function () {
    function WrapperModule() {
    }
    return WrapperModule;
}());
WrapperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [WrapperComponent],
                declarations: [WrapperComponent]
            },] },
];
/**
 * @nocollapse
 */
WrapperModule.ctorParameters = function () { return []; };

/**
 * [InjectionToken description]
 */
var LayoutConfigToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('layoutConfig');
/**
 * [layoutStoreFactory description]
 * @param {?} layoutConfig
 * @return {?}
 */
function layoutStoreFactory(layoutConfig) {
    return new LayoutStore(layoutConfig);
}
/**
 * [layoutProviders description]
 * @param {?} layoutConfig
 * @return {?}
 */
function layoutProvider(layoutConfig) {
    return [{
            provide: LayoutStore,
            useFactory: layoutStoreFactory,
            deps: [LayoutConfigToken]
        }, {
            provide: LayoutConfigToken,
            useValue: layoutConfig
        }
    ];
}

var LayoutModule = (function () {
    /**
     * \@method constructor
     * @param {?} parentModule
     */
    function LayoutModule(parentModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }
    /**
     * [forRoot description]
     * \@method forRoot
     * @param {?} layoutConfig
     * @return {?}
     */
    LayoutModule.forRoot = function (layoutConfig) {
        return {
            ngModule: LayoutModule,
            providers: layoutProvider(layoutConfig)
        };
    };
    return LayoutModule;
}());
LayoutModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
                exports: [ContentModule, FooterModule, HeaderModule, SidebarLeftModule, SidebarRightModule, WrapperModule],
                providers: [LayoutService, RoutingService]
            },] },
];
/**
 * @nocollapse
 */
LayoutModule.ctorParameters = function () { return [
    { type: LayoutModule, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* SkipSelf */] },] },
]; };

var AccordionTitleComponent = (function () {
    function AccordionTitleComponent() {
    }
    return AccordionTitleComponent;
}());
AccordionTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-accordion-title',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
AccordionTitleComponent.ctorParameters = function () { return []; };
AccordionTitleComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var AccordionContentComponent = (function () {
    function AccordionContentComponent() {
    }
    return AccordionContentComponent;
}());
AccordionContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-accordion-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
AccordionContentComponent.ctorParameters = function () { return []; };
AccordionContentComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.active = false;
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    AccordionComponent.prototype.ngOnInit = function () {
        if (!this.lteTitle && !this.accordionTitleComponent) {
            throw new Error("Attribute 'lteTitle' OR Component 'lte-accordion-title' is required");
        }
        if (this.accordionContentComponent) {
            this.contentTemplateRef = this.accordionContentComponent.templateRef;
        }
        else {
            this.contentTemplateRef = this.templateRef;
        }
    };
    return AccordionComponent;
}());
AccordionComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-accordion',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
AccordionComponent.ctorParameters = function () { return []; };
AccordionComponent.propDecorators = {
    'lteTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'accordionTitleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [AccordionTitleComponent,] },],
    'accordionContentComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [AccordionContentComponent,] },],
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var AccordionGroupComponent = (function () {
    function AccordionGroupComponent() {
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    AccordionGroupComponent.prototype.ngOnInit = function () {
        if (!this.lteId) {
            this.lteId = new Date().getTime();
        }
    };
    /**
     * [toggleAccordion description]
     * \@method toggleAccordion
     * @param {?} event
     * @param {?} accordion
     * @return {?}
     */
    AccordionGroupComponent.prototype.toggleAccordion = function (event, accordion) {
        event.preventDefault();
        this.accordionComponents.toArray().forEach(function (accordion) { return accordion.active = false; });
        accordion.active = true;
    };
    return AccordionGroupComponent;
}());
AccordionGroupComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-accordion-group',
                template: "<div class=\"box-group\" id=\"{{lteId}}\"> <div *ngFor=\"let accordion of accordionComponents; let i = index;\" class=\"panel box box-primary\"> <div class=\"box-header with-border\"> <h4 class=\"box-title\"> <a (click)=\"toggleAccordion($event, accordion)\" [attr.data-parent]=\"'#'+lteId\" href=\"#\" [class.collapsed]=\"accordion.active\"> {{accordion.lteTitle}} <ng-template *ngIf=\"!accordion.lteTitle\" [ngTemplateOutlet]=\"accordion.accordionTitleComponent?.templateRef\"></ng-template> </a> </h4> </div> <div id=\"accordion_{{i}}\" class=\"panel-collapse\" [@collapseAnimation]=\"!accordion.active\"> <div class=\"box-body\"> <ng-template [ngTemplateOutlet]=\"accordion.contentTemplateRef\"></ng-template> </div> </div> </div> </div> <!-- <lte-box lteTitle=\"Box title\" [collapsable]=\"true\" [collapsed]=\"false\" [removable]=\"true\" [solid]=\"true\"> <lte-accordion-group lteId=\"accordion\"> <lte-accordion [active]=\"true\"> <lte-accordion-title>HTML Title</lte-accordion-title> <lte-accordion-content> Content </lte-accordion-content> </lte-accordion> </lte-accordion-group> </lte-box> <lte-box lteTitle=\"Box title\" [collapsable]=\"true\" [collapsed]=\"false\" [removable]=\"true\" [solid]=\"true\"> <lte-accordion-group> <lte-accordion lteTitle=\"Title\" [active]=\"true\"> Content </lte-accordion> </lte-accordion-group> </lte-box> --> ",
                animations: [collapseAnimation()]
            },] },
];
/**
 * @nocollapse
 */
AccordionGroupComponent.ctorParameters = function () { return []; };
AccordionGroupComponent.propDecorators = {
    'lteId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'accordionComponents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */], args: [AccordionComponent,] },],
};

var AccordionModule = (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
AccordionModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [AccordionTitleComponent, AccordionContentComponent, AccordionComponent, AccordionGroupComponent],
                declarations: [AccordionTitleComponent, AccordionContentComponent, AccordionComponent, AccordionGroupComponent]
            },] },
];
/**
 * @nocollapse
 */
AccordionModule.ctorParameters = function () { return []; };

var AlertComponent = (function () {
    function AlertComponent() {
        this.type = 'warning';
        this.remove = false;
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertType = "alert-" + this.type;
        if (this.dismissOnTimeout) {
            setTimeout(function () {
                _this.remove = true;
            }, this.dismissOnTimeout);
        }
    };
    /**
     * [removedDone description]
     * \@method removedDone
     * @param {?} event
     * @return {?}
     */
    AlertComponent.prototype.removedDone = function (event) {
        if (event.toState === "1") {
            this.removed = true;
        }
    };
    return AlertComponent;
}());
AlertComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-alert',
                template: "<div class=\"alert\" [ngClass]=\"alertType\" [class.alert-dismissible]=\"dismissible\" *ngIf=\"!removed\" [@collapseAnimation]=\"remove\" (@collapseAnimation.done)=\"removedDone($event)\"> <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" (click)=\"remove = true\">&times;</button> <ng-content></ng-content> </div> <!-- <lte-alert [dismissible]=\"true\" type=\"danger\" [dismissOnTimeout]=\"1000\"> <h4><i class=\"icon fa fa-ban\"></i> Alert!</h4> Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </lte-alert> --> ",
                animations: [collapseAnimation()],
            },] },
];
/**
 * @nocollapse
 */
AlertComponent.ctorParameters = function () { return []; };
AlertComponent.propDecorators = {
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'dismissOnTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'remove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};

var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [AlertComponent],
                declarations: [AlertComponent]
            },] },
];
/**
 * @nocollapse
 */
AlertModule.ctorParameters = function () { return []; };

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
LoadingComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-loading',
                template: "<i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i> ",
                host: { '[class.overlay]': 'isLoading' }
            },] },
];
/**
 * @nocollapse
 */
LoadingComponent.ctorParameters = function () { return []; };
LoadingComponent.propDecorators = {
    'isLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};

var LoadingModule = (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
LoadingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [LoadingComponent],
                declarations: [LoadingComponent]
            },] },
];
/**
 * @nocollapse
 */
LoadingModule.ctorParameters = function () { return []; };

var BoxContentDirective = (function () {
    function BoxContentDirective() {
    }
    return BoxContentDirective;
}());
BoxContentDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */], args: [{
                selector: 'lte-box-content'
            },] },
];
/**
 * @nocollapse
 */
BoxContentDirective.ctorParameters = function () { return []; };
var BoxFooterDirective = (function () {
    function BoxFooterDirective() {
    }
    return BoxFooterDirective;
}());
BoxFooterDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */], args: [{
                selector: 'lte-box-footer'
            },] },
];
/**
 * @nocollapse
 */
BoxFooterDirective.ctorParameters = function () { return []; };
var BoxToolsDirective = (function () {
    function BoxToolsDirective() {
    }
    return BoxToolsDirective;
}());
BoxToolsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */], args: [{
                selector: 'lte-box-tools'
            },] },
];
/**
 * @nocollapse
 */
BoxToolsDirective.ctorParameters = function () { return []; };
var BoxTitleDirective = (function () {
    function BoxTitleDirective() {
    }
    return BoxTitleDirective;
}());
BoxTitleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */], args: [{
                selector: 'lte-box-title'
            },] },
];
/**
 * @nocollapse
 */
BoxTitleDirective.ctorParameters = function () { return []; };
var BoxDirective = (function () {
    function BoxDirective() {
        this.iconClasses = 'ion ion-bag';
        this.loadingClasses = 'fa fa-refresh fa-spin';
    }
    return BoxDirective;
}());
BoxDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */], args: [{
                selector: 'lte-box'
            },] },
];
/**
 * @nocollapse
 */
BoxDirective.ctorParameters = function () { return []; };
BoxDirective.propDecorators = {
    'iconClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'footerId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'footerClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'loadingClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'footerLink': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'lteTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'iconBackground': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'background': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'boxTitleDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxContentDirective,] },],
};

var SmallBoxComponent = (function () {
    function SmallBoxComponent() {
        this.iconClasses = 'ion ion-bag';
    }
    return SmallBoxComponent;
}());
SmallBoxComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-box[type=small]',
                template: "<div class=\"small-box\" [ngClass]=\"background\"> <div class=\"inner\"> <h3 class=\"small-box-header\"> <ng-template [ngIf]=\"lteTitle\">{{lteTitle}}</ng-template> <ng-template [ngIf]=\"!lteTitle\"> <ng-content select=\"lte-box-title\"></ng-content> </ng-template> </h3> <p class=\"small-box-content\"> <ng-content select=\"lte-box-content\"></ng-content> </p> </div> <div *ngIf=\"iconClasses\" class=\"icon\"> <i [ngClass]=\"iconClasses\"></i> </div> <a *ngIf=\"footerLink\" href=\"{{footerLink}}\" class=\"small-box-footer\"> <ng-content select=\"lte-box-footer\"></ng-content> </a> <span *ngIf=\"!footerLink\" class=\"small-box-footer\"> <ng-content select=\"lte-box-footer\"></ng-content> </span> </div> <!-- <lte-box type=\"small\" lteTitle=\"150\" background=\"bg-aqua\" iconClasses=\"ion ion-bag\" footerLink=\"#\"> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> <lte-box type=\"small\" background=\"bg-aqua\" iconClasses=\"ion ion-bag\" footerLink=\"#\"> <lte-box-title>150</lte-box-title> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> --> "
            },] },
];
/**
 * @nocollapse
 */
SmallBoxComponent.ctorParameters = function () { return []; };
SmallBoxComponent.propDecorators = {
    'lteTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'iconClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'background': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'footerLink': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'boxTitleDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxContentDirective,] },],
};

var InfoBoxComponent = (function () {
    function InfoBoxComponent() {
        this.iconClasses = 'ion ion-bag';
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    InfoBoxComponent.prototype.ngOnInit = function () {
        if (!this.background) {
            this.progressBarBg = this.iconBackground;
        }
    };
    return InfoBoxComponent;
}());
InfoBoxComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-box[type=info]',
                template: "<div class=\"info-box\" [ngClass]=\"background\"> <span class=\"info-box-icon\" [ngClass]=\"iconBackground\"> <i class=\"fa\" [ngClass]=\"iconClasses\"></i> </span> <div class=\"info-box-content\"> <span *ngIf=\"lteTitle || boxTitleDirective\" class=\"info-box-text\"> {{lteTitle}} <ng-content *ngIf=\"!lteTitle\" select=\"lte-box-title\"></ng-content> </span> <span *ngIf=\"boxContentDirective\" class=\"info-box-number\"> <ng-content select=\"lte-box-content\"></ng-content> </span> <div *ngIf=\"progress\" class=\"progress\"> <div class=\"progress-bar\" [ngClass]=\"progressBarBg\" [style.width.%]=\"progress\"></div> </div> <span *ngIf=\"boxFooterDirective\" class=\"progress-description\"> <ng-content select=\"lte-box-footer\"></ng-content> </span> </div> </div> <!-- <lte-box type=\"info\" lteTitle=\"150\" background=\"bg-aqua\" iconBackground=\"bg-aqua\" iconClasses=\"ion ion-bag\"> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> <lte-box type=\"info\" background=\"bg-aqua\" iconBackground=\"bg-aqua\" iconClasses=\"ion ion-bag\"> <lte-box-title>New Orders</lte-box-title> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> --> "
            },] },
];
/**
 * @nocollapse
 */
InfoBoxComponent.ctorParameters = function () { return []; };
InfoBoxComponent.propDecorators = {
    'progress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'iconClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'lteTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'background': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'iconBackground': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'boxTitleDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxContentDirective,] },],
};

var BoxComponent = (function () {
    function BoxComponent() {
        this.collapsable = true;
        this.collapsed = false;
        this.removable = true;
        this.remove = false;
        this.border = true;
        this.solid = false;
        this.loadingClasses = 'fa fa-refresh fa-spin';
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    BoxComponent.prototype.ngOnInit = function () {
        if (!this.buttonsClasses) {
            this.buttonsClasses = 'btn btn-box-tool';
        }
    };
    /**
     * [removedDone description]
     * \@method removedDone
     * @param {?} event
     * @return {?}
     */
    BoxComponent.prototype.removedDone = function (event) {
        if (event.toState === "1") {
            this.removed = true;
        }
    };
    return BoxComponent;
}());
BoxComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-box:not([type])',
                template: "<div *ngIf=\"!removed\" class=\"box\" [ngClass]=\"background\" [class.box-solid]=\"solid\" [@collapseAnimation]=\"remove\" (@collapseAnimation.done)=\"removedDone($event)\"> <div *ngIf=\"lteTitle || boxTitleDirective\" class=\"box-header\" [class.with-border]=\"border\"> <h3 class=\"box-title\"> {{lteTitle}} <ng-content *ngIf=\"!lteTitle\" select=\"lte-box-title\"></ng-content> </h3> <div class=\"box-tools pull-right\"> <ng-content select=\"lte-box-tools\"></ng-content> <button *ngIf=\"collapsable\" type=\"button\" ngClass=\"{{buttonsClasses}}\" (click)=\"collapsed = !collapsed\"> <i class=\"fa\" [ngClass]=\"{'fa-plus': collapsed, 'fa-minus': !collapsed}\"></i> </button> <button *ngIf=\"removable\" type=\"button\" ngClass=\"{{buttonsClasses}}\" (click)=\"remove = true\"> <i class=\"fa fa-times\"></i> </button> </div> </div> <div class=\"box-content-wrapper\" [@collapseAnimation]=\"collapsed\"> <div *ngIf=\"boxContentDirective\" [attr.id]=\"contentId\" class=\"box-body\" ngClass=\"{{contentClasses}}\"> <ng-content select=\"lte-box-content\"></ng-content> </div> <div *ngIf=\"boxFooterDirective\"  class=\"box-footer\" ngClass=\"{{footerClasses}}\"> <ng-content select=\"lte-box-footer\"></ng-content> </div> <div *ngIf=\"!boxContentDirective && !boxFooterDirective\" [attr.id]=\"contentId\" class=\"box-body\" ngClass=\"{{contentClasses}}\"> <ng-content></ng-content> </div> </div> <lte-loading [isLoading]=\"loading\"></lte-loading> </div> <!-- <lte-box lteTitle=\"Box title\" [collapsable]=\"true\" [collapsed]=\"false\" [removable]=\"true\" [background]=\"box-success\" [solid]=\"false\" [loading]=\"false\" [loadingClasses]=\"'fa fa-refresh fa-spin'\" [border]=\"false\" buttonsClasses=\"btn btn-success btn-sm\" footerClasses=\"text-black\"> <lte-box-content>The body of the box</lte-box-content> <lte-box-footer>The footer of the box</lte-box-footer> </lte-box> <lte-box [collapsable]=\"true\" [collapsed]=\"false\" [removable]=\"true\" background=\"box-success\" [solid]=\"false\" [loading]=\"false\" [loadingClasses]=\"'fa fa-refresh fa-spin'\" [border]=\"false\" buttonsClasses=\"btn btn-success btn-sm\" footerClasses=\"text-black\"> <lte-box-title>Box title</lte-box-title> <lte-box-content>The body of the box</lte-box-content> <lte-box-footer>The footer of the box</lte-box-footer> </lte-box> --> ",
                animations: [collapseAnimation()],
            },] },
];
/**
 * @nocollapse
 */
BoxComponent.ctorParameters = function () { return []; };
BoxComponent.propDecorators = {
    'lteTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'footerId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'collapsable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'removable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'remove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'border': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'solid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'buttonsClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'loading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'loadingClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'footerClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'background': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'boxTitleDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [BoxContentDirective,] },],
};

var BoxModule = (function () {
    function BoxModule() {
    }
    return BoxModule;
}());
BoxModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], LoadingModule],
                exports: [BoxComponent, SmallBoxComponent, InfoBoxComponent, BoxDirective, BoxTitleDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective],
                declarations: [BoxComponent, SmallBoxComponent, InfoBoxComponent, BoxDirective, BoxTitleDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective]
            },] },
];
/**
 * @nocollapse
 */
BoxModule.ctorParameters = function () { return []; };

var CalloutComponent = (function () {
    function CalloutComponent() {
        this.classes = [];
        this.type = 'warning';
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    CalloutComponent.prototype.ngOnInit = function () {
        this.classes[0] = "callout-" + this.type;
    };
    return CalloutComponent;
}());
CalloutComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-callout',
                template: "<div class=\"callout\" [ngClass]=\"classes\"> <ng-content></ng-content> </div> "
            },] },
];
/**
 * @nocollapse
 */
CalloutComponent.ctorParameters = function () { return []; };
CalloutComponent.propDecorators = {
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};

var CalloutModule = (function () {
    function CalloutModule() {
    }
    return CalloutModule;
}());
CalloutModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [CalloutComponent],
                declarations: [CalloutComponent]
            },] },
];
/**
 * @nocollapse
 */
CalloutModule.ctorParameters = function () { return []; };

var DropdownToogleComponent = (function () {
    function DropdownToogleComponent() {
    }
    return DropdownToogleComponent;
}());
DropdownToogleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-dropdown-toogle',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
DropdownToogleComponent.ctorParameters = function () { return []; };
DropdownToogleComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var DropdownMenuComponent = (function () {
    function DropdownMenuComponent() {
    }
    return DropdownMenuComponent;
}());
DropdownMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-dropdown-menu',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
DropdownMenuComponent.ctorParameters = function () { return []; };
DropdownMenuComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var DropdownComponent = (function () {
    /**
     * \@method constructor
     * @param {?} elementRef
     */
    function DropdownComponent(elementRef) {
        this.elementRef = elementRef;
        this.isCollapsed = true;
        this.toogleTag = 'button';
        this.buttonClass = 'btn btn-default';
        this.dropdownClass = 'dropdown-menu';
    }
    /**
     * \@method ngOnInit
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = function () {
        this.customTag = this.elementRef.nativeElement.tagName === 'LTE-DROPDOWN' ? false : true;
    };
    /**
     * [toggle description]
     * \@method toggle
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.toggle = function (event) {
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
    };
    /**
     * [onClickDocument description]
     * \@method onClickDocument
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.onClickDocument = function (event) {
        if (!this.isCollapsed && !this.toggleElement.nativeElement.contains(event.target) && (event.target.tagName !== 'A' || event.target.tagName !== 'BUTTON')) {
            this.isCollapsed = true;
        }
    };
    return DropdownComponent;
}());
DropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-dropdown, [lte-dropdown]',
                template: "<button *ngIf=\"toogleTag == 'button'\" class=\"dropdown-toggle\" [ngClass]=\"buttonClass\" (click)=\"toggle($event)\" #toggleElement> {{toogle}} <ng-template *ngIf=\"!toogle\" [ngTemplateOutlet]=\"dropdownToogleComponent.templateRef\"></ng-template> </button> <a *ngIf=\"toogleTag == 'a'\" href=\"#\" class=\"dropdown-toggle\" (click)=\"toggle($event)\" #toggleElement> {{toogle}} <ng-template *ngIf=\"!toogle\" [ngTemplateOutlet]=\"dropdownToogleComponent.templateRef\"></ng-template> </a> <ul class=\"dropdown-list\" [ngClass]=\"dropdownClass\" [@collapseAnimation]=\"isCollapsed\"> <ng-template [ngIf]=\"!dropdownMenuComponent\"> <ng-content></ng-content> </ng-template> <ng-template *ngIf=\"dropdownMenuComponent\" [ngTemplateOutlet]=\"dropdownMenuComponent.templateRef\"></ng-template> </ul> <!-- <lte-dropdown toogle=\"Toogle\"> Menu </lte-dropdown> <li lte-dropdown class=\"menu\"> <lte-dropdown-toogle> HTML Toogle </lte-dropdown-toogle> <lte-dropdown-menu> Menu </lte-dropdown-menu> </li> --> ",
                styles: [".dropdown-menu { display: block; } "],
                animations: [collapseAnimation()],
                host: {
                    '(document:click)': 'onClickDocument($event)',
                    '[class.dropdown]': 'toogleTag == "a"',
                    '[class.btn-group]': 'toogleTag == "button"',
                }
            },] },
];
/**
 * @nocollapse
 */
DropdownComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */], },
]; };
DropdownComponent.propDecorators = {
    'toogle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'toogleTag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'buttonClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'dropdownClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'dropdownToogleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [DropdownToogleComponent,] },],
    'dropdownMenuComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [DropdownMenuComponent,] },],
    'toggleElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['toggleElement',] },],
};

var DropdownModule = (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());
DropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [DropdownComponent, DropdownToogleComponent, DropdownMenuComponent],
                declarations: [DropdownComponent, DropdownToogleComponent, DropdownMenuComponent]
            },] },
];
/**
 * @nocollapse
 */
DropdownModule.ctorParameters = function () { return []; };

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
ProgressBarComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-progress-bar',
                template: "<div class=\"progress {{size ? 'progress-'+size : ''}}\" [class.active]=\"active\" [class.vertical]=\"vertical\"> <div class=\"progress-bar progress-bar-warning\" [class.progress-bar-striped]=\"striped\" role=\"progressbar\" [style.width.%]=\"width\" [attr.aria-valuenow]=\"width\" aria-valuemin=\"0\" aria-valuemax=\"100\"> <span *ngIf=\"sr\" class=\"sr-only\">{{sr}}</span> </div> </div> <!-- <lte-progress-bar [width]=\"70\" sr=\"Screen reader text\" [striped]=\"true\" size=\"xs\" [active]=\"true\" vertical=\"true\"></lte-progress-bar> --> "
            },] },
];
/**
 * @nocollapse
 */
ProgressBarComponent.ctorParameters = function () { return []; };
ProgressBarComponent.propDecorators = {
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'vertical': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'sr': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};

var ProgressBarModule = (function () {
    function ProgressBarModule() {
    }
    return ProgressBarModule;
}());
ProgressBarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [ProgressBarComponent],
                declarations: [ProgressBarComponent]
            },] },
];
/**
 * @nocollapse
 */
ProgressBarModule.ctorParameters = function () { return []; };

var TabTitleComponent = (function () {
    function TabTitleComponent() {
    }
    return TabTitleComponent;
}());
TabTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-tab-title',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabTitleComponent.ctorParameters = function () { return []; };
TabTitleComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var TabContentComponent = (function () {
    function TabContentComponent() {
    }
    return TabContentComponent;
}());
TabContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-tab-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabContentComponent.ctorParameters = function () { return []; };
TabContentComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var TabComponent = (function () {
    function TabComponent() {
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * [ngOnInit description]
     * \@method ngOnInit
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = function () {
        if (this.tabContentComponent) {
            this.contentTemplateRef = this.tabContentComponent.templateRef;
        }
        else {
            this.contentTemplateRef = this.templateRef;
        }
    };
    return TabComponent;
}());
TabComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-tab',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabComponent.ctorParameters = function () { return []; };
TabComponent.propDecorators = {
    'lteTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */] },],
    'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */] },],
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
    'tabTitleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [TabTitleComponent,] },],
    'tabContentComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [TabContentComponent,] },],
};
var TabsHeaderComponent = (function () {
    function TabsHeaderComponent() {
    }
    return TabsHeaderComponent;
}());
TabsHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-tabs-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabsHeaderComponent.ctorParameters = function () { return []; };
TabsHeaderComponent.propDecorators = {
    'templateRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['templateRef',] },],
};
var TabsComponent = (function () {
    function TabsComponent() {
        this.wrapperClass = 'nav-tabs-custom';
        this.headerClass = 'header pull-left';
        this.navClass = 'nav nav-tabs';
        this.contentClass = 'tab-content';
    }
    /**
     * [ngOnInit description]
     * \@method ngOnInit
     * @return {?}
     */
    TabsComponent.prototype.ngOnInit = function () {
        if (!this.lteId) {
            this.lteId = new Date().getTime();
        }
    };
    /**
     * [toggleTab description]
     * \@method toggleTab
     * @param {?} event
     * @param {?} tab
     * @return {?}
     */
    TabsComponent.prototype.toggleTab = function (event, tab) {
        event.preventDefault();
        this.tabs.toArray().forEach(function (tab) {
            tab.active = false;
            tab.onHide.emit(event);
        });
        tab.active = true;
        tab.onShow.emit(event);
    };
    return TabsComponent;
}());
TabsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'lte-tabs',
                template: "<div [ngClass]=\"wrapperClass\" id=\"{{lteId}}\"> <ul [ngClass]=\"navClass\" [class.pull-right]=\"header || tabsHeaderComponent\"> <li *ngFor=\"let tab of tabs; let i = index;\" [class.active]=\"tab.active\"> <a *ngIf=\"!tab.disabled\" (click)=\"toggleTab($event, tab)\" href=\"#\"> {{tab.lteTitle}} <ng-template *ngIf=\"!tab.lteTitle\" [ngTemplateOutlet]=\"tab.tabTitleComponent?.templateRef\"></ng-template> </a> <ng-template [ngIf]=\"tab.disabled\"> {{tab.lteTitle}} <ng-template *ngIf=\"!tab.lteTitle\" [ngTemplateOutlet]=\"tab.tabTitleComponent?.templateRef\"></ng-template> </ng-template> </li> <li *ngIf=\"tabsHeaderComponent || header\" [ngClass]=\"headerClass\"> {{header}} <ng-template *ngIf=\"!header\" [ngTemplateOutlet]=\"tabsHeaderComponent?.templateRef\"></ng-template> </li> </ul> <div [ngClass]=\"contentClass\"> <div *ngFor=\"let tab of tabs; let i = index;\" id=\"{{lteId}}-{{i}}\" class=\"tab-pane\" [class.active]=\"tab.active\"> <ng-template [ngTemplateOutlet]=\"tab.contentTemplateRef\"></ng-template> </div> </div> </div> <!-- <lte-tabs lteId=\"tabs\"> <lte-tabs-header>HTML Header</lte-tabs-header> <lte-tab [active]=\"true\"> <lte-tab-title>HTML Tile</lte-tab-title> <lte-tab-content>Content</lte-tab-content> </lte-tab> </lte-tabs> <lte-tabs header=\"Header\"> <lte-tab lteTitle=\"Title\" [active]=\"true\"> Content </lte-tab> </lte-tabs> --> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
TabsComponent.ctorParameters = function () { return []; };
TabsComponent.propDecorators = {
    'lteId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'header': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'wrapperClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'headerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'navClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'tabsHeaderComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChild */], args: [TabsHeaderComponent,] },],
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */], args: [TabComponent,] },],
};

var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: [TabsComponent, TabsHeaderComponent, TabComponent, TabTitleComponent, TabContentComponent],
                declarations: [TabsComponent, TabsHeaderComponent, TabComponent, TabTitleComponent, TabContentComponent]
            },] },
];
/**
 * @nocollapse
 */
TabsModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "../../../../../demo/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../demo/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../demo/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../demo/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_route_interceptor_service__ = __webpack_require__("../../../../../src/interceptors/route-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptors_http_interceptor_service__ = __webpack_require__("../../../../../src/interceptors/http-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interceptors_http_observable_service__ = __webpack_require__("../../../../../src/interceptors/http-observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_page_directive__ = __webpack_require__("../../../../../src/loading-page.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loaders_chasing_dots_chasing_dots_module__ = __webpack_require__("../../../../../src/loaders/chasing-dots/chasing-dots.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__loaders_chasing_dots_chasing_dots_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loaders_circle_circle_module__ = __webpack_require__("../../../../../src/loaders/circle/circle.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__loaders_circle_circle_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loaders_cube_grid_cube_grid_module__ = __webpack_require__("../../../../../src/loaders/cube-grid/cube-grid.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__loaders_cube_grid_cube_grid_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loaders_double_bounce_double_bounce_module__ = __webpack_require__("../../../../../src/loaders/double-bounce/double-bounce.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__loaders_double_bounce_double_bounce_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loaders_fading_circle_fading_circle_module__ = __webpack_require__("../../../../../src/loaders/fading-circle/fading-circle.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__loaders_fading_circle_fading_circle_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loaders_folding_cube_folding_cube_module__ = __webpack_require__("../../../../../src/loaders/folding-cube/folding-cube.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__loaders_folding_cube_folding_cube_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loaders_material_bar_material_bar_module__ = __webpack_require__("../../../../../src/loaders/material-bar/material-bar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_13__loaders_material_bar_material_bar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loaders_pulse_pulse_module__ = __webpack_require__("../../../../../src/loaders/pulse/pulse.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_14__loaders_pulse_pulse_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loaders_sliding_bar_sliding_bar_module__ = __webpack_require__("../../../../../src/loaders/sliding-bar/sliding-bar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_15__loaders_sliding_bar_sliding_bar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loaders_three_bounce_three_bounce_module__ = __webpack_require__("../../../../../src/loaders/three-bounce/three-bounce.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_16__loaders_three_bounce_three_bounce_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loaders_wandering_cubes_wandering_cubes_module__ = __webpack_require__("../../../../../src/loaders/wandering-cubes/wandering-cubes.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_17__loaders_wandering_cubes_wandering_cubes_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__loaders_wave_wave_module__ = __webpack_require__("../../../../../src/loaders/wave/wave.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_18__loaders_wave_wave_module__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoadingPageModule = (function () {
    function LoadingPageModule() {
    }
    return LoadingPageModule;
}());
LoadingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__loading_page_directive__["a" /* LoadingPageDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__loading_page_directive__["a" /* LoadingPageDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__interceptors_route_interceptor_service__["a" /* RouteInterceptorService */],
            __WEBPACK_IMPORTED_MODULE_5__interceptors_http_observable_service__["a" /* HttpObservableService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
                useFactory: __WEBPACK_IMPORTED_MODULE_4__interceptors_http_interceptor_service__["a" /* httpInterceptorServiceFactory */],
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]] }
        ]
    })
], LoadingPageModule);













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/interceptors/http-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpInterceptorService */
/* harmony export (immutable) */ __webpack_exports__["a"] = httpInterceptorServiceFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_observable_service__ = __webpack_require__("../../../../../src/interceptors/http-observable.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpInterceptorService = (function (_super) {
    __extends(HttpInterceptorService, _super);
    /**
     * @method constructor
     * @param  {ConnectionBackend} connectionBackend [description]
     * @param  {RequestOptions}    requestOptions    [description]
     */
    function HttpInterceptorService(connectionBackend, requestOptions, injector) {
        var _this = _super.call(this, connectionBackend, requestOptions) || this;
        _this.injector = injector;
        _this.httpObservableService = injector.get(__WEBPACK_IMPORTED_MODULE_2__http_observable_service__["a" /* HttpObservableService */]);
        return _this;
    }
    /**
     * [request description]
     * @method request
     * @param  {string            |       Request}     url [description]
     * @param  {RequestOptionsArgs}   options [description]
     * @return {Observable<Response>}         [description]
     */
    HttpInterceptorService.prototype.request = function (url, options) {
        var _this = this;
        this.httpObservableService.onRequestStart();
        return _super.prototype.request.call(this, url, options).finally(function () {
            _this.httpObservableService.onRequestDone();
        });
    };
    return HttpInterceptorService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
HttpInterceptorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]) === "function" && _c || Object])
], HttpInterceptorService);

/**
 * [httpInterceptorServiceFactory description]
 * @method httpInterceptorServiceFactory
 * @param  {XHRBackend}                  xhrBackend     [description]
 * @param  {RequestOptions}              requestOptions [description]
 * @return {Http}                                       [description]
 */
function httpInterceptorServiceFactory(xhrBackend, requestOptions, injector) {
    return new HttpInterceptorService(xhrBackend, requestOptions, injector);
}
var _a, _b, _c;
//# sourceMappingURL=http-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/interceptors/http-observable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpObservableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HttpObservableService = (function () {
    function HttpObservableService() {
        this._pendingRequestsCounter = 0;
        this._isPendingRequestsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(HttpObservableService.prototype, "isPendingRequests", {
        /**
         * [isPendingRequests description]
         * @method isPendingRequests
         * @return {Observable<boolean>} [description]
         */
        get: function () {
            return this._isPendingRequestsSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpObservableService.prototype, "pendingRequests", {
        /**
         * [pendingRequests description]
         * @method pendingRequests
         * @return {number}        [description]
         */
        get: function () {
            return this._pendingRequestsCounter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [onRequestStart description]
     * @method onRequestStart
     */
    HttpObservableService.prototype.onRequestStart = function () {
        this._pendingRequestsCounter++;
        if (this._pendingRequestsCounter === 1) {
            this._isPendingRequestsSubject.next(true);
        }
    };
    /**
     * [onRequestDone description]
     * @method onRequestDone
     */
    HttpObservableService.prototype.onRequestDone = function () {
        this._pendingRequestsCounter--;
        if (this._pendingRequestsCounter === 0) {
            this._isPendingRequestsSubject.next(false);
        }
    };
    return HttpObservableService;
}());
HttpObservableService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], HttpObservableService);

//# sourceMappingURL=http-observable.service.js.map

/***/ }),

/***/ "../../../../../src/interceptors/route-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RouteInterceptorService = (function () {
    /**
     * @method constructor
     * @param  {ConnectionBackend} connectionBackend [description]
     * @param  {RequestOptions}    requestOptions    [description]
     */
    function RouteInterceptorService(router) {
        var _this = this;
        this.router = router;
        this._isPendingRouteSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        if (this.router) {
            router.events.subscribe(function (event) {
                _this.routerInterceptor(event);
            });
        }
    }
    Object.defineProperty(RouteInterceptorService.prototype, "isPendingRoute", {
        /**
         * [isPendingRoute description]
         * @method isPendingRoute
         * @return {Observable<boolean>} [description]
         */
        get: function () {
            return this._isPendingRouteSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [routerInterceptor description]
     * @method routerInterceptor
     * @param  {RouterEvent}     event [description]
     */
    RouteInterceptorService.prototype.routerInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
            this.onRouteStart();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationCancel */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationError */]) {
            this.onRouteDone();
        }
    };
    /**
     * [onRequestStart description]
     * @method onRequestStart
     */
    RouteInterceptorService.prototype.onRouteStart = function () {
        this._isPendingRouteSubject.next(true);
    };
    /**
     * [onRequestDone description]
     * @method onRequestDone
     */
    RouteInterceptorService.prototype.onRouteDone = function () {
        this._isPendingRouteSubject.next(false);
    };
    return RouteInterceptorService;
}());
RouteInterceptorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object])
], RouteInterceptorService);

var _a;
//# sourceMappingURL=route-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/loaders/chasing-dots/chasing-dots.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-chasing-dots {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n          animation: sk-chasingDotsRotate 2s infinite linear; }\n  .sk-chasing-dots .sk-child {\n    width: 60%;\n    height: 60%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n            animation: sk-chasingDotsBounce 2s infinite ease-in-out; }\n  .sk-chasing-dots .sk-dot2 {\n    top: auto;\n    bottom: 0;\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s; }\n\n@-webkit-keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/chasing-dots/chasing-dots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChasingDotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChasingDotsComponent = (function () {
    function ChasingDotsComponent() {
    }
    return ChasingDotsComponent;
}());
ChasingDotsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-chasing-dots',
        template: "\n    <div class=\"sk-chasing-dots\">\n      <div class=\"sk-child sk-dot1\"></div>\n      <div class=\"sk-child sk-dot2\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/chasing-dots/chasing-dots.component.css")]
    })
], ChasingDotsComponent);

//# sourceMappingURL=chasing-dots.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/chasing-dots/chasing-dots.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChasingDotsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chasing_dots_component__ = __webpack_require__("../../../../../src/loaders/chasing-dots/chasing-dots.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChasingDotsModule = (function () {
    function ChasingDotsModule() {
    }
    return ChasingDotsModule;
}());
ChasingDotsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chasing_dots_component__["a" /* ChasingDotsComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chasing_dots_component__["a" /* ChasingDotsComponent */]
        ]
    })
], ChasingDotsModule);

//# sourceMappingURL=chasing-dots.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/circle/circle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-circle {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n  .sk-circle .sk-child {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .sk-circle .sk-child:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n            animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; }\n  .sk-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg); }\n  .sk-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .sk-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  .sk-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .sk-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n            transform: rotate(150deg); }\n  .sk-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sk-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n            transform: rotate(210deg); }\n  .sk-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  .sk-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  .sk-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  .sk-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n            transform: rotate(330deg); }\n  .sk-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s; }\n  .sk-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s; }\n  .sk-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s; }\n  .sk-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s; }\n  .sk-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s; }\n  .sk-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s; }\n  .sk-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s; }\n  .sk-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s; }\n  .sk-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s; }\n  .sk-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s; }\n  .sk-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/circle/circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CircleComponent = (function () {
    function CircleComponent() {
    }
    return CircleComponent;
}());
CircleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-circle',
        template: "\n    <div class=\"sk-circle\">\n      <div class=\"sk-circle1 sk-child\"></div>\n      <div class=\"sk-circle2 sk-child\"></div>\n      <div class=\"sk-circle3 sk-child\"></div>\n      <div class=\"sk-circle4 sk-child\"></div>\n      <div class=\"sk-circle5 sk-child\"></div>\n      <div class=\"sk-circle6 sk-child\"></div>\n      <div class=\"sk-circle7 sk-child\"></div>\n      <div class=\"sk-circle8 sk-child\"></div>\n      <div class=\"sk-circle9 sk-child\"></div>\n      <div class=\"sk-circle10 sk-child\"></div>\n      <div class=\"sk-circle11 sk-child\"></div>\n      <div class=\"sk-circle12 sk-child\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/circle/circle.component.css")]
    })
], CircleComponent);

//# sourceMappingURL=circle.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/circle/circle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circle_component__ = __webpack_require__("../../../../../src/loaders/circle/circle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CircleModule = (function () {
    function CircleModule() {
    }
    return CircleModule;
}());
CircleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__circle_component__["a" /* CircleComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__circle_component__["a" /* CircleComponent */]
        ]
    })
], CircleModule);

//# sourceMappingURL=circle.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/cube-grid/cube-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-cube-grid {\n  width: 40px;\n  height: 40px;\n  margin: 40px auto;\n  /*\n   * Spinner positions\n   * 1 2 3\n   * 4 5 6\n   * 7 8 9\n   */ }\n  .sk-cube-grid .sk-cube {\n    width: 33.33%;\n    height: 33.33%;\n    background-color: #333;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; }\n  .sk-cube-grid .sk-cube1 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n  .sk-cube-grid .sk-cube2 {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s; }\n  .sk-cube-grid .sk-cube3 {\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s; }\n  .sk-cube-grid .sk-cube4 {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s; }\n  .sk-cube-grid .sk-cube5 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n  .sk-cube-grid .sk-cube6 {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s; }\n  .sk-cube-grid .sk-cube7 {\n    -webkit-animation-delay: 0.0s;\n            animation-delay: 0.0s; }\n  .sk-cube-grid .sk-cube8 {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s; }\n  .sk-cube-grid .sk-cube9 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); } }\n\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/cube-grid/cube-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubeGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CubeGridComponent = (function () {
    function CubeGridComponent() {
    }
    return CubeGridComponent;
}());
CubeGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-cube-grid',
        template: "\n    <div class=\"sk-cube-grid\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n      <div class=\"sk-cube sk-cube3\"></div>\n      <div class=\"sk-cube sk-cube4\"></div>\n      <div class=\"sk-cube sk-cube5\"></div>\n      <div class=\"sk-cube sk-cube6\"></div>\n      <div class=\"sk-cube sk-cube7\"></div>\n      <div class=\"sk-cube sk-cube8\"></div>\n      <div class=\"sk-cube sk-cube9\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/cube-grid/cube-grid.component.css")]
    })
], CubeGridComponent);

//# sourceMappingURL=cube-grid.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/cube-grid/cube-grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubeGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cube_grid_component__ = __webpack_require__("../../../../../src/loaders/cube-grid/cube-grid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CubeGridModule = (function () {
    function CubeGridModule() {
    }
    return CubeGridModule;
}());
CubeGridModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cube_grid_component__["a" /* CubeGridComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cube_grid_component__["a" /* CubeGridComponent */]
        ]
    })
], CubeGridModule);

//# sourceMappingURL=cube-grid.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/double-bounce/double-bounce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-double-bounce {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 40px auto; }\n  .sk-double-bounce .sk-child {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #333;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;\n            animation: sk-doubleBounce 2s infinite ease-in-out; }\n  .sk-double-bounce .sk-double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n            animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-doubleBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-doubleBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/double-bounce/double-bounce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubleBounceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DoubleBounceComponent = (function () {
    function DoubleBounceComponent() {
    }
    return DoubleBounceComponent;
}());
DoubleBounceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-double-bounce',
        template: "\n    <div class=\"sk-double-bounce\">\n      <div class=\"sk-child sk-double-bounce1\"></div>\n      <div class=\"sk-child sk-double-bounce2\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/double-bounce/double-bounce.component.css")]
    })
], DoubleBounceComponent);

//# sourceMappingURL=double-bounce.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/double-bounce/double-bounce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubleBounceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__double_bounce_component__ = __webpack_require__("../../../../../src/loaders/double-bounce/double-bounce.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoubleBounceModule = (function () {
    function DoubleBounceModule() {
    }
    return DoubleBounceModule;
}());
DoubleBounceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__double_bounce_component__["a" /* DoubleBounceComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__double_bounce_component__["a" /* DoubleBounceComponent */]
        ]
    })
], DoubleBounceModule);

//# sourceMappingURL=double-bounce.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/fading-circle/fading-circle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-fading-circle {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n  .sk-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .sk-fading-circle .sk-circle:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n  .sk-fading-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg); }\n  .sk-fading-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .sk-fading-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  .sk-fading-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .sk-fading-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n            transform: rotate(150deg); }\n  .sk-fading-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sk-fading-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n            transform: rotate(210deg); }\n  .sk-fading-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  .sk-fading-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  .sk-fading-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  .sk-fading-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n            transform: rotate(330deg); }\n  .sk-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s; }\n  .sk-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s; }\n  .sk-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s; }\n  .sk-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s; }\n  .sk-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s; }\n  .sk-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s; }\n  .sk-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s; }\n  .sk-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s; }\n  .sk-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s; }\n  .sk-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s; }\n  .sk-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/fading-circle/fading-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadingCircleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FadingCircleComponent = (function () {
    function FadingCircleComponent() {
    }
    return FadingCircleComponent;
}());
FadingCircleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-fading-circle',
        template: "\n    <div class=\"sk-fading-circle\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/fading-circle/fading-circle.component.css")]
    })
], FadingCircleComponent);

//# sourceMappingURL=fading-circle.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/fading-circle/fading-circle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadingCircleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fading_circle_component__ = __webpack_require__("../../../../../src/loaders/fading-circle/fading-circle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FadingCircleModule = (function () {
    function FadingCircleModule() {
    }
    return FadingCircleModule;
}());
FadingCircleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fading_circle_component__["a" /* FadingCircleComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__fading_circle_component__["a" /* FadingCircleComponent */]
        ]
    })
], FadingCircleModule);

//# sourceMappingURL=fading-circle.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/folding-cube/folding-cube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-folding-cube {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg); }\n  .sk-folding-cube .sk-cube {\n    float: left;\n    width: 50%;\n    height: 50%;\n    position: relative;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  .sk-folding-cube .sk-cube:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #333;\n    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n            animation: sk-foldCubeAngle 2.4s infinite linear both;\n    -webkit-transform-origin: 100% 100%;\n            transform-origin: 100% 100%; }\n  .sk-folding-cube .sk-cube2 {\n    -webkit-transform: scale(1.1) rotateZ(90deg);\n            transform: scale(1.1) rotateZ(90deg); }\n  .sk-folding-cube .sk-cube3 {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n            transform: scale(1.1) rotateZ(180deg); }\n  .sk-folding-cube .sk-cube4 {\n    -webkit-transform: scale(1.1) rotateZ(270deg);\n            transform: scale(1.1) rotateZ(270deg); }\n  .sk-folding-cube .sk-cube2:before {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s; }\n  .sk-folding-cube .sk-cube3:before {\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s; }\n  .sk-folding-cube .sk-cube4:before {\n    -webkit-animation-delay: 0.9s;\n            animation-delay: 0.9s; }\n\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; }\n  25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; }\n  90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; } }\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; }\n  25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; }\n  90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/folding-cube/folding-cube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldingCubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FoldingCubeComponent = (function () {
    function FoldingCubeComponent() {
    }
    return FoldingCubeComponent;
}());
FoldingCubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-folding-cube',
        template: "\n    <div class=\"sk-folding-cube\">\n      <div class=\"sk-cube1 sk-cube\"></div>\n      <div class=\"sk-cube2 sk-cube\"></div>\n      <div class=\"sk-cube4 sk-cube\"></div>\n      <div class=\"sk-cube3 sk-cube\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/folding-cube/folding-cube.component.css")]
    })
], FoldingCubeComponent);

//# sourceMappingURL=folding-cube.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/folding-cube/folding-cube.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldingCubeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folding_cube_component__ = __webpack_require__("../../../../../src/loaders/folding-cube/folding-cube.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoldingCubeModule = (function () {
    function FoldingCubeModule() {
    }
    return FoldingCubeModule;
}());
FoldingCubeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__folding_cube_component__["a" /* FoldingCubeComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__folding_cube_component__["a" /* FoldingCubeComponent */]
        ]
    })
], FoldingCubeModule);

//# sourceMappingURL=folding-cube.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/material-bar/material-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".material-bar {\n  position: relative;\n  width: 100%;\n  height: 6px;\n  background-color: #fdba2c;\n}\n.bar {\n  content: \"\";\n  display: inline;\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 50%;\n  text-align: center;\n}\n.bar:nth-child(1) {\n  -webkit-animation: loading 3s linear infinite;\n          animation: loading 3s linear infinite;\n}\n.bar:nth-child(2) {\n  -webkit-animation: loading 3s linear 1s infinite;\n          animation: loading 3s linear 1s infinite;\n}\n.bar:nth-child(3) {\n  -webkit-animation: loading 3s linear 2s infinite;\n          animation: loading 3s linear 2s infinite;\n}\n@-webkit-keyframes loading {\n    from {left: 50%; width: 0;z-index:100;}\n    33.3333% {left: 0; width: 100%;z-index: 10;}\n    to {left: 0; width: 100%;}\n}\n@keyframes loading {\n    from {left: 50%; width: 0;z-index:100;}\n    33.3333% {left: 0; width: 100%;z-index: 10;}\n    to {left: 0; width: 100%;}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/material-bar/material-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterialbarComponent = (function () {
    function MaterialbarComponent() {
        this.colorOne = '#da4733';
        this.colorTwo = '#3b78e7';
        this.colorThree = '#fdba2c';
    }
    return MaterialbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MaterialbarComponent.prototype, "colorOne", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MaterialbarComponent.prototype, "colorTwo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MaterialbarComponent.prototype, "colorThree", void 0);
MaterialbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-material-bar',
        template: "\n  <div class=\"material-bar\">\n    <div class=\"bar\" [style.background-color]=\"colorOne\"></div>\n    <div class=\"bar\" [style.background-color]=\"colorTwo\"></div>\n    <div class=\"bar\" [style.background-color]=\"colorThree\"></div>\n  </div>",
        styles: [__webpack_require__("../../../../../src/loaders/material-bar/material-bar.component.css")]
    })
], MaterialbarComponent);

//# sourceMappingURL=material-bar.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/material-bar/material-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_bar_component__ = __webpack_require__("../../../../../src/loaders/material-bar/material-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialbarModule = (function () {
    function MaterialbarModule() {
    }
    return MaterialbarModule;
}());
MaterialbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__material_bar_component__["a" /* MaterialbarComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__material_bar_component__["a" /* MaterialbarComponent */]
        ]
    })
], MaterialbarModule);

//# sourceMappingURL=material-bar.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/pulse/pulse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-spinner-pulse {\n  width: 40px;\n  height: 40px;\n  margin: 40px auto;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n          animation: sk-pulseScaleOut 1s infinite ease-in-out; }\n\n@-webkit-keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n\n@keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/pulse/pulse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PulseComponent = (function () {
    function PulseComponent() {
    }
    return PulseComponent;
}());
PulseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-pulse',
        template: "<div class=\"sk-spinner sk-spinner-pulse\"></div>",
        styles: [__webpack_require__("../../../../../src/loaders/pulse/pulse.component.css")]
    })
], PulseComponent);

//# sourceMappingURL=pulse.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/pulse/pulse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pulse_component__ = __webpack_require__("../../../../../src/loaders/pulse/pulse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PulseModule = (function () {
    function PulseModule() {
    }
    return PulseModule;
}());
PulseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pulse_component__["a" /* PulseComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pulse_component__["a" /* PulseComponent */]
        ]
    })
], PulseModule);

//# sourceMappingURL=pulse.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/sliding-bar/sliding-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sliding-bar {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n.sliding-bar:before{\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite;\n}\n\n@-webkit-keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% { left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n}\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% { left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/sliding-bar/sliding-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlidingBarComponent = (function () {
    function SlidingBarComponent() {
    }
    return SlidingBarComponent;
}());
SlidingBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-sliding-bar',
        template: "<div class=\"sliding-bar\"></div>",
        styles: [__webpack_require__("../../../../../src/loaders/sliding-bar/sliding-bar.component.css")]
    })
], SlidingBarComponent);

//# sourceMappingURL=sliding-bar.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/sliding-bar/sliding-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sliding_bar_component__ = __webpack_require__("../../../../../src/loaders/sliding-bar/sliding-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidingBarModule = (function () {
    function SlidingBarModule() {
    }
    return SlidingBarModule;
}());
SlidingBarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sliding_bar_component__["a" /* SlidingBarComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sliding_bar_component__["a" /* SlidingBarComponent */]
        ]
    })
], SlidingBarModule);

//# sourceMappingURL=sliding-bar.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/three-bounce/three-bounce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-three-bounce {\n  margin: 40px auto;\n  width: 80px;\n  text-align: center; }\n  .sk-three-bounce .sk-child {\n    width: 20px;\n    height: 20px;\n    background-color: #333;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n            animation: sk-three-bounce 1.4s ease-in-out 0s infinite both; }\n  .sk-three-bounce .sk-bounce1 {\n    -webkit-animation-delay: -0.32s;\n            animation-delay: -0.32s; }\n  .sk-three-bounce .sk-bounce2 {\n    -webkit-animation-delay: -0.16s;\n            animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-three-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-three-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/three-bounce/three-bounce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeBounceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThreeBounceComponent = (function () {
    function ThreeBounceComponent() {
    }
    return ThreeBounceComponent;
}());
ThreeBounceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-three-bounce',
        template: "\n    <div class=\"sk-three-bounce\">\n       <div class=\"sk-child sk-bounce1\"></div>\n       <div class=\"sk-child sk-bounce2\"></div>\n       <div class=\"sk-child sk-bounce3\"></div>\n     </div>",
        styles: [__webpack_require__("../../../../../src/loaders/three-bounce/three-bounce.component.css")]
    })
], ThreeBounceComponent);

//# sourceMappingURL=three-bounce.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/three-bounce/three-bounce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeBounceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_bounce_component__ = __webpack_require__("../../../../../src/loaders/three-bounce/three-bounce.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThreeBounceModule = (function () {
    function ThreeBounceModule() {
    }
    return ThreeBounceModule;
}());
ThreeBounceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__three_bounce_component__["a" /* ThreeBounceComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__three_bounce_component__["a" /* ThreeBounceComponent */]
        ]
    })
], ThreeBounceModule);

//# sourceMappingURL=three-bounce.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/wandering-cubes/wandering-cubes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-wandering-cubes {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n  .sk-wandering-cubes .sk-cube {\n    background-color: #333;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n            animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both; }\n  .sk-wandering-cubes .sk-cube2 {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s; }\n\n@-webkit-keyframes sk-wanderingCube {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n            transform: translateX(30px) rotate(-90deg) scale(0.5); }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n            transform: translateX(30px) translateY(30px) rotate(-179deg); }\n  50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n            transform: translateX(30px) translateY(30px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n            transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n\n@keyframes sk-wanderingCube {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n            transform: translateX(30px) rotate(-90deg) scale(0.5); }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n            transform: translateX(30px) translateY(30px) rotate(-179deg); }\n  50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n            transform: translateX(30px) translateY(30px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n            transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/wandering-cubes/wandering-cubes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WanderingCubesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WanderingCubesComponent = (function () {
    function WanderingCubesComponent() {
    }
    return WanderingCubesComponent;
}());
WanderingCubesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-wandering-cubes',
        template: "\n    <div class=\"sk-wandering-cubes\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/wandering-cubes/wandering-cubes.component.css")]
    })
], WanderingCubesComponent);

//# sourceMappingURL=wandering-cubes.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/wandering-cubes/wandering-cubes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WanderingCubesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wandering_cubes_component__ = __webpack_require__("../../../../../src/loaders/wandering-cubes/wandering-cubes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WanderingCubesModule = (function () {
    function WanderingCubesModule() {
    }
    return WanderingCubesModule;
}());
WanderingCubesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wandering_cubes_component__["a" /* WanderingCubesComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__wandering_cubes_component__["a" /* WanderingCubesComponent */]
        ]
    })
], WanderingCubesModule);

//# sourceMappingURL=wandering-cubes.module.js.map

/***/ }),

/***/ "../../../../../src/loaders/wave/wave.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-wave {\n  margin: 40px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n  .sk-wave .sk-rect {\n    background-color: #333;\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n            animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }\n  .sk-wave .sk-rect1 {\n    -webkit-animation-delay: -1.2s;\n            animation-delay: -1.2s; }\n  .sk-wave .sk-rect2 {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s; }\n  .sk-wave .sk-rect3 {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s; }\n  .sk-wave .sk-rect4 {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s; }\n  .sk-wave .sk-rect5 {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/loaders/wave/wave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WaveComponent = (function () {
    function WaveComponent() {
    }
    return WaveComponent;
}());
WaveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mk-wave',
        template: "\n    <div class=\"sk-wave\">\n      <div class=\"sk-rect sk-rect1\"></div>\n      <div class=\"sk-rect sk-rect2\"></div>\n      <div class=\"sk-rect sk-rect3\"></div>\n      <div class=\"sk-rect sk-rect4\"></div>\n      <div class=\"sk-rect sk-rect5\"></div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/loaders/wave/wave.component.css")]
    })
], WaveComponent);

//# sourceMappingURL=wave.component.js.map

/***/ }),

/***/ "../../../../../src/loaders/wave/wave.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wave_component__ = __webpack_require__("../../../../../src/loaders/wave/wave.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WaveModule = (function () {
    function WaveModule() {
    }
    return WaveModule;
}());
WaveModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wave_component__["a" /* WaveComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__wave_component__["a" /* WaveComponent */]
        ]
    })
], WaveModule);

//# sourceMappingURL=wave.module.js.map

/***/ }),

/***/ "../../../../../src/loading-page.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interceptors_http_observable_service__ = __webpack_require__("../../../../../src/interceptors/http-observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors_route_interceptor_service__ = __webpack_require__("../../../../../src/interceptors/route-interceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingPageDirective = (function () {
    /**
     * @method constructor
     * @param  {HttpObservableService}   privatehttpObservableService   [description]
     * @param  {RouteInterceptorService} privaterouteInterceptorService [description]
     * @param  {TemplateRef<any>}        privatetemplateRef             [description]
     * @param  {ViewContainerRef}        privateviewContainer           [description]                                              [description]
     */
    function LoadingPageDirective(httpObservableService, routeInterceptorService, templateRef, viewContainer) {
        this.httpObservableService = httpObservableService;
        this.routeInterceptorService = routeInterceptorService;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false;
        this.checkPendingHttp = true;
        this.checkPendingRoute = true;
        this.init();
    }
    /**
     * [init description]
     * @method init
     * @return {[type]} [description]
     */
    LoadingPageDirective.prototype.init = function () {
        var _this = this;
        if (this.checkPendingHttp) {
            this.httpObservableService.isPendingRequests.subscribe(function (value) {
                _this.isPendingRequests = value;
                _this.isVisible();
            });
        }
        if (this.checkPendingRoute) {
            this.routeInterceptorService.isPendingRoute.subscribe(function (value) {
                _this.isPendingRoute = value;
                _this.isVisible();
            });
        }
    };
    /**
     * [isVisible description]
     * @method isVisible
     * @return {[type]}  [description]
     */
    LoadingPageDirective.prototype.isVisible = function () {
        if (this.hasView && !this.isPendingRequests && !this.isPendingRoute) {
            this.viewContainer.clear();
            this.hasView = false;
        }
        else if (!this.hasView && (this.isPendingRequests || this.isPendingRoute)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
    };
    return LoadingPageDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoadingPageDirective.prototype, "checkPendingHttp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoadingPageDirective.prototype, "checkPendingRoute", void 0);
LoadingPageDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[mkLoadingPage]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interceptors_http_observable_service__["a" /* HttpObservableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interceptors_http_observable_service__["a" /* HttpObservableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__interceptors_route_interceptor_service__["a" /* RouteInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interceptors_route_interceptor_service__["a" /* RouteInterceptorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _d || Object])
], LoadingPageDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=loading-page.directive.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../demo/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map