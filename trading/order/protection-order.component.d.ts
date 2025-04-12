/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { VisualOrder } from '../../../model/trading/order.model';
export interface ProtectionOrderProps {
    readonly order: VisualOrder;
    readonly className?: string;
    readonly onSelect?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onDeselect?: (id: string) => void;
    readonly onClose?: (id: string) => void;
    readonly onDragStart?: (id: string) => void;
    readonly showPriceAsLabels?: boolean;
    readonly horizontalLineWidth: number;
    readonly isLineVisible?: boolean;
}
export interface ProtectionOrderAltProps extends Omit<ProtectionOrderProps, 'y' | 'horizontalLineWidth'> {
}
export declare const ProtectionOrder: React.MemoExoticComponent<(props: ProtectionOrderProps) => React.JSX.Element>;
export declare const ProtectionOrderAlt: React.MemoExoticComponent<(props: ProtectionOrderAltProps) => React.JSX.Element>;
