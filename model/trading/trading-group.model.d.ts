/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { VisualOrder } from './order.model';
import { VisualPosition } from './position.model';
export interface TradingItemsGroup {
    items: VisualTradingItem[];
    groupPrice: number;
    visible?: boolean;
}
export type VisualTradingItem = VisualOrder | VisualPosition;
