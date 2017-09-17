import { OnInit } from "@angular/core";
import { RoutingService } from '../routing.service';
export declare class BreadcrumbsComponent implements OnInit {
    private routingService;
    breadcrumbs: any;
    /**
     * @method constructor
     * @param  {RoutingService} privateroutingService [description]
     */
    constructor(routingService: RoutingService);
    /**
     * @method ngOnInit
     */
    ngOnInit(): void;
}
