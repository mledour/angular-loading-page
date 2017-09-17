import { OnInit } from '@angular/core';
import { BoxContentDirective, BoxFooterDirective, BoxTitleDirective } from './box.directive';
export declare class InfoBoxComponent implements OnInit {
    progressBarBg: string;
    progress: number;
    iconClasses: string;
    lteTitle: string;
    background: string;
    iconBackground: string;
    boxTitleDirective: BoxTitleDirective;
    boxFooterDirective: BoxFooterDirective;
    boxContentDirective: BoxContentDirective;
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
}
