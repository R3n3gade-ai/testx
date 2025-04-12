/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const CreateEffects: import("../../../context/context2").Context<Record<"aggregationPeriodViewModel", import("../aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"timeFrameViewModel", import("../timeframe.view-model").TimeFrameViewModel> & Record<"chartConfiguratorViewModel", import("../chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartDataViewModel", import("../data/chart-data.view-model").ChartDataViewModel> & Record<"timeframePresetsViewModel", import("../timeframe-presets.view-model").TimeframePresetsViewModel> & Record<"multiChartViewModel", import("../multi-chart.view-model").MultiChartViewModel> & Record<"chartReactConfig", import("../../../config/chart-react-config").ChartReactConfig> & Record<"chartTypeViewModel", import("../chart-type.view-model").ChartTypeViewModel> & Record<"notificationVM", import("../notification.view-model").NotificationViewModel> & Record<"drawingViewModel", import("../drawings/drawing.view-model").ChartDrawingViewModel> & Record<"chartId", string>, import("rxjs").Observable<boolean | void | import("../../../providers/chart-data-provider").ChartCandleData[] | import("../timeframe.view-model").TimeFrame | {
    start: number;
    end: number;
} | import("@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component").Point | {
    start: number;
    end: number;
} | [[import("../../model/aggregation.model").AggregationPeriod, import("../../model/aggregation.model").AggregationPeriod], import("../timeframe.view-model").TimeFrame] | [import("../../model/aggregation.model").AggregationPeriod, void]>>;
