import { OnInit } from '@angular/core';
import { BoxContentDirective, BoxFooterDirective, BoxTitleDirective } from './box.directive';
export declare class BoxComponent implements OnInit {
    removed: boolean;
    lteTitle: string;
    contentId: string;
    footerId: string;
    collapsable: boolean;
    collapsed: boolean;
    removable: boolean;
    remove: boolean;
    border: boolean;
    solid: boolean;
    buttonsClasses: string;
    loading: boolean;
    loadingClasses: string;
    contentClasses: string;
    footerClasses: string;
    background: string;
    boxTitleDirective: BoxTitleDirective;
    boxFooterDirective: BoxFooterDirective;
    boxContentDirective: BoxContentDirective;
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [removedDone description]
     * @method removedDone
     * @param  {[type]}    event [description]
     */
    removedDone(event: any): void;
}
