/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { YAxisConfiguratorPopoverProps } from './yaxis-configurator-popover.component';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
export interface YAxisConfiguratorPopoverContentProps extends YAxisConfiguratorPopoverProps {
    readonly labelsAndLinesPopoverOpened: boolean;
    readonly toggleLabelsAndLinesPopover: (opened: boolean) => void;
}
export type YAxisAlignReversed = Record<YAxisAlign, YAxisAlign>;
export declare const YAxisConfiguratorPopoverContent: React.NamedExoticComponent<YAxisConfiguratorPopoverContentProps>;
export declare const renderSettingsItem: (settingName: string, active: boolean, icon: JSX.Element, disabled?: boolean, nestedMenuIcon?: JSX.Element) => ReactNode;
