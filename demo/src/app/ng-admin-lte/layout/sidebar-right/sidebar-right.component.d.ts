import { OnInit, AfterContentInit, Renderer, ElementRef } from '@angular/core';
import { LayoutStore } from '../layout.store';
import { LayoutService } from '../layout.service';
export declare class SidebarRightComponent implements OnInit, AfterContentInit {
    private elementRef;
    private renderer;
    private layoutStore;
    private layoutService;
    styles: any;
    height: number;
    layout: string;
    private skin;
    private windowInnerHeight;
    private isSidebarRightOverContent;
    private isSidebarRightCollapsed;
    sidebarElement: Element;
    constructor(elementRef: ElementRef, renderer: Renderer, layoutStore: LayoutStore, layoutService: LayoutService);
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [ngAfterViewInit description]
     * @method ngAfterViewInit
     */
    ngAfterContentInit(): void;
}
