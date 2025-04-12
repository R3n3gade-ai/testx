/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartSettings } from '../../model/chart.model';
import { TabDefaultConfig, TabTypeWithIcon } from './chart-settings.model';
import { Lens } from 'monocle-ts';
export interface ChartSettingsProps {
    readonly tabs: TabTypeWithIcon[];
    readonly value: ChartSettings;
    readonly onValueChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly tabsDefaultConfig: TabDefaultConfig[];
    readonly isOpened: boolean;
    readonly onPopoverToggle: (isOpened: boolean) => void;
}
export declare const ChartSettingsComponent: React.MemoExoticComponent<(props: ChartSettingsProps) => React.JSX.Element>;
