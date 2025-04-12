/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FitType } from '@devexperts/dxcharts-lite/dist/chart/bootstrap';
import { YAxisAlign, YAxisLabelMode } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { PriceAxisType } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import React from 'react';
import { Localization } from '../../../config/localization/localization';
import { LabelMode, LabelType, YAxisLabelConfig } from '../../view-models/y-axis/y-axis-configurator.view-model';
import { RCMenuProps } from '../../../chart-kit/Popover/popover-menu-generic';
import { YAxisRCMenuState } from '../../view-models/y-axis/y-axis-menu.vm';
import { ChartSettings } from '../../model/chart.model';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
export interface YAxisConfiguratorPopoverProps extends Omit<RCMenuProps, 'position' | 'isOpened'> {
    readonly config: ChartSettings;
    readonly isOpened: boolean;
    readonly position: Point;
    readonly menuState: YAxisRCMenuState;
    readonly setFitType: (type: FitType, active: boolean) => void;
    readonly setAutoScale: (active: boolean) => void;
    readonly setAxisType: (type: PriceAxisType) => void;
    readonly yAxisDict: Localization['yAxis'];
    readonly togglePriceScaleInverse: () => void;
    readonly setAxisAlign: (align: YAxisAlign) => void;
    readonly setLockPriceToBarRatio: (value: boolean) => void;
    readonly labelsConfig: YAxisLabelConfig;
    readonly setLabelMode: (type: LabelType, mode: LabelMode) => void;
    readonly selectCountDownBarClose: (value: boolean) => void;
    readonly selectDescription: (value: boolean) => void;
    readonly setStudiesLabelMode: (studies: YAxisLabelMode) => void;
}
declare const YAxisConfiguratorPopover: React.NamedExoticComponent<YAxisConfiguratorPopoverProps>;
export default YAxisConfiguratorPopover;
