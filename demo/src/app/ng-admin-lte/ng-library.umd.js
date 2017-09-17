(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs/Rx'), require('@angular/platform-browser'), require('@angular/animations')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs/Rx', '@angular/platform-browser', '@angular/animations'], factory) :
	(factory((global['ng-library'] = global['ng-library'] || {}),global._angular_core,global._angular_common,global._angular_router,global.rxjs_Rx,global._angular_platformBrowser,global._angular_animations));
}(this, (function (exports,_angular_core,_angular_common,_angular_router,rxjs_Rx,_angular_platformBrowser,_angular_animations) { 'use strict';

var RoutingService = (function () {
    /**
     * \@method constructor
     * @param {?} router
     */
    function RoutingService(router) {
        this.router = router;
        this.onChange = new rxjs_Rx.BehaviorSubject(undefined);
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
            if (routeEvent instanceof _angular_router.NavigationEnd) {
                var /** @type {?} */ route = _this.router.routerState.root.snapshot, /** @type {?} */ url = '', /** @type {?} */ paths = [], /** @type {?} */ rootRoot = true;
                while (route.children.length) {
                    route = route.firstChild;
                    if (route.outlet !== _angular_router.PRIMARY_OUTLET || (!route.routeConfig.path && !rootRoot)) {
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
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
RoutingService.ctorParameters = function () { return [
    { type: _angular_router.Router, },
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
    { type: _angular_core.Component, args: [{
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
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, _angular_router.RouterModule],
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
        this._layoutState = new rxjs_Rx.BehaviorSubject(this.initialLayoutState);
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
    { type: _angular_core.Injectable },
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
    { type: _angular_core.Component, args: [{
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
    { type: _angular_platformBrowser.Title, },
]; };

var ContentModule = (function () {
    function ContentModule() {
    }
    return ContentModule;
}());
ContentModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, _angular_router.RouterModule, BreadcrumbsModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-footer-left',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
FooterLeftComponent.ctorParameters = function () { return []; };
FooterLeftComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-footer-right',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
FooterRightComponent.ctorParameters = function () { return []; };
FooterRightComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
};
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-footer',
                template: "<footer class=\"main-footer\"> <div class=\"pull-right hidden-xs\"> <ng-template [ngTemplateOutlet]=\"footerRightComponent?.templateRef\"></ng-template> </div> <ng-template [ngTemplateOutlet]=\"footerLeftComponent?.templateRef\"></ng-template> </footer> "
            },] },
];
/**
 * @nocollapse
 */
FooterComponent.ctorParameters = function () { return []; };
FooterComponent.propDecorators = {
    'footerLeftComponent': [{ type: _angular_core.ContentChild, args: [FooterLeftComponent,] },],
    'footerRightComponent': [{ type: _angular_core.ContentChild, args: [FooterRightComponent,] },],
};

var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-header-logo',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
HeaderLogoComponent.ctorParameters = function () { return []; };
HeaderLogoComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-header-logo-mini',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
HeaderLogoMiniComponent.ctorParameters = function () { return []; };
HeaderLogoMiniComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
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
    'headerLogoComponent': [{ type: _angular_core.ContentChild, args: [HeaderLogoComponent,] },],
    'headerLogoMiniComponent': [{ type: _angular_core.ContentChild, args: [HeaderLogoMiniComponent,] },],
};

var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
        this.showItemBSubject = new rxjs_Rx.BehaviorSubject(null);
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-sidebar-left',
                template: "<aside class=\"main-sidebar\"> <section class=\"sidebar\" #sidebarElement [ngStyle]=\"sidebarStyles\" (mouseenter)=\"onSidebarMouseEnter($event)\" (mouseleave)=\"onSidebarMouseLeave($event)\"> <ng-content></ng-content> <ul class=\"sidebar-menu\"> <li *ngFor=\"let item of menu; let last = last\" class=\"lte-sidebar-left-menu\" [item]=\"item\" [parent]=\"true\" (collapseDone)=\"visibilityStateDone($event)\" [showItemBSubject]=\"showItemBSubject\"></li> </ul> </section> </aside> ",
                styles: [".main-sidebar { overflow: hidden; } :host /deep/ .sidebar-menu .treeview-menu { display: inherit; } "],
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
SidebarLeftComponent.ctorParameters = function () { return [
    { type: _angular_core.Renderer, },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };
SidebarLeftComponent.propDecorators = {
    'sidebarElement': [{ type: _angular_core.ViewChild, args: ['sidebarElement',] },],
    'setHeight': [{ type: _angular_core.HostListener, args: ['window:resize', ['$event'],] },],
};

/**
 * @param {?=} duration
 * @param {?=} easing
 * @return {?}
 */
function collapseAnimation(duration, easing) {
    if (duration === void 0) { duration = '350ms'; }
    if (easing === void 0) { easing = 'ease'; }
    return _angular_animations.trigger('collapseAnimation', [
        _angular_animations.state('1', _angular_animations.style({
            height: '0',
            display: 'none'
        })),
        _angular_animations.state('0', _angular_animations.style({
            height: '*'
        })),
        _angular_animations.transition('0 => 1', [
            _angular_animations.style({
                height: '*',
                overflow: 'hidden'
            }),
            _angular_animations.animate(duration + " " + easing, _angular_animations.style({
                height: '0',
                overflow: 'hidden'
            }))
        ]),
        _angular_animations.transition('1 => 0', [
            _angular_animations.style({
                height: '0',
                overflow: 'hidden'
            }),
            _angular_animations.animate(duration + " " + easing, _angular_animations.style({ height: '*' }))
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
        this.collapseDone = new _angular_core.EventEmitter();
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
            if (event instanceof _angular_router.RoutesRecognized) {
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
            if (_this.parent && value.event instanceof _angular_router.RoutesRecognized) {
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
    { type: _angular_core.Component, args: [{
                selector: '.lte-sidebar-left-menu',
                template: "<span *ngIf=\"item.separator\">{{item.label}}</span> <a *ngIf=\"!item.separator && item.route\" [routerLink]=\"item.route\"> <i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span> <span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\"> <span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span> <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i> </span> </a> <a *ngIf=\"!item.separator && !item.route\" href=\"#\" (click)=\"toggleActiveLink($event)\"> <i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span> <span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\"> <span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span> <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i> </span> </a> <ul *ngIf=\"item.children\" class=\"treeview-menu\" [@collapseAnimation]=\"isCollapsed\" (@collapseAnimation.done)=\"visibilityStateDone($event)\"> <li *ngFor=\"let item of item.children\" class=\"lte-sidebar-left-menu\" [item]=\"item\" [showItemBSubject]=\"showItemBSubject\"></li> </ul> ",
                animations: [collapseAnimation('400ms')],
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
SidebarLeftMenuComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.ChangeDetectorRef, },
    { type: _angular_router.Router, },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };
SidebarLeftMenuComponent.propDecorators = {
    'item': [{ type: _angular_core.Input },],
    'parent': [{ type: _angular_core.Input },],
    'showItemBSubject': [{ type: _angular_core.Input },],
    'collapseDone': [{ type: _angular_core.Output },],
    'classActive': [{ type: _angular_core.HostBinding, args: ['class.active',] },],
    'classMenuOpen': [{ type: _angular_core.HostBinding, args: ['class.menu-open',] },],
    'classTreeview': [{ type: _angular_core.HostBinding, args: ['class.treeview',] },],
    'classHeader': [{ type: _angular_core.HostBinding, args: ['class.header',] },],
};

var SidebarLeftModule = (function () {
    function SidebarLeftModule() {
    }
    return SidebarLeftModule;
}());
SidebarLeftModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, _angular_router.RouterModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-sidebar-right',
                template: "<ng-content></ng-content> <div class=\"control-sidebar-bg\"></div> ",
                styles: [":host .control-sidebar-bg { z-index: -1; } :host.control-sidebar-dark .control-sidebar-bg { background-color: #222d32; } :host /deep/ .tab-content { padding: 10px 15px; } "]
            },] },
];
/**
 * @nocollapse
 */
SidebarRightComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer, },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };
SidebarRightComponent.propDecorators = {
    'sidebarElement': [{ type: _angular_core.ViewChild, args: ['sidebarElement',] },],
};

var SidebarRightModule = (function () {
    function SidebarRightModule() {
    }
    return SidebarRightModule;
}());
SidebarRightModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-wrapper',
                template: "<div class=\"wrapper\" [ngClass]=\"classes\"> <ng-content></ng-content> </div> ",
                styles: [":host { display: block; } /** * Fixed layout sidebar right styles */ :host.fixed /deep/ .control-sidebar { overflow: auto; height: 100%; } :host.layout-boxed /deep/ .control-sidebar-bg { position: absolute; } "]
            },] },
];
/**
 * @nocollapse
 */
WrapperComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer, },
    { type: LayoutStore, },
    { type: LayoutService, },
]; };

var WrapperModule = (function () {
    function WrapperModule() {
    }
    return WrapperModule;
}());
WrapperModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
var LayoutConfigToken = new _angular_core.InjectionToken('layoutConfig');
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
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, _angular_router.RouterModule],
                exports: [ContentModule, FooterModule, HeaderModule, SidebarLeftModule, SidebarRightModule, WrapperModule],
                providers: [LayoutService, RoutingService]
            },] },
];
/**
 * @nocollapse
 */
