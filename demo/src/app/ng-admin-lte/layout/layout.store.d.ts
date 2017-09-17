import { Observable } from "rxjs/Rx";
import { LayoutState } from './layout.state';
export declare class LayoutStore {
    private _layoutState;
    private initialLayoutState;
    /**
     * @method constructor
     * @param  {[type]}    @Optional( [description]
     */
    constructor(layoutConfig: LayoutState);
    /**
     * [uiState description]
     * @return {Observable<LayoutState>} [description]
     */
    readonly uiState: Observable<LayoutState>;
    /**
     * [windowHeight description]
     * @method windowHeight
     * @return {Observable<number>} [description]
     */
    readonly windowInnerHeight: Observable<number>;
    /**
     * [isSidebarLeftCollapsed description]
     * @return {Observable<boolean>} [description]
     */
    readonly isSidebarLeftCollapsed: Observable<boolean>;
    /**
     * [isSidebarLeftExpandOnOver description]
     * @method isSidebarLeftExpandOnOver
     * @return {Observable<boolean>}     [description]
     */
    readonly isSidebarLeftExpandOnOver: Observable<boolean>;
    /**
     * [isSidebarLeftMouseOver description]
     * @method isSidebarLeftMouseOver
     * @return {Observable<boolean>}  [description]
     */
    readonly isSidebarLeftMouseOver: Observable<boolean>;
    /**
     * [isSidebarLeftMini description]
     * @method isSidebarLeftMini
     * @return {Observable<boolean>} [description]
     */
    readonly isSidebarLeftMini: Observable<boolean>;
    /**
     * [sidebarRightSkin description]
     * @method sidebarRightSkin
     * @return {Observable<string>} [description]
     */
    readonly sidebarRightSkin: Observable<string>;
    /**
     * [isSidebarRightCollapsed description]
     * @return {Observable<boolean>} [description]
     */
    readonly isSidebarRightCollapsed: Observable<boolean>;
    /**
     * [isSidebarRightOverContent description]
     * @method isSidebarRightOverContent
     * @return {Observable<boolean>}     [description]
     */
    readonly isSidebarRightOverContent: Observable<boolean>;
    /**
     * [sidebarLeftMenu description]
     * @method sidebarLeftMenu
     * @return {Observable}    [description]
     */
    readonly sidebarLeftMenu: Observable<Array<any>>;
    /**
     * [sidebarLeftElementHeight description]
     * @method sidebarLeftElementHeight
     * @return {Observable<boolean>}    [description]
     */
    readonly sidebarLeftElementHeight: Observable<number>;
    /**
     * [sidebarRightElementHeight description]
     * @method sidebarRightElementHeight
     * @return {Observable<number>}      [description]
     */
    readonly sidebarRightElementHeight: Observable<number>;
    /**
     * [layoutType description]
     * @method layoutType
     * @return {Observable<boolean>} [description]
     */
    readonly layout: Observable<string>;
    /**
     * [skin description]
     * @method skin
     * @return {Observable<boolean>} [description]
     */
    readonly skin: Observable<string>;
    /**
     * [wrapperClasses description]
     * @method wrapperClasses
     * @return {Observable<string>} [description]
     */
    readonly wrapperClasses: Observable<string>;
    /**
     * [toogleSidebarLeft description]
     */
    sidebarLeftCollapsed(value?: boolean): void;
    /**
     * [sidebarLeftExpandOnOver description]
     * @method sidebarLeftExpandOnOver
     * @param  {boolean}               value [description]
     */
    sidebarLeftExpandOnOver(value?: boolean): void;
    /**
     * [setSidebarLeftElementHeight description]
     * @method setSidebarLeftElementHeight
     * @param  {number}                    value [description]
     */
    setSidebarLeftElementHeight(value: number): void;
    /**
     * [setSidebarRightSkin description]
     * @method setSidebarRightSkin
     * @param  {string}            value [description]
     */
    setSidebarRightSkin(value?: string): void;
    /**
     * [sidebarLeftMouseOver description]
     * @method sidebarLeftMouseOver
     * @param  {boolean}            value [description]
     */
    sidebarLeftMouseOver(value?: boolean): void;
    /**
     * [sidebarLeftMini description]
     * @method sidebarLeftMini
     * @param  {boolean}       value [description]
     */
    sidebarLeftMini(value?: boolean): void;
    /**
     * [sidebarRightCollapsed description]
     * @method sidebarRightCollapsed
     * @param  {boolean}             value [description]
     */
    sidebarRightCollapsed(value?: boolean): void;
    /**
     * [sidebarRightOverContent description]
     * @method sidebarRightOverContent
     * @param  {boolean}               value [description]
     */
    sidebarRightOverContent(value?: boolean): void;
    /**
     * [setSidebarRightElementHeight description]
     * @method setSidebarRightElementHeight
     * @param  {number}                     value [description]
     */
    setSidebarRightElementHeight(value: number): void;
    /**
     * [setSidebarLeftMenu description]
     * @method setSidebarLeftMenu
     * @param  {string}           value [description]
     */
    setSidebarLeftMenu(value: string): void;
    /**
     * [setLayout description]
     * @method setLayout
     * @param  {string}  value [description]
     */
    setLayout(value: string): void;
    /**
     * [setSkin description]
     * @method setSkin
     * @param  {string} value [description]
     */
    setSkin(value: string): void;
    /**
     * [setWrapperClasses description]
     * @method setWrapperClasses
     * @param  {string}          value [description]
     */
    setWrapperClasses(value: string): void;
    /**
     * [setWindowInnerHeight description]
     * @method setWindowInnerHeight
     * @param  {number}             value [description]
     */
    setWindowInnerHeight(value: number): void;
}
