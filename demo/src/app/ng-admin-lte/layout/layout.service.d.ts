import { ElementRef } from '@angular/core';
import { LayoutStore } from './layout.store';
export declare class LayoutService {
    private layoutStore;
    menu: Array<any>;
    mainSidebarElement: ElementRef;
    sidebarRightElement: ElementRef;
    sidebarLeftElement: ElementRef;
    wrapperElementRef: ElementRef;
    wrapperClasses: string;
    constructor(layoutStore: LayoutStore);
    /**
     * [init description]
     * @method init
     */
    private init();
    /**
     * [removeBodyClass description]
     * @method removeBodyClass
     * @param  {string}        className [description]
     */
    removeWrapperClass(className: string): void;
    /**
     * [addBodyClass description]
     * @method addBodyClass
     * @param  {string}     className [description]
     */
    addWrapperClass(className: string): void;
}