LayoutModule.ctorParameters = function () { return [
    { type: LayoutModule, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.SkipSelf },] },
]; };

var AccordionTitleComponent = (function () {
    function AccordionTitleComponent() {
    }
    return AccordionTitleComponent;
}());
AccordionTitleComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-accordion-title',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
AccordionTitleComponent.ctorParameters = function () { return []; };
AccordionTitleComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
};
var AccordionContentComponent = (function () {
    function AccordionContentComponent() {
    }
    return AccordionContentComponent;
}());
AccordionContentComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-accordion-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
AccordionContentComponent.ctorParameters = function () { return []; };
AccordionContentComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-accordion',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
AccordionComponent.ctorParameters = function () { return []; };
AccordionComponent.propDecorators = {
    'lteTitle': [{ type: _angular_core.Input },],
    'active': [{ type: _angular_core.Input },],
    'accordionTitleComponent': [{ type: _angular_core.ContentChild, args: [AccordionTitleComponent,] },],
    'accordionContentComponent': [{ type: _angular_core.ContentChild, args: [AccordionContentComponent,] },],
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
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
    'lteId': [{ type: _angular_core.Input },],
    'accordionComponents': [{ type: _angular_core.ContentChildren, args: [AccordionComponent,] },],
};

var AccordionModule = (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
AccordionModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
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
    'type': [{ type: _angular_core.Input },],
    'dismissible': [{ type: _angular_core.Input },],
    'dismissOnTimeout': [{ type: _angular_core.Input },],
    'remove': [{ type: _angular_core.Input },],
};

