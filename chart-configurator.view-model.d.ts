/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { PriceAxisType } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Lens } from 'monocle-ts';
import { Observable, Subject } from 'rxjs';
import { Localization } from '../../config/localization/localization';
import { Sink } from '../../context/sink2';
import { CandleAlignment, PriceType } from '../../providers/chart-data-provider';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { AggregationViewportStrategy, ChartReactSettings, ChartSettings, InstrumentViewportStrategy, TimeframeChangeStrategy } from '../model/chart.model';
import { MultiChartViewModel } from './multi-chart.view-model';
import { ChartDataViewModel } from './data/chart-data.view-model';
import { NotificationViewModel } from './notification.view-model';
import { ActionsHistoryVM } from './actions/actions-history.vm';
import { AggregationPeriodViewModel } from './aggregation-period.view-model';
import { UnsubscribeCallback } from './api/chart-react-api.view-model';
import { ChartTypeViewModel } from './chart-type.view-model';
import { ThemeViewModel } from './theme.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
import { FullChartCoreConfig } from '../../config/chart-config';
export interface ChartConfiguratorViewModelState {
    readonly isOpened: boolean;
    readonly activeTab: number;
    readonly settings: ChartSettings;
}
export interface ChartConfigurationChartModel {
    readonly axisTypeSetSubject: Subject<PriceAxisType>;
}
export interface ChartConfiguratorViewModel {
    readonly defaultConfig: ChartSettings;
    readonly state: Property<ChartConfiguratorViewModelState>;
    readonly setConfig: (settings: ChartSettings, undoable?: boolean) => void;
    readonly isOpened$: Observable<boolean>;
    readonly config: Property<ChartSettings>;
    readonly activeTab$: Observable<number>;
    readonly onOpen: () => void;
    readonly onClose: () => void;
    readonly onToggle: (isOpened: boolean) => void;
    readonly onTabActivate: (index: number) => void;
    readonly onRestoreDefaultConfig: () => void;
    readonly onRestoreDefaultConfigTab: (defaultTabConfig: ChartSettings) => void;
    readonly togglePaddings: (active: boolean) => void;
    readonly toggleVolumesMode: (areVolumesSeparate: boolean) => void;
    readonly toggleVolumesVisible: (visible: boolean) => void;
    readonly setVolumesEnabled: (enable: boolean) => void;
    readonly toggleSessionBreaks: (active: boolean) => void;
    readonly toggleExtendedHours: (active: boolean) => void;
    readonly setRTLMode: (value: boolean) => void;
    readonly switchAxisButtonsTopMargin: Observable<number>;
    readonly sessionBreaksDisabled: Property<boolean>;
    readonly tradingAllowed: Property<boolean>;
    readonly setSettingsByPath: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly observeBounds$: Observable<Bounds>;
    readonly setPriceType: (priceType: PriceType) => void;
    readonly setCandlesAlignment: (priceType: CandleAlignment) => void;
    /**
     * @deprecated deprecated, will be removed in v6, use viewportStrategy instead
     */
    readonly setAggregationTimeframeChangeStrategy: (strategy: TimeframeChangeStrategy) => void;
    /**
     * @deprecated deprecated, will be removed in v6, use viewportStrategy instead
     */
    readonly setInstrumentTimeframeChangeStrategy: (strategy: TimeframeChangeStrategy) => void;
    readonly setAggregationViewportStrategy: (strategy: AggregationViewportStrategy) => void;
    readonly setInstrumentViewportStrategy: (strategy: InstrumentViewportStrategy) => void;
    readonly setApplyPeriodUponCreation: (apply: boolean) => void;
    readonly onChartSettingsChanged: (cb: (chartId: string, settings: ChartSettings) => void) => UnsubscribeCallback;
    readonly setTradingBoundaries: (val: {
        min?: number;
        max?: number;
    }) => void;
}
export declare const chartSettingsLens: import("monocle-ts").LensFromPath<ChartSettings>;
export declare const createChartConfiguratorViewModel: import("../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartConfig", FullChartCoreConfig> & Record<"themeViewModel", ThemeViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"notificationVM", NotificationViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig> & Record<"initialChartReactSettings", ChartReactSettings> & Record<"initialChartSettings", ChartSettings> & Record<"chartId", string>, Sink<ChartConfiguratorViewModel>>;
