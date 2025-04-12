/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC } from 'react';
import { CKButtonIconProps } from '../../../../../chart-kit/Button/ButtonIcon.component';
import { OrderDelimiterStyledProps } from './order.styled';
export interface CreateOcoOrdersButtonProps extends Omit<CKButtonIconProps, 'icon'> {
    readonly delimiter?: FC<OrderDelimiterStyledProps>;
}
export declare const CreateOcoOrdersButton: React.NamedExoticComponent<CreateOcoOrdersButtonProps>;
export declare const useOcoButtonsTransition: (shown: boolean) => import("@react-spring/core").TransitionFn<boolean, {
    y: number;
    x: number;
    opacity: number;
    width: string;
    display: string;
}>;
