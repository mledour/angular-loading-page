import { OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { LayoutStore } from '../layout.store';
import { LayoutService } from '../layout.service';
export declare class SidebarLeftComponent implements OnInit, AfterViewInit {
    private renderer;
    private layoutStore;
    private layoutService;
    menu: Array<any>;
    sidebarStyles: any;
    showItemBSubject: BehaviorSubject<any>;
    private layout;
    private isSidebarLeftExpandOnOver;
    private isSidebarLeftExpandOnOverDisabled;
    private isSidebarLeftExpandOnOverInitialised;
    constructor(renderer: Renderer, layoutStore: LayoutStore, layoutService: LayoutService);
    sidebarElement: ElementRef;
    setHeight(): void;
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * @method ngAfterViewInit
     */
    ngAfterViewInit(): void;
    /**
     * [onSidebarMouseEnter description]
     * @method onSidebarMouseEnter
     * @param  {Event}             event [description]
     */
    onSidebarMouseEnter(event: Event): void;
    /**
     * [onSidebarMouseLeave description]
     * @method onSidebarMouseLeave
     * @param  {Event}             event [description]
     */
    onSidebarMouseLeave(event: Event): void;
    /**
     * [visibilityStateDone description]
     * @method visibilityStateDone
     * @param  {[type]}            event [description]
     */
    visibilityStateDone(event: any): void;
    /**
     * [collapseSidebarLeft description]
     * @method collapseSidebarLeft
     * @param  {boolean}           value   [description]
     * @param  {boolean}           onHover [description]
     */
    private collapseSidebarLeft(value, onHover);
}
