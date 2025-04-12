/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ExecutedOrder } from '../../chart/model/executed-orders.model';
import { Order, OrderId, OrderWithId } from '../../chart/model/trading/order.model';
export interface OrderProvider {
    /**
     * Observes the order lines updates.
     * We expect to be the full list of orders - no partial updates, for now the full list will be replaced.
     * @param symbol
     * @param dataCallback
     */
    observeOrders(symbol: string, dataCallback: (orders: OrderWithId[]) => void): void;
    /**
     * Observes the executed orders.
     * We expect to be the full list of executed orders - no partial updates, for now the full list will be replaced.
     * @param symbol
     * @param dataCallback
     */
    observeExecutedOrders(symbol: string, dataCallback: (orders: ExecutedOrder[]) => void): void;
    /**
     * Creates new order
     * We expect creating "id" for order inside this method
     * If you create protection order, please don't forget to link it to original order by "protectionOrderIds" field
     * @param symbol
     * @param order
     */
    createOrder(symbol: string, order: Order): Promise<OrderId>;
    /**
     * Creates new OCO orders
     * We expect creating "ids" for the orders inside this method
     * TODO: right now OCO orders is not fully supported by chart, so instead of orders will be passed [undefined, undefined]
     * @param symbol - current instrument's symbol
     * @param parentOrderId - id of the order from which OCO orders will be created
     * @param orders - array of two orders, which will be created as OCO orders
     */
    createOcoOrders(symbol: string, parentOrderId: OrderId, orders: [Order | undefined, Order | undefined]): Promise<[OrderId, OrderId]>;
    /**
     * Updates single order
     * @param symbol
     * @param order
     */
    updateOrder(symbol: string, order: OrderWithId): Promise<void>;
    /**
     * Deletes single order
     * Please, take a look at "protectionOrdersIds" field: if order with type "original" order was deleted, protection orders should be deleted too.
     * @param symbol
     * @param order
     */
    deleteOrder(symbol: string, order: OrderWithId): Promise<void>;
}
