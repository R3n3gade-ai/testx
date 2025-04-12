/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lens } from 'monocle-ts';
import React from 'react';
import { ChartReactSettings, ChartSettings } from '../../model/chart.model';
import { RCMenuProps } from '../../../chart-kit/Popover/popover-menu-generic';
export interface LegendMenuProps extends RCMenuProps {
    readonly onSettingsChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly settings: ChartReactSettings['legend'];
    readonly chartCoreVolumesVisible: boolean;
}
export declare const LegendMenu: React.NamedExoticComponent<LegendMenuProps>;