var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
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
    'isLoading': [{ type: _angular_core.Input },],
};

var LoadingModule = (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
LoadingModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Directive, args: [{
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
    { type: _angular_core.Directive, args: [{
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
    { type: _angular_core.Directive, args: [{
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
    { type: _angular_core.Directive, args: [{
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
    { type: _angular_core.Directive, args: [{
                selector: 'lte-box'
            },] },
];
/**
 * @nocollapse
 */
BoxDirective.ctorParameters = function () { return []; };
BoxDirective.propDecorators = {
    'iconClasses': [{ type: _angular_core.Input },],
    'contentId': [{ type: _angular_core.Input },],
    'footerId': [{ type: _angular_core.Input },],
    'contentClasses': [{ type: _angular_core.Input },],
    'footerClasses': [{ type: _angular_core.Input },],
    'loadingClasses': [{ type: _angular_core.Input },],
    'footerLink': [{ type: _angular_core.Input },],
    'lteTitle': [{ type: _angular_core.Input },],
    'iconBackground': [{ type: _angular_core.Input },],
    'background': [{ type: _angular_core.Input },],
    'boxTitleDirective': [{ type: _angular_core.ContentChild, args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: _angular_core.ContentChild, args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: _angular_core.ContentChild, args: [BoxContentDirective,] },],
};

var SmallBoxComponent = (function () {
    function SmallBoxComponent() {
        this.iconClasses = 'ion ion-bag';
    }
    return SmallBoxComponent;
}());
SmallBoxComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-box[type=small]',
                template: "<div class=\"small-box\" [ngClass]=\"background\"> <div class=\"inner\"> <h3 class=\"small-box-header\"> <ng-template [ngIf]=\"lteTitle\">{{lteTitle}}</ng-template> <ng-template [ngIf]=\"!lteTitle\"> <ng-content select=\"lte-box-title\"></ng-content> </ng-template> </h3> <p class=\"small-box-content\"> <ng-content select=\"lte-box-content\"></ng-content> </p> </div> <div *ngIf=\"iconClasses\" class=\"icon\"> <i [ngClass]=\"iconClasses\"></i> </div> <a *ngIf=\"footerLink\" href=\"{{footerLink}}\" class=\"small-box-footer\"> <ng-content select=\"lte-box-footer\"></ng-content> </a> <span *ngIf=\"!footerLink\" class=\"small-box-footer\"> <ng-content select=\"lte-box-footer\"></ng-content> </span> </div> <!-- <lte-box type=\"small\" lteTitle=\"150\" background=\"bg-aqua\" iconClasses=\"ion ion-bag\" footerLink=\"#\"> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> <lte-box type=\"small\" background=\"bg-aqua\" iconClasses=\"ion ion-bag\" footerLink=\"#\"> <lte-box-title>150</lte-box-title> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> --> "
            },] },
];
/**
 * @nocollapse
 */
SmallBoxComponent.ctorParameters = function () { return []; };
SmallBoxComponent.propDecorators = {
    'lteTitle': [{ type: _angular_core.Input },],
    'iconClasses': [{ type: _angular_core.Input },],
    'background': [{ type: _angular_core.Input },],
    'footerLink': [{ type: _angular_core.Input },],
    'boxTitleDirective': [{ type: _angular_core.ContentChild, args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: _angular_core.ContentChild, args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: _angular_core.ContentChild, args: [BoxContentDirective,] },],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-box[type=info]',
                template: "<div class=\"info-box\" [ngClass]=\"background\"> <span class=\"info-box-icon\" [ngClass]=\"iconBackground\"> <i class=\"fa\" [ngClass]=\"iconClasses\"></i> </span> <div class=\"info-box-content\"> <span *ngIf=\"lteTitle || boxTitleDirective\" class=\"info-box-text\"> {{lteTitle}} <ng-content *ngIf=\"!lteTitle\" select=\"lte-box-title\"></ng-content> </span> <span *ngIf=\"boxContentDirective\" class=\"info-box-number\"> <ng-content select=\"lte-box-content\"></ng-content> </span> <div *ngIf=\"progress\" class=\"progress\"> <div class=\"progress-bar\" [ngClass]=\"progressBarBg\" [style.width.%]=\"progress\"></div> </div> <span *ngIf=\"boxFooterDirective\" class=\"progress-description\"> <ng-content select=\"lte-box-footer\"></ng-content> </span> </div> </div> <!-- <lte-box type=\"info\" lteTitle=\"150\" background=\"bg-aqua\" iconBackground=\"bg-aqua\" iconClasses=\"ion ion-bag\"> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> <lte-box type=\"info\" background=\"bg-aqua\" iconBackground=\"bg-aqua\" iconClasses=\"ion ion-bag\"> <lte-box-title>New Orders</lte-box-title> <lte-box-content>New Orders</lte-box-content> <lte-box-footer>More info <i class=\"fa fa-arrow-circle-right\"></i></lte-box-footer> </lte-box> --> "
            },] },
];
/**
 * @nocollapse
 */
InfoBoxComponent.ctorParameters = function () { return []; };
InfoBoxComponent.propDecorators = {
    'progress': [{ type: _angular_core.Input },],
    'iconClasses': [{ type: _angular_core.Input },],
    'lteTitle': [{ type: _angular_core.Input },],
    'background': [{ type: _angular_core.Input },],
    'iconBackground': [{ type: _angular_core.Input },],
    'boxTitleDirective': [{ type: _angular_core.ContentChild, args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: _angular_core.ContentChild, args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: _angular_core.ContentChild, args: [BoxContentDirective,] },],
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
    { type: _angular_core.Component, args: [{
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
    'lteTitle': [{ type: _angular_core.Input },],
    'contentId': [{ type: _angular_core.Input },],
    'footerId': [{ type: _angular_core.Input },],
    'collapsable': [{ type: _angular_core.Input },],
    'collapsed': [{ type: _angular_core.Input },],
    'removable': [{ type: _angular_core.Input },],
    'remove': [{ type: _angular_core.Input },],
    'border': [{ type: _angular_core.Input },],
    'solid': [{ type: _angular_core.Input },],
    'buttonsClasses': [{ type: _angular_core.Input },],
    'loading': [{ type: _angular_core.Input },],
    'loadingClasses': [{ type: _angular_core.Input },],
    'contentClasses': [{ type: _angular_core.Input },],
    'footerClasses': [{ type: _angular_core.Input },],
    'background': [{ type: _angular_core.Input },],
    'boxTitleDirective': [{ type: _angular_core.ContentChild, args: [BoxTitleDirective,] },],
    'boxFooterDirective': [{ type: _angular_core.ContentChild, args: [BoxFooterDirective,] },],
    'boxContentDirective': [{ type: _angular_core.ContentChild, args: [BoxContentDirective,] },],
};

var BoxModule = (function () {
    function BoxModule() {
    }
    return BoxModule;
}());
BoxModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule, LoadingModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-callout',
                template: "<div class=\"callout\" [ngClass]=\"classes\"> <ng-content></ng-content> </div> "
            },] },
];
/**
 * @nocollapse
 */
CalloutComponent.ctorParameters = function () { return []; };
CalloutComponent.propDecorators = {
    'type': [{ type: _angular_core.Input },],
};

var CalloutModule = (function () {
    function CalloutModule() {
    }
    return CalloutModule;
}());
CalloutModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-dropdown-toogle',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
DropdownToogleComponent.ctorParameters = function () { return []; };
DropdownToogleComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
};
var DropdownMenuComponent = (function () {
    function DropdownMenuComponent() {
    }
    return DropdownMenuComponent;
}());
DropdownMenuComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-dropdown-menu',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
DropdownMenuComponent.ctorParameters = function () { return []; };
DropdownMenuComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
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
    { type: _angular_core.ElementRef, },
]; };
DropdownComponent.propDecorators = {
    'toogle': [{ type: _angular_core.Input },],
    'toogleTag': [{ type: _angular_core.Input },],
    'buttonClass': [{ type: _angular_core.Input },],
    'dropdownClass': [{ type: _angular_core.Input },],
    'dropdownToogleComponent': [{ type: _angular_core.ContentChild, args: [DropdownToogleComponent,] },],
    'dropdownMenuComponent': [{ type: _angular_core.ContentChild, args: [DropdownMenuComponent,] },],
    'toggleElement': [{ type: _angular_core.ViewChild, args: ['toggleElement',] },],
};

