import { OnInit } from '@angular/core';
export declare class AlertComponent implements OnInit {
    removed: boolean;
    alertType: string;
    type: string;
    dismissible: boolean;
    dismissOnTimeout: number;
    remove: boolean;
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
