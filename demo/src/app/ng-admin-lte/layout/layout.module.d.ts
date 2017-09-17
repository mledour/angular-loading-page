import { ModuleWithProviders } from '@angular/core';
import { LayoutState } from './layout.state';
export declare class LayoutModule {
    /**
     * @method constructor
     * @param  {[type]}    @Optional( [description]
     */
    constructor(parentModule: LayoutModule);
    /**
     * [forRoot description]
     * @method forRoot
     * @param  {LayoutState}         layoutConfig [description]
     * @return {ModuleWithProviders}              [description]
     */
    static forRoot(layoutConfig: LayoutState): ModuleWithProviders;
}
