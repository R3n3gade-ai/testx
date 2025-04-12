/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
declare const RightClickMenuReorderTypes: {
    readonly bringToFront: "bringToFront";
    readonly sendToBack: "sendToBack";
    readonly moveTo: "moveTo";
    readonly bringForward: "bringForward";
    readonly sendBackward: "sendBackward";
};
export type ReorderType = (typeof RightClickMenuReorderTypes)[keyof typeof RightClickMenuReorderTypes];
export interface RightClickMenuReorderBtnsProps {
    readonly onReorder: (value: ReorderType, uuid: string) => void;
    readonly showAdditionalBtns?: boolean;
    readonly uuid?: string;
}
export declare const RightClickMenuReorderButtons: React.NamedExoticComponent<RightClickMenuReorderBtnsProps>;
export {};
