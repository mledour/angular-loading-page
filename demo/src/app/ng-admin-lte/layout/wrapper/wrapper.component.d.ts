import { OnInit, Renderer, ElementRef } from '@angular/core';
import { LayoutStore } from '../layout.store';
import { LayoutService } from '../layout.service';
export declare class WrapperComponent implements OnInit {
    private elementRef;
    private renderer;
    private layoutStore;
    private layoutService;
    private skin;
    private layout;
    private sidebarLeftElementHeight;
    classes: string;
    constructor(elementRef: ElementRef, renderer: Renderer, layoutStore: LayoutStore, layoutService: LayoutService);
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    ngOnInit(): void;
}
