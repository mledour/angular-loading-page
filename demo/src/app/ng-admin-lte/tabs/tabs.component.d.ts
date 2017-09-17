import { OnInit, EventEmitter, QueryList, TemplateRef } from '@angular/core';
export declare class TabTitleComponent {
    templateRef: TemplateRef<any>;
}
export declare class TabContentComponent {
    templateRef: TemplateRef<any>;
}
export declare class TabComponent implements OnInit {
    private contentTemplateRef;
    lteTitle: string;
    disabled: boolean;
    active: boolean;
    onShow: EventEmitter<{}>;
    onHide: EventEmitter<{}>;
    templateRef: TemplateRef<any>;
    tabTitleComponent: TabTitleComponent;
    tabContentComponent: TabContentComponent;
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    ngOnInit(): void;
}
export declare class TabsHeaderComponent {
    templateRef: TemplateRef<any>;
}
export declare class TabsComponent {
    lteId: string | number;
    header: string;
    wrapperClass: string;
    headerClass: string;
    navClass: string;
    contentClass: string;
    tabsHeaderComponent: TabsHeaderComponent;
    tabs: QueryList<TabComponent>;
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [toggleTab description]
     * @method toggleTab
     * @param  {[type]}  event [description]
     * @param  {[type]}  tab   [description]
     */
    toggleTab(event: any, tab: any): void;
}
