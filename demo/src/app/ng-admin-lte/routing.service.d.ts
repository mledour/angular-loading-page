import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';
export interface Path {
    data: Object;
    params: Object;
    url: string;
}
export interface Paths extends Array<Path> {
}
export declare class RoutingService {
    private router;
    onChange: BehaviorSubject<Paths>;
    /**
     * @method constructor
     * @param  {Router}    privaterouter [description]
     */
    constructor(router: Router);
    /**
     * [init description]
     * @method init
     */
    private init();
    /**
     * [createBreadcrumb description]
     * @method createBreadcrumb
     * @param  {ActivatedRouteSnapshot} route [description]
     * @param  {string}                 url   [description]
     * @return {Breadcrumb}                   [description]
     */
    private createBreadcrumb(route, url);
    /**
     * [createUrl description]
     * @method createUrl
     * @param  {ActivatedRouteSnapshot} route [description]
     * @return {string}                       [description]
     */
    private createUrl(route);
}
