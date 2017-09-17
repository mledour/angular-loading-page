import { OnInit, QueryList, TemplateRef } from '@angular/core';
export declare class AccordionTitleComponent {
    templateRef: TemplateRef<any>;
}
export declare class AccordionContentComponent {
    templateRef: TemplateRef<any>;
}
export declare class AccordionComponent implements OnInit {
    contentTemplateRef: TemplateRef<AccordionContentComponent>;
    lteTitle: string;
    active: boolean;
    accordionTitleComponent: AccordionTitleComponent;
    accordionContentComponent: AccordionContentComponent;
    templateRef: TemplateRef<any>;
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
}
export declare class AccordionGroupComponent {
    lteId: string | number;
    accordionComponents: QueryList<AccordionComponent>;
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
    /**
     * [toggleAccordion description]
     * @method toggleAccordion
     * @param  {[type]}        event     [description]
     * @param  {[type]}        accordion [description]
     */
    toggleAccordion(event: any, accordion: any): void;
}