var DropdownModule = (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());
DropdownModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-progress-bar',
                template: "<div class=\"progress {{size ? 'progress-'+size : ''}}\" [class.active]=\"active\" [class.vertical]=\"vertical\"> <div class=\"progress-bar progress-bar-warning\" [class.progress-bar-striped]=\"striped\" role=\"progressbar\" [style.width.%]=\"width\" [attr.aria-valuenow]=\"width\" aria-valuemin=\"0\" aria-valuemax=\"100\"> <span *ngIf=\"sr\" class=\"sr-only\">{{sr}}</span> </div> </div> <!-- <lte-progress-bar [width]=\"70\" sr=\"Screen reader text\" [striped]=\"true\" size=\"xs\" [active]=\"true\" vertical=\"true\"></lte-progress-bar> --> "
            },] },
];
/**
 * @nocollapse
 */
ProgressBarComponent.ctorParameters = function () { return []; };
ProgressBarComponent.propDecorators = {
    'width': [{ type: _angular_core.Input },],
    'striped': [{ type: _angular_core.Input },],
    'vertical': [{ type: _angular_core.Input },],
    'active': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'sr': [{ type: _angular_core.Input },],
};

var ProgressBarModule = (function () {
    function ProgressBarModule() {
    }
    return ProgressBarModule;
}());
ProgressBarModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-tab-title',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabTitleComponent.ctorParameters = function () { return []; };
TabTitleComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
};
var TabContentComponent = (function () {
    function TabContentComponent() {
    }
    return TabContentComponent;
}());
TabContentComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-tab-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabContentComponent.ctorParameters = function () { return []; };
TabContentComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
};
var TabComponent = (function () {
    function TabComponent() {
        this.onShow = new _angular_core.EventEmitter();
        this.onHide = new _angular_core.EventEmitter();
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
    { type: _angular_core.Component, args: [{
                selector: 'lte-tab',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabComponent.ctorParameters = function () { return []; };
TabComponent.propDecorators = {
    'lteTitle': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'active': [{ type: _angular_core.Input },],
    'onShow': [{ type: _angular_core.Output },],
    'onHide': [{ type: _angular_core.Output },],
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
    'tabTitleComponent': [{ type: _angular_core.ContentChild, args: [TabTitleComponent,] },],
    'tabContentComponent': [{ type: _angular_core.ContentChild, args: [TabContentComponent,] },],
};
var TabsHeaderComponent = (function () {
    function TabsHeaderComponent() {
    }
    return TabsHeaderComponent;
}());
TabsHeaderComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'lte-tabs-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] },
];
/**
 * @nocollapse
 */
TabsHeaderComponent.ctorParameters = function () { return []; };
TabsHeaderComponent.propDecorators = {
    'templateRef': [{ type: _angular_core.ViewChild, args: ['templateRef',] },],
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
    { type: _angular_core.Component, args: [{
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
    'lteId': [{ type: _angular_core.Input },],
    'header': [{ type: _angular_core.Input },],
    'wrapperClass': [{ type: _angular_core.Input },],
    'headerClass': [{ type: _angular_core.Input },],
    'navClass': [{ type: _angular_core.Input },],
    'contentClass': [{ type: _angular_core.Input },],
    'tabsHeaderComponent': [{ type: _angular_core.ContentChild, args: [TabsHeaderComponent,] },],
    'tabs': [{ type: _angular_core.ContentChildren, args: [TabComponent,] },],
};

var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
                exports: [TabsComponent, TabsHeaderComponent, TabComponent, TabTitleComponent, TabContentComponent],
                declarations: [TabsComponent, TabsHeaderComponent, TabComponent, TabTitleComponent, TabContentComponent]
            },] },
];
/**
 * @nocollapse
 */
TabsModule.ctorParameters = function () { return []; };

exports.LayoutModule = LayoutModule;
exports.RoutingService = RoutingService;
exports.AccordionModule = AccordionModule;
exports.AlertModule = AlertModule;
exports.BoxModule = BoxModule;
exports.BreadcrumbsModule = BreadcrumbsModule;
exports.CalloutModule = CalloutModule;
exports.DropdownModule = DropdownModule;
exports.ProgressBarModule = ProgressBarModule;
exports.TabsModule = TabsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
