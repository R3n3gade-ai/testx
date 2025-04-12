/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactSettings } from '../../model/chart.model';
import { OrderId, ProtectionOrderType, VisualOrder } from '../../model/trading/order.model';
import { OnPBounds } from '../../view-models/trading/trading.view-model';
import { Position as PositionModel, VisualPosition } from '../../model/trading/position.model';
import { TradingItemsGroup } from '../../model/trading/trading-group.model';
export interface OrderAndPositionsProps {
    readonly yToPrice: (y: number) => number;
    readonly priceToY: (p: number) => number;
    readonly removeOrder: (id: string) => void;
    readonly selectTradingItem: (id: string) => void;
    readonly deselectTradingItem: () => void;
    readonly removePosition: (id: string) => void;
    readonly onOrderDragStart: () => void;
    readonly onOrderDrag: (id: string, y: number) => void;
    readonly onDragStartFromGroup: (id: string) => void;
    readonly updateOrderPosition: (id: string, y: number) => void;
    readonly createProtectionOrder: (type: ProtectionOrderType, originalId: string) => void;
    readonly onGroupItemSelect: (id: string) => void;
    readonly onOrderDblClick: (id: string) => void;
    readonly onOrderClick: (id: string) => void;
    readonly onPositionClick: (id: string) => void;
    readonly onPositionDblClick: (id: string) => void;
    readonly onCreateOcoOrders: (orderId: OrderId) => void;
    readonly onClosePositionsWithOcoOrders: (positionId: PositionModel['id']) => void;
    readonly resizer: {
        readonly visible: boolean;
        readonly rightOffset: number;
        readonly canvasHeight: number;
    };
    onResizerDrag: (posX: number) => void;
    onResizerDragEnd: (posX: number) => void;
    onResizerHover: () => void;
    readonly orderHeight: number;
    readonly currency: string;
    readonly takeProfitStopLossEnabled: boolean;
    readonly showPriceAsLabels: boolean;
    readonly chartWidth: number;
    readonly ordersBounds: OnPBounds;
    readonly isDragging: boolean;
    readonly tradingSettings: ChartReactSettings['trading'];
    readonly editableItemsPresented: boolean;
    readonly visibleOrders: VisualOrder[];
    readonly visiblePositions: VisualPosition[];
    readonly visibleGroups: TradingItemsGroup[];
}
export declare const OrderAndPositions: React.NamedExoticComponent<OrderAndPositionsProps>;
export default OrderAndPositions;
