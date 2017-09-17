import { InjectionToken } from '@angular/core';
import { LayoutStore } from './layout.store';
import { LayoutState } from './layout.state';
/**
 * [InjectionToken description]
 */
export declare const LayoutConfigToken: InjectionToken<{}>;
/**
 * [layoutStoreFactory description]
 */
export declare function layoutStoreFactory(layoutConfig: LayoutState): LayoutStore;
/**
 * [layoutProviders description]
 */
export declare function layoutProvider(layoutConfig: LayoutState): ({
    provide: typeof LayoutStore;
    useFactory: (layoutConfig: LayoutState) => LayoutStore;
    deps: InjectionToken<{}>[];
} | {
    provide: InjectionToken<{}>;
    useValue: LayoutState;
})[];
