/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartLayersContentProps } from './chart-layers-content.component';
import { Bounds, PopoverCoordinates } from '../../../../chart-kit/Popover/Popover.model';
export interface ChartLayersPopoverProps extends ChartLayersContentProps {
    readonly bounds: Bounds;
    readonly anchorRef: React.RefObject<HTMLButtonElement>;
    readonly isOpened: boolean;
    readonly updatePopoverCustomPosition?: (position: PopoverCoordinates) => void;
    readonly customPosition: PopoverCoordinates;
}
export declare const ChartLayersPopover: React.NamedExoticComponent<ChartLayersPopoverProps>;
export default ChartLayersPopover;
