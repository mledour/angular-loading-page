import { OnInit, ElementRef, TemplateRef } from '@angular/core';
export declare class DropdownToogleComponent {
    templateRef: TemplateRef<any>;
}
export declare class DropdownMenuComponent {
    templateRef: TemplateRef<any>;
}
export declare class DropdownComponent implements OnInit {
    private elementRef;
    isCollapsed: boolean;
    private customTag;
    toogle: string;
    toogleTag: string;
    buttonClass: string;
    dropdownClass: string;
    dropdownToogleComponent: DropdownToogleComponent;
    dropdownMenuComponent: DropdownMenuComponent;
    toggleElement: any;
    /**
     * @method constructor
     * @param  {ElementRef} privateelementRef [description]
     */
    constructor(elementRef: ElementRef);
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [toggle description]
     * @method toggle
     * @param  {[type]} event [description]
     */
    toggle(event: any): void;
    /**
     * [onClickDocument description]
     * @method onClickDocument
     * @param  {[type]}        event [description]
     */
    onClickDocument(event: any): void;
}
