/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ProtectionOrderType } from '../../../model/trading/order.model';
import { VisualPosition } from '../../../model/trading/position.model';
export interface PositionProps {
    readonly position: VisualPosition;
    readonly onSelect?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onDeselect?: (id: string) => void;
    readonly onClose?: (id: string) => void;
    readonly onCreateOcoOrders?: () => void;
    readonly createProtectionOrder?: (type: ProtectionOrderType, originalId: string) => void;
    readonly horizontalLineWidth: number;
    readonly halfOrderHeight: number;
    readonly isLineVisible?: boolean;
    readonly currency: string;
    readonly y: number;
    readonly takeProfitStopLossEnabled?: boolean;
}
export type PositionPropsAlt = Omit<PositionProps, 'y' | 'horizontalLineWidth'>;
export declare const Position: React.MemoExoticComponent<(props: PositionProps) => React.JSX.Element>;
export declare const PositionAlt: React.MemoExoticComponent<(props: PositionPropsAlt) => React.JSX.Element>;
