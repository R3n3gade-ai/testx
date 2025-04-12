/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ProtectionOrderType, VisualOrder } from '../../../model/trading/order.model';
export interface RegularOrderProps {
    readonly order: VisualOrder;
    readonly className?: string;
    readonly onSelect?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onDeselect?: (id: string) => void;
    readonly onClose?: (id: string) => void;
    readonly onDragStart?: (id: string) => void;
    readonly createProtectionOrder?: (type: ProtectionOrderType, originalId: string) => void;
    readonly takeProfitStopLossEnabled?: boolean;
    readonly showPriceAsLabels?: boolean;
    readonly horizontalLineWidth: number;
    readonly isLineVisible?: boolean;
    readonly onCreateOcoOrders?: () => void;
}
export interface RegularOrderAltProps extends Omit<RegularOrderProps, 'horizontalLineWidth' | 'createProtectionOrder' | 'isLineVisible'> {
}
export declare const RegularOrder: React.MemoExoticComponent<(props: RegularOrderProps) => React.JSX.Element>;
export declare const RegularOrderAlt: React.MemoExoticComponent<(props: RegularOrderAltProps) => React.JSX.Element>;
