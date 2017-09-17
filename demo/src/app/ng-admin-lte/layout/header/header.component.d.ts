import { TemplateRef } from '@angular/core';
import { LayoutStore } from '../layout.store';
/**
 * Header Logo
 */
export declare class HeaderLogoComponent {
    templateRef: TemplateRef<any>;
}
/**
 * Header Logo Mini
 */
export declare class HeaderLogoMiniComponent {
    templateRef: TemplateRef<any>;
}
/**
 * Header
 */
export declare class HeaderComponent {
    private layoutStore;
    headerLogoComponent: HeaderLogoComponent;
    headerLogoMiniComponent: HeaderLogoMiniComponent;
    constructor(layoutStore: LayoutStore);
    /**
     * [sidebarToggle description]
     * @method sidebarToggle
     * @param  {Event}       event [description]
     */
    sidebarToggle(event: Event): void;
}
