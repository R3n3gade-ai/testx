/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { HoveredExecutedOrder } from '@dx-private/dxchart5-modules/dist/executed-orders/model/executed-orders-hit-test.model';
export interface HoveredExecutedOrderComponentProps {
    readonly hoveredExecutedOrder: HoveredExecutedOrder;
    readonly quantityPrecision: number;
}
export declare const HoveredExecutedOrderComponent: React.NamedExoticComponent<HoveredExecutedOrderComponentProps>;
