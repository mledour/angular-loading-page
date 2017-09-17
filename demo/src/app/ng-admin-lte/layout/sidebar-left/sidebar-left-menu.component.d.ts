import { EventEmitter, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';
import { LayoutStore } from '../layout.store';
import { LayoutService } from '../layout.service';
export declare class SidebarLeftMenuComponent implements OnInit {
    private elementRef;
    private changeDetectorRef;
    private router;
    private layoutStore;
    private layoutService;
    heightStyle: string | number;
    isCollapsed: boolean;
    isActive: boolean;
    private isSidebarLeftCollapsed;
    item: any;
    parent: boolean;
    showItemBSubject: BehaviorSubject<any>;
    collapseDone: EventEmitter<any>;
    readonly classActive: boolean;
    readonly classMenuOpen: boolean;
    readonly classTreeview: boolean;
    readonly classHeader: boolean;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, router: Router, layoutStore: LayoutStore, layoutService: LayoutService);
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [toggleActiveLink description]
     * @method toggleActiveLink
     * @param  {[type]}         event [description]
     */
    toggleActiveLink(event: any): void;
    /**
     * [visibilityStateDone description]
     * @method visibilityStateDone
     * @param  {[type]}            event [description]
     */
    visibilityStateDone(event: any): void;
    /**
     * [getIconClasses description]
     * @method getIconClasses
     * @param  {[type]}       item [description]
     * @return {string}            [description]
     */
    getIconClasses(item: any): string;
}
