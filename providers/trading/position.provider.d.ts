/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Order, OrderId } from '../../chart/model/trading/order.model';
import { Position } from '../../chart/model/trading/position.model';
export interface PositionProvider {
    observePositions(symbol: string, dataCallback: (positions: Position[]) => void): void;
    closePosition(symbol: string, id: string): Promise<void>;
    /**
     * Closes position with new OCO orders
     * We expect creating "ids" for the orders inside this method
     * TODO: right now OCO orders is not fully supported by chart, so instead of orders will be passed [undefined, undefined]
     * @param symbol - current instrument's symbol
     * @param parentOrderId - id of the position from which OCO orders will be created
     * @param orders - array of two orders, which will be created as OCO orders
     */
    closePositionWithOcoOrders(symbol: string, parentPositionId: Position['id'], orders: [Order | undefined, Order | undefined]): Promise<[OrderId, OrderId]>;
}
