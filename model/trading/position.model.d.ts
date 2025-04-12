/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { StopLossId, TakeProfitId } from './order.model';
export type PositionSide = 'buy' | 'sell';
export interface Position {
    id: string;
    side: 'buy' | 'sell';
    type: 'original';
    quantity: number;
    price: number;
    pl: number;
    canCreateOCO?: boolean;
    protectionOrderIds?: [StopLossId | undefined, TakeProfitId | undefined];
    data?: Record<string, string>;
}
export type VisualPosition = PositionTradingItem & VisualPositionProps;
export interface VisualPositionProps {
    y?: number;
    visible?: boolean;
    readonly marketPrice?: number;
    readonly selected?: boolean;
    readonly disabled?: boolean;
    formatter?: PositionPLFormatter;
}
export interface PositionTradingItem {
    type: 'position';
    model: Position;
}
export type PositionPLFormatter = (v: number, currency: string) => string;
export declare const defaultPositionPLFormatter: PositionPLFormatter;
