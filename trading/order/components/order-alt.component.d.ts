/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { OrderProps } from './order.component';
export interface OrderAltProps extends Omit<OrderProps, 'y'> {
    onDragStart?: () => void;
}
export declare const OrderAlt: React.MemoExoticComponent<(props: OrderAltProps) => React.JSX.Element>;
