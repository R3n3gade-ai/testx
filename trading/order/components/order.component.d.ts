/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { OrderSide, VisualOrderProps } from '../../../../model/trading/order.model';
export interface OrderProps extends Readonly<VisualOrderProps> {
    readonly side: OrderSide;
    readonly className?: string;
    readonly children?: ReactNode;
    readonly absoluteChildren?: ReactNode;
    readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    readonly onDblClick?: () => void;
    readonly onSelect?: () => void;
    readonly onClose?: () => void;
    readonly onDeselect?: () => void;
    readonly withDeselectBtn?: boolean;
    readonly withCloseBtn?: boolean;
    readonly testId?: string;
    readonly data?: Record<string, string>;
    readonly canCreateOCO?: boolean;
    readonly onCreateOcoOrders?: () => void;
}
export declare const Order: React.MemoExoticComponent<(props: OrderProps) => React.JSX.Element>;
