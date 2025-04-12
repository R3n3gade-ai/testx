/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { CKButtonWithTooltipProps } from '../../../../chart-kit/Button/ButtonWithTooltip';
export interface DrawingsSidebarButtonWithTooltipProps extends CKButtonWithTooltipProps {
    readonly icon: React.ReactNode;
    readonly label: string;
    readonly expanded: boolean;
}
export declare const DrawingsSidebarButtonWithTooltip: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<DrawingsSidebarButtonWithTooltipProps, "ref"> & React.RefAttributes<HTMLButtonElement>>>;
