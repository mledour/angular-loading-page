import { OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LayoutStore } from '../layout.store';
import { LayoutService } from '../layout.service';
import { RoutingService } from '../../routing.service';
export declare class ContentComponent implements OnInit, AfterViewInit {
    private layoutStore;
    private layoutService;
    private routingService;
    private titleService;
    description: string;
    header: string;
    heightStyle: number;
    sidebarLeftHeight: number;
    sidebarRightHeight: number;
    windowInnerHeight: number;
    private layout;
    private titleTag;
    constructor(layoutStore: LayoutStore, layoutService: LayoutService, routingService: RoutingService, titleService: Title);
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [ngAfterViewInit description]
     * @method ngAfterViewInit
     */
    ngAfterViewInit(): void;
    /**
     * [getTitle description]
     * @method getTitle
     * @param  {string} title [description]
     * @return {string}       [description]
     */
    private getTitle(title);
    /**
     * [setMinHeight description]
     * @method setMinHeight
     */
    private setMinHeight();
}
