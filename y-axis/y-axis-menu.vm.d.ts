/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { YAxisAlign, YAxisLabelMode } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { PriceAxisType } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { ActionsHistoryVM } from '../actions/actions-history.vm';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { StudiesSettingsViewModel } from '../studies/studies-settings.view-model';
import { ChartDataViewModel } from '../data/chart-data.view-model';
import { FullChartCoreConfig } from '../../../config/chart-config';
export interface YAxisRCMenuState {
    readonly isMainCandlesMenu: boolean;
    readonly auto: boolean;
    readonly inverse: boolean;
    readonly lockPriceToBarRatio: boolean;
    readonly align: YAxisAlign;
    readonly priceType: PriceAxisType;
    readonly labels: {
        descriptions: boolean;
        ordinaryLabels: {
            studies: YAxisLabelMode;
        };
    };
}
export interface YAxisMenuViewModel {
    readonly position: Property<Point>;
    readonly isOpened: Property<boolean>;
    readonly menuState: Property<YAxisRCMenuState>;
    readonly togglePriceScaleInverse: () => void;
    readonly setYAxisAlign: (align: YAxisAlign) => void;
    readonly setAxisType: (type: PriceAxisType) => void;
    readonly setAutoScale: (auto: boolean) => void;
    readonly setLockPriceToBarRatio: (isLocked: boolean) => void;
    readonly setDescriptions: (descriptions: boolean) => void;
    readonly setStudiesLabelMode: (studies: YAxisLabelMode) => void;
    readonly closeMenu: () => void;
}
export interface SelectedScaleData {
    readonly paneUUID: string;
    readonly idx: number;
}
export declare const createYAxisMenuViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"studiesSettingsViewModel", StudiesSettingsViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartConfig", FullChartCoreConfig>, import("../../../utils/adt/sink.utils").Sink1<"Observable", YAxisMenuViewModel>>;
