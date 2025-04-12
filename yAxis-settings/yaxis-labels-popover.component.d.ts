/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LabelMode, LabelType, YAxisLabelConfig } from '../../view-models/y-axis/y-axis-configurator.view-model';
import { Localization } from '../../../config/localization/localization';
import { PopoverAlign, PopoverPosition } from '../../../chart-kit/Popover/Popover.model';
import { YAxisRCMenuState } from '../../view-models/y-axis/y-axis-menu.vm';
import { YAxisLabelMode } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
export interface YAxisConfiguratorLabelsPopoverProps {
    readonly isOpened: boolean;
    readonly showMainScaleLabels: boolean;
    readonly onClose: () => void;
    readonly labelsConfig: YAxisLabelConfig;
    readonly labelsMenuState: YAxisRCMenuState['labels'];
    readonly changeLabelMode: (type: LabelType, mode: LabelMode) => void;
    readonly selectDescription: (value: boolean) => void;
    readonly setStudiesLabelMode: (studies: YAxisLabelMode) => void;
    readonly selectCountDownBarClose: (value: boolean) => void;
    readonly yAxisDict: Localization['yAxis'];
    readonly position: PopoverPosition;
    readonly align: PopoverAlign;
    readonly labelsPopoverRef: ReactRef;
    readonly selectorRef?: ReactRef;
}
export declare const YAxisLabelsPopover: React.NamedExoticComponent<YAxisConfiguratorLabelsPopoverProps>;
