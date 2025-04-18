/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TradingItemsGroup, VisualTradingItem } from '../../model/trading/trading-group.model';
/**
 * Creates groups from trading items.
 * Current algorithm requires the distance between items - for grouping predicate.
 * @param ordersAndPositions
 * @param orderHeight
 * @param marketPrice
 */
export declare function groupTradingItems(ordersAndPositions: Record<string, VisualTradingItem>, orderHeight: number, marketPrice: number): Record<string, TradingItemsGroup>;
