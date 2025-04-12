/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FitType } from '@devexperts/dxcharts-lite/dist/chart/bootstrap';
import { YAxisAlign, YAxisLabels } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { PartialExcept } from '@devexperts/dxcharts-lite/dist/chart/utils/types.utils';
import { Sink } from '../../../context/sink2';
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { AllYAxisLabelType, ChartSettings } from '../../model/chart.model';
import { ActionsHistoryVM } from '../actions/actions-history.vm';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { FullChartCoreConfig } from '../../../config/chart-config';
import { YExtentComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/extent/y-extent-component';
export type YAxisLabelList = PartialExcept<Record<AllYAxisLabelType, LabelMode>, 'lastPrice'>;
export interface YAxisLabelConfig {
    labels: YAxisLabelList;
    countDownToBarClose: boolean;
}
export type LabelMode = 'none' | 'line' | 'label' | 'line-label';
export type LabelType = keyof YAxisLabelConfig['labels'];
export interface YAxisConfiguratorViewModel {
    readonly labelsConfig: Property<YAxisLabelConfig>;
    readonly setYAxisAlign: (value: {
        scale: YExtentComponent;
        align: YAxisAlign;
    }) => void;
    readonly changeLabelMode: (type: LabelType, mode: LabelMode) => void;
    readonly setCountDownBarClose: (active: boolean) => void;
    readonly setPriceAxisFitType: (type: FitType, active: boolean) => void;
}
export declare const createYAxisConfiguratorViewModel: import("../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"initialGeneralSettings", ChartSettings> & Record<"chartConfig", FullChartCoreConfig>, Sink<YAxisConfiguratorViewModel>>;
export declare function fromCoreChartSettingsToLocalLabelsConfig(chartSettings: ChartSettings, chartCoreYAxisLabelsConfig: YAxisLabels): YAxisLabelConfig;
