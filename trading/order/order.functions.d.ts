/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ProtectionOrderType, OrderType, Order } from '../../../model/trading/order.model';
import { DraggableEvent } from 'react-draggable';
export declare const getRegularOrderName: (type: OrderType) => "LMT" | "MKT" | "STP";
export declare const getProtectionOrderName: (type: ProtectionOrderType) => "Stop Loss" | "Take Profit";
export declare const getOrderName: (order: Order) => "LMT" | "MKT" | "STP" | "Stop Loss" | "Take Profit";
export declare const skipSelectOrder: (e: DraggableEvent, value: boolean) => void;
export declare const isSelectSkippable: (e: DraggableEvent) => any;
export declare const renderSLTPShortcutSection: (isSLLinked: boolean, isTPLinked: boolean) => string;
